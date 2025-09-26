import useStrings from '../../../strings';
import useServices from '../../services';

const useUserActions = () => {
  // Strings
  const { useTypes } = useStrings();
  const { userUserTypes } = useTypes();
  const {
    CHANGE_USER_PASSWORD,
    RECOVERY_USER_PASSWORD,
    RESET_USER_PASSWORD,
    GET_USER_PROFILE,
    UPDATE_USER_PROFILE,
    LOG_OUT_USER,
    GET_USER_ROLES,
    GET_CONTACT_METHODS,
  } = userUserTypes();

  // Services
  const { useUserService } = useServices();
  const {
    changeUserPasswordService,
    recoveryUserPasswordOrVerificationEmailService,
    resetUserPasswordService,
    updateUserService,
    getUserRolesService,
    resendEmailService,
    getContactMethodsService,
  } = useUserService();

  const actGetUserRoles = (onSuccess, onError) => async (dispatch) => {
    try {
      const response = await getUserRolesService();
      dispatch({
        type: GET_USER_ROLES,
        payload: response.data.list,
      });

      onSuccess && onSuccess(response.data.list);
    } catch (e) {
      onError && onError(e);
    }
  };

  const actGetUserProfile = (data, onSuccess, onError) => async (dispatch) => {
    try {
      dispatch({
        type: GET_USER_PROFILE,
        payload: data,
      });
      onSuccess && onSuccess();
    } catch (e) {
      onError && onError(e);
    }
  };

  const actRecoveryUserPasswordOrVerificationEmail =
    ({ email }, onSuccess, onError) =>
    async (dispatch) => {
      try {
        const response = await recoveryUserPasswordOrVerificationEmailService({
          email,
        });
        dispatch({
          type: RECOVERY_USER_PASSWORD,
          payload: response.data,
        });
        onSuccess && onSuccess(response.data);
      } catch (e) {
        onError && onError(e);
      }
    };

  const actResetUserPassword =
    ({ token, email, password, passwordConfirmation }, onSuccess, onError) =>
    async (dispatch) => {
      try {
        const response = await resetUserPasswordService({
          token,
          email,
          password,
          passwordConfirmation,
        });
        dispatch({
          type: RESET_USER_PASSWORD,
          payload: response.data.data,
        });
        onSuccess && onSuccess(response.data.data);
      } catch (e) {
        onError && onError(e);
      }
    };

  const actResendEmail =
    ({ email }, onSuccess, onError) =>
    async () => {
      try {
        const response = await resendEmailService({
          email,
        });
        onSuccess && onSuccess(response.data.data);
      } catch (e) {
        onError && onError(e);
      }
    };

  const actChangeUserPassword =
    ({ currentPassword, password, passwordConfirmation }, onSuccess, onError) =>
    async (dispatch) => {
      try {
        const response = await changeUserPasswordService({
          currentPassword,
          password,
          passwordConfirmation,
        });
        dispatch({
          type: CHANGE_USER_PASSWORD,
          payload: response.data.data,
        });
        onSuccess && onSuccess(response.data.data);
      } catch (e) {
        onError && onError(e);
      }
    };

  const actUpdateUser =
    (
      {
        name,
        surname,
        phoneIndicatorId,
        email,
        alias,
        phone,
        roleId,
        registrationNumber,
        image,
        contactMethodId,
      },
      onSuccess,
      onError
    ) =>
    async (dispatch) => {
      try {
        const response = await updateUserService({
          name,
          surname,
          phoneIndicatorId,
          alias,
          email,
          phone,
          roleId,
          registrationNumber,
          image,
          contactMethodId,
        });
        dispatch({
          type: UPDATE_USER_PROFILE,
          payload: response.data,
        });

        onSuccess && onSuccess(response.data);
      } catch (e) {
        onError && onError(e);
      }
    };

  const actLogoutUser = (onSuccess) => (dispatch) => {
    dispatch({ type: LOG_OUT_USER });
    onSuccess && onSuccess;
  };

  const actGetContactMethods = (onSuccess, onError) => async (dispatch) => {
    try {
      const response = await getContactMethodsService();
      dispatch({
        type: GET_CONTACT_METHODS,
        payload: response.data.contactMethods,
      });

      onSuccess && onSuccess(response.data.list);
    } catch (e) {
      onError && onError(e);
    }
  };
  return {
    actResendEmail,
    actRecoveryUserPasswordOrVerificationEmail,
    actResetUserPassword,
    actChangeUserPassword,
    actGetUserProfile,
    actUpdateUser,
    actLogoutUser,
    actGetUserRoles,
    actGetContactMethods,
  };
};
export default useUserActions;
