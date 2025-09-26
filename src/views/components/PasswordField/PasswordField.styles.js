// Packages
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
} from '@mui/material';

export const StyledFormControl = styled(FormControl)`
  & {
    .MuiFormControl-root {
      ${tw` mb-[4px]`}
      @media (max-width: 768px) {
        margin-top: 0px;
      }
    }

    .MuiInputBase-input {
      ${tw`box-border pt-[10px] pb-[14px] px-[16px] h-[44px] border-black`}
      font-family: 'GothamRnd-Book' !important;
      font-size: 14px;
      line-height: 20px;
      @media (max-width: 768px) {
        height: 44px;
      }
    }
    .MuiOutlinedInput-root {
      @media (max-width: 768px) {
        min-width: 230px;
      }
    }
    .MuiInputLabel-outlined {
      ${tw`top-[-4px]`}
    }
    .MuiOutlinedInput-notchedOutline {
      ${tw` rounded`}
      border: 1px solid #DAE0E8;
    }
  }
`;

export const StyledInputLabel = styled(InputLabel).attrs({
  className: 'StyledInputLabel StyledTypography',
})`
  left: -14px !important;
  font-size: 18px !important;
  top: 16px !important;
  color: #494b4d !important;
  @media (max-width: 768px) {
    font-size: 18px !important;
    line-height: '20px';
  }
`;

export const StyledOutLineInput = styled(OutlinedInput).attrs({
  className: 'StyledOutLineInput',
})`
  top: 12px !important;
  margin-bottom: 20px !important;
  margin-top: 20px !important;
  .MuiOutlinedInput-notchedOutline {
    border: 1px solid #dae0e8 !important;
  }
  &:hover .MuiOutlinedInput-notchedOutline {
    border: 1px solid #394d94 !important;
  }

  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border: 1px solid #394d94 !important;
  }
  &.Mui-error .MuiOutlinedInput-notchedOutline {
    border: 1px solid #ff2d55 !important;
  }
`;

export const StyledFormHelperText = styled(FormHelperText).attrs({
  className: 'StyledFormHelperText StyledTypographyLight',
})`
  margin: 0 !important;
  left: -14px !important;
  color: #ff2d55 !important;
`;
