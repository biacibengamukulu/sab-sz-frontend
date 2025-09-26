import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledField = styled.div.attrs({
  className: 'StyledField',
})`
  && {
    ${tw`relative flex flex-col `}
  }
`;

export const StyledFieldsContainer = styled.div.attrs({
  className: 'StyledFieldsContainer',
})`
  && {
    ${tw`relative pt-[30px]`}
  }
`;

export const StyledSectionResendEmail = styled.div.attrs({
  className: 'StyledSectionResendEmail',
})`
&& {
    ${tw`relative  py-[50px] mx-[10px]`}
    width: calc(100% - 20px)
    box-sizing:content-box;
    }}
    
`;
