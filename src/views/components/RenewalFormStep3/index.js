import React, { Suspense } from 'react';
import useComponents from '..';
import useControllers from '../../../controllers';
import useHelpers from '../../../helpers';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  StyledApplicationThirdStepSection,
  StyledTypeOfRegistrationContainer,
  StyledFieldsContainer,
  StyledGeneralDocumentsContainer,
  StyledDocumentsInfoContainer,
  StyledDocumentsTitle,
  StyledDocumentsDescription,
  StyledInputFileFieldControlled,
  StyledTypographyTooltip,
  StyledDynamicDocumentsContainer,
  StyledDynamicDocumentsInnerContainer,
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
  StyledTitleModalTyc,
  StyledChildContainerModalTyc,
  StyledChecksContainerModalTyc,
  StyledCheckboxContainer,
  StyledRowButtonsModalTyc,
  StyledButtonCancelModalTyc,
  StyledButtonContinueModalTyc,
} from './RenewalFormStep3.styles';

const RenewalFormStep3 = () => {
  const {
    ActivityIndicator,
    CheckboxControlled,
    Modal,
    SelectFieldControlled,
    Typography,
    TooltipField,
  } = useComponents();

  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useValidators } = useQuickFunctions();
  const {
    applicationFormStep3documentsSchemaValidator,
    applicationFormStep4TermsSchemaValidator,
  } = useValidators();

  // Hooks
  const { useComponentHooks } = useControllers();
  const { useRenewalFormStep3 } = useComponentHooks();

  // Yup validator

  const {
    getValues: getValuesDocuments,
    setValue: setValueDocuments,
    watch: watchDocuments,
    control: controlDocuments,
    resetField: resetFieldDocuments,
    formState: { errors: errorsDocuments, isValid: isValidDocuments },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(applicationFormStep3documentsSchemaValidator),
  });
  const {
    getValues: getValuesSubmitTerms,
    control: controlTerms,
    formState: { errors: errorsTerms, isValid: isValidTerms },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(applicationFormStep4TermsSchemaValidator),
  });
  const {
    promiseSaveDraftApplicationDocuments,
    promiseSaveFinalApplicationDocuments,
    promiseUpdateFinalUserApplication,
    promiseUpdateUserApplication,
    promiseCancelApplication,

    fileTypesPdf,
    typeOfRegistration,

    handleFileNameExtension,
    onChangeFilePdf,
    handleResetFileState,
    handleSaveDraftFile,

    onSubmitFinalFromTyc,
    onSubmitFinalBeforeTyc,
    onSubmitDraft,
    applicationForm,

    modalStateDraft,
    handleCloseModalDraftSuccesApplications,
    handleCloseModalDraftSuccesHome,

    modalStateCancel,
    handleCancelApplicationAndCloseModal,
    handleCloseModalCancel,

    modalStateTerms,
    handleCloseTermsModal,

    modalStateSubmitSuccess,
    handleCloseModalSubmitSucces,
  } = useRenewalFormStep3(
    setValueDocuments,
    isValidDocuments,
    getValuesDocuments
  );
  return (
    <Suspense fallback={<ActivityIndicator />}>
      <StyledApplicationThirdStepSection>
        <StyledTypeOfRegistrationContainer>
          <StyledFieldsContainer>
            <SelectFieldControlled
              id={'typeOfRegistrationId'}
              label={
                <>
                  Type of licence applying for
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
              name={'typeOfRegistrationId'}
              control={controlDocuments}
              inputValue={
                applicationForm.typeOfRegistrationId
                  ? applicationForm.typeOfRegistrationId
                  : typeOfRegistration[0].id
              }
              options={typeOfRegistration}
              error={!!errorsDocuments.typeOfRegistrationId}
              helperText={errorsDocuments?.typeOfRegistrationId?.message}
            />
          </StyledFieldsContainer>
        </StyledTypeOfRegistrationContainer>

        <StyledGeneralDocumentsContainer>
          <StyledDocumentsInfoContainer>
            <StyledDocumentsTitle>Required documents</StyledDocumentsTitle>
            <StyledDocumentsDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare odio sit amet est accumsan hendrerit. litora torquent per
              conubia nostra, per inceptos himenaeos.
            </StyledDocumentsDescription>
          </StyledDocumentsInfoContainer>
          {watchDocuments('typeOfRegistrationId') === 1 && (
            // Individual Registration
            <>
              <StyledInputFileFieldControlled
                id={'policeReport'}
                name={'policeReport'}
                label={
                  <>
                    Police report
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
                variant={'outlined'}
                inputValue={handleFileNameExtension(
                  applicationForm.policeReport
                )}
                control={controlDocuments}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldDocuments}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsDocuments.policeReport}
                helperText={errorsDocuments?.policeReport?.message}
              />
              <StyledInputFileFieldControlled
                id={'healthReport'}
                name={'healthReport'}
                label={'Health report'}
                variant={'outlined'}
                inputValue={handleFileNameExtension(
                  applicationForm.healthReport
                )}
                control={controlDocuments}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldDocuments}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsDocuments.healthReport}
                helperText={errorsDocuments?.healthReport?.message}
              />
              <StyledInputFileFieldControlled
                id={'plansDrawn'}
                name={'plansDrawn'}
                label={
                  <>
                    Plans drawn to scale indicating inside layout
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
                variant={'outlined'}
                inputValue={handleFileNameExtension(applicationForm.plansDrawn)}
                control={controlDocuments}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldDocuments}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsDocuments.plansDrawn}
                helperText={errorsDocuments?.plansDrawn?.message}
              />
              <StyledInputFileFieldControlled
                id={'nationalIdentityCard'}
                name={'nationalIdentityCard'}
                label={'National identity card'}
                variant={'outlined'}
                inputValue={handleFileNameExtension(
                  applicationForm.nationalIdentityCard
                )}
                control={controlDocuments}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldDocuments}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsDocuments.nationalIdentityCard}
                helperText={errorsDocuments?.nationalIdentityCard?.message}
              />
              <StyledInputFileFieldControlled
                id={'temporaryResidentPermit'}
                name={'temporaryResidentPermit'}
                label={
                  'Temporary resident permit (non-Swazi) or proof of citizenship'
                }
                variant={'outlined'}
                inputValue={handleFileNameExtension(
                  applicationForm.temporaryResidentPermit
                )}
                control={controlDocuments}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldDocuments}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsDocuments.temporaryResidentPermit}
                helperText={errorsDocuments?.temporaryResidentPermit?.message}
              />
              <StyledInputFileFieldControlled
                id={'advertCopy'}
                name={'advertCopy'}
                label={'Advert copy, in the case of a special sitting'}
                variant={'outlined'}
                inputValue={handleFileNameExtension(applicationForm.advertCopy)}
                control={controlDocuments}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldDocuments}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsDocuments.advertCopy}
                helperText={errorsDocuments?.advertCopy?.message}
              />
            </>
          )}
          {watchDocuments('typeOfRegistrationId') === 2 && (
            // Company registration
            <>
              <StyledInputFileFieldControlled
                id={'policeReport'}
                name={'policeReport'}
                label={
                  <>
                    Police report
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
                variant={'outlined'}
                inputValue={handleFileNameExtension(
                  applicationForm.policeReport
                )}
                control={controlDocuments}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldDocuments}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsDocuments.policeReport}
                helperText={errorsDocuments?.policeReport?.message}
              />
              <StyledInputFileFieldControlled
                id={'healthReport'}
                name={'healthReport'}
                label={'Health report'}
                variant={'outlined'}
                inputValue={handleFileNameExtension(
                  applicationForm.healthReport
                )}
                control={controlDocuments}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldDocuments}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsDocuments.healthReport}
                helperText={errorsDocuments?.healthReport?.message}
              />
              <StyledInputFileFieldControlled
                id={'plansDrawn'}
                name={'plansDrawn'}
                label={
                  <>
                    Plans drawn to scale indicating inside layout
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
                variant={'outlined'}
                inputValue={handleFileNameExtension(applicationForm.plansDrawn)}
                control={controlDocuments}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldDocuments}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsDocuments.plansDrawn}
                helperText={errorsDocuments?.plansDrawn?.message}
              />
              <StyledInputFileFieldControlled
                id={'nationalIdentityCard'}
                name={'nationalIdentityCard'}
                label={'National identity card'}
                variant={'outlined'}
                inputValue={handleFileNameExtension(
                  applicationForm.nationalIdentityCard
                )}
                control={controlDocuments}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldDocuments}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsDocuments.nationalIdentityCard}
                helperText={errorsDocuments?.nationalIdentityCard?.message}
              />
              <StyledInputFileFieldControlled
                id={'temporaryResidentPermit'}
                name={'temporaryResidentPermit'}
                label={
                  'Temporary resident permit (non-Swazi) or proof of citizenship'
                }
                variant={'outlined'}
                inputValue={handleFileNameExtension(
                  applicationForm.temporaryResidentPermit
                )}
                control={controlDocuments}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldDocuments}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsDocuments.temporaryResidentPermit}
                helperText={errorsDocuments?.temporaryResidentPermit?.message}
              />
              <StyledInputFileFieldControlled
                id={'advertCopy'}
                name={'advertCopy'}
                label={'Advert copy, in the case of a special sitting'}
                variant={'outlined'}
                inputValue={handleFileNameExtension(applicationForm.advertCopy)}
                control={controlDocuments}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldDocuments}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsDocuments.advertCopy}
                helperText={errorsDocuments?.advertCopy?.message}
              />
              <StyledInputFileFieldControlled
                id={'certificateIncorporation'}
                name={'certificateIncorporation'}
                label={
                  <>
                    Certificate of incorporation
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
                variant={'outlined'}
                inputValue={handleFileNameExtension(
                  applicationForm.certificateIncorporation
                )}
                control={controlDocuments}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldDocuments}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsDocuments.certificateIncorporation}
                helperText={errorsDocuments?.certificateIncorporation?.message}
              />
              <StyledInputFileFieldControlled
                id={'tradingLicense'}
                name={'tradingLicense'}
                label={
                  <>
                    Trading licence (restaurant)
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
                variant={'outlined'}
                inputValue={handleFileNameExtension(
                  applicationForm.tradingLicense
                )}
                control={controlDocuments}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldDocuments}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsDocuments.tradingLicense}
                helperText={errorsDocuments?.tradingLicense?.message}
              />
              <StyledInputFileFieldControlled
                id={'companyResolution'}
                name={'companyResolution'}
                label={'Company resolution'}
                variant={'outlined'}
                inputValue={handleFileNameExtension(
                  applicationForm.companyResolution
                )}
                control={controlDocuments}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldDocuments}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsDocuments.companyResolution}
                helperText={errorsDocuments?.companyResolution?.message}
              />
              <StyledInputFileFieldControlled
                id={'memorandumArticles'}
                name={'memorandumArticles'}
                label={
                  <>
                    Memorandum and articles asociation
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
                variant={'outlined'}
                inputValue={handleFileNameExtension(
                  applicationForm.memorandumArticles
                )}
                control={controlDocuments}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldDocuments}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsDocuments.memorandumArticles}
                helperText={errorsDocuments?.memorandumArticles?.message}
              />
            </>
          )}
          <StyledInputFileFieldControlled
            id={'affidavit'}
            name={'affidavit'}
            label={'Affidavit'}
            variant={'outlined'}
            inputValue={handleFileNameExtension(applicationForm.affidavit)}
            control={controlDocuments}
            fileTypes={fileTypesPdf}
            handleResetReduxState={handleResetFileState}
            resetField={resetFieldDocuments}
            onInputChange={onChangeFilePdf}
            onSaveDraftById={handleSaveDraftFile}
            error={!!errorsDocuments.affidavit}
            helperText={errorsDocuments?.affidavit?.message}
          />
        </StyledGeneralDocumentsContainer>
        <StyledDynamicDocumentsContainer>
          {watchDocuments('snlOrTdl') === '1' ? (
            <StyledDynamicDocumentsInnerContainer>
              <StyledDocumentsInfoContainer>
                <StyledDocumentsTitle>
                  TDL licence required documents
                </StyledDocumentsTitle>
                <StyledDocumentsDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare odio sit amet est accumsan hendrerit. litora torquent
                  per conubia nostra, per inceptos himenaeos.
                </StyledDocumentsDescription>
              </StyledDocumentsInfoContainer>

              <StyledInputFileFieldControlled
                id={'titleDeed'}
                name={'titleDeed'}
                label={
                  <>
                    Title Deed
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
                variant={'outlined'}
                inputValue={handleFileNameExtension(applicationForm.titleDeed)}
                control={controlDocuments}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldDocuments}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsDocuments.titleDeed}
                helperText={errorsDocuments?.titleDeed?.message}
              />
              <StyledInputFileFieldControlled
                id={'rentingLeaseAgreement'}
                name={'rentingLeaseAgreement'}
                label={'Renting: lease agreement'}
                variant={'outlined'}
                inputValue={handleFileNameExtension(
                  applicationForm.rentingLeaseAgreement
                )}
                control={controlDocuments}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldDocuments}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsDocuments.rentingLeaseAgreement}
                helperText={errorsDocuments?.rentingLeaseAgreement?.message}
              />
            </StyledDynamicDocumentsInnerContainer>
          ) : (
            <StyledDynamicDocumentsInnerContainer>
              <StyledDocumentsInfoContainer>
                <StyledDocumentsTitle>
                  SNL licence required documents
                </StyledDocumentsTitle>
                <StyledDocumentsDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare odio sit amet est accumsan hendrerit. litora torquent
                  per conubia nostra, per inceptos himenaeos.
                </StyledDocumentsDescription>
              </StyledDocumentsInfoContainer>

              <StyledInputFileFieldControlled
                id={'letterOfConsent'}
                name={'letterOfConsent'}
                label={
                  <>
                    Letter of consent from chief
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
                variant={'outlined'}
                inputValue={handleFileNameExtension(
                  applicationForm.letterOfConsent
                )}
                control={controlDocuments}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldDocuments}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsDocuments.letterOfConsent}
                helperText={errorsDocuments?.letterOfConsent?.message}
              />
            </StyledDynamicDocumentsInnerContainer>
          )}
        </StyledDynamicDocumentsContainer>
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
            {applicationForm.status?.id !== 7 && (
              <StyledButtonSaveAndContinue
                fullWidth={false}
                variant="outlined"
                color="secondary"
                promiseLoading={
                  promiseUpdateUserApplication ||
                  promiseSaveDraftApplicationDocuments
                }
                onClick={() => {
                  !promiseUpdateFinalUserApplication &&
                  !promiseUpdateUserApplication &&
                  !promiseSaveDraftApplicationDocuments &&
                  !promiseSaveFinalApplicationDocuments
                    ? onSubmitDraft(getValuesDocuments())
                    : () => {};
                }}
              >
                Save as a draft
              </StyledButtonSaveAndContinue>
            )}
            <StyledButtonContinue
              disabled={!isValidDocuments}
              fullWidth={false}
              color="primary"
              colorLoading={'#FFFFFF'}
              promiseLoading={promiseUpdateFinalUserApplication}
              onClick={() => {
                !promiseUpdateFinalUserApplication &&
                !promiseUpdateUserApplication &&
                !promiseSaveDraftApplicationDocuments &&
                !promiseSaveFinalApplicationDocuments
                  ? onSubmitFinalBeforeTyc(getValuesDocuments())
                  : () => {};
              }}
            >
              Submit
            </StyledButtonContinue>
          </StyledRowButtons>
        </StyledFieldRowBottom>
      </StyledApplicationThirdStepSection>

      <Modal
        color={'#394d94'}
        type={'child'}
        showModal={modalStateTerms.show}
        onClose={handleCloseTermsModal}
      >
        <StyledTitleModalTyc variant={'h2'} color={'success'}>
          Terms and conditions
        </StyledTitleModalTyc>
        <StyledChildContainerModalTyc>
          <StyledChecksContainerModalTyc>
            <StyledCheckboxContainer>
              <CheckboxControlled
                id={'termsAndConditions'}
                name={'termsAndConditions'}
                defaultChecked={
                  applicationForm.termsAndConditions === '1' ? true : false
                }
                control={controlTerms}
                error={!!errorsTerms.termsAndConditions}
                helperText={errorsTerms?.termsAndConditions?.message}
                label={
                  'We are collecting your personal data so that we may process your liquor licence application with our department. For administrative purposes, we may share your personal data across Government Departments as well as other third parties that process personal data in conjunction with us and on our behalf, when required. By clicking yes, I confirm that I give consent to my personal information being processed for this purpose.'
                }
              />
            </StyledCheckboxContainer>
            <StyledCheckboxContainer>
              <CheckboxControlled
                id={'applicationConfirmation'}
                name={'applicationConfirmation'}
                defaultChecked={
                  applicationForm.applicationConfirmation === '1' ? true : false
                }
                control={controlTerms}
                error={!!errorsTerms.applicationConfirmation}
                helperText={errorsTerms?.applicationConfirmation?.message}
                label={
                  'By clicking yes, I acknowledge that I have submitted all required document and hereby submit my application.'
                }
              />
            </StyledCheckboxContainer>
          </StyledChecksContainerModalTyc>
          <StyledRowButtonsModalTyc>
            <StyledButtonCancelModalTyc
              onClick={handleCloseTermsModal}
              fullWidth={false}
              variant="outlined"
              color="secondary"
            >
              Cancel
            </StyledButtonCancelModalTyc>
            <StyledButtonContinueModalTyc
              disabled={!isValidTerms}
              colorLoading={'#FFFFFF'}
              promiseLoading={
                promiseSaveFinalApplicationDocuments ||
                promiseUpdateFinalUserApplication
              }
              onClick={() => {
                !promiseUpdateFinalUserApplication &&
                !promiseUpdateUserApplication &&
                !promiseSaveDraftApplicationDocuments &&
                !promiseSaveFinalApplicationDocuments
                  ? onSubmitFinalFromTyc(getValuesSubmitTerms())
                  : () => {};
              }}
              fullWidth={false}
              color="primary"
            >
              Submit
            </StyledButtonContinueModalTyc>
          </StyledRowButtonsModalTyc>
        </StyledChildContainerModalTyc>
      </Modal>

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
            GO TO HOME PAGE
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
        showModal={modalStateSubmitSuccess.show}
        onClose={handleCloseModalSubmitSucces}
        title={modalStateSubmitSuccess.title}
        description={modalStateSubmitSuccess.description}
      />
    </Suspense>
  );
};

export default RenewalFormStep3;
