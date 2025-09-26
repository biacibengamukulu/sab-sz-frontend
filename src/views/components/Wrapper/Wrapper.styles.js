import styled from 'styled-components';
import tw from 'twin.macro';
import Typography from '../../components/Typography';
import Button from '../../components/Buttons';

export const StyledWrapper = styled.div.attrs({
  className: 'StyledWrapper',
})`
  && {
    ${tw`relative flex flex-col bg-white p-[64px] pt-[72px] mx-auto rounded-2xl`}

    ${(props) => {
      return `
        ${props.maxWidth && `max-width: ${props.maxWidth};`}
      `;
    }}
    
    @media (max-width: 767.98px) {
      border-radius: 8px;
      padding: 32px;
      padding-bottom: 54px;
      padding-top: 54px;
    }
    ${(props) => {
      return `
        ${
          props.isReview &&
          `
            padding-top: 132px;
        `
        }
      `;
    }}
  }
`;
export const StyledGoBack = styled.div.attrs({
  className: 'StyledGoBack',
})`
  && {
    ${tw` absolute flex`}
    top: 0px;
    left: 0px;
    width: 100%;
    height: 48px;

    align-items: center;
    column-gap: 12px;
    padding-left: 16px;
    cursor: pointer;

    background: #394d94;
    border-radius: 8px 8px 0px 0px;
    @media (max-width: 768px) {
      // display: none;
    }
  }
`;
export const StyledGoBackTypography = styled(Typography).attrs({
  className: 'StyledGoBackTypography',
})`
  && {
    ${tw` relative`}
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    @media (max-width: 768px) {
      // display: none;
    }
  }
`;
export const StyledImageContainer = styled.div.attrs({
  className: 'StyledImageContainer',
})`
  && {
    ${tw` absolute`}
    top: 0;
    left: 50%;
    width: 120px;
    max-width: 120px;
    height: 120px;
    max-height: 120px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    transform: translate(-50%, -50%);
    z-index: 1;
    @media (max-width: 768px) {
      top: 32px;
      left: 100%;
      width: 80px;
      max-width: 80px;
      height: 80px;
      max-height: 80px;
      transform: translate(calc(-100% - 40px), 0);
    }
  }
`;

export const StyledWrapperImage = styled.img.attrs({
  className: 'StyledWrapperImage',
})`
  && {
    ${tw` relative`}
    width: 120px;
    max-width: 120px;
    height: 120px;
    max-height: 120px;
    border-radius: 8px;
    @media (max-width: 768px) {
      width: 80px;
      max-width: 80px;
      height: 80px;
      max-height: 80px;
    }
  }
`;

export const StyledButtonImage = styled(Button).attrs({
  className: 'StyledButtonImage',
})`
  && {
    ${tw` absolute`}
    min-width: 40px;
    max-width: 40px;
    min-height: 40px;
    max-height: 40px;
    padding: 0;
    top: 100%;
    left: 100%;
    transform: translate(-80%, -80%);
  }
`;
export const StyledWrapperTitle = styled(Typography).attrs({
  className: 'StyledWrapperTitle StyledTypographyBold',
})`
  && {
    color: #394d94 !important;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.021em;

    @media (max-width: 768px) {
      font-size: 20px;
      line-height: 28px;
      letter-spacing: -0.017em;
    }
  }
`;
export const StyledWrapperSubTitle = styled(Typography).attrs({
  className: 'StyledWrapperSubTitle StyledTypographyBold',
})`
  && {
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.017em;
    color: #494b4d;
    @media (max-width: 768px) {
      margin-top: 0px;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.006em;
    }
  }
`;

export const StyledWrapperDescription = styled(Typography).attrs({
  className: 'StyledWrapperDescription',
})`
  && {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    color: #6d7074;

    @media (max-width: 768px) {
      color: #494b4d;
    }
  }
`;

//Profile page
export const StyledProfileDescription = styled(Typography).attrs({
  className: 'StyledProfileDescription',
})`
  && {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    white-space: pre-line;
    color: #494b4d;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const StyledChildrenContainer = styled.div.attrs({
  className: 'StyledChildrenContainer',
})`
  && {
    ${tw` relative`}
  }
`;
