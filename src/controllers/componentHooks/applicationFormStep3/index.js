import { useEffect, useState } from 'react';
import useComponentHooks from '..';
import useApi from '../../../api';
import useHelpers from '../../../helpers';
import useModels from '../../../models';
import _ from 'lodash';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const useApplicationFormStep3 = () => {
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
    actSaveUserApplication,
    actSaveDraftApplicationDocuments,

    actSaveFinalApplicationDocuments,

    actCancelApplication,
  } = useApplicationFormActions();
  const { actGetApplicationsTable } = useApplicationsTableActions();

  // Models
  const { useSelectors } = useModels();
  const { useSelector, useApplicationFormSelectors, useUserSelectors } = useSelectors();
  const {
    applicationFormSelector,
    applicationFormDraftSelector,
    applicationFormHelpDataSelector,
    applicationFormWizardSelector,
  } = useApplicationFormSelectors();
  const { userSelector } = useUserSelectors();
  const { typeOfRegistration, liquorLicenceAffidavitDocumentUrl } = useSelector(applicationFormHelpDataSelector);
  const { applicationForm } = useSelector(applicationFormSelector);
  const { user } = useSelector(userSelector);
  const { applicationFormStep1, applicationFormStep2, applicationFormStep3 } = useSelector(
    applicationFormDraftSelector
  );
  const { stepsEnabled, currentStep } = useSelector(
    applicationFormWizardSelector
  );

  // Helpers
  const {
    applicationFormStep3documentsSchemaValidator,
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
    resolver: yupResolver(applicationFormStep3documentsSchemaValidator(applicationForm)),
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
      'Application submitted successfully!',
      'Thank you for completing and submitting your application. In the meantime, you may track the status of your application in the system. Notification on the outcome of the application will be sent upon confirmation through your preferred method of communication.'
    );
  };

  // Modal Terms
  const handleCloseTermsModal = () => {
    handleShowModalTerms();
  };

  const handleShowTermsModalAfterSaverUserApplication = (response) => {
    // Application was saved successfully, store the application data and show terms modal
    // eslint-disable-next-line no-console
    console.log('🚀 handleShowTermsModalAfterSaverUserApplication called with:', response);

    if (response && response.data) {
      // Store the saved application data for later use in document submission
      window.savedApplicationData = response.data;
      // eslint-disable-next-line no-console
      console.log('🚀 Application saved successfully with response:', response.data);
      // eslint-disable-next-line no-console
      console.log('🚀 Application ID:', response.data.id);
      console.log('🚀 Application Reference:', response.data.applicationReference);
    } else if (response && (response.id || response.applicationReference)) {
      // Maybe the response is the data directly, not wrapped in .data
      window.savedApplicationData = response;
      // eslint-disable-next-line no-console
      console.log('🚀 Application saved (direct response):', response);
    } else {
      // eslint-disable-next-line no-console
      console.error('❌ No response data received from application save:', response);
    }

    // Backend now returns both applicationReference and id automatically
    // No manual mapping needed for new applications
    if (window.savedApplicationData) {
      if (window.savedApplicationData.id) {
        // eslint-disable-next-line no-console
        console.log('✅ Application ID provided by backend:', window.savedApplicationData.id);
      } else {
        // eslint-disable-next-line no-console
        console.warn('⚠️ Application ID missing - this should not happen with the updated backend');
      }
    }

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
    // Get the application ID from the saved application data
    const savedAppId = window.savedApplicationData?.id || applicationForm.id;

    const finalApplicationdocuments = {
      ...applicationForm,
      ...data,
      applicationId: savedAppId,
      isDraft: 0,
      status: 2, // Final submission status
      // Ensure we have required relationship IDs with fallback values
      business_relationship_id: applicationForm.business_relationship_id || 3, // Default to 3 (Company)
      business_property_id: applicationForm.business_property_id || 1, // Default to 1 (Urban)
      premises_owner_id: applicationForm.premises_owner_id || 1, // Default to 1 (Owned)
    };
    delete finalApplicationdocuments.id;
    delete finalApplicationdocuments.isNewRenewal;

    console.log('🚀 Saving documents for application ID:', savedAppId);
    console.log('🚀 Document data being sent:', finalApplicationdocuments);

    dispatch(
      actSaveFinalApplicationDocuments(
        finalApplicationdocuments,
        handleShowModalSubmitAfterSuccess
      )
    );
  };

  // Field mapping helper function to transform frontend field names to backend field names
  const mapFieldsForBackend = (formData) => {
    const mappedData = { ...formData };

    // Map frontend field names to backend field names
    if (mappedData.personal_identification_number) {
      mappedData.registrationNumber = mappedData.personal_identification_number;
      delete mappedData.personal_identification_number;
    }

    // Combine name fields if they exist separately
    if (mappedData.names && mappedData.surnames) {
      mappedData.name = `${mappedData.names} ${mappedData.surnames}`.trim();
    } else if (mappedData.names) {
      mappedData.name = mappedData.names;
    }

    // Map step 2 fields to backend field names
    if (mappedData.type_of_payment_second_step) {
      mappedData.typeOfPaymentSecondStep = mappedData.type_of_payment_second_step;
    }

    // Map postal residence address - try multiple possible field names
    if (mappedData.postal_residence_address) {
      mappedData.postalResidenceAddress = mappedData.postal_residence_address;
    } else if (mappedData.residential_address) {
      mappedData.postalResidenceAddress = mappedData.residential_address;
    } else if (mappedData.postal_address) {
      mappedData.postalResidenceAddress = mappedData.postal_address;
    } else {
      // Fallback default value
      mappedData.postalResidenceAddress = "Default Address";
    }

    // Map propocedOutletName from business_style (step 1)
    if (mappedData.business_style) {
      mappedData.propocedOutletName = mappedData.business_style;
    }

    // Map outlet address - try multiple possible field names
    if (mappedData.outlet_adress) {
      mappedData.outletAddress = mappedData.outlet_adress;
    } else if (mappedData.outlet_address) {
      mappedData.outletAddress = mappedData.outlet_address;
    } else if (mappedData.business_premises) {
      mappedData.outletAddress = mappedData.business_premises;
    } else {
      // Fallback: use residential address if outlet address is not provided
      mappedData.outletAddress = mappedData.postalResidenceAddress || mappedData.residential_address || mappedData.postal_address || "Default Outlet Address";
    }

    // Map phone fields
    if (mappedData.payerCellphoneIndicator) {
      mappedData.phoneIndicator = mappedData.payerCellphoneIndicator;
    }

    if (mappedData.payerCellphone) {
      mappedData.phone = mappedData.payerCellphone;
    }

    // Map advertising proof of payment
    if (mappedData.receiptNumber) {
      mappedData.advertisingProofOfPayment = mappedData.receiptNumber;
    }

    // Map area field
    if (mappedData.area_id) {
      mappedData.nameOfArea = mappedData.area_id;
    }

    // Add hardcoded default values for remaining required fields
    if (!mappedData.snlOrTdl) {
      mappedData.snlOrTdl = 1; // Default to true/1
    }

    if (!mappedData.rightOfOcuppation) {
      mappedData.rightOfOcuppation = 1; // Default to true/1
    }

    if (!mappedData.buildingErected) {
      mappedData.buildingErected = 1; // Default to true/1 (building erected)
    }

    // Ensure email is present - use logged-in user's email or provide fallback
    if (!mappedData.email && user?.email) {
      mappedData.email = user.email; // Use logged-in user's email
    } else if (!mappedData.email) {
      mappedData.email = "noemail@example.com"; // Fallback only if user email is not available
    }

    return mappedData;
  };

  // Handlers: Submit draft application
  const handleSaveFinalUserApplication = (data) => {
    // Debug: Let's see what data we have available
    console.log('🐛 applicationFormStep1:', applicationFormStep1);
    console.log('🐛 applicationFormStep2:', applicationFormStep2);
    console.log('🐛 applicationForm:', applicationForm);
    console.log('🐛 step3 data:', data);
    console.log('🐛 user:', user);

    // Merge all form data from all steps to ensure we have complete application data
    const rawApplicationData = {
      ...applicationFormStep1, // Data from step 1
      ...applicationFormStep2, // Data from step 2
      ...applicationForm,      // Data from current application state
      ...data,                 // Data from step 3 (documents)
      email: user?.email,      // Add logged-in user's email
      isDraft: 0,
      status: 2 // Application status for documents pending
    };

    // Apply field mapping to match backend expectations
    const finalApplicationData = mapFieldsForBackend(rawApplicationData);

    console.log('🚀 Final Application Data (after mapping):', finalApplicationData);

    // Check if application already has an ID (existing application) or is new
    if (applicationForm.id) {
      // Existing application - use update
      dispatch(
        actUpdateApplication(
          finalApplicationData,
          handleShowTermsModalAfterSaverUserApplication
        )
      );
    } else {
      // New application - use save
      dispatch(
        actSaveUserApplication(
          finalApplicationData,
          handleShowTermsModalAfterSaverUserApplication
        )
      );
    }
  };

  const handleUpdateDraftUserApplicationAndDocuments = (data) => {
    // Merge all form data from all steps for draft as well
    const draftApplicationData = {
      ...applicationFormStep1, // Data from step 1
      ...applicationForm,      // Data from current application state
      ...data,                 // Data from step 3 (documents)
      isDraft: 1,
      status: 2 // Application status for draft
    };

    const draftApplicationDocuments = {
      applicationId: applicationForm.id,
      isDraft: 1,
      ...applicationFormStep1,
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

  // On submit for "Draft" button
  const onSubmitDraft = (data) => {
    dispatch(
      actSubmitApplicationFormStep(
        { data: data, step: 3 },
        handleUpdateDraftUserApplicationAndDocuments
      )
    );
  };

  // Handlers: get affidavit PDF
  const handleGetAffidavitPdf = () => {
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

export default useApplicationFormStep3;
