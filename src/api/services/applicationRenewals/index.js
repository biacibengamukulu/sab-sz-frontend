import { trackPromise } from 'react-promise-tracker';
import useProviders from '../../providers';

const useApplicationRenewalsServices = () => {
  const { useApplicationRenewalsProvider } = useProviders();
  const {
    getApplicationsRenewalsTable,
    getApplicationRenewal,
    submitApplicationRenewal,
    saveApplicationRenewal,
    updateApplicationRenewal,
    approveApplicationRenewal,
    rejectApplicationRenewal,
    getRenewalPaymentPdf,
  } = useApplicationRenewalsProvider();

  /**Eswatini */
  const getApplicationsRenewalsTableService = (page, search, start, end) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(
            getApplicationsRenewalsTable(page, search, start, end),
            'getApplicationsRenewalsTable'
          )
        );
      } catch (e) {
        reject(e);
      }
    });
  };

  /** */

  const getApplicationRenewalService = (applicationId) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(getApplicationRenewal(applicationId)));
      } catch (e) {
        reject(e);
      }
    });
  };

  const submitApplicationRenewalService = (data) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(submitApplicationRenewal(data)));
      } catch (e) {
        reject(e);
      }
    });
  };

  const saveApplicationRenewalService = (data) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(saveApplicationRenewal(data)));
      } catch (e) {
        reject(e);
      }
    });
  };

  const updateApplicationRenewalService = (data) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(updateApplicationRenewal(data)));
      } catch (e) {
        reject(e);
      }
    });
  };
  const approveApplicationRenewalService = (data) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(approveApplicationRenewal(data)));
      } catch (e) {
        reject(e);
      }
    });
  };
  const rejectApplicationRenewalService = (data) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(rejectApplicationRenewal(data)));
      } catch (e) {
        reject(e);
      }
    });
  };

  const getRenewalPaymentPdfService = (applicationId) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(getRenewalPaymentPdf(applicationId)));
      } catch (e) {
        reject(e);
      }
    });
  };

  return {
    getApplicationsRenewalsTableService,

    getApplicationRenewalService,
    submitApplicationRenewalService,
    saveApplicationRenewalService,
    updateApplicationRenewalService,
    approveApplicationRenewalService,
    rejectApplicationRenewalService,
    getRenewalPaymentPdfService,
  };
};

export default useApplicationRenewalsServices;
