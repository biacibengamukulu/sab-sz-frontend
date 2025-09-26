import React, { Suspense } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import useComponents from '..';
import {
  StyledApplicationReviewStep2Container,
  StyledReportApprovalContainer,
  StyledTitleReportApproval,
  StyledUploadReportContainer,
  StyledAccordionActivityIndicator,
  StyledRowButtons,
  StyledButtonApprove,
  StyledDocumentsReportContainer,
  StyledDocumentsReportInnerContainer,
  StyledDocumentReporActions,
  StyledTitleReportSubmitted,
  StyledContainerIconView,
  StyledContainerIconDownload,
  StyledTitleModal,
  StyledSubtitleModal,
  StyledChildContainerModal,
  StyledTextAreaField,
  StyledButtonModal,
} from './ApplicationReviewStep3.styles';
import useControllers from '../../../controllers';
import useAssets from '../../../assets';
import useHelpers from '../../../helpers';

const ApplicationReviewStep3 = (props) => {
  const { children } = props;
  const { useIcons } = useAssets();
  const { iconOpenedEye: IconOpenedEye, iconDownload: IconDownload } =
    useIcons();
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
  const { useApplicationReviewStep3 } = useComponentHooks();

  const {
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
  } = useApplicationReviewStep3();

  return (
    <Suspense fallback={<ActivityIndicator />}>
      <StyledApplicationReviewStep2Container>
        <StyledReportApprovalContainer>
          <StyledTitleReportApproval>
            Report submitted
          </StyledTitleReportApproval>
          <StyledUploadReportContainer>
            {(promiseGetInspectionReport ||
              promiseGetPrivateDocumentReport) && (
              <StyledAccordionActivityIndicator />
            )}

            <StyledDocumentsReportContainer>
              <StyledDocumentsReportInnerContainer>
                <StyledTitleReportSubmitted variant="body1">
                  Inspection report submitted
                </StyledTitleReportSubmitted>
                <StyledDocumentReporActions>
                  <StyledContainerIconView
                    onClick={() =>
                      handleGetPrivateDocumentView(
                        applicationReview?.inspectionDocument.name
                      )
                    }
                  >
                    <IconOpenedEye size={1.5} />
                  </StyledContainerIconView>
                  <StyledContainerIconDownload
                    download={'Inspection Report'}
                    href={applicationReview?.inspectionDocument.data}
                    title="Download pdf document"
                  >
                    <IconDownload size={1} />
                  </StyledContainerIconDownload>
                </StyledDocumentReporActions>
              </StyledDocumentsReportInnerContainer>
            </StyledDocumentsReportContainer>
          </StyledUploadReportContainer>
          {/* Only secretary */}
          {applicationForm.status?.id === 5 && profile.roleType.id === 1 && (
            <StyledRowButtons>
              <StyledButtonApprove
                fullWidth={false}
                color="primary"
                onClick={() => {
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
                    onSubmitReportApproval();
                }}
              >
                Approve Inspection Report
              </StyledButtonApprove>
            </StyledRowButtons>
          )}
        </StyledReportApprovalContainer>

        {children}
      </StyledApplicationReviewStep2Container>

      {/* modal sucess submit inspection report */}
      <Modal
        type={'success'}
        showModal={modalStateReportApprovalSuccess.show}
        onClose={handleCloseModalReportApprovalSuccess}
        title={modalStateReportApprovalSuccess.title}
        description={modalStateReportApprovalSuccess.description}
      />
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
            label={'The inspection report was rejected because:'}
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
            onClick={
              !promiseSendComment
                ? () => onSubmitDeny(getValuesComment())
                : () => {}
            }
          >
            Send Comment
          </StyledButtonModal>
        </StyledChildContainerModal>
      </Modal>
    </Suspense>
  );
};
ApplicationReviewStep3.propTypes = {
  children: PropTypes.any,
};

export default ApplicationReviewStep3;
