import { useEffect, useState } from 'react';
import useComponentHooks from '..';
import useApi from '../../../api';
import useHelpers from '../../../helpers';
import useModels from '../../../models';
import _ from 'lodash';

const useRenewalFormStep2 = (
  watchProofOfPayment,
  isValidProofOfPayment,
  getValuesProofOfPayment,
  setValueProofOfPayment,
  resetFieldProofOfPayment
) => {
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useNavigation, usePromises } = useQuickFunctions();
  const { navigateTo } = useNavigation();
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

    actSaveAdvertisingFeeApplicationSubmit,
    actUpdateAdvertisingFeeApplicationSubmit,

    actCancelApplication,
  } = useApplicationFormActions();
  const { actGetApplicationsTable } = useApplicationsTableActions();

  // Models
  const { useSelectors } = useModels();
  const { useSelector, useApplicationFormSelectors } = useSelectors();
  const {
    applicationFormSelector,
    applicationFormDraftSelector,
    draftBlankPdfSelector,
    applicationFormWizardSelector,
    applicationFormHelpDataSelector,
  } = useApplicationFormSelectors();

  const { applicationForm } = useSelector(applicationFormSelector);
  const { blankPdf } = useSelector(draftBlankPdfSelector);
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

  const watchProofOfPaymentFields = watchProofOfPayment();
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

  useEffect(() => {
    watchProofOfPaymentFields.typeOfPaymentSecondStepPdf &&
      resetFieldProofOfPayment('typeOfPaymentSecondStepMtn', {
        defaultValue: false,
      });
  }, [watchProofOfPaymentFields.typeOfPaymentSecondStepPdf]);

  useEffect(() => {
    watchProofOfPaymentFields.typeOfPaymentSecondStepMtn &&
      resetFieldProofOfPayment('typeOfPaymentSecondStepPdf', {
        defaultValue: false,
      });
  }, [watchProofOfPaymentFields.typeOfPaymentSecondStepMtn]);
  useEffect(() => {
    watchProofOfPaymentFields.typeOfPaymentSecondStepMtn &&
      setValueProofOfPayment('typeOfPaymentSecondStepPdf', false);

    watchProofOfPaymentFields.typeOfPaymentSecondStepMtn &&
      setValueProofOfPayment('typeOfPaymentSecondStepPdf', false);
  }, [watchProofOfPaymentFields.typeOfPaymentSecondStepMtn]);

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

  // Handlers: input file
  const handleFileNameExtension = (fileObject) => {
    const fileObjectWithoutExtension = {
      name: fileObject.name ? fileObject.name?.replace(/\.[^/.]+$/, '') : '',
      data: fileObject.data ? fileObject.data : fileObject.name ? blankPdf : '',
    };
    return fileObjectWithoutExtension;
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
  const handleShowModalAdvertisingFeeSubmitAfterSuccess = () => {
    handleShowModalAdvertisingFeeSubmitSuccess(
      'Advertising fee submitted successfully!',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare odio sit amet est accumsan hendrerit. Morbi maximus aliquam porta. Vivamus ornare ac lectus ut euismod. Duis congue sed erat ac accumsan. Duis odio ligula, cursus vitae ornare eget.'
    );
  };

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
  const handleSubmitAdvertisingFee = (data) => {
    const advertisingFeeApplicationData = { ...applicationForm, ...data };
    dispatch(
      actSaveAdvertisingFeeApplicationSubmit(
        advertisingFeeApplicationData,
        handleShowModalAdvertisingFeeSubmitAfterSuccess
      )
    );
  };

  const handleSubmitUpdateAdvertisingFee = (data) => {
    const advertisingFeeApplicationData = { ...applicationForm, ...data };
    dispatch(
      actUpdateAdvertisingFeeApplicationSubmit(
        advertisingFeeApplicationData,
        handleShowModalAdvertisingFeeSubmitAfterSuccess
      )
    );
  };

  // Handlers: Submit draft application
  const handleSaveDraftUserApplication = (data) => {
    const draftApplicationData = { ...applicationForm, ...data };
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
    const draftApplicationData = { ...applicationForm, ...data };

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
    dataToSend.typeOfPaymentSecondStep = data.typeOfPaymentSecondStepPdf
      ? 'pdf'
      : 'mtn';
    delete dataToSend.typeOfPaymentSecondStepPdf;
    delete dataToSend.typeOfPaymentSecondStepMtn;
    delete dataToSend.payerCellphoneVisual;

    if (applicationForm.status.id > 1 && applicationForm.status.id < 10) {
      dispatch(
        actSubmitApplicationFormStep(
          { data: dataToSend, step: 2 },
          handleCurrentApplicationFormStep(3)
        )
      );
    } else {
      applicationForm.status = 14;

      if (applicationForm.id) {
        dispatch(
          actSubmitApplicationFormStep(
            { data: dataToSend, step: 2 },
            handleSubmitUpdateAdvertisingFee
          )
        );
      } else {
        dispatch(
          actSubmitApplicationFormStep(
            { data: dataToSend, step: 2 },
            handleSubmitAdvertisingFee
          )
        );
      }
    }
  };

  const onSubmitFromWizard = (data) => {
    const dataToSend = {
      ...data,
    };
    dataToSend.typeOfPaymentSecondStep = data.typeOfPaymentSecondStepPdf
      ? 'pdf'
      : 'mtn';
    delete dataToSend.typeOfPaymentSecondStepPdf;
    delete dataToSend.typeOfPaymentSecondStepMtn;
    delete dataToSend.payerCellphoneVisual;

    dispatch(actSubmitApplicationFormStep({ data: dataToSend, step: 2 }));
  };

  // On submit for "Draft" button
  const onSubmitDraft = (data) => {
    // Application status for draft

    const dataToSend = {
      ...data,
    };
    dataToSend.typeOfPaymentSecondStep = data.typeOfPaymentSecondStepPdf
      ? 'pdf'
      : 'mtn';
    delete dataToSend.typeOfPaymentSecondStepPdf;
    delete dataToSend.typeOfPaymentSecondStepMtn;
    delete dataToSend.payerCellphoneVisual;

    if (applicationForm.id) {
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

export default useRenewalFormStep2;
