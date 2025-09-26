import React, { useEffect } from 'react';
import useModels from '../../../models';

// eslint-disable-next-line no-unused-vars
import Pusher from 'pusher-js';
// import Echo from 'laravel-echo'; // Temporarily disabled
import useGeneralHooks from '../../generalHooks';
import useViews from '../../../views';
import useApi from '../../../api';
// import useHelpers from '../../../helpers';

const useRouting = () => {
  const { useComponents } = useViews();
  const { Toast } = useComponents();

  //Api
  const { useActions } = useApi();
  const {
    dispatch,
    useAuthActions,
    useUserActions,
    useNotificationsActions,
    useApplicationsTableActions,
  } = useActions();
  const { actLogout } = useAuthActions();
  const { actLogoutUser } = useUserActions();
  const { actSetNewNotification } = useNotificationsActions();
  const { actGetApplicationsTable } = useApplicationsTableActions();

  // Helpers
  // const { useQuickFunctions } = useHelpers();
  // const { useNavigation } = useQuickFunctions();
  // const { navigateTo } = useNavigation();

  // Models
  const { useSelectors } = useModels();
  const { useSelector, useAuthSelectors, useUserSelectors } = useSelectors();
  const { session, broadcastingSelector } = useAuthSelectors();
  const { userSelector } = useUserSelectors();
  const { profile } = useSelector(userSelector);
  const { id } = profile;
  const { tokenType, accessToken } = useSelector(session);
  const { leaveBroadcasting } = useSelector(broadcastingSelector);
  // const { pathname } = useLocation();
  // React
  const { useToast } = useGeneralHooks();
  const { info } = useToast();

  const handleOnAction = () => {};

  const handleOnActive = () => {};

  const handleOnIdle = () => {
    handleLogout();
  };

  const handleLogoutUserProfile = () => {
    dispatch(actLogoutUser());
    window.Echo = '';
  };

  const handleLogout = () => {
    dispatch(actLogout(handleLogoutUserProfile, handleLogoutUserProfile));
    dispatch(actSetNewNotification(false));
  };

  const connectToBroadcasting = () => {
    // Temporarily disable WebSocket for development debugging
    // eslint-disable-next-line no-console
    console.log('WebSocket connection disabled for development');
    window.Echo = null;

    // Uncomment below when WebSocket server is properly configured
    /*
    import Echo from 'laravel-echo';
    window.Echo = new Echo({
      broadcaster: 'pusher',
      key: `${process.env.REACT_APP_WS_KEY}`,
      cluster: 'us2',
      wsHost: `${process.env.REACT_APP_WS_HOST}`,
      wsPort: `${process.env.REACT_APP_WS_PORT}`,
      authEndpoint: `${process.env.REACT_APP_API_URL}api/broadcasting/auth`,
      disableStats: true,
      auth: {
        headers: {
          Authorization: `${tokenType} ${accessToken}`,
          Accept: 'application/json',
        },
      },
    });
    */
  };

  const handleSubscribePrivate = () => {
    window.Echo.private(`UserNotifications-${id}`).notification(
      (notification) => {
        if (id) {
          dispatch(actSetNewNotification(true));
          setTimeout(
            () =>
              dispatch(
                actGetApplicationsTable({
                  page: 1,
                })
              ),
            1000
          );
          info(
            <Toast
              text={notification.title}
              listOfErrors={[]}
              state={'error'}
            />,
            {
              position: 'top-right',
              autoClose: true,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
              progress: undefined,
              toastId: Math.random(),
            }
          );
        }
      }
    );
  };

  const handleUnsubscribePrivate = () => {
    if (window?.Echo) {
      window.Echo.leave(`private-UserNotifications-${id}`);
      window.Echo.leaveChannel(`private-UserNotifications-${id}`);
    }

    handleLogout();
  };

  useEffect(() => {
    tokenType &&
      accessToken &&
      !window?.Echo &&
      !leaveBroadcasting &&
      connectToBroadcasting();
  }, [tokenType, accessToken]);

  useEffect(() => {
    if (window.Echo && accessToken && id) {
      // Join private channel after login
      !leaveBroadcasting &&
        window.Echo?.options?.auth?.headers?.Authorization !== ' ' &&
        handleSubscribePrivate();
    }
  }, [window?.Echo, accessToken, id, leaveBroadcasting]);

  useEffect(() => {
    // Leave private channel after logout
    leaveBroadcasting && handleUnsubscribePrivate();
  }, [leaveBroadcasting]);

  return { handleOnAction, handleOnActive, handleOnIdle };
};

export default useRouting;
