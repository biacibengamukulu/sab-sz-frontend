import React from 'react';
import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';

// Input
import Checkbox from '../Checkbox';

const CheckboxControlled = (props) => {
  const {
    control,
    className,
    name,
    id,
    error,
    label,
    helperText,
    defaultChecked,
    iconType,
  } = props;
  const {
    field: { onChange, value, ref },
  } = useController({
    name,
    control,
    rules: {
      required: true,
    },
    defaultValue: defaultChecked,
  });
  return (
    <Checkbox
      className={className}
      id={id}
      checked={value}
      label={label}
      inputRef={ref}
      onChange={onChange}
      helperText={helperText}
      error={error}
      iconType={iconType}
      // defaultChecked={value}
    />
  );
};

CheckboxControlled.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  defaultChecked: PropTypes.bool,
  label: PropTypes.any,
  fullWidth: PropTypes.bool,
  inputValue: PropTypes.bool,
  type: PropTypes.string,
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.any,
  helperText: PropTypes.string,
  /**
   * If 'circular' radio button is circular
   */
  iconType: PropTypes.string,
};

CheckboxControlled.defaultProps = {
  fullWidth: true,
  inputValue: false,
};

export default CheckboxControlled;
