import _ from 'lodash';
import { useEffect, useState } from 'react';
import useComponentHooks from '..';
import useApi from '../../../api';
import useHelpers from '../../../helpers';
import useModels from '../../../models';

const useApplicationFormStep4 = (
  setValueLicenseAct,
  isValidLicenseAct,
  getValuesLicenseAct,
  appendDirector,
  appendShareholder,
  removeDirector,
  removeShareholder
) => {
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useNavigation, usePromises, useFileManager } = useQuickFunctions();
  const { handleFileNameExtension } = useFileManager();
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
    applicationFormHelpDataSelector,
    applicationFormWizardSelector,
  } = useApplicationFormSelectors();
  const {
    applicationForOptions,
    businessStyles,
    citizenships,
    countries,
    districts,
    licenceTypes,
    natureOfLicences,
    phoneIndicators,
    privilegesOptions,
    regulationsNumbers,
    typeOfRegistration,
  } = useSelector(applicationFormHelpDataSelector);
  const { applicationForm } = useSelector(applicationFormSelector);
  const { applicationFormStep1, applicationFormStep4 } = useSelector(
    applicationFormDraftSelector
  );

  const { stepsEnabled, currentStep } = useSelector(
    applicationFormWizardSelector
  );

  // hooks
  const { useModal } = useComponentHooks();
  const {
    modalState: modalStateSubmitSuccess,
    handleShowModal: handleShowModalSubmitSuccess,
  } = useModal();
  const { modalState: modalStateDraft, handleShowModal: handleShowModalDraft } =
    useModal();
  const {
    modalState: modalStateCancel,
    handleShowModal: handleShowModalCancel,
  } = useModal();
  const { modalState: modalStateTerms, handleShowModal: handleShowModalTerms } =
    useModal();

  // React
  const fileTypesPdf = ['application/pdf'];
  // State of the greater step enabled
  const [stepsEnabledState, setStepsEnabledState] = useState(3);

  const anotherDirectorShareholder = {
    name: '',
    residentCountryId: 202,
    address: '',
    citizenshipId: 1,
    pin: '',
    trpNumber: '',
  };
  const [step4SubmitedState, setStep4Submited] = useState({});
  const [loadingFinalSubmitStep4State, setLoadingFinalSubmitStep4state] =
    useState(false);

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
      onSubmitUnmountWizard(getValuesLicenseAct());
    };
  }, []);

  // Handle the validation and set the steps enabled
  useEffect(() => {
    const termsAndConditionsCurrent = parseInt(
      applicationForm.termsAndConditions
    );
    const applicationConfirmation = parseInt(
      applicationForm.applicationConfirmation
    );
    // When the steps enabled is the same that the current step
    isValidLicenseAct &&
      stepsEnabledState == currentStep &&
      stepsEnabled == currentStep &&
      termsAndConditionsCurrent &&
      applicationConfirmation &&
      handleActiveApplicationFormSteps(currentStep + 1);

    // When the steps enabled is  greater than the current step
    isValidLicenseAct &&
      stepsEnabledState > currentStep &&
      termsAndConditionsCurrent &&
      applicationConfirmation &&
      handleActiveApplicationFormSteps(stepsEnabledState);

    // When the validation of the current step is Invalid
    !isValidLicenseAct && handleActiveApplicationFormSteps(currentStep);

    // If the terms and conditions are not acepted
    (!termsAndConditionsCurrent || !applicationConfirmation) &&
      handleActiveApplicationFormSteps(currentStep);
  }, [
    isValidLicenseAct,
    applicationForm.termsAndConditions,
    applicationForm.applicationConfirmation,
  ]);

  useEffect(() => {
    setValueLicenseAct(
      'applicantTypeForLicenseId',
      applicationForm.typeOfRegistrationId
    );
  }, [applicationForm.typeOfRegistrationId]);

  // directors form
  useEffect(() => {
    appendDirector &&
      applicationForm.directors &&
      _.map(applicationForm.directors, (director) => {
        appendDirector(director);
      });
  }, [applicationForm.directors.length, appendDirector]);

  // shareholders form
  useEffect(() => {
    appendShareholder &&
      applicationForm.shareholders &&
      _.map(applicationForm.shareholders, (shareholder) => {
        appendShareholder(shareholder);
      });
  }, [applicationForm.shareholders.length, appendShareholder]);

  //Confirm partial step 4 submition to show the terms modal
  useEffect(() => {
    loadingFinalSubmitStep4State &&
      JSON.stringify(step4SubmitedState) ===
        JSON.stringify(applicationFormStep4) &&
      handleTermsModal();
  }, [step4SubmitedState, loadingFinalSubmitStep4State, applicationFormStep4]);

  /**Handlers */
  // Handlers: Wizard
  const handleCurrentApplicationFormStep = (step) => {
    dispatch(actSetCurrentApplicationFormStep({ step: step }));
  };

  const handleActiveApplicationFormSteps = (steps) => {
    dispatch(actSetActiveApplicationFormSteps({ steps: steps }));
  };

  // handlers: useFieldArray
  const handleAddAnotherDirector = () => {
    appendDirector(anotherDirectorShareholder);
  };
  const handleAddAnotherShareholder = () => {
    appendShareholder(anotherDirectorShareholder);
  };
  const handleRemoveAnotherDirector = (index) => {
    removeDirector(index);
  };
  const handleRemoveAnotherShareholder = (index) => {
    removeShareholder(index);
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
    dispatch(actResetFieldApplicationForm({ fieldName: fieldId, formStep: 4 }));
  };

  const handleSaveDraftFile = (fieldId, data) => {
    let dataFileDraft = {};
    dataFileDraft[`${fieldId}`] = data;
    dispatch(actSubmitApplicationFormStep({ data: dataFileDraft, step: 4 }));
  };
  // Handlers: Phone field
  const onChangeInputFieldPhone = (
    inputPhone,
    country,
    id,
    fieldIndicativeId
  ) => {
    const fieldId = id.slice(0, id.length - 'Visual'.length);
    const countryCode = country.countryCode.toUpperCase();
    const indicativeId = _.find(
      phoneIndicators,
      (currentIndicative) => currentIndicative.countryCode === countryCode
    ).id;
    setValueLicenseAct(fieldId, inputPhone, { shouldValidate: true });
    setValueLicenseAct(fieldIndicativeId, indicativeId);
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

  // Modal Submit success
  // Modal Submit tyc success
  const handleCloseModalSubmitSucces = () => {
    handleShowModalSubmitSuccess();
    navigateTo('/applications');
  };
  const handleShowModalSubmitAfterSuccess = () => {
    handleShowModalSubmitSuccess(
      'Application submitted successfully!',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare odio sit amet est accumsan hendrerit. Morbi maximus aliquam porta. Vivamus ornare ac lectus ut euismod. Duis congue sed erat ac accumsan. Duis odio ligula, cursus vitae ornare eget.'
    );
  };

  // Modal Draft success
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

  // Modal Terms
  const handleTermsModal = () => {
    handleShowModalTerms();
    setLoadingFinalSubmitStep4state(false);
  };

  const handleCloseTermsModal = () => {
    setLoadingFinalSubmitStep4state(false);
    setStep4Submited({});
    handleShowModalTerms();
  };

  const handleConfirmTermsModal = () => {
    setLoadingFinalSubmitStep4state(false);
    setStep4Submited({});
    handleShowModalTerms();
    handleShowModalSubmitAfterSuccess();
  };

  // Handlers: Submit draft application
  const handleSaveDraftUserApplication = (data) => {
    const draftApplicationData = { ...applicationForm, ...data };
    dispatch(
      actSaveUserApplication(
        draftApplicationData,
        handleShowModalDraftSuccessSave
      )
    );
  };

  const handleUpdateDraftUserApplication = (data) => {
    const draftApplicationData = { ...applicationForm, ...data };
    dispatch(
      actUpdateApplication(
        draftApplicationData,
        handleShowModalDraftSuccessSave
      )
    );
  };

  //Confirm step 4 submited by callback
  const handleDataStep4Submitted = (data) => {
    // set the data submited. After that is necessary confirm with redu
    setStep4Submited(data);
    setLoadingFinalSubmitStep4state(true);
    // next  fase by useEffect
  };
  // Handlers: final application
  const handleFinalSubmitUserApplication = (data) => {
    const draftApplicationData = { ...applicationForm, ...data };

    dispatch(
      actSaveAdvertisingFeeApplicationSubmit(
        draftApplicationData,
        handleConfirmTermsModal
      )
    );
  };

  const handleUpdateDraftToSubmitUserApplication = (data) => {
    const draftApplicationData = { ...applicationForm, ...data };

    dispatch(
      actUpdateAdvertisingFeeApplicationSubmit(
        draftApplicationData,
        handleConfirmTermsModal
      )
    );
  };
  // On submit for confirm terms button
  const onSubmitTermsConfirmation = (data) => {
    delete data.cellphoneVisual;
    delete data.phoneNumberVisual;
    if (data.termsAndConditions) {
      data.termsAndConditions = '1';
    } else {
      data.termsAndConditions = '0';
    }
    if (data.applicationConfirmation) {
      data.applicationConfirmation = '1';
    } else {
      data.applicationConfirmation = '0';
    }

    applicationForm.status = 2;
    if (applicationForm.id) {
      dispatch(
        actSubmitApplicationFormStep(
          { data: data, step: 4 },
          handleUpdateDraftToSubmitUserApplication
        )
      );
    } else {
      dispatch(
        actSubmitApplicationFormStep(
          { data: data, step: 4 },
          handleFinalSubmitUserApplication
        )
      );
    }
  };
  // On submit for after unmount step
  const onSubmitUnmountWizard = (data) => {
    // Terms and conditions only can be submited from modal
    delete data.termsAndConditions;
    delete data.applicationConfirmation;

    delete data.cellphoneVisual;
    delete data.phoneNumberVisual;

    const dataToSubmitStep4 = {
      ...applicationFormStep4,
      ...data,
    };

    if (dataToSubmitStep4.termsAndConditions) {
      dataToSubmitStep4.termsAndConditions = '1';
    } else {
      dataToSubmitStep4.termsAndConditions = '0';
    }
    if (dataToSubmitStep4.applicationConfirmation) {
      dataToSubmitStep4.applicationConfirmation = '1';
    } else {
      dataToSubmitStep4.applicationConfirmation = '0';
    }
    dispatch(
      actSubmitApplicationFormStep(
        { data: dataToSubmitStep4, step: 4 },
        handleDataStep4Submitted
      )
    );
  };
  // On submit for "Next" button
  const onSubmit = (data) => {
    delete data.cellphoneVisual;
    delete data.phoneNumberVisual;

    const dataToSubmitStep4 = {
      ...applicationFormStep4,
      ...data,
    };

    if (dataToSubmitStep4.termsAndConditions) {
      dataToSubmitStep4.termsAndConditions = '1';
    } else {
      dataToSubmitStep4.termsAndConditions = '0';
    }
    if (dataToSubmitStep4.applicationConfirmation) {
      dataToSubmitStep4.applicationConfirmation = '1';
    } else {
      dataToSubmitStep4.applicationConfirmation = '0';
    }

    dispatch(
      actSubmitApplicationFormStep(
        { data: dataToSubmitStep4, step: 4 },
        handleDataStep4Submitted
      )
    );
  };

  // On submit for "Draft" button
  const onSubmitDraft = (data) => {
    // Application status for draft
    applicationForm.status = 1;
    if (applicationForm.id) {
      dispatch(
        actSubmitApplicationFormStep(
          { data: data, step: 4 },
          handleUpdateDraftUserApplication
        )
      );
    } else {
      dispatch(
        actSubmitApplicationFormStep(
          { data: data, step: 4 },
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
    applicationForOptions,
    businessStyles,
    citizenships,
    countries,
    districts,
    licenceTypes,
    natureOfLicences,
    phoneIndicators,
    privilegesOptions,
    regulationsNumbers,
    typeOfRegistration,

    handleFileNameExtension,
    onChangeFilePdf,
    handleResetFileState,
    handleSaveDraftFile,

    handleAddAnotherDirector,
    handleAddAnotherShareholder,
    handleRemoveAnotherDirector,
    handleRemoveAnotherShareholder,

    onChangeInputFieldPhone,
    handleIndicative,
    defaultIndicative,

    onSubmitTermsConfirmation,
    onSubmit,
    onSubmitDraft,
    applicationForm,
    applicationFormStep1,
    // applicationInfo,

    modalStateSubmitSuccess,
    handleCloseModalSubmitSucces,

    modalStateDraft,
    handleCloseModalDraftSuccesApplications,
    handleCloseModalDraftSuccesHome,

    modalStateCancel,
    handleCancelApplicationAndCloseModal,
    handleCloseModalCancel,

    handleCloseTermsModal,
    modalStateTerms,
    loadingFinalSubmitStep4State,
  };
};

export default useApplicationFormStep4;
