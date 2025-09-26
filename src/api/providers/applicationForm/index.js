import axios from 'axios';

const useApplicationFormProvider = () => {
  const getApplicationByIdFromReview = (id) => {
    return axios({
      method: 'get',
      url: `api/application/${id}`,
    });
  };

  const applicationHelpData = () => {
    return axios({
      method: 'get',
      url: `api/application-help-data`,
    });
  };

  const getAreaFromOffice = (id) => {
    return axios({
      method: 'get',
      url: `api/getAreasTheOffice/${id}`,
    });
  };

  // const saveUserApplication = (data) => {
  //   return axios({
  //     method: 'post',
  //     url: `api/save-user-application`,
  //     data,
  //   });
  // };

  const saveUserApplication = (data) => {
    return axios({
      method: 'post',
      url: `api/save-user-application`,
      data,
    });
  };

  // const saveAdvertisingFeeApplicationSubmit = (data) => {
  //   return axios({
  //     method: 'post',
  //     url: `api/save-user-application`,
  //     data,
  //   });
  // };

  const saveAdvertisingFeeApplicationSubmit = (data) => {
    return axios({
      method: 'post',
      url: `api/save-user-application`,
      data,
    });
  };

  const cancelApplication = (id) => {
    return axios({
      method: 'delete',
      url: `api/cancel-application/${id}`,
    });
  };

  const updateApplication = (data) => {
    return axios({
      method: 'put',
      url: `api/update-application/${data.id}`,
      data,
    });
  };

  const updateAdvertisingFeeApplicationSubmit = (data) => {
    return axios({
      method: 'put',
      url: `api/update-application/${data.id}`,
      data,
    });
  };

  const getApplicationFiles = (applicationId) => {
    return axios({
      method: 'get',
      url: `api/application-form-files/${applicationId}`,
    });
  };

  const saveDraftApplicationDocuments = (data) => {
    return axios({
      method: 'post',
      url: `api/save-application-documents`,
      data,
    });
  };

  const saveFinalApplicationDocuments = (data) => {
    return axios({
      method: 'post',
      url: `api/save-application-documents`,
      data,
    });
  };

  const submitIssuanceFeePayment = (data) => {
    return axios({
      method: 'post',
      url: `api/issuance-fee-payment`,
      data,
    });
  };

  const saveDraftIssuanceFeePayment = (data) => {
    return axios({
      method: 'post',
      url: `api/registerEraserDocument`,
      data: {
        application_id: data.applicationId,
        document: data.issuanceProofOfPayment,
      },
    });
  };

  const getDraftIssuanceFeePayment = (applicationId) => {
    return axios({
      method: 'get',
      url: `api/getEraserDocument/${applicationId}`,
    });
  };

  const getLicensePdf = (applicationId) => {
    return axios({
      method: 'get',
      url: `api/downloadApplicationLicenceCompleted/${applicationId}`,
    });
  };

  const getPinData = (pin) => {
    return axios({
      method: 'get',
      url: `api/validateInformationApplicant?pin=${pin}`,
    });
  };
  /** */
  const photosZip = (id) => {
    return axios({
      method: 'get',
      responseType: 'blob',
      url: `api/photos-zip/${id}`,
    });
  };

  const uploadApplicationFeeProofOfPayment = (data) => {
    return axios({
      method: 'post',
      url: `api/upload-fee-proof-of-payment`,
      data,
    });
  };

  const getLicenseFeePdf = (applicationId) => {
    return axios({
      method: 'get',
      url: `api/download-licence-fee-pdf/${applicationId}`,
    });
  };

  const approveApplicationFeeProofOfPayment = (data) => {
    return axios({
      method: 'patch',
      url: `api/approve-application-payment/${data.applicationId}`,
      data: {
        amountReceived: data.amountReceived,
        receiptNumber: data.receiptNumber,
      },
    });
  };

  return {
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
    getLicenseFeePdf,
    approveApplicationFeeProofOfPayment,
    getApplicationFiles,
    saveDraftApplicationDocuments,
    saveFinalApplicationDocuments,

    getPinData,
  };
};

export default useApplicationFormProvider;
