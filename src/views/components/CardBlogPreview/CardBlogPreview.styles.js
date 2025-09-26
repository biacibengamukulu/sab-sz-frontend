import tw from 'twin.macro';
import styled from 'styled-components';
import Typography from '../Typography';

export const StyledCardBlog = styled.div.attrs({
  className: 'StyledCardBlog ',
})`
  && {
    ${tw`relative grid`}
    min-width: 300px;
    max-width: 600px;
    min-height: 268px;
    grid-template-columns: 40% auto;
    grid-template-rows: 1fr;
    gap: 32px;

    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
  }
`;

export const StyledContainerImage = styled.div.attrs({
  className: 'StyledContainerImage ',
})`
  && {
    ${tw`relative grid`}
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: 50%;
    border-radius: 8px 0px 0px 8px;
  }
`;

export const StyledDescriptionContainer = styled.div.attrs({
  className: 'StyledDescriptionContainer  ',
})`
  && {
    ${tw`relative grid`}
    margin: 24px 0;
    margin-right: 24px;
    grid-template-columns: 1fr;
    grid-template-rows: 23% 46% 12%;
    row-gap: 16px;
    overflow: hidden;
  }
`;
export const StyledCardBlogTitle = styled(Typography).attrs({
  className: 'StyledCardBlogTitle StyledTypographyBold',
  variant: 'h3',
})`
  && {
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.017em;
    color: #2c2d2e;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const StyledCardBlogDescription = styled.div.attrs({
  className: 'StyledCardBlogDescription StyledTypographyBook',
})`
  && {
    max-height: 100px;
    overflow: hidden !important;
    & > * {
      font-family: 'GothamRnd-Book' !important;

      text-align: left !important;
      font-size: 14px !important;
      line-height: 20px !important;
      letter-spacing: -0.006em !important;
      color: #2c2d2e !important;
      word-wrap: break-word !important;
      text-overflow: ellipsis !important;
      overflow: hidden !important;
    }
    span {
      font-family: 'GothamRnd-Book' !important;

      font-size: 14px !important;
      line-height: 20px !important;
      letter-spacing: -0.006em !important;
      color: #2c2d2e !important;
      word-wrap: break-word !important;
      text-overflow: ellipsis !important;
      overflow: hidden !important;
    }
  }
`;

export const StyledCardBlogCallToActionContainer = styled.div.attrs({
  className: 'StyledCardBlogCallToActionContainer',
})`
  && {
    ${tw`relative flex`}
    align-items:center;
    column-gap: 16px;
    cursor: pointer;
  }
`;

export const StyledCardBlogCallToActionLabel = styled(Typography).attrs({
  className: 'StyledCardBlogCallToActionLabel',
})`
  && {
    font-size: 16px;
    line-height: 150%;
    color: #455db2;
  }
`;
