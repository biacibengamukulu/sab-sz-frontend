// Packages
import styled from 'styled-components';
import tw from 'twin.macro';
import TextField from '../TextField';

export const StyledDatePicker = styled(TextField).attrs({
  className: 'StyledDatePicker',
})`
  & {
    ${tw`relative`}
  }
  .MuiInputBase-input{
  display: block !important;

    padding-right: 0 !important;
  }
  .MuiInputAdornment-root {
   display: none  !important;
 }
 .StyledOutLineInput{
   display: block !important;
 }
 .StyledOutLineInput .MuiOutlinedInput-input{
  display: block !important;
  &::-webkit-calendar-picker-indicator {
    display: none  !important;
    -webkit-appearance: none  !important;
  }

 }
 .formInputLabel{
   font-size: 14px;
 }

}
`;
export const StyledDateTextField = styled(TextField).attrs({
  className: 'StyledDateTextField',
})`
  & {
      ${tw`relative`}
    }
  }
`;
