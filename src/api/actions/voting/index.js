import useStrings from '../../../strings';
import useServices from '../../services';

const useVotingActions = () => {
  // Strings
  const { useTypes } = useStrings();
  const { votingTypes } = useTypes();
  const {
    SAVE_VOTE_TIME,
    GET_VOTE_TIME,
    VOTE_APPLICATION,
    SET_STOPWATCH_STATE,
    SET_STOPWATCH_CURRENT_TIME,
  } = votingTypes();

  // Services
  const { useVotingServices } = useServices();
  const { saveVoteTimeService, getVoteTimeService, voteApplicationService } =
    useVotingServices();

  const actSaveVoteTime =
    ({ applicationId, time }, onSuccess, onError) =>
    async (dispatch) => {
      try {
        const response = await saveVoteTimeService(applicationId, time);
        dispatch({
          type: SAVE_VOTE_TIME,
          payload: response.data,
        });
        onSuccess && onSuccess();
      } catch (e) {
        onError && onError(e);
      }
    };

  const actGetVoteTime =
    ({ applicationId }, onSuccess, onError) =>
    async (dispatch) => {
      try {
        const response = await getVoteTimeService(applicationId);

        dispatch({
          type: GET_VOTE_TIME,
          payload: response.data,
        });
        onSuccess && onSuccess(response.data);
      } catch (e) {
        onError && onError(e);
      }
    };

  const actVoteApplication =
    ({ approved, votingTime, applicationId }, onSuccess, onError) =>
    async (dispatch) => {
      try {
        const response = await voteApplicationService(
          approved,
          votingTime,
          applicationId
        );

        dispatch({
          type: VOTE_APPLICATION,
          payload: response.data.allNotifications,
        });
        onSuccess && onSuccess(response);
      } catch (e) {
        onError && onError(e);
      }
    };
  const actSetStopwatchState =
    (state, onSuccess, onError) => async (dispatch) => {
      try {
        dispatch({
          type: SET_STOPWATCH_STATE,
          payload: state,
        });
        onSuccess && onSuccess();
      } catch (e) {
        onError && onError(e);
      }
    };

  const actSetStopwatchCurrentTime =
    (currentTime, onSuccess, onError) => async (dispatch) => {
      try {
        dispatch({
          type: SET_STOPWATCH_CURRENT_TIME,
          payload: currentTime,
        });
        onSuccess && onSuccess();
      } catch (e) {
        onError && onError(e);
      }
    };

  return {
    actSaveVoteTime,
    actGetVoteTime,
    actVoteApplication,
    actSetStopwatchState,
    actSetStopwatchCurrentTime,
  };
};
export default useVotingActions;
