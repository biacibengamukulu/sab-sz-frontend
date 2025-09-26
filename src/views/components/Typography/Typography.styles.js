import styled from 'styled-components';
import tw from 'twin.macro';
import { Typography } from '@mui/material';
export const StyledTypography = styled(Typography).attrs({
  className: 'StyledTypography',
})`
  && {
    ${tw`relative`}

    ${(props) => {
      return `
    ${props.color && `color: ${props.color} !important;`};
      ${props.color === 'primary' && `color: #E46C02;`};
      ${props.color === 'secondary' && `color: #394D94 !important;`};
          ${props.color === 'success' && `color: #59A310;`};
          ${props.color === 'error' && `color: #CE1F13;`};
          ${props.color === 'neutral' && `color: #4C5232;`};
          ${props.color === 'neutral-10' && `color: #FFFFFF; opacity: 0.4;`};
          ${props.color === 'neutral-80' && `color: #6D7074;`};
          ${props.color === 'neutral-90' && `color: #494B4D;`};
          ${props.color === 'white' && `color: #FFFFFF;`};

        `;
    }}
  }
`;
