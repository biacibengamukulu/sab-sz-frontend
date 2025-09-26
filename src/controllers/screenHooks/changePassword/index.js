import { useState } from 'react';
import useApi from '../../../api';
import useHelpers from '../../../helpers';
import useComponentHooks from '../../componentHooks';

const useChangePassword = () => {
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useNavigation, usePromises } = useQuickFunctions();
  const { navigateTo, goBack } = useNavigation();
  const { promiseInProgress } = usePromises();

  // Api
  const { useActions } = useApi();
  const { dispatch, useUserActions } = useActions();
  const { actChangeUserPassword } = useUserActions();

  // Hooks
  const { useModal } = useComponentHooks();
  const { modalState, handleShowModal } = useModal();

  // React
  const [registerState, setRegisterState] = useState('success');

  const handleCloseModal = () => {
    handleShowModal();
    navigateTo('/profile');
  };

  const onSubmit = (data) => {
    const { currentPassword, password, passwordConfirmation } = data;

    const onSuccessReset = () => {
      setRegisterState('success');
      handleShowModal(
        'Success!',
        'Your password has been changed successfully!'
      );
    };

    dispatch(
      actChangeUserPassword(
        {
          currentPassword,
          password,
          passwordConfirmation,
        },
        onSuccessReset
      )
    );
  };

  return {
    promiseInProgress,
    onSubmit,
    modalState,
    registerState,
    handleCloseModal,
    goBack,
  };
};

export default useChangePassword;
