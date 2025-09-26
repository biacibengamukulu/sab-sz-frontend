import styled from 'styled-components';

export const StyledActivityIndicator = styled.div.attrs({
  className: 'StyledActivityIndicator',
})`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;
