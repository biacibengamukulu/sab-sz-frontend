import styled from 'styled-components';
import tw from 'twin.macro';
import Typography from '../Typography';
import Button from '../Buttons';
import TextAreaControlled from '../TextAreaControlled';
import Accordion from '../Accordion';
import InputFileFieldControlled from '../InputFileFieldControlled';
import { CircularProgress } from '@mui/material';

export const StyledNotificationHeaderContainer = styled.div.attrs({
  className: 'StyledNotificationHeaderContainer',
})`
  && {
    ${tw`relative`}
    min-height: 48px;
  }
`;
export const StyledButtonComments = styled(Button).attrs({
  className: 'StyledButtonComments',
})`
  && {
    ${tw`relative`}

    width: 195px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    align-self: center !important;
  }
`;

export const StyledNotificationIconContainer = styled.div.attrs({
  className: 'StyledNotificationIconContainer',
})`
  && {
    ${tw` relative flex`}
    align-items: center;
    min-height: 48px;

    cursor: pointer;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
export const StyledExternalContainer = styled.div.attrs({
  className: 'StyledExternalContainer',
})`
  && {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(22, 47, 27, 0.72);
    backdrop-filter: blur(6px);
    overflow: hidden;

    z-index: 10;
    ${(props) => {
      return `
      ${
        // props.menu ? `display: flex; flex-direction: column;` : `display: none;`
        props.status
          ? ` visibilty: visible; opacity: 1;`
          : ` display: none;visibilty: hidden; opacity: 0;`
      }
      `;
    }}
  }
`;
export const StyledContainerSidePopUp = styled.div.attrs({
  className: 'StyledContainerSidePopUp',
})`
  && {
    ${tw` relative `}
    display: flex;
    flex-direction: column;
    left: 100%;
    top: 0;
    width: 480px;
    min-height: 100vh;
    max-height: 100vh;
    transform: translate(-100%, 0);
    cursor: default;
    background: #ffffff;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
    overflow: hidden;

    ${(props) => {
      return `
      ${
        // props.menu ? `display: flex; flex-direction: column;` : `display: none;`
        props.status
          ? ` visibilty: visible; opacity: 1; color: #FFFFFF;`
          : ` display: none;visibilty: hidden; opacity: 0;`
      }
      `;
    }}
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const StyledPopUpPromiseInProgressContainer = styled.div.attrs({
  className: 'StyledPopUpPromiseInProgressContainer',
})`
  && {
    ${tw`absolute grid`}
    width: 100%;
    place-content: center;
    border-radius: 16px;
    height: 100%;
    backdrop-filter: blur(3px);
    z-index: 2;
  }
`;
export const StyledCircularProgress = styled(CircularProgress).attrs({
  className: 'StyledCircularProgress',
})`
  && {
    ${tw`relative`}
  }
`;

export const StyledContainerInnerSideContainer = styled.div.attrs({
  className: 'StyledContainerInnerSideContainer',
})`
  && {
    ${tw` relative p-[18px] flex flex-col`}
    min-height: calc(100vh - 53px);
    max-height: calc(100vh - 53px);
    overflow-y: auto;
    row-gap: 14px;
    width: 100%;
  }
`;
export const StyledContainerPopUp = styled.div.attrs({
  className: 'StyledContainerPopUp',
})`
  && {
    ${tw` absolute `}
    display: flex;
    flex-direction: column;
    top: 42px;
    transform: translate(calc(-50% + 12px), 0);
    width: 360px;
    border-radius: 4px;
    cursor: default;
    overflow: hidden;
    z-index: 9;
    ${(props) => {
      return `
      ${
        // props.menu ? `display: flex; flex-direction: column;` : `display: none;`
        props.status
          ? ` visibilty: visible; opacity: 1; color: #FFFFFF;`
          : ` display: none;visibilty: hidden; opacity: 0;`
      }
      `;
    }}
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const StyledPopUpArrow = styled.div.attrs({
  className: 'StyledPopUpArrow',
})`
  && {
    ${tw` relative`}
    max-width:6px;
    left: 50%;
    transform: translate(-100%, 0);
    height: 6px;
    max-height: 6px;
  }
`;

export const StyledContainerInnerPopUpContainer = styled.div.attrs({
  className: 'StyledContainerInnerPopUpContainer',
})`
  && {
    ${tw` relative p-[18px] flex flex-col`}

    row-gap: 14px;
    background-color: #ffffff;
    border: 1px solid #f8f9fa;
    border-top: 0;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);

    width: 100%;
    box-sizing: border-box;
    border-radius: 4px 4px 0 0;
  }
`;
export const StyledAccordionComment = styled(Accordion).attrs({
  className: 'StyledAccordionComment',
})`
  && {
    ${tw` relative`}
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid #dae0e8;
    .StyledAccordionDetails {
      padding-top: 0px !important;
      padding-left: 16px !important;
    }

    ${(props) => {
      return `
      ${props.isObjection ? `background: #F3F5F7; ` : ``}`;
    }}

    ${(props) => {
      return `
    ${props.isLastObjectionComment ? `background: #E6EAF0; ` : ``}`;
    }}
  }
`;

export const StyledInputFileFieldControlled = styled(
  InputFileFieldControlled
).attrs({
  className: 'StyledInputFileFieldControlled',
})`
  && {
    ${tw` relative`}
    top: -20px;
    z-index: 2;
  }
`;

export const StyledCommentRow = styled.div.attrs({
  className: 'StyledCommentRow',
})`
  && {
    ${tw` relative flex flex-col`}
    row-gap: 8px;
    justify-content: center;
  }
`;

export const StyledReplyRow = styled.div.attrs({
  className: 'StyledReplyRow',
})`
  && {
    ${tw` relative flex flex-col`}
    border-bottom: 1px dashed #DAE0E8;
    padding: 8px 0;
    padding-left: 16px;
    row-gap: 2px;
    justify-content: center;
  }
`;
export const StyledCommentTitleRow = styled.div.attrs({
  className: 'StyledCommentTitleRow',
})`
  && {
    ${tw` relative flex flex-col`}
    justify-content: center;
  }
`;
export const StyledCommentTitle = styled.div.attrs({
  className: 'StyledCommentTitle',
})`
  && {
    ${tw` relative flex`}
    column-gap: 8px;
  }
`;
export const StyledCommentName = styled(Typography).attrs({
  className: 'StyledCommentName StyledTypographyBold',
})`
  && {
    ${tw` relative`}

    font-size: 14px;
    line-height: 20px;
    color: #2c2d2e;
  }
`;
export const StyledRepliesTitle = styled(Typography).attrs({
  className: 'StyledRepliesTitle StyledTypographyBold',
})`
  && {
    ${tw` relative`}

    font-size: 14px;
    line-height: 20px;
    color: #2c2d2e;
  }
`;
export const StyledCommentObjectionLabelContainer = styled.div.attrs({
  className: 'StyledCommentObjectionLabelContainer',
})`
  && {
    ${tw` relative flex`}
    align-items: center;
  }
`;

export const StyledCommentObjectionLabel = styled(Typography).attrs({
  className: 'StyledCommentObjectionLabel StyledTypographyBold',
})`
  && {
    ${tw` relative`}
    font-size: 14px;
    line-height: 20px;
    color: #2c2d2e;
    ${(props) => {
      return `
    ${props.isLastObjectionComment ? `color:  #FF2D55 !important; ` : ``}`;
    }}
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
export const StyledCommentUserRole = styled(Typography).attrs({
  className: 'StyledCommentUserRole StyledTypographyBook',
})`
  && {
    ${tw` relative`}

    font-size: 14px;
    line-height: 20px;
    color: #2c2d2e;
  }
`;
export const StyledNoNotification = styled(Typography).attrs({
  className: 'StyledNoNotification',
})`
  && {
    ${tw` relative flex`}

    font-size: 12px;
    line-height: 17px;
    color: #2c2d2e;

    align-items: center;
    justify-content: center;
  }
`;
export const StyledRowTime = styled.div.attrs({
  className: 'StyledRowTime',
})`
  && {
    ${tw` relative flex`}
    column-gap: 16px;
  }
`;
export const StyledCommentTime = styled(Typography).attrs({
  className: 'StyledCommentTime StyledTypographyBook',
})`
  && {
    ${tw` relative`}

    font-size: 12px;
    line-height: 17px;
    color: #6d7074;
  }
`;

export const StyledCommentTimeReply = styled(Typography).attrs({
  className: 'StyledCommentTimeReply StyledTypographyBook',
})`
  && {
    ${tw` relative`}

    font-size: 12px;
    line-height: 17px;
    color: #b6bbc1;
  }
`;

export const StyledButtonReply = styled.div.attrs({
  className: 'StyledButtonReply',
})`
  && {
    ${tw` relative flex`}
    column-gap: 8px;
    cursor: pointer;
  }
`;
export const StyledButtonReplyLabel = styled(Typography).attrs({
  className: 'StyledButtonReplyLabel',
})`
  && {
    ${tw` relative`}
    font-size: 12px;
    line-height: 17px;
    color: #d66127;
    ${(props) => {
      return `
    ${props.isLastObjectionComment ? `color:  #FF2D55 !important; ` : ``}`;
    }}
  }
`;
export const StyledReplyIconContainer = styled.div.attrs({
  className: 'StyledReplyIconContainer',
})`
  && {
    ${tw` relative grid`}
    place-content: center;
  }
`;
export const StyledButtonSendReply = styled(Button).attrs({
  className: 'StyledButtonSendReply',
})`
  && {
    ${tw`relative flex`}
    margin-top: 8px;
    width: 128px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    color: #ffffff;
    align-self: flex-end !important;
  }
`;
export const StyledFullComment = styled(Typography).attrs({
  className: 'StyledFullComment StyledTypographyBook',
})`
  && {
    ${tw` relative`}
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    color: #000000;
  }
`;

export const StyledTextAreaFieldComment = styled(TextAreaControlled).attrs({
  className: 'StyledTextAreaFieldComment',
})`
  && {
    ${tw`relative`}
    width:100%;
    .StyledTextareaAutosize {
      min-width: 100%;
      max-width: 100%;
      min-height: 80px;
      max-height: 420px;
      resize: vertical;
      border: 1px solid #dae0e8 !important;
    }
  }
`;
export const StyledButtonSendComment = styled(Button).attrs({
  className: 'StyledButtonSendComment',
})`
  && {
    ${tw`relative flex`}
    margin-top: 8px;
    width: 156px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    color: #ffffff;
    align-self: flex-end !important;
  }
`;
export const StyledReplyContainer = styled.div.attrs({
  className: 'StyledReplyContainer',
})`
  && {
    ${tw` relative flex flex-col`}
    column-gap: 16px;
  }
`;
export const StyledReplyInfoRow = styled.div.attrs({
  className: 'StyledReplyInfoRow',
})`
  && {
    ${tw` absolute flex`}
    column-gap: 8px;
    align-items: center;
  }
`;

export const StyledReplyInfo = styled(Typography).attrs({
  className: 'StyledReplyInfo',
})`
  && {
    ${tw` relative`}
    font-size: 12px;
    line-height: 17px;
    color: #6d7074;
  }
`;

export const StyledReplyInfoName = styled(Typography).attrs({
  className: 'StyledReplyInfoName',
})`
  && {
    ${tw` relative`}
    font-size: 12px;
    line-height: 17px;
    color: #b6bbc1;
  }
`;
export const StyledNotificationSeeAllContainer = styled.div.attrs({
  className: 'StyledNotificationSeeAllContainer',
})`
  && {
    ${tw` relative flex`}
    height: 46px;
    border: 1px solid #f8f9fa;
    border-top: 1px solid #dae0e8;
    justify-content: center;
    align-items: center;

    background-color: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    border-radius: 0 0 4px 4px;

    cursor: pointer;
  }
`;

export const StyledNotificationSeeAll = styled(Typography).attrs({
  className: 'StyledNotificationSeeAll ',
})`
  && {
    ${tw` relative`}

    font-size: 12px;
    line-height: 17px;
    color: #d66127;
  }
`;

export const StyledCommentsTittleContainer = styled.div.attrs({
  className: 'StyledCommentsTittleContainer',
})`
  && {
    ${tw` relative flex`}
    min-height: 52px;
    padding: 16px;
    border-bottom: 1px solid #dae0e8;
    justify-content: space-between;
    align-items: center;
`;

export const StyledCommentsTittle = styled(Typography).attrs({
  className: 'StyledCommentsTittle StyledTypographyBold',
})`
  && {
    ${tw` relative`}

    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    color: #2c2d2e;
  }
`;
export const StyledCommentsIconClose = styled.div.attrs({
  className: 'StyledCommentsIconClose',
})`
  && {
    ${tw` relative`}
    display: grid;
    place-content: center;
    cursor: pointer;
  }
`;

//Documents
export const StyledPdfViewContainer = styled.div.attrs({
  className: 'StyledPdfViewContainer',
})`
  && {
    ${tw`relative flex`}
    height: 44px;
    padding-left: 16px;
    padding-right: 24px;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #eceff3;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: #f3f5f7;
  }
`;

export const StyledPdfName = styled(Typography).attrs({
  className: 'StyledPdfName',
})`
  && {
    ${tw`relative`}
    font-size: 12px;
    line-height: 17px;
    color: #6d7074;
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
