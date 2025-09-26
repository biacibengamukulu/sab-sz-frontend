import axios from 'axios';
const useApplicationReviewProviders = () => {
  /**Eswatini */
  const approveApplication = (data) => {
    return axios({
      method: 'patch',
      url: `api/approve-application`,
      data,
    });
  };

  const approveApplicationId = (data) => {
    const mData={
        'comment': data.data.comment
    }
    return axios({
      method: 'post',
      url: `api/approve-application/${data.applicationId}`,
      data: mData,
    });
  };

  const uploadInspectionReport = (data) => {
    return axios({
      method: 'post',
      url: `api/upload-inspection`,
      data,
    });
  };

  // Get inspection report
  const getInspectionReport = (applicationId) => {
    return axios({
      method: 'get',
      url: `api/get-reports?applicationId=${applicationId}`,
    });
  };

  //reject applicaation
  const rejectPayment = (applicationId, data) => {
    return axios({
      method: 'post',
      url: `api/reject-payment/${applicationId}`,
      data,
    });
  };

  //approve applicaation
  const approvePayment = (applicationId, data) => {
    return axios({
      method: 'patch',
      url: `api/approve-application-payment/${applicationId}`,
      data,
    });
  };

  // extend the time for upload the documentation
  const extendUploadDocumentationTime = (applicationId) => {
    return axios({
      method: 'patch',
      url: `api/extend-upload-document-time/${applicationId}`,
    });
  };

  // extend the time for upload the issuance fee
  const extendUploadIssuanceFeeTime = (applicationId) => {
    return axios({
      method: 'patch',
      url: `api/extend-issuance-fee-time/${applicationId}`,
    });
  };

  //reject applicaation
  const rejectApplication = (applicationId, data) => {
    return axios({
      method: 'post',
      url: `api/reject-application/${applicationId}`,
      data,
    });
  };

  const grantApplication = (applicationId) => {
    return axios({
      method: 'post',
      url: `api/grant-application/${applicationId}`,
    });
  };

  // Get inspection report
  const getAdvertisingFeeMTN = (applicationId) => {
    return axios({
      method: 'get',
      url: `api/get-advertising-receipt/${applicationId}`,
    });
  };

  // Get inspection report
  const getIssuanceFeeMTN = (applicationId) => {
    return axios({
      method: 'get',
      url: `api/get-issuance-receipt/${applicationId}`,
    });
  };
  /** */
  // const sendComment = (data) => {
  //   return axios({
  //     method: 'post',
  //     url: `api/store-coment`,
  //     data,
  //   });
  // };
  // const getSapsAndMunicipalityReports = (applicationId) => {
  //   return axios({
  //     method: 'get',
  //     url: `api/get-reports?applicationId=${applicationId}`,
  //   });
  // };

  // const sendInspectionReport = (data) => {
  //   return axios({
  //     method: 'post',
  //     url: `api/store-inspection`,
  //     data,
  //   });
  // };

  // const submitForVote = (data) => {
  //   return axios({
  //     method: 'patch',
  //     url: `api/approve-application`,
  //     data,
  //   });
  // };

  return {
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
    // sendComment,
    // getSapsAndMunicipalityReports,
    // sendInspectionReport,
    // submitForVote,
    // grantApplication,
  };
};
export default useApplicationReviewProviders;
