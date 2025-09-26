import axios from 'axios';
const usePrivateDocumentsProviders = () => {
  const getPrivateDocumentTrackingInformation = (
    documentName,
    applicationId
  ) => {
    return axios({
      method: 'get',
      url: `api/download-report?document=${documentName}&applicationId=${applicationId}`,
    });
  };

  const getPrivateCommentDocument = (documentName, commentId) => {
    return axios({
      method: 'get',
      url: `api/comment-document?document=${documentName}&commentId=${commentId}`,
    });
  };

  const deleteReport = (data) => {
    return axios({
      method: 'post',
      url: `api/delete-report`,
      data,
    });
  };
  return {
    getPrivateDocumentTrackingInformation,
    getPrivateCommentDocument,
    deleteReport,
  };
};
export default usePrivateDocumentsProviders;
