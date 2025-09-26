import styled from 'styled-components';
import tw from 'twin.macro';
import { CircularProgress } from '@mui/material';
import Typography from '../../components/Typography';

export const StyledCircularProgressContainer = styled.div.attrs({
  className: 'StyledCircularProgressContainer ',
})`
  && {
    ${tw`relative`}
    display: grid;
    place-content: center;
    width: 160px;
    height: 160px;
  }
`;
export const StyledCircularProgressInnerContainer = styled.div.attrs({
  className: 'StyledCircularProgressInnerContainer ',
})`
  && {
    ${tw`relative`}
    display: grid;
    place-content: center;
  }
`;
export const StyledCircularProgress = styled(CircularProgress).attrs({
  className: 'StyledCircularProgress',
})`
  && {
    ${tw`absolute`}
    width: 160px !important;
    height: 160px !important;
    top: 0;
    left: 0;
    filter: drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.08));
    ${(props) => {
      return `
          color: ${props.colorStroke} !important;;
        `;
    }}
  }
`;

export const StyledCircularProgressInner = styled(CircularProgress).attrs({
  className: 'StyledCircularProgressInner ',
})`
  && {
    ${tw`absolute`}
    width: 120px !important;
    height: 120px !important;
    top: 20px !important;
    left: 20px !important;

    ${(props) => {
      return `
          color: ${props.colorStroke} !important;;
        `;
    }}
  }
`;

export const StyledLabelContainer = styled.div.attrs({
  className: 'StyledLabelContainer',
})`
  && {
    ${tw`relative flex flex-col`}
    align-items: center;
    justify-content: center;
  }
`;
export const StyledProgressPercent = styled(Typography).attrs({
  className: 'StyledProgressPercent StyledTypographyBold',
})`
  && {
    ${tw`relative`}
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.021em;
    color: #e46c02;
  }
`;
export const StyledProgressLabel = styled(Typography).attrs({
  className: 'StyledProgressLabel',
})`
  && {
    ${tw`relative`}
    transform: translate(0, -50%);
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.006em;
    color: #e46c02;
  }
`;
