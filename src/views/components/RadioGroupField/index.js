import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
// Styles
import {
  StyledFormControl,
  StyledFormHelperText,
  StyledInputLabel,
  StyledRadioGroup,
} from './RadioGroupField.styles';
import {
  FormControlLabel,
  // IconButton,
  // InputAdornment,
  Radio,
} from '@mui/material';
// import { Error } from '@mui/icons-material';
import useAssets from '../../../assets';
import useControllers from '../../../controllers';

const RadioGroupField = (props) => {
  const {
    id,
    className,
    warningAtNo,
    label,
    options,
    fullWidth,
    type,
    error,
    helperText,
    valueName,
    sx,
    disabled,
    iconType,
    ...rest
  } = props;
  const { useIcons } = useAssets();
  const {
    iconCircularRadio: IconCircularRadio,
    iconCircularRadioChecked: IconCircularRadioChecked,
    iconRadio: IconRadio,
    iconRadioChecked: IconRadioChecked,
  } = useIcons();

  const { useComponentHooks } = useControllers();
  const { useRadioGroup } = useComponentHooks();

  return (
    <div className={className}>
      <StyledFormControl variant="outlined" fullWidth={fullWidth}>
        <StyledInputLabel
          color="primary"
          focused={false}
          shrink={true}
          htmlFor="outlined-adornment"
        >
          {label}
        </StyledInputLabel>
        <StyledRadioGroup
          row
          sx={sx}
          id={id}
          type={type}
          variant="outlined"
          $error={error}
          {...rest}
        >
          {_.map(options, (option, id) => {
            const { radioValue, handleSetRadioValue } = useRadioGroup();

            return (
              option &&
              iconType && (
                <FormControlLabel
                  key={id}
                  value={option.value || option.id}
                  control={
                    <Radio
                      onChange={handleSetRadioValue}
                      icon={
                        iconType === 'circular' ? (
                          <IconCircularRadio />
                        ) : (
                          <IconRadio />
                        )
                      }
                      checkedIcon={
                        iconType === 'circular' ? (
                          <IconCircularRadioChecked
                            color={
                              warningAtNo && radioValue === '0'
                                ? option.value === '0' || option.id === '0'
                                  ? '#FF2D55'
                                  : '#394D94'
                                : '#394D94'
                            }
                          />
                        ) : (
                          <IconRadioChecked
                            color={
                              warningAtNo && radioValue === '0'
                                ? option.value === '0' || option.id === '0'
                                  ? '#FF2D55'
                                  : '#394D94'
                                : '#394D94'
                            }
                          />
                        )
                      }
                      disabled={disabled}
                    />
                  }
                  label={option.text || option.name || option[valueName]}
                />
              )
            );
          })}
        </StyledRadioGroup>
        {!!error && (
          <StyledFormHelperText error>{helperText}</StyledFormHelperText>
        )}
      </StyledFormControl>
    </div>
  );
};

RadioGroupField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.any.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  type: PropTypes.string,
  valueName: PropTypes.string,
  error: PropTypes.any,
  helperText: PropTypes.any,
  sx: PropTypes.any,
  /**
   * Array of objects {value,text}
   */
  options: PropTypes.array,
  /**
   * If true and value === '0' radio button is red
   */
  warningAtNo: PropTypes.bool,
  /**
   * If 'circular' radio button is circular
   */
  iconType: PropTypes.string,
};

RadioGroupField.defaultProps = {
  fullWidth: true,
  iconType: 'square',
  type: 'text',
  valueName: '',
  warningAtNo: false,
};

export default RadioGroupField;
