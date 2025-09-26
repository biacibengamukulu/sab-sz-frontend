import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../../components/Buttons';
import Typography from '../../components/Typography';
import PhoneInputFieldControlled from '../../components/PhoneInputFieldControlled';
import RadioGroupFieldControlled from '../../components/RadioGroupFieldControlled';

export const StyledSectionSignUp = styled.div.attrs({
  className: 'StyledSectionSignUp',
})`
&& {
    ${tw`relative  py-[50px] mx-[10px]`}
    width: calc(100% - 20px)
    box-sizing:content-box;
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
    max-width: 860px;
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

export const StyledFieldRow = styled.div.attrs({
  className: 'StyledFieldRow',
})`
  && {
    ${tw`relative flex`}
  }
`;
export const StyledFieldRowHidden = styled.div.attrs({
  className: 'StyledFieldRowHidden',
})`
  && {
    ${tw`relative flex`}
    display:none;
  }
`;
export const StyledPhoneInputField = styled(PhoneInputFieldControlled).attrs({
  className: 'StyledPhoneInputField ',
})`
  && {
  }
`;

export const StyledRadioGroupField = styled(RadioGroupFieldControlled).attrs({
  className: 'StyledRadioGroupField ',
})`
  && {
    max-width: 100%;
  }
`;

export const StyledFieldsContainer = styled.div.attrs({
  className: 'StyledFieldsContainer',
})`
  && {
    ${tw`relative flex flex-wrap pt-[30px]`}
    max-width: 860px;
    gap: 20px 40px;
    & > * {
      flex: 0 1 calc(50% - 20px);
    }
    @media (max-width: 768px) {
      padding-top: 20px;
      flex-direction: column;
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
export const StyledButtonRegister = styled(Button).attrs({
  className: 'StyledButtonRegister',
})`
  && {
    ${tw`relative`}

    width: 130px;
    margin-top: 40px;
    fontsize: 16px;
    line-height: 22px;
    letter-spacing: -0.011em;
    align-self: center !important;
    .MuiCircularProgress-colorPrimary {
      color: #ffffff;
    }
    @media (max-width: 768px) {
      margin-top: 0px;
      width: 106px;
      height: 44px;
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
    ${tw`relative my-4 `}
    @media (max-width: 768px) {
      margin-top: 0;
      margin-bottom: 20px;
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

export const StyledSignInRow = styled.div.attrs({
  className: 'StyledSignInRow',
})`
  && {
    ${tw`relative flex justify-center mt-[36px]`}


`;
