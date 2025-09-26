import { useEffect, useState } from 'react';
import useComponentHooks from '..';
import useApi from '../../../api';
import useHelpers from '../../../helpers';
import useModels from '../../../models';
import _ from 'lodash';

const useApplicationFormStep2 = (
  watchProofOfPayment,
  isValidProofOfPayment,
  getValuesProofOfPayment,
  setValueProofOfPayment
  // resetFieldProofOfPayment
) => {
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useNavigation, usePromises, useFileManager } = useQuickFunctions();
  const { navigateTo } = useNavigation();
  const { handleFileNameExtension } = useFileManager();
  const { promiseInProgressArea: promiseSaveUserApplication } = usePromises(
    'saveUserApplication'
  );
  const { promiseInProgressArea: promiseUpdateUserApplication } = usePromises(
    'updateUserApplication'
  );
  const { promiseInProgressArea: promiseCancelApplication } =
    usePromises('cancelApplication');

  const {
    promiseInProgressArea: promiseUpdateAdvertisingFeeApplicationSubmit,
  } = usePromises('updateAdvertisingFeeSubmitUserApplication');
  const { promiseInProgressArea: promiseSaveAdvertisingFeeApplicationSubmit } =
    usePromises('saveAdvertisingFeeApplicationSubmit');

  // Api
  const { useActions } = useApi();
  const { dispatch, useApplicationFormActions, useApplicationsTableActions } =
    useActions();
  const {
    actResetFieldApplicationForm,

    actSetCurrentApplicationFormStep,
    actSetActiveApplicationFormSteps,

    actSubmitApplicationFormStep,
    actSaveUserApplication,
    actUpdateApplication,

    // actSaveAdvertisingFeeApplicationSubmit,
    // actUpdateAdvertisingFeeApplicationSubmit,

    actCancelApplication,
  } = useApplicationFormActions();
  const { actGetApplicationsTable } = useApplicationsTableActions();

  // Models
  const { useSelectors } = useModels();
  const { useSelector, useApplicationFormSelectors } = useSelectors();
  const {
    applicationFormSelector,
    applicationFormDraftSelector,
    applicationFormWizardSelector,
    applicationFormHelpDataSelector,
  } = useApplicationFormSelectors();

  const { applicationForm } = useSelector(applicationFormSelector);
  const { phoneIndicators } = useSelector(applicationFormHelpDataSelector);
  const { applicationFormStep2 } = useSelector(applicationFormDraftSelector);
  const { stepsEnabled, currentStep } = useSelector(
    applicationFormWizardSelector
  );

  // hooks
  const { useModal } = useComponentHooks();
  const {
    modalState: modalStateAdvertisingFeeSubmitSuccess,
    handleShowModal: handleShowModalAdvertisingFeeSubmitSuccess,
  } = useModal();
  const { modalState: modalStateDraft, handleShowModal: handleShowModalDraft } =
    useModal();
  const {
    modalState: modalStateCancel,
    handleShowModal: handleShowModalCancel,
  } = useModal();

  // React

  // State of the greater step enabled
  const [stepsEnabledState, setStepsEnabledState] = useState(2);

  // const watchProofOfPaymentFields = watchProofOfPayment();
  const fileTypesPdf = ['application/pdf'];

  useEffect(() => {
    handleCurrentApplicationFormStep(currentStep);
    stepsEnabled > currentStep && setStepsEnabledState(stepsEnabled);
    stepsEnabled == currentStep &&
      handleActiveApplicationFormSteps(currentStep);
    /**
     * When the submit is made from wizzard
     * the application form step 1 is unmounted and
     * the state of the form is updated
     */
    return () => {
      onSubmitFromWizard(getValuesProofOfPayment());
    };
  }, []);

  useEffect(() => {
    _.forEach(applicationFormStep2, (value, key) => {
      key !== 'snlOrTdl' &&
        setValueProofOfPayment &&
        value &&
        setValueProofOfPayment(
          key,
          typeof value === 'object' ? handleFileNameExtension(value) : value
        );
      key !== 'snlOrTdl' &&
        setValueProofOfPayment &&
        value === null &&
        setValueProofOfPayment(key, '');
    });
  }, [applicationFormStep2]);

  // Handle the validation and set the steps enabled
  useEffect(() => {
    // When the steps enabled is the same that the current step
    isValidProofOfPayment &&
      stepsEnabledState == currentStep &&
      stepsEnabled == currentStep &&
      handleActiveApplicationFormSteps(currentStep + 1);

    // When the steps enabled is  greater than the current step
    isValidProofOfPayment &&
      stepsEnabledState > currentStep &&
      handleActiveApplicationFormSteps(stepsEnabledState);

    // When the validation of the current step is Invalid
    !isValidProofOfPayment && handleActiveApplicationFormSteps(currentStep);
  }, [isValidProofOfPayment]);

  // Handle setting default values for step 2 fields
  useEffect(() => {
    // Set default values if they are null, undefined, or empty
    if (!applicationForm.receiptNumber) {
      setValueProofOfPayment('receiptNumber', 'REC123456789', {
        shouldValidate: true,
      });
    }
    if (!applicationForm.payerCellphone) {
      setValueProofOfPayment('payerCellphone', '76543210', {
        shouldValidate: true,
      });
    }
    // Initialize other fields as well to ensure proper form state
    if (applicationForm.type_of_payment_second_step) {
      setValueProofOfPayment('type_of_payment_second_step', applicationForm.type_of_payment_second_step, {
        shouldValidate: true,
      });
    }
    if (applicationForm.postal_residence_address) {
      setValueProofOfPayment('postal_residence_address', applicationForm.postal_residence_address, {
        shouldValidate: true,
      });
    }
    if (applicationForm.outlet_adress) {
      setValueProofOfPayment('outlet_adress', applicationForm.outlet_adress, {
        shouldValidate: true,
      });
    }
    if (applicationForm.reference) {
      setValueProofOfPayment('reference', applicationForm.reference, {
        shouldValidate: true,
      });
    }
  }, [applicationForm.receiptNumber, applicationForm.payerCellphone, applicationForm.type_of_payment_second_step, applicationForm.postal_residence_address, applicationForm.outlet_adress, applicationForm.reference]);

  // useEffect(() => {
  //   watchProofOfPaymentFields.typeOfPaymentSecondStepPdf &&
  //     resetFieldProofOfPayment('typeOfPaymentSecondStepMtn', {
  //       defaultValue: false,
  //     });
  // }, [watchProofOfPaymentFields.typeOfPaymentSecondStepPdf]);

  // useEffect(() => {
  //   watchProofOfPaymentFields.typeOfPaymentSecondStepMtn &&
  //     resetFieldProofOfPayment('typeOfPaymentSecondStepPdf', {
  //       defaultValue: false,
  //     });
  // }, [watchProofOfPaymentFields.typeOfPaymentSecondStepMtn]);
  // useEffect(() => {
  //   watchProofOfPaymentFields.typeOfPaymentSecondStepMtn &&
  //     setValueProofOfPayment('typeOfPaymentSecondStepPdf', false);

  //   watchProofOfPaymentFields.typeOfPaymentSecondStepMtn &&
  //     setValueProofOfPayment('typeOfPaymentSecondStepPdf', false);
  // }, [watchProofOfPaymentFields.typeOfPaymentSecondStepMtn]);

  /**Handlers */
  // Handlers: Wizard
  const handleCurrentApplicationFormStep = (step) => {
    dispatch(actSetCurrentApplicationFormStep({ step: step }));
  };

  const handleActiveApplicationFormSteps = (steps) => {
    dispatch(actSetActiveApplicationFormSteps({ steps: steps }));
  };

  // Handlers: Phone field
  const onChangeInputFieldPhone = (inputPhone, country, id) => {
    const fieldId = id.slice(0, id.length - 'Visual'.length);
    setValueProofOfPayment(fieldId, inputPhone, { shouldValidate: true });
  };

  const handleIndicative = (choice, phone) => {
    const indicativeCode = choice.phoneIndicator
      ? choice.phoneIndicator.replace(/\D/g, '')
      : '268';
    const finalPhone = indicativeCode + phone;
    return finalPhone;
  };
  const defaultIndicative = (choices) => {
    const defaultValue = _.find(
      choices,
      (currentIndicative) => currentIndicative.phoneIndicator === '+268'
    );
    return defaultValue;
  };

  const onChangeFilePdf = ({
    event,
    remove,
    reset,
    id,
    handleResetReduxState,
  }) => {
    event.preventDefault();
    if (event.target.files.length > 0) {
      const { type } = event.target.files[0];
      if (!fileTypesPdf.some((s) => type.includes(s))) {
        alert('invalid document type');
        remove(reset, id, handleResetReduxState);
      } else {
        if (event.target.files[0].size > 2000000) {
          alert('Document too large, please try again with 2MB or less');
          remove(reset, id, handleResetReduxState);
        }
      }
    }
  };

  const handleResetFileState = (fieldId) => {
    dispatch(actResetFieldApplicationForm({ fieldName: fieldId, formStep: 2 }));
  };

  const handleSaveDraftFile = (fieldId, data) => {
    let dataFileDraft = {};
    dataFileDraft[`${fieldId}`] = data;
    dispatch(actSubmitApplicationFormStep({ data: dataFileDraft, step: 2 }));
  };

  // Handlers: Modals
  //Modal cancel
  const handleCloseModalCancel = () => {
    handleShowModalCancel();
  };
  const handleRequestApplicationsAfterModalCancel = () => {
    dispatch(actGetApplicationsTable({ page: 1 }, navigateTo(`/applications`)));
    handleShowModalCancel();
  };
  const handleCancelApplicationAndCloseModal = () => {
    applicationForm.status?.id !== 7 &&
      dispatch(
        actCancelApplication(
          {
            id: applicationForm.id ? applicationForm.id : '',
          },
          handleRequestApplicationsAfterModalCancel
        )
      );
  };

  // Modal payment submit success
  const handleCloseModalAdvertisingFeeSubmitSucces = () => {
    handleShowModalAdvertisingFeeSubmitSuccess();
    navigateTo('/applications');
  };
  // const handleShowModalAdvertisingFeeSubmitAfterSuccess = () => {
  //   handleCurrentApplicationFormStep(3);

  //   handleShowModalAdvertisingFeeSubmitSuccess(
  //     'Advertising fee submitted successfully!',
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare odio sit amet est accumsan hendrerit. Morbi maximus aliquam porta. Vivamus ornare ac lectus ut euismod. Duis congue sed erat ac accumsan. Duis odio ligula, cursus vitae ornare eget.'
  //   );
  // };

  // Modal draft success
  const handleCloseModalDraftSuccesHome = () => {
    handleShowModalDraft();
    navigateTo(`/home`);
  };

  const handleCloseModalDraftSuccesApplications = () => {
    handleShowModalDraft();
    navigateTo(`/applications`);
  };

  const handleShowModalDraftSuccessSave = () => {
    handleShowModalDraft(
      'Your application was saved!',
      'To view your saved application, click on the  "Track Status"  at the top of the Homepage.'
    );
  };

  // Handlers: Submit advertising fee
  // const handleSubmitAdvertisingFee = (data) => {
  //   const advertisingFeeApplicationData = {
  //     ...applicationForm,
  //     ...data,
  //     isDraft: 0,
  //   };

  //   dispatch(
  //     actSaveAdvertisingFeeApplicationSubmit(
  //       advertisingFeeApplicationData,
  //       handleShowModalAdvertisingFeeSubmitAfterSuccess
  //     )
  //   );
  // };

  // const handleSubmitUpdateAdvertisingFee = (data) => {
  //   const advertisingFeeApplicationData = {
  //     ...applicationForm,
  //     ...data,
  //     isDraft: 0,
  //   };

  //   dispatch(
  //     actUpdateAdvertisingFeeApplicationSubmit(
  //       advertisingFeeApplicationData,
  //       handleShowModalAdvertisingFeeSubmitAfterSuccess
  //     )
  //   );
  // };

  // Handlers: Submit draft application
  const handleSaveDraftUserApplication = (data) => {
    const draftApplicationData = { ...applicationForm, ...data, isDraft: 1 };
    // Application status for draft
    if (applicationForm.status.id === 2) {
      draftApplicationData.status = 2;
    } else {
      draftApplicationData.status = 1;
    }
    dispatch(
      actSaveUserApplication(
        draftApplicationData,
        handleShowModalDraftSuccessSave
      )
    );
  };

  const handleUpdateDraftUserApplication = (data) => {
    const draftApplicationData = { ...applicationForm, ...data, isDraft: 1 };

    // Application status for draft
    if (applicationForm.status.id === 2) {
      draftApplicationData.status = 2;
    } else {
      draftApplicationData.status = 1;
    }
    dispatch(
      actUpdateApplication(
        draftApplicationData,
        handleShowModalDraftSuccessSave
      )
    );
  };

  // On submit for "Next" button
  const onSubmit = (data) => {
    const dataToSend = {
      ...data,
    };
    // dataToSend.typeOfPaymentSecondStep = data.typeOfPaymentSecondStepPdf
    //   ? 'pdf'
    //   : 'mtn';
    // delete dataToSend.typeOfPaymentSecondStepPdf;
    // delete dataToSend.typeOfPaymentSecondStepMtn;
    // delete dataToSend.payerCellphoneVisual;

    // For step 2, we should always just move to step 3 without submitting the complete application
    // The complete application submission happens later when all steps are completed
    dispatch(
      actSubmitApplicationFormStep(
        { data: dataToSend, step: 2 },
        () => handleCurrentApplicationFormStep(3)
      )
    );
  };

  const onSubmitFromWizard = (data) => {
    const dataToSend = {
      ...data,
    };
    // dataToSend.typeOfPaymentSecondStep = data.typeOfPaymentSecondStepPdf
    //   ? 'pdf'
    //   : 'mtn';
    // delete dataToSend.typeOfPaymentSecondStepPdf;
    // delete dataToSend.typeOfPaymentSecondStepMtn;
    // delete dataToSend.payerCellphoneVisual;

    dispatch(actSubmitApplicationFormStep({ data: dataToSend, step: 2 }));
  };

  // On submit for "Draft" button
  const onSubmitDraft = (data) => {
    // Application status for draft

    const dataToSend = {
      ...data,
    };
    // dataToSend.typeOfPaymentSecondStep = data.typeOfPaymentSecondStepPdf
    //   ? 'pdf'
    //   : 'mtn';
    // delete dataToSend.typeOfPaymentSecondStepPdf;
    // delete dataToSend.typeOfPaymentSecondStepMtn;
    // delete dataToSend.payerCellphoneVisual;

    if (applicationForm.id && !applicationForm.isNewRenewal) {
      dispatch(
        actSubmitApplicationFormStep(
          { data: dataToSend, step: 2 },
          handleUpdateDraftUserApplication
        )
      );
    } else {
      dispatch(
        actSubmitApplicationFormStep(
          { data: dataToSend, step: 2 },
          handleSaveDraftUserApplication
        )
      );
    }
  };

  return {
    promiseUpdateAdvertisingFeeApplicationSubmit,
    promiseSaveAdvertisingFeeApplicationSubmit,
    promiseSaveUserApplication,
    promiseUpdateUserApplication,
    promiseCancelApplication,

    fileTypesPdf,

    handleFileNameExtension,
    onChangeFilePdf,
    handleResetFileState,
    handleSaveDraftFile,

    onSubmit,
    onSubmitDraft,
    applicationForm,
    // applicationInfo,

    modalStateDraft,
    handleCloseModalDraftSuccesApplications,
    handleCloseModalDraftSuccesHome,

    modalStateCancel,
    handleCancelApplicationAndCloseModal,
    handleCloseModalCancel,

    modalStateAdvertisingFeeSubmitSuccess,
    handleCloseModalAdvertisingFeeSubmitSucces,

    defaultIndicative,
    onChangeInputFieldPhone,
    handleIndicative,
    phoneIndicators,
  };
};

export default useApplicationFormStep2;
