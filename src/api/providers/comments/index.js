import axios from 'axios';
const useCommentsProviders = () => {
  /**Eswatini*/
  // Send new comment
  const sendComment = (data) => {
    return axios({
      method: 'post',
      url: `api/store-coment`,
      data,
    });
  };

  /** */
  const getApplicationComments = (
    applicationId,
    withFrontComments,
    withReplies
  ) => {
    return axios({
      method: 'get',
      url: `api/all-application-comments?${'applicationId=' + applicationId}${
        '&withFrontComments=' + withFrontComments
      }${'&withReplies=' + withReplies}`,
    });
  };

  const sendCommentReply = (data) => {
    return axios({
      method: 'post',
      url: `api/store-reply`,
      data,
    });
  };
  return {
    getApplicationComments,
    sendComment,
    sendCommentReply,
  };
};
export default useCommentsProviders;
