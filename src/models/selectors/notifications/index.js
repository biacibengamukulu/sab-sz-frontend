import useHelpers from '../../../helpers';

const useNotificationsSelectors = () => {
  const { useCreateSelector } = useHelpers();
  const { createSelector } = useCreateSelector();

  const notificationsSelector = createSelector(
    (state) => state.notifications,
    (notifications) => notifications
  );
  const newNotificationSelector = createSelector(
    (state) => state.newNotification,
    (newNotification) => newNotification
  );
  return {
    notificationsSelector,
    newNotificationSelector,
  };
};

export default useNotificationsSelectors;
