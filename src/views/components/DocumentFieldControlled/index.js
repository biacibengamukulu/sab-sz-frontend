import React from 'react';
import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';

// Input
import TextField from '../TextField';

const DocumentFieldControlled = (props) => {
  const {
    control,
    name,
    id,
    placeholder,
    fullWidth,
    type,
    error,
    inputValue,
    helperText,
    label,
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
  return (
    <TextField
      id={id}
      error={error}
      label={label}
      placeholder={placeholder}
      fullWidth={fullWidth}
      type={type}
      onChange={onChange}
      value={value}
      inputRef={ref}
      helperText={helperText}
    />
  );
};

DocumentFieldControlled.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.any.isRequired,
  fullWidth: PropTypes.bool,
  type: PropTypes.string,
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.any,
  helperText: PropTypes.string,
  onInputChange: PropTypes.func,
  inputValue: PropTypes.string,
};

DocumentFieldControlled.defaultProps = {
  fullWidth: true,
  type: 'text',
  onInputChange: () => {},
  inputValue: '',
};

export default DocumentFieldControlled;
