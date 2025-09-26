import React from 'react';

import PropTypes from 'prop-types';

// Styles
import {
  StyledDropDownRadioButton,
  StyledDropDownSummary,
  StyledDropDownDetails,
} from './DropdownRadioButton.styles';
// import useControllers from '../../../controllers';
// import useComponents from '..';

const DropdownRadioButton = (props) => {
  const { children, title, className, disabled, expanded } = props;

  return (
    <StyledDropDownRadioButton
      disableGutters
      className={className}
      disabled={disabled}
      expanded={expanded}
      sx={{
        boxShadow: 0,
        '&:before': {
          height: '0px',
        },
      }}
    >
      <StyledDropDownSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
          boxShadow: 0,
        }}
      >
        {title}
      </StyledDropDownSummary>
      {!disabled && (
        <StyledDropDownDetails sx={{ boxShadow: 0 }}>
          {children}
        </StyledDropDownDetails>
      )}
    </StyledDropDownRadioButton>
  );
};

DropdownRadioButton.propTypes = {
  title: PropTypes.any.isRequired,
  children: PropTypes.any,
  className: PropTypes.string,
  colorArrow: PropTypes.string,
  disabled: PropTypes.bool,
  expanded: PropTypes.bool,
  disabledIcon: PropTypes.bool,
};

DropdownRadioButton.defaultProps = {
  title: '',
  colorArrow: '',
  expanded: false,
};

export default DropdownRadioButton;
