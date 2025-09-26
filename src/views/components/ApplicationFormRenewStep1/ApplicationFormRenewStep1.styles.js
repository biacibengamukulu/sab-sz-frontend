import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../Buttons';
import Typography from '../Typography';
import PhoneInputFieldControlled from '../PhoneInputFieldControlled';
import RadioGroupFieldControlled from '../RadioGroupFieldControlled';
import WizardDynamic from '../WizardDynamic';

export const StyledFieldsContainer = styled.div.attrs({
  className: 'StyledFieldsContainer',
})`
  && {
    ${tw`relative flex flex-wrap py-[20px]`}
    // max-width: 860px;
    gap: 20px 40px;
    & > * {
      flex: 0 1 calc(50% - 20px);
    }
    @media (max-width: 767.98px) {
      padding-top: 20px;
      flex-direction: column;
    }
  }

  .licenceNatureSelectField {
    max-width: 362px;
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

export const StyledFieldsColumnContainer = styled.div.attrs({
  className: 'StyledFieldsColumnContainer',
})`
  && {
    ${tw`relative flex flex-col pt-[32px]`}
    max-width: 100%;

    @media (max-width: 768px) {
      padding-top: 20px;
    }
  }
`;
export const StyledPhoneInputField = styled(PhoneInputFieldControlled).attrs({
  className: 'StyledPhoneInputField ',
})`
  && {
  }
`;

export const StyledRadioGroupFieldControlled = styled(
  RadioGroupFieldControlled
).attrs({
  className: 'StyledRadioGroupFieldControlled ',
})`
  && {
    .StyledInputLabel {
      width: 360px;
      max-width: 360px !important;
      display: flex !important;
    }
  }
`;
export const StyledSubTitle = styled(Typography).attrs({
  className: 'StyledSubTitle StyledTypographyBold',
})`
  && {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin: 6px 0;
    margin-top: 18px;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.017em;
    color: #494b4d;
    @media (max-width: 768px) {
      margin-top: 0px;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.006em;
    }
  }
`;
export const StyledFieldRow = styled.div.attrs({
  className: 'StyledFieldRow',
})`
  && {
    ${tw`relative flex`}
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

export const StyledRowButtons = styled.div.attrs({
  className: 'StyledRowButtons',
})`
  && {
    ${tw`relative flex`}
    column-gap: 16px;
  }
`;
export const StyledCheckContainer = styled.div.attrs({
  className: 'StyledCheckContainer',
})`
  && {
    ${tw`relative`}
    margin-top: 32px;
    @media (max-width: 768px) {
      margin-top: 0;
      margin-bottom: 20px;
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




/**
 * modal styles
 */

// child Modal 2
export const StyledTitleModal2 = styled(Typography).attrs({
  className: 'StyledTitleModal2 StyledTypographyBold',
})`
  && {
    max-width: 460px;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.021em;
    color: #E46C02;
    display: flex;
    justify-content: left;
    margin-left: 20px;
  }
`;

export const StyledSubtitleModal2 = styled(Typography).attrs({
  className: 'StyledSubtitleModal2',
})`
  && {
    max-width: 460px;
    margin-top: 12px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    color: #aa2020;
    text-align:center;
    display:block;
  }
`;
export const StyledDescriptionModal2 = styled(Typography).attrs({
  className: 'StyledDescriptionModal2',
})`
  && {
    color: #6d7074;
    max-width: 460px;
    font-size: 20px;
    line-height: 28px;
    margin-top: 16px;
    margin-bottom: 10px;
    text-align:left;
    display:block;
  }
`;

export const StyledChildContainerModal2 = styled.div.attrs({
  className: 'StyledChildContainerModal2',
})`
  && {
    ${tw`relative flex flex-col`}
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const StyledButtonContaimerModal2 = styled.div.attrs({
  className: 'StyledButtonContaimerModal2',
})`
  && {
    ${tw`relative flex gap-4`}
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const StyledButtonModal2 = styled(Button).attrs({
  className: 'StyledButtonModal2',
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
