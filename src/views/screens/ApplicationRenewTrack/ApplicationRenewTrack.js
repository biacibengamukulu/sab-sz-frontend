import React, { Suspense } from 'react';
import useComponents from '../../components';
import useLayouts from '../../layouts';
import useControllers from '../../../controllers';
import {
  StyledSectionApplicationRenewTrack,
  StyledWrapperTitle,
  StyledApplicationReviewUserTypeConteiner,
  StyledRefDateContend,
  StyledRefDateInfo,
  StyledRefDateInfoBy
} from './ApplicationRenewTrack.styles';

const ApplicationRenewTrack = () => {
  const {
    ActivityIndicator,
    ApplicationRenewTrackingInformation,
    Wrapper,
  } = useComponents();

  const { PublicContentLayout } = useLayouts();

  // Hooks
  const { useScreenHooks } = useControllers();
  const { useApplicationRenewTrack } = useScreenHooks();
  const {
    applicationForm,
    goBack,
    handleDateFormat,
    wrapperState,
  } = useApplicationRenewTrack();

  return (
    <PublicContentLayout background="secondary">
      <Suspense fallback={<ActivityIndicator />}>
        <StyledSectionApplicationRenewTrack>
          <Wrapper
            title={ <StyledWrapperTitle align='center'>License Renewal</StyledWrapperTitle>   }
            isProfile={true}
            maxWidth={wrapperState.width}
            withBackButton={true}
            onClickBackButton={goBack}
          >
            {/* Ref and Date application info */}
            
            <StyledRefDateContend>
                <StyledRefDateInfo>
                    <div><b>Application Reference:</b> {applicationForm.reference} </div>
                    <div><b>Application Date:</b> {handleDateFormat(applicationForm.date)}</div>
                </StyledRefDateInfo>
                <StyledRefDateInfoBy>
                  Review the information for each category independently; once finished, check the reviewed box. By checking all three boxes you can proceed to approve or reject the license. 
                </StyledRefDateInfoBy>
            </StyledRefDateContend>

          
              <StyledApplicationReviewUserTypeConteiner>
                  <ApplicationRenewTrackingInformation />
              </StyledApplicationReviewUserTypeConteiner>

          </Wrapper>
        </StyledSectionApplicationRenewTrack>
      </Suspense>
    </PublicContentLayout>
  );
};

export default ApplicationRenewTrack;
