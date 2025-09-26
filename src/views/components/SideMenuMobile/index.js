import React, { Suspense } from 'react';
import useAssets from '../../../assets';
// import useControllers from '../../../controllers';
// import Button from '../Buttons';
import useComponents from '../../components';
import PropTypes from 'prop-types';

import {
  StyledSideMenu,
  StyledSideMenuOptions,
  StyledSideMenuItem,
  StyledSideBottomOptions,
} from './SideMenuMobile.styles';

const SideMenuMobile = (props) => {
  const {
    sideMenuStatus,
    handleLogout,
    handleRedirectProfile,
    handleRedirectMyApplications,
  } = props;
  const { useIcons } = useAssets();
  const {
    iconMyAplication: IconMyAplication,
    iconMyProfile: IconMyProfile,
    iconLogout: IconLogout,
  } = useIcons();

  const { Typography, ActivityIndicator, TycInfo, Copyright } = useComponents();

  return (
    <Suspense fallback={<ActivityIndicator />}>
      <StyledSideMenu sideMenuStatus={sideMenuStatus}>
        <StyledSideMenuOptions>
          <StyledSideMenuItem onClick={handleRedirectMyApplications}>
            <IconMyAplication />
            <Typography
              sx={{ fontSize: '12px', lineHeight: '17px', paddingLeft: '16px' }}
              color={'#FFFFFF'}
            >
              APPLICATIONS
            </Typography>
          </StyledSideMenuItem>
          <StyledSideMenuItem onClick={handleRedirectProfile}>
            <IconMyProfile />
            <Typography
              sx={{ fontSize: '12px', lineHeight: '17px', paddingLeft: '16px' }}
              color={'#FFFFFF'}
            >
              MY PROFILE
            </Typography>
          </StyledSideMenuItem>

          <StyledSideMenuItem onClick={handleLogout}>
            <IconLogout />
            <Typography
              sx={{ fontSize: '12px', lineHeight: '17px', paddingLeft: '16px' }}
              color={'#FFFFFF'}
            >
              LOGOUT
            </Typography>
          </StyledSideMenuItem>
        </StyledSideMenuOptions>
        <StyledSideBottomOptions>
          <TycInfo
            style={{ flexDirection: 'column', rowGap: '21px' }}
            color={'#DCE3BF'}
            sideMenu={true}
          />
          <Copyright
            style={{ placeContent: 'start', marginTop: '28px' }}
            color={'#F3F5F7'}
          />
        </StyledSideBottomOptions>
      </StyledSideMenu>
    </Suspense>
  );
};

SideMenuMobile.propTypes = {
  sideMenuStatus: PropTypes.bool,
  handleLogout: PropTypes.func,
  handleRedirectProfile: PropTypes.func,
  handleRedirectMyApplications: PropTypes.func,
};

SideMenuMobile.defaultProps = {
  handleLogout: () => {},
  handleRedirectProfile: () => {},
  handleRedirectMyApplications: () => {},
  sideMenuStatus: false,
};
export default SideMenuMobile;
