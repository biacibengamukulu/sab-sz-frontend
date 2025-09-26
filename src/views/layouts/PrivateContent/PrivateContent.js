import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledPrivateContent,
  StyledOuterContent,
  StyledOuterContentBackuser,
  StyledInnerContentContainer,
  StyledInnerContentBackuser,
} from './privateContent.styles';
import useComponents from '../../components';
import useControllers from '../../../controllers';

const PrivateContentLayout = ({ children, background }) => {
  const { Footer, LoggedHeader, SideMenuMobile, SideMenuBackuser } =
    useComponents();

  const { useComponentHooks } = useControllers();
  const { useSideMenuMobile, useSideMenuBackuser } = useComponentHooks();

  const {
    sideMenuStatus,
    openSideMenu,
    handleLogout,
    handleRedirectProfile,
    handleRedirectMyApplications,
    handleRedirectRenewals,
  } = useSideMenuMobile();
  const { profile } = useSideMenuBackuser();
  /**
   * background prop
   * 'primary' => Home; 'secondary' => forms; 'tertiary' => perfil;
   */
  return (
    <StyledPrivateContent background={background}>
      <SideMenuMobile
        sideMenuStatus={sideMenuStatus}
        handleLogout={handleLogout}
        handleRedirectProfile={handleRedirectProfile}
        handleRedirectMyApplications={handleRedirectMyApplications}
        handleRedirectRenewals={handleRedirectRenewals}
      />
      {profile.roleType.roleType === 'frontUser' ? (
        <StyledOuterContent>
          <LoggedHeader openSideMenu={openSideMenu} />
          <StyledInnerContentContainer>
            {children}
            <Footer />
          </StyledInnerContentContainer>
        </StyledOuterContent>
      ) : (
        <StyledOuterContentBackuser>
          <LoggedHeader openSideMenu={openSideMenu} />
          <StyledInnerContentBackuser>
            <SideMenuBackuser
              sideMenuStatus={sideMenuStatus}
              handleLogout={handleLogout}
              handleRedirectProfile={handleRedirectProfile}
              handleRedirectMyApplications={handleRedirectMyApplications}
            />
            {children}
          </StyledInnerContentBackuser>
        </StyledOuterContentBackuser>
        // <StyledInnerContent>
        //   <LoggedHeader openSideMenu={openSideMenu} />
        //   <StyledInnerContentBackuser>
        //     <SideMenuBackuser
        //       sideMenuStatus={sideMenuStatus}
        //       handleLogout={handleLogout}
        //       handleRedirectProfile={handleRedirectProfile}
        //       handleRedirectMyApplications={handleRedirectMyApplications}
        //     />
        //     {children}
        //   </StyledInnerContentBackuser>
        // </StyledInnerContent>
      )}
    </StyledPrivateContent>
  );
};

PrivateContentLayout.propTypes = {
  children: PropTypes.any,
  background: PropTypes.string,
};
PrivateContentLayout.defaultProps = {
  background: 'primary',
};
export default PrivateContentLayout;
