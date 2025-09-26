import { useRef, useState } from 'react';
import _ from 'lodash';
const useInputFile = () => {
  const [fileNameSelected, setFileNameSelected] = useState(' ');
  const [imageToShow, setImageToShow] = useState('');
  const [filesUploaded, setFilesUploaded] = useState({ files: [] });
  const inputFile = useRef();

  const openFile = () => {
    inputFile.current && inputFile.current.click();
  };
  const handleImageToShow = (data) => {
    const reader = new FileReader();
    const aux = data.target.files;
    aux.length && reader.readAsDataURL(aux[0]);

    reader.onload = () => {
      setImageToShow(reader.result);
    };
  };

  const handleShowFileName = () => {
    return _.map(filesUploaded.files, (file) => `${file.name} `);
  };

  //
  const removeFile = (reset, id, handleResetReduxState) => {
    /**
     * @type {Function}
     * @description remove the file. Is used by onInputChange
     * @param {reset} - 'resetField' function from react-hook-form to reset the field
     * @param {id} - id of the field
     * @param {handleResetReduxState} - function to reset the redux state of the file, always from component/screen hook
     */

    setFilesUploaded({
      files: [],
    });
    document.getElementById(`${id}`).value = '';
    setImageToShow('');
    reset(`${id}`, { defaultValue: { name: '', data: '' } });
    handleResetReduxState && handleResetReduxState(id);
  };

  const handleOnChange = (
    event,
    onInputChange,
    reset,
    id,
    handleResetReduxState,
    type
  ) => {
    /**
     * @type {Function}
     * @description function to handle the onChange event
     * @param {event} - on change file
     * @param {onInputChange} - function to handle the file change, always from component/screen hook
     * @param {reset} - 'resetField' function from react-hook-form to reset the field
     * @param {id} - id of the field
     * @param {handleResetReduxState} - function to reset the redux state of the file, always from component/screen hook
     * @param {type} - when the type is 'image' the image displayed is changed
     */

    const files = event.target.files;

    if (files.length > 0) {
      setFilesUploaded({ files: [...files] });
      setFileNameSelected(files[0].name);
      onInputChange({
        event: event,
        remove: removeFile,
        reset: reset,
        id: id,
        handleResetReduxState: handleResetReduxState,
      });
      type === 'image' && handleImageToShow(event);
    }
  };
  return {
    handleOnChange,
    openFile,
    inputFile,
    filesUploaded,
    handleShowFileName,
    removeFile,
    fileNameSelected,
    imageToShow,
  };
};

export default useInputFile;
