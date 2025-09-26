// Packages
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
import { Tooltip } from '@mui/material';

export const StyledTooltip = styled(Tooltip).attrs({
  className: 'StyledTooltip',
})`
  & {
    .MuiTooltip-popper {
      ${tw`mt-[24px] mb-[4px]`}
      position: relative;
      max-width: 200px;
      margin: 0;
      margin-left: 16px;
      padding: 4px 8px;
      border-radius: 4px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);

      background: #2c2d2e;
      color: #FFFFF;
      font-family: 'GothamRnd-Book' !important;
      font-size: 12px;
      line-height: 17x;
      font-weight: 400;
      word-wrap: break-word;
    }
  }
`;
