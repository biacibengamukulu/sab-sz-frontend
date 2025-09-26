import styled from 'styled-components';
import tw from 'twin.macro';
import Typography from '../../components/Typography';
import WizardDynamic from '../../components/WizardDynamic';
import TimeLeft from '../../components/TimeLeft';

export const StyledSectionNewApplication = styled.div.attrs({
  className: 'StyledSectionNewApplication',
})`
  && {
    ${tw`relative py-[56px] mx-[10px]`}
    width: calc(100% - 40px);
    box-sizing: content-box;

    @media (max-width: 767.98px) {
      width: calc(100% - 32px);
      margin: 0 16px;
      padding-top: 16px;
      padding-bottom: 24px;
    }
  }
`;

export const StyledSectionNewApplicationInnerContainer = styled.div.attrs({
  className: 'StyledSectionNewApplicationInnerContainer',
})`
  && {
    ${tw`relative pt-[32px]`}
  }
`;

// Back button
export const StyledGoBack = styled.div.attrs({
  className: 'StyledGoBack',
})`
  && {
    ${tw` relative`}
    width: calc(100% + 40px);
    margin-bottom: 56px;
    top: 0px;
    left: -10px;
    display: flex;
    align-items: center;
    height: 48px;
    padding-left: 16px;
    cursor: pointer;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const StyledGoBackTransparent = styled.div.attrs({
  className: 'StyledGoBackTransparent',
})`
  && {
    ${tw` relative`}
    width: calc(100% + 20px);
    margin-bottom: 56px;
    top: 0px;
    left: -10px;
    height: 48px;
  }
`;

export const StyledGoBackTypography = styled(Typography).attrs({
  className: 'StyledGoBackTypography',
})`
  && {
    ${tw` absolute`}
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    margin-left: 12px;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
export const StyledWrapperTitle = styled(Typography).attrs({
  className: 'StyledWrapperTitle StyledTypographyBold',
})`
  && {
    max-width: 345px;
    margin-bottom: 24px;

    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.021em;
    color: #394d94;
  }
`;

export const StyledWizardDynamic = styled(WizardDynamic).attrs({
  className: 'StyledWizardDynamic',
})`
  && {
    ${tw`absolute`}
    left: 100%;
    top: 0;
    transform: translate(calc(-100% + 16px), -16px);
  }
`;

//Time left
export const StyledTimeLeftContainer = styled.div.attrs({
  className: 'StyledTimeLeftContainer',
})`
  && {
    ${tw`relative flex`}
    justify-content: flex-end;
  }
`;
export const StyledTimeLeftComponent = styled(TimeLeft).attrs({
  className: 'StyledTimeLeftComponent',
})`
  && {
    ${tw`relative`}
  }
`;
