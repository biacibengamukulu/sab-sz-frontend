import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../../components/Buttons';
import Typography from '../../components/Typography';

export const StyledSectionBlog = styled.div.attrs({
  className: 'StyledSectionBlog',
})`
&& {
    ${tw`relative  py-[50px] mx-[10px]`}
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

export const StyledSocialMediaContainer = styled.div.attrs({
  className: 'StyledSocialMediaContainer',
})`
  && {
    ${tw`absolute`}
    top: 0;
    right: 0;
  }
`;

// Blog info

export const StyledTitleBlog = styled(Typography).attrs({
  className: 'StyledTitleBlog StyledTypographyBold',
})`
  && {
    word-wrap: break-word;
    margin-top: 24px;
    font-size: 32px;
    line-height: 42px;
    color: #d66127;
  }
`;

export const StyledSubtitleBlog = styled(Typography).attrs({
  className: 'StyledSubtitleBlog StyledTypographyBold',
})`
  && {
    margin-bottom: 8px;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.021em;
    color: #d66127;
  }
`;

export const StyledDateBlog = styled(Typography).attrs({
  className: 'StyledDateBlog StyledTypography',
})`
  && {
    font-size: 12px;
    line-height: 18px;
    letter-spacing: -0.017em;
    color: #6d7074;
  }
`;
export const StyledContentBlogContainer = styled.div.attrs({
  className: 'StyledContentBlogContainer',
})`
  && {
    ${tw`relative flex flex-col`}
    padding: 4px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;
export const StyledContainerImageBlog = styled.div.attrs({
  className: 'StyledContainerImageBlog',
})`
  && {
    ${tw`relative grid`}
    width: 100%;
    place-content: center;
    margin-bottom: 32px;
  }
`;
export const StyledInnerHtmlBodyBlog = styled.div.attrs({
  className: 'StyledInnerHtmlBodyBlog StyledTypographyBook',
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
        color: #494b4d !important;
      }
    }

    h2 {
      span {
        font-family: 'GothamRnd-Bold' !important;
        font-weight: 400 !important;
        font-size: 24px !important;
        line-height: 32px !important;
        letter-spacing: -0.021em !important;
        color: #494b4d !important;
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
      color: #494b4d !important;
    }

    h2 {
      font-family: 'GothamRnd-Bold' !important;
      font-weight: 400 !important;
      font-size: 24px !important;
      line-height: 32px !important;
      letter-spacing: -0.021em !important;
      color: #494b4d !important;
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

export const StyledButtonApplyNow = styled(Button).attrs({
  className: 'StyledButtonApplyNow',
})`
  && {
    ${tw`relative`}
    width: 120px;
    fontsize: 16px;
    line-height: 22px;
    letter-spacing: -0.011em;
    align-self: center !important;
  }
`;

// modal styles
