import React from 'react';
import PropTypes from 'prop-types';

// Styles
import {
  StyledFormControl,
  StyledFormHelperText,
  StyledInputLabel,
  StyledOutLineInput,
  StyledButtonRemove,
  StyledFileLabel,
  StyledFileImageLabel,
  StyledAvatarField,
  StyledButtonRemoveImage,
  StyledImageInputContainer,
} from './InputFileField.styles';
import { InputAdornment } from '@mui/material';
import useAssets from '../../../assets';
import useControllers from '../../../controllers';
import fileImageField from '../../../assets/images/fileImageField.png';
import useComponents from '..';

const InputFileField = (props) => {
  const {
    id,
    className,
    label,
    fullWidth,
    error,
    inputRef,
    onChange,
    helperText,
    resetField,
    handleResetReduxState,
    onInputChange,
    type,
    inputValue,
    ...rest
  } = props;
  const { useIcons } = useAssets();
  const { iconUploadFile: IconUploadFile, iconOk: IconOk } = useIcons();
  const { Typography } = useComponents();
  const { useComponentHooks } = useControllers();
  const { useInputFile } = useComponentHooks();
  const { filesUploaded, removeFile, handleOnChange, imageToShow } =
    useInputFile();
  return (
    <div className={className}>
      {type === 'pdf' ? (
        <StyledFormControl variant="outlined" fullWidth={fullWidth}>
          <StyledFileLabel htmlFor={id}>
            <input
              id={id}
              type={'file'}
              accept="application/pdf"
              onChange={(e) => {
                onChange(e);
                handleOnChange(
                  e,
                  onInputChange,
                  resetField,
                  id,
                  handleResetReduxState,
                  type
                );
              }}
              style={{ display: 'none' }}
              ref={inputRef}
            />
            { filesUploaded.files.length > 0 ?  <IconOk color={'#394D94'} /> : <IconUploadFile /> }
          </StyledFileLabel>
          <StyledInputLabel
            color="primary"
            focused={false}
            shrink={true}
            htmlFor="outlined-adornment-password"
          >
            {label}
          </StyledInputLabel>

          <StyledOutLineInput
            id={`${id}Name`}
            fullWidth={fullWidth}
            variant="outlined"
            error={error}
            placeholder={
              filesUploaded.files.length > 0
                ? filesUploaded.files[0].name
                : `${inputValue.name ? inputValue.name : 'Upload File'}`
            }
            disabled
            {...rest}
            sx={{ top: '20px', marginBottom: '40px', marginTop: '8px' }}
            endAdornment={
              <InputAdornment position="end">
                <StyledButtonRemove
                  aria-label="remove file"
                  onClick={() => {
                    removeFile(resetField, id, handleResetReduxState);
                  }}
                  edge="end"
                  sx={{ color: '#394D94' }}
                >
                  Remove
                </StyledButtonRemove>
              </InputAdornment>
            }
          />
          {!!error && (
            <StyledFormHelperText error>{helperText}</StyledFormHelperText>
          )}
        </StyledFormControl>
      ) : (
        <StyledImageInputContainer>
          <Typography
            variant={'body2'}
            color="neutral-90"
            sx={{
              fontSize: '14px',
              lineHeight: '20px',
            }}
          >
            {label}
          </Typography>
          <StyledFileImageLabel htmlFor={id}>
            <input
              id={id}
              type={'file'}
              accept="image/*"
              onChange={(e) => {
                onChange(e);
                handleOnChange(
                  e,
                  onInputChange,
                  resetField,
                  id,
                  handleResetReduxState,
                  type
                );
              }}
              style={{ display: 'none' }}
              ref={inputRef}
            />
            <StyledAvatarField
              id={`${id}Name`}
              src={
                imageToShow
                  ? imageToShow
                  : `${inputValue.data ? inputValue.data : fileImageField}`
              }
            />
          </StyledFileImageLabel>
          <StyledButtonRemoveImage
            aria-label="remove file"
            onClick={() => {
              removeFile(resetField, id);
            }}
            edge="end"
            sx={{ color: '#394D94' }}
          >
            Remove
          </StyledButtonRemoveImage>
          {!!error && (
            <StyledFormHelperText error>{helperText}</StyledFormHelperText>
          )}
        </StyledImageInputContainer>
      )}
    </div>
  );
};

InputFileField.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(['pdf', 'image']),
  label: PropTypes.any.isRequired,
  inputRef: PropTypes.func.isRequired,
  resetField: PropTypes.func,
  handleResetReduxState: PropTypes.func,
  onInputChange: PropTypes.func,
  onChange: PropTypes.func,
  fullWidth: PropTypes.bool,
  error: PropTypes.any,
  inputValue: PropTypes.any,
  helperText: PropTypes.any,
};

InputFileField.defaultProps = {
  fullWidth: true,
  type: 'pdf',
};

export default InputFileField;
