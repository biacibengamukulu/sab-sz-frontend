import React from 'react';
import PropTypes from 'prop-types';
import useModels from '../../../models';
import {
  StyledPublicContent,
  StyledOuterContent,
  StyledInnerContentContainer,
} from './publicContent.styles';
import useComponents from '../../components';
import useControllers from '../../../controllers';

const PublicContentLayout = ({ children, background }) => {
  const { Header, LoggedHeader, Footer, SideMenuMobile } = useComponents();

  const { useSelectors } = useModels();
  const { useSelector, useAuthSelectors } = useSelectors();
  const { session } = useAuthSelectors();
  const { accessToken } = useSelector(session);

  const { useComponentHooks } = useControllers();
  const { useSideMenuMobile } = useComponentHooks();
  const { sideMenuStatus, openSideMenu, handleLogout, handleRedirectProfile } =
    useSideMenuMobile();
  /**
   * background prop
   * 'primary' => Home; 'secondary' => forms; 'tertiary' => perfil;
   */
  return (
    <StyledPublicContent background={background}>
      <SideMenuMobile
        sideMenuStatus={sideMenuStatus}
        handleLogout={handleLogout}
        handleRedirectProfile={handleRedirectProfile}
      />
      <StyledOuterContent>
        {accessToken ? (
          <LoggedHeader openSideMenu={openSideMenu} />
        ) : (
          <Header />
        )}
        <StyledInnerContentContainer>
          {children}
          <Footer />
        </StyledInnerContentContainer>
      </StyledOuterContent>
    </StyledPublicContent>
  );
};

PublicContentLayout.propTypes = {
  children: PropTypes.any,
  background: PropTypes.string,
};
PublicContentLayout.defaultProps = {
  background: 'primary',
};
export default PublicContentLayout;
