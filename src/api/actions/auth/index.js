import useStrings from '../../../strings';
import useServices from '../../services';

const useAuthActions = () => {
  const { useAuthServices } = useServices();
  const { registerUser, loginUser, emailVerificationService, logoutUser } =
    useAuthServices();

  const { useTypes } = useStrings();
  const { useAuthTypes } = useTypes();
  const { LOGIN, EMAIL_VERIFICATION, LOG_OUT, LEAVE_BROADCASTING } =
    useAuthTypes();

  const actRegisterUser = (data, onSuccess, onError) => async (dispatch) => {
    try {
      const user = await registerUser(data);
      dispatch({
        type: LOGIN,
        payload: user.data,
      });
      onSuccess && onSuccess(user);
    } catch (e) {
      onError && onError(e);
    }
  };

  const actLogin = (data, callback, onError) => async (dispatch) => {
    try {
      const user = await loginUser(data);
      dispatch({
        type: LOGIN,
        payload: user.data,
      });
      if (callback) {
        callback(user.data);
      }
    } catch (e) {
      onError && onError(e);
    }
  };

  const actEmailVerification =
    ({ signature, expires, id }, onSuccess, onError) =>
    async (dispatch) => {
      try {
        const response = await emailVerificationService({
          signature,
          expires,
          id,
        });
        dispatch({
          type: EMAIL_VERIFICATION,
          payload: response.data.data,
        });
        onSuccess && onSuccess(response.data.data);
      } catch (e) {
        onError && onError(e);
      }
    };

  const actLogout = (onSuccess, onError) => async (dispatch) => {
    try {
      const response = await logoutUser();
      dispatch({ type: LOG_OUT });
      onSuccess && onSuccess(response.data);
    } catch (e) {
      dispatch({ type: LOG_OUT });
      onError && onError(e);
    }
  };

  const actLeaveBroadcasting = (onSuccess, onError) => async (dispatch) => {
    try {
      dispatch({
        type: LEAVE_BROADCASTING,
      });
      onSuccess && onSuccess;
    } catch (e) {
      onError && onError(e);
    }
  };

  return {
    actRegisterUser,
    actLogin,
    actLogout,
    actEmailVerification,
    actLeaveBroadcasting,
  };
};

export default useAuthActions;
