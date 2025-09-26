import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../../components/Buttons';
import Typography from '../../components/Typography';

export const StyledSectionNewBlog = styled.div.attrs({
  className: 'StyledSectionNewBlog',
})`
&& {
    ${tw`relative  py-[64px] mx-[10px]`}
    width: calc(100% - 20px);
    box-sizing:content-box;
    position: initial;

    @media (max-width: 768px){
      width: calc(100% - 32px);
      margin: 0 16px;
      padding-top: 16px;
      padding-bottom: 24px;
    }
    }}

`;

export const StyledFieldsContainer = styled.div.attrs({
  className: 'StyledFieldsContainer',
})`
  && {
    ${tw`relative`}
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    margin: 16px 0;
  }
`;

export const StyledTextFieldContainer = styled.div.attrs({
  className: 'StyledTextFieldContainer',
})`
  && {
    ${tw`relative`}
    max-width: 560px;
  }
`;
export const StyledRowSwitches = styled.div.attrs({
  className: 'StyledRowSwitches',
})`
  && {
    ${tw`relative`}
    display: flex;
    column-gap: 16px;
  }
`;
export const StyledRowButtonsContainer = styled.div.attrs({
  className: 'StyledRowButtonsContainer',
})`
  && {
    ${tw`relative flex`}
    justify-content: flex-end;
  }
`;
export const StyledRowButtons = styled.div.attrs({
  className: 'StyledRowButtons',
})`
  && {
    ${tw`relative`}
    display: flex;
    column-gap: 16px;
  }
`;
export const StyledButtonSave = styled(Button).attrs({
  className: 'StyledButtonSave',
})`
  && {
    ${tw`relative`}
    min-width: 102px;
  }
`;

export const StyledButtonPreview = styled(Button).attrs({
  className: 'StyledButtonPreview',
})`
  && {
    ${tw`relative`}
    min-width: 102px;
  }
`;

// modal styles
export const StyledTitleModal = styled(Typography).attrs({
  className: 'StyledTitleModal StyledTypographyBold',
})`
  && {
    font-size: 32px;
    line-height: 42px;
    color: #d66127;
  }
`;

export const StyledSubtitleModal = styled(Typography).attrs({
  className: 'StyledSubtitleModal StyledTypographyBold',
})`
  && {
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.021em;
    color: #d66127;
  }
`;

export const StyledDateModal = styled(Typography).attrs({
  className: 'StyledDateModal StyledTypography',
})`
  && {
    font-size: 12px;
    line-height: 18px;
    letter-spacing: -0.017em;
    color: #6d7074;
  }
`;
export const StyledChildContainerModal = styled.div.attrs({
  className: 'StyledChildContainerModal',
})`
  && {
    ${tw`relative flex flex-col`}
    width: 65vw;
    height: 54vh;
    padding: 4px;
    max-height: 65vh;
    margin-top: 20px;
    margin-bottom: 20px;
    overflow-y: auto;
    // overflow-x: hidden;
  }
`;
export const StyledContainerImageModal = styled.div.attrs({
  className: 'StyledContainerImageModal',
})`
  && {
    ${tw`relative grid`}
    width: 100%;
    place-content: center;
    margin-bottom: 32px;
  }
`;
export const StyledInnerHtmlModal = styled.div.attrs({
  className: 'StyledInnerHtmlModal StyledTypographyBook',
})`
  && {
    ${tw`relative flex flex-col`}
    // overflow-x: hidden;

    font-size: 12px;
    line-height: 18px;
    letter-spacing: -0.006em;
    color: #2c2d2e;
    word-wrap: break-word;

    ul {
      list-style-type: disc !important;
      margin: 16px 0;
    }
    ol {
      list-style-type: decimal !important;
      margin: 16px 0;
    }
    span {
      font-size: 12px !important;
      line-height: 18px !important;
    }
    p {
      span {
        font-size: 12px !important;
        line-height: 18px !important;
      }
    }
    h1 {
      span {
        font-family: 'GothamRnd-Bold' !important;
        font-weight: 400 !important;
        font-size: 32px !important;
        line-height: 42px !important;
        color: #d66127 !important;
      }
    }

    h2 {
      span {
        font-family: 'GothamRnd-Bold' !important;
        font-weight: 400 !important;
        font-size: 24px !important;
        line-height: 32px !important;
        letter-spacing: -0.021em !important;
        color: #d66127 !important;
      }
    }

    h3 {
      font-family: 'GothamRnd-Bold' !important;
      font-weight: 400 !important;
      font-size: 18px !important;
      line-height: 24px !important;
      letter-spacing: -0.017em !important;
      color: #6d7074 !important;
    }
    h1 {
      font-family: 'GothamRnd-Bold' !important;
      font-weight: 400 !important;
      font-size: 32px !important;
      line-height: 42px !important;
      color: #d66127 !important;
    }

    h2 {
      font-family: 'GothamRnd-Bold' !important;
      font-weight: 400 !important;
      font-size: 24px !important;
      line-height: 32px !important;
      letter-spacing: -0.021em !important;
      color: #d66127 !important;
    }

    h3 {
      font-family: 'GothamRnd-Bold' !important;
      font-weight: 400 !important;
      font-size: 18px !important;
      line-height: 24px !important;
      letter-spacing: -0.017em !important;
      color: #6d7074 !important;
    }
  }
`;

export const StyledGoBack = styled.div.attrs({
  className: 'StyledGoBack',
})`
  && {
    ${tw` absolute`}
    width: calc(100% + 20px);
    top: 0px;
    transform: translate(-10px, 0px);
    display: flex;
    align-items: center;
    height: 48px;
    padding-left: 16px;
    cursor: pointer;
    background-color: white;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const StyledGoBackTypography = styled(Typography).attrs({
  className: 'StyledGoBackTypography',
})`
  && {
    ${tw` absolute`}
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    margin-left: 12px;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
export const StyledButtonApplyNow = styled(Button).attrs({
  className: 'StyledButtonApplyNow',
})`
  && {
    ${tw`relative`}
    justify-self: flex-start;
    margin-top: 24px;
    width: 120px;
    fontsize: 16px;
    line-height: 22px;
    letter-spacing: -0.011em;
    // align-self: center !important;
  }
`;
