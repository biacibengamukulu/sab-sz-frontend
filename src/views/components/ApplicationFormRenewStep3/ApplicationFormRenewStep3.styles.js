import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../Buttons';
import InputFileFieldControlled from '../InputFileFieldControlled';
import Typography from '../Typography';

//Step 2

export const StyledApplicationThirdStepSection = styled.div.attrs({
  className: 'StyledApplicationThirdStepSection',
})`
  && {
    ${tw`relative mt-[-20px]`}
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

    gap: 20px 40px;
    & > * {
      flex: 0 1 calc(50% - 20px);
    }
    @media (max-width: 767.98px) {
      padding-top: 20px;
      flex-direction: column;
    }
  }
`;

export const StyledGeneralDocumentsContainer = styled.div.attrs({
  className: 'StyledGeneralDocumentsContainer',
})`
  && {
    ${tw`relative flex flex-col`}
    row-gap: 12px;
  }
`;
export const StyledDocumentsInfoContainer = styled.div.attrs({
  className: 'StyledDocumentsInfoContainer',
})`
  && {
    ${tw`relative flex flex-col`}
    margin-bottom: 16px;
  }
`;
export const StyledDocumentsTitle = styled(Typography).attrs({
  className: 'StyledDocumentsTitle StyledTypographyBold',
})`
  && {
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.017em;
    color: #494b4d;
  }
`;
export const StyledDocumentsAffidavitContainer = styled.div.attrs({
  className: 'StyledDocumentsAffidavitContainer',
})`
  && {
    ${tw`grid`}
    grid-template-columns: minmax(318px, 560px)  auto;
    @media (max-width: 767.98px) {
      ${tw`flex flex-col`}
      align-items: flex-start;
    }
  }
`;
export const StyledDocumentsDescription = styled(Typography).attrs({
  className: 'StyledDocumentsDescription StyledTypography',
})`
  && {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    color: #494b4d;
  }
`;

export const StyledDynamicDocumentsContainer = styled.div.attrs({
  className: 'StyledDynamicDocumentsContainer',
})`
  && {
    ${tw`relative`}
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
    font-size: 16px;
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

export const StyledDraftContainer = styled.div.attrs({
  className: 'StyledDraftContainer',
})`
  && {
    margin-top: 20px;
    color: #E46C02;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 1.66;
    letter-spacing: 0.03333em;
  }
`;

export const StyledContainerPdfLink = styled.div.attrs({
  className: 'StyledContainerPdfLink',
})`
  && {}
`;

export const StyledPdfLink = styled.a.attrs((props) => ({
  href: props.$to,
  target: props.$tg,
  className: 'StyledPdfLink',
}))`
 && {
  text-decoration: underline;
  font-weight: 700;
  color: #E46C02;
  border: 0;
 }
`;