import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
// Styles
import {
  StyledFormControl,
  StyledFormHelperText,
  StyledInputLabel,
  StyledSelect,
  StyledIconContainer,
} from './SelectField.styles';
import { CircularProgress, MenuItem } from '@mui/material';
import useAssets from '../../../assets';

const SelectField = (props) => {
  const {
    className,
    id,
    label,
    options,
    fullWidth,
    type,
    error,
    helperText,
    sx,
    value,
    defaultValue,
    valueName,
    disabledInput,
    isLoading,
    ...rest
  } = props;
  const { useIcons } = useAssets();
  const { iconArrowSelect: IconArrowSelect } = useIcons();
  return (
    <div className={className}>
      <StyledFormControl
        disabled={disabledInput || isLoading}
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
        <StyledSelect
          sx={sx}
          id={id}
          type={type}
          variant="outlined"
          error={error}
          value={value}
          defaultValue={defaultValue}
          {...rest}
          IconComponent={(props) => (
            <StyledIconContainer
              {...props}
              className={`material-icons ${props.className}`}
            >
              {isLoading ? <CircularProgress size={20} /> : <IconArrowSelect />}
            </StyledIconContainer>
          )}
        >
          {_.map(options, (option, id) => {
            return (
              option && (
                <MenuItem
                  key={id}
                  value={
                    (option.value && option.value) || (option.id && option.id)
                  }
                  disabled={option.disabled ? true : false}
                >
                  {(option.text && option.text) ||
                    (option.name && option.name) ||
                    (valueName && option[valueName])}
                </MenuItem>
              )
            );
          })}
        </StyledSelect>
        {!!error && (
          <StyledFormHelperText error>{helperText}</StyledFormHelperText>
        )}
      </StyledFormControl>
    </div>
  );
};

SelectField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.any.isRequired,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  disabledInput: PropTypes.bool,
  fullWidth: PropTypes.bool,
  type: PropTypes.string,
  valueName: PropTypes.string,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  error: PropTypes.any,
  helperText: PropTypes.any,
  sx: PropTypes.any,
  options: PropTypes.array,
};

SelectField.defaultProps = {
  isLoading: false,
  fullWidth: true,
  type: 'text',
  valueName: '',
  disabledInput: false,
};

export default SelectField;
