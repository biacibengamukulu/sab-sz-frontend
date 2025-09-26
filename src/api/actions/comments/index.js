import useStrings from '../../../strings';
import useServices from '../../services';

const useCommentsActions = () => {
  // Strings
  const { useTypes } = useStrings();
  const { commentsTypes } = useTypes();
  const {
    SEND_COMMENT,

    GET_APPLICATION_COMMENTS,
    // SEND_INTERNAL_COMMENT,
    SEND_INTERNAL_COMMENT_REPLY,
  } = commentsTypes();

  // Services
  const { useCommentsServices } = useServices();
  const {
    getApplicationCommentsService,
    sendCommentService,
    sendCommentReplyService,
  } = useCommentsServices();

  /**Eswatini */

  // Send new comment
  const actSendComment =
    ({ data, resetField }, onSuccess, onError) =>
    async (dispatch) => {
      try {
        const response = await sendCommentService(data);
        dispatch({
          type: SEND_COMMENT,
          payload: response.data.user,
        });
        onSuccess && onSuccess(resetField);
      } catch (e) {
        onError && onError(e);
      }
    };

  const actGetApplicationComments =
    (
      { applicationId, withFrontComments = 0, withReplies = 0 },
      onSuccess,
      onError
    ) =>
    async (dispatch) => {
      try {
        const response = await getApplicationCommentsService(
          applicationId,
          withFrontComments,
          withReplies
        );

        dispatch({
          type: GET_APPLICATION_COMMENTS,
          payload: {
            comments: response.data,
            withFrontComments: withFrontComments,
          },
        });
        onSuccess && onSuccess();
      } catch (e) {
        onError && onError(e);
      }
    };

  /** */
  // const actSendComment =
  // ({ data, resetField }, onSuccess, onError) =>
  // async (dispatch) => {
  //   try {
  //     const response = await sendCommentService(data);
  //     dispatch({
  //       type: SEND_INTERNAL_COMMENT,
  //       payload: response.data.user,
  //     });
  //     onSuccess && onSuccess(resetField);
  //   } catch (e) {
  //     onError && onError(e);
  //   }
  // };

  const actSendCommentReply =
    ({ data, resetField }, onSuccess, onError) =>
    async (dispatch) => {
      try {
        const response = await sendCommentReplyService(data);
        dispatch({
          type: SEND_INTERNAL_COMMENT_REPLY,
          payload: response.data.user,
        });
        onSuccess && onSuccess(resetField);
      } catch (e) {
        onError && onError(e);
      }
    };
  return {
    actGetApplicationComments,
    actSendComment,
    actSendCommentReply,
  };
};
export default useCommentsActions;
