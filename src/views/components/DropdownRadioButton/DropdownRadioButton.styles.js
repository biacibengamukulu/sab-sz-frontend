// Packages
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
export const StyledDropDownRadioButton = styled(Accordion).attrs({
  className: 'StyledDropDownRadioButton',
})`
  && {
    ${tw` relative`}
    // border: none;
    backgroung: #ffffff;
    box-sizing: border-box;
    box-shadow: none;
    margin-top: 4px;
    border: 1px solid #b6bbc1 !important;

    &:first-of-type {
      border-top-left-radius: 4px !important;
      border-top-right-radius: 4px !important;
    }
    .MuiPaper-root {
      box-shadow: none;
    }

    .Mui-disabled {
      &:first-of-type {
        border-top-left-radius: 4px !important;
        border-top-right-radius: 4px !important;
      }
      &:last-of-type {
        border-bottom-left-radius: 4px !important;
        border-bottom-right-radius: 4px !important;
      }
      border: none !important;
      pointer-events: auto;
      opacity: 1;
      background: #f3f5f7;
    }
    ${(props) => {
      return `
    ${
      props.disabled
        ? `border: 0px !important;`
        : `border: 1px solid #B6BBC1 !important;`
    }
      
        `;
    }}
  }
`;

export const StyledDropDownSummary = styled(AccordionSummary).attrs({
  className: 'StyledDropDownSummary',
})`
  && {
    ${tw` relative`}
    min-height: 40px;
    box-shadow: none;
    width: 100%;
    padding: 0 16px;
    border: 0 !important;
    border-radius: 0px;
    .Mui-expanded {
      border: 0 !important;
    }
  }
`;

export const StyledDropDownDetails = styled(AccordionDetails).attrs({
  className: 'StyledDropDownDetails',
})`
  && {
    ${tw` relative`}
    border: 0 !important;
    padding: 0 32px;
    border-radius: 0px;
  }
`;
