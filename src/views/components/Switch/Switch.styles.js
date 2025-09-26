// Packages
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
import { FormControl, Switch, FormHelperText, InputLabel } from '@mui/material';

export const StyledContainerSwitch = styled.div.attrs({
  className: 'StyledContainerSwitch',
})`
  && {
    ${tw`relative flex`}
    align-items: center;
    text-aling: center;
    column-gap: 18px;
  }
`;
export const StyledFormControl = styled(FormControl).attrs({
  className: 'StyledFormControl',
})`
  ${tw`relative`}
  min-height: 40px !important;
  margin: 8px;
`;
export const StyledSwitchLabel = styled(InputLabel).attrs({
  className: 'StyledSwitchLabel StyledTypographyBook',
})`
  && {
    ${tw`relative`}
    top: 4px;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: -0.006em;
    color: #2c2d2e;
  }
`;
export const StyledSwitchParent = styled.div.attrs({
  className: 'StyledSwitchParent',
})`
  ${tw`relative`}
  .MuiSwitch-root.MuiSwitch-sizeMedium {
    padding: 0 !important;
    width: 72px !important;
    height: 42px !important;
    border: none !important;
    box-sizing: border-box !important;
    border-radius: 20px !important;
  }
  .MuiSwitch-input.PrivateSwitchBase-input {
    // width: 72px;
    height: 42px !important;
  }
  .MuiButtonBase-root.MuiSwitch-switchBase {
    padding-left: 2px !important;
    height: 42px !important;
  }
  .MuiButtonBase-root.MuiSwitch-switchBase.Mui-checked {
    -webkit-transform: translateX(30px) !important;
    -moz-transform: translateX(30px) !important;
    -ms-transform: translateX(30px) !important;
    transform: translateX(30px) !important;
  }
  .MuiSwitch-track {
    position: absolute !important;
    left: 0px !important;
    min-width: 72px !important;

    background-color: #dae0e8 !important;
    opacity: 1 !important;
  }
  .MuiSwitch-switchBase:hover {
    background-color: transparent !important;
  }
  & .Mui-checked + .MuiSwitch-track {
    background-color: #548c5c !important;
    opacity: 1 !important;
  }
`;

export const StyledSwitch = styled(Switch).attrs({
  className: 'StyledSwitch',
})`
  ${tw`relative`}
  min-width: 42px;
  min-height: 42px;
`;

export const StyledContainerError = styled.div``;

export const StyledFormHelperText = styled(FormHelperText).attrs({
  className: 'errorInputLabel',
})`
  font-family: 'GothamRnd-Light' !important;
  position: absolute;
  bottom: -24px;
  padding: 0 10px;
  color: #ff2d55 !important;
`;
