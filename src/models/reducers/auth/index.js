import useHelpers from '../../../helpers';
import useStrings from '../../../strings';
import useInitialStates from '../../initialStates';

const useAuthReducers = () => {
  // Helpers
  const { useCreateReducer } = useHelpers();
  const { createReducer } = useCreateReducer();

  //strings
  const { useTypes } = useStrings();
  const { useAuthTypes } = useTypes();
  const { LOGIN, LOG_OUT, LEAVE_BROADCASTING, UPDATE_TOKEN } = useAuthTypes();

  //initial states
  const { useAuthInitialStates } = useInitialStates();
  const { sessionInitialState, broadcastingInitialState } =
    useAuthInitialStates();

  //handlers
  const sessionHandler = {
    [LOGIN](state, action) {
      const { payload } = action;
      const { tokenType, token } = payload;
      return {
        ...state,
        tokenType: tokenType,
        accessToken: token,
      };
    },
    [UPDATE_TOKEN](state, action) {
      const { payload } = action;
      const { tokenType, accessToken } = payload;
      return {
        ...state,
        tokenType: tokenType,
        accessToken: accessToken,
      };
    },
    [LOG_OUT]() {
      return sessionInitialState;
    },
  };

  //handlers
  const broadcastingHandler = {
    [LOGIN](state, action) {
      const { payload } = action;
      const { user } = payload;
      return {
        ...state,
        idBroadcasting: user.id,
        leaveBroadcasting: false,
      };
    },
    [LEAVE_BROADCASTING](state) {
      return {
        ...state,
        leaveBroadcasting: true,
      };
    },
    [LOG_OUT](state) {
      return {
        ...state,
        leaveBroadcasting: false,
      };
    },
  };
  //reducers
  const session = createReducer(sessionInitialState, sessionHandler);
  const broadcasting = createReducer(
    broadcastingInitialState,
    broadcastingHandler
  );

  return {
    session,
    broadcasting,
  };
};

export default useAuthReducers;
