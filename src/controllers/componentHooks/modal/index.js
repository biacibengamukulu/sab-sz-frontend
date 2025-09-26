import { useState } from 'react';

const useModal = () => {
  const [modalState, setModalState] = useState({
    show: false,
    title: '',
    description: '',
    type: '',
    isBtnAccept : false
  });


  const handleShowModal = (title = '', description = '', type = '', isBtnAccept = false) =>
    setModalState({
      show: !modalState.show,
      title: title,
      description: description,
      type : type,
      isBtnAccept : isBtnAccept
    });

  return {
    modalState,
    handleShowModal,
  };
};

export default useModal;
