// Packages
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
import { FormControl, FormHelperText, InputLabel, Select } from '@mui/material';

export const StyledFormControl = styled(FormControl).attrs({
  className: 'StyledFormControl',
})`
  & {
    .MuiFormControl-root {
      ${tw`mt-[24px] mb-[4px]`}
    }

    .MuiInputBase-input {
      ${tw`box-border pt-[10px] pb-[14px] pl-[16px] h-[44px] border-black`}
      width: 100% !important;
      font-family: 'GothamRnd-Book' !important;
      padding-right: 24px !important;
      font-size: 14px;
      line-height: 20px;
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
    .MuiSelect-root {
      padding-right: 0px !important;
    }
  }
`;

export const StyledInputLabel = styled(InputLabel).attrs({
  className: 'StyledInputLabel StyledTypography',
})`
  && {
    display: flex !important;
    align-items: center !important;
    min-width: 400px !important;
    align-items: center;
    left: -14px !important;
    font-size: 18px !important;
    top: 16px !important;
    color: #494b4d !important;
    pointer-events: auto;
    overflow: hidden;
    white-space: normal;
    @media (max-width: 768px) {
      font-size: 18px !important;
      line-height: '20px';
    }
  }
`;

export const StyledSelect = styled(Select).attrs({
  className: 'StyledSelect',
})`
  top: 20px;
  margin-bottom: 40px;
  margin-top: 8px;
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

export const StyledIconContainer = styled.i.attrs({
  className: 'StyledIconContainer',
})`
  display: grid !important;
  place-content: center !important;
  top: 0 !important;
  height: 100% !important;
`;

export const StyledFormHelperText = styled(FormHelperText).attrs({
  className: 'StyledFormHelperText StyledTypographyLight',
})`
  margin: 0 !important;
  left: -14px !important;
  color: #ff2d55 !important;
`;
