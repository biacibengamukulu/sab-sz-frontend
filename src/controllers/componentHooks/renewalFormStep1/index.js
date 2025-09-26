import { useEffect, useState } from 'react';
import useComponentHooks from '..';
import useApi from '../../../api';
import useHelpers from '../../../helpers';
import useModels from '../../../models';
import _ from 'lodash';

const useRenewalFormStep1 = (isValid, setValue, getValues) => {
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
  const { promiseInProgressArea: promiseGetApplicationFiles } = usePromises(
    'getApplicationFiles'
  );

  // Api
  const { useActions } = useApi();
  const { dispatch, useApplicationFormActions, useApplicationsTableActions } =
    useActions();
  const {
    actSetCurrentApplicationFormStep,
    actSetActiveApplicationFormSteps,
    actSubmitApplicationFormStep,
    actSaveUserApplication,
    actCancelApplication,
    actUpdateApplication,
  } = useApplicationFormActions();
  const { actGetApplicationsTable } = useApplicationsTableActions();

  // Models
  const { useSelectors } = useModels();
  const { useSelector, useApplicationFormSelectors } = useSelectors();
  const {
    applicationFormHelpDataSelector,
    applicationFormSelector,
    applicationFormWizardSelector,
  } = useApplicationFormSelectors();
  const {
    phoneIndicators,
    licenceTypes,
    contactMethods,
    yesNoType,
    landType,
    nameOfArea: nameOfAreasList,
  } = useSelector(applicationFormHelpDataSelector);
  const { applicationForm } = useSelector(applicationFormSelector);
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

  // React

  // State of the greater step enabled
  const [stepsEnabledState, setStepsEnabledState] = useState(1);

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
      onSubmit(getValues());
    };
  }, []);

  useEffect(() => {
    stepsEnabled > currentStep && setStepsEnabledState(stepsEnabled);
  }, [stepsEnabled]);

  // Handle the validation and set the steps enabled
  useEffect(() => {
    // When the steps enabled is the same that the current step
    isValid &&
      stepsEnabledState == currentStep &&
      stepsEnabled == currentStep &&
      handleActiveApplicationFormSteps(currentStep + 1);

    // When the steps enabled is  greater than the current step
    isValid &&
      stepsEnabledState > currentStep &&
      handleActiveApplicationFormSteps(stepsEnabledState);

    // When the validation of the current step is Invalid
    !isValid && handleActiveApplicationFormSteps(currentStep);
  }, [isValid]);

  /**Handlers */
  // Handlers: Wizard
  const handleCurrentApplicationFormStep = (step) => {
    dispatch(actSetCurrentApplicationFormStep({ step: step }));
  };

  const handleActiveApplicationFormSteps = (steps) => {
    dispatch(actSetActiveApplicationFormSteps({ steps: steps }));
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
    setValue(fieldId, inputPhone, { shouldValidate: true });
    setValue(fieldIndicativeId, indicativeId);
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
    delete data.phoneVisual;
    delete data.phoneAlternativeVisual;
    // Check button value as number
    if (data.oultetAddressSameAsResidence) {
      data.oultetAddressSameAsResidence = '1';
      data.outletAddress = '';
    } else {
      data.oultetAddressSameAsResidence = '0';
    }

    dispatch(
      actSubmitApplicationFormStep(
        { data: data, step: 1 },
        handleCurrentApplicationFormStep(2)
      )
    );
  };

  // On submit for "Draft" button
  const onSubmitDraft = (data) => {
    delete data.phoneVisual;
    delete data.phoneAlternativeVisual;

    // Check button value as number
    if (data.oultetAddressSameAsResidence) {
      data.oultetAddressSameAsResidence = '1';
      data.outletAddress = '';
    } else {
      data.oultetAddressSameAsResidence = '0';
    }

    if (applicationForm.id) {
      dispatch(
        actSubmitApplicationFormStep(
          { data: data, step: 1 },
          handleUpdateDraftUserApplication
        )
      );
    } else {
      dispatch(
        actSubmitApplicationFormStep(
          { data: data, step: 1 },
          handleSaveDraftUserApplication
        )
      );
    }
  };

  return {
    promiseSaveUserApplication,
    promiseUpdateUserApplication,
    promiseCancelApplication,
    promiseGetApplicationFiles,

    phoneIndicators,
    licenceTypes,
    contactMethods,
    yesNoType,
    landType,
    nameOfAreasList,

    onSubmit,
    onSubmitDraft,
    applicationForm,

    modalStateDraft,
    handleCloseModalDraftSuccesApplications,
    handleCloseModalDraftSuccesHome,

    modalStateCancel,
    handleCancelApplicationAndCloseModal,
    handleCloseModalCancel,

    defaultIndicative,
    onChangeInputFieldPhone,
    handleIndicative,
  };
};

export default useRenewalFormStep1;
