import React from 'react';
import PropTypes from 'prop-types';
// Styles
import {
  StyledFormControl,
  StyledFormHelperText,
  StyledInputLabel,
  StyledPhoneInput,
  StyledContainerErrorIcon,
} from './PhoneInputField.styles';
import { Error } from '@mui/icons-material';
import useAssets from '../../../assets';

const PhoneInputField = (props) => {
  const {
    className,
    id,
    label,
    onChange,
    // options,
    fullWidth,
    type,
    error,
    helperText,
    value,
    defaultValue,
    disabledInput,
  } = props;
  const { useIcons } = useAssets();
  const { iconArrowSelect: IconArrowSelect } = useIcons();
  return (
    <div className={className}>
      <StyledFormControl
        error={error}
        disabled={disabledInput}
        variant="outlined"
        fullWidth={fullWidth}
      >
        <StyledInputLabel
          color="primary"
          focused={false}
          shrink={true}
          htmlFor="outlined-adornment-password"
          sx={{
            left: '-14px',
            color: '#494B4D !important',
            marginBottom: '44px',
            fontWeight: '400',
            top: '12px',
          }}
        >
          {label}
        </StyledInputLabel>
        <StyledPhoneInput
          id={id}
          type={type}
          country={'za'}
          variant="outlined"
          error={error}
          value={value}
          defaultValue={defaultValue}
          IconComponent={IconArrowSelect}
          onChange={onChange}
          countryCodeEditable={false}
          // <InputAdornment position="end" sx={{}}>
          //   {!!error && (
          //     <IconArrowSelect
          //       aria-label="toggle password visibility"
          //       edge="end"
          //       sx={{ color: '#FF2D55' }}
          //     >
          //       <Error />
          //     </IconArrowSelect>
          //   )}
          // </InputAdornment>
          // endAdornment={IconArrowSelect}
        />
        {!!error && (
          <StyledContainerErrorIcon error>
            <Error sx={{ color: '#FF2D55' }} />
          </StyledContainerErrorIcon>
        )}
      </StyledFormControl>
      {!!error && (
        <StyledFormHelperText error>{helperText}</StyledFormHelperText>
      )}
    </div>
  );
};

PhoneInputField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.any.isRequired,
  className: PropTypes.string,
  disabledInput: PropTypes.bool,
  fullWidth: PropTypes.bool,
  type: PropTypes.string,
  valueName: PropTypes.string,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  error: PropTypes.any,
  helperText: PropTypes.any,
  onInputChange: PropTypes.func,
  onChange: PropTypes.func,
  sx: PropTypes.any,
  /**
   * Array of objects {value,text}
   */
  options: PropTypes.array,
};

PhoneInputField.defaultProps = {
  fullWidth: true,
  type: 'text',
  valueName: '',
  disabledInput: false,
};

export default PhoneInputField;
