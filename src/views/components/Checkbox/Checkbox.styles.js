// Packages
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
import {
  FormControl,
  Checkbox,
  FormHelperText,
  FormControlLabel,
} from '@mui/material';

export const StyledFormControl = styled(FormControl).attrs({
  className: 'StyledFormControl',
})`
  ${tw`relative`}
  min-width: 42px !important;
  min-height: 42px !important;
  margin: 8px;
  .MuiFormControlLabel-root {
    align-items: flex-start !important;

    margin-left: 0 !important;
    margin-right: 12px !important;
  }
`;
export const StyledFormControlLabelCheckbox = styled(FormControlLabel).attrs({
  className: 'StyledFormControlLabelCheckbox',
})`
  & {
    ${tw`relative`}

    .MuiFormControlLabel-label {
      margin-top: 4px;
      font-family: 'Gotham-Book';
      font-size: 12px;
      line-height: 17px;
      display: flex;
      align-items: center;
      color: #494b4d;
    }
  }
`;
export const StyledCheckParent = styled.div.attrs({
  className: 'StyledCheckParent',
})`
  ${tw`relative`}
  min-width: 42px;
  min-height: 42px;
`;

export const StyledCheckbox = styled(Checkbox).attrs({
  className: 'StyledCheckbox',
})`
  ${tw`relative`}
  min-width: 42px;
  min-height: 42px;
  border-radius: 50% !important;
  .MuiButtonBase-root .MuiCheckBox--root .MuiTouchRipple-root {
    min-width: 42px;
    min-height: 42px;
    border-radius: 24px;
  }
`;

export const StyledContainerError = styled.div``;

export const StyledFormHelperText = styled(FormHelperText).attrs({
  className: 'StyledFormHelperText StyledTypographyLight',
})`
  ${tw`relative`}
  margin-left: 42px !important;
  color: #ff2d55 !important;
`;
