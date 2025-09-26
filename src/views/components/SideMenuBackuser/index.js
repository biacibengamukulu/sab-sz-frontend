import React, { Suspense } from 'react';
// import useControllers from '../../../controllers';
// import Button from '../Buttons';
import useComponents from '..';

import {
  StyledSideMenu,
  StyledSideMenuOptions,
  StyledSideMenuItem,
  StyledSideBottomOptions,
  StyledTypographyItem,
  StyledUserSideMenu,
  StyledTypographyUser,
  StyledIconUsers,
  StyledIconMyAplication,
  StyledIconMyProfile,
  StyledIconNotification,
  StyledIconLogs,
  StyledIconBlogs,
} from './SideMenuBackuser.styles';
import useControllers from '../../../controllers';

const SideMenuBackuser = () => {
  const { ActivityIndicator, TycInfo, Copyright } = useComponents();

  const { useComponentHooks } = useControllers();
  const { useSideMenuBackuser, useNotifications } = useComponentHooks();
  const {
    handleUsersSelected,
    handleApplicationsSelected,
    handleApplicationsRenewSelected,
    handleMyProfileSelected,
    handleComunicationHubSelected,
    handleLogsSelected,
    handleBlogsSelected,
    handleRedirectUsers,
    handleRedirectApplications,
    handleRedirectApplicationsRenew,
    handleRedirectProfile,
    handleRedirectLogs,
    handleRedirectBlogs,
    profile,
  } = useSideMenuBackuser();
  const { openSideNotifications } = useNotifications();

  return (
    <Suspense fallback={<ActivityIndicator />}>
      <StyledSideMenu>
        <StyledSideMenuOptions>
          <StyledUserSideMenu>
            <StyledTypographyUser>
              {profile?.roleType?.name?.toUpperCase()}
            </StyledTypographyUser>
          </StyledUserSideMenu>

          {(profile?.roleType?.id === 3 || profile?.roleType?.id === 1) && (
            <StyledSideMenuItem
              onClick={handleRedirectUsers}
              isSelected={handleUsersSelected()}
            >
              <StyledIconUsers color={'#ffffff'} />
              <StyledTypographyItem>Users</StyledTypographyItem>
            </StyledSideMenuItem>
          )}

          <StyledSideMenuItem
            onClick={handleRedirectApplications}
            isSelected={handleApplicationsSelected()}
          >
            <StyledIconMyAplication color={'#ffffff'} />
            <StyledTypographyItem> Applications </StyledTypographyItem>
          </StyledSideMenuItem>

          
          <StyledSideMenuItem
            onClick={handleRedirectApplicationsRenew}
            isSelected={handleApplicationsRenewSelected()}
          >
            <StyledIconMyAplication color={'#ffffff'} />
            <StyledTypographyItem> Renewals </StyledTypographyItem>
          </StyledSideMenuItem>

          <StyledSideMenuItem
            onClick={handleRedirectProfile}
            isSelected={handleMyProfileSelected()}
          >
            <StyledIconMyProfile color={'#ffffff'} />
            <StyledTypographyItem>My profile</StyledTypographyItem>
          </StyledSideMenuItem>
          <StyledSideMenuItem
            onClick={openSideNotifications}
            isSelected={handleComunicationHubSelected()}
          >
            <StyledIconNotification color={'#ffffff'} />
            <StyledTypographyItem>Notifications</StyledTypographyItem>
          </StyledSideMenuItem>
          {profile?.roleType?.id === 3 && (
            <StyledSideMenuItem
              onClick={handleRedirectLogs}
              isSelected={handleLogsSelected()}
            >
              <StyledIconLogs color={'#ffffff'} />
              <StyledTypographyItem>Logs</StyledTypographyItem>
            </StyledSideMenuItem>
          )}
          {(profile?.roleType?.id === 3 || profile?.roleType?.id === 1) && (
            <StyledSideMenuItem
              onClick={handleRedirectBlogs}
              isSelected={handleBlogsSelected()}
            >
              <StyledIconBlogs />
              <StyledTypographyItem>Blogs</StyledTypographyItem>
            </StyledSideMenuItem>
          )}
        </StyledSideMenuOptions>
        <StyledSideBottomOptions>
          <TycInfo
            style={{
              margin: '0px',
              flexDirection: 'column',
              alignItems: 'flex-start',
              rowGap: '24px',
              color: '#ffffff',
            }}
            color={'#ffffff'}
            sideMenu={true}
          />
          <Copyright
            style={{ placeContent: 'start', height: '48px' }}
            color={'#ffffff'}
          />
        </StyledSideBottomOptions>
      </StyledSideMenu>
    </Suspense>
  );
};

export default SideMenuBackuser;
