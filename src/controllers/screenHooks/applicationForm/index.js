import { useEffect, useState } from 'react';
import useApi from '../../../api';
import useHelpers from '../../../helpers';
import useModels from '../../../models';
import _ from 'lodash';
const useApplicationForm = () => {
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { usePromises, useNavigation } = useQuickFunctions();
  const { goBack } = useNavigation();
  const { promiseInProgressArea: promiseGetApplicationFiles } = usePromises(
    'getApplicationFiles'
  );
  // Api
  const { useActions } = useApi();
  const { dispatch, useApplicationFormActions } = useActions();
  const { actGetApplicationHelpData, actSetCurrentApplicationFormStep } =
    useApplicationFormActions();

  // Models
  const { useSelectors } = useModels();
  const {
    useSelector,
    useApplicationFormSelectors,
    useRenewalNoticesSelectors,
  } = useSelectors();
  const { applicationFormWizardSelector, applicationFormSelector } =
    useApplicationFormSelectors();
  const { renewalFormWizardSelector } = useRenewalNoticesSelectors();
  const { applicationFormWizard, currentStep, stepsEnabled } = useSelector(
    applicationFormWizardSelector
  );
  const { renewalFormWizard } = useSelector(renewalFormWizardSelector);
  const { applicationForm } = useSelector(applicationFormSelector);

  // React
  const [wrapperState, setWrapperState] = useState({
    title: 'Application for a new liquor licence',
    subtitle: '',
    description: '',
    width: '892px',
  });

  useEffect(() => {
    dispatch(actGetApplicationHelpData());
  }, []);

  useEffect(() => {
    handleWrapperStateFromWizard(currentStep);
  }, [currentStep]);

  /**Handlers */
  // Handlers: Wrapper
  const handleWrapperStateFromWizard = (currentWizardStep) => {
    const newWrapperState = _.find(
      applicationForm.is_renewal === 1
        ? renewalFormWizard
        : applicationFormWizard,
      (wizardStep) => wizardStep.value === currentWizardStep
    );
    setWrapperState(newWrapperState.wrapper);
  };

  // Handlers: Wizards
  const handleOnChangeWizardStep = (event) => {
    const nextStep = parseInt(event.target.value);
    dispatch(actSetCurrentApplicationFormStep({ step: nextStep }));
  };

  const hadleCurrentStepFromBackButton = () => {
    currentStep !== 1 &&
      dispatch(actSetCurrentApplicationFormStep({ step: currentStep - 1 }));
  };

  return {
    promiseGetApplicationFiles,
    applicationForm,
    goBack,

    hadleCurrentStepFromBackButton,

    wrapperState,

    renewalFormWizard,
    applicationFormWizard,
    currentStep,
    stepsEnabled,
    handleOnChangeWizardStep,
  };
};

export default useApplicationForm;
