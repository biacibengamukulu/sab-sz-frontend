import useHelpers from '../../../helpers';
import useStrings from '../../../strings';
import useInitialStates from '../../initialStates';

const usePrivateDocumentsReducers = () => {
  // Helpers
  const { useCreateReducer } = useHelpers();
  const { createReducer } = useCreateReducer();

  //strings
  const { useTypes } = useStrings();
  const { privateDocumentsTypes } = useTypes();
  const { DELETE_REPORT, RESET_DELETED_STATUS } = privateDocumentsTypes();

  //initial states
  const { usePrivateDocumentsInitialStates } = useInitialStates();
  const { privateDocumentsInitialState } = usePrivateDocumentsInitialStates();

  //handlers
  const reportsHandler = {
    [DELETE_REPORT](state) {
      return {
        ...state,
        reportDeleted: true,
      };
    },

    [RESET_DELETED_STATUS]() {
      return privateDocumentsInitialState;
    },
  };
  //reducers
  const reportsState = createReducer(
    privateDocumentsInitialState,
    reportsHandler
  );

  return {
    reportsState,
  };
};

export default usePrivateDocumentsReducers;
