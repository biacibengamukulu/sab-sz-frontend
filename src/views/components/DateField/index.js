import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { StyledDatePicker } from './DateField.styles';

const DateField = (props) => {
  const { id, label, disabled, sx, className, ...rest } = props;

  return (
    <StyledDatePicker
      className={className}
      fullWidth={true}
      id={id}
      label={label}
      disabled={disabled}
      type="date"
      sx={sx}
      {...rest}
    />
  );
};

DateField.propTypes = {
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  sx: PropTypes.any,
  label: PropTypes.any,
  inputFormat: PropTypes.string,
  className: PropTypes.string,
  // error: PropTypes.any,
  // helperText: PropTypes.any,
};

DateField.defaultProps = {
  disabled: false,
};

export default DateField;
