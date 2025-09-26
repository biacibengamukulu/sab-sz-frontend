import React from 'react';
import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';

// Input
import Switch from '../Switch';

const SwitchControlled = (props) => {
  const {
    className,
    control,
    name,
    id,
    error,
    label,
    helperText,
    inputValue,
    inputOnChange,
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
    inputOnChange && inputOnChange(data.target.checked);
  };
  return (
    <Switch
      id={id}
      className={className}
      checked={value}
      label={label}
      inputRef={ref}
      onChange={auxOnChange}
      helperText={helperText}
      error={error}
      // defaultChecked={value}
    />
  );
};

SwitchControlled.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.any,
  fullWidth: PropTypes.bool,
  inputValue: PropTypes.bool,
  type: PropTypes.string,
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.any,
  inputOnChange: PropTypes.func,
  helperText: PropTypes.string,
};

SwitchControlled.defaultProps = {
  fullWidth: true,
  inputValue: false,
};

export default SwitchControlled;
