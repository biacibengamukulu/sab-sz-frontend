import React from 'react';
import useControllers from '../../../controllers';
import {
  StyledHeader,
  StyledNavBar,
  StyledButtonLogin,
  StyledButton,
  StyledLogoContainer,
  StyledLogoLabel,
  StyledShieldLogoContainer,
  StyledLogoMobileContainer,
  // StyledHamMenuContainer,
} from './Header.styles';

const Header = () => {
  //Hooks
  const { useComponentHooks } = useControllers();
  const { useHeader } = useComponentHooks();
  const { gotToSignUp, gotToLogin, gotToHome } = useHeader();

  return (
    <StyledHeader>
      <StyledLogoContainer onClick={gotToHome}>
        <StyledShieldLogoContainer />
        {/* <IconLogo /> */}
        <StyledLogoLabel>Eswatini Liquor Licensing</StyledLogoLabel>
      </StyledLogoContainer>

      {/* <StyledHamMenuContainer>
        <IconHamMenu />
      </StyledHamMenuContainer> */}

      <StyledLogoMobileContainer onClick={gotToHome} />
      <StyledNavBar>
        <StyledButtonLogin
          color={'secondary'}
          variant={'outlined'}
          fullWidth={false}
          sx={{ minWidth: '115px' }}
          onClick={gotToLogin}
        >
          Login
        </StyledButtonLogin>
        <StyledButton
          color={'secondary'}
          fullWidth={false}
          sx={{ minWidth: '115px' }}
          onClick={gotToSignUp}
        >
          Register
        </StyledButton>
      </StyledNavBar>
    </StyledHeader>
  );
};

export default Header;
