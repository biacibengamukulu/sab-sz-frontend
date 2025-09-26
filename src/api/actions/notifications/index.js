import useStrings from '../../../strings';
import useServices from '../../services';

const useNotificationsActions = () => {
  // Strings
  const { useTypes } = useStrings();
  const { notificationsTypes } = useTypes();
  const {
    GET_LATEST_NOTIFICATIONS,
    GET_ALL_NOTIFICATIONS,
    SET_SIDE_NOTIFICATIONS,
    SET_NEW_NOTIFICATION,
  } = notificationsTypes();

  // Services
  const { useNotificationsServices } = useServices();
  const { getLatestNotificationsService, getAllNotificationsService } =
    useNotificationsServices();

  const actGetLatestNotifications =
    (onSuccess, onError) => async (dispatch) => {
      try {
        const response = await getLatestNotificationsService();
        dispatch({
          type: GET_LATEST_NOTIFICATIONS,
          payload: response.data,
        });
        onSuccess && onSuccess(response.data);
      } catch (e) {
        onError && onError(e);
      }
    };

  const actGetAllNotifications =
    (page, onSuccess, onError) => async (dispatch) => {
      try {
        const response = await getAllNotificationsService(page);

        dispatch({
          type: GET_ALL_NOTIFICATIONS,
          payload: response.data.allNotifications,
        });
        onSuccess && onSuccess();
      } catch (e) {
        onError && onError(e);
      }
    };

  const actSetSideNotifications =
    (state, onSuccess, onError) => async (dispatch) => {
      try {
        dispatch({
          type: SET_SIDE_NOTIFICATIONS,
          payload: state,
        });
        onSuccess && onSuccess();
      } catch (e) {
        onError && onError(e);
      }
    };
  const actSetNewNotification =
    (state, onSuccess, onError) => async (dispatch) => {
      try {
        dispatch({
          type: SET_NEW_NOTIFICATION,
          payload: state,
        });
        onSuccess && onSuccess();
      } catch (e) {
        onError && onError(e);
      }
    };
  return {
    actGetLatestNotifications,
    actGetAllNotifications,
    actSetSideNotifications,
    actSetNewNotification,
  };
};
export default useNotificationsActions;
