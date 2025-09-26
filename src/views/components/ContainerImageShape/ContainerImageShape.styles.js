import tw from 'twin.macro';
import styled from 'styled-components';

export const StyledContainer = styled.div.attrs({
  className: 'StyledContainer',
})`
&& {
    ${tw`relative m-[40px] place-items-center`}
    ${(props) => {
      return `
      width: ${props.scale * 120}px;
      height: ${props.scale * 120}px;
      @media (max-width: 768px){
        width: ${(props.scale / 2.44) * 120}px;
        height: ${(props.scale / 2.44) * 120}px;
      }
      `;
    }}

`;

export const StyledShape = styled.svg.attrs({
  className: 'StyledShape',
})`
  && {
    ${tw`relative `}
    width: 120px;
    height: 120px;
    margin: 0 auto;
    ${(props) => {
      return `
    transform: scale(${props.scale});
     @media (max-width: 768px){
      transform: scale(${props.scale / 2.44});
    }`;
    }}
    ${(props) => {
      return `
    ${
      props.isHome
        ? `@media (max-width: 1239.98px) and (min-width: 768px){
          transform: scale(${props.scale - 1});

    }`
        : ``
    }
    `;
    }}
  }
`;
export const StyledInnerContainerIconError = styled.div.attrs({
  className: 'StyledInnerContainerIconError',
})`
  && {
    ${tw`relative grid  place-items-center`}
    right: 50%;
  }
`;
export const StyledContainerIcon = styled.div.attrs({
  className: 'StyledContainerIcon',
})`
  && {
    ${tw`absolute  place-items-center`}
    left: 50%;
    top: 50%;
    transform: translate(0, -50%);
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const StyledContainerIconMobile = styled.div.attrs({
  className: 'StyledContainerIconMobile',
})`
  && {
    ${tw`absolute place-items-center`}
    left: 50%;
    top: 50%;
    transform: translate(0, -50%);

    display: none;
    @media (max-width: 768px) {
      display: block;
    }
  }
`;
