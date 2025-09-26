import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import useAssets from '../../../assets';
import useControllers from '../../../controllers';

// Styles
import {
  StyledProfileInfoContainer,
  StyledProfileUser,
  StyledUserName,
  StyledUserType,
  StyledContainerImage,
  StyledAvatarImage,
  StyledContainerMenu,
  StyledMenu,
  StyledMenuItem,
  StyledMenuArrow,
  StyledArrowDownContainer,
  StyledMenuRow,
  StyledTotalApplications,
} from './ProfileNavBar.styles';
import useComponents from '..';

const ProfileNavBar = (props) => {
  const { className } = props;
  const { ActivityIndicator, Notifications } = useComponents();
  const { useIcons } = useAssets();
  const { iconArrowUpMenu: IconArrowUpMenu, iconArrowDown: IconArrowDown } =
    useIcons();

  const { useComponentHooks } = useControllers();
  const { useProfileNavBar } = useComponentHooks();
  const {
    menuStatus,
    openMenu,
    handleLogout,
    handleRedirectProfile,
    userProfileData,
    handleRedirectMyApplications,
    profile,
  } = useProfileNavBar();

  return (
    <Suspense fallback={<ActivityIndicator />}>
      <StyledProfileInfoContainer className={className}>
        {profile.roleType.id === 4 && <Notifications />}
        <StyledProfileUser>
          <StyledUserName>{`${userProfileData?.name.split(' ')[0]} ${
            userProfileData?.surname.split(' ')[0]
          }`}</StyledUserName>

          <StyledUserType>{`${userProfileData?.roleType}`}</StyledUserType>
        </StyledProfileUser>
        <StyledContainerImage onClick={openMenu}>
          <StyledAvatarImage src={userProfileData.image} />
          <StyledArrowDownContainer>
            <IconArrowDown />
          </StyledArrowDownContainer>
        </StyledContainerImage>
      </StyledProfileInfoContainer>
      <StyledContainerMenu menu={menuStatus}>
        <StyledMenuArrow>
          <IconArrowUpMenu />
        </StyledMenuArrow>
        <StyledMenu>
          <StyledMenuItem onClick={handleRedirectProfile}>
            MY PROFILE
          </StyledMenuItem>
          <StyledMenuRow onClick={handleRedirectMyApplications}>
            <StyledMenuItem>APPLICATIONS</StyledMenuItem>
            {profile.applicationsCount && profile.roleType.id === 4 ? (
              <StyledTotalApplications>
                {profile.applicationsCount}
              </StyledTotalApplications>
            ) : (
              <></>
            )}
          </StyledMenuRow>
          <StyledMenuItem onClick={handleLogout}>LOGOUT</StyledMenuItem>
        </StyledMenu>
      </StyledContainerMenu>
    </Suspense>
  );
};

ProfileNavBar.propTypes = {
  className: PropTypes.string,
};

export default ProfileNavBar;
