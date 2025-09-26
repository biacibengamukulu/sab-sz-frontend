import { useEffect, useState } from 'react';
import useComponentHooks from '..';
import useApi from '../../../api';
import useHelpers from '../../../helpers';
import useModels from '../../../models';
import _ from 'lodash';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const useApplicationFormRenewStep3 = () => {
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useNavigation, usePromises, useFileManager, useValidators } = useQuickFunctions();
  const { handleFileNameExtension } = useFileManager();
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
    applicationFormWizardSelector,
  } = useApplicationFormSelectors();
  const { typeOfRegistration, liquorLicenceAffidavitDocumentUrl } = useSelector(applicationFormHelpDataSelector);
  const { applicationForm } = useSelector(applicationFormSelector);
  const { applicationFormStep1, applicationFormStep3 } = useSelector(
    applicationFormDraftSelector
  );
  const { stepsEnabled, currentStep } = useSelector(
    applicationFormWizardSelector
  );

  // Helpers
  const {
    applicationFormRenewStep3documentsSchemaValidator,
    applicationFormStep4TermsSchemaValidator,
  } = useValidators();

   // Yup validator

   const {
    handleSubmit: handleSubmitDocuments,
    getValues: getValuesDocuments,
    setValue: setValueDocuments,
    control: controlDocuments,
    resetField: resetFieldDocuments,
    setError: setErrorDocuments,
    formState: { errors: errorsDocuments, isValid: isValidDocuments },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(applicationFormRenewStep3documentsSchemaValidator(applicationForm)),
    shouldUnregister: false,
  });
  const {
    getValues: getValuesSubmitTerms,
    control: controlTerms,
    formState: { errors: errorsTerms, isValid: isValidTerms },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(applicationFormStep4TermsSchemaValidator),
  });

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
  const [individualBusinessTypeState, setIndividualBusinessTypeState] =
    useState(0);

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
      onSubmitWizard(getValuesDocuments());
    };
  }, []);

  // Only to revalidate the Licence required documents
  useEffect(() => {
    handleBusinessIndividual();
  }, [
    applicationForm.business_relationship_id,
    applicationForm.business_property_id,
    applicationForm.premises_owner_id,
  ]);
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
      setValueDocuments &&
        value &&
        key !== 'business_relationship_id' &&
        key !== 'individualBusinessType';
      setValueDocuments(
        key,
        typeof value === 'object' ? handleFileNameExtension(value) : value,
        { shouldValidate: false }
      );

      setValueDocuments &&
        value === null &&
        setValueDocuments(key, '', { shouldValidate: false });
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

  //Handlers:  Individual Business

  const handleBusinessIndividual = () => {
    setValueDocuments(
      'business_relationship_id',
      applicationForm.business_relationship_id
    );
    // Individual Business + Urban area + Privately-Owned = ID + Title Deed (individualBusinessType = 1)
    if (
      applicationForm.business_relationship_id == 1 &&
      applicationForm.business_property_id == 2 &&
      applicationForm.premises_owner_id == '1' &&
      applicationForm.personal_identification_number[7] != 0
    ) {
      setValueDocuments('individualBusinessType', 1, {
        shouldValidate: true,
      });
      setIndividualBusinessTypeState(1);
      // Individual Business + Urban area + Leased-Owned = ID + Title Deed (individualBusinessType = 1)
    } else if (
      applicationForm.business_relationship_id == 1 &&
      applicationForm.business_property_id == 2 &&
      applicationForm.premises_owner_id == '2' &&
      applicationForm.personal_identification_number[7] != 0
    ) {
      setValueDocuments('individualBusinessType', 2, {
        shouldValidate: true,
      });
      setIndividualBusinessTypeState(2);
    } else if (
      applicationForm.business_relationship_id == 1 &&
      applicationForm.business_property_id == 2 &&
      applicationForm.premises_owner_id == '1' &&
      applicationForm.personal_identification_number[7] == 0
    ) {
      setValueDocuments('individualBusinessType', 3, {
        shouldValidate: true,
      });
      setIndividualBusinessTypeState(3);
      // Individual Business + Urban area + Leased-Owned = ID + Title Deed (individualBusinessType = 1)
    } else if (
      applicationForm.business_relationship_id == 1 &&
      applicationForm.business_property_id == 2 &&
      applicationForm.premises_owner_id == '2' &&
      applicationForm.personal_identification_number[7] == 0
    ) {
      setValueDocuments('individualBusinessType', 4, {
        shouldValidate: true,
      });
      setIndividualBusinessTypeState(4);
    } else {
      setValueDocuments('individualBusinessType', 0, {
        shouldValidate: true,
      });
      setIndividualBusinessTypeState(0);
    }
  };

  // Handlers: Modals

  // Modal Submit success
  const handleCloseModalSubmitSucces = () => {
    handleShowModalSubmitSuccess();
    navigateTo('/applications');
  };
  const handleShowModalSubmitAfterSuccess = () => {
    handleShowModalSubmitSuccess(
      'Your application has been successfully submitted!',
      'Our team will review it shortly. You will be contacted regarding the next steps in the renewal process. Thank you for your submission.'
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
      'Your renewal form has been saved as draft!',
      'Your renewal form has been saved successfully! You can continue the process later at your convenience.',
      'info'
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
    delete finalApplicationdocuments.isNewRenewal;
    dispatch(
      actSaveFinalApplicationDocuments(
        finalApplicationdocuments,
        handleShowModalSubmitAfterSuccess
      )
    );
  };

  // Handlers: Submit draft application
  const handleSaveFinalUserApplication = (data) => {
    const finalApplicationData = { ...applicationForm, ...data, isDraft: 0 };
    // Application status for docuemnts pending
    finalApplicationData.status = 2;
    dispatch(
      actUpdateApplication(
        finalApplicationData,
        handleShowTermsModalAfterSaverUserApplication
      )
    );
  };

  const handleUpdateDraftUserApplicationAndDocuments = (data) => {
    const draftApplicationData = { ...applicationForm, ...data, isDraft: 1 };
    // Application status for draft
    draftApplicationData.status = 2;

    const draftApplicationDocuments = {
      applicationId: applicationForm.id,
      isDraft: 1,
      ...applicationForm,
      ...data,
    };
    delete draftApplicationDocuments.id;
    delete draftApplicationDocuments.isNewRenewal;

    dispatch(
      actUpdateApplication(
        draftApplicationData,
        dispatch(
          actSaveDraftApplicationDocuments(
            draftApplicationDocuments,
            handleShowModalDraftSuccessSave
          )
        )
      )
    );
  };

  // On submit from wizzard button
  const onSubmitWizard = (data) => {
    delete data.individualBusinessType;
    delete data.business_relationship_id;
    delete data.business_property_id;
    delete data.premises_owner_id;
    delete data.personal_identification_number;
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


  const numberFileEmpty = (data) =>{
    let file=0;
    if(data == undefined) return file;
    if(data?.affidavit == undefined || data?.affidavit.name=='') file+=1;
    if(data?.police_report == undefined || data?.police_report.name=='') file+=1;
    if(data?.health_report == undefined || data?.health_report.name=='') file+=1;
    if(data?.license_renewal == undefined || data?.license_renewal.name=='') file+=1;
    return file;
  }
  // On submit for "Draft" button
  const onSubmitDraft = (data) => {
    const numberFile=numberFileEmpty(data);
    if(numberFile>3) {
      return;
    } 
    if(data?.affidavit == undefined) data.affidavit={name: '', data: ''};
    dispatch(
      actSubmitApplicationFormStep(
        { data: data, step: 3 },
        handleUpdateDraftUserApplicationAndDocuments
      )
    );
  };

  // Handlers: get affidavit PDF
  const handleGetAffidavitPdf = () => {
   // console.log("handleGetAffidavitPdf", liquorLicenceAffidavitDocumentUrl)
    window.open(
      liquorLicenceAffidavitDocumentUrl
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

    individualBusinessTypeState,
    handleGetAffidavitPdf,

    getValuesDocuments,
    handleSubmitDocuments,
    setValueDocuments,
    controlDocuments,
    resetFieldDocuments,
    setErrorDocuments,
    errorsDocuments,
    isValidDocuments,
    getValuesSubmitTerms,
    controlTerms,
    errorsTerms,
    isValidTerms,
  };
};

export default useApplicationFormRenewStep3;
