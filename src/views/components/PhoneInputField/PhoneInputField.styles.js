// Packages
import styled from 'styled-components';
import tw from 'twin.macro';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
// Components
import { FormControl, FormHelperText, InputLabel } from '@mui/material';
import ArrowSelectFlag from '../../../assets/images/ArrowSelectFlag.png';
export const StyledFormControl = styled(FormControl).attrs({
  className: 'StyledFormControl StyledTypography',
})`
  & {
    height: 90px;
    .MuiFormControl-root {
      ${tw`mt-[24px] mb-[4px]`}
    }

    .MuiInputBase-input {
      ${tw`box-border pt-[10px] pb-[14px] pl-[16px] h-[44px] border-black`}
      font-family: 'GothamRnd-Book' !important;
      padding-right: 0px !important;
      font-size: 14px;
      line-height: 20px;
    }
    
    .MuiInputLabel-outlined {
      ${tw`top-[-4px]`}
    }
    
    
    .react-tel-input {
      ${tw` relative`}

      top: 32px !important;
      height: 44px;
      font-family: 'GothamRnd-Light' !important;

    }
    .react-tel-input .form-control {
      ${tw` relative`}

      left: 68px;
      height: 44px !important;
      width: calc(100% - 68px) !important;
      padding-left: 16px;
      border: 1px solid #DAE0E8;
      font-family: 'GothamRnd-Light' !important;
      ${(props) => {
        return `
            ${props.error && `border: 1px solid #ff2d55;`};
          `;
      }}

    }
    .react-tel-input .flag-dropdown {

      height: 44px !important;
      width: 62px;
      border: 1px solid #DAE0E8;
      border-radius: 4px;
      font-family: 'GothamRnd-Light' !important;
     
      ${(props) => {
        return `
            ${props.error && `border: 1px solid #ff2d55;`};
          `;
      }}
    }
    .flag-dropdown .selected-flag {
      width: 100%;
      .arrow {
        display: grid;
        width:16px;
        height: 16px;
        margin: 0;
        left: 28px;
        transform: translate(0, -50%);
        place-content: center;
        border: none;
        background-image: url(${ArrowSelectFlag});


      }
    }

  }
  }
`;

export const StyledInputLabel = styled(InputLabel).attrs({
  className: 'StyledInputLabel StyledTypography',
})`
  && {
    display: flex !important;
    align-items: center !important;
    min-width: 100px;
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
export const StyledContainerErrorIcon = styled.div.attrs({
  className: 'StyledContainerErrorIcon',
})`
  && {
    ${tw` absolute`}
    top: 42px;
    left: 100%;
    transform: translate(calc(-100% - 14px), 0);
    display: none;
    place-content: center;
    ${(props) => {
      return `
          ${props.error && `display: grid;`};
        `;
    }}

`;
export const StyledPhoneInput = styled(PhoneInput).attrs({
  className: 'StyledPhoneInput',
})`
  && {
    ${tw` relative flex`}
    column-gap: 12px;
  }
`;

export const StyledFormHelperText = styled(FormHelperText).attrs({
  className: 'StyledFormHelperText StyledTypographyLight',
})`
  ${tw` relative`}
  justify-self: center;
  left: 0px !important;
  top: -8px;
  color: #ff2d55 !important;
`;
