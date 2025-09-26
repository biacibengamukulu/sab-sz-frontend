import { useEffect, useState } from 'react';
import useActions from '../../../api/actions';
import useModels from '../../../models';
import _ from 'lodash';
import useComponentHooks from '..';
import useHelpers from '../../../helpers';
const useInternalComments = (setValue) => {
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useNavigation, useFileManager, usePromises } = useQuickFunctions();
  const { navigateTo } = useNavigation();
  const { fileTypesPdf, onChangeFilePdf } = useFileManager();
  const { promiseInProgressArea: promiseGetPrivateCommentDocument } =
    usePromises('getPrivateCommentDocument');
  const { promiseInProgressArea: promiseGetApplicationComments } = usePromises(
    'getApplicationComments'
  );
  const { promiseInProgressArea: promiseSendComment } =
    usePromises('sendComment');
  const { promiseInProgressArea: promiseSendCommentReply } =
    usePromises('sendCommentReply');

  // Actions
  const { dispatch, useCommentsActions, usePrivateDocumentsActions } =
    useActions();
  const { actGetApplicationComments, actSendComment, actSendCommentReply } =
    useCommentsActions();
  const { actGetPrivateCommentDocument } = usePrivateDocumentsActions();

  const { useSelectors } = useModels();
  const {
    useSelector,
    useUserSelectors,
    useCommentsSelectors,
    useApplicationFormSelectors,
  } = useSelectors();
  const { userSelector } = useUserSelectors();
  const { commentsSelector } = useCommentsSelectors();
  const { applicationFormSelector } = useApplicationFormSelectors();
  const { profile, userRolesList } = useSelector(userSelector);
  const { applicationForm } = useSelector(applicationFormSelector);
  const { listOfComments } = useSelector(commentsSelector);

  // hooks
  const { useModal } = useComponentHooks();
  const {
    modalState: modalSuccessVotingPendingState,
    handleShowModal: handleShowModalSuccessVotingPending,
  } = useModal();

  // react
  const [sideCommentsStatus, setSideCommentsStatus] = useState(false);

  const [lastObjectionCommentId, setLastObjectionCommentId] = useState(0);

  useEffect(() => {
    listOfComments?.length && handleLastObjectionComment(listOfComments);
  }, [listOfComments]);

  // Handlers: private document
  const handleGetPrivateLink = (url) => {
    window.open(url);
  };

  const handleGetPrivateDocumentView = (documentName, commentId) => {
    dispatch(
      actGetPrivateCommentDocument(
        {
          documentName: documentName.replace(/\.[^/.]+$/, '') + '.pdf',
          commentId: commentId,
        },
        handleGetPrivateLink
      )
    );
  };

  const handleLastObjectionComment = (commentsArray) => {
    const objectionComments = _.filter(
      commentsArray,
      (currentComment) => currentComment.isObjection === 1
    );
    const lastObjectionComment = objectionComments.length
      ? objectionComments[objectionComments.length - 1].id
      : 0;

    setLastObjectionCommentId(lastObjectionComment);
  };
  const handleUserRoleType = (roleIdRow) => {
    return _.find(userRolesList, (userRole) => userRole.id === roleIdRow).name;
  };
  const handleNotificationTime = (notificationDate) => {
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const currentCommentDate = new Date(notificationDate);

    const commentYear = currentCommentDate.getFullYear();
    const commentMont = monthNames[currentCommentDate.getMonth()];
    const commentDay = currentCommentDate.getDate();

    return `${commentMont}. ${commentDay}, ${commentYear}`;
  };

  const handleGetCommentsAfter = (resetField) => {
    setValue(resetField, '');
    dispatch(
      actGetApplicationComments({
        applicationId: applicationForm.id,
        withFrontComments: 0,
        withReplies: 1,
      })
    );
  };
  const openSideCommentsSuccess = () => {
    setSideCommentsStatus(true);
  };
  const openSideComments = () => {
    !sideCommentsStatus &&
      dispatch(
        actGetApplicationComments(
          {
            applicationId: applicationForm.id,
            withFrontComments: 0,
            withReplies: 1,
          },
          openSideCommentsSuccess
        )
      );
  };

  const closeSideComments = () => {
    setSideCommentsStatus(false);
  };

  const handleOnCloseModalSuccessVotingPending = () => {
    handleShowModalSuccessVotingPending();
    navigateTo(`/applications`);
  };
  const handleSuccessVotingPending = () => {
    handleShowModalSuccessVotingPending(
      'Reply sent!',
      'Application status changed to Voting Pending'
    );
  };

  const onSubmitReply = (data, commentId) => {
    const dataReply = {
      reply: data[`commentReply${commentId}`],
      commentId: commentId,
      document: data[`documentReply${commentId}`]?.data
        ? data[`documentReply${commentId}`]
        : { name: '', data: '' },
    };
    // Only if CEO or Manager/administrator
    // (profile.roleType.id === 2 || profile.roleType.id === 6) &&
    //   delete dataReply.document;

    commentId === lastObjectionCommentId && applicationForm.status.id === 14
      ? dispatch(
          actSendCommentReply(
            { data: dataReply, resetField: `commentReply${commentId}` },
            handleSuccessVotingPending
          )
        )
      : dispatch(
          actSendCommentReply(
            { data: dataReply, resetField: `commentReply${commentId}` },
            handleGetCommentsAfter
          )
        );
  };
  const onSubmitComments = (data) => {
    const dataComments = {
      comment: data.comment,
      applicationId: applicationForm.id,
      sendFrontUserNotification: 0,
      applicationStatusId: 7,
      document: { name: '', data: '' },
    };

    dispatch(
      actSendComment(
        { data: dataComments, resetField: 'comment' },
        handleGetCommentsAfter
      )
    );
  };
  return {
    promiseGetApplicationComments,
    promiseGetPrivateCommentDocument,
    promiseSendComment,
    promiseSendCommentReply,
    applicationForm,
    sideCommentsStatus,
    openSideComments,
    closeSideComments,
    lastObjectionCommentId,
    profile,
    handleNotificationTime,
    listOfComments,
    handleUserRoleType,
    onChangeFilePdf,
    fileTypesPdf,
    handleGetPrivateDocumentView,
    modalSuccessVotingPendingState,
    handleOnCloseModalSuccessVotingPending,

    onSubmitComments,
    onSubmitReply,
  };
};

export default useInternalComments;
