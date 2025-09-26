import styled from 'styled-components';
import tw from 'twin.macro';
export const StyledSocialMedia = styled.div.attrs({
  className: 'StyledSocialMedia',
})`
  && {
    ${tw`flex flex-row space-x-6`}
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    @media (max-width: 768px) {
      ${tw`space-x-8`}
      align-items: flex-end;
      width: 100%;
    }
  }
`;

export const StyledItem = styled.div.attrs({
  className: 'StyledItem',
})`
  && {
    ${tw` relative cursor-pointer`}
  }
`;
