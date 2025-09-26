import styled from 'styled-components';
import tw from 'twin.macro';
import CircularProgress from '../../components/CircularProgress';
import Typography from '../../components/Typography';
import WizardDynamic from '../../components/WizardDynamic';

export const StyledSectionApplicationReview = styled.div.attrs({
  className: 'StyledSectionApplicationReview',
})`
  && {
    ${tw`relative flex flex-col py-[56px]  mx-[10px]`}
    min-width: calc(100% - 20px);
    box-sizing: content-box;

    @media (max-width: 767.98px) {
      width: calc(100% - 32px);
      margin: 0 16px;
      padding-top: 16px;
      padding-bottom: 24px;
    }
  }
`;
// Back button
export const StyledGoBack = styled.div.attrs({
  className: 'StyledGoBack',
})`
  && {
    ${tw` relative`}
    width: calc(100% + 20px);
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
    min-width: 100%;
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

// Ref and Date application info
export const StyledRefDateContainer = styled.div.attrs({
  className: 'StyledRefDateContainer',
})`
  && {
    ${tw`relative flex flex-col `}
  }
`;
export const StyledFieldRowRefContainer = styled.div.attrs({
  className: 'StyledFieldRowRefContainer',
})`
  && {
    ${tw`relative flex `}
    margin-bottom: 6px;
    align-items: center;
    flex-wrap: no-wrap;
    column-gap: 24px;

    @media (max-width: 768px) {
      column-gap: 12px;
      flex-wrap: wrap;
    }
  }
`;
export const StyledContainerComments = styled.div.attrs({
  className: 'StyledContainerComments',
})`
  && {
    ${tw`relative flex flex-col`}
    align-items: center;
  }
`;
export const StyledFieldRowDateContainer = styled.div.attrs({
  className: 'StyledFieldRowDateContainer',
})`
  && {
    ${tw`relative flex `}
    min-width: 100%;

    align-items: center;
    flex-wrap: no-wrap;
    column-gap: 24px;

    @media (max-width: 768px) {
      column-gap: 12px;
      flex-wrap: wrap;
    }
  }
`;

export const StyledFieldRowTitle = styled(Typography).attrs({
  className: 'StyledFieldRowTitle ',
})`
  && {
    ${tw`relative`}
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    color: #b6bbc1;
  }
`;
export const StyledFieldRowReference = styled(Typography).attrs({
  className: 'StyledFieldRowReference StyledTypographyBold',
})`
  && {
    ${tw`relative`}
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.017em;

    color: #2c2d2e;

    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.006em;
    }
  }
`;

export const StyledFieldRowDate = styled(Typography).attrs({
  className: 'StyledFieldRowDate',
})`
  && {
    ${tw`relative`}
    left: -10px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;

    color: #2c2d2e;
  }
`;

// Circular progress
export const StyledConteinerCircularProgress = styled.div.attrs({
  className: 'StyledConteinerCircularProgress',
})`
&& {
    ${tw`absolute`}
    display: grid;
    place-content: center;
    top: 0;
    right: 0;
    transform: translate(0, -80%);
    @media (max-width: 768px){
      ${tw`relative`}
    transform: translate(0, -40%);
      margin-top: 96px;
    }
    }}
`;

export const StyledCircularProgress = styled(CircularProgress).attrs({
  className: 'StyledCircularProgress',
})`
&& {
    ${tw`relative `}
`;

// user type container
export const StyledApplicationReviewUserTypeConteiner = styled.div.attrs({
  className: 'StyledApplicationReviewUserTypeConteiner',
})`
&& {
    ${tw`relative`}
    min-width: 100%;
`;
