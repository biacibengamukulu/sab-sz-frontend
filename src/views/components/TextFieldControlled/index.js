import React from 'react';
import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';

// Input
import TextField from '../TextField';

const TextFieldControlled = (props) => {
  const {
    className,
    control,
    name,
    id,
    onKeyUp,
    placeholder,
    fullWidth,
    type,
    error,
    helperText,
    onInputChange,
    inputValue,
    label,
    sx,
    inputProps,
    isLoading,
    disabled,
    ...rest
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
    onInputChange(data.target.value);
  };

  return (
    <TextField
      className={className}
      id={id}
      error={error}
      label={label}
      placeholder={placeholder}
      fullWidth={fullWidth}
      type={type}
      onChange={auxOnChange}
      value={value}
      inputRef={ref}
      helperText={helperText}
      onKeyUp={onKeyUp}
      sx={sx}
      inputProps={inputProps}
      isLoading={isLoading}
      disabled={disabled}
      {...rest}
    />
  );
};

TextFieldControlled.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.any,
  sx: PropTypes.any,
  fullWidth: PropTypes.bool,
  type: PropTypes.string,
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  onKeyUp: PropTypes.any,
  error: PropTypes.any,
  helperText: PropTypes.string,
  onInputChange: PropTypes.func,
  inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  inputProps: PropTypes.object,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
};

TextFieldControlled.defaultProps = {
  fullWidth: true,
  type: 'text',
  onInputChange: () => {},
  inputValue: '',
};

export default TextFieldControlled;
