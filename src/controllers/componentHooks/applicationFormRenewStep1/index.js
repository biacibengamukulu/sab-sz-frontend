import { useEffect, useState } from 'react';
import useComponentHooks from '..';
import useApi from '../../../api';
import useHelpers from '../../../helpers';
import useModels from '../../../models';
import _ from 'lodash';

const useApplicationFormRenewStep1 = (isValid, setValue, getValues) => {
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
  const { promiseInProgressArea: promiseGetPinData } =
    usePromises('getPinData');
  const { promiseInProgressArea: promiseGetAreaFromOffice } =
    usePromises('getAreaFromOffice');

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
    actGetPinData,
    actGetAreaFromOffice,
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
    licenceTypes,
    businessRelationships,
    natureOfLicences,
    areas,
    businessNatureTypes,
    businessPropertys,
    offices,
    charYesNoType,
    premisesOwners,
    businessLands,

    phoneIndicators,
  } = useSelector(applicationFormHelpDataSelector);
  const { applicationForm } = useSelector(applicationFormSelector);
  const { stepsEnabled, currentStep } = useSelector(
    applicationFormWizardSelector
  );
  // hooks
  const { useModal } = useComponentHooks();
  const { modalState: modalStateDraft, handleShowModal: handleShowModalDraft } =  useModal();
  const {  modalState: modalStateCancel,  handleShowModal: handleShowModalCancel } = useModal();
  const {  modalState: modalStatePrint,  handleShowModal: handleShowModalPrint } = useModal();


  // React
  const [areaList, setAreaList] = useState([]);

  // State of the greater step enabled
  const [stepsEnabledState, setStepsEnabledState] = useState(1);
  const [pinErrorState, setPinErrorState] = useState('');

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
    !areaList.length &&
      applicationForm.office_id &&
      handleOnChangeOffice(applicationForm.office_id, true);
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
  // Handlers: PIN
  const handleOnSuccessPin = (data) => {
    if (data.status === 'WARNING' || data.status === 'ERROR') {
      setPinErrorState(data.message);
      setValue('names', '', {
        shouldValidate: true,
      });
      setValue('surnames', '', {
        shouldValidate: true,
      });
    } else {
      setPinErrorState('');
      setValue('names', data.names, {
        shouldValidate: true,
      });
      setValue('surnames', data.surnames, {
        shouldValidate: true,
      });
    }
  };

  const handleOnChangePin = (pin) => {
    pin.length === 13
      ? dispatch(actGetPinData(pin, handleOnSuccessPin))
      : setPinErrorState('');
  };

  const handleGetAreas = (data) => {
    setAreaList(data);
    setValue('area_id', '', {
      shouldValidate: false,
    });
  };

  const handleGetAreasNewRender = (data) => {
    setAreaList(data);
    applicationForm.area_id
      ? setValue('area_id', applicationForm.area_id, {
          shouldValidate: true,
        })
      : setValue('area_id', '', {
          shouldValidate: false,
        });
  };

  const handleOnChangeOffice = (officeId, isNewRender) => {
    isNewRender
      ? dispatch(actGetAreaFromOffice(officeId, handleGetAreasNewRender))
      : dispatch(actGetAreaFromOffice(officeId, handleGetAreas));
  };

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

  const handleCloseModalPrint = () => {
    handleShowModalPrint();
  };

  const handleModalPrintTo = () => {
    handleShowModalPrint();
    setTimeout(()=>{
      window.print();
    },500)
   // handleShowModalPrint();
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
  const onSubmit = () => {
    handleCloseModalPrint()
  };

  const handleModalPrintContinue=()=>{
    handleCloseModalPrint()

    const data=getValues();
    delete data.phoneVisual;
    delete data.phoneAlternativeVisual;
    if (data.oultetAddressSameAsResidence) {
      data.oultetAddressSameAsResidence = '1';
      data.outletAddress = '';
    } else {
      data.oultetAddressSameAsResidence = '0';
    }
    data.is_renewal=1;
    data.isNewRenewal=1;
    dispatch(
      actSubmitApplicationFormStep(  { data: data, step: 1 },   handleCurrentApplicationFormStep(2) )
    );

  }

  // On submit for "Draft" button
  const onSubmitDraft = (data) => {
    data.is_renewal=1;
    data.isNewRenewal=1;
    //data.applicationType= { id: '2',  name: 'Renewal'};
    
    // Delete PIN if no name was set, to force the user to add the PIN on the next edition
    if (!data.names && !data.surnames) {
      delete data.personal_identification_number;
    }

    //console.log("onSubmitDraft  1) ", applicationForm)
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
    promiseGetPinData,
    promiseGetAreaFromOffice,
    pinErrorState,
    licenceTypes,
    businessRelationships,
    natureOfLicences,
    areas,
    businessPropertys,
    businessNatureTypes,
    offices,
    areaList,
    charYesNoType,
    premisesOwners,
    businessLands,
    phoneIndicators,
    defaultIndicative,
    onChangeInputFieldPhone,
    handleIndicative,
    handleOnChangePin,
    handleOnChangeOffice,
    onSubmit,
    onSubmitDraft,
    applicationForm,
    modalStateDraft,
    handleCloseModalDraftSuccesApplications,
    handleCloseModalDraftSuccesHome,
    modalStateCancel,
    modalStatePrint,
    handleCancelApplicationAndCloseModal,
    handleCloseModalCancel,
    handleCloseModalPrint,
    handleModalPrintTo,
    handleModalPrintContinue
  };
};

export default useApplicationFormRenewStep1;
