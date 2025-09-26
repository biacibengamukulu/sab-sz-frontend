// Packages
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
import {
  IconButton,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Select,
  Avatar,
} from '@mui/material';

export const StyledFormControl = styled(FormControl).attrs({
  className: 'StyledFormControl',
})`
  & {
    .MuiFormControl-root {
      z-index: 6;
      ${tw`mt-[24px] mb-[4px]`}
    }

    .MuiInputBase-input {
      ${tw`box-border pt-[10px] pb-[14px] px-[16px] h-[44px] border-black`}
      font-family: 'GothamRnd-Book' !important;
      font-size: 14px;
      line-height: 20px;
    }
    .MuiInputBase-input {
      padding-right: 32px;
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
    .MuiInputLabel-root {
      overflow: visible !important;
    }
  }
`;
export const StyledImageInputContainer = styled.div.attrs({
  className: 'StyledImageInputContainer',
})`
  && {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 120px;
  }
`;
export const StyledFileLabel = styled.label.attrs({
  className: 'StyledFileLabel',
})`
  && {
    position: absolute;
    top: 44px;
    left: 100%;
    transform: translate(-42px, 0);
    cursor: pointer;
    z-index: 9;
  }
`;

export const StyledAvatarField = styled(Avatar).attrs({
  className: 'StyledAvatarField',
})`
  && {
    ${tw` relative`}
    width: 120px;
    max-width: 120px;
    height: 120px;
    max-height: 120px;
    border-radius: 4px;
    border: 1px solid #dae0e8;
    @media (max-width: 768px) {
      width: 80px;
      max-width: 80px;
      height: 80px;
      max-height: 80px;
    }
  }
`;
export const StyledFileImageLabel = styled.label.attrs({
  className: 'StyledFileImageLabel',
})`
  && {
    position: relative;
    cursor: pointer;
    z-index: 9;
  }
`;

export const StyledInputLabel = styled(InputLabel).attrs({
  className: 'StyledInputLabel StyledTypography',
})`
  && {
    display: flex;
    align-items: center;
    left: -14px !important;
    font-size: 18px !important;
    top: 16px !important;
    color: #494b4d !important;
    pointer-events: auto;

    @media (max-width: 1200px) {
      font-size: 18px !important;
      line-height: '20px';
    }
  }
`;

export const StyledOutLineInput = styled(OutlinedInput).attrs({
  className: 'StyledOutLineInput',
})`
  && {
    top: 12px !important;
    margin-bottom: 20px !important;
    margin-top: 20px !important;
    color: #2c2d2e !important;
    background: #f3f5f7;
    .Mui-disabled {
      color: #2c2d2e;
      -webkit-text-fill-color: #2c2d2e;
    }
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
`;

export const StyledFormHelperText = styled(FormHelperText).attrs({
  className: 'errorInputLabel StyledTypography StyledFormHelperText',
})`
  margin: 0 !important;
  color: #ff2d55 !important;
`;

export const StyledButtonUpload = styled(IconButton).attrs({
  className: 'StyledButtonUpload',
})`
  && {
    color: #394d94;
    margin-right: 3px;
  }
`;

export const StyledButtonRemove = styled(IconButton).attrs({
  className: 'StyledButtonRemove StyledTypography',
})`
  && {
    position: absolute;
    top: 40px;
    left: 100%;
    transform: translate(-100%, 0);
    color: #394d94;
    font-size: 12px;
    line-height: 17px;
    z-index: 7;
  }
`;

export const StyledButtonRemoveImage = styled(IconButton).attrs({
  className: 'StyledButtonRemoveImage StyledTypography',
})`
  && {
    position: relative;
    max-width: 64px;
    padding: 4px;
    left: 100%;
    transform: translate(-100%, 0);
    color: #394d94;
    font-size: 12px;
    line-height: 17px;
  }
`;
