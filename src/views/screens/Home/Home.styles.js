import tw from 'twin.macro';
import styled from 'styled-components';
import Typography from '../../components/Typography';
import Button from '../../components/Buttons';
import mainHomeImage from '../../../assets/images/homepage-image.jpg';

export const StyledSectionHome = styled.div.attrs({
  className: 'StyledSectionHome',
})`
&& {
    ${tw`relative w-full h-full py-[24px] flex flex-col`}
    box-sizing:content-box;
    overflow: hidden;
    position: initial;
    @media (max-width: 768px){
      padding-bottom: 14px;
    }
    }}

`;

export const StyledContainerArticle = styled.div.attrs({
  className: 'StyledContainerArticle',
})`
&& {
    ${tw`relative  grid`}
    // height: calc(100vh*0.6);
    height: 600px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 10%;
    margin-top: 32px;
    position: initial;

    @media (max-width: 1239.98px) and (min-width: 768px) {
      height: auto;
      margin: 0 3%;

    }
    @media (max-width: 768px){
      width: 100%;
      height: auto;
      display: flex;
      margin-left: 8%;
    }
    }}

`;

export const StyledArticle = styled.article.attrs({
  className: 'StyledArticle',
})`
&& {
    ${tw`relative flex flex-col flex-nowrap`}

    position: initial;
    justify-content: flex-start;
    width: 100%;
      justify-self: end;
      grid-column: 1/2;
      max-width: 1093px;
      padding-right: 20px;
      @media (max-width: 768px){
        width: 45%;
      }
    }}

`;
export const StyledArticleTitle = styled(Typography).attrs({
  className: 'StyledArticleTitle StyledTypographyBold',
})`
  && {
    max-width: 540px;
    padding-top: 8px;
    padding-bottom: 30px;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.022em;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const StyledArticleTitleMobile = styled(Typography).attrs({
  className: 'StyledArticleTitle StyledTypographyBold',
})`
  && {
    display: none;
    @media (max-width: 768px) {
      display: block;
      padding: 20px 0;
      padding-bottom: 16px;
      font-size: 32px;
      line-height: 48px;
      letter-spacing: -0.021em;
    }
  }
`;

export const StyledArticleParagraph = styled(Typography).attrs({
  className: 'StyledArticleParagraph',
})`
  && {
    width: 100%;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const StyledArticleCallToAction = styled(Typography).attrs({
  className: 'StyledArticleCallToAction',
})`
  && {
    display: none;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    text-decoration: underline;
    @media (max-width: 768px) {
      display: block;
    }
  }
`;

export const StyledArticleButton = styled(Button).attrs({
  className: 'StyledArticleButton',
})`
  && {
    width: 180px;
    margin-top: 55px;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.011em;
    @media (max-width: 1300px) {
      margin-top: 30px;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const StyledContainerImage = styled.div.attrs({
  className: 'StyledContainerImage',
})`
  && {
    ${tw`relative grid place-items-center`}
    justify-self: end;
    width: 100%;
    height: 95%;
    position: initial;

    @media (max-width: 1239.98px) and (min-width: 768px) {
      ${tw`relative grid place-items-center`}
      grid-colmun: 2/3;
      top: 16px;
      width: 484px;
      height: 464px;
    }
    @media (max-width: 768px) {
      justify-self: end;
      width: 40%;
      height: 270px;

      position: initial;
    }
  }
`;
export const StyledImageShape = styled.div.attrs({
  className: 'StyledImageShape',
})`
  && {
    ${tw`relative`}
    align-self: start;
    width: 100%;
    height: 100%;
    max-height: 600px;
    display: block;
    position: initial;
    border-radius: 40px;
    background-image: url(${mainHomeImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;
export const StyledCarousel = styled.div.attrs({
  className: 'StyledCarousel',
})`
  && {
    ${tw`absolute  flex flex-row flex-nowrap`}
    top: 520px;
    margin: 0 calc(10% - 40px);
    @media (max-width: 1240px) and (min-width: 1000px) {
      position: relative;
      justify-content: center;
      top: 0;
      margin: 16px 10%;
    }
    @media (max-width: 999.98px) and (min-width: 768px) {

      position: relative;
      justify-content: center;
      top: 0;
      flex-wrap: wrap;
      margin: 16px 10%;
    }
    @media (max-width: 767.98px){
      display: none;
    }
}}
  }
`;
export const StyledButtonBlogContainer = styled.div.attrs({
  className: 'StyledButtonBlogContainer',
})`
  && {
      ${tw` relative flex`}
      margin-top: 24px;
      margin-left: 10%;
      z-index: 3;
    }
}}
  }
`;

export const StyledViewMoreButton = styled(Button).attrs({
  className: 'StyledViewMoreButton',
})`
  && {
    width: 180px;
    margin-top: 55px;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.011em;
    @media (max-width: 1300px) {
      margin-top: 30px;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
export const StyledInfo = styled.div.attrs({
  className: 'StyledInfo',
})`
  && {
    ${tw`relative h-[100px] mt-[24px] grid place-items-center mx-auto`}
    width: 70%;
    @media (max-width: 1200px) and (min-width: 768px) {
      width: 90%;
    }
    @media (max-width: 767.98px){
      display: none;
    }
}}
  }
`;

export const StyledButtonsContainerMobile = styled.div.attrs({
  className: 'StyledButtonsContainerMobile',
})`
  && {
    display: none;
    @media (max-width: 768px){
      ${tw` relative flex flex-row space-x-3.5 `}
      margin: 0 auto;
      margin-top: 35px;
      margin-bottom: 75px;
    }
}}
  }
`;
