import React from 'react';
import PropTypes from 'prop-types';

// Styles
import {
  StyledRichTextEditorContainer,
  StyledEditor,
  StyledFormHelperText,
} from './RichTextEditor.styles';
// import { IconButton, InputAdornment } from '@mui/material';
// import { Error } from '@mui/icons-material';

const RichTextEditor = (props) => {
  const { className, id, error, helperText, editorState, ...rest } = props;

  return (
    <StyledRichTextEditorContainer className={className}>
      <StyledEditor
        id={id}
        variant="outlined"
        error={error}
        editorState={editorState}
        wrapperClassName="StyledWrapper"
        toolbarClassName="StyledToolbar"
        editorClassName="StyledInnerEditor"
        toolbar={{
          options: [
            'blockType',
            'inline',
            'list',
            'textAlign',
            'link',
            'history',
          ],
          blockType: {
            inDropdown: true,
            className: 'StyledBlockTypeOptions',
            options: ['Normal', 'H1', 'H2', 'H3'],
          },
          inline: {
            inDropdown: false,
            className: 'StyledInlineEditorOptions',
            options: ['bold', 'italic', 'underline'],
          },
          list: {
            inDropdown: false,
            className: 'StyledListEditorOptions',
            options: ['unordered', 'ordered'],
          },
          textAlign: {
            inDropdown: false,
            className: 'StyledTextAlignEditorOptions',
          },
          link: {
            inDropdown: false,
            className: 'StyledLinkEditorOptions',
            options: ['link'],
          },
          history: {
            inDropdown: false,
            className: 'StyledHistoryEditorOptions',
          },
        }}
        {...rest}
      />
      {!!error && (
        <StyledFormHelperText error>{helperText}</StyledFormHelperText>
      )}
    </StyledRichTextEditorContainer>
  );
};

RichTextEditor.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  error: PropTypes.any,
  helperText: PropTypes.any,
  editorState: PropTypes.any,
};

// RichTextEditor.defaultProps = {
//   fullWidth: true,
//   type: 'text',
// };

export default RichTextEditor;
