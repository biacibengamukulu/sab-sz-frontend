import React from 'react';

import PropTypes from 'prop-types';

// Styles
import {
  StyledAccordion,
  StyledAccordionSummary,
  StyledSummaryBy,
  StyledAccordionDetails,
  StyledAccordionTitle,
  StyledAccordionSubTitle
} from './Accordion.styles';
import useAssets from '../../../assets';
// import useControllers from '../../../controllers';
// import useComponents from '..';

const Accordion = (props) => {
  const { children, title, subTitle, className, disabled, disabledIcon, colorArrow } =
    props;
  const { useIcons } = useAssets();
  const { iconArrowSelect: IconArrowSelect } = useIcons();
  // const { Typography } = useComponents();
  // const { useComponentHooks } = useControllers();
  // const { useInputFile } = useComponentHooks();
  // const { filesUploaded, removeFile, handleOnChange, imageToShow } =
  //   useInputFile();
  return (
    <StyledAccordion
      disableGutters
      className={className}
      disabled={disabled}
      sx={{
        boxShadow: 0,
        '&:before': {
          height: '0px',
        },
      }}
    >
      <StyledAccordionSummary
        expandIcon={
          !disabledIcon && (
            <IconArrowSelect color={colorArrow ? colorArrow : '#394D94'} />
          )
        }
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
          boxShadow: 0,
        }}
      >
        <StyledSummaryBy> <StyledAccordionTitle> {title} </StyledAccordionTitle>  {subTitle && <StyledAccordionSubTitle type={subTitle}> {subTitle} </StyledAccordionSubTitle>} </StyledSummaryBy>
      </StyledAccordionSummary>
      {!disabled && (
        <StyledAccordionDetails sx={{ boxShadow: 0 }}>
          {children}
        </StyledAccordionDetails>
      )}
    </StyledAccordion>
  );
};

Accordion.propTypes = {
  title: PropTypes.any.isRequired,
  subTitle: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
  colorArrow: PropTypes.string,
  disabled: PropTypes.bool,
  disabledIcon: PropTypes.bool,
};

Accordion.defaultProps = {
  title: '',
  colorArrow: '',
};

export default Accordion;
