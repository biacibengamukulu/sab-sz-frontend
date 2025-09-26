import useStrings from '../../../strings';
import useServices from '../../services';

const useApplicationFormActions = () => {
  // Strings
  const { useTypes } = useStrings();
  const { applicationFormTypes } = useTypes();
  const {
    SET_CURRENT_APPLICATION_FORM_STEP,
    SET_ACTIVE_APPLICATION_FORM_STEPS,

    SUBMIT_APPLICATION_FORM_STEP,
    SET_APPLICATION_FORM_FROM_TABLE,
    APPLICATION_READY,
    GET_APPLICATION_FILES,
    CANCEL_APPLICATION,

    GET_APPLICATION_HELP_DATA,
    GET_AREA_FROM_OFFICE,

    GET_APPLICATION_BY_ID_FROM_REVIEW,

    ADVERTISING_PAYMENT_SUCCESS,
    APPLICATION_DOCUMENTS_SAVED,

    SUBMIT_ISSUANCE_FEE_PAYMENT,
    SAVE_DRAFT_ISSUANCE_FEE_PAYMENT,
    GET_DRAFT_ISSUANCE_FEE_PAYMENT,

    USER_APPLICATION_SAVED,
    RESET_FIELD_APPLICATION_FORM,
    SET_APPLICATION_DATE,
    SET_DOCUMENTS_DRAFT,
    UPLOAD_APPLICATION_FEE,
    GET_LICENSE_FEE_PDF,
    APPROVE_APPLICATION_FEE,
    GET_LICENSE_PDF,

    GET_PIN_DATA,
  } = applicationFormTypes();

  // Services
  const { useApplicationFormServices } = useServices();
  const {
    getApplicationByIdFromReviewService,
    saveDraftApplicationDocumentsService,
    saveFinalApplicationDocumentsService,

    applicationHelpDataService,
    getAreaFromOfficeService,

    saveUserApplicationService,
    saveAdvertisingFeeApplicationSubmitService,
    cancelApplicationService,
    updateApplicationService,
    updateAdvertisingFeeApplicationSubmitService,

    submitIssuanceFeePaymentService,
    saveDraftIssuanceFeePaymentService,
    getDraftIssuanceFeePaymentService,

    photosZipService,
    uploadApplicationFeeProofOfPaymentService,
    getLicenseFeePdfService,
    approveApplicationFeeProofOfPaymentService,
    getApplicationFilesService,
    getLicensePdfService,

    getPinDataService,
  } = useApplicationFormServices();

  //*Eswatini */

  // Wizard
  const actSetCurrentApplicationFormStep =
    ({ step }, onSuccess, onError) =>
    async (dispatch) => {
      try {
        dispatch({
          type: SET_CURRENT_APPLICATION_FORM_STEP,
          payload: step,
        });
        onSuccess && onSuccess();
      } catch (e) {
        onError && onError(e);
      }
    };

  const actSetActiveApplicationFormSteps =
    ({ steps }, onSuccess, onError) =>
    async (dispatch) => {
      try {
        dispatch({
          type: SET_ACTIVE_APPLICATION_FORM_STEPS,
          payload: steps,
        });
        onSuccess && onSuccess();
      } catch (e) {
        onError && onError(e);
      }
    };

  // Helper lists
  const actGetApplicationHelpData =
    (data, onSuccess, onError) => async (dispatch) => {
      try {
        const response = await applicationHelpDataService(data);
        dispatch({
          type: GET_APPLICATION_HELP_DATA,
          payload: response.data,
        });
        onSuccess && onSuccess();
      } catch (e) {
        onError && onError(e);
      }
    };

  const actGetAreaFromOffice = (id, onSuccess, onError) => async (dispatch) => {
    try {
      const response = await getAreaFromOfficeService(id);
      dispatch({
        type: GET_AREA_FROM_OFFICE,
        payload: response.data,
      });
      onSuccess && onSuccess(response.data.areas);
    } catch (e) {
      onError && onError(e);
    }
  };

  // Application form submit steps
  const actSubmitApplicationFormStep =
    ({ data, step }, onSuccess, onError) =>
    async (dispatch) => {
      try {
        dispatch({
          type: SUBMIT_APPLICATION_FORM_STEP,
          payload: { data, step },
        });
        onSuccess && onSuccess(data);
      } catch (e) {
        onError && onError(e);
      }
    };

  // Submit applications Draft or New completed application
  const actSaveUserApplication =
    (data, onSuccess, onError) => async (dispatch) => {
      try {
        const response = await saveUserApplicationService(data);
        dispatch({
          type: USER_APPLICATION_SAVED,
        });
        onSuccess && onSuccess(response.data);
      } catch (e) {
        onError && onError(e);
      }
    };

  // Submit final Advertising Fee (Only for the final submit)
  const actSaveAdvertisingFeeApplicationSubmit =
    (data, onSuccess, onError) => async (dispatch) => {
      try {
        const response = await saveAdvertisingFeeApplicationSubmitService(data);

        dispatch({
          type: ADVERTISING_PAYMENT_SUCCESS,
          payload: response.data,
        });
        onSuccess && onSuccess(response.data);
      } catch (e) {
        onError && onError(e);
      }
    };

  // reset fields
  const actResetFieldApplicationForm =
    ({ fieldName, formStep }, onSuccess, onError) =>
    async (dispatch) => {
      try {
        dispatch({
          type: RESET_FIELD_APPLICATION_FORM,
          payload: { fieldName, formStep },
        });
        onSuccess && onSuccess();
      } catch (e) {
        onError && onError(e);
      }
    };

  // cancel application
  const actCancelApplication =
    ({ id = '' }, onSuccess, onError) =>
    async (dispatch) => {
      try {
        if (id) {
          const response = await cancelApplicationService(id);
          dispatch({
            type: CANCEL_APPLICATION,
          });
          onSuccess && onSuccess(response.data);
        } else {
          dispatch({
            type: CANCEL_APPLICATION,
          });
          onSuccess && onSuccess();
        }
      } catch (e) {
        onError && onError(e);
      }
    };

  // After selecting an application the data is set in state
  const actSetApplicationFormFromTable =
    ({ application }, onSuccess, onError) =>
    async (dispatch) => {
      try {
        dispatch({
          type: SET_APPLICATION_FORM_FROM_TABLE,
          payload: application,
        });
        dispatch({
          type: APPLICATION_READY,
        });
        onSuccess && onSuccess(application);
      } catch (e) {
        onError && onError(e);
      }
    };

  // Update application draft
  const actUpdateApplication =
    (data, onSuccess, onError) => async (dispatch) => {
      try {
        const response = await updateApplicationService(data);

        dispatch({
          type: USER_APPLICATION_SAVED,
        });
        onSuccess && onSuccess(response.data);
      } catch (e) {
        onError && onError(e);
      }
    };

  // Update application final submit (Only for the final submit)
  const actUpdateAdvertisingFeeApplicationSubmit =
    (data, onSuccess, onError) => async (dispatch) => {
      try {
        const response = await updateAdvertisingFeeApplicationSubmitService(
          data
        );

        dispatch({
          type: UPLOAD_APPLICATION_FEE,
        });
        onSuccess && onSuccess(response.data);
      } catch (e) {
        onError && onError(e);
      }
    };

  // Get documents when from an existen application
  const actGetApplicationFiles =
    (applicationId, onSuccess, onError) => async (dispatch) => {
      try {
        const response = await getApplicationFilesService(applicationId);
        dispatch({
          type: GET_APPLICATION_FILES,
          payload: response.data,
        });
        onSuccess && onSuccess();
      } catch (e) {
        onError && onError(e);
      }
    };

  const actGetApplicationByIdFromReview =
    ({ id }, onSuccess, onError) =>
    async (dispatch) => {
      try {
        const response = await getApplicationByIdFromReviewService(id);
        dispatch({
          type: GET_APPLICATION_BY_ID_FROM_REVIEW,
          payload: { ...response.data },
        });
        onSuccess && onSuccess({ ...response.data });
      } catch (e) {
        onError && onError(e);
      }
    };

  // Submit Draft documents
  const actSaveDraftApplicationDocuments =
    (data, onSuccess, onError) => async (dispatch) => {
      try {
        const response = await saveDraftApplicationDocumentsService(data);

        dispatch({
          type: APPLICATION_DOCUMENTS_SAVED,
        });
        onSuccess && onSuccess(response.data);
      } catch (e) {
        onError && onError(e);
      }
    };

  // Submit FINAL documents
  const actSaveFinalApplicationDocuments =
    (data, onSuccess, onError) => async (dispatch) => {
      try {
        const response = await saveFinalApplicationDocumentsService(data);

        dispatch({
          type: APPLICATION_DOCUMENTS_SAVED,
        });
        onSuccess && onSuccess(response.data);
      } catch (e) {
        onError && onError(e);
      }
    };

  // Submit Issuance fee payment
  const actSubmitIssuanceFeePayment =
    (data, onSuccess, onError) => async (dispatch) => {
      try {
        const response = await submitIssuanceFeePaymentService(data);

        dispatch({
          type: SUBMIT_ISSUANCE_FEE_PAYMENT,
        });
        onSuccess && onSuccess(response.data);
      } catch (e) {
        onError && onError(e);
      }
    };

  const actSaveDraftIssuanceFeePayment =
    (data, onSuccess, onError) => async (dispatch) => {
      try {
        const response = await saveDraftIssuanceFeePaymentService(data);

        dispatch({
          type: SAVE_DRAFT_ISSUANCE_FEE_PAYMENT,
        });
        onSuccess && onSuccess(response.data);
      } catch (e) {
        onError && onError(e);
      }
    };

  const actGetDraftIssuanceFeePayment =
    (applicationId, onSuccess, onError) => async (dispatch) => {
      try {
        const response = await getDraftIssuanceFeePaymentService(applicationId);

        dispatch({
          type: GET_DRAFT_ISSUANCE_FEE_PAYMENT,
          payload: { name: response.data.url.replace(/\.[^/.]+$/, '') },
        });
        onSuccess && onSuccess(response.data);
      } catch (e) {
        onError && onError(e);
      }
    };

  const actSetApplicationDate =
    ({ date }, onSuccess, onError) =>
    async (dispatch) => {
      try {
        dispatch({
          type: SET_APPLICATION_DATE,
          payload: date,
        });
        onSuccess && onSuccess();
      } catch (e) {
        onError && onError(e);
      }
    };

  const actGetLicensePdf =
    (applicationId, onSuccess, onError) => async (dispatch) => {
      try {
        const response = await getLicensePdfService(applicationId);

        dispatch({
          type: GET_LICENSE_PDF,
        });
        onSuccess && onSuccess(response.data.base64);
      } catch (e) {
        onError && onError(e);
      }
    };

  //Get Pin Data
  const actGetPinData = (pin, onSuccess, onError) => async (dispatch) => {
    try {
      const response = await getPinDataService(pin);

      dispatch({
        type: GET_PIN_DATA,
      });
      onSuccess && onSuccess(response.data);
    } catch (e) {
      onError && onError(e);
    }
  };

  /**NC */

  const actSetDocumentsDraft =
    ({ field, data }, onSuccess, onError) =>
    async (dispatch) => {
      try {
        dispatch({
          type: SET_DOCUMENTS_DRAFT,
          payload: { field, data },
        });
        onSuccess && onSuccess();
      } catch (e) {
        onError && onError(e);
      }
    };

  const actGetZipDownloadPhotos = (id, onSuccess, onError) => async () => {
    try {
      const response = await photosZipService(id);
      onSuccess && onSuccess(response.data);
    } catch (error) {
      onError && onError();
    }
  };

  const actUploadApplicationFeeProofOfPayment =
    (data, onSuccess, onError) => async (dispatch) => {
      try {
        const response = await uploadApplicationFeeProofOfPaymentService(data);

        dispatch({
          type: UPLOAD_APPLICATION_FEE,
        });
        onSuccess && onSuccess(response.data);
      } catch (e) {
        onError && onError(e);
      }
    };

  const actGetLicenseFeePdf =
    (applicationId, onSuccess, onError) => async (dispatch) => {
      try {
        const response = await getLicenseFeePdfService(applicationId);

        dispatch({
          type: GET_LICENSE_FEE_PDF,
        });
        onSuccess && onSuccess(response.data.base64);
      } catch (e) {
        onError && onError(e);
      }
    };

  const actApproveApplicationFeeProofOfPayment =
    (data, onSuccess, onError) => async (dispatch) => {
      try {
        const response = await approveApplicationFeeProofOfPaymentService(data);

        dispatch({
          type: APPROVE_APPLICATION_FEE,
        });
        onSuccess && onSuccess(response.data);
      } catch (e) {
        onError && onError(e);
      }
    };

  return {
    actSetCurrentApplicationFormStep,
    actSetActiveApplicationFormSteps,

    actCancelApplication,
    actSubmitApplicationFormStep,

    actGetApplicationHelpData,
    actGetAreaFromOffice,

    actGetApplicationByIdFromReview,
    actSaveUserApplication,
    actSaveAdvertisingFeeApplicationSubmit,
    actUpdateApplication,
    actUpdateAdvertisingFeeApplicationSubmit,

    actSaveDraftApplicationDocuments,
    actSaveFinalApplicationDocuments,

    actSubmitIssuanceFeePayment,
    actSaveDraftIssuanceFeePayment,
    actGetDraftIssuanceFeePayment,

    actResetFieldApplicationForm,
    actSetApplicationFormFromTable,
    actSetApplicationDate,
    actSetDocumentsDraft,
    actGetZipDownloadPhotos,
    actUploadApplicationFeeProofOfPayment,
    actGetLicenseFeePdf,
    actApproveApplicationFeeProofOfPayment,
    actGetApplicationFiles,
    actGetLicensePdf,

    actGetPinData,
  };
};
export default useApplicationFormActions;
