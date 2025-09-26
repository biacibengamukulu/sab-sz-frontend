import { useEffect, useState } from 'react';
import useComponentHooks from '..';
import useHelpers from '../../../helpers';
import useApi from '../../../api';
import useModels from '../../../models';
import _ from 'lodash';

const useApplicationReviewStep2 = () => {
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { usePromises, useNavigation, useFileManager } = useQuickFunctions();
  const { handleFileNameExtension } = useFileManager();
  const { navigateTo } = useNavigation();
  const { promiseInProgressArea: promiseUploadInspectionReport } = usePromises(
    'uploadInspectionReport'
  );
  const { promiseInProgressArea: promiseGetInspectionReport } = usePromises(
    'getInspectionReport'
  );
  const { promiseInProgressArea: promiseGetPrivateDocumentReport } =
    usePromises('getPrivateDocumentTrackingInformation');

  // Api
  const { useActions } = useApi();
  const { dispatch, useApplicationReviewActions, usePrivateDocumentsActions } =
    useActions();
  const {
    actSetCurrentApplicationReviewStep,
    actSetActiveApplicationReviewSteps,
    actResetFieldApplicationReview,
    actUploadInspectionReport,
    actGetInspectionReport,
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
  const { applicationFormSelector } = useApplicationFormSelectors();
  const { applicationReviewSelector, applicationReviewWizardSelector } =
    useApplicationReviewSelectors();

  const { profile, userRolesList } = useSelector(userSelector);
  const { applicationForm } = useSelector(applicationFormSelector);
  const { stepsEnabled, currentStep } = useSelector(
    applicationReviewWizardSelector
  );
  const { applicationReview } = useSelector(applicationReviewSelector);
  // hooks
  const { useModal } = useComponentHooks();
  const {
    modalState: modalStateInspectionUploadedSuccess,
    handleShowModal: handleShowModalInspectionUploadedSuccess,
  } = useModal();

  // React

  // State of the greater step enabled
  const [stepsEnabledState, setStepsEnabledState] = useState(2);
  const [applicationReviewState, setApplicationReviewState] = useState(2);
  const fileTypesPdf = ['application/pdf'];

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

  const onChangeFilePdf = ({
    event,
    remove,
    reset,
    id,
    handleResetReduxState,
  }) => {
    event.preventDefault();
    if (event.target.files.length > 0) {
      const { type } = event.target.files[0];
      if (!fileTypesPdf.some((s) => type.includes(s))) {
        alert('invalid document type');
        remove(reset, id, handleResetReduxState);
      } else {
        if (event.target.files[0].size > 2000000) {
          alert('Document too large, please try again with 2MB or less');
          remove(reset, id, handleResetReduxState);
        }
      }
    }
  };

  const handleResetFileState = (fieldId) => {
    dispatch(
      actResetFieldApplicationReview({ fieldName: fieldId, formStep: 3 })
    );
  };

  // Handlers: Modals
  // Modal approve sucess
  const handleCloseModalInspectionUploadSuccess = () => {
    handleShowModalInspectionUploadedSuccess();
    navigateTo(`/applications`);
  };

  const handleShowModalAfterInspectionUploadedSuccess = () => {
    handleShowModalInspectionUploadedSuccess(
      'Success!',
      'Inspection report uploaded successfully'
    );
  };

  // On submit for "Next" button
  const onSubmitInspectionReport = (data) => {
    // newStatusId = 5 -> Report approval
    const dataToSend = {
      applicationId: applicationForm.id,
      document: {
        ...data.inspectionDocument,
      },
    };
    dispatch(
      actUploadInspectionReport(
        dataToSend,
        handleShowModalAfterInspectionUploadedSuccess
      )
    );
  };
  // handler: comment title
  const handleUserRoleType = (roleIdRow) => {
    return _.find(userRolesList, (userRole) => userRole.id === roleIdRow).name;
  };
  const handleCommentTitle = () => {
    const commentBy = `${
      applicationForm.inspectionComment.commentMadeBy.name
    } ${applicationForm.inspectionComment.commentMadeBy?.surname} - ${
      applicationForm.inspectionComment.commentMadeBy.roleId &&
      handleUserRoleType(applicationForm.inspectionComment.commentMadeBy.roleId)
    }`;
    switch (applicationForm.status.id) {
      case 7:
        return `Application for changes required by ${commentBy}`;
      case 9:
        return `This Application was Rejected by the Eswatini Liquor Licensing`;
      case 13:
        return `Request for Issuance Fee Payment changes required by ${commentBy}`;
      case 15:
        return `Request for Advertising Fee Payment changes required by ${commentBy}`;
      case 18:
        return `Request for Inspection report changes required by ${commentBy}`;
      default:
        break;
    }
  };
  return {
    promiseGetPrivateDocumentReport,
    promiseUploadInspectionReport,
    promiseGetInspectionReport,
    applicationReview,
    fileTypesPdf,
    profile,
    applicationForm,

    handleGetPrivateDocumentView,
    handleFileNameExtension,
    onChangeFilePdf,
    handleResetFileState,

    modalStateInspectionUploadedSuccess,
    handleCloseModalInspectionUploadSuccess,

    onSubmitInspectionReport,
    handleCommentTitle,
  };
};

export default useApplicationReviewStep2;
