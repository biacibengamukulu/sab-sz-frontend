const useNotificationsInitialStates = () => {
  const notificationsInitialState = {
    latestNotifications: [],
    allNotifications: [],
    currentPage: 0,
    sideNotificationStatus: false,
  };
  const newNotificationInitialState = {
    newNotificationStatus: false,
  };
  return {
    notificationsInitialState,
    newNotificationInitialState,
  };
};

export default useNotificationsInitialStates;
