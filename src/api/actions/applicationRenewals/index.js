import useStrings from '../../../strings';
import useServices from '../../services';

const useApplicationRenewalsActions = () => {
  // Strings
  const { useTypes } = useStrings();
  const { applicationRenewalsTypes } = useTypes();
  const {
    GET_APPLICATIONS_RENEWALS_TABLE,

    GET_APPLICATION_RENEWAL,
    APPLICATION_RENEWAL_READY,
    SUBMIT_APPLICATION_RENEWAL,
    SAVE_APPLICATION_RENEWAL,
    UPDATE_APPLICATION_RENEWAL,
    DELETE_APPLICATION_RENEWAL,
    APPROVE_APPLICATION_RENEWAL,
    REJECT_APPLICATION_RENEWAL,
    REMOVE_PROOF_OF_PAYMENT,
    GET_RENEWAL_PAYMENT_PDF,
  } = applicationRenewalsTypes();

  // Services
  const { useApplicationRenewalsServices } = useServices();
  const {
    getApplicationsRenewalsTableService,

    getApplicationRenewalService,
    submitApplicationRenewalService,
    saveApplicationRenewalService,
    updateApplicationRenewalService,
    approveApplicationRenewalService,
    rejectApplicationRenewalService,
    getRenewalPaymentPdfService,
  } = useApplicationRenewalsServices();

  /**Eswatini */
  const actGetApplicationsRenewalsTable =
    ({ page, search = '', start = '', end = '' }, onSuccess, onError) =>
    async (dispatch) => {
      try {
        const response = await getApplicationsRenewalsTableService(
          page,
          search,
          start,
          end
        );
        dispatch({
          type: GET_APPLICATIONS_RENEWALS_TABLE,
          payload: response.data.applications,
        });
        onSuccess && onSuccess(response.data.applications);
      } catch (e) {
        onError && onError(e);
      }
    };

  /** */

  const actGetApplicationRenewal =
    ({ applicationId }, onSuccess, onError) =>
    async (dispatch) => {
      try {
        const response = await getApplicationRenewalService(applicationId);

        dispatch({
          type: GET_APPLICATION_RENEWAL,
          payload: response.data,
        });
        dispatch({
          type: APPLICATION_RENEWAL_READY,
        });
        onSuccess && onSuccess(response.data);
      } catch (e) {
        onError && onError(e);
      }
    };

  const actSubmitApplicationRenewal =
    (data, onSuccess, onError) => async (dispatch) => {
      try {
        const response = await submitApplicationRenewalService(data);

        dispatch({
          type: SUBMIT_APPLICATION_RENEWAL,
        });
        onSuccess && onSuccess(response.data);
      } catch (e) {
        onError && onError(e);
      }
    };

  const actSaveApplicationRenewal =
    (data, onSuccess, onError) => async (dispatch) => {
      try {
        const response = await saveApplicationRenewalService(data);

        dispatch({
          type: SAVE_APPLICATION_RENEWAL,
        });
        onSuccess && onSuccess(response.data);
      } catch (e) {
        onError && onError(e);
      }
    };

  const actUpdateApplicationRenewal =
    (data, onSuccess, onError) => async (dispatch) => {
      try {
        const response = await updateApplicationRenewalService(data);

        dispatch({
          type: UPDATE_APPLICATION_RENEWAL,
        });
        onSuccess && onSuccess(response.data);
      } catch (e) {
        onError && onError(e);
      }
    };

  const actDeleteApplicationRenewal =
    (onSuccess, onError) => async (dispatch) => {
      try {
        dispatch({
          type: DELETE_APPLICATION_RENEWAL,
        });
        onSuccess && onSuccess();
      } catch (e) {
        onError && onError(e);
      }
    };

  const actApproveApplicationRenewal =
    (data, onSuccess, onError) => async (dispatch) => {
      try {
        const response = await approveApplicationRenewalService(data);

        dispatch({
          type: APPROVE_APPLICATION_RENEWAL,
        });
        onSuccess && onSuccess(response.data);
      } catch (e) {
        onError && onError(e);
      }
    };
  const actRejectApplicationRenewal =
    (data, onSuccess, onError) => async (dispatch) => {
      try {
        const response = await rejectApplicationRenewalService(data);

        dispatch({
          type: REJECT_APPLICATION_RENEWAL,
        });
        onSuccess && onSuccess(response.data);
      } catch (e) {
        onError && onError(e);
      }
    };
  const actRemoveProofOfPayment = (onSuccess, onError) => async (dispatch) => {
    try {
      dispatch({
        type: REMOVE_PROOF_OF_PAYMENT,
      });
      onSuccess && onSuccess;
    } catch (e) {
      onError && onError(e);
    }
  };
  const actGetRenewalPaymentPdf =
    (applicationId, onSuccess, onError) => async (dispatch) => {
      try {
        const response = await getRenewalPaymentPdfService(applicationId);
        dispatch({
          type: GET_RENEWAL_PAYMENT_PDF,
        });
        onSuccess && onSuccess(response.data.base64);
      } catch (e) {
        onError && onError(e);
      }
    };
  return {
    actGetApplicationsRenewalsTable,

    actGetApplicationRenewal,
    actSubmitApplicationRenewal,
    actSaveApplicationRenewal,
    actUpdateApplicationRenewal,
    actDeleteApplicationRenewal,
    actApproveApplicationRenewal,
    actRejectApplicationRenewal,
    actRemoveProofOfPayment,
    actGetRenewalPaymentPdf,
  };
};
export default useApplicationRenewalsActions;
