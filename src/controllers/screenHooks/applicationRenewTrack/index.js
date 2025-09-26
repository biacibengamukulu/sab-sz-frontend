import { useEffect, useState } from 'react';
import useApi from '../../../api';
import useHelpers from '../../../helpers';
import useModels from '../../../models';
import _ from 'lodash';
const useApplicationRenewTrack = () => {
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { usePromises, useNavigation } = useQuickFunctions();
  const { navigateTo, goBack } = useNavigation();
  const { promiseInProgressArea: promiseGetApplicationFiles } = usePromises(
    'getApplicationFiles'
  );
  // Api
  const { useActions } = useApi();
  const { dispatch, useApplicationReviewActions } = useActions();
  const { actSetCurrentApplicationReviewStep } = useApplicationReviewActions();

  // Models
  const { useSelectors } = useModels();
  const {
    useSelector,
    useApplicationReviewSelectors,
    useApplicationFormSelectors,
    useUserSelectors,
  } = useSelectors();
  const { applicationReviewWizardSelector } = useApplicationReviewSelectors();
  const { applicationFormSelector, applicationFormWizardSelector } =
    useApplicationFormSelectors();
  const { userSelector } = useUserSelectors();
  const { applicationReviewWizard, currentStep, stepsEnabled } = useSelector(
    applicationReviewWizardSelector
  );
  const { applicationForm } = useSelector(applicationFormSelector);
  const { applicationFormWizard } = useSelector(applicationFormWizardSelector);
  const { profile } = useSelector(userSelector);
  // const { applicationForm } = useSelector(applicationFormSelector);

  // React
  const [wrapperState, setWrapperState] = useState({
    title: 'Application',
    subtitle: '',
    description: '',
    width: '1220px',
  });

  useEffect(() => {
    !applicationForm.id && navigateTo('/applications');
  }, []);

  useEffect(() => {
    handleWrapperStateFromWizard(currentStep);
  }, [currentStep]);

  /**Handlers */
  // Handlers: Wrapper
  const handleWrapperStateFromWizard = (currentWizardStep) => {
    const newWrapperState = _.find(
      applicationReviewWizard,
      (wizardStep) => wizardStep.value === currentWizardStep
    );
    // console.warn(newWrapperState);
    setWrapperState(newWrapperState.wrapper);
  };

  // Handlers: Wizards
  const handleOnChangeWizardStep = (event) => {
    const nextStep = parseInt(event.target.value);
    dispatch(actSetCurrentApplicationReviewStep({ step: nextStep }));
  };

  // Handlers: Date application
  const handleDateFormat = (dateOld) => {
    const date = new Date(dateOld);
    return `${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}/${
      date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    }/${date.getFullYear()}`;
  };

  // Handlers: status application
  const handleStatusApplicationPercent = () => {
    /**
     * The application percent is given by the status id
     */
    switch (applicationForm.status.id) {
      case 3:
        // Submitted
        return 0;
      case 4:
        // Report pending
        return 20;
      case 5:
        // Report approval
        return 40;
      case 6:
        // Voting pending
        return 60;
      case 10:
        // Payment fee pending
        return 80;    
      case 11:
        // Last Approve
        return 80;
      case 12:
        // Review Payment
        return 80;
      case 8:
        // Approved
        return 100;
      case 9:
        // Rejected
        return 100;
      default:
        return 0;
    }
  };
  return {
    setWrapperState,
    promiseGetApplicationFiles,
    applicationForm,
    applicationFormWizard,
    profile,
    goBack,
    handleDateFormat,
    handleStatusApplicationPercent,

    wrapperState,

    applicationReviewWizard,
    currentStep,
    stepsEnabled,
    handleOnChangeWizardStep,
  };
};

export default useApplicationRenewTrack;
