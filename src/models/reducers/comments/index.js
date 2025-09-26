import useHelpers from '../../../helpers';
import useStrings from '../../../strings';
import useInitialStates from '../../initialStates';

const useCommentsReducers = () => {
  // Helpers
  const { useCreateReducer } = useHelpers();
  const { createReducer } = useCreateReducer();

  //strings
  const { useTypes } = useStrings();
  const { commentsTypes, applicationReviewTypes } = useTypes();
  const { GET_APPLICATION_COMMENTS } = commentsTypes();
  const { RESET_APPLICATION_REVIEW } = applicationReviewTypes();

  //initial states
  const { useCommentsInitialStates } = useInitialStates();
  const { commentsInitialState } = useCommentsInitialStates();

  //handlers
  const commentsHandler = {
    [GET_APPLICATION_COMMENTS](state, action) {
      const { payload } = action;
      const { comments, withFrontComments } = payload;
      return {
        ...state,
        listOfComments:
          withFrontComments === 0 ? comments : [...state.listOfComments],
        frontComments:
          withFrontComments === 1 ? comments : [...state.frontComments],
      };
    },

    [RESET_APPLICATION_REVIEW]() {
      return commentsInitialState;
    },
  };
  //reducers
  const comments = createReducer(commentsInitialState, commentsHandler);

  return {
    comments,
  };
};

export default useCommentsReducers;
