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
  //StyledPaymentAlreadyMadeItUpperContainer,
  StyledAdviceIconContainer,
  StyledPaymentAlreadyMadeItLabel,
  // StyledInputFileFieldControlled,
  // StyledCheckboxControlled,
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
  // StyledFieldRowHidden,
  // StyledTypographyTooltip,
  // StyledRowPhoneNumber,
  // StyledPhoneInputField,
  StyledContainerPayBtn,
  StyledPayText,
 // StyledPayBtn,
 // StyledPayLink,
  StyledContainerText,
  StyledPaymentsTitle
} from './ApplicationFormRenewStep2.styles';
import useAssets from '../../../assets';

const ApplicationFormRenewStep2 = () => {
  const {
    ActivityIndicator,
    // DropdownRadioButton,
    Modal,
    Typography,
    TextFieldControlled,
    // TooltipField,
  } = useComponents();

  const { useIcons } = useAssets();
  const { iconWarning: IconWarning, iconInfoCircle:IconInfoCircle } = useIcons();

  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useValidators } = useQuickFunctions();
  const { applicationFormStep2ProofOfPaymentSchemaValidator } = useValidators();

  // Hooks
  const { useComponentHooks } = useControllers();
  const { useApplicationFormRenewStep2 } = useComponentHooks();

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
   /// watch: watchProofOfPayment,
    setValue: setValueProofOfPayment,
    control: controlProofOfPayment,
    //resetField: resetFieldProofOfPayment,
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

    // fileTypesPdf,

    // handleFileNameExtension,
    // onChangeFilePdf,
    // handleResetFileState,
    // handleSaveDraftFile,

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

    // defaultIndicative,
    // onChangeInputFieldPhone,
    // handleIndicative,
    // phoneIndicators,
  } = useApplicationFormRenewStep2(
    //watchProofOfPayment,
    isValidProofOfPayment,
    getValuesProofOfPayment,
    setValueProofOfPayment,
    //resetFieldProofOfPayment
  );
  return (
    <Suspense fallback={<ActivityIndicator />}>
      <StyledApplicationSecondStepSection>
        <StyledPaymentsMethodsContainer>
        {(applicationForm.status.id === 2 || applicationForm.status.id === 7) && (
            <StyledPaymentAlreadyMadeItContainer>
              <StyledAdviceIconContainer> <IconWarning size={0.8} color={'#494b4d'} />  </StyledAdviceIconContainer>
              <StyledPaymentAlreadyMadeItLabel>   Advertising Fee Payment Already Made It  </StyledPaymentAlreadyMadeItLabel>
            </StyledPaymentAlreadyMadeItContainer>
          )}

          <StyledPaymentsMethodsInnerContainer>
                <StyledPaymentsTitle>To proceed with the process, please make the payment and enter the receipt number.    </StyledPaymentsTitle>
   
            {applicationForm.status.id === 2 ||  applicationForm.status.id === 7 ? (  <></>  ) : (
              <>

                <StyledContainerPayBtn>
                    <StyledPayText>Use USSD *468# to pay</StyledPayText>
                </StyledContainerPayBtn>
                
                <StyledContainerText>
                  <TextFieldControlled
                    inputValue={''}
                    id={'receiptNumber'}
                    placeholder={'Receipt number'}
                    onKeyPress={(eve) => {
                      if (!/[0-9]/.test(eve.key)) {
                        eve.preventDefault();
                      }
                    }}
                    type={'text'}
                    inputProps={{ maxLength: 8 }}
                    label={'Enter your receipt number'}
                    name={'receiptNumber'}
                    variant={'outlined'}
                    fullWidth={true}
                    control={controlProofOfPayment}
                    error={!!controlProofOfPayment.advertisingReceipt}
                    helperText={errorsProofOfPayment?.advertisingReceipt?.message}
                  />
                </StyledContainerText>

              </>
            )}
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
            {(applicationForm.status?.id < 3 ||
              applicationForm.status < 3 ||
              !applicationForm.id) && (
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
                  : !isValidProofOfPayment
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
              Next
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
          <IconInfoCircle  size={4}  color={'#40A0C9'}  color2={'#D9ECF4'} />
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

        <StyledSubtitleModalCancel variant={'body1'}> </StyledSubtitleModalCancel>
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

export default ApplicationFormRenewStep2;
