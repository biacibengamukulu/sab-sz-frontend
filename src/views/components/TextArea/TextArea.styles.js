// Packages
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
import { FormControl, FormHelperText, InputLabel } from '@mui/material';
import { TextareaAutosize } from '@mui/base';
export const StyledFormControl = styled(FormControl).attrs({
  className: 'StyledFormControl StyledTypography',
})`
  & {
    .MuiFormControl-root {
      ${tw`mt-[24px] mb-[4px]`}
    }

    .MuiInputBase-input {
      ${tw`box-border pt-[10px] pb-[14px] px-[16px] h-[44px] border-black`}
      font-family: 'GothamRnd-Book' !important;
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
  }
`;

export const StyledInputLabel = styled(InputLabel).attrs({
  className: 'StyledInputLabel StyledTypography',
})`
  && {
    display: flex !important;
    align-items: center !important;
    left: -14px !important;
    font-size: 20px !important;
    top: 12px !important;
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

export const StyledTextareaAutosize = styled(TextareaAutosize).attrs({
  className: 'StyledTextareaAutosize StyledTypographyBook',
})`
  && {
    ${tw`relative`}

    top: 12px !important;
    margin-bottom: 20px !important;
    margin-top: 20px !important;
    padding: 16px !important;
    background: #f3f5f7 !important;
    border: 2px solid #494b4d !important;
    border-radius: 4px !important;

    font-family: 'GothamRnd-Book' !important;
    font-size: 14px !important;
    line-height: 20px !important;
    letter-spacing: -0.006em !important;
    color: #2c2d2e !important;

    ${(props) => {
      return `${
        props.error
          ? `
      border: 2px solid #FF2D55 !important;
      &:focus{
      border: 2px solid #FF2D55 !important;
      }
      `
          : ``
      }`;
    }}
  }
`;

export const StyledFormHelperText = styled(FormHelperText).attrs({
  className: 'StyledFormHelperText StyledTypographyBook',
})`
  margin: 0 !important;
  color: #ff2d55 !important;
`;
