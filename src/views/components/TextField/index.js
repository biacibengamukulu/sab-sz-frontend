import React from 'react';
import PropTypes from 'prop-types';

// Styles
import {
  StyledFormControl,
  StyledFormHelperText,
  StyledInputLabel,
  StyledOutLineInput,
} from './TextField.styles';
import { IconButton, InputAdornment, CircularProgress } from '@mui/material';
import { Error } from '@mui/icons-material';
// import useAssets from '../../../assets';

const TextField = (props) => {
  const {
    id,
    label,
    fullWidth,
    type,
    error,
    helperText,
    className,
    sx,
    onKeyUp,
    inputProps,
    isLoading,
    disabled,
    ...rest
  } = props;
  // const { useIcons } = useAssets();
  // const { iconErrorField: IconErrorField } = useIcons();
  return (
    <div className={className}>
      <StyledFormControl variant="outlined" fullWidth={fullWidth}>
        <StyledInputLabel
          color="primary"
          focused={false}
          shrink={true}
          htmlFor="outlined-adornment-password"
        >
          {label}
        </StyledInputLabel>
        <StyledOutLineInput
          id={id}
          fullWidth={fullWidth}
          inputProps={inputProps}
          type={type}
          onKeyUp={onKeyUp}
          variant="outlined"
          error={error}
          disabled={disabled || isLoading}
          {...rest}
          sx={sx}
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
              {!!isLoading && <CircularProgress size={20} />}
            </InputAdornment>
          }
        />
        {!!error && (
          <StyledFormHelperText error>{helperText}</StyledFormHelperText>
        )}
      </StyledFormControl>
    </div>
  );
};

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  sx: PropTypes.any,
  label: PropTypes.any,
  onKeyUp: PropTypes.any,
  fullWidth: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.any,
  helperText: PropTypes.any,
  inputProps: PropTypes.object,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
};

TextField.defaultProps = {
  disabled: false,
  isLoading: false,
  fullWidth: true,
  type: 'text',
};

export default TextField;
