import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../Buttons';
import CheckboxControlled from '../CheckboxControlled';
import InputFileFieldControlled from '../InputFileFieldControlled';
import Typography from '../Typography';
import PhoneInputFieldControlled from '../PhoneInputFieldControlled';
import TimeLeft from '../TimeLeft';
import { CircularProgress } from '@mui/material';

//Step 2

export const StyledApplicationFifthStepSection = styled.div.attrs({
  className: 'StyledApplicationFifthStepSection',
})`
  && {
    ${tw`relative pt-[32px]`}
  }
`;

//Time left
export const StyledTimeLeftContainer = styled.div.attrs({
  className: 'StyledTimeLeftContainer',
})`
  && {
    ${tw`relative flex`}
    justify-content: flex-start;
  }
`;
export const StyledTimeLeftComponent = styled(TimeLeft).attrs({
  className: 'StyledTimeLeftComponent',
})`
  && {
    ${tw`relative`}
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
export const StyledTitleSection = styled(Typography).attrs({
  className: 'StyledTitleSection StyledTypographyBold',
})`
  && {
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.017em;
    color: #494b4d;
  }
`;

export const StyledSubtitleSection = styled(Typography).attrs({
  className: 'StyledSubtitleSection',
})`
  && {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    color: #494b4d;
  }
`;

// advertising fee payment
export const StyledFieldsAdvertisingFeeContainer = styled.div.attrs({
  className: 'StyledFieldsAdvertisingFeeContainer',
})`
  && {
    ${tw`relative grid`}
    margin-top: 40px;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr;
    column-gap: 20px;
  }
`;
export const StyledFieldsAdvertisingFeeInnerContainer = styled.div.attrs({
  className: 'StyledFieldsAdvertisingFeeInnerContainer',
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
export const StyledPaymentsMethodsInnerContainer = styled.div.attrs({
  className: 'StyledPaymentsMethodsInnerContainer',
})`
  && {
    ${tw`relative`}
  }
`;

export const StyledAdvertisingFeeActionsContainer = styled.div.attrs({
  className: 'StyledAdvertisingFeeActionsContainer',
})`
  && {
    ${tw`relative flex-wrap flex py-[16px]`}
    align-items: center;
    gap: 20px 40px;
    & > * {
      flex: 0 1 calc(50% - 20px);
    }
  }
`;
export const StyledAdvertisingFeeProofOfPaymentContainer = styled.div.attrs({
  className: 'StyledAdvertisingFeeProofOfPaymentContainer',
})`
  && {
    ${tw`relative flex`}
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

export const StyledCircularProgress = styled(CircularProgress).attrs({
  className: 'StyledCircularProgress',
  size: 24,
})`
  && {
    ${tw`relative`}
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
export const StyledPaymentAlreadyMadeItUpperContainer = styled.div.attrs({
  className: 'StyledPaymentAlreadyMadeItUpperContainer',
})`
  && {
    ${tw`absolute`}
    width: 100%;
    height: 100%;
    opacity: 0.8;
    z-index: 9;
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

export const StyledFieldsBorder = styled.div.attrs({
  className: 'StyledFieldsBorder',
})`
  && {
    ${tw`relative`}
    width: 100%
    height: 0;
    background: #6d7074;
    border: 1px solid #dae0e8;
    border-top: 1px solid #dae0e8;
    @media (max-width: 767.98px) {
      display: none;
    }
  }
`;

export const StyledAdvertisingFeeFieldReviewActions = styled.div.attrs({
  className: 'StyledAdvertisingFeeFieldReviewActions',
})`
  && {
    ${tw`relative flex`}
    width: 100%;
    column-gap: 20px;
    & > * {
      flex: 0 1 calc(50% - 20px);
    }
  }
`;

export const StyledInputFileFieldControlled = styled(
  InputFileFieldControlled
).attrs({
  className: 'StyledInputFileFieldControlled',
})`
  && {
    ${tw`relative`}
    top: -32px;
    .StyledInputLabel {
      display: none;
    }
  }
`;
export const StyledCheckboxControlled = styled(CheckboxControlled).attrs({
  className: 'StyledCheckboxControlled',
})`
  && {
    ${tw`relative`}
    width: 100%;
    .MuiFormControl-root {
      min-width: 100% !important;
    }
    .MuiFormControlLabel-root {
      min-width: 100%;
      align-items: center !important;
      .MuiFormControlLabel-label {
        min-width: 100%;

        margin-top: 0 !important;
      }
    }
  }
`;
export const StyledRowButtons = styled.div.attrs({
  className: 'StyledRowButtons',
})`
  && {
    ${tw`relative flex`}
    column-gap: 16px;
  }
`;
export const StyledFieldRowBottom = styled.div.attrs({
  className: 'StyledFieldRowBottom',
})`
  && {
    ${tw`relative flex`}
    margin-top: 52px;
    align-items: center;
    justify-content: space-between;
  }
`;

// Mtn phoneNumber
export const StyledFieldRowHidden = styled.div.attrs({
  className: 'StyledFieldRowHidden',
})`
  && {
    ${tw`relative flex`}
    display:none;
  }
`;
export const StyledRowPhoneIndicative = styled.div.attrs({
  className: 'StyledRowPhoneIndicative ',
})`
  && {
    ${tw`relative`}
    width: 78px;
    max-width: 78px;
    margin-right: 16px;
    @media (max-width: 768px) {
      width: 78px;
      max-width: 78px;
    }
  }
`;
export const StyledPhoneInputField = styled(PhoneInputFieldControlled).attrs({
  className: 'StyledPhoneInputField ',
})`
  && {
    ${tw`relative`}
    .react-tel-input .form-control {
      left: 0px;
      width: 100% !important;
    }
    .react-tel-input .flag-dropdown {
      display: none;
    }
  }
`;
export const StyledTypographyTooltip = styled(Typography).attrs({
  className: 'StyledTypographyTooltip StyledTypographyLight',
})`
  && {
    font-size: 12px;
    line-height: 17px;
    color: #ffffff;
    margin-bottom: 4px;
  }
`;

export const StyledRowPhoneNumber = styled.div.attrs({
  className: 'StyledRowPhoneNumber',
})`
  && {
    ${tw`relative`}
    height: 100%;
    width: 100%;
    max-width: 268px;
    @media (max-width: 768px) {
      max-width: 100%;
    }
  }
`;
export const StyledButtonSaveAndContinue = styled(Button).attrs({
  className: 'StyledButtonSaveAndContinue',
})`
  && {
    ${tw`relative`}
    width: 180px;
    fontsize: 16px;
    line-height: 22px;
    letter-spacing: -0.011em;
    align-self: center !important;
    color: #394d94;
    border: 2px solid #394d94;
    @media (max-width: 768px) {
      margin-top: 36px;
      width: 130px;
      height: 44px;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.006em;
    }
  }
`;

export const StyledButtonContinue = styled(Button).attrs({
  className: 'StyledButtonContinue',
})`
  && {
    ${tw`relative`}

    width: 180px;
    fontsize: 16px;
    line-height: 22px;
    letter-spacing: -0.011em;
    align-self: center !important;
    .MuiCircularProgress-colorPrimary {
      color: #ffffff;
    }
    @media (max-width: 768px) {
      margin-top: 36px;
      width: 130px;
      height: 44px;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.006em;
    }
  }
`;

/**
 * modal styles
 */

// child Modal
export const StyledTitleModal = styled(Typography).attrs({
  className: 'StyledTitleModal StyledTypographyBold',
})`
  && {
    max-width: 460px;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.021em;
    color: #394d94;
  }
`;

export const StyledSubtitleModal = styled(Typography).attrs({
  className: 'StyledSubtitleModal',
})`
  && {
    max-width: 460px;
    margin-top: 12px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    color: #aa2020;
  }
`;
export const StyledDescriptionModal = styled(Typography).attrs({
  className: 'StyledDescriptionModal',
})`
  && {
    color: #6d7074;
    max-width: 460px;
    font-size: 14px;
    line-height: 20px;
    margin-top: 16px;
    margin-bottom: 50px;
  }
`;

export const StyledChildContainerModal = styled.div.attrs({
  className: 'StyledChildContainerModal',
})`
  && {
    ${tw`relative flex flex-col`}
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;
export const StyledButtonModal = styled(Button).attrs({
  className: 'StyledButtonModal',
})`
  && {
    ${tw`relative`}

    width: 250px;
    fontsize: 16px;
    line-height: 22px;
    letter-spacing: -0.011em;
    align-self: center !important;
    margin-top: 36px;

    @media (max-width: 768px) {
      margin-top: 36px;
      width: 160px;
      height: 44px;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.006em;
    }
  }
`;
export const StyledLabelCheck = styled.div.attrs({
  className: 'StyledLabelCheck StyledTypographyLight',
})`
  && {
    max-width: 460px;
    font-size: 12px;
    line-height: 17px;
    letter-spacing: -0.006em;
  }
`;

// cancel  Modal
export const StyledTitleModalCancel = styled(Typography).attrs({
  className: 'StyledTitleModalCancel StyledTypographyBold',
})`
  && {
    margin-top: 32px;
    max-width: 460px;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.021em;
    color: #394d94;
  }
`;
export const StyledSubtitleModalCancel = styled(Typography).attrs({
  className: 'StyledSubtitleModalCancel StyledTypographyBook',
})`
  && {
    margin-top: 24px;
    max-width: 460px;
    margin-top: 12px;
    font-size: 12px;
    line-height: 17px;
    color: #494b4d;
  }
`;
export const StyledButtonModalCancel = styled(Button).attrs({
  className: 'StyledButtonModalCancel',
})`
  && {
    ${tw`relative`}

    width: 186px;
    fontsize: 16px !important;
    line-height: 22px !important;
    letter-spacing: -0.011em;
    align-self: center !important;
    margin-top: 36px;

    @media (max-width: 768px) {
      margin-top: 36px;
      width: 160px;
      height: 44px;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.006em;
    }
  }
`;
