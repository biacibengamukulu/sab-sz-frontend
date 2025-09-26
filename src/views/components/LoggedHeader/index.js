import React, { Suspense } from 'react';
import useAssets from '../../../assets';
import useControllers from '../../../controllers';
import ProfileNavBar from '../ProfileNavBar';
import PropTypes from 'prop-types';

import {
  StyledLoggedHeader,
  StyledLoggedNavBar,
  StyledLogoContainer,
  StyledShieldLogoContainer,
  StyledLogoLabel,
  StyledLogoMobileContainer,
  StyledHamMenuContainer,
  StyledContainerLinks,
  StyledContainerSection,
  StyledSectionHeader,
  StyledActiveLink,
  StyledNotificationContainerBackuser,
} from './LoggedHeader.styles';
import useComponents from '..';

const LoggedHeader = (props) => {
  const { openSideMenu } = props;
  const { ActivityIndicator, Notifications } = useComponents();

  const { useIcons } = useAssets();
  const {
    // iconLogo: IconLogo,
    iconHamMenu: IconHamMenu,
  } = useIcons();

  //Hooks
  const { useComponentHooks } = useControllers();
  const { useLoggedHeader } = useComponentHooks();
  const {
    gotToHome,
    gotToMyApplications,
    goToRenewals,
    accessToken,
    handleRedirectNewApplication,
    profile,

    handleShowNewApplication,
    handleShowTrackStatus,
    handleShowRenewals,
    // handleShowDrafts,
    // handleShowCommunicationHub,
  } = useLoggedHeader();
  return (
    <Suspense fallback={<ActivityIndicator />}>
      <StyledLoggedHeader>
        <StyledContainerLinks>
          <StyledLogoContainer
            onClick={() => {
              profile.roleType.roleType !== 'frontUser'
                ? gotToMyApplications()
                : gotToHome();
            }}
          >
            <StyledShieldLogoContainer />
            <StyledLogoLabel>Eswatini Liquor Licensing</StyledLogoLabel>
          </StyledLogoContainer>

          {profile.roleType?.roleType === 'frontUser' && (
            <>
              <StyledContainerSection onClick={handleRedirectNewApplication}>
                {handleShowNewApplication() && <StyledActiveLink />}
                <StyledSectionHeader
                  color={handleShowNewApplication() ? 'neutral-10' : 'white'}
                >
                  NEW APPLICATION
                </StyledSectionHeader>
              </StyledContainerSection>
              <StyledContainerSection onClick={gotToMyApplications}>
                {handleShowTrackStatus() && <StyledActiveLink />}
                <StyledSectionHeader
                  color={handleShowTrackStatus() ? 'neutral-10' : 'white'}
                >
                  TRACK STATUS
                </StyledSectionHeader>
              </StyledContainerSection>
              <StyledContainerSection onClick={goToRenewals}>
                {handleShowRenewals() && <StyledActiveLink />}
                <StyledSectionHeader
                  color={handleShowRenewals() ? 'neutral-10' : 'white'}
                >
                  RENEWALS
                </StyledSectionHeader>
              </StyledContainerSection>
              {/* 
              <StyledContainerSection onClick={handleRedirectNewApplication}>
                {handleShowDrafts() && <StyledActiveLink />}
                <StyledSectionHeader
                  color={handleShowDrafts() ? 'neutral-10' : 'white'}
                >
                  DRAFTS
                </StyledSectionHeader>
              </StyledContainerSection> */}

              {/* <StyledContainerSection onClick={handleRedirectNewApplication}>
                {handleShowCommunicationHub() && <StyledActiveLink />}
                <StyledSectionHeader
                  color={handleShowCommunicationHub() ? 'neutral-10' : 'white'}
                >
                  COMMUNICATION HUB
                </StyledSectionHeader>
              </StyledContainerSection> */}
            </>
          )}
        </StyledContainerLinks>
        {profile.roleType?.id !== 4 && (
          <StyledNotificationContainerBackuser>
            <Notifications />
          </StyledNotificationContainerBackuser>
        )}
        {accessToken && (
          <StyledHamMenuContainer onClick={openSideMenu}>
            <IconHamMenu />
          </StyledHamMenuContainer>
        )}
        <StyledLogoMobileContainer onClick={gotToHome} />
        <StyledLoggedNavBar>
          <ProfileNavBar />
        </StyledLoggedNavBar>
      </StyledLoggedHeader>
    </Suspense>
  );
};

LoggedHeader.propTypes = {
  openSideMenu: PropTypes.func,
};

LoggedHeader.defaultProps = {
  className: '',
  color: 'secondary',
  openSideMenu: () => {},
};
export default LoggedHeader;
