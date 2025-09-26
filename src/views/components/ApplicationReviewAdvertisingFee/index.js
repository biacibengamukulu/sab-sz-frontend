import React, { Suspense } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import useComponents from '..';
import {
  StyledAdvertisingFeeReviewContainer,
  StyledTimeLeftContainer,
  StyledTimeLeftComponent,
  StyledRowButtons,
  StyledButtonResetTime,
  StyledButtonComment,
  StyledButtonApprove,
  StyledTitleModal,
  StyledSubtitleModal,
  StyledChildContainerModal,
  StyledTextAreaField,
  // StyledSwitchField,
  StyledButtonModal,
  StyledFieldsAdvertisingFeeContainer,
  StyledFieldsAdvertisingFeeInnerContainer,
  StyledFieldsContainerMultiple,
  StyledFieldColumn,
  StyledFieldColumnTitle,
  StyledFieldColumnValue,
  StyledFieldsBorder,
} from './ApplicationReviewAdvertisingFee.styles';
import useControllers from '../../../controllers';
import useHelpers from '../../../helpers';

const ApplicationReviewAdvertisingFee = (props) => {
  const { children } = props;
  const { ActivityIndicator, Modal } = useComponents();

  // Assest

  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useValidators } = useQuickFunctions();
  const {
    applicationAdvertisingFeereviewSchemaValidator,
    modalCommentsSchemaValidator,
  } = useValidators();

  // Yup validator
  const {
    getValues: getValuesAdvertisingFeeReview,
    setValue: setValueAdvertisingFeeReview,

    formState: { isValid: isValidAdvertisingFeeReview },
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
  const { useApplicationReviewAdvertisingFee } = useComponentHooks();

  const {
    promiseApprovePayment,
    promiseRejectPayment,
    promiseExtendUploadDocumentationTime,
    // promiseGetPrivateDocumentTrackingInformation,
    // promiseGetAdvertisingFeeMTN,

    profile,
    applicationForm,

    licenceTypes,

    handleDateFormat,

    // handleGetPrivateDocumentView,
    // handleGetAdvertisingFeeMtn,

    modalStateApproveSuccess,
    handleCloseModalApproveSuccess,

    modalStateCommentsSent,
    handleCloseModalCommentsSent,

    modalStateComments,
    handleCloseModalComments,

    onResetTime,
    onSubmitApprove,
    onSubmitComment,
  } = useApplicationReviewAdvertisingFee(setValueAdvertisingFeeReview);

  return (
    <Suspense fallback={<ActivityIndicator />}>
      <StyledAdvertisingFeeReviewContainer>
        {(applicationForm.status.id === 2 ||
          applicationForm.status.id === 16) && (
          <StyledTimeLeftContainer>
            <StyledTimeLeftComponent
              timeExpiration={applicationForm.uploadDocumentExpires}
            />
            {applicationForm.status.id === 16 && profile.roleType.id === 1 && (
              <StyledButtonResetTime
                fullWidth={false}
                color="error"
                promiseLoading={promiseExtendUploadDocumentationTime}
                onClick={() => {
                  !promiseExtendUploadDocumentationTime
                    ? onResetTime()
                    : () => {};
                }}
              >
                Reset Time
              </StyledButtonResetTime>
            )}
          </StyledTimeLeftContainer>
        )}
        {applicationForm.status?.id > 13 && applicationForm.status?.id < 16 && (
          <StyledFieldsAdvertisingFeeContainer>
            <StyledFieldsAdvertisingFeeInnerContainer>
              <StyledFieldsContainerMultiple>
                <StyledFieldColumn>
                  <StyledFieldColumnTitle>
                    Type of licence
                  </StyledFieldColumnTitle>
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
                    {applicationForm.advertisingIssueDate
                      ? handleDateFormat(applicationForm.advertisingIssueDate)
                      : 'None'}
                  </StyledFieldColumnValue>
                </StyledFieldColumn>
              </StyledFieldsContainerMultiple>

              <StyledFieldsContainerMultiple>
                <StyledFieldColumn>
                  <StyledFieldColumnTitle>
                    Prescribed fees
                  </StyledFieldColumnTitle>
                  <StyledFieldColumnValue>
                    {`E ${
                      applicationForm.advertisingPrescribedFees ||
                      applicationForm.advertisingPrescribedFees === 0
                        ? applicationForm.advertisingPrescribedFees
                        : 'None'
                    }`}
                  </StyledFieldColumnValue>
                </StyledFieldColumn>
                <StyledFieldColumn></StyledFieldColumn>
                <StyledFieldColumn></StyledFieldColumn>
              </StyledFieldsContainerMultiple>

              <StyledFieldsBorder />

              {/* <StyledAdvertisingFeeActionsContainer>
                {applicationForm.typeOfPaymentSecondStep === 'pdf' ? (
                  <StyledAdvertisingFeeProofOfPaymentContainer>
                    <StyledFieldColumnTitle variant="body1">
                      Proof of Payment
                    </StyledFieldColumnTitle>
                    <StyledContainerIconViewContainer
                      onClick={
                        !promiseGetPrivateDocumentTrackingInformation
                          ? () =>
                              handleGetPrivateDocumentView(
                                applicationForm.advertisingProofOfPayment.name
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
                  </StyledAdvertisingFeeProofOfPaymentContainer>
                ) : (
                  <StyledAdvertisingFeeProofOfPaymentContainer>
                    <StyledFieldColumnTitle variant="body1">
                      Proof of Payment
                    </StyledFieldColumnTitle>
                    <StyledContainerIconViewContainer
                      onClick={() => {
                        !promiseGetAdvertisingFeeMTN
                          ? handleGetAdvertisingFeeMtn()
                          : () => {};
                      }}
                    >
                      {promiseGetAdvertisingFeeMTN ? (
                        <StyledCircularProgress />
                      ) : (
                        <IconOpenedEye size={1.5} />
                      )}
                    </StyledContainerIconViewContainer>
                  </StyledAdvertisingFeeProofOfPaymentContainer>
                )}

                {applicationForm.status?.id !== 2 && profile.roleType.id === 1 && (
                  <StyledAdvertisingFeeFieldReviewActions>
                    <TextFieldControlled
                      inputValue={
                        applicationForm.advertisingReceived &&
                        applicationForm.advertisingReceived
                      }
                      id={'amountReceived'}
                      placeholder={''}
                      label={'Amount received'}
                      name={'amountReceived'}
                      variant={'outlined'}
                      fullWidth={true}
                      control={controlAdvertisingFeeReview}
                      error={!!errorsAdvertisingFeeReview.amountReceived}
                      helperText={
                        errorsAdvertisingFeeReview?.amountReceived?.message
                      }
                    />
                    <TextFieldControlled
                      inputValue={
                        applicationForm.advertisingReceipt &&
                        applicationForm.advertisingReceipt
                      }
                      id={'receiptNumber'}
                      placeholder={''}
                      label={'Receipt No.'}
                      name={'receiptNumber'}
                      variant={'outlined'}
                      fullWidth={true}
                      control={controlAdvertisingFeeReview}
                      error={!!errorsAdvertisingFeeReview.advertisingReceipt}
                      helperText={
                        errorsAdvertisingFeeReview?.advertisingReceipt?.message
                      }
                    />
                  </StyledAdvertisingFeeFieldReviewActions>
                )}
              </StyledAdvertisingFeeActionsContainer> */}
            </StyledFieldsAdvertisingFeeInnerContainer>
          </StyledFieldsAdvertisingFeeContainer>
        )}
        {applicationForm.status?.id === 14 && profile.roleType.id === 1 && (
          <StyledRowButtons>
            <StyledButtonComment
              fullWidth={false}
              color="primary"
              colorLoading={'#FFFFFF'}
              onClick={handleCloseModalComments}
            >
              Deny with comments
            </StyledButtonComment>
            <StyledButtonApprove
              disabled={!isValidAdvertisingFeeReview}
              fullWidth={false}
              color="secondary"
              colorLoading={'#FFFFFF'}
              promiseLoading={promiseApprovePayment}
              onClick={() => {
                !promiseApprovePayment &&
                  onSubmitApprove(getValuesAdvertisingFeeReview());
              }}
            >
              Approve this payment
            </StyledButtonApprove>
          </StyledRowButtons>
        )}

        {children}
      </StyledAdvertisingFeeReviewContainer>
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
ApplicationReviewAdvertisingFee.propTypes = {
  children: PropTypes.any,
};

export default ApplicationReviewAdvertisingFee;
