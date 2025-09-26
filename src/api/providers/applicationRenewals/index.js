import axios from 'axios';

const useApplicationRenewalsProvider = () => {
  /**Eswatini */
  const getApplicationsRenewalsTable = (page, search, start, end) => {
    return axios({
      method: 'get',
      url: `api/verify-bin?${page && `page=${page}`}${
        search && `&bin=${search}`
      }${start && `&date_start=${start}`}${end && `&date_end=${end}`}`,
    });
  };

  /** */

  const getApplicationRenewal = (applicationId) => {
    return axios({
      method: 'get',
      url: `api/get-renewal/${applicationId}`,
    });
  };
  const submitApplicationRenewal = (data) => {
    return axios({
      method: 'post',
      url: `api/save-renewal`,
      data,
    });
  };
  const saveApplicationRenewal = (data) => {
    return axios({
      method: 'post',
      url: `api/save-renewal`,
      data,
    });
  };

  const updateApplicationRenewal = (data) => {
    return axios({
      method: 'put',
      url: `api/update-renewal`,
      data,
    });
  };
  const approveApplicationRenewal = (data) => {
    return axios({
      method: 'patch',
      url: `api/approve-renewal/${data.applicationId}`,
      data: {
        amountReceived: data.amountReceived,
        receiptNumber: data.receiptNumber,
      },
    });
  };
  const rejectApplicationRenewal = (data) => {
    return axios({
      method: 'patch',
      url: `api/reject-renewal/`,
      data,
    });
  };
  const getRenewalPaymentPdf = (applicationId) => {
    return axios({
      method: 'get',
      url: `api/renewal-pdf/${applicationId}`,
    });
  };
  return {
    getApplicationRenewal,
    submitApplicationRenewal,
    saveApplicationRenewal,
    updateApplicationRenewal,
    getApplicationsRenewalsTable,
    approveApplicationRenewal,
    rejectApplicationRenewal,
    getRenewalPaymentPdf,
  };
};

export default useApplicationRenewalsProvider;
