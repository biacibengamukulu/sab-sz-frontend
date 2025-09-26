import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../Buttons';
// import CheckboxControlled from '../CheckboxControlled';
// import InputFileFieldControlled from '../InputFileFieldControlled';
import ActivityIndicator from '../ActivityIndicator';
import Typography from '../Typography';

//Step 2

export const StyledApplicationTrackInformationSection = styled.div.attrs({
  className: 'StyledApplicationTrackInformationSection',
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
    color: #394d94;
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
    line-height: 20px;flex;
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
