import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../../components/Buttons';
import Typography from '../../components/Typography';

export const StyledSectionLogin = styled.div.attrs({
  className: 'StyledSectionLogin',
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
export const StyledFormContainer = styled.div.attrs({
  className: 'StyledFormContainer',
})`
  && {
    ${tw`relative flex flex-col bg-white p-[64px] mx-auto rounded-2xl`}
    max-width: 580px;
    @media (max-width: 768px) {
      border-radius: 8px;
      padding: 32px;
      padding-bottom: 54px;
    }
  }
`;

export const StyledFormTitle = styled(Typography).attrs({
  className: 'StyledFormTitle StyledTypographyBold',
})`
  && {
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

export const StyledFormSubTitle = styled(Typography).attrs({
  className: 'StyledFormSubTitle',
})`
  && {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    color: '#6D7074';
    @media (max-width: 768px) {
      color: #494b4d;
    }
  }
`;

export const StyledFieldsContainer = styled.div.attrs({
  className: 'StyledFieldsContainer',
})`
  && {
    ${tw`relative pt-[30px]`}
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      row-gap: 20px;
      padding-top: 34px;
    }
  }
`;

export const StyledField = styled.div.attrs({
  className: 'StyledField',
})`
  && {
    ${tw`relative flex flex-col`}
  }
`;

export const StyledButtonLogin = styled(Button).attrs({
  className: 'StyledButtonLogin',
})`
  && {
    width: 130px;
    margin-top: 40px;
    align-self: center;
    .MuiCircularProgress-colorPrimary {
      color: #ffffff;
    }
    @media (max-width: 768px) {
      width: 88px;
      height: 44px;
      margin-top: 33px;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.006em;
    }
  }
`;

export const StyledTermContainer = styled.div.attrs({
  className: 'StyledTermContainer',
})`
  && {
    ${tw`relative my-4 grid place-content-center`}
    max-width: 860px;
    gap: 30px 40px;
    & > * {
      flex: 1 1 calc(50%);
    }
  }
`;

export const StyledLabel = styled.label.attrs({
  className: 'StyledLabel',
})`
  && {
    ${tw`relative my-4 grid place-content-center`}
  }
`;

export const StyledForgotPass = styled(Typography).attrs({
  className: 'StyledForgotPass',
})`
  && {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    margin-top: 32px;
    text-decoration: underline;
    cursor: pointer;
    align-self: center;
    justify-self: center;

    @media (max-width: 768px) {
      margin-top: 37px;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.006em;
    }
  }
`;
export const StyledRow = styled.div.attrs({
  className: 'StyledSignInRow',
})`
  && {
    ${tw`relative flex justify-center mt-[18px]`}
  }
`;
// modal styles

export const StyledTitleModal = styled(Typography).attrs({
  className: 'StyledTitleModal StyledTypographyBold',
})`
  && {
    margin-top: 24px;
    max-width: calc(100% - 16px);
    font-size: 24px;
    line-height: 30px;
    letter-spacing: -0.021em;
  }
`;

export const StyledSubtitleModal = styled(Typography).attrs({
  className: 'StyledSubtitleModal',
})`
  && {
    max-width: 460px;
    margin-top: 12px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    color: #aa2020;
  }
`;
export const StyledSubtitleModalCancel = styled(Typography).attrs({
  className: 'StyledSubtitleModalCancel',
})`
  && {
    margin-top: 32px;
    max-width: 460px;
    margin-top: 24px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    color: #aa2020;
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
