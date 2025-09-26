import { useEffect, useState } from 'react';
import useComponentHooks from '..';
import useHelpers from '../../../helpers';
import useApi from '../../../api';
import useModels from '../../../models';

const useApplicationReviewStep3 = () => {
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { usePromises, useNavigation } = useQuickFunctions();
  const { navigateTo } = useNavigation();

  const { promiseInProgressArea: promiseGetInspectionReport } = usePromises(
    'getInspectionReport'
  );
  const { promiseInProgressArea: promiseApproveApplicationStepRequirements } =
    usePromises('approveApplicationStepRequirements');
  const { promiseInProgressArea: promiseGetPrivateDocumentReport } =
    usePromises('getPrivateDocumentTrackingInformation');
  const { promiseInProgressArea: promiseSendComment } =
    usePromises('sendComment');

  // Api
  const { useActions } = useApi();
  const {
    dispatch,
    useApplicationReviewActions,
    useCommentsActions,
    usePrivateDocumentsActions,
    useApplicationFormActions,
  } = useActions();
  const {
    actSetCurrentApplicationReviewStep,
    actSetActiveApplicationReviewSteps,
    actGetInspectionReport,
    actApproveApplication,
  } = useApplicationReviewActions();
  const { actSendComment } = useCommentsActions();
  const { actGetPrivateDocumentTrackingInformation } =
    usePrivateDocumentsActions();
  const { actGetApplicationByIdFromReview } = useApplicationFormActions();
  // Models
  const { useSelectors } = useModels();
  const {
    useSelector,
    useUserSelectors,
    useApplicationFormSelectors,
    useApplicationReviewSelectors,
  } = useSelectors();
  const { userSelector } = useUserSelectors();
  const { applicationFormSelector } = useApplicationFormSelectors();
  const { applicationReviewSelector, applicationReviewWizardSelector } =
    useApplicationReviewSelectors();

  const { profile } = useSelector(userSelector);
  const { applicationForm } = useSelector(applicationFormSelector);
  const { stepsEnabled, currentStep } = useSelector(
    applicationReviewWizardSelector
  );
  const { applicationReview } = useSelector(applicationReviewSelector);
  // hooks
  const { useModal } = useComponentHooks();
  const {
    modalState: modalStateReportApprovalSuccess,
    handleShowModal: handleShowModalReportApprovalSuccess,
  } = useModal();
  const {
    modalState: modalStateComments,
    handleShowModal: handleShowModalComments,
  } = useModal();

  // React

  // State of the greater step enabled
  const [stepsEnabledState, setStepsEnabledState] = useState(3);
  const [applicationReviewState, setApplicationReviewState] = useState(3);
  const [sentToApplicantState, setSentToApplicantState] = useState(false);

  useEffect(() => {
    //Steps management
    handleCurrentApplicationReviewStep(currentStep);
    stepsEnabled > currentStep && setStepsEnabledState(stepsEnabled);
    stepsEnabled == currentStep &&
      handleActiveApplicationReviewSteps(currentStep);

    // inspection report
    applicationForm.id &&
      applicationForm.inspectionDocument?.name &&
      dispatch(actGetInspectionReport({ applicationId: applicationForm.id }));
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
      handleActiveApplicationReviewSteps(currentStep + 1);

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

  // Handlers: Modals
  // Modal approve sucess
  const handleCloseModalReportApprovalSuccess = () => {
    handleShowModalReportApprovalSuccess();
    sentToApplicantState
      ? navigateTo('/applications')
      : handleCurrentApplicationReviewStep(4);
  };

  const handleShowModalAfterReportApprovalSuccess = () => {
    handleShowModalReportApprovalSuccess(
      'Success!',
      'Inspection report approved. Application sent for Board Adjudication'
    );
  };
  const handleShowModalAfterCommentsSentToFrontuser = () => {
    handleCloseModalComments();
    handleShowModalReportApprovalSuccess('Success!', 'Application rejected');
  };
  const handleGetApplicationFormAfterApprove = () => {
    dispatch(
      actGetApplicationByIdFromReview(
        { id: applicationForm.id, date: applicationForm.date },
        handleShowModalAfterReportApprovalSuccess
      )
    );
  };

  // Modal sent comment
  const handleCloseModalComments = () => {
    handleShowModalComments();

    // navigateTo(`/home`);
  };

  // On submit for "Next" button
  const onSubmitReportApproval = () => {
    // newStatusId = 6 -> Submitted for vote
    const dataToSend = {
      applicationId: applicationForm.id,
      newStatusId: 6,
    };
    dispatch(
      actApproveApplication(dataToSend, handleGetApplicationFormAfterApprove)
    );
  };

  // On submit for "Deny" button
  const onSubmitDeny = (data) => {
    /**
     * applicationStatusId change to 7 when the comment is sent to appliacant
     */
    setSentToApplicantState(true);

    const dataToSend = {
      applicationId: applicationForm.id,
      comment: data.textAreaComments,
      sendFrontUserNotification: 0,
      applicationStatusId: 18,
    };
    dispatch(
      actSendComment(
        { data: dataToSend, resetField: 'textAreaComments' },
        handleShowModalAfterCommentsSentToFrontuser
      )
    );
  };

  return {
    promiseGetPrivateDocumentReport,
    promiseGetInspectionReport,
    promiseApproveApplicationStepRequirements,
    promiseSendComment,
    applicationReview,
    profile,
    applicationForm,

    handleGetPrivateDocumentView,

    modalStateReportApprovalSuccess,
    handleCloseModalReportApprovalSuccess,

    modalStateComments,
    handleCloseModalComments,

    onSubmitReportApproval,
    onSubmitDeny,
  };
};

export default useApplicationReviewStep3;
