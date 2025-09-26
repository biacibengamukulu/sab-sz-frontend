import { useState, useEffect } from 'react';
import useApi from '../../../api';
import useHelpers from '../../../helpers';
import useComponentHooks from '../../componentHooks';

const useEmailVerification = () => {
  // Hooks
  const { useModal } = useComponentHooks();
  const { modalState, handleShowModal } = useModal();

  // Api
  const { useActions } = useApi();
  const { dispatch, useAuthActions } = useActions();
  const { actEmailVerification } = useAuthActions();

  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useNavigation } = useQuickFunctions();
  const { getParam, replaceAndNavigateTo } = useNavigation();

  // React
  const [registerState, setRegisterState] = useState('success');

  const handleCloseModal = () => {
    replaceAndNavigateTo('/login');
  };

  const handleEmailVerification = () => {
    const verified = getParam('verified');
    const already = getParam('already');

    if (verified === '1') {
      setRegisterState('success');
      if (already === 'true') {
        handleShowModal('Already Verified!', 'Your account was already verified!');
      } else {
        handleShowModal('Account Verified!', 'Your account has been successfully verified!');
      }
      return;
    }

    // Legacy verification flow for old links
    const signature = getParam('signature');
    const expires = getParam('expires');
    const id = getParam('id');

    if (signature && expires && id) {
      const onSuccessEmailVerification = () => {
        setRegisterState('success');
        handleShowModal('Account verified!', 'Your account has been verified!');
      };

      const onErrorEmailVerification = (error) => {
        setRegisterState('error');
        handleShowModal('Verification Failed', error?.message || 'Failed to verify your account. Please try again.');
      };

      dispatch(
        actEmailVerification(
          { signature, expires, id },
          onSuccessEmailVerification,
          onErrorEmailVerification
        )
      );
    } else {
      // No verification parameters found
      setRegisterState('error');
      handleShowModal('Invalid Link', 'This verification link is invalid or has expired.');
    }
  };

  useEffect(() => {
    handleEmailVerification();
    // Force show modal for debugging if nothing else works
    setTimeout(() => {
      if (!modalState.show) {
        handleShowModal('Debug', 'EmailVerification component loaded');
      }
    }, 1000);
  }, []);

  return {
    registerState,
    handleCloseModal,
    modalState,
  };
};
export default useEmailVerification;
