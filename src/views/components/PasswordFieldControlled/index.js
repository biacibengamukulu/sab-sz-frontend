import React from 'react';
import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';

// Input
import PasswordField from '../PasswordField';

const PassWordFieldControlled = (props) => {
  const {
    className,
    control,
    name,
    id,
    label,
    fullWidth,
    error,
    helperText,
    placeholder,
  } = props;
  const {
    field: { onChange, value, ref },
  } = useController({
    name,
    control,
    rules: {
      required: true,
    },
    defaultValue: '',
  });

  return (
    <PasswordField
      className={className}
      id={id}
      label={label}
      fullWidth={fullWidth}
      value={value}
      inputRef={ref}
      onChange={onChange}
      helperText={helperText}
      error={error}
      placeholder={placeholder}
    />
  );
};

PassWordFieldControlled.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.any.isRequired,
  fullWidth: PropTypes.bool,
  type: PropTypes.string,
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.any,
  helperText: PropTypes.any,
  placeholder: PropTypes.string,
};

PassWordFieldControlled.defaultProps = {
  fullWidth: true,
};

export default PassWordFieldControlled;
