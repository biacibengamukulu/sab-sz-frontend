import useHelpers from '../../../helpers';
import useStrings from '../../../strings';
import useInitialStates from '../../initialStates';

const useNotificationsReducers = () => {
  // Helpers
  const { useCreateReducer } = useHelpers();
  const { createReducer } = useCreateReducer();

  //strings
  const { useTypes } = useStrings();
  const { notificationsTypes } = useTypes();
  const {
    GET_ALL_NOTIFICATIONS,
    GET_LATEST_NOTIFICATIONS,
    SET_SIDE_NOTIFICATIONS,
    SET_NEW_NOTIFICATION,
  } = notificationsTypes();

  //initial states
  const { useNotificationsInitialStates } = useInitialStates();
  const { notificationsInitialState, newNotificationInitialState } =
    useNotificationsInitialStates();

  //handlers
  const notificationsnHandler = {
    [GET_ALL_NOTIFICATIONS](state, action) {
      const { payload } = action;
      const { data, current_page } = payload;
      return {
        ...state,
        allNotifications:
          current_page === 1 ? [...data] : [...state.allNotifications, ...data],
        currentPage: data.length ? current_page : state.currentPage,
      };
    },
    [GET_LATEST_NOTIFICATIONS](state, action) {
      const { payload } = action;
      const { notifications } = payload;
      return {
        ...state,
        latestNotifications: [...notifications],
      };
    },
    [SET_SIDE_NOTIFICATIONS](state, action) {
      const { payload } = action;
      return {
        ...state,
        sideNotificationStatus: payload,
      };
    },
  };

  const newNotificationHandler = {
    [SET_NEW_NOTIFICATION](state, action) {
      const { payload } = action;
      return {
        ...state,
        newNotificationStatus: payload,
      };
    },
  };
  //reducers
  const notifications = createReducer(
    notificationsInitialState,
    notificationsnHandler
  );

  const newNotification = createReducer(
    newNotificationInitialState,
    newNotificationHandler
  );

  return {
    notifications,
    newNotification,
  };
};

export default useNotificationsReducers;
