import { useEffect, useState } from 'react';
import useComponentHooks from '..';
import useHelpers from '../../../helpers';
import useApi from '../../../api';
import useModels from '../../../models';

const useApplicationReviewStep4 = () => {
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { usePromises, useNavigation } = useQuickFunctions();
  const { navigateTo } = useNavigation();
  const { promiseInProgressArea: promiseApproveApplicationStepRequirements } =
    usePromises('approveApplicationStepRequirements');
  const { promiseInProgressArea: promiseRejectApplication } =
    usePromises('rejectApplication');

  // Api
  const { useActions } = useApi();
  const {
    dispatch,
    useApplicationReviewActions,
    usePrivateDocumentsActions,
    useApplicationFormActions,
  } = useActions();
  const {
    actSetCurrentApplicationReviewStep,
    actSetActiveApplicationReviewSteps,
    actGetInspectionReport,
    actApproveApplication,
    actRejectApplication,
  } = useApplicationReviewActions();
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
    modalState: modalStateBoardMemberApprovalSuccess,
    handleShowModal: handleShowModalBoarMemberApprovalSuccess,
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

  // State of the greater step enabled
  const [stepsEnabledState, setStepsEnabledState] = useState(4);
  const [applicationReviewState, setApplicationReviewState] = useState(4);

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
  const handleCloseModalBoardMemberApprovalSuccess = () => {
    handleShowModalBoarMemberApprovalSuccess();
    navigateTo(`/applications`);
  };

  const handleShowModalAfterBoardMemberApprovalSuccess = () => {
    handleShowModalBoarMemberApprovalSuccess(
      'Success!',
      'Application approved'
    );
  };
  // Modal success comments sent
  const handleCloseModalCommentsSent = () => {
    handleShowModalCommentsSent();
    navigateTo(`/applications`);
  };

  const handleShowModalAfterRejectApplication = () => {
    handleCloseModalComments();
    handleShowModalCommentsSent('Success!', 'Application rejected');
  };

  // Modal sent comment
  const handleCloseModalComments = () => {
    handleShowModalComments();
    // navigateTo(`/home`);
  };

  const handleGetApplicationFormAfterApprove = () => {
    dispatch(
      actGetApplicationByIdFromReview(
        { id: applicationForm.id, date: applicationForm.date },
        handleShowModalAfterBoardMemberApprovalSuccess
      )
    );
  };
  // On submit for "Next" button
  const onSubmitBoardMemberApproval = () => {
    // newStatusId = 6 -> Submitted for vote
    const dataToSend = {
      applicationId: applicationForm.id,
      newStatusId: 10,
    };
    dispatch(
      actApproveApplication(dataToSend, handleGetApplicationFormAfterApprove)
    );
  };

  // On submit for "Deny" button
  const onSubmitDeny = (data) => {
    /**
     * application reject
     */
    const dataToSend = {
      comment: data.textAreaComments,
    };
    dispatch(
      actRejectApplication(
        { applicationId: applicationForm.id, data: dataToSend },
        handleShowModalAfterRejectApplication
      )
    );
  };

  return {
    promiseApproveApplicationStepRequirements,
    promiseRejectApplication,
    applicationReview,
    profile,
    applicationForm,

    handleGetPrivateDocumentView,

    modalStateBoardMemberApprovalSuccess,
    handleCloseModalBoardMemberApprovalSuccess,

    modalStateCommentsSent,
    handleCloseModalCommentsSent,

    modalStateComments,
    handleCloseModalComments,

    onSubmitBoardMemberApproval,
    onSubmitDeny,
  };
};

export default useApplicationReviewStep4;
