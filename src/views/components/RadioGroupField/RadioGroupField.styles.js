// Packages
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
import {
  FormControl,
  FormHelperText,
  InputLabel,
  RadioGroup,
} from '@mui/material';

export const StyledFormControl = styled(FormControl).attrs({
  className: 'StyledFormControl',
})`
  ${tw`relative flex flex-col`}

  margin-bottom: 16px !important;
  // max-height: px;
  .MuiFormControl-root {
  }

  .MuiOutlinedInput-root {
    @media (max-width: 768px) {
      min-width: 230px;
    }
  }

  .MuiOutlinedInput-notchedOutline {
    ${tw` rounded`}
    border: 1px solid #DAE0E8;
  }
`;

export const StyledInputLabel = styled(InputLabel).attrs({
  className: 'StyledInputLabel StyledTypography',
})`
  position: relative !important;
  width: 970px;
  max-width: 900 !important;
  top: 14px !important;
  left: -14px !important;
  margin: 0 !important;
  font-size: 18px !important;
  line-height: 20px !important;
  color: #494b4d !important;
  // overflow: hidden !important;
  white-space: normal !important;
  @media (max-width: 768px) {
    font-size: 18px !important;
    line-height: '20px';
  }
`;

export const StyledRadioGroup = styled(RadioGroup).attrs({
  className: 'StyledRadioGroup',
})`
  position: relative !important;
  display: flex !important;
  flex-wrap: no-wrap !important;
  column-gap: 32px !important;
  font-size: 14px !important;
  line-height: 20px !important;

  @media (max-width: 768px) {
    flex-wrap: wrap !important;
  }

  .MuiFormControlLabel-root {
    margin: 0;
    font-size: 14px !important;
    line-height: 20px !important;
  }
  .MuiButtonBase-root {
    min-width: 42px;
    min-height: 42px;
    border-radius: 50%;
  }
  .MuiTypography-root {
    font-size: 14px !important;
    line-height: 20px !important;
  }
`;

export const StyledFormHelperText = styled(FormHelperText).attrs({
  className: 'StyledFormHelperText StyledTypographyLight',
})`
  margin: 0 !important;
  left: -14px !important;
  color: #ff2d55 !important;
`;
