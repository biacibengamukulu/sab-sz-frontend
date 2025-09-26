import React from 'react';
import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';

// Input
import RadioGroupField from '../RadioGroupField';

const RadioGroupFieldControlled = (props) => {
  const {
    className,
    disabled,
    control,
    name,
    id,
    placeholder,
    fullWidth,
    type,
    error,
    helperText,
    onInputChange,
    inputValue,
    label,
    options,
    warningAtNo,
    iconType,
  } = props;
  const {
    field: { onChange, value },
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
    <RadioGroupField
      id={id}
      disabled={disabled}
      warningAtNo={warningAtNo}
      className={className}
      error={error}
      label={label}
      placeholder={placeholder}
      fullWidth={fullWidth}
      type={type}
      onChange={auxOnChange}
      value={value}
      // ref={ref}
      helperText={helperText}
      options={options}
      iconType={iconType}
    />
  );
};

RadioGroupFieldControlled.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  label: PropTypes.any.isRequired,
  fullWidth: PropTypes.bool,
  type: PropTypes.string,
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.any,
  options: PropTypes.array,
  helperText: PropTypes.string,
  onInputChange: PropTypes.func,
  /**
   * default value
   */
  inputValue: PropTypes.string,
  warningAtNo: PropTypes.bool,
  iconType: PropTypes.string,
};

RadioGroupFieldControlled.defaultProps = {
  fullWidth: true,
  iconType: 'square',
  type: 'text',
  onInputChange: () => {},
  inputValue: '',
};

export default RadioGroupFieldControlled;
