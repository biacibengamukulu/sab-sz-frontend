import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledFormControl,
  StyledFormControlLabelCheckbox,
  StyledFormHelperText,
  StyledCheckbox,
} from './Checkbox.styles';

import useAssets from '../../../assets';

const Checkbox = (props) => {
  const {
    className,
    disabled,
    label,
    error,
    helperText,
    onChange,
    rest,
    checked,
    iconType,
  } = props;
  const { useIcons } = useAssets();
  const {
    iconCheckBox: IconCheckBox,
    iconCheckedCheckBox: IconCheckedCheckBox,
    iconCircularRadio: IconCircularRadio,
    iconCircularRadioChecked: IconCircularRadioChecked,
  } = useIcons();

  return (
    <div className={className}>
      <StyledFormControl variant="outlined">
        <StyledFormControlLabelCheckbox
          control={
            <StyledCheckbox
              icon={
                iconType === 'circular' ? (
                  <IconCircularRadio />
                ) : (
                  <IconCheckBox />
                )
              }
              checkedIcon={
                iconType === 'circular' ? (
                  <IconCircularRadioChecked />
                ) : (
                  <IconCheckedCheckBox />
                )
              }
              onChange={onChange}
              disabled={disabled}
              checked={checked}
              {...rest}
            />
          }
          label={label}
        />
      </StyledFormControl>
      {!!error && (
        <StyledFormHelperText error>{helperText}</StyledFormHelperText>
      )}
    </div>
  );
};

Checkbox.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  error: PropTypes.any,
  label: PropTypes.any,
  helperText: PropTypes.any,
  onChange: PropTypes.func,
  rest: PropTypes.any,
  /**
   * If 'circular' radio button is circular
   */
  iconType: PropTypes.string,
};

Checkbox.defaultProps = {
  iconType: 'square',
  disabled: false,
};

export default Checkbox;
