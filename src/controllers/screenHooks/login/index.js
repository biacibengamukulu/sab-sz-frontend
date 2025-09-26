import { useEffect, useState } from 'react';
import useApi from '../../../api';
import useHelpers from '../../../helpers';
import useModels from '../../../models';
import useComponentHooks from '../../componentHooks';
import _ from 'lodash';

const useLogin = () => {
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useNavigation, usePromises } = useQuickFunctions();
  const { replaceAndNavigateTo, navigateTo } = useNavigation();
  const { promiseInProgress } = usePromises();

  // Api
  const { useActions } = useApi();
  const { dispatch, useAuthActions, useUserActions, useNotificationsActions } =
    useActions();
  const { actLogin } = useAuthActions();
  const { actGetUserProfile, actGetUserRoles } = useUserActions();
  const { actGetLatestNotifications, actSetNewNotification } =
    useNotificationsActions();

  // Models
  const { useSelectors } = useModels();
  const { useSelector, useAuthSelectors, useUserSelectors } = useSelectors();
  const { userSelector } = useUserSelectors();
  const { session } = useAuthSelectors();
  const { profile } = useSelector(userSelector);
  const { accessToken } = useSelector(session);

  const { useModal } = useComponentHooks();
  const { modalState, handleShowModal } = useModal();
  const {
    modalState: modalStateAdvise,
    handleShowModal: handleShowModalAdvise,
  } = useModal();

  // React
  const [loginState, setLoginState] = useState('');
  // const [isMobileState, setIsMobileState] = useState(false); // Unused variable

  /**
   * Handler functions
   */
  // const handleResolutionDevice = () => {
  //   const widthDevice = window.innerWidth;
  //   widthDevice <= 768 && setIsMobileState(true);
  // }; // Unused function

  const handleRedirectNewApplication = () => {
    replaceAndNavigateTo('/application-form');
  };

  const handleRedirectApplications = () => {
    replaceAndNavigateTo('/applications');
  };

  const handleCloseModalSucces = () => {
    handleShowModalAdvise();
    handleRedirectApplications();
  };

  // const handleRedirectProfile = () => {
  //   replaceAndNavigateTo('/profile');
  // }; // Unused function

  const handleRedirectRegister = () => {
    navigateTo('/signup');
  };

  const handleRedirectRecoveryPassword = () => {
    navigateTo('/recovery-password');
  };

  const handleCloseModal = () => {
    handleShowModal();
  };

  const handleNotificationTime = (notificationDate, lastLogout) => {
    const currentNotificationDate = new Date(notificationDate);
    const lastLogoutDate = new Date(lastLogout);
    const currentDate = new Date();
    const notificationDifference = new Date(
      currentDate - currentNotificationDate
    );

    const lastLogoutDifference = new Date(currentDate - lastLogoutDate);
    const notificationMinutes = notificationDifference.getTime() / 1000 / 60;

    const lastLogoutMinutes = lastLogoutDifference.getTime() / 1000 / 60;

    if (lastLogoutMinutes > notificationMinutes) {
      dispatch(actSetNewNotification(true));
    }
  };

  const handleNewNotificationOffline = (data) => {
    const lastLogout = profile.lastLogout;
    const notificationsArray = data.notifications;
    _.map(notificationsArray, (currentNotification) => {
      handleNotificationTime(currentNotification.notificatedAt, lastLogout);
    });
  };

  const handleGetNotifications = () => {
    dispatch(actGetLatestNotifications(handleNewNotificationOffline));
  };

  const handleSuccessLogin = (data) => {
    dispatch(actGetUserRoles());
    dispatch(actGetUserProfile(data));
    setLoginState('success');
  };

  /**
   * Submit functions
   */
  const onSubmit = (data) => {
    dispatch(actLogin(data, handleSuccessLogin));
  };

  useEffect(() => {
    // handleResolutionDevice(); // Function commented out
  }, []);

  useEffect(() => {
    if (profile.roleType?.roleType && accessToken) {
      profile.lastLogout && handleGetNotifications(profile.lastLogout);

      // Simple redirect to home page for all users
      replaceAndNavigateTo('/home');
    }
  }, [accessToken, loginState, profile.email]);

  return {
    promiseInProgress,
    modalState,
    loginState,
    handleRedirectNewApplication,
    handleRedirectApplications,
    handleRedirectRegister,
    handleRedirectRecoveryPassword,
    handleCloseModal,
    modalStateAdvise,
    handleCloseModalSucces,
    onSubmit,
  };
};

export default useLogin;
