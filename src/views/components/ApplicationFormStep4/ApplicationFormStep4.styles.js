import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../Buttons';
import InputFileFieldControlled from '../InputFileFieldControlled';
import SelectFieldControlled from '../SelectFieldControlled';
import TextFieldControlled from '../TextFieldControlled';
import Typography from '../Typography';
import DateFieldControlled from '../DateFieldControlled';

//Step 2

export const StyledApplicationFourthStepSection = styled.div.attrs({
  className: 'StyledApplicationFourthStepSection',
})`
  && {
    ${tw`relative pt-[32px]`}
  }
`;

export const StyledLetterActContainer = styled(Typography).attrs({
  className: 'StyledLetterActContainer StyledTypographyBook',
})`
  && {
    ${tw`relative flex`}
    margin: 32px 0;
    flex-wrap: wrap;
    max-width: 100%;
    align-items: center;

    column-gap: 8px;
    row-gap: 19px;

    font-size: 14px;
    line-height: 44px;
    letter-spacing: -0.006em;
    color: #000000;
  }
`;

export const StyledLetterActRowContainer = styled.div.attrs({
  className: 'StyledLetterActRowContainer',
})`
  && {
    ${tw`relative flex`}
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    column-gap: 8px;
    row-gap: 19px;
  }
`;
export const StyledTypographySpaceLetterActContainer = styled(Typography).attrs(
  {
    className: 'StyledTypographySpaceLetterActContainer StyledTypographyBook',
  }
)`
  && {
    ${tw`relative`}
    font-size: 14px;
    line-height: 44px;
    letter-spacing: -0.006em;
    color: #000000;
  }
`;
export const StyledTypographyLetterActContainer = styled(Typography).attrs({
  className: 'StyledTypographyLetterActContainer StyledTypographyBook',
})`
  && {
    ${tw`relative`}
    white-space: pre;
    font-size: 14px;
    line-height: 44px;
    letter-spacing: -0.006em;
    color: #000000;
  }
`;
export const StyledSelectFieldControlledLicense = styled(
  SelectFieldControlled
).attrs({
  className: 'StyledSelectFieldControlledLicense',
})`
  && {
    ${tw`relative`}
    .StyledInputLabel {
      min-width: 500px !important;
    }
  }
`;
export const StyledSelectFieldControlledLetterAct = styled(
  SelectFieldControlled
).attrs({
  className: 'StyledSelectFieldControlledLetterAct',
})`
  && {
    ${tw`relative`}
    width: 250px;
    max-width: 250px;
    max-height: 44px;
    .StyledInputLabel {
      display: none !important;
    }
    .StyledSelect {
      top: 0 !important;
      margin: 0 !important;
    }
  }
`;
export const StyledSmallSelectFieldControlledLetterAct = styled(
  SelectFieldControlled
).attrs({
  className: 'StyledSmallSelectFieldControlledLetterAct',
})`
  && {
    ${tw`relative`}
    width: 90px;
    max-width: 90px;
    max-height: 44px;
    .StyledInputLabel {
      display: none !important;
    }
    .StyledSelect {
      top: 0 !important;
      margin: 0 !important;
    }
  }
`;

export const StyledTextFieldControlledControlledLetterAct = styled(
  TextFieldControlled
).attrs({
  className: 'StyledTextFieldControlledControlledLetterAct',
})`
  && {
    ${tw`relative`}
    flex: 1 1 auto;
    max-height: 44px;
    .StyledInputLabel {
      display: none !important;
    }
    .StyledOutLineInput {
      top: 0 !important;
      margin: 0 !important;
    }
  }
`;
export const StyledSmallTextFieldControlledControlledLetterAct = styled(
  TextFieldControlled
).attrs({
  className: 'StyledSmallTextFieldControlledControlledLetterAct',
})`
  && {
    ${tw`relative`}
    flex: 1 1 300px;
    max-height: 44px;
    .StyledInputLabel {
      display: none !important;
    }
    .StyledOutLineInput {
      top: 0 !important;
      margin: 0 !important;
    }
  }
`;
export const StyledTypeOfRegistrationContainer = styled.div.attrs({
  className: 'StyledTypeOfRegistrationContainer',
})`
  && {
    ${tw`relative`}
    margin-bottom: 54px;
  }
`;

export const StyledFieldHiddenContainer = styled.div.attrs({
  className: 'StyledFieldHiddenContainer',
})`
  && {
    ${tw`relative`}
    display: none;
  }
`;

export const StyledFieldsContainer = styled.div.attrs({
  className: 'StyledFieldsContainer',
})`
  && {
    ${tw`relative flex flex-wrap`}

    gap: 12px 40px;
    & > * {
      flex: 0 1 calc(50% - 20px);
    }
    @media (max-width: 767.98px) {
      padding-top: 20px;
      flex-direction: column;
    }
  }
`;

export const StyledFieldsSubFormContainer = styled.div.attrs({
  className: 'StyledFieldsSubFormContainer',
})`
  && {
    ${tw`relative flex flex-wrap`}

    gap: 12px 40px;
    & > * {
      flex: 0 1 calc(50% - 20px);
    }
    @media (max-width: 767.98px) {
      padding-top: 20px;
      flex-direction: column;
    }
  }
`;

export const StyledSection14Container = styled.div.attrs({
  className: 'StyledSection14Container',
})`
  && {
    ${tw`relative`}
  }
`;

export const StyledSection14CompanyContainer = styled.div.attrs({
  className: 'StyledSection14CompanyContainer',
})`
  && {
    ${tw`relative flex flex-col`}
    row-gap: 12px;
  }
`;

export const StyledSection14PersonContainer = styled.div.attrs({
  className: 'StyledSection14PersonContainer',
})`
  && {
    ${tw`relative flex flex-col`}
    row-gap: 12px;
  }
`;
export const StyledActInfoContainer = styled.div.attrs({
  className: 'StyledDocumentsInfoContainer',
})`
  && {
    ${tw`relative flex flex-col`}
    border-top: 1px solid #DAE0E8;
    padding-top: 44px;
    margin-bottom: 16px;
  }
`;
export const StyledActTitle = styled(Typography).attrs({
  className: 'StyledActTitle StyledTypographyBold',
})`
  && {
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.017em;
    color: #494b4d;
  }
`;
export const StyledActDescription = styled(Typography).attrs({
  className: 'StyledDocumentsDescription StyledTypography',
})`
  && {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    color: #494b4d;
  }
`;
export const StyledFieldRowHidden = styled.div.attrs({
  className: 'StyledFieldRowHidden',
})`
  && {
    ${tw`relative flex`}
    display:none;
  }
`;

export const StyledRowPhoneIndicative = styled.div.attrs({
  className: 'StyledRowPhoneIndicative',
})`
  && {
    ${tw`relative flex`}
    width: 78px;
    max-width: 78px;
    margin-right: 16px;
    @media (max-width: 768px) {
      width: 78px;
      max-width: 78px;
    }
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
export const StyledDynamicDocumentsContainer = styled.div.attrs({
  className: 'StyledDynamicDocumentsContainer',
})`
  && {
    ${tw`relative`}
  }
`;
export const StyledSectionFormTitle = styled(Typography).attrs({
  className: 'StyledSectionFormTitle',
})`
  && {
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    color: #494b4d;
  }
`;

export const StyledDynamicDocumentsInnerContainer = styled.div.attrs({
  className: 'StyledDynamicDocumentsInnerContainer',
})`
  && {
    ${tw`relative flex flex-col`}
    row-gap: 12px;
    margin-top: 64px;
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
export const StyledInputFileFieldControlled = styled(
  InputFileFieldControlled
).attrs({
  className: 'StyledInputFileFieldControlled',
})`
  && {
    ${tw`relative`}
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

// company
export const StyledButtonAddAnother = styled(Button).attrs({
  className: 'StyledButtonAddAnother',
})`
  && {
    ${tw`relative`}
    margin-top: 16px;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.011em;
    color: #ffffff;
  }
`;
export const StyledButtonRemove = styled(Button).attrs({
  className: 'StyledButtonRemove',
})`
  && {
    ${tw`relative`}
    max-width: 100px;
    max-height: 44px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
  }
`;

// Director forms
export const StyledDirectorFormContainer = styled.div.attrs({
  className: 'StyledDirectorFormContainer',
})`
  && {
    ${tw`relative`}
    margin-top: 32px;
  }
`;

export const StyledDirectorFormInnerContainer = styled.div.attrs({
  className: 'StyledDirectorFormInnerContainer',
})`
  && {
    ${tw`relative`}
  }
`;
export const StyledDirectorFormTitle = styled(Typography).attrs({
  className: 'StyledDirectorFormTitle',
})`
  && {
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    color: #494b4d;
  }
`;
export const StyledCurrentDirector = styled(Typography).attrs({
  className: 'StyledCurrentDirector',
})`
  && {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    color: #2c2d2e;
  }
`;
export const StyledRowTitleDirector = styled.div.attrs({
  className: 'StyledRowTitleDirector',
})`
  && {
    ${tw`relative flex`}
    min-height: 60px;
    margin-top: 16px;
    padding-top: 16px;
    justify-content: space-between;
  }
`;

// Shareholder forms
export const StyledShareholderFormContainer = styled.div.attrs({
  className: 'StyledShareholderFormContainer',
})`
  && {
    ${tw`relative`}
    margin-top: 32px;
  }
`;
export const StyledShareholderInnerContainer = styled.div.attrs({
  className: 'StyledShareholderInnerContainer',
})`
  && {
    ${tw`relative`}
  }
`;
export const StyledShareholderFormTitle = styled(Typography).attrs({
  className: 'StyledShareholderFormTitle',
})`
  && {
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    color: #494b4d;
  }
`;
export const StyledCurrentShareholder = styled(Typography).attrs({
  className: 'StyledCurrentShareholder',
})`
  && {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    color: #2c2d2e;
  }
`;
export const StyledRowTitleShareholder = styled.div.attrs({
  className: 'StyledRowTitleShareholder',
})`
  && {
    ${tw`relative flex`}
    min-height: 60px;
    margin-top: 16px;
    padding-top: 16px;
    justify-content: space-between;
  }
`;

// Subform container
export const StyledSubFormContainer = styled.div.attrs({
  className: 'StyledSubFormContainer',
})`
  && {
    ${tw`relative`}
    margin-top: 32px;
  }
`;

export const StyledDateFieldControlled = styled(DateFieldControlled).attrs({
  className: 'StyledDateFieldControlled',
})`
  && {
    ${tw` relative `}
    font-size: 14px;
    line-height: 20px;
    max-width: 100%;
    z-index: 6;

    .MuiInputBase-input{
      display: block !important;
    
        padding-right: 0 !important;
      }
      .MuiInputAdornment-root {
       display: none  !important;
     }
     .StyledOutLineInput{
       display: block !important;
     }
     .StyledOutLineInput .MuiOutlinedInput-input{
      display: block !important;
      &::-webkit-calendar-picker-indicator {
        width: 24px;
        height: 24px;
        display: block  !important;
        background: transparent;
        -webkit-appearance: none  !important;
        cursor: pointer;
        z-index: 8;
      }
    @media (max-width: 768px) {
      // min-width: 60px;
      // max-width: 60px;
      .MuiOutlinedInput-root {
        min-width: 140px;
      }
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

// modal tyc
export const StyledTitleModalTyc = styled(Typography).attrs({
  className: 'StyledTitleModalTyc StyledTypographyBold',
})`
  && {
    max-width: 460px;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.021em;
    color: #394d94;
  }
`;

export const StyledChildContainerModalTyc = styled.div.attrs({
  className: 'StyledChildContainerModalTyc',
})`
  && {
    ${tw`relative flex flex-col`}
    align-items: center;
    margin-top: 20px;
  }
`;

export const StyledDescriptionModalTyc = styled(Typography).attrs({
  className: 'StyledDescriptionModalTyc StyledTypographyBook',
})`
  && {
    width: 460px;
    max-width: 460px;
    margin-top: 16px;
    margin-bottom: 24px;
    font-size: 12px;
    line-height: 17px;
    color: #494b4d;
  }
`;
export const StyledChecksContainerModalTyc = styled.div.attrs({
  className: 'StyledChecksContainerModalTyc',
})`
  && {
    ${tw`relative flex flex-col`}
    align-items: center;
    row-gap: 16px;
  }
`;
export const StyledCheckboxContainer = styled.div.attrs({
  className: 'StyledCheckboxContainer',
})`
  && {
    ${tw`relative`}
    max-width: 460px;
  }
`;

export const StyledRowButtonsModalTyc = styled.div.attrs({
  className: 'StyledRowButtonsModalTyc',
})`
  && {
    ${tw`relative flex`}
    align-items: center;
    justify-content: center;
    column-gap: 16px;
  }
`;
export const StyledButtonContinueModalTyc = styled(Button).attrs({
  className: 'StyledButtonContinueModalTyc',
})`
  && {
    ${tw`relative`}

    width: 184px;
    fontsize: 16px;
    line-height: 22px;
    letter-spacing: -0.011em;
    align-self: center !important;
    margin-top: 36px;
    .MuiCircularProgress-colorPrimary {
      color: #ffffff;
    }
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

export const StyledButtonCancelModalTyc = styled(Button).attrs({
  className: 'StyledButtonCancelModalTyc',
})`
  && {
    ${tw`relative`}

    width: 184px;
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
