import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledFooter = styled.footer.attrs({
  className: 'StyledFooter',
})`
  && {
    ${tw`absolute w-full flex flex-col justify-between bg-white`}
    bottom: -240px;
    left: 0;
    height: 240px;
    background: linear-gradient(180deg, #394d94 0%, #222e59 100%);

    @media (max-width: 920px) {
      bottom: -160px;
      height: 160px;
    }
  }
`;

export const StyledFooterInfo = styled.div.attrs({
  className: 'StyledFooterInfo',
})`
  && {
    ${tw` relative grid`}
    grid-template-columns: 1fr 1fr 1fr;
    height: 160px;
    @media (max-width: 920px) {
      ${tw` relative flex flex-row`}

      flex-wrap: wrap-reverse;
      justify-content: space-between;
      min-height: 120px;
      max-height: 120px;
      padding: 32px 54px;
    }
  }
`;
