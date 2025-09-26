import useHelpers from '../../../helpers';
import useStrings from '../../../strings';
import useInitialStates from '../../initialStates';

const useUsersTableReducers = () => {
  // Helpers
  const { useCreateReducer } = useHelpers();
  const { createReducer } = useCreateReducer();

  //strings
  const { useTypes } = useStrings();
  const { usersTableTypes } = useTypes();
  const { GET_USERS, CREATE_USER, SET_CURRENT_USER, USER_DISABLED } =
    usersTableTypes();

  //initial states
  const { useUsersTableInitialStates } = useInitialStates();
  const { usersTableInitialState } = useUsersTableInitialStates();

  //handlers
  const userHandler = {
    [GET_USERS](state, action) {
      const { payload } = action;
      const { current_page, data, last_page, per_page, total } = payload;
      return {
        ...state,
        data: data,
        currentPage: current_page,
        lastPage: last_page,
        pageSize: per_page,
        totalRows: total,
      };
    },
    [CREATE_USER](state, action) {
      const { payload } = action;
      return {
        ...state,
        userSelected: payload,
      };
    },
    [SET_CURRENT_USER](state, action) {
      const { payload } = action;
      return {
        ...state,
        userSelected: payload,
      };
    },
    [USER_DISABLED](state) {
      return {
        ...state,
        userSelected: {},
      };
    },
  };
  //reducers
  const usersTable = createReducer(usersTableInitialState, userHandler);

  return {
    usersTable,
  };
};

export default useUsersTableReducers;
