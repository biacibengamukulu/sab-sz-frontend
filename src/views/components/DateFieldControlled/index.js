import React from 'react';
import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';

// Input
import DateField from '../DateField';

const DateFieldControlled = (props) => {
  const {
    className,
    control,
    name,
    id,
    disabled,
    placeholder,
    type,
    error,
    helperText,
    // onInputChange,
    inputValue,
    label,
    sx,
  } = props;
  const {
    field: { onChange, value, ref },
  } = useController({
    name,
    control,
    rules: {
      required: true,
    },
    defaultValue: inputValue,
  });

  const auxOnChange = (data) => {
    onChange(data);
    // onInputChange(data.target.value);
  };

  return (
    <DateField
      id={id}
      disabled={disabled}
      className={className}
      error={error}
      label={label}
      placeholder={placeholder}
      type={type}
      onChange={auxOnChange}
      value={value}
      inputRef={ref}
      helperText={helperText}
      sx={sx}
    />
  );
};

DateFieldControlled.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.any,
  inputFormat: PropTypes.string,
  sx: PropTypes.any,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.any,
  helperText: PropTypes.string,
  onInputChange: PropTypes.func,
  inputValue: PropTypes.any,
};

DateFieldControlled.defaultProps = {
  fullWidth: true,
  disabled: false,
  type: 'text',
  onInputChange: () => {},
  inputValue: '',
};

export default DateFieldControlled;
