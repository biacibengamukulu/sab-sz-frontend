import { useEffect, useState } from 'react';
import useComponentHooks from '..';
import useHelpers from '../../../helpers';
import useApi from '../../../api';
import useModels from '../../../models';

const useApplicationReviewStep5 = (setValueIsuanceFeeReview) => {
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { usePromises, useNavigation, useBase64ToBlobUrl, useDateFormatter } =
    useQuickFunctions();
  const { navigateTo } = useNavigation();
  const { promiseInProgressArea: promiseRejectPayment } =
    usePromises('rejectPayment');
  const { promiseInProgressArea: promiseApprovePayment } =
    usePromises('approvePayment');
  const { promiseInProgressArea: promiseGrantApplication } =
    usePromises('grantApplication');
  const { promiseInProgressArea: promiseExtendUploadIssuanceFeeTime } =
    usePromises('extendUploadIssuanceFeeTime');
  const {
    promiseInProgressArea: promiseGetPrivateDocumentTrackingInformation,
  } = usePromises('getPrivateDocumentTrackingInformation');
  const { promiseInProgressArea: promiseGetIssuanceFeeMTN } =
    usePromises('getIssuanceFeeMTN');

  // Api
  const { useActions } = useApi();
  const { dispatch, useApplicationReviewActions, usePrivateDocumentsActions } =
    useActions();
  const {
    actApprovePayment,
    actRejectPayment,
    actSetCurrentApplicationReviewStep,
    actSetActiveApplicationReviewSteps,
    actGrantApplication,
    actExtendUploadIssuanceFeeTime,
    actGetIssuanceFeeMTN,
  } = useApplicationReviewActions();
  const { actGetPrivateDocumentTrackingInformation } =
    usePrivateDocumentsActions();

  // Models
  const { useSelectors } = useModels();
  const {
    useSelector,
    useUserSelectors,
    useApplicationFormSelectors,
    useApplicationReviewSelectors,
  } = useSelectors();
  const { userSelector } = useUserSelectors();
  const { applicationFormSelector, applicationFormHelpDataSelector } =
    useApplicationFormSelectors();
  const { applicationReviewWizardSelector } = useApplicationReviewSelectors();

  const { profile } = useSelector(userSelector);
  const { applicationForm } = useSelector(applicationFormSelector);
  const { licenceTypes } = useSelector(applicationFormHelpDataSelector);
  const { stepsEnabled, currentStep } = useSelector(
    applicationReviewWizardSelector
  );

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
    setValueIsuanceFeeReview(
      'prescribedFees',
      applicationForm.issuancePrescribedFees
        ? applicationForm.issuancePrescribedFees
        : 0
    );
  }, []);

  // State of the greater step enabled
  const [stepsEnabledState, setStepsEnabledState] = useState(5);
  const [applicationReviewState, setApplicationReviewState] = useState(5);

  useEffect(() => {
    //Steps management
    handleCurrentApplicationReviewStep(currentStep);
    stepsEnabled > currentStep && setStepsEnabledState(stepsEnabled);
    stepsEnabled == currentStep &&
      handleActiveApplicationReviewSteps(currentStep);
  }, []);
  useEffect(() => {
    setApplicationReviewState(applicationForm.status.id);
  }, [applicationForm.status.id]);
  useEffect(() => {
    stepsEnabled > currentStep && setStepsEnabledState(stepsEnabled);
  }, [stepsEnabled]);

  // Handle the validation and set the steps enabled
  useEffect(() => {
    // When the steps enabled is the same that the current step
    applicationReviewState > 2 &&
      stepsEnabledState == currentStep &&
      stepsEnabled == currentStep &&
      handleActiveApplicationReviewSteps(currentStep);

    // When the steps enabled is  greater than the current step
    applicationReviewState > 2 &&
      stepsEnabledState > currentStep &&
      handleActiveApplicationReviewSteps(stepsEnabledState);

    // When the validation of the current step is Invalid
    !(applicationReviewState > 2) &&
      handleActiveApplicationReviewSteps(currentStep);
  }, [applicationReviewState]);

  /**Handlers */
  // Handlers: Wizard
  const handleCurrentApplicationReviewStep = (step) => {
    dispatch(actSetCurrentApplicationReviewStep({ step: step }));
  };

  const handleActiveApplicationReviewSteps = (steps) => {
    dispatch(actSetActiveApplicationReviewSteps({ steps: steps }));
  };

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

  const handleSetIssuanceFeeMtnPdf = (base64) => {
    const { url } = useBase64ToBlobUrl(base64);
    window.open(url);
  };

  const handleGetIssuanceFeeMtn = () => {
    dispatch(
      actGetIssuanceFeeMTN(applicationForm.id, handleSetIssuanceFeeMtnPdf)
    );
  };

  // Handlers: grant application
  const handleGrantApplicationAfterPaymentApprove = () => {
    dispatch(
      actGrantApplication(
        applicationForm.id,
        handleShowModalAfterApproveSuccess
      )
    );
  };

  // Handlers: Modals
  // Modal approve sucess
  const handleCloseModalApproveSuccess = () => {
    handleShowModalApproveSuccess();
    navigateTo(`/applications`);
  };

  const handleShowModalAfterApproveSuccess = () => {
    handleShowModalApproveSuccess('Success!', 'Licence issued');
  };

  // When reset time
  const handleShowModalResetTimeSuccess = () => {
    handleShowModalApproveSuccess(
      'Success!',
      'The time for submit the Issuance Fee Payment was reset successfully'
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
      actExtendUploadIssuanceFeeTime(
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
      isAdvertising: 0,
      ...data,
    };
    dispatch(
      actApprovePayment(
        { applicationId: applicationForm.id, data: dataToSend },
        handleGrantApplicationAfterPaymentApprove
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
      isAdvertising: 0,
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
    promiseGrantApplication,
    promiseExtendUploadIssuanceFeeTime,
    promiseGetPrivateDocumentTrackingInformation,
    promiseGetIssuanceFeeMTN,

    profile,
    applicationForm,

    licenceTypes,

    handleDateFormat,

    handleGetPrivateDocumentView,
    handleGetIssuanceFeeMtn,

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

export default useApplicationReviewStep5;
