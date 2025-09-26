import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../Buttons';
import CheckboxControlled from '../CheckboxControlled';
import InputFileFieldControlled from '../InputFileFieldControlled';
import PhoneInputFieldControlled from '../PhoneInputFieldControlled';
import Typography from '../Typography';

//Step 2

export const StyledApplicationSecondStepSection = styled.div.attrs({
  className: 'StyledApplicationSecondStepSection',
})`
  && {
    ${tw`relative`}
    margin-top: -14px;
  }
`;

export const StyledPaymentsMethodsContainer = styled.div.attrs({
  className: 'StyledPaymentsMethodsContainer',
})`
  && {
    ${tw`relative flex flex-col`}
    row-gap: 4px;
  }
`;

export const StyledPaymentAlreadyMadeItContainer = styled.div.attrs({
  className: 'StyledPaymentAlreadyMadeItContainer',
})`
  && {
    ${tw`relative flex`}
    height: 48px;
    justify-content: center;
    align-items: center;
    column-gap: 8px;
    background: #fae1cc;
    border-radius: 4px;
  }
`;

export const StyledAdviceIconContainer = styled.div.attrs({
  className: 'StyledAdviceIconContainer',
})`
  && {
    ${tw`relative grid`}
    place-content: center;
    width: 24px;
    height: 24px;
  }
`;
export const StyledPaymentAlreadyMadeItLabel = styled(Typography).attrs({
  className: 'StyledPaymentAlreadyMadeItLabel StyledTypography',
})`
  && {
    ${tw`relative`}
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    color: #494b4d;
    background: #fae1cc;
  }
`;
export const StyledPaymentsMethodsInnerContainer = styled.div.attrs({
  className: 'StyledPaymentsMethodsInnerContainer',
})`
  && {
    ${tw`relative`}
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
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.011em;
    align-self: center !important;
    color: #394d94;
    border: 2px solid #394d94;
    display:none;
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

    width: 250px;
    font-size: 16px;
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
    font-size: 16px;
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
    font-size: 16px !important;
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


export const StyledContainerPayBtn = styled.div.attrs({
  className: 'StyledContainerPayBtn',
})`
  && {
    ${tw`relative my-4 flex justify-between`}
    background: #F3F5F7;
    padding: 20px;
    align-items: center;
    font-weight: 700;
    margin-bottom: 5px;
  }
`;


export const StyledPayText = styled.div.attrs({
  className: 'StyledPayText',
})`
  && {
    ${tw`relative`}
    font-size:16px;
    color:#494B4D;
  }
`;

export const StyledContainerText = styled.div.attrs({
  className: 'StyledContainerText',
})`
  && {
    ${tw`relative`}
    padding: 10px;
    border: 1px solid #DAE0E8;
  }
`;


export const StyledPayBtn = styled.div.attrs({
  className: 'StyledPayBtn',
})`
  && {
    ${tw`relative`}
    width: 100px;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.011em;
    align-self: center !important;
    color: #394d94;
    border: 2px solid #394d94;
  }
`;


export const StyledPayBtn2 = styled(Button).attrs({
  className: 'StyledPayBtn2',
})`
  && {
    ${tw`relative`}
    width: 180px;
    font-size: 16px;
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

export const StyledPayLink = styled.a.attrs((props) => ({
  href: props.$to,
  target: props.$tg,
}))`
  text-decoration: none;
  font-weight: 500;
  color: white;
  border: 1px solid #000;
  padding: 0.5rem;
  border-radius: 5px;
  background-color: #394D94;
`;



export const StyledPaymentsTitle = styled.div.attrs({
  className: 'StyledPaymentsTitle',
})`
  && {
    ${tw`relative`}
    font-weight:700;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.011em;
    color: #494B4D;
    margin-bottom: 22px;
  }
`;