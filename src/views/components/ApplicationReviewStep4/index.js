import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import useComponents from '..';
import {
  StyledApplicationReviewStep4Container,
  StyledBoardMemeberAdjudcationContainer,
  StyledTitleReportApproval,
  StyledRowButtons,
  StyledButtonApprove,
  StyledDescriptionBoardMemberApproval,
  StyledTitleModal,
  StyledSubtitleModal,
  StyledChildContainerModal,
  StyledTextAreaField,
  StyledButtonModal,
} from './ApplicationReviewStep4.styles';
import useControllers from '../../../controllers';
import useHelpers from '../../../helpers';

const ApplicationReviewStep4 = (props) => {
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
  const { useApplicationReviewStep4 } = useComponentHooks();

  const {
    promiseApproveApplicationStepRequirements,
    promiseRejectApplication,
    profile,
    applicationForm,

    modalStateBoardMemberApprovalSuccess,
    handleCloseModalBoardMemberApprovalSuccess,

    modalStateCommentsSent,
    handleCloseModalCommentsSent,

    modalStateComments,
    handleCloseModalComments,

    onSubmitBoardMemberApproval,
    onSubmitDeny,
  } = useApplicationReviewStep4();

  return (
    <Suspense fallback={<ActivityIndicator />}>
      <StyledApplicationReviewStep4Container>
        <StyledBoardMemeberAdjudcationContainer>
          <StyledTitleReportApproval>
            Board adjudication
          </StyledTitleReportApproval>
          <StyledDescriptionBoardMemberApproval variant="body1">
            Licensing admin will input the outcome of the board decision into the system.
          </StyledDescriptionBoardMemberApproval>

          {applicationForm.status?.id === 6 && profile.roleType.id === 1 && (
            <StyledRowButtons>
              <StyledButtonApprove
                fullWidth={false}
                color="primary"
                onClick={() => {
                  !promiseApproveApplicationStepRequirements &&
                    handleCloseModalComments();
                }}
              >
                Deny with comments
              </StyledButtonApprove>
              <StyledButtonApprove
                fullWidth={false}
                color="secondary"
                colorLoading={'#FFFFFF'}
                promiseLoading={promiseApproveApplicationStepRequirements}
                onClick={() => {
                  !promiseApproveApplicationStepRequirements &&
                    onSubmitBoardMemberApproval();
                }}
              >
                Approve this application
              </StyledButtonApprove>
            </StyledRowButtons>
          )}
        </StyledBoardMemeberAdjudcationContainer>

        {children}
      </StyledApplicationReviewStep4Container>
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
            promiseLoading={promiseRejectApplication}
            onClick={() => {
              !promiseRejectApplication && onSubmitDeny(getValuesComment());
            }}
          >
            Deny application
          </StyledButtonModal>
        </StyledChildContainerModal>
      </Modal>
      {/* modal sucess submit inspection report */}
      <Modal
        type={'success'}
        showModal={modalStateBoardMemberApprovalSuccess.show}
        onClose={handleCloseModalBoardMemberApprovalSuccess}
        title={modalStateBoardMemberApprovalSuccess.title}
        description={modalStateBoardMemberApprovalSuccess.description}
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
ApplicationReviewStep4.propTypes = {
  children: PropTypes.any,
};

export default ApplicationReviewStep4;
