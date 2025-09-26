import useStrings from '../../../strings';
import useServices from '../../services';

const useUsersTableActions = () => {
  // Strings
  const { useTypes } = useStrings();
  const { usersTableTypes } = useTypes();
  const {
    GET_USERS,

    CREATE_USER,
    SET_CURRENT_USER,
    USER_DISABLED,
    UPDATE_USER,
  } = usersTableTypes();

  // Services
  const { useUsersTableService } = useServices();
  const {
    getUsersTablePageService,
    createUserService,
    disableUserService,
    updateUserService,
  } = useUsersTableService();

  /**
   * Eswatini
   */

  // Get the user with the filter
  const actGetUsersTable =
    ({ page, search, role = '' }, onSuccess, onError) =>
    async (dispatch) => {
      try {
        const response = await getUsersTablePageService(page, search, role);
        dispatch({
          type: GET_USERS,
          payload: response.data.users,
        });
        onSuccess && onSuccess(response.data.users);
      } catch (e) {
        onError && onError(e);
      }
    };

  // Create new user
  const actCreateUser = (data, onSuccess, onError) => async (dispatch) => {
    try {
      const response = await createUserService(data);
      dispatch({
        type: CREATE_USER,
        payload: response.data.user,
      });
      onSuccess && onSuccess(response.data.user);
    } catch (e) {
      onError && onError(e);
    }
  };
  const actDisableUser =
    ({ id }, onSuccess, onError) =>
    async (dispatch) => {
      try {
        const response = await disableUserService(id);
        dispatch({
          type: USER_DISABLED,
        });
        onSuccess && onSuccess(response.data.users);
      } catch (e) {
        onError && onError(e);
      }
    };

  // Set the user to be edited
  const actSetCurrentUser = (data, onSuccess, onError) => async (dispatch) => {
    try {
      dispatch({
        type: SET_CURRENT_USER,
        payload: data,
      });
      onSuccess && onSuccess(data);
    } catch (e) {
      onError && onError(e);
    }
  };

  // Update user
  const actUpdateUser = (data, onSuccess, onError) => async (dispatch) => {
    try {
      const response = await updateUserService(data);
      dispatch({
        type: UPDATE_USER,
        payload: response.data.user,
      });
      onSuccess && onSuccess(response.data.user);
    } catch (e) {
      onError && onError(e);
    }
  };
  /** */
  return {
    actGetUsersTable,
    actCreateUser,
    actDisableUser,
    actSetCurrentUser,
    actUpdateUser,
  };
};
export default useUsersTableActions;
