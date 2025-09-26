import styled from 'styled-components';
import tw from 'twin.macro';
import Typography from '../Typography';
import Button from '../Buttons';
import { CircularProgress } from '@mui/material';

export const StyledApplicationLicenseIssuedSection = styled.div.attrs({
  className: 'StyledApplicationLicenseIssuedSection',
})`
  && {
    ${tw`relative pt-[32px]`}
  }
`;

export const StyledCircularProgress = styled(CircularProgress).attrs({
  className: 'StyledCircularProgress',
  size: 24,
})`
  && {
    ${tw`relative`}
  }
`;

export const StyledProofOfPaymentContainer = styled.div.attrs({
  className: 'StyledProofOfPaymentContainer',
})`
  && {
    ${tw`relative flex`}
    max-width: 420px;
    height: 44px;
    margin-top: 24px;
    padding-left: 16px;
    padding-right: 24px;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #eceff3;
    box-sizing: border-box;
    border-radius: 4px;
  }
`;

export const StyledContainerIconViewContainer = styled.a.attrs({
  className: 'StyledContainerIconViewContainer',
})`
  && {
    ${tw`relative`}
    display: grid;
    place-content: center;
    width: 21px;
    height: 21px;
    cursor: pointer;
  }
`;

export const StyledSectionDescriptionContainer = styled.div.attrs({
  className: 'StyledSectionDescriptionContainer',
})`
  && {
    ${tw`relative flex flex-col`}
    row-gap: 8px;
    margin: 32px 0;
  }
`;
export const StyledLicenseIssuedContainer = styled.div.attrs({
  className: 'StyledLicenseIssuedContainer',
})`
  && {
    ${tw`relative grid w-full`}
    grid-template-columns: minmax(560px, 760px) auto;
  }
`;

export const StyledFieldsIssuanceFeeInnerContainer = styled.div.attrs({
  className: 'StyledFieldsIssuanceFeeInnerContainer',
})`
  && {
    ${tw`relative`}
  }
`;

export const StyledFieldsContainerMultiple = styled.div.attrs({
  className: 'StyledFieldsContainerMultiple',
})`
  && {
    ${tw`relative flex flex-wrap pb-[32px]`}
    gap: 20px 40px;
    & > * {
      flex: 1 1 calc(33% - 80px);
    }
    @media (max-width: 767.98px) {
      display: none;
    }
  }
`;

export const StyledFieldColumn = styled.div.attrs({
  className: 'StyledFieldColumn',
})`
  && {
    ${tw`relative flex flex-col`}
    min-width: 25%;
  }
`;
export const StyledFieldColumnTitle = styled(Typography).attrs({
  className: 'StyledFieldColumnTitle',
})`
  && {
    ${tw`relative`}
    font-size: 12px;
    line-height: 17px;

    color: #6d7074;
  }
`;

export const StyledFieldColumnValue = styled(Typography).attrs({
  className: 'StyledFieldColumnValue StyledTypographyBook',
})`
  && {
    ${tw`relative`}
    font-size: 14px;
    line-height: 20px;flex;
    align-items: center;
    letter-spacing: -0.006em;

    color: #2C2D2E;

  }
`;

export const StyledSealContainer = styled.div.attrs({
  className: 'StyledSealContainer',
})`
  && {
    ${tw`relative grid `}
    place-content: center;
  }
`;

export const StyledButtonDownload = styled(Button).attrs({
  className: 'StyledButtonDownload',
})`
  && {
    ${tw`absolute flex`}
    left:50%;
    transform: translate(-50%, calc(-50% - 92px));
    min-width: 196px;
    column-gap: 16px;
  }
`;

/** */
