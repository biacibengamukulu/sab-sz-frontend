import { trackPromise } from 'react-promise-tracker';
import useProviders from '../../providers';

const usePrivateDocumentsServices = () => {
  const { usePrivateDocumentsProviders } = useProviders();
  const {
    getPrivateDocumentTrackingInformation,
    getPrivateCommentDocument,
    deleteReport,
  } = usePrivateDocumentsProviders();
  /**Eswatini */
  const getPrivateDocumentTrackingInformationService = (
    documentName,
    applicationId
  ) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(
            getPrivateDocumentTrackingInformation(documentName, applicationId),
            'getPrivateDocumentTrackingInformation'
          )
        );
      } catch (e) {
        reject(e);
      }
    });
  };

  const getPrivateCommentDocumentService = (documentName, commentId) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(
            getPrivateCommentDocument(documentName, commentId),
            'getPrivateCommentDocument'
          )
        );
      } catch (e) {
        reject(e);
      }
    });
  };

  /** */
  const deleteReportService = (data) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(deleteReport(data)));
      } catch (e) {
        reject(e);
      }
    });
  };
  return {
    getPrivateDocumentTrackingInformationService,
    getPrivateCommentDocumentService,
    deleteReportService,
  };
};

export default usePrivateDocumentsServices;
