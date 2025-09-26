import React from 'react';
import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';

// Input
import SelectField from '../SelectField';

const SelectFieldControlled = (props) => {
  const {
    className,
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
    valueName,
    disabledInput,
    isLoading,
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
    <SelectField
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
      isLoading={isLoading}
    />
  );
};

SelectFieldControlled.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.any.isRequired,
  isLoading: PropTypes.bool,
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

SelectFieldControlled.defaultProps = {
  isLoading: false,
  fullWidth: true,
  type: 'text',
  onInputChange: () => {},
  inputValue: '',
  valueName: '',
};

export default SelectFieldControlled;
