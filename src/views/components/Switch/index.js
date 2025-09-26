import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledFormControl,
  StyledSwitchParent,
  StyledFormHelperText,
  StyledSwitch,
  StyledSwitchLabel,
  StyledContainerSwitch,
} from './Switch.styles';

import useAssets from '../../../assets';

const Switch = (props) => {
  const {
    className,
    label,
    disabled,
    error,
    helperText,
    onChange,
    rest,
    checked,
  } = props;
  const { useIcons } = useAssets();
  const { iconSwitch: IconSwitch } = useIcons();

  return (
    <StyledContainerSwitch className={className}>
      {!!error && (
        <StyledFormHelperText error>{helperText}</StyledFormHelperText>
      )}
      <StyledFormControl variant="outlined">
        <StyledSwitchParent>
          <StyledSwitch
            icon={<IconSwitch />}
            checkedIcon={<IconSwitch />}
            onChange={onChange}
            disabled={disabled}
            checked={checked}
            {...rest}
          />
        </StyledSwitchParent>
      </StyledFormControl>
      <StyledSwitchLabel
        color="primary"
        focused={false}
        shrink={true}
        htmlFor="outlined-adornment-password"
      >
        {label}
      </StyledSwitchLabel>
    </StyledContainerSwitch>
  );
};

Switch.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  className: PropTypes.string,
  label: PropTypes.any,
  error: PropTypes.any,
  helperText: PropTypes.any,
  onChange: PropTypes.func,
  rest: PropTypes.any,
};

Switch.defaultProps = {
  disabled: false,
};

export default Switch;
