import styled from 'styled-components';
import tw from 'twin.macro';
import Watermark from '../../../assets/images/Watermark.png';

export const StyledPrivateContent = styled.div.attrs({
  className: 'StyledPrivateContent',
})`
  && {
    ${tw`relative `}
    min-height: calc(100vh);
    background-position: left top;
    ${(props) => {
      switch (props.background) {
        case 'primary':
          return `background: #FFFFFF;`;
        case 'secondary':
          return ` 
          background: #E5E5E5;`;
        case 'tertiary':
          return ` background: #E5E5E5;`;
        default:
          return tw`bg-white`;
      }
    }}
    @media (max-width: 768px) {
      width: 100vw;
      // overflow-x: hidden;
      min-height: calc(100vh - 200px);
      background: #e5e5e5;
    }
  }
`;

export const StyledOuterContent = styled.div.attrs({
  className: 'StyledOuterContent',
})`
  && {
    ${tw`relative `}
    min-height: calc(100vh);
    background-image: url(${Watermark});
    background-repeat: no-repeat;
    background-position-x: -100px;
    background-position-y: 100%;
  }
`;

export const StyledOuterContentBackuser = styled.div.attrs({
  className: 'StyledOuterContentBackuser',
})`
  && {
    ${tw`relative `}
    min-height: calc(100vh);
    background-image: url(${Watermark});
    background-repeat: no-repeat;
    background-position-x: 140px;
    background-position-y: 100%;
  }
`;
export const StyledInnerContentContainer = styled.div.attrs({
  className: 'StyledInnerContentContainer',
})`
  && {
    ${tw`relative `}
    min-height: calc(100vh);
  }
`;

export const StyledInnerContentBackuser = styled.div.attrs({
  className: 'StyledInnerContentBackuser',
})`
  && {
    ${tw`relative `}
    display: grid;
    grid-template-columns: 194px auto;
    @media (max-width: 768px) {
      display: flex;
    }
  }
`;
export const StyledHeaderContent = styled.header`
  background-color: #f8f9fa;
  opacity: 0.8;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

export const StyledImgWatermark = styled.img`
  && {
    ${tw`absolute`}
    top: 0;
    left: 200px;
    @media (max-width: 768px) {
      width: 334px;
      height: 400px;
      top: 72px;
      left: -80px;
    }
  }
`;
