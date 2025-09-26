import React, { Suspense } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import useComponents from '..';
import {
  StyledApplicationReviewStep1Container,
  StyledRowButtons,
  StyledButtonComment,
  StyledButtonApprove,
  StyledTitleModal,
  StyledSubtitleModal,
  StyledChildContainerModal,
  StyledTextAreaField,
  StyledButtonModal,
} from './ApplicationReviewStep1.styles';
import useControllers from '../../../controllers';
import useHelpers from '../../../helpers';

const ApplicationReviewStep1 = (props) => {
  const { children } = props;
  const { ActivityIndicator, Modal } = useComponents();

  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useValidators } = useQuickFunctions();
  const { modalCommentsSchemaValidator } = useValidators();

  // Yup validator
  const {
    control: controlComments,
    getValues: getValuesComment,
    formState: { errors: errorsComments, isValid: isValidComments },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(modalCommentsSchemaValidator),
  });
  // Hooks
  const { useComponentHooks } = useControllers();
  const { useApplicationReviewStep1 } = useComponentHooks();

  const {
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
  } = useApplicationReviewStep1();

  return (
    <Suspense fallback={<ActivityIndicator />}>
      <StyledApplicationReviewStep1Container>
        {children}
        {applicationForm.status?.id === 3 && profile.roleType.id === 1 && (
          <StyledRowButtons>
            {applicationForm.status?.id !== 7 && (
              <StyledButtonComment
                fullWidth={false}
                variant="outlined"
                color="secondary"
                onClick={handleCloseModalComments}
              >
                Comment
              </StyledButtonComment>
            )}
            <StyledButtonApprove
              // disabled={!isValid}
              fullWidth={false}
              color="primary"
              colorLoading={'#FFFFFF'}
              promiseLoading={promiseApproveApplicationStepRequirements}
              onClick={() => {
                !promiseApproveApplicationStepRequirements && onSubmitApprove();
              }}
            >
              Approve
            </StyledButtonApprove>
          </StyledRowButtons>
        )}
      </StyledApplicationReviewStep1Container>
      <Modal
        color={'#394D94'}
        type={'child'}
        showModal={modalStateComments.show}
        onClose={handleCloseModalComments}
      >
        <StyledTitleModal variant={'h2'} color={'success'}>
          Comments
        </StyledTitleModal>

        <StyledSubtitleModal variant={'body1'}>
          About this application
        </StyledSubtitleModal>

        <StyledChildContainerModal>
          <StyledTextAreaField
            id={'textAreaComments'}
            label={'The application was rejected because:'}
            name={'textAreaComments'}
            placeholder={'Comments'}
            control={controlComments}
            error={!!errorsComments.textAreaComments}
            helperText={errorsComments?.textAreaComments?.message}
            multiline
          />

          <StyledButtonModal
            color="secondary"
            disabled={!isValidComments}
            fullWidth={false}
            colorLoading={'#FFFFFF'}
            promiseLoading={promiseSendComment}
            onClick={() => {
              !promiseSendComment && onSubmitComment(getValuesComment());
            }}
          >
            Send Comment
          </StyledButtonModal>
        </StyledChildContainerModal>
      </Modal>

      {/* modal sucess approve */}
      <Modal
        type={'success'}
        showModal={modalStateApproveSuccess.show}
        onClose={handleCloseModalApproveSuccess}
        title={modalStateApproveSuccess.title}
        description={modalStateApproveSuccess.description}
      />

      {/* modal comments sent */}
      <Modal
        type={'success'}
        showModal={modalStateCommentsSent.show}
        onClose={handleCloseModalCommentsSent}
        title={modalStateCommentsSent.title}
        description={modalStateCommentsSent.description}
      />
    </Suspense>
  );
};
ApplicationReviewStep1.propTypes = {
  children: PropTypes.any,
};

export default ApplicationReviewStep1;
