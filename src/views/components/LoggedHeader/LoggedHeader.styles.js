import styled from 'styled-components';
import tw from 'twin.macro';
import Typography from '../../components/Typography';
import ShieldLogo from '../../../assets/images/ShieldLogo.png';
import ShieldLogoMobile from '../../../assets/images/ShieldLogoMobile.png';

export const StyledLoggedHeader = styled.header.attrs({
  className: 'StyledLoggedHeader',
})`
  && {
    ${tw` flex flex-row py-[16px] px-[32px] justify-between`}
    position:relative;
    z-index: 10;
    height: 80px;
    align-items: center;
    background: linear-gradient(269.9deg, #e46c02 -0.73%, #2e3e77 100%);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    @media (max-width: 1259.98px) {
      ${tw` px-[16px]`}
    }
    @media (max-width: 768px) {
      align-items: center;
      height: 44px;
      padding: 6px 16px;
    }
  }
`;

export const StyledContainerLinks = styled.div.attrs({
  className: 'StyledContainerLinks',
})`
  && {
    ${tw` relative flex`}
    max-height: 80px;
    align-items: center;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const StyledContainerSection = styled.div.attrs({
  className: 'StyledContainerSection',
})`
  && {
    ${tw` relative flex`}
    justify-content: center;
    align-items: center;
    margin: 20px;
    padding: 10px;
    height: 80px;
    cursor: pointer;
    text-align: center;
    @media (max-width: 1259.98px) {
      margin: 10px;
      padding: 8px;
    }
    @media (max-width: 859.98px) {
      margin: 10px;
      padding: 0px;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const StyledActiveLink = styled.div.attrs({
  className: 'StyledActiveLink',
})`
  && {
    ${tw` absolute flex`}
    top: 0;
    justify-content: center;
    align-items: center;
    height: 4px;
    width: 100%;
    background: #ffffff;
    opacity: 0.4;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    text-align: center;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const StyledSectionHeader = styled(Typography).attrs({
  className: 'StyledSectionHeader',
})`
  && {
    ${tw` relative`}

    background: transparent;
    font-size: 12px;
    line-height: 17px;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
export const StyledNotificationContainerBackuser = styled.div.attrs({
  className: 'StyledNotificationContainerBackuser',
})`
  && {
    // position: absolute;
    // top: 0;
    // left: 100%;
    width: 24px;
    min-height: 48px;
    cursor: pointer;
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
    column-gap: 24px;
    margin-right: 12px;
    @media (max-width: 1259.98px) {
      column-gap: 16px;
    }
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

    min-width: 220px;
    background: transparent;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.017em;
    color: #ffffff;
    @media (max-width: 1048px) {
      display: none;
    }
    @media (max-width: 1259.98px) {
      min-width: 180px;
      font-size: 16px;
      line-height: 22px;
    }
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
    min-width: 92px;
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
      left: 50%;
      transform: translate(-50%, 0);
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

export const StyledLoggedNavBar = styled.div.attrs({
  className: 'StyledLoggedNavBar',
})`
  && {
    ${tw` relative flex flex-col  `}
    justify-content: center;
    cursor: pointer;
  }
`;
