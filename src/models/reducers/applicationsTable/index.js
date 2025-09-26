import useHelpers from '../../../helpers';
import useStrings from '../../../strings';
import useInitialStates from '../../initialStates';

const useApplicationsTableReducers = () => {
  // Helpers
  const { useCreateReducer } = useHelpers();
  const { createReducer } = useCreateReducer();

  //strings
  const { useTypes } = useStrings();
  const { applicationsTableTypes, userUserTypes } = useTypes();
  const { GET_APPLICATIONS, GET_APPLICATION_BY_ID, GET_STATUS_HELP_LIST } =
    applicationsTableTypes();
  const { LOG_OUT_USER } = userUserTypes();

  //initial states
  const { useApplicationsTableInitialStates } = useInitialStates();
  const { applicationsTableInitialState } = useApplicationsTableInitialStates();

  //handlers
  const userHandler = {
    [GET_APPLICATIONS](state, action) {
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

    [GET_APPLICATION_BY_ID](state, action) {
      const { payload } = action;
      const { application } = payload;
      return {
        ...state,
        applicationSelected: application,
      };
    },

    [GET_STATUS_HELP_LIST](state, action) {
      const { payload } = action;
      return {
        ...state,
        statusHelpList: payload,
      };
    },

    [LOG_OUT_USER]() {
      return applicationsTableInitialState;
    },
  };
  //reducers
  const applicationsTable = createReducer(
    applicationsTableInitialState,
    userHandler
  );

  return {
    applicationsTable,
  };
};

export default useApplicationsTableReducers;
