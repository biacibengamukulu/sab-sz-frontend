import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, IconButton, InputAdornment } from '@mui/material';
import useAssets from '../../../assets';
import {
  StyledFormControl,
  StyledInputLabel,
  StyledOutLineInput,
  StyledFormHelperText,
} from './PasswordField.styles';
useAssets;

import { Error } from '@mui/icons-material';
import useControllers from '../../../controllers';

const PasswordField = (props) => {
  const {
    id,
    label,
    fullWidth,
    onChange,
    value,
    inputRef,
    error,
    helperText,
    className,
    ...rest
  } = props;

  const { useIcons } = useAssets();
  const { iconOpenedEye: IconOpenedEye, iconClosedEye: IconClosedEye } =
    useIcons();

  const { useComponentHooks } = useControllers();
  const { usePasswordField } = useComponentHooks();
  const { showPassword, handleClickShowPassword } = usePasswordField();

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <StyledFormControl
      className={className}
      variant="outlined"
      fullWidth={fullWidth}
    >
      <FormControl variant="outlined">
        <StyledInputLabel
          focused={false}
          shrink={true}
          htmlFor="outlined-adornment-password"
        >
          {label}
        </StyledInputLabel>
        <StyledOutLineInput
          id={id}
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          inputRef={inputRef}
          error={error}
          endAdornment={
            <InputAdornment position="end">
              {!!error && (
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  sx={{ color: '#FF2D55' }}
                >
                  <Error sx={{ color: '#FF2D55' }} />
                </IconButton>
              )}
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                sx={{ color: '#394D94' }}
              >
                {showPassword ? <IconClosedEye /> : <IconOpenedEye />}
              </IconButton>
            </InputAdornment>
          }
          {...rest}
        />
        {!!error && (
          <StyledFormHelperText error>{helperText}</StyledFormHelperText>
        )}
      </FormControl>
    </StyledFormControl>
  );
};

PasswordField.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.any.isRequired,
  fullWidth: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
  inputRef: PropTypes.func.isRequired,
  error: PropTypes.any,
  helperText: PropTypes.any,
};

PasswordField.defaultProps = {
  fullWidth: true,
};

export default PasswordField;
