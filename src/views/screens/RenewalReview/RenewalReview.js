import React, { Suspense } from 'react';
import useComponents from '../../components';
import useLayouts from '../../layouts';
import useControllers from '../../../controllers';
import {
  StyledSectionApplicationReview,
  StyledWrapperTitle,
  StyledWizardDynamic,
  StyledRefDateContainer,
  StyledFieldRowRefContainer,
  StyledContainerComments,
  StyledFieldRowDateContainer,
  StyledFieldRowTitle,
  StyledFieldRowReference,
  StyledFieldRowDate,
  StyledConteinerCircularProgress,
  StyledCircularProgress,
  StyledApplicationReviewUserTypeConteiner,
} from './RenewalReview.styles';

const RenewalReview = () => {
  const {
    ActivityIndicator,
    ApplicationIssuanceFeeFrontUser,
    ApplicationLicenseIssued,
    ApplicationReviewAdvertisingFee,
    ApplicationReviewStep1,
    ApplicationReviewStep2,
    ApplicationReviewStep3,
    ApplicationReviewStep4,
    ApplicationReviewStep5,
    ApplicationTrackingInformation,
    InternalComments,
    StatusVisualization,
    Wrapper,
  } = useComponents();

  const { PublicContentLayout } = useLayouts();

  // Hooks
  const { useScreenHooks } = useControllers();
  const { useRenewalReview } = useScreenHooks();
  const {
    promiseGetApplicationFiles,
    applicationForm,
    applicationFormWizard,
    profile,
    goBack,
    handleStatusApplicationPercent,
    handleDateFormat,

    wrapperState,

    applicationReviewWizard,
    currentStep,
    stepsEnabled,
    handleOnChangeWizardStep,
  } = useRenewalReview();

  return (
    <PublicContentLayout background="secondary">
      <Suspense fallback={<ActivityIndicator />}>
        <StyledSectionApplicationReview>
          <Wrapper
            title={
              <StyledWrapperTitle>{wrapperState.title}</StyledWrapperTitle>
            }
            subTitle={wrapperState.subtitle}
            isProfile={true}
            description={wrapperState.description}
            maxWidth={wrapperState.width}
            withBackButton={true}
            onClickBackButton={goBack}
            wizard={
              profile.roleType.id !== 4 &&
              applicationForm.status.id > 2 &&
              applicationForm.status.id !== 9 &&
              applicationForm.status.id !== 8 &&
              applicationForm.status.id < 14 ? (
                <StyledWizardDynamic
                  fetchingData={promiseGetApplicationFiles}
                  fetchingLabel={'Fetching files...'}
                  currentStep={currentStep}
                  wizardStatus={applicationReviewWizard}
                  stepsEnabled={stepsEnabled}
                  handleonChangeStep={handleOnChangeWizardStep}
                />
              ) : (
                applicationForm.status.id === 10 && (
                  <StyledWizardDynamic
                    fetchingData={promiseGetApplicationFiles}
                    fetchingLabel={''}
                    currentStep={4}
                    wizardStatus={applicationFormWizard}
                    stepsEnabled={1}
                    handleonChangeStep={() => {}}
                  />
                )
              )
            }
          >
            {/* Ref and Date application info */}
            <StyledRefDateContainer>
              <StyledFieldRowRefContainer>
                {(applicationForm.licenseNumber ||
                  applicationForm.reference) && (
                  <>
                    <StyledFieldRowTitle>REF.</StyledFieldRowTitle>
                    <StyledFieldRowReference variant="h3">
                      {applicationForm.licenseNumber
                        ? applicationForm.licenseNumber
                        : applicationForm.reference}
                    </StyledFieldRowReference>
                    {profile.roleType.id !== 4 && (
                      <StyledContainerComments>
                        <InternalComments />
                      </StyledContainerComments>
                    )}
                  </>
                )}
                <StatusVisualization
                  idStatus={
                    applicationForm.status.id && applicationForm.status.id
                  }
                  userId={profile.roleType.id && profile.roleType.id}
                />
              </StyledFieldRowRefContainer>
              <StyledFieldRowDateContainer>
                <StyledFieldRowTitle>DATE:</StyledFieldRowTitle>
                <StyledFieldRowDate>
                  {handleDateFormat(applicationForm.date)}
                </StyledFieldRowDate>
              </StyledFieldRowDateContainer>
            </StyledRefDateContainer>

            {applicationForm.status.id === 8 && <ApplicationLicenseIssued />}

            {/* Application review Front User */}
            {profile.roleType.id === 4 ? (
              <StyledApplicationReviewUserTypeConteiner>
                {applicationForm.status.id !== 8 && (
                  <StyledConteinerCircularProgress>
                    <StyledCircularProgress
                      value={handleStatusApplicationPercent()}
                    />
                  </StyledConteinerCircularProgress>
                )}

                {applicationForm.status.id === 10 ||
                applicationForm.status.id === 12 ||
                applicationForm.status.id === 13 ||
                applicationForm.status.id === 17 ? (
                  <ApplicationIssuanceFeeFrontUser />
                ) : (
                  <ApplicationTrackingInformation />
                )}
              </StyledApplicationReviewUserTypeConteiner>
            ) : (
              // Application review BackUser
              <StyledApplicationReviewUserTypeConteiner>
                {applicationForm.status.id === 2 ||
                (applicationForm.status.id > 13 &&
                  applicationForm.status.id < 17) ? (
                  <ApplicationReviewAdvertisingFee>
                    <ApplicationTrackingInformation />
                  </ApplicationReviewAdvertisingFee>
                ) : (
                  <>
                    {currentStep === 1 && (
                      <ApplicationReviewStep1>
                        <ApplicationTrackingInformation />
                      </ApplicationReviewStep1>
                    )}
                    {currentStep === 2 && (
                      <ApplicationReviewStep2>
                        <ApplicationTrackingInformation />
                      </ApplicationReviewStep2>
                    )}
                    {currentStep === 3 && (
                      <ApplicationReviewStep3>
                        <ApplicationTrackingInformation />
                      </ApplicationReviewStep3>
                    )}
                    {currentStep === 4 && (
                      <ApplicationReviewStep4>
                        <ApplicationTrackingInformation />
                      </ApplicationReviewStep4>
                    )}
                    {currentStep === 5 && (
                      <ApplicationReviewStep5>
                        <ApplicationTrackingInformation />
                      </ApplicationReviewStep5>
                    )}
                  </>
                )}
              </StyledApplicationReviewUserTypeConteiner>
            )}

            {/* Application review Back User */}

            {/* {currentStep === 1 && <ApplicationFormStep1 />}
            {currentStep === 2 && <ApplicationFormStep2 />}
            {currentStep === 3 && <ApplicationFormStep3 />}
            {currentStep === 4 && <ApplicationFormStep4 />}
            {currentStep === 5 && <ApplicationFormStep5 />} */}
          </Wrapper>
        </StyledSectionApplicationReview>
      </Suspense>
    </PublicContentLayout>
  );
};

export default RenewalReview;
