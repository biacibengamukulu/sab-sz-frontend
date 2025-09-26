import tw from 'twin.macro';
import styled from 'styled-components';

export const StyledStatusRenew = styled.div.attrs({
  className: 'StyledStatusRenew',
})`
  && {
    ${tw`relative  `}
    background: #394D94;
    color: white;
    width:82px;
    height:34px;
    border-radius:8px;
    padding: 8px 16px;
    font-size:14px;
    line-height:18px;
    font-weight:700;
  }
`;