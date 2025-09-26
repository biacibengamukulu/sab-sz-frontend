import React from 'react';
import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';

// Input
import PhoneInputField from '../PhoneInputField';

const PhoneInputFieldControlled = (props) => {
  const {
    className,
    control,
    name,
    id,
    indicatorId,
    placeholder,
    fullWidth,
    type,
    error,
    helperText,
    inputValue,
    label,
    options,
    valueName,
    onInputChange,
    disabledInput,
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
  const auxOnChange = (data, country) => {
    const inputPhone = country.dialCode?.length
      ? data.slice(country.dialCode.length)
      : '';
    onChange(data);
    onInputChange(inputPhone, country, id, indicatorId);
  };

  return (
    <PhoneInputField
      className={className}
      id={id}
      defaultValue={inputValue}
      valueName={valueName}
      error={error}
      label={label}
      disabledInput={disabledInput}
      placeholder={placeholder}
      fullWidth={fullWidth}
      type={type}
      onChange={auxOnChange}
      value={value}
      inputRef={ref}
      helperText={helperText}
      options={options}
    />
  );
};

PhoneInputFieldControlled.propTypes = {
  id: PropTypes.string.isRequired,
  indicatorId: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.any.isRequired,
  fullWidth: PropTypes.bool,
  type: PropTypes.string,
  valueName: PropTypes.string,
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.any,
  disabledInput: PropTypes.bool,
  options: PropTypes.array,
  helperText: PropTypes.string,
  onInputChange: PropTypes.func,
  /**
   * default value
   */
  inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PhoneInputFieldControlled.defaultProps = {
  fullWidth: true,
  type: 'text',
  onInputChange: () => {},
  inputValue: '',
  valueName: '',
};

export default PhoneInputFieldControlled;
