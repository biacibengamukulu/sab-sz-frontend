import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../../components/Buttons';
// import Typography from '../../components/Typography';
import PhoneInputFieldControlled from '../../components/PhoneInputFieldControlled';

export const StyledSectionProfile = styled.div.attrs({
  className: 'StyledSectionProfile',
})`
&& {
    ${tw`relative  mt-[128px] pb-[104px] mx-[10px]`}
    width: calc(100% - 20px);
    box-sizing:content-box;
    @media (max-width: 768px){
      width: calc(100% - 32px);
      margin: 0 16px;
      padding-top: 16px;
      padding-bottom: 24px;
    }
    }}
    
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
export const StyledFieldsContainer = styled.div.attrs({
  className: 'StyledFieldsContainer',
})`
  && {
    ${tw`relative flex flex-wrap pt-[32px]`}
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
export const StyledButtonSave = styled(Button).attrs({
  className: 'StyledButtonSave',
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
      margin-top: 36px;
      width: 130px;
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
