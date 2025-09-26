import styled from 'styled-components';
import tw from 'twin.macro';
import ActivityIndicator from '../ActivityIndicator';
import Button from '../Buttons';
import SwitchControlled from '../SwitchControlled';
import Typography from '../Typography';
import TextAreaControlled from '../TextAreaControlled';
import InputFileFieldControlled from '../InputFileFieldControlled';

export const StyledApplicationReviewStep2Container = styled.div.attrs({
  className: 'StyledApplicationReviewStep2Container',
})`
  && {
    ${tw`relative`}
  }
`;
export const StyledReportApprovalContainer = styled.div.attrs({
  className: 'StyledReportApprovalContainer',
})`
  && {
    ${tw`relative`}
    margin-top: 48px;
  }
`;

export const StyledAccordionActivityIndicator = styled(ActivityIndicator).attrs(
  {
    className: 'StyledAccordionActivityIndicator',
  }
)`
  && {
    position: absolute !important;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(1px);
  }
`;

export const StyledTitleReportApproval = styled(Typography).attrs({
  className: 'StyledTitleReportApproval StyledTypographyBold',
})`
  && {
    display: flex;
    align-items: center;
    margin-bottom: 18px;

    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.017em;
    color: #394d94;
  }
`;
export const StyledSwitchField = styled(SwitchControlled).attrs({
  className: 'StyledSwitchField',
})`
  && {
    ${tw`relative`}
    margin-left: 8px;
    align-self: flex-start;
  }
`;

export const StyledLocationCapturedContainer = styled.div.attrs({
  className: 'StyledLocationCapturedContainer',
})`
  && {
    display: flex;
    align-items: center;
  }
`;

export const StyledLocationCapturedIcon = styled.div.attrs({
  className: 'StyledLocationCapturedIcon',
})`
  && {
    display: grid;
    place-content: center;
    margin-left: 16px;
    margin-right: 4px;
  }
`;

export const StyledLocationCaptured = styled(Typography).attrs({
  className: 'StyledLocationCaptured',
})`
  && {
    display: flex;
    align-items: center;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: -0.021em;
  }
`;

export const StyledUploadReportContainer = styled.div.attrs({
  className: 'StyledUploadReportContainer',
})`
  && {
    ${tw`relative flex flex-col`}
    padding:  0 32px;
    row-gap: 32px;
  }
`;

export const StyledRowButtons = styled.div.attrs({
  className: 'StyledRowButtons',
})`
  && {
    ${tw`relative flex`}
    margin-top: 24px;
    justify-content: flex-end;
    column-gap: 16px;
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

export const StyledButtonApprove = styled(Button).attrs({
  className: 'StyledButtonApprove',
})`
  && {
    ${tw`relative`}

    width: 220px;
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

/** */

export const StyledDocumentsReportContainer = styled.div.attrs({
  className: 'StyledDocumentsReportAccordion',
})`
  && {
    ${tw`relative`}
    width: 100%;
    height: 48px;
    padding: 0 16px;
  }
`;

export const StyledDocumentsReportInnerContainer = styled.div.attrs({
  className: 'StyledDocumentsReportInnerContainer',
})`
  && {
    ${tw`relative flex`}
    width: 100%;
    height: 48px;
    justify-content: space-between;
  }
`;

export const StyledDocumentReporActions = styled.div.attrs({
  className: 'StyledDocumentReporActions ',
})`
  && {
    ${tw`relative flex`}
    column-gap: 16px;
  }
`;
export const StyledContainerInpectionReportLocation = styled.a.attrs({
  className: 'StyledContainerInpectionReportLocation ',
})`
  && {
    ${tw`relative grid`}
    place-content: center;
    cursor: pointer;
  }
`;
export const StyledContainerIconView = styled.a.attrs({
  className: 'StyledContainerIconView ',
})`
  && {
    ${tw`relative grid`}
    place-content: center;
    cursor: pointer;
  }
`;
export const StyledContainerIconDownload = styled.a.attrs({
  className: 'StyledContainerIconDownload ',
})`
  && {
    ${tw`relative grid`}
    place-content: center;
    cursor: pointer;
  }
`;

export const StyledTitleReportSubmitted = styled(Typography).attrs({
  className: 'StyledTitleReportSubmitted StyledTypographyBook',
})`
  && {
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    color: #242731;
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
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    color: #6d7074;
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

export const StyledTextAreaField = styled(TextAreaControlled).attrs({
  className: 'StyledTextAreaField',
})`
  && {
    ${tw`relative`}
    margin-top: 8px;
    width: 750px;
    .StyledTextareaAutosize {
      min-height: 160px;
      max-height: 320px;
    }
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
