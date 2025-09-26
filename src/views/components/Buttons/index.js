import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@mui/material';
import { StyleLoading, StyledButton } from './Button.styles';

const Button = (props) => {
  const {
    color,
    children,
    fullWidth,
    className,
    onClick,
    disabled,
    promiseLoading,
    colorLoading,
    variant,
    size,
    sx,
  } = props;

  if (promiseLoading) {
    return (
      <StyledButton
        type="button"
        variant={variant}
        disabled={disabled}
        size={size}
        color={color}
        fullWidth={fullWidth}
        className={className}
        onClick={onClick}
        $promiseLoading={promiseLoading}
        sx={sx}
      >
        <StyleLoading>
          <CircularProgress sx={{ color: `${colorLoading} !important` }} />
        </StyleLoading>
      </StyledButton>
    );
  }

  return (
    <StyledButton
      type="button"
      variant={variant}
      disabled={disabled}
      size={size}
      color={color}
      fullWidth={fullWidth}
      className={className}
      onClick={onClick}
      sx={sx}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.oneOf([]),
  iconSize: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  color: PropTypes.string,
  colorLoading: PropTypes.string,
  fullWidth: PropTypes.bool,
  promiseLoading: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any,
  sx: PropTypes.any,
};

Button.defaultProps = {
  variant: 'contained',
  disabled: false,
  size: 'small',
  onClick: () => {},
  color: 'primary',
  colorLoading: '#394D94',
  fullWidth: false,
  promiseLoading: false,
};

export default Button;
