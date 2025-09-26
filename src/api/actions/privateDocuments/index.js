import useStrings from '../../../strings';
import useServices from '../../services';

const usePrivateDocumentsActions = () => {
  // Strings
  const { useTypes } = useStrings();
  const { privateDocumentsTypes } = useTypes();
  const {
    GET_PRIVATE_DOCUMENT,
    GET_PRIVATE_COMMENT_DOCUMENT,
    DELETE_REPORT,
    RESET_DELETED_STATUS,
  } = privateDocumentsTypes();

  // Services
  const { usePrivateDocumentsServices } = useServices();
  const {
    getPrivateDocumentTrackingInformationService,
    getPrivateCommentDocumentService,
    deleteReportService,
  } = usePrivateDocumentsServices();

  /** Eswatini*/
  const actGetPrivateDocumentTrackingInformation =
    ({ documentName, applicationId }, onSuccess, onError) =>
    async (dispatch) => {
      try {
        const response = await getPrivateDocumentTrackingInformationService(
          documentName,
          applicationId
        );
        dispatch({
          type: GET_PRIVATE_DOCUMENT,
        });
        onSuccess && onSuccess(response.data.url);
      } catch (e) {
        onError && onError(e);
      }
    };

  const actGetPrivateCommentDocument =
    ({ documentName, commentId }, onSuccess, onError) =>
    async (dispatch) => {
      try {
        const response = await getPrivateCommentDocumentService(
          documentName,
          commentId
        );
        dispatch({
          type: GET_PRIVATE_COMMENT_DOCUMENT,
        });
        onSuccess && onSuccess(response.data.url);
      } catch (e) {
        onError && onError(e);
      }
    };
  /** */
  const actDeleteReport = (data, onSuccess, onError) => async (dispatch) => {
    try {
      const response = await deleteReportService(data);
      dispatch({
        type: DELETE_REPORT,
      });
      onSuccess && onSuccess(response.data);
    } catch (e) {
      onError && onError(e);
    }
  };
  const actResetDeletedStatus = (onSuccess, onError) => async (dispatch) => {
    try {
      dispatch({
        type: RESET_DELETED_STATUS,
      });
      onSuccess && onSuccess();
    } catch (e) {
      onError && onError(e);
    }
  };
  return {
    actGetPrivateDocumentTrackingInformation,
    actGetPrivateCommentDocument,
    actDeleteReport,
    actResetDeletedStatus,
  };
};
export default usePrivateDocumentsActions;
