import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../../components/Buttons';
// import Typography from '../../components/Typography';
import DateFieldControlled from '../../components/DateFieldControlled';

export const StyledSectionLogs = styled.div.attrs({
  className: 'StyledSectionLogs',
})`
&& {
    ${tw`relative  mt-[128px] pb-[104px] mx-[10px]`}
    width: calc(100% - 20px);
    box-sizing:content-box;
    @media (max-width: 768px){
      width: calc(100% - 32px);
      margin: 0 16px;
      padding-top: 16px;
      padding-bottom: 24px;
    }
    }}
    
`;

export const StyledFieldsContainer = styled.div.attrs({
  className: 'StyledFieldsContainer',
})`
  && {
    ${tw`relative flex flex-wrap pt-[24px]`}
    max-width: 860px;
    gap: 20px 40px;
    & > * {
      flex: 0 1 calc(50% - 20px);
    }
    @media (max-width: 768px) {
      padding-top: 20px;
      flex-direction: column;
    }
  }
`;

export const StyledFieldsColumnContainer = styled.div.attrs({
  className: 'StyledFieldsColumnContainer',
})`
  && {
    ${tw`relative flex flex-col pt-[32px]`}
    max-width: 100%;
    gap: 24px 40px;

    @media (max-width: 768px) {
      padding-top: 20px;
    }
  }
`;
export const StyledDateFieldContainer = styled.div.attrs({
  className: 'StyledDateFieldContainer',
})`
  && {
    ${tw`relative`}
    width: 100%;
    max-width: 100%;
  }
`;
export const StyledContainerCalendarIcon = styled.div.attrs({
  className: 'StyledContainerCalendarIcon',
})`
  && {
    ${tw`absolute`}
    top: 41px;
    left: 100%;
    transform: translate(calc(-100% - 12px), 0);
    display: grid;
    place-content: center;
    z-index: 5;
  }
`;
export const StyledDateFilterLogs = styled(DateFieldControlled).attrs({
  className: 'StyledDateFilterLogs',
})`
  && {
    ${tw` relative `}
    font-size: 14px;
    line-height: 20px;
    max-width: 100%;
    z-index: 6;

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
        width: 24px;
        height: 24px;
        display: block  !important;
        background: transparent;
        -webkit-appearance: none  !important;
        cursor: pointer;
        z-index: 8;
      }
    @media (max-width: 768px) {
      // min-width: 60px;
      // max-width: 60px;
      .MuiOutlinedInput-root {
        min-width: 140px;
      }
    }
  }
`;
export const StyledField = styled.div.attrs({
  className: 'StyledField',
})`
  && {
    ${tw`relative flex flex-col`}
  }
`;

export const StyledButtonSave = styled(Button).attrs({
  className: 'StyledButtonSave',
})`
  && {
    ${tw`relative`}

    width: 130px;
    margin-top: 40px;
    fontsize: 16px;
    line-height: 22px;
    letter-spacing: -0.011em;
    align-self: center !important;
    @media (max-width: 768px) {
      margin-top: 36px;
      width: 130px;
      height: 44px;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.006em;
    }
  }
`;
