import { useState } from 'react';
import useApi from '../../../api';
import useHelpers from '../../../helpers';
import useComponentHooks from '../../componentHooks';

const useResetPassword = () => {
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useNavigation } = useQuickFunctions();
  const { getParam, replaceAndNavigateTo } = useNavigation();

  // Api
  const { useActions } = useApi();
  const { dispatch, useUserActions } = useActions();
  const { actResetUserPassword } = useUserActions();

  // Hooks
  const { useModal } = useComponentHooks();
  const { modalState, handleShowModal } = useModal();

  // React
  const [registerState, setRegisterState] = useState('success');

  const handleCloseModal = () => {
    handleShowModal();
    replaceAndNavigateTo('/login');
  };

  const onSubmit = (data) => {
    const { password, passwordConfirmation } = data;
    const email = getParam('email');
    const token = getParam('token');

    const onSuccessReset = () => {
      setRegisterState('success');
      handleShowModal(
        'Password reset done!',
        'Your password has been changed successfully!'
      );
    };

    dispatch(
      actResetUserPassword(
        {
          token,
          email,
          password,
          passwordConfirmation,
        },
        onSuccessReset
      )
    );
  };

  return { onSubmit, modalState, registerState, handleCloseModal };
};

export default useResetPassword;
