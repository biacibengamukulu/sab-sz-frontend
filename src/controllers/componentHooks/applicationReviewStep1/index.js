import { useEffect, useState } from 'react';
import useComponentHooks from '..';
import useHelpers from '../../../helpers';
import useApi from '../../../api';
import useModels from '../../../models';

const useApplicationReviewStep1 = () => {
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { usePromises, useNavigation } = useQuickFunctions();
  const { navigateTo } = useNavigation();
  const { promiseInProgressArea: promiseApproveApplicationStepRequirements } =
    usePromises('approveApplicationStepRequirements');
  const { promiseInProgressArea: promiseSendComment } =
    usePromises('sendComment');

  // Api
  const { useActions } = useApi();
  const { dispatch, useApplicationReviewActions, useCommentsActions } =
    useActions();
  const {
    actSetCurrentApplicationReviewStep,
    actSetActiveApplicationReviewSteps,
    actApproveApplication,
  } = useApplicationReviewActions();
  const { actSendComment } = useCommentsActions();
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
  const { applicationReviewWizardSelector } = useApplicationReviewSelectors();

  const { profile } = useSelector(userSelector);
  const { applicationForm } = useSelector(applicationFormSelector);
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

  // State of the greater step enabled
  const [stepsEnabledState, setStepsEnabledState] = useState(1);
  const [applicationReviewState, setApplicationReviewState] = useState(1);

  const [sentToApplicantState, setSentToApplicantState] = useState(false);

  useEffect(() => {
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

  // Handlers: Modals
  // Modal approve sucess
  const handleCloseModalApproveSuccess = () => {
    handleShowModalApproveSuccess();
    handleCurrentApplicationReviewStep(2);
    navigateTo(`/applications`);
  };

  const handleShowModalAfterApproveSuccess = () => {
    handleShowModalApproveSuccess(
      'Success!',
      'Application meets the basic requirements of Phase 1'
    );
  };
  // Modal success comments sent
  const handleCloseModalCommentsSent = () => {
    handleShowModalCommentsSent();
    sentToApplicantState && navigateTo(`/applications`);
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

  // On submit for "Next" button
  const onSubmitApprove = () => {
    // newStatusId = 4 -> Report pending
    const dataToSend = {
      applicationId: applicationForm.id,
      newStatusId: 4,
    };
    dispatch(
      actApproveApplication(dataToSend, handleShowModalAfterApproveSuccess)
    );
  };

  // On submit for "Draft" button
  const onSubmitComment = (data) => {
    /**
     * applicationStatusId change to 7 when the comment is sent to appliacant
     */
    const dataToSend = {
      applicationId: applicationForm.id,
      comment: data.textAreaComments,
      sendFrontUserNotification: 1,
      applicationStatusId: 7,
    };
    setSentToApplicantState(true);
    dispatch(
      actSendComment(
        { data: dataToSend, resetField: 'textAreaComments' },
        handleShowModalAfterCommentsSentToFrontuser
      )
    );
  };

  return {
    promiseApproveApplicationStepRequirements,
    promiseSendComment,
    profile,
    applicationForm,

    modalStateApproveSuccess,
    handleCloseModalApproveSuccess,

    modalStateCommentsSent,
    handleCloseModalCommentsSent,

    modalStateComments,
    handleCloseModalComments,

    onSubmitApprove,
    onSubmitComment,
  };
};

export default useApplicationReviewStep1;
