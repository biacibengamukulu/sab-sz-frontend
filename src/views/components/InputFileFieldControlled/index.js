import React from 'react';
import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';

// Input
import InputFileField from '../InputFileField';

const InputFileFieldControlled = (props) => {
  const {
    className,
    control,
    name,
    id,
    fullWidth,
    type,
    error,
    helperText,
    handleResetReduxState,
    onInputChange,
    onSaveDraft,
    onSaveDraftById,
    label,
    resetField,
    fileTypes,
    inputValue,
  } = props;
  const {
    field: { ref, onChange },
  } = useController({
    name,
    control,
    rules: {
      required: true,
    },
    defaultValue: inputValue,
  });

  const onChangeFile = (e, fileTypes) => {
    e.preventDefault();
    if (e.target.files.length > 0) {
      const { type } = e.target.files[0];
      // eslint-disable-next-line react/prop-types
      if (fileTypes.some((s) => type.includes(s))) {
        if (e.target.files[0].size < 2000000) {
          const aux = e.target.files;
          const reader = new FileReader();
          reader.onload = () => {
            const dataFile = {
              name: e.target.files[0].name.replace(/\.[^/.]+$/, ''),
              data: reader.result,
            };
            onChange(dataFile);
            onSaveDraft && onSaveDraft(dataFile);
            onSaveDraftById && onSaveDraftById(id, dataFile);
          };
          aux.length && reader.readAsDataURL(aux[0]);
        }
      }
    }
  };
  const auxOnChange = (data) => {
    onChangeFile(data, fileTypes);
  };

  return (
    <InputFileField
      className={className}
      id={id}
      type={type}
      error={error}
      label={label}
      handleResetReduxState={handleResetReduxState}
      resetField={resetField}
      onInputChange={onInputChange}
      inputValue={inputValue}
      // value={value}
      // placeholder={placeholder}
      fullWidth={fullWidth}
      onChange={auxOnChange}
      inputRef={ref}
      helperText={helperText}
    />
  );
};

InputFileFieldControlled.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(['pdf', 'image']),
  label: PropTypes.any.isRequired,
  fileTypes: PropTypes.array.isRequired,
  resetField: PropTypes.func,
  handleResetReduxState: PropTypes.func,
  onSaveDraft: PropTypes.func,
  onSaveDraftById: PropTypes.func,
  onInputChange: PropTypes.func,
  fullWidth: PropTypes.bool,
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.any,
  inputValue: PropTypes.any,
  helperText: PropTypes.string,
};

InputFileFieldControlled.defaultProps = {
  fullWidth: true,
  type: 'pdf',
  onInputChange: () => {},
};

export default InputFileFieldControlled;
