import styled from 'styled-components';
import tw from 'twin.macro';
import ActivityIndicator from '../ActivityIndicator';
import Button from '../Buttons';
import SwitchControlled from '../SwitchControlled';
import Typography from '../Typography';
// import TextAreaControlled from '../TextAreaControlled';
import InputFileFieldControlled from '../InputFileFieldControlled';

export const StyledApplicationReviewStep2Container = styled.div.attrs({
  className: 'StyledApplicationReviewStep2Container',
})`
  && {
    ${tw`relative`}
  }
`;
export const StyledInspectorContainer = styled.div.attrs({
  className: 'StyledInspectorContainer',
})`
  && {
    ${tw`relative`}
    margin-top: 32px;
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

export const StyledTitleInspectorReport = styled(Typography).attrs({
  className: 'StyledTitleInspectorReport StyledTypographyBold',
})`
  && {
    display: flex;
    align-items: center;
    margin-bottom: 18px;

    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.021em;
    color: #494b4d;
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
    margin-top: 24px;
    margin-bottom: 32px;
    padding: 42px 32px;
    border: 1px solid #eceff3;
    box-sizing: border-box;
    border-radius: 4px;
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

export const StyledCommentsContainer = styled.div.attrs({
  className: 'StyledCommentsContainer',
})`
  && {
    ${tw`relative my-[36px]`}
  }
`;

export const StyledCommentsInnerContainer = styled.div.attrs({
  className: 'StyledCommentsInnerContainer',
})`
  && {
    ${tw`relative flex flex-col`}
    row-gap: 8px;
  }
`;
export const StyledCommentTitle = styled(Typography).attrs({
  className: 'StyledCommentTitle StyledTypographyBold',
})`
  && {
    ${tw`relative flex`}
    flex-wrap: no-wrap;
    column-gap: 8px;
    align-items: center;

    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;
    letter-spacing: -0.011em;
    color: #ff2d55;
  }
`;

export const StyledCommentDescription = styled(Typography).attrs({
  className: 'StyledCommentDescription StyledTypographyBook',
})`
  && {
    ${tw`relative`}
    margin-left: 42px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    color: #000000;
    @media (max-width: 767.98px) {
      margin-left: 24px;
      margin-bottom: 56px;
    }
  }
`;
