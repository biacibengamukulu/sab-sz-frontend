import { useState } from 'react';
import useApi from '../../../api';
import useHelpers from '../../../helpers';
import useComponentHooks from '../../componentHooks';

const useResendEmail = () => {
  // Api
  const { useActions } = useApi();
  const { dispatch, useUserActions } = useActions();
  const { actResendEmail } = useUserActions();

  // Components
  const { useModal } = useComponentHooks();
  const { modalState, handleShowModal } = useModal();

  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useNavigation } = useQuickFunctions();
  const { navigateTo } = useNavigation();

  // React
  const [registerState, setRegisterState] = useState('error');

  const onSubmit = (data) => {
    const { email } = data;

    const onSuccessSend = () => {
      setRegisterState('success');
      handleShowModal(
        'Success!',
        'Check your email for a link to complete your signup!'
      );
    };

    dispatch(
      actResendEmail(
        {
          email,
        },
        onSuccessSend
      )
    );
  };

  const handleCloseModal = () => {
    handleShowModal();
    handleRedirectLogin();
  };

  const handleRedirectLogin = () => navigateTo(`/login`);

  return {
    modalState,
    registerState,
    handleCloseModal,
    onSubmit,
  };
};

export default useResendEmail;
