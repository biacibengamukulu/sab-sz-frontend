import { useEffect, useState } from 'react';
import useComponentHooks from '..';
import useApi from '../../../api';
import useHelpers from '../../../helpers';
import useModels from '../../../models';
import _ from 'lodash';

const useRenewalFormStep3 = (
  setValueDocuments,
  isValidDocuments,
  getValuesDocuments
) => {
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useNavigation, usePromises } = useQuickFunctions();
  const { navigateTo } = useNavigation();
  const { promiseInProgressArea: promiseUpdateFinalUserApplication } =
    usePromises('updateAdvertisingFeeSubmitUserApplication');
  const { promiseInProgressArea: promiseUpdateUserApplication } = usePromises(
    'updateUserApplication'
  );
  const { promiseInProgressArea: promiseCancelApplication } =
    usePromises('cancelApplication');
  const { promiseInProgressArea: promiseSaveDraftApplicationDocuments } =
    usePromises('saveDraftApplicationDocuments');
  const { promiseInProgressArea: promiseSaveFinalApplicationDocuments } =
    usePromises('saveFinalApplicationDocuments');
  // Api
  const { useActions } = useApi();
  const { dispatch, useApplicationFormActions, useApplicationsTableActions } =
    useActions();
  const {
    actResetFieldApplicationForm,

    actSetCurrentApplicationFormStep,
    actSetActiveApplicationFormSteps,

    actSubmitApplicationFormStep,

    actUpdateApplication,
    actSaveDraftApplicationDocuments,

    actUpdateAdvertisingFeeApplicationSubmit,
    actSaveFinalApplicationDocuments,

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
    draftBlankPdfSelector,
    applicationFormWizardSelector,
  } = useApplicationFormSelectors();
  const { typeOfRegistration } = useSelector(applicationFormHelpDataSelector);
  const { applicationForm } = useSelector(applicationFormSelector);
  const { applicationFormStep1, applicationFormStep3 } = useSelector(
    applicationFormDraftSelector
  );
  const { blankPdf } = useSelector(draftBlankPdfSelector);
  const { stepsEnabled, currentStep } = useSelector(
    applicationFormWizardSelector
  );

  // hooks
  const { useModal } = useComponentHooks();
  const { modalState: modalStateDraft, handleShowModal: handleShowModalDraft } =
    useModal();
  const {
    modalState: modalStateCancel,
    handleShowModal: handleShowModalCancel,
  } = useModal();

  const { modalState: modalStateTerms, handleShowModal: handleShowModalTerms } =
    useModal();
  const {
    modalState: modalStateSubmitSuccess,
    handleShowModal: handleShowModalSubmitSuccess,
  } = useModal();
  // React
  const fileTypesPdf = ['application/pdf'];

  // State of the greater step enabled
  const [stepsEnabledState, setStepsEnabledState] = useState(3);

  useEffect(() => {
    handleCurrentApplicationFormStep(currentStep);
    stepsEnabled > currentStep && setStepsEnabledState(stepsEnabled);
    stepsEnabled == currentStep &&
      handleActiveApplicationFormSteps(currentStep);

    // Only to validate the Licence required documents
    setValueDocuments('snlOrTdl', `${applicationForm.snlOrTdl}`);
    setValueDocuments('licenceType', applicationForm.licenceType);

    /**
     * When the submit is made from wizzard
     * the application form step 1 is unmounted and
     * the state of the form is updated
     */
    return () => {
      onSubmitWizard(getValuesDocuments());
    };
  }, []);
  useEffect(() => {
    setValueDocuments('snlOrTdl', `${applicationForm.snlOrTdl}`);
  }, [applicationForm.snlOrTdl]);
  // Handle the validation and set the steps enabled
  useEffect(() => {
    // When the steps enabled is the same that the current step
    isValidDocuments &&
      stepsEnabledState == currentStep &&
      stepsEnabled == currentStep &&
      handleActiveApplicationFormSteps(currentStep + 1);

    // When the steps enabled is  greater than the current step
    isValidDocuments &&
      stepsEnabledState > currentStep &&
      handleActiveApplicationFormSteps(stepsEnabledState);

    // When the validation of the current step is Invalid
    !isValidDocuments && handleActiveApplicationFormSteps(currentStep);
  }, [isValidDocuments]);

  useEffect(() => {
    _.forEach(applicationFormStep3, (value, key) => {
      if (
        key !== 'snlOrTdl' &&
        key !== 'typeOfRegistrationId' &&
        key !== 'licenceType'
      ) {
        setValueDocuments &&
          value &&
          setValueDocuments(
            key,
            typeof value === 'object' ? handleFileNameExtension(value) : value
          );

        setValueDocuments && value === null && setValueDocuments(key, '');
      }
    });
  }, [applicationFormStep3]);

  /**Handlers */
  // Handlers: Wizard
  const handleCurrentApplicationFormStep = (step) => {
    dispatch(actSetCurrentApplicationFormStep({ step: step }));
  };

  const handleActiveApplicationFormSteps = (steps) => {
    dispatch(actSetActiveApplicationFormSteps({ steps: steps }));
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
    dispatch(actResetFieldApplicationForm({ fieldName: fieldId, formStep: 3 }));
  };

  const handleSaveDraftFile = (fieldId, data) => {
    let dataFileDraft = {};
    dataFileDraft[`${fieldId}`] = data;
    dispatch(actSubmitApplicationFormStep({ data: dataFileDraft, step: 3 }));
  };

  // Handlers: Modals

  // Modal Submit success
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

  // Modal Terms
  const handleCloseTermsModal = () => {
    handleShowModalTerms();
  };

  const handleShowTermsModalAfterSaverUserApplication = () => {
    handleShowModalTerms();
  };

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

  // Handlers: Submit draft application
  const handleSaveFinalApplicationDocuments = (data) => {
    const finalApplicationdocuments = {
      ...applicationForm,
      ...data,
      applicationId: applicationForm.id,
      isDraft: 0,
    };
    delete finalApplicationdocuments.id;
    dispatch(
      actSaveFinalApplicationDocuments(
        finalApplicationdocuments,
        handleShowModalSubmitAfterSuccess
      )
    );
  };

  // Handlers: Submit draft application
  const handleSaveFinalUserApplication = (data) => {
    const finalApplicationData = { ...applicationForm, ...data };
    // Application status for docuemnts pending
    finalApplicationData.status = 2;

    dispatch(
      actUpdateAdvertisingFeeApplicationSubmit(
        finalApplicationData,
        handleShowTermsModalAfterSaverUserApplication
      )
    );
  };

  const handleUpdateDraftUserApplicationAndDocuments = (data) => {
    const draftApplicationData = { ...applicationForm, ...data };
    // Application status for draft
    draftApplicationData.status = 2;

    const draftApplicationdocuments = {
      applicationId: applicationForm.id,
      isDraft: 1,
      ...applicationForm,
      ...data,
    };
    delete draftApplicationdocuments.id;

    dispatch(
      actUpdateApplication(
        draftApplicationData,
        dispatch(
          actSaveDraftApplicationDocuments(
            draftApplicationdocuments,
            handleShowModalDraftSuccessSave
          )
        )
      )
    );
  };

  // On submit from wizzard button
  const onSubmitWizard = (data) => {
    dispatch(actSubmitApplicationFormStep({ data: data, step: 3 }));
  };

  // On submit for "Next" button
  const onSubmitFinalFromTyc = (data) => {
    dispatch(
      actSubmitApplicationFormStep(
        { data: data, step: 3 },
        handleSaveFinalApplicationDocuments
      )
    );
  };

  const onSubmitFinalBeforeTyc = (data) => {
    dispatch(
      actSubmitApplicationFormStep(
        { data: data, step: 3 },
        handleSaveFinalUserApplication
      )
    );
  };

  // On submit for "Draft" button
  const onSubmitDraft = (data) => {
    dispatch(
      actSubmitApplicationFormStep(
        { data: data, step: 3 },
        handleUpdateDraftUserApplicationAndDocuments
      )
    );
  };

  return {
    promiseSaveDraftApplicationDocuments,
    promiseSaveFinalApplicationDocuments,
    promiseUpdateFinalUserApplication,
    promiseUpdateUserApplication,
    promiseCancelApplication,

    fileTypesPdf,
    typeOfRegistration,

    handleFileNameExtension,
    onChangeFilePdf,
    handleResetFileState,
    handleSaveDraftFile,

    onSubmitFinalFromTyc,
    onSubmitFinalBeforeTyc,
    onSubmitDraft,
    applicationForm,
    applicationFormStep1,
    // applicationInfo,

    modalStateDraft,
    handleCloseModalDraftSuccesApplications,
    handleCloseModalDraftSuccesHome,

    modalStateCancel,
    handleCancelApplicationAndCloseModal,
    handleCloseModalCancel,

    modalStateTerms,
    handleCloseTermsModal,

    modalStateSubmitSuccess,
    handleCloseModalSubmitSucces,
  };
};

export default useRenewalFormStep3;
