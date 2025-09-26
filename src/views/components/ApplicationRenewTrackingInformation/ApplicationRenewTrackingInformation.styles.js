import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../Buttons';
// import CheckboxControlled from '../CheckboxControlled';
// import InputFileFieldControlled from '../InputFileFieldControlled';
import ActivityIndicator from '../ActivityIndicator';
import Typography from '../Typography';
import TextAreaControlled from '../TextAreaControlled';
import Checkbox from '../Checkbox';

//Step 2

export const StyledApplicationRenewTrackingInformation = styled.div.attrs({
  className: 'StyledApplicationRenewTrackingInformation',
})`
  && {
    ${tw`relative pt-[32px]`}
    min-width: 100%;
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

export const StyledButtonEditApplication = styled(Button).attrs({
  className: 'StyledButtonEditApplication',
})`
  && {
    ${tw`relative flex`}
    align-self: flex-end;
    margin-top: 10;
    width: 160px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    color: #ffffff;
    background: #ff2d55 !important;
    border: 2px solid #ff2d55 !important;
    @media (max-width: 767.98px) {
      display: none;
    }
  }
`;
export const StyledTitleTrackingInfo = styled(Typography).attrs({
  className: 'StyledTitleTrackingInfo StyledTypographyBold',
})`
  && {
    ${tw`relative`}
    padding-bottom: 24px;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.017em;
    color: #232E33;
  }
`;

//Accordion
export const StyledAccordionContainer = styled.div.attrs({
  className: 'StyledAccordionContainer',
})`
  && {
    ${tw`relative`}
    border: 1px solid #ECEFF3;
    box-sizing: border-box;
    border-radius: 4px;
  }
`;

export const StyledTitleAccordion = styled(Typography).attrs({
  className: 'StyledTitleAccordion StyledTypographyBold',
})`
  && {
    ${tw`relative`}
    font-size: 14px;
    line-height: 20px;
    letter-spacing: +0.021em;

    color: #394d94;
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

export const StyledFieldsDoubleColumnAccordionContainer = styled.div.attrs({
  className: 'StyledFieldsDoubleColumnAccordionContainer',
})`
  && {
    ${tw`relative flex flex-wrap pb-[32px]`}
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
`;
export const StyledFieldsSingleColumnContainer = styled.div.attrs({
  className: 'StyledFieldsSingleColumnContainer',
})`
  && {
    ${tw`relative flex flex-col pb-[32px]`}
    max-width: 100%;
    row-gap: 28px;

    @media (max-width: 768px) {
      padding-top: 20px;
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
    line-height: 20px;
    align-items: center;
    letter-spacing: -0.006em;
    color: #2C2D2E;

  }
`;

export const StyledFieldRowSingleColumn = styled.div.attrs({
  className: 'StyledFieldRowSingleColumn',
})`
  && {
    ${tw`relative flex `}
    margin-bottom: 6px;
    justify-content: space-between;
    align-items: center;
    flex-wrap: no-wrap;
    column-gap: 24px;

    ${(props) => {
      return `
      ${
        props.line === 'bottom'  ?  `  border-bottom: 1px solid #e4e4e4cc;  padding-bottom: 5px; ` : `` 
      }`;
    }}

  }
`;

export const StyledDownloadContainer = styled.a.attrs({
  className: 'StyledDownloadContainer',
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

export const StyledButtonContainer = styled.div.attrs({
  className: 'StyledButtonContainer',
})`
  && {
    ${tw`relative flex gap-4`}
    margin-top: 20px;
    margin-bottom: 20px;
    justify-content: right;
  }
`;

export const StyledButton = styled(Button).attrs({
  className: 'StyledButton',
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



// child Modal
export const StyledTitleModal = styled(Typography).attrs({
  className: 'StyledTitleModal StyledTypographyBold',
})`
  && {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.021em;
    color: #394d94;
    text-align:left;
    max-width:620px;

    ${(props) => {
      return `
          ${  props.color  &&
            ` color: ${props.color};`
          };
        `;
    }}
    
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

export const StyledChildContainerModal2 = styled.div.attrs({
  className: 'StyledChildContainerModal2',
})`
  && {
    ${tw`relative flex flex-col`}
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;

    .StyledTextAreaField label{
      color:#CE1F13 !important;
      font-weight:700;
    }
  }
`;


export const StyledButtonContainerModal = styled.div.attrs({
  className: 'StyledButtonContainerModal',
})`
  && {
    ${tw`relative flex gap-4`}
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
    justify-content: right;
  }
`;

export const StyledButtonModal = styled(Button).attrs({
  className: 'StyledButtonModal',
})`
  && {
    ${tw`relative`}

    width: 150px;
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

export const StyledCheckboxField = styled(Checkbox).attrs({
  className: 'StyledCheckboxField',
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
      flex-direction: row-reverse;
    }
    .MuiTypography-root{
      min-width: auto;
    }
  }
`;


export const StyledAccordionContainerStatus = styled.div.attrs({
  className: 'StyledAccordionContainerStatus',
})`
  && {
    ${tw`relative flex gap-4`}
    margin-bottom: 20px;
    border-top: 2px solid #A2AED8;
    justify-content: right;
  }
`;
