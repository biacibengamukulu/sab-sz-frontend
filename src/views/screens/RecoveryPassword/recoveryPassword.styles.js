import styled from 'styled-components';
import tw from 'twin.macro';
import Typography from '../../components/Typography';

export const StyledSectionRecoveryPassword = styled.div.attrs({
  className: 'StyledSectionRecoveryPassword',
})`
&& {
    ${tw`relative  py-[50px] mx-[10px]`}
    width: calc(100% - 20px)
    box-sizing:content-box;
    }}
    
`;
export const StyledFormContainer = styled.div.attrs({
  className: 'StyledFormContainer',
})`
  && {
    ${tw`relative flex flex-col bg-white p-[64px] mx-auto rounded-2xl`}
    position: initial;
    max-width: 580px;
  }
`;

export const StyledFieldsContainer = styled.div.attrs({
  className: 'StyledFieldsContainer',
})`
  && {
    ${tw`relative pt-[30px]`}
  }
`;

export const StyledField = styled.div.attrs({
  className: 'StyledField',
})`
  && {
    ${tw`relative flex flex-col `}
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

export const StyledRow = styled.div.attrs({
  className: 'StyledSignInRow',
})`
  && {
    ${tw`relative flex justify-center mt-[18px]`}


`;

export const StyledGoBack = styled.div.attrs({
  className: 'StyledGoBack',
})`
  && {
    ${tw` absolute`}
    width: calc(100% + 20px);
    top: 0;
    left: -10px;
    display: flex;
    align-items: center;
    height: 48px;
    padding-left: 16px;
    cursor: pointer;

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
