import { useEffect } from 'react';
import useComponentHooks from '..';
import useHelpers from '../../../helpers';
import useApi from '../../../api';
import useModels from '../../../models';

const useApplicationReviewAdvertisingFee = (setValueAdvertisingFeeReview) => {
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { usePromises, useNavigation, useBase64ToBlobUrl, useDateFormatter } =
    useQuickFunctions();
  const { navigateTo } = useNavigation();
  const { promiseInProgressArea: promiseRejectPayment } =
    usePromises('rejectPayment');
  const { promiseInProgressArea: promiseApprovePayment } =
    usePromises('approvePayment');
  const { promiseInProgressArea: promiseExtendUploadDocumentationTime } =
    usePromises('extendUploadDocumentationTime');
  const {
    promiseInProgressArea: promiseGetPrivateDocumentTrackingInformation,
  } = usePromises('getPrivateDocumentTrackingInformation');
  const { promiseInProgressArea: promiseGetAdvertisingFeeMTN } = usePromises(
    'getAdvertisingFeeMTN'
  );

  // Api
  const { useActions } = useApi();
  const { dispatch, useApplicationReviewActions, usePrivateDocumentsActions } =
    useActions();
  const {
    actApprovePayment,
    actRejectPayment,
    actExtendUploadDocumentationTime,
    actGetAdvertisingFeeMTN,
  } = useApplicationReviewActions();
  const { actGetPrivateDocumentTrackingInformation } =
    usePrivateDocumentsActions();

  // Models
  const { useSelectors } = useModels();
  const { useSelector, useUserSelectors, useApplicationFormSelectors } =
    useSelectors();
  const { userSelector } = useUserSelectors();
  const { applicationFormSelector, applicationFormHelpDataSelector } =
    useApplicationFormSelectors();

  const { profile } = useSelector(userSelector);
  const { applicationForm } = useSelector(applicationFormSelector);

  const { licenceTypes } = useSelector(applicationFormHelpDataSelector);

  // hooks
  const { useModal } = useComponentHooks();
  const {
    modalState: modalStateApproveSuccess,
    handleShowModal: handleShowModalApproveSuccess,
  } = useModal();
  const {
    modalState: modalStateCommentsSent,
    handleShowModal: handleShowModalCommentsSent,
  } = useModal();
  const {
    modalState: modalStateComments,
    handleShowModal: handleShowModalComments,
  } = useModal();

  // React

  useEffect(() => {
    // set the prescribed fees
    setValueAdvertisingFeeReview(
      'prescribedFees',
      applicationForm.advertisingPrescribedFees
        ? applicationForm.advertisingPrescribedFees
        : 0
    );
  }, []);

  /**Handlers */
  // Handlers: Date

  const handleDateFormat = (dateOld) => {
    const { finalDateFormat } = useDateFormatter(dateOld);
    return finalDateFormat;
  };

  // Handlers: private document
  const handleGetPrivateLink = (url) => {
    window.open(url);
  };

  const handleGetPrivateDocumentView = (documentName) => {
    dispatch(
      actGetPrivateDocumentTrackingInformation(
        {
          documentName: documentName.replace(/\.[^/.]+$/, '') + '.pdf',
          applicationId: applicationForm.id,
        },
        handleGetPrivateLink
      )
    );
  };

  const handleSetAdvertisingFeeMtnPdf = (base64) => {
    const { url } = useBase64ToBlobUrl(base64);
    window.open(url);
  };

  const handleGetAdvertisingFeeMtn = () => {
    dispatch(
      actGetAdvertisingFeeMTN(applicationForm.id, handleSetAdvertisingFeeMtnPdf)
    );
  };
  // Handlers: Modals
  // Modal approve sucess
  const handleCloseModalApproveSuccess = () => {
    handleShowModalApproveSuccess();
    navigateTo(`/applications`);
  };

  const handleShowModalAfterApproveSuccess = () => {
    handleShowModalApproveSuccess(
      'Success!',
      'Advertising fee payment approved'
    );
  };

  // When reset time
  const handleShowModalResetTimeSuccess = () => {
    handleShowModalApproveSuccess(
      'Success!',
      'The time for submit the required documentation was reset successfully'
    );
  };

  // Modal success comments sent
  const handleCloseModalCommentsSent = () => {
    handleShowModalCommentsSent();
    navigateTo(`/applications`);
  };

  const handleShowModalAfterCommentsSentToFrontuser = () => {
    handleCloseModalComments();
    handleShowModalCommentsSent(
      'Success!',
      'Application successfully returned to the applicant for amendments'
    );
  };

  // Modal sent comment
  const handleCloseModalComments = () => {
    handleShowModalComments();
    // navigateTo(`/home`);
  };

  // On reset time for submit documentation
  const onResetTime = () => {
    dispatch(
      actExtendUploadDocumentationTime(
        applicationForm.id,
        handleShowModalResetTimeSuccess
      )
    );
  };
  // On submit for "Next" button
  const onSubmitApprove = (data) => {
    /**
     * isAdvertising = 1 -> for advertising fee payment
     * isAdvertising = 0 -> for issuance fee payment
     */
    delete data.prescribedFees;
    const dataToSend = {
      isAdvertising: 1,
      ...data,
    };
    dispatch(
      actApprovePayment(
        { applicationId: applicationForm.id, data: dataToSend },
        handleShowModalAfterApproveSuccess
      )
    );
  };

  // On submit for "Draft" button
  const onSubmitComment = (data) => {
    /**
     * isAdvertising = 1 -> for advertising fee payment
     * isAdvertising = 0 -> for issuance fee payment
     */
    const dataToSend = {
      comment: data.textAreaComments,
      isAdvertising: 1,
    };
    dispatch(
      actRejectPayment(
        { applicationId: applicationForm.id, data: dataToSend },
        handleShowModalAfterCommentsSentToFrontuser
      )
    );
  };

  return {
    promiseApprovePayment,
    promiseRejectPayment,
    promiseExtendUploadDocumentationTime,
    promiseGetPrivateDocumentTrackingInformation,
    promiseGetAdvertisingFeeMTN,

    profile,
    applicationForm,

    licenceTypes,

    handleDateFormat,

    handleGetPrivateDocumentView,
    handleGetAdvertisingFeeMtn,

    modalStateApproveSuccess,
    handleCloseModalApproveSuccess,

    modalStateCommentsSent,
    handleCloseModalCommentsSent,

    modalStateComments,
    handleCloseModalComments,

    onResetTime,
    onSubmitApprove,
    onSubmitComment,
  };
};

export default useApplicationReviewAdvertisingFee;
