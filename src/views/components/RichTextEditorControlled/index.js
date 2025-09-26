import React from 'react';
import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';

// Input
import RichTextEditor from '../RichTextEditor';
import useControllers from '../../../controllers';

const RichTextEditorControlled = (props) => {
  const { id, name, className, control, error, helperText, inputValue } = props;
  const { useComponentHooks } = useControllers();
  const { useRichTextEditor } = useComponentHooks();
  const { editorState, onEditorStateChange } = useRichTextEditor(inputValue);
  const {
    field: { onChange, value, ref },
  } = useController({
    name,
    control,
    rules: {
      required: true,
    },
    defaultValue: inputValue,
  });

  const auxOnChange = (data) => {
    onChange(data);
  };

  return (
    <RichTextEditor
      className={className}
      id={id}
      editorState={editorState}
      onEditorStateChange={onEditorStateChange}
      error={error}
      onChange={auxOnChange}
      value={value}
      inputRef={ref}
      helperText={helperText}
    />
  );
};

RichTextEditorControlled.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  control: PropTypes.object.isRequired,
  error: PropTypes.any,
  helperText: PropTypes.string,
  inputValue: PropTypes.any,
  editorState: PropTypes.any,
};

// RichTextEditorControlled.defaultProps = {
//   fullWidth: true,
//   type: 'text',
// };

export default RichTextEditorControlled;
