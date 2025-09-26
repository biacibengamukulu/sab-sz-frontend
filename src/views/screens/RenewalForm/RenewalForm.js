import React, { Suspense } from 'react';
import useComponents from '../../components';
import useLayouts from '../../layouts';
import useControllers from '../../../controllers';
import {
  StyledSectionNewApplication,
  StyledSectionNewApplicationInnerContainer,
  StyledWrapperTitle,
  StyledWizardDynamic,
  StyledTimeLeftContainer,
  StyledTimeLeftComponent,
} from './RenewalForm.styles';

const RenewalForm = () => {
  const {
    ActivityIndicator,
    RenewalFormStep1,
    RenewalFormStep2,
    RenewalFormStep3,

    // ApplicationFormStep2,
    // ApplicationFormStep3,
    // ApplicationFormStep4,
    // ApplicationFormStep5,
    Wrapper,
  } = useComponents();

  const { PrivateContentLayout } = useLayouts();

  // Hooks
  const { useScreenHooks } = useControllers();
  const { useRenewalForm } = useScreenHooks();
  const {
    promiseGetApplicationFiles,
    applicationForm,

    hadleCurrentStepFromBackButton,

    wrapperState,

    renewalFormWizard,
    currentStep,
    stepsEnabled,
    handleOnChangeWizardStep,
  } = useRenewalForm();

  return (
    <PrivateContentLayout background="secondary">
      <Suspense fallback={<ActivityIndicator />}>
        <StyledSectionNewApplication>
          <Wrapper
            title={
              <StyledWrapperTitle>{wrapperState.title}</StyledWrapperTitle>
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
                fetchingLabel={'Fetching files..'}
                currentStep={currentStep}
                wizardStatus={renewalFormWizard}
                stepsEnabled={stepsEnabled}
                handleonChangeStep={handleOnChangeWizardStep}
              />
            }
          >
            <StyledSectionNewApplicationInnerContainer>
              {applicationForm.uploadDocumentExpires &&
                applicationForm.status.id === 2 && (
                  <StyledTimeLeftContainer>
                    <StyledTimeLeftComponent
                      timeExpiration={applicationForm.uploadDocumentExpires}
                    />
                  </StyledTimeLeftContainer>
                )}
              {currentStep === 1 && <RenewalFormStep1 />}
              {currentStep === 2 && <RenewalFormStep2 />}
              {currentStep === 3 && <RenewalFormStep3 />}
              {/* {currentStep === 2 && <ApplicationFormStep2 />}
              {currentStep === 3 && <ApplicationFormStep3 />}
              {currentStep === 4 && <ApplicationFormStep4 />}
              {currentStep === 5 && <ApplicationFormStep5 />} */}
            </StyledSectionNewApplicationInnerContainer>
          </Wrapper>
        </StyledSectionNewApplication>
      </Suspense>
    </PrivateContentLayout>
  );
};

export default RenewalForm;
