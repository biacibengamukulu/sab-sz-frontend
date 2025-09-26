// Packages
import styled from 'styled-components';
import tw from 'twin.macro';
import { CircularProgress } from '@mui/material';
import Typography from '../Typography';

// Components
import {
  FormControl,
  FormHelperText,
  InputLabel,
  RadioGroup,
  FormControlLabel,
} from '@mui/material';

export const StyledWizard = styled.div.attrs({
  className: 'StyledWizard',
})`
  && {
    z-index: 2;
    position: absolute;
    height: 120px;
    background: #f8f9fa;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
    border-radius: 16px;
    ${(props) => {
      return `
      ${
        props.steps &&
        `
        width: ${72 * props.steps + 144}px;
          `
      };
        `;
    }}
  }
`;

export const StyledWizardPromiseInProgressContainer = styled.div.attrs({
  className: 'StyledWizardPromiseInProgressContainer',
})`
  && {
    ${tw`absolute grid`}
    place-content: center;
    border-radius: 16px;
    height: 104px;
    backdrop-filter: blur(3px);
    z-index: 2;
    ${(props) => {
      return `
      ${
        props.steps &&
        `
        width: ${72 * props.steps + 144}px;
          `
      };
        `;
    }}
  }
`;

export const StyledWizardPromiseInProgressInnerContainer = styled.div.attrs({
  className: 'StyledWizardPromiseInProgressInnerContainer',
})`
  && {
    ${tw`relative flex flex-col`}
    align-items: center;
    justy-content: center;
    row-gap: 4px;
  }
`;

export const StyledCircularProgress = styled(CircularProgress).attrs({
  className: 'StyledCircularProgress',
})`
  && {
    ${tw`relative`}
  }
`;

export const StyledCircularProgressLabel = styled(Typography).attrs({
  className: 'StyledCircularProgressLabel',
})`
  && {
    ${tw`relative`}
    font-size: 8px;
    line-height: 12px;
    color: #394d94;
  }
`;

export const StyledStatusBar = styled.div.attrs({
  className: 'StyledStatusBar',
})`
  && {
    position: absolute;
    display: flex;
    justify-content: space-between;
    top: 31px;
    left: 70px;
    height: 0px;
    ${(props) => {
      return `
      ${
        props.steps &&
        `
        width: ${72 * props.steps}px;
          `
      };
        `;
    }}
  }
`;

export const StyledStatusBarRight = styled.div.attrs({
  className: 'StyledStatusBarRight',
})`
  && {
    position: absolute;
    top: 5px;
    left: 3px;
    width: 96px;
    height: 1px;
    border-top: 2px solid;
  }
`;
export const StyledStepContainer = styled.div.attrs({
  className: 'StyledStepContainer',
})`
  && {
    ${tw`relative`}
  }
`;
export const StyledFormControl = styled(FormControl).attrs({
  className: 'StyledFormControl',
})`
  & {
    .MuiFormControl-root {
      ${tw`mt-[0px] mb-[4px]`}
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
    .MuiFormControlLabel-root {
      display: flex;
      flex-wrap: nowrap;
      column-gap: 60px;
      margin: 0;
      top: 0;
    }
    // .MuiFormGroup-root {
    //   display: flex;
    //   flex-wrap: nowrap;
    //   justify-content: space-between;

    // }
    .MuiFormControlLabel-root .MuiFormControlLabel-label {
      position: absolute;
      font-family: 'GothamRnd-Medium' !important;
      top: 25px;
      min-width: 96px;
      font-size: 12px;
      line-height: 17px;
      text-align: center;
      color: #394d94;
    }

    .MuiRadio-root {
      top: -6px;
      padding: 0;
    }
  }
`;

export const StyledInputLabel = styled(InputLabel).attrs({
  className: 'formInputLabel',
})`
  left: -14px !important;
  font-size: 20px !important;
  top: 12px !important;
  color: #494b4d !important;
  @media (max-width: 768px) {
    font-size: 18px !important;
    line-height: '20px';
  }
`;

export const StyledRadioGroup = styled(RadioGroup).attrs({
  className: 'StyledRadioGroup',
})`
  margin-bottom: 40px;
  margin-top: 8px;
  top: 12px !important;
  margin-bottom: 20px !important;
  margin-top: 20px !important;
  color: 'red !important';
`;

export const StyledControlled = styled(FormControlLabel).attrs({
  className: 'StyledControlled',
})`
  margin-bottom: 40px;
  margin-top: 8px;
  top: 12px !important;
  margin-bottom: 20px !important;
  margin-top: 20px !important;
  color: 'red !important';
`;
export const StyledFormHelperText = styled(FormHelperText).attrs({
  className: 'errorInputLabel',
})`
  color: #ff2d55 !important;
`;
