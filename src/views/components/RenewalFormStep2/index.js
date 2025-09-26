import React, { Suspense } from 'react';
import useComponents from '..';
import useControllers from '../../../controllers';
import useHelpers from '../../../helpers';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  StyledApplicationSecondStepSection,
  StyledPaymentsMethodsContainer,
  StyledPaymentAlreadyMadeItContainer,
  StyledPaymentsMethodsInnerContainer,
  StyledPaymentAlreadyMadeItUpperContainer,
  StyledAdviceIconContainer,
  StyledPaymentAlreadyMadeItLabel,
  StyledInputFileFieldControlled,
  StyledCheckboxControlled,
  StyledRowButtons,
  StyledFieldRowBottom,
  StyledButtonSaveAndContinue,
  StyledButtonContinue,
  StyledTitleModal,
  StyledChildContainerModal,
  StyledDescriptionModal,
  StyledButtonModal,
  StyledTitleModalCancel,
  StyledSubtitleModalCancel,
  StyledButtonModalCancel,
  StyledFieldRowHidden,
  StyledTypographyTooltip,
  StyledRowPhoneNumber,
  StyledPhoneInputField,
} from './RenewalFormStep2.styles';
import useAssets from '../../../assets';

const RenewalFormStep2 = () => {
  const {
    ActivityIndicator,
    DropdownRadioButton,
    Modal,
    Typography,
    TextFieldControlled,
    TooltipField,
  } = useComponents();

  const { useIcons } = useAssets();
  const { iconWarning: IconWarning } = useIcons();

  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useValidators } = useQuickFunctions();
  const { applicationFormStep2ProofOfPaymentSchemaValidator } = useValidators();

  // Hooks
  const { useComponentHooks } = useControllers();
  const { useRenewalFormStep2 } = useComponentHooks();

  // Yup validator
  // const {
  //   control,
  //   watch: watchDropdowns,
  //   setValue: setValueDropDowns,
  // } = useForm({
  //   mode: 'onChange',
  // });
  const {
    getValues: getValuesProofOfPayment,
    watch: watchProofOfPayment,
    setValue: setValueProofOfPayment,
    control: controlProofOfPayment,
    resetField: resetFieldProofOfPayment,
    formState: { errors: errorsProofOfPayment, isValid: isValidProofOfPayment },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(applicationFormStep2ProofOfPaymentSchemaValidator),
  });

  const {
    promiseUpdateAdvertisingFeeApplicationSubmit,
    promiseSaveAdvertisingFeeApplicationSubmit,
    promiseSaveUserApplication,
    promiseUpdateUserApplication,
    promiseCancelApplication,

    fileTypesPdf,

    handleFileNameExtension,
    onChangeFilePdf,
    handleResetFileState,
    handleSaveDraftFile,

    onSubmit,
    onSubmitDraft,
    applicationForm,

    modalStateDraft,
    handleCloseModalDraftSuccesApplications,
    handleCloseModalDraftSuccesHome,

    modalStateCancel,
    handleCancelApplicationAndCloseModal,
    handleCloseModalCancel,

    modalStateAdvertisingFeeSubmitSuccess,
    handleCloseModalAdvertisingFeeSubmitSucces,

    defaultIndicative,
    onChangeInputFieldPhone,
    handleIndicative,
    phoneIndicators,
  } = useRenewalFormStep2(
    watchProofOfPayment,
    isValidProofOfPayment,
    getValuesProofOfPayment,
    setValueProofOfPayment,
    resetFieldProofOfPayment
  );
  return (
    <Suspense fallback={<ActivityIndicator />}>
      <StyledApplicationSecondStepSection>
        <StyledPaymentsMethodsContainer>
          {(applicationForm.status.id === 2 ||
            applicationForm.status.id === 7) && (
            <StyledPaymentAlreadyMadeItContainer>
              <StyledAdviceIconContainer>
                <IconWarning size={0.8} color={'#494b4d'} />
              </StyledAdviceIconContainer>
              <StyledPaymentAlreadyMadeItLabel>
                Advertising Fee Payment Already Made It
              </StyledPaymentAlreadyMadeItLabel>
            </StyledPaymentAlreadyMadeItContainer>
          )}

          <StyledPaymentsMethodsInnerContainer>
            {(applicationForm.status.id === 2 ||
              applicationForm.status.id === 7) && (
              <StyledPaymentAlreadyMadeItUpperContainer />
            )}
            <DropdownRadioButton
              expanded={watchProofOfPayment('typeOfPaymentSecondStepMtn')}
              disabled={
                applicationForm.status.id === 2 ||
                applicationForm.status.id === 7
                  ? true
                  : watchProofOfPayment('typeOfPaymentSecondStepPdf')
              }
              title={
                <StyledCheckboxControlled
                  id={'typeOfPaymentSecondStepMtn'}
                  name={'typeOfPaymentSecondStepMtn'}
                  defaultChecked={
                    applicationForm.typeOfPaymentSecondStep === 'mtn'
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
                      applicationForm.payerCellphone
                        ? applicationForm.payerCellphone
                        : ''
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
              expanded={watchProofOfPayment('typeOfPaymentSecondStepPdf')}
              disabled={
                applicationForm.status.id === 2 ||
                applicationForm.status.id === 7
                  ? true
                  : watchProofOfPayment('typeOfPaymentSecondStepMtn')
              }
              title={
                <StyledCheckboxControlled
                  id={'typeOfPaymentSecondStepPdf'}
                  name={'typeOfPaymentSecondStepPdf'}
                  defaultChecked={
                    applicationForm.typeOfPaymentSecondStep === 'pdf'
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
                id={'advertisingProofOfPayment'}
                name={'advertisingProofOfPayment'}
                label={''}
                variant={'outlined'}
                inputValue={handleFileNameExtension(
                  applicationForm.advertisingProofOfPayment
                )}
                control={controlProofOfPayment}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldProofOfPayment}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsProofOfPayment.advertisingProofOfPayment}
                helperText={
                  errorsProofOfPayment?.advertisingProofOfPayment?.message
                }
              />
            </DropdownRadioButton>
          </StyledPaymentsMethodsInnerContainer>
        </StyledPaymentsMethodsContainer>
        <StyledFieldRowBottom>
          <Typography
            color="secondary"
            variant="body2"
            onClick={handleCloseModalCancel}
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
            {(applicationForm.status?.id < 3 || !applicationForm.id) && (
              <StyledButtonSaveAndContinue
                fullWidth={false}
                variant="outlined"
                color="secondary"
                promiseLoading={
                  promiseSaveUserApplication || promiseUpdateUserApplication
                }
                onClick={() => {
                  !promiseSaveUserApplication && !promiseUpdateUserApplication
                    ? onSubmitDraft(getValuesProofOfPayment())
                    : () => {};
                }}
              >
                Save as a draft
              </StyledButtonSaveAndContinue>
            )}
            <StyledButtonContinue
              disabled={
                applicationForm.status.id === 2 ||
                applicationForm.status.id === 7
                  ? false
                  : !isValidProofOfPayment ||
                    (!watchProofOfPayment('typeOfPaymentSecondStepPdf') &&
                      !watchProofOfPayment('typeOfPaymentSecondStepMtn'))
              }
              fullWidth={false}
              color="primary"
              colorLoading={'#FFFFFF'}
              promiseLoading={
                promiseSaveAdvertisingFeeApplicationSubmit ||
                promiseUpdateAdvertisingFeeApplicationSubmit
              }
              onClick={() => {
                !promiseSaveAdvertisingFeeApplicationSubmit &&
                !promiseUpdateAdvertisingFeeApplicationSubmit &&
                !promiseSaveUserApplication &&
                !promiseUpdateUserApplication
                  ? onSubmit(getValuesProofOfPayment())
                  : () => {};
              }}
            >
              {applicationForm.status?.id === 1 ||
              applicationForm.status?.id === 15 ||
              !applicationForm.id
                ? 'Submit Advertising Fee Payment'
                : 'Next'}
            </StyledButtonContinue>
          </StyledRowButtons>
        </StyledFieldRowBottom>
      </StyledApplicationSecondStepSection>
      <Modal
        color={'#394d94'}
        type={'child'}
        showModal={modalStateDraft.show}
        onClose={handleCloseModalDraftSuccesApplications}
      >
        <StyledTitleModal variant={'h2'} color={'success'}>
          {modalStateDraft.title}
        </StyledTitleModal>
        <StyledChildContainerModal>
          <StyledDescriptionModal variant={'body2'}>
            {modalStateDraft.description}
          </StyledDescriptionModal>
          <StyledButtonModal
            onClick={handleCloseModalDraftSuccesHome}
            fullWidth={false}
            sx={{
              fontSize: '16px',
              lineHeight: '22px',
            }}
          >
            Go to home page
          </StyledButtonModal>
        </StyledChildContainerModal>
      </Modal>
      <Modal
        color={'#ce1f13'}
        type={'child'}
        showModal={modalStateCancel.show}
        onClose={handleCloseModalCancel}
      >
        <StyledTitleModalCancel variant={'h2'} color={'#CE1F13'}>
          Are you sure about canceling your application?
        </StyledTitleModalCancel>

        <StyledSubtitleModalCancel variant={'body1'}>
          In clicking on cancelling, you are confirming to delete this application and all the information captured. 
          You will not be able to retrieve lost information after submitting this cancellation.
        </StyledSubtitleModalCancel>
        <StyledChildContainerModal>
          <StyledButtonModalCancel
            fullWidth={false}
            color={'error'}
            promiseLoading={promiseCancelApplication}
            onClick={() => {
              !promiseCancelApplication &&
                handleCancelApplicationAndCloseModal();
            }}
            sx={{
              fontSize: '16px',
              lineHeight: '22px',
            }}
          >
            Yes, Cancel It
          </StyledButtonModalCancel>
        </StyledChildContainerModal>
      </Modal>
      <Modal
        type={'success'}
        showModal={modalStateAdvertisingFeeSubmitSuccess.show}
        onClose={handleCloseModalAdvertisingFeeSubmitSucces}
        title={modalStateAdvertisingFeeSubmitSuccess.title}
        description={modalStateAdvertisingFeeSubmitSuccess.description}
      />
    </Suspense>
  );
};

export default RenewalFormStep2;
