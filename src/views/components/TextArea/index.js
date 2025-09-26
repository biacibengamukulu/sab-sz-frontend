import React from 'react';
import PropTypes from 'prop-types';

// Styles
import {
  StyledFormControl,
  StyledFormHelperText,
  StyledInputLabel,
  StyledTextareaAutosize,
} from './TextArea.styles';
// import { IconButton, InputAdornment } from '@mui/material';
// import { Error } from '@mui/icons-material';

const TextArea = (props) => {
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
    ...rest
  } = props;

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
        <StyledTextareaAutosize
          id={id}
          fullWidth={fullWidth}
          type={type}
          onKeyUp={onKeyUp}
          variant="outlined"
          error={error}
          {...rest}
          sx={sx}
        />
        {!!error && (
          <StyledFormHelperText error>{helperText}</StyledFormHelperText>
        )}
      </StyledFormControl>
    </div>
  );
};

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  sx: PropTypes.any,
  label: PropTypes.any,
  onKeyUp: PropTypes.any,
  fullWidth: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.any,
  helperText: PropTypes.any,
};

TextArea.defaultProps = {
  fullWidth: true,
  type: 'text',
};

export default TextArea;
