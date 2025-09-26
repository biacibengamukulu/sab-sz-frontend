import React, { Suspense } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import useComponents from '..';
import {
  StyledApplicationReviewstep5Container,
  StyledTimeLeftContainer,
  StyledTimeLeftComponent,
  StyledButtonResetTime,
  StyledRowButtons,
  StyledButtonComment,
  StyledButtonApprove,
  StyledTitleModal,
  StyledSubtitleModal,
  StyledChildContainerModal,
  StyledTextAreaField,
  // StyledSwitchField,
  StyledButtonModal,
  // StyledFieldsIssuanceFeeContainer,
  // StyledFieldsIssuanceFeeInnerContainer,
  // StyledFieldsContainerMultiple,
  // StyledFieldColumn,
  // StyledFieldColumnTitle,
  // StyledFieldColumnValue,
  // StyledFieldsBorder,
  // StyledIssuanceFeeActionsContainer,
  // StyledIssuanceFeeProofOfPaymentContainer,
  // StyledContainerIconViewContainer,
  // StyledIssuanceFeeFieldReviewActions,
  // StyledCircularProgress,
} from './ApplicationReviewStep5.styles';
import useControllers from '../../../controllers';
import useHelpers from '../../../helpers';
// import useAssets from '../../../assets';

const ApplicationReviewStep5 = (props) => {
  const { children } = props;
  const { ActivityIndicator, Modal } = useComponents();

  // Assest
  // const { useIcons } = useAssets();
  // const { iconOpenedEye: IconOpenedEye } = useIcons();

  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useValidators } = useQuickFunctions();
  const {
    applicationAdvertisingFeereviewSchemaValidator,
    modalCommentsSchemaValidator,
  } = useValidators();

  // Yup validator
  const {
    // control: controlIssuanceFeeReview,
    getValues: getValuesIssuanceFeeReview,
    setValue: setValueIsuanceFeeReview,

    formState: {
      // errors: errorsIssuanceFeeReview,
      isValid: isValidIssuanceFeeReview,
    },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(applicationAdvertisingFeereviewSchemaValidator),
  });
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
  const { useApplicationReviewStep5 } = useComponentHooks();

  const {
    promiseApprovePayment,
    promiseRejectPayment,
    promiseGrantApplication,
    promiseExtendUploadIssuanceFeeTime,
    // promiseGetPrivateDocumentTrackingInformation,
    // promiseGetIssuanceFeeMTN,

    profile,
    applicationForm,

    // licenceTypes,

    // handleDateFormat,

    // handleGetPrivateDocumentView,
    // handleGetIssuanceFeeMtn,

    modalStateApproveSuccess,
    handleCloseModalApproveSuccess,

    modalStateCommentsSent,
    handleCloseModalCommentsSent,

    modalStateComments,
    handleCloseModalComments,

    onResetTime,
    onSubmitApprove,
    onSubmitComment,
  } = useApplicationReviewStep5(setValueIsuanceFeeReview);

  return (
    <Suspense fallback={<ActivityIndicator />}>
      <StyledApplicationReviewstep5Container>
        {
          <StyledTimeLeftContainer>
            <StyledTimeLeftComponent
              complementLabel={'to pay the issuance fee'}
              timeExpiration={applicationForm.issuanceFeeExpires}
            />
            {applicationForm.status.id === 17 && profile.roleType.id === 1 && (
              <StyledButtonResetTime
                fullWidth={false}
                color="error"
                colorLoading="#FFFFFF"
                promiseLoading={promiseExtendUploadIssuanceFeeTime}
                onClick={() => {
                  !promiseExtendUploadIssuanceFeeTime
                    ? onResetTime()
                    : () => {};
                }}
              >
                Reset Time
              </StyledButtonResetTime>
            )}
          </StyledTimeLeftContainer>
        }
        {/* <StyledFieldsIssuanceFeeContainer>
          <StyledFieldsIssuanceFeeInnerContainer>
            <StyledFieldsContainerMultiple>
              <StyledFieldColumn>
                <StyledFieldColumnTitle>Type of licence</StyledFieldColumnTitle>
                <StyledFieldColumnValue>
                  {applicationForm.licenceType &&
                    licenceTypes[applicationForm.licenceType - 1]?.name}
                </StyledFieldColumnValue>
              </StyledFieldColumn>

              <StyledFieldColumn>
                <StyledFieldColumnTitle>
                  Licensed to sell
                </StyledFieldColumnTitle>
                <StyledFieldColumnValue>
                  {applicationForm.licenseToSell
                    ? applicationForm.licenseToSell
                    : 'None'}
                </StyledFieldColumnValue>
              </StyledFieldColumn>

              <StyledFieldColumn>
                <StyledFieldColumnTitle>Date of issue</StyledFieldColumnTitle>
                <StyledFieldColumnValue>
                  {applicationForm.issuanceIssueDate
                    ? handleDateFormat(applicationForm.issuanceIssueDate)
                    : 'None'}
                </StyledFieldColumnValue>
              </StyledFieldColumn>
            </StyledFieldsContainerMultiple>

            <StyledFieldsContainerMultiple>
              <StyledFieldColumn>
                <StyledFieldColumnTitle>Prescribed fees</StyledFieldColumnTitle>
                <StyledFieldColumnValue>
                  {`E ${
                    applicationForm.issuancePrescribedFees ||
                    applicationForm.issuancePrescribedFees === 0
                      ? applicationForm.issuancePrescribedFees
                      : 'None'
                  }`}
                </StyledFieldColumnValue>
              </StyledFieldColumn>
              <StyledFieldColumn>
                <StyledFieldColumnTitle>
                  Payable on or before
                </StyledFieldColumnTitle>
                <StyledFieldColumnValue>
                  {applicationForm.issuanceFeeExpires
                    ? handleDateFormat(applicationForm.issuanceFeeExpires)
                    : 'None'}
                </StyledFieldColumnValue>
              </StyledFieldColumn>
              <StyledFieldColumn></StyledFieldColumn>
            </StyledFieldsContainerMultiple>

            <StyledFieldsBorder />

            {applicationForm.status?.id === 12 && profile.roleType.id === 1 && (
              <StyledIssuanceFeeActionsContainer>
                {applicationForm.typeOfPaymentFifthStep === 'pdf' ? (
                  <StyledIssuanceFeeProofOfPaymentContainer>
                    <StyledFieldColumnTitle variant="body1">
                      Proof of Payment
                    </StyledFieldColumnTitle>
                    <StyledContainerIconViewContainer
                      onClick={() =>
                        !promiseGetPrivateDocumentTrackingInformation
                          ? handleGetPrivateDocumentView(
                              applicationForm.issueProofOfPayment?.name
                            )
                          : () => {}
                      }
                    >
                      {promiseGetPrivateDocumentTrackingInformation ? (
                        <StyledCircularProgress />
                      ) : (
                        <IconOpenedEye size={1.5} />
                      )}
                    </StyledContainerIconViewContainer>
                  </StyledIssuanceFeeProofOfPaymentContainer>
                ) : (
                  <StyledIssuanceFeeProofOfPaymentContainer>
                    <StyledFieldColumnTitle variant="body1">
                      Proof of Payment
                    </StyledFieldColumnTitle>
                    <StyledContainerIconViewContainer
                      onClick={() => {
                        !promiseGetIssuanceFeeMTN
                          ? handleGetIssuanceFeeMtn()
                          : () => {};
                      }}
                    >
                      {promiseGetIssuanceFeeMTN ? (
                        <StyledCircularProgress />
                      ) : (
                        <IconOpenedEye size={1.5} />
                      )}
                    </StyledContainerIconViewContainer>
                  </StyledIssuanceFeeProofOfPaymentContainer>
                )}

                <StyledIssuanceFeeFieldReviewActions>
                  <TextFieldControlled
                    inputValue={''}
                    id={'amountReceived'}
                    placeholder={''}
                    label={'Amount received'}
                    name={'amountReceived'}
                    variant={'outlined'}
                    fullWidth={true}
                    control={controlIssuanceFeeReview}
                    error={!!errorsIssuanceFeeReview.amountReceived}
                    helperText={
                      errorsIssuanceFeeReview?.amountReceived?.message
                    }
                  />
                  <TextFieldControlled
                    inputValue={''}
                    id={'receiptNumber'}
                    placeholder={''}
                    label={'Receipt No.'}
                    name={'receiptNumber'}
                    variant={'outlined'}
                    fullWidth={true}
                    control={controlIssuanceFeeReview}
                    error={!!errorsIssuanceFeeReview.receiptNumber}
                    helperText={errorsIssuanceFeeReview?.receiptNumber?.message}
                  />
                </StyledIssuanceFeeFieldReviewActions>
              </StyledIssuanceFeeActionsContainer>
            )}
          </StyledFieldsIssuanceFeeInnerContainer>
        </StyledFieldsIssuanceFeeContainer> */}
        {applicationForm.status?.id === 12 && profile.roleType.id === 1 && (
          <StyledRowButtons>
            <StyledButtonComment
              fullWidth={false}
              color="primary"
              onClick={handleCloseModalComments}
            >
              Deny with comments
            </StyledButtonComment>
            <StyledButtonApprove
              disabled={!isValidIssuanceFeeReview}
              fullWidth={false}
              color="secondary"
              colorLoading={'#FFFFFF'}
              promiseLoading={promiseApprovePayment || promiseGrantApplication}
              onClick={() => {
                !promiseApprovePayment &&
                  !promiseGrantApplication &&
                  onSubmitApprove(getValuesIssuanceFeeReview());
              }}
            >
              Approve this application
            </StyledButtonApprove>
          </StyledRowButtons>
        )}

        {children}
      </StyledApplicationReviewstep5Container>
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
            label={'The advertising fee payment was rejected because:'}
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
            promiseLoading={promiseRejectPayment}
            onClick={() => {
              !promiseRejectPayment && onSubmitComment(getValuesComment());
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
ApplicationReviewStep5.propTypes = {
  children: PropTypes.any,
};

export default ApplicationReviewStep5;
