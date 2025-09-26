import { trackPromise } from 'react-promise-tracker';
import useProviders from '../../providers';

const useCommentsServices = () => {
  const { useCommentsProviders } = useProviders();
  const { getApplicationComments, sendComment, sendCommentReply } =
    useCommentsProviders();

  /**Eswatini*/
  // Send new comment
  const sendCommentService = (data) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(sendComment(data), 'sendComment'));
      } catch (e) {
        reject(e);
      }
    });
  };

  const getApplicationCommentsService = (
    applicationId,
    withFrontComments,
    withReplies
  ) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(
            getApplicationComments(
              applicationId,
              withFrontComments,
              withReplies
            ),
            'getApplicationComments'
          )
        );
      } catch (e) {
        reject(e);
      }
    });
  };

  const sendCommentReplyService = (data) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(sendCommentReply(data), 'sendCommentReply'));
      } catch (e) {
        reject(e);
      }
    });
  };
  /** */

  return {
    getApplicationCommentsService,
    sendCommentService,
    sendCommentReplyService,
  };
};

export default useCommentsServices;
