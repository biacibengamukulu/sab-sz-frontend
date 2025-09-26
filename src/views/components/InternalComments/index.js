import React from 'react';
import PropTypes from 'prop-types';
import useAssets from '../../../assets';
import useControllers from '../../../controllers';
import _ from 'lodash';
import { useForm } from 'react-hook-form';
// Styles
import {
  StyledButtonComments,
  StyledExternalContainer,
  StyledPopUpPromiseInProgressContainer,
  StyledCircularProgress,
  StyledAccordionComment,
  StyledCommentRow,
  StyledInputFileFieldControlled,
  StyledCommentObjectionLabelContainer,
  StyledCommentObjectionLabel,
  StyledTypographyTooltip,
  StyledCommentTitleRow,
  StyledCommentTitle,
  StyledCommentName,
  StyledCommentUserRole,
  StyledCommentTime,
  StyledCommentTimeReply,
  StyledButtonReply,
  StyledRowTime,
  StyledButtonReplyLabel,
  StyledButtonSendReply,
  StyledReplyIconContainer,
  StyledReplyContainer,
  StyledReplyRow,
  StyledReplyInfoName,
  StyledFullComment,
  StyledButtonSendComment,
  StyledTextAreaFieldComment,
  StyledContainerSidePopUp,
  StyledCommentsTittleContainer,
  StyledContainerInnerSideContainer,
  StyledCommentsTittle,
  StyledCommentsIconClose,
  StyledReplyInfoRow,
  StyledReplyInfo,
  StyledPdfViewContainer,
  StyledPdfName,
  StyledContainerIconViewContainer,
  StyledRepliesTitle,
} from './InternalComments.styles';
import useComponents from '..';

const InternalComments = (props) => {
  const { className } = props;
  const { TooltipField, Modal } = useComponents();

  const { useIcons } = useAssets();
  const {
    iconClose: IconClose,
    iconReply: IconReply,
    iconOpenedEye: IconOpenedEye,
    iconTooltipWarning: IconTooltipWarning,
  } = useIcons();

  const { useComponentHooks } = useControllers();
  const { useInternalComments } = useComponentHooks();
  const {
    control,
    setValue,
    getValues,
    resetField,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });
  const {
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
  } = useInternalComments(setValue);

  return (
    <div className={className}>
      <StyledButtonComments
        fullWidth={false}
        color={'secondary'}
        variant={'outlined'}
        promiseLoading={promiseGetApplicationComments && !sideCommentsStatus}
        onClick={
          !promiseGetApplicationComments
            ? () => {
                openSideComments();
              }
            : () => {}
        }
      >
        Make/View Comments
      </StyledButtonComments>
      <StyledExternalContainer status={sideCommentsStatus}>
        <StyledContainerSidePopUp status={sideCommentsStatus}>
          {(promiseGetApplicationComments ||
            promiseGetPrivateCommentDocument) && (
            <StyledPopUpPromiseInProgressContainer>
              <StyledCircularProgress />
            </StyledPopUpPromiseInProgressContainer>
          )}
          <StyledCommentsTittleContainer>
            <StyledCommentsTittle>
              Comments about this application
            </StyledCommentsTittle>
            <StyledCommentsIconClose onClick={closeSideComments}>
              <IconClose size={0.5} color={'#6D7074'} />
            </StyledCommentsIconClose>
          </StyledCommentsTittleContainer>
          <StyledContainerInnerSideContainer>
            {listOfComments?.length !== 0 &&
              _.map(listOfComments, (comment, key) => {
                return (
                  <StyledAccordionComment
                    isObjection={comment.isObjection}
                    isLastObjectionComment={
                      comment.id === lastObjectionCommentId &&
                      applicationForm.status.id === 14
                    }
                    key={key}
                    colorArrow={
                      comment.id === lastObjectionCommentId &&
                      applicationForm.status.id === 14
                        ? '#CE1F13'
                        : '#B6BBC1'
                    }
                    title={
                      <StyledCommentRow>
                        {comment.isObjection === 1 && (
                          <StyledCommentObjectionLabelContainer>
                            <StyledCommentObjectionLabel
                              isLastObjectionComment={
                                comment.id === lastObjectionCommentId &&
                                applicationForm.status.id === 14
                              }
                            >
                              {comment.id === lastObjectionCommentId &&
                              applicationForm.status.id === 14
                                ? 'Last objection comment'
                                : 'Objection comment'}
                            </StyledCommentObjectionLabel>
                            {comment.id === lastObjectionCommentId &&
                              applicationForm.status.id === 14 &&
                              profile.roleType.id !== 1 && (
                                <TooltipField
                                  Icon={IconTooltipWarning}
                                  title={
                                    <StyledTypographyTooltip>
                                      {' '}
                                      Reply to this comment to change
                                      application status to Voting Pending
                                    </StyledTypographyTooltip>
                                  }
                                  size={1.3333}
                                />
                              )}
                          </StyledCommentObjectionLabelContainer>
                        )}
                        <StyledCommentTitleRow>
                          <StyledCommentTitle>
                            <StyledCommentName>
                              {`${comment.commentBy.name[0]}. ${comment.commentBy.surname}`}
                            </StyledCommentName>
                            <StyledCommentUserRole>
                              {handleUserRoleType(comment.commentBy.roleId)}
                            </StyledCommentUserRole>
                          </StyledCommentTitle>
                          <StyledRowTime>
                            <StyledCommentTime>
                              {handleNotificationTime(comment.commentedAt)}
                            </StyledCommentTime>
                            {!(
                              comment.id === lastObjectionCommentId &&
                              applicationForm.status.id === 14 &&
                              profile.roleType.id === 1
                            ) && (
                              <StyledButtonReply>
                                <StyledReplyIconContainer>
                                  <IconReply
                                    color={
                                      comment.id === lastObjectionCommentId &&
                                      applicationForm.status.id === 14
                                        ? '#CE1F13'
                                        : '#6D7074'
                                    }
                                  />
                                </StyledReplyIconContainer>
                                <StyledButtonReplyLabel
                                  isLastObjectionComment={
                                    comment.id === lastObjectionCommentId &&
                                    applicationForm.status.id === 14
                                  }
                                >
                                  Reply
                                </StyledButtonReplyLabel>
                              </StyledButtonReply>
                            )}
                          </StyledRowTime>
                        </StyledCommentTitleRow>
                      </StyledCommentRow>
                    }
                  >
                    <StyledCommentRow>
                      <StyledFullComment>{comment.comment}</StyledFullComment>
                      {comment.document?.name && (
                        <StyledPdfViewContainer>
                          <StyledPdfName variant="body1">
                            Comment Document
                          </StyledPdfName>
                          <StyledContainerIconViewContainer
                            onClick={() =>
                              handleGetPrivateDocumentView(
                                comment.document.name,
                                comment.id
                              )
                            }
                          >
                            <IconOpenedEye size={1.5} />
                          </StyledContainerIconViewContainer>
                        </StyledPdfViewContainer>
                      )}
                      {comment.replies?.length !== 0 && (
                        <StyledRepliesTitle>Replies:</StyledRepliesTitle>
                      )}
                      {comment.replies?.length !== 0 &&
                        _.map(comment.replies, (reply, key) => {
                          return (
                            <StyledReplyRow key={key}>
                              <StyledFullComment>
                                {reply.reply}
                              </StyledFullComment>
                              {reply.document?.name && (
                                <StyledPdfViewContainer>
                                  <StyledPdfName variant="body1">
                                    Reply Document
                                  </StyledPdfName>
                                  <StyledContainerIconViewContainer
                                    onClick={() =>
                                      handleGetPrivateDocumentView(
                                        reply.document.name,
                                        comment.id
                                      )
                                    }
                                  >
                                    <IconOpenedEye size={1.5} />
                                  </StyledContainerIconViewContainer>
                                </StyledPdfViewContainer>
                              )}
                              <StyledCommentTitleRow>
                                <StyledCommentTitle>
                                  <StyledReplyInfoName>
                                    {`Replied by ${reply.repliedBy.name[0]}. ${
                                      reply.repliedBy.surname
                                    } - ${handleUserRoleType(
                                      reply.repliedBy.roleId
                                    )}`}
                                  </StyledReplyInfoName>
                                </StyledCommentTitle>
                                <StyledRowTime>
                                  <StyledCommentTimeReply>
                                    {handleNotificationTime(reply.repliedAt)}
                                  </StyledCommentTimeReply>
                                </StyledRowTime>
                              </StyledCommentTitleRow>
                            </StyledReplyRow>
                          );
                        })}
                      {!(
                        comment.id === lastObjectionCommentId &&
                        applicationForm.status.id === 14 &&
                        profile.roleType.id === 1
                      ) && (
                        <StyledReplyContainer>
                          <StyledReplyInfoRow>
                            <IconReply color={'#6D7074'} />
                            <StyledReplyInfo>
                              {`Reply to ${comment.commentBy.name[0]}. ${comment.commentBy.surname}`}
                            </StyledReplyInfo>
                          </StyledReplyInfoRow>

                          <StyledTextAreaFieldComment
                            id={`commentReply${comment.id}`}
                            name={`commentReply${comment.id}`}
                            placeholder={'Your reply'}
                            control={control}
                            multiline
                          />
                          {comment.id === lastObjectionCommentId &&
                            applicationForm.status.id === 14 && (
                              <StyledInputFileFieldControlled
                                id={`documentReply${comment.id}`}
                                inputValue={{ name: '', data: '' }}
                                label={''}
                                name={`documentReply${comment.id}`}
                                variant={'outlined'}
                                control={control}
                                onInputChange={onChangeFilePdf}
                                fileTypes={fileTypesPdf}
                                resetField={resetField}
                                error={!!errors.documentReply}
                                helperText={errors?.documentReply?.message}
                              />
                            )}
                          <StyledButtonSendReply
                            color={
                              comment.id === lastObjectionCommentId &&
                              applicationForm.status.id === 14
                                ? 'error'
                                : 'primary'
                            }
                            fullWidth={false}
                            colorLoading={'#FFFFFF'}
                            promiseLoading={
                              promiseSendCommentReply && sideCommentsStatus
                            }
                            onClick={
                              !promiseSendCommentReply
                                ? () => onSubmitReply(getValues(), comment.id)
                                : () => {}
                            }
                          >
                            Send Reply
                          </StyledButtonSendReply>
                        </StyledReplyContainer>
                      )}
                    </StyledCommentRow>
                  </StyledAccordionComment>
                );
              })}
            <StyledReplyContainer>
              <StyledTextAreaFieldComment
                id={'comment'}
                name={'comment'}
                placeholder={'Write a comment about this application'}
                control={control}
                multiline
              />
              <StyledButtonSendComment
                fullWidth={false}
                promiseLoading={promiseSendComment && sideCommentsStatus}
                colorLoading={'#FFFFFF'}
                onClick={
                  !promiseSendComment
                    ? () => onSubmitComments(getValues())
                    : () => {}
                }
              >
                Send Comment
              </StyledButtonSendComment>
            </StyledReplyContainer>
          </StyledContainerInnerSideContainer>
        </StyledContainerSidePopUp>
      </StyledExternalContainer>
      {/* Modal when comments are sent */}
      <Modal
        type={'success'}
        showModal={modalSuccessVotingPendingState.show}
        onClose={handleOnCloseModalSuccessVotingPending}
        title={modalSuccessVotingPendingState.title}
        description={modalSuccessVotingPendingState.description}
      />
    </div>
  );
};

InternalComments.propTypes = {
  className: PropTypes.string,
};

export default InternalComments;
