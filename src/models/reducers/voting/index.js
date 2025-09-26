import useHelpers from '../../../helpers';
import useStrings from '../../../strings';
import useInitialStates from '../../initialStates';

const useVotingReducers = () => {
  // Helpers
  const { useCreateReducer } = useHelpers();
  const { createReducer } = useCreateReducer();

  //strings
  const { useTypes } = useStrings();
  const { votingTypes } = useTypes();
  const { GET_VOTE_TIME, SET_STOPWATCH_STATE, SET_STOPWATCH_CURRENT_TIME } =
    votingTypes();

  //initial states
  const { useVotingInitialStates } = useInitialStates();
  const { votingInitialState } = useVotingInitialStates();

  //handlers
  const votingHandler = {
    [GET_VOTE_TIME](state, action) {
      const { payload } = action;
      const { currentTime, alreadyVoted } = payload;
      return {
        ...state,
        time: currentTime ? currentTime.time : 0,
        currentTime: currentTime ? currentTime.time : 0,
        alreadyVoted: alreadyVoted,
      };
    },
    [SET_STOPWATCH_STATE](state, action) {
      const { payload } = action;
      return {
        ...state,
        state: payload,
      };
    },
    [SET_STOPWATCH_CURRENT_TIME](state, action) {
      const { payload } = action;
      return {
        ...state,
        currentTime: payload,
      };
    },
  };

  //reducers
  const voting = createReducer(votingInitialState, votingHandler);

  return {
    voting,
  };
};

export default useVotingReducers;
