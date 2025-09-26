import styled from 'styled-components';
import tw from 'twin.macro';
export const StyledTycInfo = styled.div.attrs({
  className: 'StyledTycInfo',
})`
  && {
    ${tw`flex flex-row`}
    min-width: 320px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    column-gap: 48px;
    @media (max-width: 920px) {
      align-items: flex-start;
      width: 100%;
    }
  }
`;
