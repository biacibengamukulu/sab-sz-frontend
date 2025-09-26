import { useEffect, useState } from 'react';
import useApi from '../../../api';
import useHelpers from '../../../helpers';
import useModels from '../../../models';
import _ from 'lodash';
const useRenewalForm = () => {
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
  const {
    actGetApplicationHelpData,
    // actGetApplicationFiles,
    actSetCurrentApplicationFormStep,
  } = useApplicationFormActions();

  // Models
  const { useSelectors } = useModels();
  const {
    useSelector,
    useApplicationFormSelectors,
    useRenewalNoticesSelectors,
  } = useSelectors();
  const { applicationFormSelector } = useApplicationFormSelectors();
  const { renewalFormWizardSelector } = useRenewalNoticesSelectors();
  const { renewalFormWizard, currentStep, stepsEnabled } = useSelector(
    renewalFormWizardSelector
  );
  const { applicationForm } = useSelector(applicationFormSelector);
  // const { applicationForm } = useSelector(applicationFormSelector);

  // React
  const [wrapperState, setWrapperState] = useState({
    title: 'Renewal liquor licence',
    subtitle: '',
    description: '',
    width: '892px',
  });

  useEffect(() => {
    dispatch(actGetApplicationHelpData());

    // applicationForm.id && dispatch(actGetApplicationFiles(applicationForm.id));
  }, []);

  useEffect(() => {
    handleWrapperStateFromWizard(currentStep);
  }, [currentStep]);

  /**Handlers */
  // Handlers: Wrapper
  const handleWrapperStateFromWizard = (currentWizardStep) => {
    const newWrapperState = _.find(
      renewalFormWizard,
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
    currentStep,
    stepsEnabled,
    handleOnChangeWizardStep,
  };
};

export default useRenewalForm;
