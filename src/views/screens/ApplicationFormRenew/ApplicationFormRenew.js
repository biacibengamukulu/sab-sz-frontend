import React, { Suspense } from 'react';
import useComponents from '../../components';
import useLayouts from '../../layouts';
import useControllers from '../../../controllers';
import {
  StyledSectionNewApplication,
  StyledSectionNewApplicationInnerContainer,
  StyledWrapperTitle,
  StyledWizardDynamic,
} from './ApplicationFormRenew.styles';

const ApplicationForm = () => {
  const {
    ActivityIndicator,
    ApplicationFormRenewStep1,
    ApplicationFormRenewStep2,
    ApplicationFormRenewStep3,
    Wrapper,
  } = useComponents();

  const { PrivateContentLayout } = useLayouts();

  // Hooks
  const { useScreenHooks } = useControllers();
  const { useApplicationFormRenew } = useScreenHooks();
  const {
    promiseGetApplicationFiles,

    hadleCurrentStepFromBackButton,

    wrapperState,

    renewalFormRenewWizard,
    currentStep,
    stepsEnabled,
    handleOnChangeWizardStep,
  } = useApplicationFormRenew();

  return (
    <PrivateContentLayout background="secondary">
      <Suspense fallback={<ActivityIndicator />}>
        <StyledSectionNewApplication>
          <Wrapper
            title={
              <StyledWrapperTitle> {wrapperState.title}</StyledWrapperTitle>
            }
            subTitle={wrapperState.subtitle}
            isProfile={true}
            description={wrapperState.description}
            maxWidth={wrapperState.width}
            withBackButton={currentStep > 1}
            onClickBackButton={hadleCurrentStepFromBackButton}
            wizard={
                <StyledWizardDynamic
                  fetchingData={promiseGetApplicationFiles}
                  fetchingLabel={'Fetching files...'}
                  currentStep={currentStep}
                  wizardStatus={renewalFormRenewWizard}
                  stepsEnabled={stepsEnabled}
                  handleonChangeStep={handleOnChangeWizardStep}
                />
            }
          >
            <StyledSectionNewApplicationInnerContainer>
              {currentStep === 1 && <ApplicationFormRenewStep1 />}
              {currentStep === 2 && <ApplicationFormRenewStep2 />}
              {currentStep === 3 && <ApplicationFormRenewStep3 />}
            </StyledSectionNewApplicationInnerContainer>
          </Wrapper>
        </StyledSectionNewApplication>
      </Suspense>
    </PrivateContentLayout>
  );
};

export default ApplicationForm;
