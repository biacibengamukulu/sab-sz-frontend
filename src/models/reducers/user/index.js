import useHelpers from '../../../helpers';
import useStrings from '../../../strings';
import useInitialStates from '../../initialStates';

const useUserReducers = () => {
  // Helpers
  const { useCreateReducer } = useHelpers();
  const { createReducer } = useCreateReducer();

  //strings
  const { useTypes } = useStrings();
  const { userUserTypes } = useTypes();
  const {
    GET_USER_PROFILE,
    UPDATE_USER_PROFILE,
    LOG_OUT_USER,
    GET_USER_ROLES,
    GET_CONTACT_METHODS,
  } = userUserTypes();

  //initial states
  const { useUserInitialStates } = useInitialStates();
  const { userInitialState } = useUserInitialStates();

  //handlers
  const userHandler = {
    [GET_USER_PROFILE](state, action) {
      const { payload } = action;
      const { user } = payload;
      return {
        ...state,
        profile: user,
      };
    },

    [GET_USER_ROLES](state, action) {
      const { payload } = action;
      return {
        ...state,
        userRolesList: payload,
      };
    },

    [UPDATE_USER_PROFILE](state, action) {
      const { payload } = action;
      const { user } = payload;
      return {
        ...state,
        profile: user,
      };
    },
    [LOG_OUT_USER]() {
      return userInitialState;
    },
    [GET_CONTACT_METHODS](state, action) {
      const { payload } = action;
      return {
        ...state,
        userContactMethodsList: payload,
      };
    },
  };

  //reducers
  const user = createReducer(userInitialState, userHandler);

  return {
    user,
  };
};

export default useUserReducers;
