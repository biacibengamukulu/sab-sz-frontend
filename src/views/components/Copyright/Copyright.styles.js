import styled from 'styled-components';
import tw from 'twin.macro';
export const StyledCopyright = styled.div.attrs({
  className: 'StyledCopyright',
})`
  && {
    ${tw` grid`}
    width: 100%;
    place-content: center;
    height: 80px;
    @media (max-width: 768px) {
      height: 40px;
    }
  }
`;
