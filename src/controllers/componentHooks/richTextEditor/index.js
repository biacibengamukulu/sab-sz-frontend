import { useEffect, useState } from 'react';
import { EditorState, ContentState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';

const useRichTextEditor = (inputValue) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    handleRichTextInputValue(inputValue);
  }, [inputValue]);

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const handleRichTextInputValue = (initialValue) => {
    const contentBlock = htmlToDraft(initialValue);
    const contentState = ContentState.createFromBlockArray(
      contentBlock.contentBlocks
    );
    const editorState = EditorState.createWithContent(contentState);

    setEditorState(editorState);
  };
  return {
    editorState,
    onEditorStateChange,
  };
};

export default useRichTextEditor;
