import useStrings from '../../../strings';
import useServices from '../../services';

const useApplicationReviewActions = () => {
  // Strings
  const { useTypes } = useStrings();
  const { applicationReviewTypes } = useTypes();
  const {
    SET_CURRENT_APPLICATION_REVIEW_STEP,
    SET_ACTIVE_APPLICATION_REVIEW_STEPS,

    APPROVE_APPLICATION,
    RESET_FIELD_APPLICATION_REVIEW,

    UPLOAD_INSPECTION,
    GET_INSPECTION_REPORT,

    RESET_APPLICATION_REVIEW,

    REJECT_PAYMENT,
    APPROVE_PAYMENT,

    EXTEND_DOCUMENTATION_TIME,
    EXTEND_ISSUANCE_FEE_TIME,

    REJECT_APPLICATION,
    GRANT_APPLICATION,

    GET_ADVERTISING_FEE_MTN,
    GET_ISSUANCE_FEE_MTN,

    // SET_STATUS_APPLICATION_REVIEW,
    // SET_CURRENT_STEP_APPLICATION_REVIEW,
    // GET_SAPS_AND_MUNICIPALITY_REPORTS,
    // SET_SAPS_AND_MUNICIPALITY_REPORTS_DRAFT,
    // SEND_INSPECTION_REPORT,
    // SUBMIT_FOR_VOTE,
    // EDIT_INSPECTION_FORM,
  } = applicationReviewTypes();

  // Services
  const { useApplicationReviewService } = useServices();
  const {
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

    // getSapsAndMunicipalityReportsService,
    // sendInspectionReportService,
    // submitForVoteService,
    // grantApplicationService,
  } = useApplicationReviewService();

  //**Eswatini */

  // Wizard
  const actSetCurrentApplicationReviewStep =
    ({ step }, onSuccess, onError) =>
    async (dispatch) => {
      try {
        dispatch({
          type: SET_CURRENT_APPLICATION_REVIEW_STEP,
          payload: step,
        });
        onSuccess && onSuccess();
      } catch (e) {
        onError && onError(e);
      }
    };

  const actSetActiveApplicationReviewSteps =
    ({ steps }, onSuccess, onError) =>
    async (dispatch) => {
      try {
        dispatch({
          type: SET_ACTIVE_APPLICATION_REVIEW_STEPS,
          payload: steps,
        });
        onSuccess && onSuccess();
      } catch (e) {
        onError && onError(e);
      }
    };

  // Approve First step
  const actApproveApplication =
    (data, onSuccess, onError) => async (dispatch) => {
      try {
        const response = await approveApplicationService(data);
        dispatch({
          type: APPROVE_APPLICATION,
          payload: response.data,
        });
        onSuccess && onSuccess();
      } catch (e) {
        onError && onError(e);
      }
    };


  const actApproveApplicationId =
    (data, onSuccess, onError) => async (dispatch) => {
      try {
        const response = await approveApplicationIdService(data);
        dispatch({
          type: APPROVE_APPLICATION,
          payload: response.data,
        });
        onSuccess && onSuccess();
      } catch (e) {
        onError && onError(e);
      }
    };

  // reset fields
  const actResetFieldApplicationReview =
    ({ fieldName, formStep }, onSuccess, onError) =>
    async (dispatch) => {
      try {
        dispatch({
          type: RESET_FIELD_APPLICATION_REVIEW,
          payload: { fieldName, formStep },
        });
        onSuccess && onSuccess();
      } catch (e) {
        onError && onError(e);
      }
    };

  // Upload inspection report
  const actUploadInspectionReport =
    (data, onSuccess, onError) => async (dispatch) => {
      try {
        const response = await uploadInspectionReportService(data);
        dispatch({
          type: UPLOAD_INSPECTION,
          payload: response.data,
        });
        onSuccess && onSuccess(response.data);
      } catch (e) {
        onError && onError(e);
      }
    };

  // Get inspection report
  const actGetInspectionReport =
    ({ applicationId }, onSuccess, onError) =>
    async (dispatch) => {
      try {
        const response = await getInspectionReportService(applicationId);
        dispatch({
          type: GET_INSPECTION_REPORT,
          payload: response.data,
        });
        onSuccess && onSuccess(response.data);
      } catch (e) {
        onError && onError(e);
      }
    };

  // Reset application review data
  const actResetApplicationReview =
    (onSuccess, onError) => async (dispatch) => {
      try {
        dispatch({
          type: RESET_APPLICATION_REVIEW,
        });
        onSuccess && onSuccess();
      } catch (e) {
        onError && onError(e);
      }
    };

  // Reject application from Board adjudication
  const actRejectPayment =
    ({ applicationId, data }, onSuccess, onError) =>
    async (dispatch) => {
      /**
       * data= {comment:'', isAdvertising: 0/1}
       * isAdvertising = 1 -> for advertising fee payment
       * isAdvertising = 0 -> for issuance fee payment
       */
      try {
        const response = await rejectPaymentService(applicationId, data);
        dispatch({
          type: REJECT_PAYMENT,
          payload: response.data,
        });
        onSuccess && onSuccess(response.data);
      } catch (e) {
        onError && onError(e);
      }
    };

  // Approve payment
  const actApprovePayment =
    ({ applicationId, data }, onSuccess, onError) =>
    async (dispatch) => {
      /**
       * data= {amountReceived:'', receiptNumber: '', isAdvertising: 0/1}
       * isAdvertising = 1 -> for advertising fee payment
       * isAdvertising = 0 -> for issuance fee payment
       */
      try {
        const response = await approvePaymentService(applicationId, data);
        dispatch({
          type: APPROVE_PAYMENT,
          payload: response.data,
        });
        onSuccess && onSuccess();
      } catch (e) {
        onError && onError(e);
      }
    };

  // extend the time for upload the documentation
  const actExtendUploadDocumentationTime =
    (applicationId, onSuccess, onError) => async (dispatch) => {
      try {
        const response = await extendUploadDocumentationTimeService(
          applicationId
        );
        dispatch({
          type: EXTEND_DOCUMENTATION_TIME,
          payload: response.data,
        });
        onSuccess && onSuccess(response.data);
      } catch (e) {
        onError && onError(e);
      }
    };

  // extend the time for upload the issuance fee
  const actExtendUploadIssuanceFeeTime =
    (applicationId, onSuccess, onError) => async (dispatch) => {
      try {
        const response = await extendUploadIssuanceFeeTimeService(
          applicationId
        );
        dispatch({
          type: EXTEND_ISSUANCE_FEE_TIME,
          payload: response.data,
        });
        onSuccess && onSuccess(response.data);
      } catch (e) {
        onError && onError(e);
      }
    };

  // Reject application from Board adjudication
  const actRejectApplication =
    ({ applicationId, data }, onSuccess, onError) =>
    async (dispatch) => {
      try {
        const response = await rejectApplicationService(applicationId, data);
        dispatch({
          type: REJECT_APPLICATION,
          payload: response.data,
        });
        onSuccess && onSuccess(response.data);
      } catch (e) {
        onError && onError(e);
      }
    };

  const actGrantApplication =
    (applicationId, onSuccess, onError) => async (dispatch) => {
      try {
        const response = await grantApplicationService(applicationId);
        dispatch({
          type: GRANT_APPLICATION,
          payload: response.data,
        });
        onSuccess && onSuccess(response.data);
      } catch (e) {
        onError && onError(e);
      }
    };

  // get advertising fee MTN
  const actGetAdvertisingFeeMTN =
    (applicationId, onSuccess, onError) => async (dispatch) => {
      try {
        const response = await getAdvertisingFeeMTNService(applicationId);
        dispatch({
          type: GET_ADVERTISING_FEE_MTN,
        });
        onSuccess && onSuccess(response.data.base64);
      } catch (e) {
        onError && onError(e);
      }
    };
  // get issuance fee MTN
  const actGetIssuanceFeeMTN =
    (applicationId, onSuccess, onError) => async (dispatch) => {
      try {
        const response = await getIssuanceFeeMTNService(applicationId);
        dispatch({
          type: GET_ISSUANCE_FEE_MTN,
        });
        onSuccess && onSuccess(response.data.base64);
      } catch (e) {
        onError && onError(e);
      }
    };
  /** */

  // const actSetStatusApplicationReview =
  //   ({ steps }, onSuccess, onError) =>
  //   async (dispatch) => {
  //     try {
  //       dispatch({
  //         type: SET_STATUS_APPLICATION_REVIEW,
  //         payload: steps,
  //       });
  //       onSuccess && onSuccess();
  //     } catch (e) {
  //       onError && onError(e);
  //     }
  //   };

  // const actSetCurrentStepApplicationReview =
  //   ({ step }, onSuccess, onError) =>
  //   async (dispatch) => {
  //     try {
  //       dispatch({
  //         type: SET_CURRENT_STEP_APPLICATION_REVIEW,
  //         payload: step,
  //       });
  //       onSuccess && onSuccess();
  //     } catch (e) {
  //       onError && onError(e);
  //     }
  //   };

  // const actGetSapsAndMunicipalityReports =
  //   ({ applicationId }, onSuccess, onError) =>
  //   async (dispatch) => {
  //     try {
  //       const response = await getSapsAndMunicipalityReportsService(
  //         applicationId
  //       );
  //       dispatch({
  //         type: GET_SAPS_AND_MUNICIPALITY_REPORTS,
  //         payload: response.data,
  //       });
  //       onSuccess && onSuccess(response.data);
  //     } catch (e) {
  //       onError && onError(e);
  //     }
  //   };

  // const actSetSapsAndMunicipalityReportsDraft =
  //   (data, onSuccess) => (dispatch) => {
  //     dispatch({
  //       type: SET_SAPS_AND_MUNICIPALITY_REPORTS_DRAFT,
  //       payload: data,
  //     });
  //     onSuccess && onSuccess();
  //   };

  // const actSendInspectionReport =
  //   (data, onSuccess, onError) => async (dispatch) => {
  //     try {
  //       const response = await sendInspectionReportService(data);
  //       dispatch({
  //         type: SEND_INSPECTION_REPORT,
  //         payload: response.data.user,
  //       });
  //       onSuccess && onSuccess(response.data.user);
  //     } catch (e) {
  //       onError && onError(e);
  //     }
  //   };

  // const actSubmitForVote = (data, onSuccess, onError) => async (dispatch) => {
  //   try {
  //     const response = await submitForVoteService(data);
  //     dispatch({
  //       type: SUBMIT_FOR_VOTE,
  //       payload: response.data,
  //     });
  //     onSuccess && onSuccess;
  //   } catch (e) {
  //     onError && onError(e);
  //   }
  // };

  // const actEditInspectionForm =
  //   (status, onSuccess, onError) => async (dispatch) => {
  //     try {
  //       dispatch({
  //         type: EDIT_INSPECTION_FORM,
  //         payload: status,
  //       });
  //       onSuccess && onSuccess();
  //     } catch (e) {
  //       onError && onError(e);
  //     }
  //   };

  // const actGrantApplication =
  //   (applicationId, onSuccess, onError) => async (dispatch) => {
  //     try {
  //       const response = await grantApplicationService(applicationId);
  //       dispatch({
  //         type: GRANT_APPLICATION,
  //         payload: response.data,
  //       });
  //       onSuccess && onSuccess(response.data);
  //     } catch (e) {
  //       onError && onError(e);
  //     }
  //   };
  // const actRejectApplication =
  //   ({ applicationId, data }, onSuccess, onError) =>
  //   async (dispatch) => {
  //     try {
  //       const response = await rejectApplicationService(applicationId, data);
  //       dispatch({
  //         type: REJECT_APPLICATION,
  //         payload: response.data,
  //       });
  //       onSuccess && onSuccess(response.data);
  //     } catch (e) {
  //       onError && onError(e);
  //     }
  //   };
  return {
    actSetCurrentApplicationReviewStep,
    actSetActiveApplicationReviewSteps,
    actApproveApplication,
    actApproveApplicationId,
    actResetFieldApplicationReview,
    actUploadInspectionReport,
    actGetInspectionReport,

    actResetApplicationReview,

    actRejectPayment,
    actApprovePayment,

    actExtendUploadDocumentationTime,
    actExtendUploadIssuanceFeeTime,

    actRejectApplication,
    actGrantApplication,

    actGetAdvertisingFeeMTN,
    actGetIssuanceFeeMTN,
    // actSetStatusApplicationReview,
    // actSetCurrentStepApplicationReview,
    // actGetSapsAndMunicipalityReports,
    // actSetSapsAndMunicipalityReportsDraft,
    // actSendInspectionReport,
    // actSubmitForVote,
    // actEditInspectionForm,
    // actGrantApplication,
    // actRejectApplication,
  };
};
export default useApplicationReviewActions;
