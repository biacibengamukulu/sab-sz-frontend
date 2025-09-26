import tw from 'twin.macro';
import styled from 'styled-components';
import Typography from '../Typography';

export const StyledContainer = styled.div`
&& {
    ${tw`relative m-[40px]`}
`;
export const StyledCard = styled.div`
  && {
    ${tw` pl-[46px] pr-[8px] pt-[24px] bg-white box-border relative`}
    width: 280px;
    height: 120px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
    border: 2px solid #f8f9fa;
    border-radius: 16px;
  }
`;

export const StyledCardTitle = styled(Typography).attrs({
  className: 'StyledCardTitle ',
})`
  && {
    max-height: 56px;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.011em;
    overflow: hidden;
    color: #4c5232;
  }
`;
export const StyledShape = styled.svg.attrs({
  className: 'StyledShape ',
})`
  && {
    ${tw`absolute`}
    width: 60px;
    height: 60px;
    left: -25px;
    top: -25px;
    ${(props) => {
      return `transform: scale(${props.scale});`;
    }}
  }
`;

export const StyledContainerIcon = styled.div.attrs({
  className: 'StyledContainerIcon ',
})`
  && {
    ${tw`absolute`}
    left: 0px;
    top: 0px;
    transform: translate(-50%, -50%);
  }
`;
