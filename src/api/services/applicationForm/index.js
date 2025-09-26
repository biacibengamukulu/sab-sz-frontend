import { trackPromise } from 'react-promise-tracker';
import useProviders from '../../providers';

const useApplicationFormServices = () => {
  const { useApplicationFormProvider } = useProviders();
  const {
    getApplicationByIdFromReview,
    applicationHelpData,
    getAreaFromOffice,
    saveUserApplication,
    saveAdvertisingFeeApplicationSubmit,
    cancelApplication,
    updateApplication,
    updateAdvertisingFeeApplicationSubmit,
    submitIssuanceFeePayment,
    saveDraftIssuanceFeePayment,
    getDraftIssuanceFeePayment,
    getLicensePdf,

    photosZip,
    uploadApplicationFeeProofOfPayment,
    approveApplicationFeeProofOfPayment,
    getLicenseFeePdf,
    getApplicationFiles,
    saveDraftApplicationDocuments,
    saveFinalApplicationDocuments,

    getPinData,
  } = useApplicationFormProvider();

  //**Eswatini */

  // Helper lists
  const applicationHelpDataService = (data) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(applicationHelpData(data)));
      } catch (e) {
        reject(e);
      }
    });
  };

  // Helper lists
  const getAreaFromOfficeService = (id) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(getAreaFromOffice(id), 'getAreaFromOffice'));
      } catch (e) {
        reject(e);
      }
    });
  };

  // Submit applications Draft
  const saveUserApplicationService = (data) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(saveUserApplication(data), 'saveUserApplication')
        );
      } catch (e) {
        reject(e);
      }
    });
  };

  // Submit   New completed applications application
  const saveAdvertisingFeeApplicationSubmitService = (data) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(
            saveAdvertisingFeeApplicationSubmit(data),
            'saveAdvertisingFeeApplicationSubmit'
          )
        );
      } catch (e) {
        reject(e);
      }
    });
  };

  // Cancel application
  const cancelApplicationService = (id) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(cancelApplication(id), 'cancelApplication'));
      } catch (e) {
        reject(e);
      }
    });
  };

  // Get all the files from an existing application
  const getApplicationFilesService = (applicationId) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(
            getApplicationFiles(applicationId),
            'getApplicationFiles'
          )
        );
      } catch (e) {
        reject(e);
      }
    });
  };

  // Update application draft
  const updateApplicationService = (data) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(updateApplication(data), 'updateUserApplication')
        );
      } catch (e) {
        reject(e);
      }
    });
  };

  // Update application final submit
  const updateAdvertisingFeeApplicationSubmitService = (data) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(
            updateAdvertisingFeeApplicationSubmit(data),
            'updateAdvertisingFeeSubmitUserApplication'
          )
        );
      } catch (e) {
        reject(e);
      }
    });
  };

  // Get application by Id from rEVIEW
  const getApplicationByIdFromReviewService = (id) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(
            getApplicationByIdFromReview(id),
            'getApplicationByIdFromReview'
          )
        );
      } catch (e) {
        reject(e);
      }
    });
  };

  // Submit  Draft documentation
  const saveDraftApplicationDocumentsService = (data) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(
            saveDraftApplicationDocuments(data),
            'saveDraftApplicationDocuments'
          )
        );
      } catch (e) {
        reject(e);
      }
    });
  };

  // Submit  final documentation
  const saveFinalApplicationDocumentsService = (data) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(
            saveFinalApplicationDocuments(data),
            'saveFinalApplicationDocuments'
          )
        );
      } catch (e) {
        reject(e);
      }
    });
  };

  // Submit issuance Fee
  const submitIssuanceFeePaymentService = (data) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(
            submitIssuanceFeePayment(data),
            'submitIssuanceFeePayment'
          )
        );
      } catch (e) {
        reject(e);
      }
    });
  };

  // Save draft issuance Fee
  const saveDraftIssuanceFeePaymentService = (data) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(
            saveDraftIssuanceFeePayment(data),
            'saveDraftIssuanceFeePayment'
          )
        );
      } catch (e) {
        reject(e);
      }
    });
  };

  // Get draft issuance Fee
  const getDraftIssuanceFeePaymentService = (applicationId) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(
            getDraftIssuanceFeePayment(applicationId),
            'getDraftIssuanceFeePayment'
          )
        );
      } catch (e) {
        reject(e);
      }
    });
  };

  const getLicensePdfService = (applicationId) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(getLicensePdf(applicationId), 'getLicensePdf')
        );
      } catch (e) {
        reject(e);
      }
    });
  };

  const getPinDataService = (pin) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(getPinData(pin), 'getPinData'));
      } catch (e) {
        reject(e);
      }
    });
  };

  /**NC */

  const photosZipService = (id) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(photosZip(id)));
      } catch (e) {
        reject(e);
      }
    });
  };
  const uploadApplicationFeeProofOfPaymentService = (data) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(uploadApplicationFeeProofOfPayment(data)));
      } catch (e) {
        reject(e);
      }
    });
  };
  const getLicenseFeePdfService = (applicationId) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(getLicenseFeePdf(applicationId)));
      } catch (e) {
        reject(e);
      }
    });
  };
  const approveApplicationFeeProofOfPaymentService = (data) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(approveApplicationFeeProofOfPayment(data)));
      } catch (e) {
        reject(e);
      }
    });
  };

  return {
    applicationHelpDataService,
    getAreaFromOfficeService,
    getApplicationByIdFromReviewService,

    saveUserApplicationService,
    saveAdvertisingFeeApplicationSubmitService,
    cancelApplicationService,
    updateApplicationService,
    updateAdvertisingFeeApplicationSubmitService,
    submitIssuanceFeePaymentService,
    saveDraftIssuanceFeePaymentService,
    getDraftIssuanceFeePaymentService,

    photosZipService,
    getLicenseFeePdf,
    uploadApplicationFeeProofOfPaymentService,
    getLicenseFeePdfService,
    approveApplicationFeeProofOfPaymentService,
    getApplicationFilesService,
    saveDraftApplicationDocumentsService,
    saveFinalApplicationDocumentsService,
    getLicensePdfService,

    getPinDataService,
  };
};

export default useApplicationFormServices;
