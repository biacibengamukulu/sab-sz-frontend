import { trackPromise } from 'react-promise-tracker';
import useProviders from '../../providers';

const useApplicationReviewService = () => {
  const { useApplicationReviewProviders } = useProviders();
  const {
    approveApplication,
    approveApplicationId,
    uploadInspectionReport,
    getInspectionReport,
    rejectPayment,
    approvePayment,
    extendUploadDocumentationTime,
    extendUploadIssuanceFeeTime,
    rejectApplication,
    grantApplication,
    getAdvertisingFeeMTN,
    getIssuanceFeeMTN,
    // getSapsAndMunicipalityReports,
    // sendInspectionReport,
    // submitForVote,
    // grantApplication,
  } = useApplicationReviewProviders();

  /**Eswatini */
  // approve application first step
  const approveApplicationService = (data) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(
            approveApplication(data),
            'approveApplicationStepRequirements'
          )
        );
      } catch (e) {
        reject(e);
      }
    });
  };


  const approveApplicationIdService = (data) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(
            approveApplicationId(data),
            'approveApplicationIdStepRequirements'
          )
        );
      } catch (e) {
        reject(e);
      }
    });
  };


  // Upload inspection report
  const uploadInspectionReportService = (data) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(
            uploadInspectionReport(data),
            'uploadInspectionReport'
          )
        );
      } catch (e) {
        reject(e);
      }
    });
  };

  // Get inspection report

  const getInspectionReportService = (applicationId) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(
            getInspectionReport(applicationId),
            'getInspectionReport'
          )
        );
      } catch (e) {
        reject(e);
      }
    });
  };

  //Reject payment
  const rejectPaymentService = (applicationId, data) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(
            rejectPayment(applicationId, data),
            'rejectPayment'
          )
        );
      } catch (e) {
        reject(e);
      }
    });
  };

  //Approve payment
  const approvePaymentService = (applicationId, data) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(
            approvePayment(applicationId, data),
            'approvePayment'
          )
        );
      } catch (e) {
        reject(e);
      }
    });
  };

  // extend the time for upload the documentation
  const extendUploadDocumentationTimeService = (applicationId) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(
            extendUploadDocumentationTime(applicationId),
            'extendUploadDocumentationTime'
          )
        );
      } catch (e) {
        reject(e);
      }
    });
  };

  // extend the time for upload the issuance fee
  const extendUploadIssuanceFeeTimeService = (applicationId) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(
            extendUploadIssuanceFeeTime(applicationId),
            'extendUploadIssuanceFeeTime'
          )
        );
      } catch (e) {
        reject(e);
      }
    });
  };

  //Reject application
  const rejectApplicationService = (applicationId, data) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(
            rejectApplication(applicationId, data),
            'rejectApplication'
          )
        );
      } catch (e) {
        reject(e);
      }
    });
  };

  const grantApplicationService = (applicationId) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(
            grantApplication(applicationId),
            'grantApplication'
          )
        );
      } catch (e) {
        reject(e);
      }
    });
  };

  const getAdvertisingFeeMTNService = (applicationId) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(
            getAdvertisingFeeMTN(applicationId),
            'getAdvertisingFeeMTN'
          )
        );
      } catch (e) {
        reject(e);
      }
    });
  };

  const getIssuanceFeeMTNService = (applicationId) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(
            getIssuanceFeeMTN(applicationId),
            'getIssuanceFeeMTN'
          )
        );
      } catch (e) {
        reject(e);
      }
    });
  };
  /** */
  // const sendCommentService = (data) => {
  //   // eslint-disable-next-line no-async-promise-executor
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       resolve(await trackPromise(sendComment(data)));
  //     } catch (e) {
  //       reject(e);
  //     }
  //   });
  // };

  // const getSapsAndMunicipalityReportsService = (applicationId) => {
  //   // eslint-disable-next-line no-async-promise-executor
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       resolve(
  //         await trackPromise(getSapsAndMunicipalityReports(applicationId))
  //       );
  //     } catch (e) {
  //       reject(e);
  //     }
  //   });
  // };

  // const sendInspectionReportService = (data) => {
  //   // eslint-disable-next-line no-async-promise-executor
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       resolve(await trackPromise(sendInspectionReport(data)));
  //     } catch (e) {
  //       reject(e);
  //     }
  //   });
  // };

  // const submitForVoteService = (data) => {
  //   // eslint-disable-next-line no-async-promise-executor
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       resolve(await trackPromise(submitForVote(data)));
  //     } catch (e) {
  //       reject(e);
  //     }
  //   });
  // };

  // const grantApplicationService = (applicationId) => {
  //   // eslint-disable-next-line no-async-promise-executor
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       resolve(await trackPromise(grantApplication(applicationId)));
  //     } catch (e) {
  //       reject(e);
  //     }
  //   });
  // };

  return {
    approveApplicationService,
    approveApplicationIdService,
    uploadInspectionReportService,
    getInspectionReportService,
    rejectPaymentService,
    approvePaymentService,
    extendUploadDocumentationTimeService,
    extendUploadIssuanceFeeTimeService,
    rejectApplicationService,
    grantApplicationService,
    getAdvertisingFeeMTNService,
    getIssuanceFeeMTNService,
    // sendCommentService,
    // getSapsAndMunicipalityReportsService,
    // sendInspectionReportService,
    // submitForVoteService,
    // grantApplicationService,
  };
};

export default useApplicationReviewService;
