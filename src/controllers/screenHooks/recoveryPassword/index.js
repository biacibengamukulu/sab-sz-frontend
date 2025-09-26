import { useState } from 'react';
import useApi from '../../../api';
import useHelpers from '../../../helpers';
import useComponentHooks from '../../componentHooks';

const useRecoveryPassword = () => {
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useNavigation, usePromises } = useQuickFunctions();
  const { navigateTo, goBack } = useNavigation();
  const { promiseInProgress } = usePromises();

  // Api
  const { useActions } = useApi();
  const { dispatch, useUserActions } = useActions();
  const { actRecoveryUserPasswordOrVerificationEmail } = useUserActions();

  // Hooks
  const { useModal } = useComponentHooks();
  const { modalState, handleShowModal } = useModal();

  // React
  const [registerState, setRegisterState] = useState('error');

  const handleCloseModal = () => {
    handleShowModal();
    navigateTo('/login');
  };

  const onSubmit = (data) => {
    const { email } = data;

    const onSuccessRecovery = (data) => {
      setRegisterState('success');
      handleShowModal(
        `${
          data.isVerified ? 'Reset password link sent!' : 'Reset email sent!'
        } `,
        `${
          data.isVerified
            ? 'Check your email for a link to reset your password'
            : 'Your email has no been verified yet! Check you email for a new verification email'
        } `
      );
    };

    dispatch(
      actRecoveryUserPasswordOrVerificationEmail({ email }, onSuccessRecovery)
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

export default useRecoveryPassword;
