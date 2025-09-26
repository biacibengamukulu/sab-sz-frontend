import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../Buttons';
import ShieldLogo from '../../../assets/images/ShieldLogo.png';
import ShieldLogoMobile from '../../../assets/images/ShieldLogoMobile.png';
import Typography from '../../components/Typography';

export const StyledHeader = styled.header.attrs({
  className: 'StyledHeader',
})`
  && {
    ${tw` flex flex-row py-[8px] px-[32px] justify-between`}
    height: 80px;
    background: linear-gradient(269.9deg, #e46c02 -0.73%, #2e3e77 100%);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
    @media (max-width: 768px) {
      align-items: center;
      height: 44px;
      padding: 6px 16px;
    }
  }
`;
export const StyledButton = styled(Button).attrs({
  className: 'StyledButton',
})`
  && {
    ${tw` relative`}
    max-height: 44px;
  }
`;

export const StyledButtonLogin = styled(Button).attrs({
  className: 'StyledButtonLogin',
})`
  && {
    ${tw` relative`}
    max-height: 44px;
    color: #ffffff !important;
    border: 2px solid #ffffff !important;

    &:hover {
      color: #ffffff !important;
      border: 2px solid #ffffff !important;
    }
  }
`;

export const StyledNavBar = styled.div.attrs({
  className: 'StyledNavBar',
})`
  && {
    ${tw` relative flex flex-row space-x-3.5 `}
    align-items: center;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const StyledLogoContainer = styled.div.attrs({
  className: 'StyledLogoContainer',
})`
  && {
    ${tw` relative flex cursor-pointer`}
    align-items: center;
    min-width: 344px;
    column-gap: 32px;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
export const StyledLogoLabel = styled(Typography).attrs({
  className: 'StyledLogoLabel ',
  variant: 'h3',
})`
  && {
    ${tw` relative`}

    background: transparent;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.017em;
    color: #ffffff;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const StyledShieldLogoContainer = styled.div.attrs({
  className: 'StyledShieldLogoContainer',
})`
  && {
    ${tw` relative cursor-pointer`}
    width: 92px;
    height: 64px;
    background-image: url(${ShieldLogo});
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const StyledLogoMobileContainer = styled.div.attrs({
  className: 'StyledLogoMobileContainer',
})`
  && {
    ${tw` relative cursor-pointer`}
    display: none;
    background-image: url(${ShieldLogoMobile});
    background-position: center;
    background-size: cover;
    @media (max-width: 768px) {
      width: 56px;
      height: 40px;
      display: block;
      margin: 0 auto;
    }
  }
`;

export const StyledHamMenuContainer = styled.div.attrs({
  className: 'StyledHamMenuContainer',
})`
  && {
    ${tw` absolute cursor-pointer`}
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
  }
`;
