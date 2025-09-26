// Packages
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
export const StyledAccordion = styled(Accordion).attrs({
  className: 'StyledAccordion',
})`
  && {
    ${tw` relative`}

    .MuiPaper-root-MuiAccordion-root .Mui-expanded {
      box-shadow: none;
    }
    .MuiPaper-root {
      box-shadow: none;
    }
  }
`;

export const StyledAccordionSummary = styled(AccordionSummary).attrs({
  className: 'StyledAccordionSummary',
})`
  && {
    ${tw` relative`}
    min-height: 40px;
    box-shadow: none;
    width: 100%;
    padding: 0 16px;
    border: 0 !important;
    justify-content: space-between;
  }
`;

export const StyledAccordionDetails = styled(AccordionDetails).attrs({
  className: 'StyledAccordionDetails',
})`
  && {
    ${tw` relative`}
    border: 0 !important;
    padding: 16px;
    padding-left: 32px;
  }
`;


export const StyledAccordionTitle = styled.div.attrs({
  className: 'StyledAccordionTitle',
})`
  && {
    ${tw`relative`}
  }
`;

export const StyledSummaryBy = styled.div.attrs({
  className: 'StyledSummaryBy',
})`
  && {
    ${tw`relative flex justify-between w-full`}
  }
`;

export const StyledAccordionSubTitle = styled.div.attrs({
  className: 'StyledAccordionSubTitle',
})`
  && {
    ${tw`relative mr-4`}
    color:#B6BBC1;

    ${(props) => {
      return `
          ${
            props.type === 'Reviewed' &&
            ` color: #548C5C;`
          };
        `;
    }}

  }
`;