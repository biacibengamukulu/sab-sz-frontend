import React, { Suspense } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import useComponents from '..';
import {
  StyledApplicationReviewStep2Container,
  StyledInspectorContainer,
  StyledTitleInspectorReport,
  StyledUploadReportContainer,
  StyledAccordionActivityIndicator,
  StyledInputFileFieldControlled,
  StyledRowButtons,
  StyledButtonApprove,
  StyledDocumentsReportContainer,
  StyledDocumentsReportInnerContainer,
  StyledDocumentReporActions,
  StyledTitleReportSubmitted,
  StyledContainerIconView,
  StyledContainerIconDownload,
  StyledCommentsContainer,
  StyledCommentsInnerContainer,
  StyledCommentTitle,
  StyledCommentDescription,
} from './ApplicationReviewStep2.styles';
import useControllers from '../../../controllers';
import useHelpers from '../../../helpers';
import useAssets from '../../../assets';

const ApplicationReviewStep2 = (props) => {
  const { children } = props;
  const { useIcons } = useAssets();
  const {
    iconWarning: IconWarning,
    iconOpenedEye: IconOpenedEye,
    iconDownload: IconDownload,
  } = useIcons();
  const { ActivityIndicator, Modal } = useComponents();

  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useValidators } = useQuickFunctions();
  const { applicationInspectionReportSchemaValidator } = useValidators();

  // Yup validator
  const {
    control: controlInspectionReport,
    getValues: getValuesInspectionReport,
    resetField: resetFieldInspectionReport,
    formState: {
      errors: errorsInspectionReport,
      isValid: isValidInspectionReport,
    },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(applicationInspectionReportSchemaValidator),
  });
  // Hooks
  const { useComponentHooks } = useControllers();
  const { useApplicationReviewStep2 } = useComponentHooks();

  const {
    promiseGetPrivateDocumentReport,
    promiseUploadInspectionReport,
    promiseGetInspectionReport,
    applicationReview,
    profile,
    fileTypesPdf,
    applicationForm,

    handleGetPrivateDocumentView,
    handleFileNameExtension,
    onChangeFilePdf,
    handleResetFileState,

    modalStateInspectionUploadedSuccess,
    handleCloseModalInspectionUploadSuccess,

    onSubmitInspectionReport,
    handleCommentTitle,
  } = useApplicationReviewStep2();

  return (
    <Suspense fallback={<ActivityIndicator />}>
      <StyledApplicationReviewStep2Container>
        <StyledInspectorContainer>
          <StyledTitleInspectorReport>
            Compliance inspection sheet for liquor outlets
          </StyledTitleInspectorReport>
          {applicationForm.requestForChangesComment?.comment &&
            applicationForm.status.id === 18 &&
            profile.roleType.id === 2 && (
              <StyledCommentsContainer>
                <StyledCommentsInnerContainer>
                  <StyledCommentTitle>
                    <IconWarning size={1.2} />
                    {handleCommentTitle()}
                  </StyledCommentTitle>
                  <StyledCommentDescription>
                    {applicationForm.inspectionComment.comment}
                  </StyledCommentDescription>
                </StyledCommentsInnerContainer>
              </StyledCommentsContainer>
            )}
          <StyledUploadReportContainer>
            {(promiseGetInspectionReport ||
              promiseGetPrivateDocumentReport) && (
              <StyledAccordionActivityIndicator />
            )}
            {(applicationForm.status?.id === 4 ||
              applicationForm.status?.id === 5 ||
              applicationForm.status?.id === 18) &&
              profile.roleType.id === 2 && (
                <StyledInputFileFieldControlled
                  id={'inspectionDocument'}
                  name={'inspectionDocument'}
                  label={'Upload inspection report file'}
                  variant={'outlined'}
                  inputValue={handleFileNameExtension(
                    applicationReview.inspectionDocument
                  )}
                  control={controlInspectionReport}
                  fileTypes={fileTypesPdf}
                  handleResetReduxState={handleResetFileState}
                  resetField={resetFieldInspectionReport}
                  onInputChange={onChangeFilePdf}
                  // onSaveDraftById={handleSaveDraftFile}
                  error={!!errorsInspectionReport.inspectionDocument}
                  helperText={
                    errorsInspectionReport?.inspectionDocument?.message
                  }
                />
              )}

            {applicationReview?.inspectionDocument.name && (
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
            )}
          </StyledUploadReportContainer>
          {(applicationForm.status?.id === 4 ||
            applicationForm.status?.id === 5 ||
            applicationForm.status?.id === 18) &&
            profile.roleType.id === 2 && (
              <StyledRowButtons>
                <StyledButtonApprove
                  disabled={!isValidInspectionReport}
                  fullWidth={false}
                  color="secondary"
                  promiseLoading={promiseUploadInspectionReport}
                  colorLoading={'#FFFFFF'}
                  onClick={() => {
                    !promiseUploadInspectionReport &&
                      onSubmitInspectionReport(getValuesInspectionReport());
                  }}
                >
                  Submit Inspection Report
                </StyledButtonApprove>
              </StyledRowButtons>
            )}
        </StyledInspectorContainer>

        {children}
      </StyledApplicationReviewStep2Container>

      {/* modal sucess submit inspection report */}
      <Modal
        type={'success'}
        showModal={modalStateInspectionUploadedSuccess.show}
        onClose={handleCloseModalInspectionUploadSuccess}
        title={modalStateInspectionUploadedSuccess.title}
        description={modalStateInspectionUploadedSuccess.description}
      />
    </Suspense>
  );
};
ApplicationReviewStep2.propTypes = {
  children: PropTypes.any,
};

export default ApplicationReviewStep2;
