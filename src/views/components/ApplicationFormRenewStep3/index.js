import React, { Suspense } from 'react';
import useComponents from '..';
import useControllers from '../../../controllers';

import useAssets from '../../../assets';

import {
  StyledApplicationThirdStepSection,
  // StyledTypeOfRegistrationContainer,
  // StyledFieldsContainer,
  StyledGeneralDocumentsContainer,
  //StyledDocumentsInfoContainer,
 // StyledDocumentsTitle,
  //StyledDocumentsAffidavitContainer,
 // StyledDocumentsDescription,
  StyledInputFileFieldControlled,
  // StyledTypographyTooltip,
 // StyledDynamicDocumentsContainer,
  //StyledDynamicDocumentsInnerContainer,
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
  StyledPdfLink,
  StyledContainerPdfLink,
  StyledDraftContainer
} from './ApplicationFormRenewStep3.styles';

const ApplicationFormRenewStep3 = () => {
  const {
    ActivityIndicator,
    CheckboxControlled,
    Modal,
    // SelectFieldControlled,
    Typography,
    // TooltipField,
  } = useComponents();

  const { useIcons } = useAssets();
  const { iconInfoCircle:IconInfoCircle } = useIcons();

  // Hooks
  const { useComponentHooks } = useControllers();
  const { useApplicationFormRenewStep3 } = useComponentHooks();

  const {
    promiseSaveDraftApplicationDocuments,
    promiseSaveFinalApplicationDocuments,
    promiseUpdateFinalUserApplication,
    promiseUpdateUserApplication,
    promiseCancelApplication,

    fileTypesPdf,
    // typeOfRegistration,

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
    // individualBusinessTypeState,
    handleGetAffidavitPdf,
    getValuesDocuments,
    handleSubmitDocuments,
    // setValueDocuments,
    controlDocuments,
    resetFieldDocuments,
    // setErrorDocuments,
    errorsDocuments,
    // isValidDocuments,
    getValuesSubmitTerms,
    controlTerms,
    errorsTerms,
    isValidTerms,
    
  } = useApplicationFormRenewStep3();


  return (
    <Suspense fallback={<ActivityIndicator />}>
      <StyledApplicationThirdStepSection>
        <StyledGeneralDocumentsContainer>

            <StyledContainerPdfLink> 
                You can download the affidavit form template from the following link: <StyledPdfLink $to="javascript:;" onClick={handleGetAffidavitPdf}> Affidavit_template.pdf </StyledPdfLink>  
            </StyledContainerPdfLink>

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
              helperText={errorsDocuments?.affidavit?.data?.message}
            />

            <StyledInputFileFieldControlled
                id={'police_report'}
                name={'police_report'}
                label={'Police Report'}
                variant={'outlined'}
                inputValue={handleFileNameExtension(
                  applicationForm.police_report
                )}
                control={controlDocuments}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldDocuments}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsDocuments.police_report}
                helperText={
                  errorsDocuments?.police_report?.data?.message
                }
              />

              <StyledInputFileFieldControlled
                id={'health_report'}
                name={'health_report'}
                label={'Health Report'}
                variant={'outlined'}
                inputValue={handleFileNameExtension(
                  applicationForm.health_report
                )}
                control={controlDocuments}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldDocuments}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsDocuments.health_report}
                helperText={
                  errorsDocuments?.health_report?.data?.message
                }
              />

            <StyledInputFileFieldControlled
                id={'license_renewal'}
                name={'license_renewal'}
                label={'Copy of the Expired/Expiring to existing license due for renewal'}
                variant={'outlined'}
                inputValue={handleFileNameExtension( applicationForm.license_renewal )}
                control={controlDocuments}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldDocuments}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsDocuments.license_renewal}
                helperText={  errorsDocuments?.license_renewal?.data?.message  }
              />

        </StyledGeneralDocumentsContainer>
        <StyledDraftContainer> To save draft, select at least one file </StyledDraftContainer>
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
              disabled={
                promiseUpdateFinalUserApplication ||
                promiseUpdateUserApplication ||
                promiseSaveDraftApplicationDocuments ||
                promiseSaveFinalApplicationDocuments
              }
              fullWidth={false}
              color="primary"
              colorLoading={'#FFFFFF'}
              promiseLoading={promiseUpdateUserApplication}
              onClick={handleSubmitDocuments(onSubmitFinalBeforeTyc)}
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
                  'We are collecting your personal data so that we may process your liquor licence application with our department. For administrative purposes, we may share your personal data across Government Departments as well as other third parties that process personal data in conjunction with us and on our behalf, when required. By clicking the box, I confirm that I give consent to my personal information being processed for this purpose.'
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
                  'By clicking the box, I acknowledge that I have submitted all required document and hereby submit my application.'
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
          <IconInfoCircle  size={4}  color={'#40A0C9'}  color2={'#D9ECF4'} />
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
        showModal={modalStateSubmitSuccess.show}
        onClose={handleCloseModalSubmitSucces}
        title={modalStateSubmitSuccess.title}
        description={modalStateSubmitSuccess.description}
        isBtnAccept={true}
      />
    </Suspense>
  );
};

export default ApplicationFormRenewStep3;
