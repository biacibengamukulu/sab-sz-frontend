import React, { Suspense } from 'react';
import useComponents from '..';
import useControllers from '../../../controllers';
import useHelpers from '../../../helpers';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  StyledApplicationFifthStepSection,
  StyledPaymentsMethodsInnerContainer,
  StyledPaymentAlreadyMadeItUpperContainer,
  StyledTimeLeftContainer,
  StyledTimeLeftComponent,
  StyledSectionDescriptionContainer,
  StyledTitleSection,
  // StyledSubtitleSection,
  StyledFieldsAdvertisingFeeInnerContainer,
  StyledFieldsContainerMultiple,
  StyledFieldColumn,
  StyledFieldColumnTitle,
  StyledFieldColumnValue,
  // StyledInputFileFieldControlled,
  // StyledCheckboxControlled,
  StyledRowButtons,
  StyledFieldRowBottom,
  // StyledFieldRowHidden,
  // StyledRowPhoneNumber,
  // StyledPhoneInputField,
  // StyledTypographyTooltip,
  // StyledButtonSaveAndContinue,
  StyledButtonContinue,
} from './ApplicationIssuanceFeeFrontUser.styles';
import TextFieldControlled from '../TextFieldControlled';

const ApplicationIssuanceFeeFrontUser = () => {
  const {
    ApplicationTrackingInformation,
    ActivityIndicator,
    // DropdownRadioButton,
    Modal,
    Typography,
    // TextFieldControlled,
    // TooltipField,
  } = useComponents();
  // Assest
  // const { useIcons } = useAssets();
  // const { iconOpenedEye: IconOpenedEye } = useIcons();

  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useValidators } = useQuickFunctions();
  const { applicationIssuanceFeeFrontUserSchemaValidator } = useValidators();

  // Hooks
  const { useComponentHooks } = useControllers();
  const { useApplicationIssuanceFeeFrontUser } = useComponentHooks();

  // Yup validator
  const {
    getValues: getValuesProofOfPayment,
    setValue: setValueProofOfPayment,
    control: controlProofOfPayment,
    formState: { errors: errorsProofOfPayment, isValid: isValidProofOfPayment },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(applicationIssuanceFeeFrontUserSchemaValidator),
  });

  const {
    promiseApprovePayment,
    promiseGrantApplication,
    // promiseGetPrivateDocumentTrackingInformation,
    // promiseGetIssuanceFeeMTN,

    natureOfLicences,
    handleListValue,
    // fileTypesPdf,

    handleDateFormat,

    // proofOfPaymentSubmittedBefore,
    // handleGetPrivateDocumentView,
    // handleGetIssuanceFeeMtn,

    // handleFileNameExtension,
    // onChangeFilePdf,
    // handleResetFileState,
    // handleSaveDraftFile,

    // defaultIndicative,
    // onChangeInputFieldPhone,
    // handleIndicative,
    // phoneIndicators,

    onSubmit,
    applicationForm,
    // applicationInfo,

    modalStateIssuanceFeeSubmit,
    handleCloseModalIssuanceFeeSubmitSuccess,

    goBack,
  } = useApplicationIssuanceFeeFrontUser(
    getValuesProofOfPayment,
    setValueProofOfPayment
  );

  return (
    <Suspense fallback={<ActivityIndicator />}>
      <StyledApplicationFifthStepSection>
        {applicationForm.issuanceFeeExpires &&
          (applicationForm.status.id === 10 ||
            applicationForm.status.id === 13 ||
            applicationForm.status.id === 17) && (
            <StyledTimeLeftContainer>
              <StyledTimeLeftComponent
                complementLabel={'to pay the issuance fee'}
                timeExpiration={applicationForm.issuanceFeeExpires}
              />
            </StyledTimeLeftContainer>
          )}
        <StyledSectionDescriptionContainer>
          <StyledTitleSection>Issuance fee payment</StyledTitleSection>
          <StyledFieldsAdvertisingFeeInnerContainer>
            <StyledFieldsContainerMultiple>
              <StyledFieldColumn>
                <StyledFieldColumnTitle>Licence nature</StyledFieldColumnTitle>
                <StyledFieldColumnValue>
                  {applicationForm.license_nature_type_id &&
                    handleListValue(
                      applicationForm.license_nature_type_id,
                      natureOfLicences
                    ).name}
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

              {/* {applicationForm.issuanceIssueDate ? (
                <StyledFieldColumn>
                  <StyledFieldColumnTitle>Date of issue</StyledFieldColumnTitle>
                  <StyledFieldColumnValue>
                    {applicationForm.issuanceIssueDate
                      ? handleDateFormat(applicationForm.issuanceIssueDate)
                      : 'None'}
                  </StyledFieldColumnValue>
                </StyledFieldColumn>
              ) : (
                <StyledFieldColumn></StyledFieldColumn>
              )} */}
              <StyledFieldsContainerMultiple>
                <StyledFieldColumn>
                  <StyledFieldColumnTitle>
                    Prescribed fees
                  </StyledFieldColumnTitle>
                  <StyledFieldColumnValue>
                    {`E ${
                      applicationForm.issuancePrescribedFees ||
                      applicationForm.issuancePrescribedFees === 0
                        ? applicationForm.issuancePrescribedFees
                        : 'None'
                    }`}
                  </StyledFieldColumnValue>
                </StyledFieldColumn>
              </StyledFieldsContainerMultiple>

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
          </StyledFieldsAdvertisingFeeInnerContainer>
          {/* {applicationForm.status.id !== 10 && (
            <StyledAdvertisingFeeActionsContainer>
              {applicationForm.typeOfPaymentFifthStep === 'pdf' &&
              applicationForm?.issueProofOfPayment?.name ? (
                <StyledAdvertisingFeeProofOfPaymentContainer>
                  <StyledFieldColumnTitle variant="body1">
                    Proof of Payment
                  </StyledFieldColumnTitle>
                  <StyledContainerIconViewContainer
                    onClick={
                      !promiseGetPrivateDocumentTrackingInformation &&
                      applicationForm?.issueProofOfPayment?.name
                        ? () =>
                            handleGetPrivateDocumentView(
                              proofOfPaymentSubmittedBefore.name
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
                    onClick={
                      !promiseGetIssuanceFeeMTN
                        ? () => handleGetIssuanceFeeMtn()
                        : () => {}
                    }
                  >
                    {promiseGetIssuanceFeeMTN ? (
                      <StyledCircularProgress />
                    ) : (
                      <IconOpenedEye size={1.5} />
                    )}
                  </StyledContainerIconViewContainer>
                </StyledAdvertisingFeeProofOfPaymentContainer>
              )}
            </StyledAdvertisingFeeActionsContainer>
          )} */}
        </StyledSectionDescriptionContainer>
        {applicationForm.status.id !== 17 && (
          <StyledPaymentsMethodsInnerContainer>
            {(applicationForm.status.id === 11 ||
              applicationForm.status.id === 12) && (
              <StyledPaymentAlreadyMadeItUpperContainer />
            )}
            {/* <DropdownRadioButton
              expanded={watchProofOfPayment('typeOfPaymentFifthStepMtn')}
              disabled={
                applicationForm.status.id === 11 ||
                applicationForm.status.id === 12
                  ? true
                  : watchProofOfPayment('typeOfPaymentFifthStepPdf')
              }
              // disabled={!watchDropdowns('isCheckMtn')}
              title={
                <StyledCheckboxControlled
                  id={'typeOfPaymentFifthStepMtn'}
                  name={'typeOfPaymentFifthStepMtn'}
                  defaultChecked={
                    applicationForm.typeOfPaymentFifthStep === 'mtn'
                      ? true
                      : false
                  }
                  label={
                    <Typography
                      color="neutral"
                      variant="body2"
                      className="StyledTypography"
                      sx={{
                        alignSelf: 'center',
                        fontSize: '14px',
                        lineHeight: '20px',
                      }}
                    >
                      MTN Mobile money
                    </Typography>
                  }
                  control={controlProofOfPayment}
                  iconType={'circular'}
                />
              }
            >
              <StyledFieldRowHidden>
                <StyledRowPhoneNumber>
                  <TextFieldControlled
                    inputValue={
                      applicationForm.payerCellphone &&
                      applicationForm.payerCellphone
                    }
                    placeholder={''}
                    id={'payerCellphone'}
                    label={' '}
                    control={controlProofOfPayment}
                    name={'payerCellphone'}
                    error={!!errorsProofOfPayment.payerCellphone}
                    helperText={errorsProofOfPayment?.payerCellphone?.message}
                  />
                </StyledRowPhoneNumber>
              </StyledFieldRowHidden>
              <StyledPhoneInputField
                id={'payerCellphoneVisual'}
                indicatorId={'payerCellphoneIndicator'}
                label={
                  <>
                    Cell phone
                    <TooltipField
                      title={
                        <StyledTypographyTooltip>
                          Lorem Ipsum is simply dummy text of the printing.
                        </StyledTypographyTooltip>
                      }
                      size={1.3333}
                    />
                  </>
                }
                inputValue={`${handleIndicative(
                  defaultIndicative(phoneIndicators).id,
                  applicationForm.payerCellphone
                    ? applicationForm.payerCellphone
                    : ''
                )}`}
                name={'payerCellphoneVisual'}
                control={controlProofOfPayment}
                onInputChange={onChangeInputFieldPhone}
                error={!!errorsProofOfPayment.payerCellphone}
                helperText={errorsProofOfPayment?.payerCellphone?.message}
              />
            </DropdownRadioButton>
            <DropdownRadioButton
              expanded={watchProofOfPayment('typeOfPaymentFifthStepPdf')}
              disabled={
                applicationForm.status.id === 11 ||
                applicationForm.status.id === 12
                  ? true
                  : watchProofOfPayment('typeOfPaymentFifthStepMtn')
              }
              title={
                <StyledCheckboxControlled
                  id={'typeOfPaymentFifthStepPdf'}
                  name={'typeOfPaymentFifthStepPdf'}
                  defaultChecked={
                    applicationForm.typeOfPaymentFifthStep === 'pdf'
                      ? true
                      : false
                  }
                  label={
                    <Typography
                      color="neutral"
                      variant="body2"
                      className="StyledTypography"
                      sx={{
                        fontSize: '14px',
                        lineHeight: '20px',
                      }}
                    >
                      Upload proof of payment
                    </Typography>
                  }
                  control={controlProofOfPayment}
                  iconType={'circular'}
                />
              }
            >
              <StyledInputFileFieldControlled
                id={'issueProofOfPayment'}
                name={'issueProofOfPayment'}
                label={''}
                variant={'outlined'}
                inputValue={handleFileNameExtension(
                  applicationForm.issueProofOfPayment
                )}
                control={controlProofOfPayment}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldProofOfPayment}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsProofOfPayment.issueProofOfPayment}
                helperText={errorsProofOfPayment?.issueProofOfPayment?.message}
              />
            </DropdownRadioButton> */}
            <TextFieldControlled
              inputValue={
                applicationForm.receiptNumber && applicationForm.receiptNumber
              }
              id={'receiptNumber'}
              placeholder={''}
              label={'Receipt No.'}
              name={'receiptNumber'}
              variant={'outlined'}
              fullWidth={true}
              control={controlProofOfPayment}
              error={!!controlProofOfPayment.receiptNumber}
              helperText={errorsProofOfPayment?.receiptNumber?.message}
            />
            <ApplicationTrackingInformation />

            <StyledFieldRowBottom>
              <Typography
                color="secondary"
                variant="body2"
                onClick={goBack}
                sx={{
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '-0.006em',
                  cursor: 'pointer',
                }}
              >
                Cancel
              </Typography>
              <StyledRowButtons>
                <StyledButtonContinue
                  disabled={!isValidProofOfPayment}
                  fullWidth={false}
                  color="primary"
                  colorLoading={'#FFFFFF'}
                  promiseLoading={
                    promiseApprovePayment || promiseGrantApplication
                  }
                  onClick={() => {
                    !(promiseApprovePayment || promiseGrantApplication)
                      ? onSubmit(getValuesProofOfPayment())
                      : () => {};
                  }}
                >
                  Submit
                </StyledButtonContinue>
              </StyledRowButtons>
            </StyledFieldRowBottom>
          </StyledPaymentsMethodsInnerContainer>
        )}
      </StyledApplicationFifthStepSection>

      <Modal
        type={'success'}
        showModal={modalStateIssuanceFeeSubmit.show}
        onClose={handleCloseModalIssuanceFeeSubmitSuccess}
        title={modalStateIssuanceFeeSubmit.title}
        description={modalStateIssuanceFeeSubmit.description}
      />
    </Suspense>
  );
};

export default ApplicationIssuanceFeeFrontUser;
