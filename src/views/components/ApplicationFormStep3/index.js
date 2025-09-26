import React, { Suspense } from 'react';
import useComponents from '..';
import useControllers from '../../../controllers';
import {
  StyledApplicationThirdStepSection,
  // StyledTypeOfRegistrationContainer,
  // StyledFieldsContainer,
  StyledGeneralDocumentsContainer,
  StyledDocumentsInfoContainer,
  StyledDocumentsTitle,
  StyledDocumentsAffidavitContainer,
  StyledDocumentsDescription,
  StyledInputFileFieldControlled,
  // StyledTypographyTooltip,
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
} from './ApplicationFormStep3.styles';

const ApplicationFormStep3 = () => {
  const {
    ActivityIndicator,
    CheckboxControlled,
    Modal,
    // SelectFieldControlled,
    Typography,
    // TooltipField,
  } = useComponents();

  // Hooks
  const { useComponentHooks } = useControllers();
  const { useApplicationFormStep3 } = useComponentHooks();

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
    isValidDocuments,
    // getValuesSubmitTerms,
    controlTerms,
    errorsTerms,
    isValidTerms,

  } = useApplicationFormStep3();

  // Helper function to safely get document filename for display
  const getDocumentInputValue = (document) => {
    // Return empty string for null/undefined documents
    if (!document) {
      return '';
    }

    // If document is already a string, return it
    if (typeof document === 'string') {
      return document;
    }

    // If document is an object, check if it has a valid name
    if (document.name && document.name !== null && document.name !== '') {
      return document.name;
    }

    // Try handleFileNameExtension but ensure we return a string
    const result = handleFileNameExtension(document);

    // If handleFileNameExtension returns an object with a name property, use that
    if (result && typeof result === 'object' && result.name && result.name !== '') {
      return result.name;
    }

    // If handleFileNameExtension returns a string, use it
    if (typeof result === 'string') {
      return result;
    }

    // Fallback to empty string to ensure we always return a string
    return '';
  };

  return (
    <Suspense fallback={<ActivityIndicator />}>
      <StyledApplicationThirdStepSection>
        <StyledGeneralDocumentsContainer>
          <StyledDocumentsInfoContainer>
            <StyledDocumentsTitle>Required documents</StyledDocumentsTitle>
            <StyledDocumentsDescription>
              Please ensure to upload all the mandatory documents to this page. For business properties in Rural areas, it is mandatory to also include the King’s Consent Document.
            </StyledDocumentsDescription>
          </StyledDocumentsInfoContainer>
          {/* <div className="hidden">
            <StyledInputFileFieldControlled
              id={'individualBusinessType'}
              name={'individualBusinessType'}
              label={'individualBusinessType'}
              variant={'outlined'}
              inputValue={0}
              control={controlDocuments}
              fileTypes={fileTypesPdf}
              handleResetReduxState={handleResetFileState}
              resetField={resetFieldDocuments}
              onInputChange={onChangeFilePdf}
              onSaveDraftById={handleSaveDraftFile}
              error={!!errorsDocuments.individualBusinessType}
              helperText={
                errorsDocuments?.individualBusinessType?.data?.message
              }
            />
          </div> */}

          {/*Common documents for all Business Relationship type */}
          {/* (Also for: Business Relationship - INDIVIDUAL) */}
          <>
            {/* {applicationForm.applicationType?.id === 2 ? (
              <StyledInputFileFieldControlled
                id={'previous_application'}
                name={'previous_application'}
                label={'Current Licence'}
                variant={'outlined'}
                inputValue={handleFileNameExtension(
                  applicationForm.previous_application
                )}
                control={controlDocuments}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldDocuments}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsDocuments.previous_application}
                helperText={
                  errorsDocuments?.previous_application?.data?.message
                }
              />
            ) : (
              <></>
            )}
            {individualBusinessTypeState != 0 && (
              <StyledInputFileFieldControlled
                id={'identity_card'}
                name={'identity_card'}
                label={'National Identity Card'}
                variant={'outlined'}
                inputValue={handleFileNameExtension(
                  applicationForm.identity_card
                )}
                control={controlDocuments}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldDocuments}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsDocuments.identity_card}
                helperText={errorsDocuments?.identity_card?.data?.message}
              />
            )} */}
            {/* <StyledInputFileFieldControlled
              id={'leased_business_premise'}
              name={'leased_business_premise'}
              label={'Leased Business Premise'}
              variant={'outlined'}
              inputValue={handleFileNameExtension(
                applicationForm.leased_business_premise
              )}
              control={controlDocuments}
              fileTypes={fileTypesPdf}
              handleResetReduxState={handleResetFileState}
              resetField={resetFieldDocuments}
              onInputChange={onChangeFilePdf}
              onSaveDraftById={handleSaveDraftFile}
              error={!!errorsDocuments.leased_business_premise}
              helperText={
                errorsDocuments?.leased_business_premise?.data?.message
              }
            /> */}
          </>

          {/* Business Property all */}
          {applicationForm.business_property_id && (
            <>
            {applicationForm.business_property_id == 3 && (
              <StyledInputFileFieldControlled
                id={'kings_consent_liquor_issue'}
                name={'kings_consent_liquor_issue'}
                label={"King's Consent-Liquor Issue"}
                variant={'outlined'}
                inputValue={getDocumentInputValue(
                  applicationForm.kings_consent_liquor_issue
                )}
                control={controlDocuments}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldDocuments}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsDocuments.kings_consent_liquor_issue}
                helperText={
                  errorsDocuments?.kings_consent_liquor_issue?.data?.message
                }
              />
            )}
              <StyledInputFileFieldControlled
                id={'boards_inspection_report'}
                name={'boards_inspection_report'}
                label={"Board's inspection report"}
                variant={'outlined'}
                inputValue={getDocumentInputValue(
                  applicationForm.boards_inspection_report
                )}
                control={controlDocuments}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldDocuments}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsDocuments.boards_inspection_report}
                helperText={
                  errorsDocuments?.boards_inspection_report?.data?.message
                }
              />
              <StyledInputFileFieldControlled
                id={'police_report'}
                name={'police_report'}
                label={'Police Report'}
                variant={'outlined'}
                inputValue={getDocumentInputValue(applicationForm.police_report)}
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
                inputValue={getDocumentInputValue(applicationForm.health_report)}
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
              {applicationForm.business_property_id != 3 && (
                <StyledInputFileFieldControlled
                  id={'lease_agreement_title_deed'}
                  name={'lease_agreement_title_deed'}
                  label={'Lease Agreement/Title deed'}
                  variant={'outlined'}
                  inputValue={getDocumentInputValue(
                    applicationForm.lease_agreement_title_deed
                  )}
                  control={controlDocuments}
                  fileTypes={fileTypesPdf}
                  handleResetReduxState={handleResetFileState}
                  resetField={resetFieldDocuments}
                  onInputChange={onChangeFilePdf}
                  onSaveDraftById={handleSaveDraftFile}
                  error={!!errorsDocuments.lease_agreement_title_deed}
                  helperText={
                    errorsDocuments?.lease_agreement_title_deed?.data?.message
                  }
                />
              )}
              <StyledInputFileFieldControlled
                id={'plans_drawn'}
                name={'plans_drawn'}
                label={'Plans drawn to scale indicating inside layout'}
                variant={'outlined'}
                inputValue={getDocumentInputValue(applicationForm.plans_drawn)}
                control={controlDocuments}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldDocuments}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsDocuments.plans_drawn}
                helperText={
                  errorsDocuments?.plans_drawn?.data?.message
                }
              />
              <StyledInputFileFieldControlled
                id={'bank_statement'}
                name={'bank_statement'}
                label={'Bank Statement'}
                variant={'outlined'}
                inputValue={getDocumentInputValue(
                  applicationForm.bank_statement
                )}
                control={controlDocuments}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldDocuments}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsDocuments.bank_statement}
                helperText={
                  errorsDocuments?.bank_statement?.data?.message
                }
              />
              <StyledInputFileFieldControlled
                id={'identity_card'}
                name={'identity_card'}
                label={'National Identity Card'}
                variant={'outlined'}
                inputValue={getDocumentInputValue(
                  applicationForm.identity_card
                )}
                control={controlDocuments}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldDocuments}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsDocuments.identity_card}
                helperText={errorsDocuments?.identity_card?.data?.message}
              />
              {applicationForm.business_relationship_id == 3 && (
                <>
                  <StyledInputFileFieldControlled
                    id={'certificate_of_incorporation'}
                    name={'certificate_of_incorporation'}
                    label={'Certificate of Incorporation'}
                    variant={'outlined'}
                    inputValue={getDocumentInputValue(
                      applicationForm.certificate_of_incorporation
                    )}
                    control={controlDocuments}
                    fileTypes={fileTypesPdf}
                    handleResetReduxState={handleResetFileState}
                    resetField={resetFieldDocuments}
                    onInputChange={onChangeFilePdf}
                    onSaveDraftById={handleSaveDraftFile}
                    error={!!errorsDocuments.certificate_of_incorporation}
                    helperText={
                      errorsDocuments?.certificate_of_incorporation?.data?.message
                    }
                  />
                  <StyledInputFileFieldControlled
                    id={'company_resolution'}
                    name={'company_resolution'}
                    label={'Company Resolution'}
                    variant={'outlined'}
                    inputValue={getDocumentInputValue(
                      applicationForm.company_resolution
                    )}
                    control={controlDocuments}
                    fileTypes={fileTypesPdf}
                    handleResetReduxState={handleResetFileState}
                    resetField={resetFieldDocuments}
                    onInputChange={onChangeFilePdf}
                    onSaveDraftById={handleSaveDraftFile}
                    error={!!errorsDocuments.company_resolution}
                    helperText={
                      errorsDocuments?.company_resolution?.data?.message
                    }
                  />
                  <StyledInputFileFieldControlled
                    id={'memorandum_and_articles_of_association'}
                    name={'memorandum_and_articles_of_association'}
                    label={'Memorandum and Articles of Association'}
                    variant={'outlined'}
                    inputValue={getDocumentInputValue(
                      applicationForm.memorandum_and_articles_of_association
                    )}
                    control={controlDocuments}
                    fileTypes={fileTypesPdf}
                    handleResetReduxState={handleResetFileState}
                    resetField={resetFieldDocuments}
                    onInputChange={onChangeFilePdf}
                    onSaveDraftById={handleSaveDraftFile}
                    error={!!errorsDocuments.memorandum_and_articles_of_association}
                    helperText={
                      errorsDocuments?.memorandum_and_articles_of_association?.data?.message
                    }
                  />
                </>
              )}
              <StyledInputFileFieldControlled
                id={'trading_licence'}
                name={'trading_licence'}
                label={'Trading License'}
                variant={'outlined'}
                inputValue={getDocumentInputValue(
                  applicationForm.trading_licence
                )}
                control={controlDocuments}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldDocuments}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsDocuments.trading_licence}
                helperText={
                  errorsDocuments?.trading_licence?.data?.message
                }
              />
              {applicationForm.business_property_id != 3 && (
                <StyledInputFileFieldControlled
                  id={'temporary_resident_permit'}
                  name={'temporary_resident_permit'}
                  label={'Temporary Resident permit (non-Swazi) or proof of citizenship'}
                  variant={'outlined'}
                  inputValue={getDocumentInputValue(
                    applicationForm.temporary_resident_permit
                  )}
                  control={controlDocuments}
                  fileTypes={fileTypesPdf}
                  handleResetReduxState={handleResetFileState}
                  resetField={resetFieldDocuments}
                  onInputChange={onChangeFilePdf}
                  onSaveDraftById={handleSaveDraftFile}
                  error={!!errorsDocuments.temporary_resident_permit}
                  helperText={
                    errorsDocuments?.temporary_resident_permit?.data?.message
                  }
                />
              )}
              <StyledInputFileFieldControlled
                id={'advert_copy'}
                name={'advert_copy'}
                label={'Advert copy'}
                variant={'outlined'}
                inputValue={getDocumentInputValue(
                  applicationForm.advert_copy
                )}
                control={controlDocuments}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldDocuments}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsDocuments.advert_copy}
                helperText={
                  errorsDocuments?.advert_copy?.data?.message
                }
              />
            </>
          )}
          {/* Individual Business + Urban area + Privately-Owned = ID + Title Deed (individualBusinessType = 1) */}
          {/* {(individualBusinessTypeState == 1 ||
            individualBusinessTypeState == 3) && (
            <>
              <StyledInputFileFieldControlled
                id={'title_deed'}
                name={'title_deed'}
                label={'Title Deed'}
                variant={'outlined'}
                inputValue={getDocumentInputValue(applicationForm.title_deed)}
                control={controlDocuments}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldDocuments}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsDocuments.title_deed}
                helperText={errorsDocuments?.title_deed?.data?.message}
              />
            </>
          )} */}

          {/* Individual Business + Urban area + Leased-Owned = ID + Lease Agreement (individualBusinessType = 2) */}
          {/* {(individualBusinessTypeState == 2 ||
            individualBusinessTypeState == 4) && (
            <>
              <StyledInputFileFieldControlled
                id={'lease_agreement'}
                name={'lease_agreement'}
                label={'Lease Agreement'}
                variant={'outlined'}
                inputValue={handleFileNameExtension(
                  applicationForm.lease_agreement
                )}
                control={controlDocuments}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldDocuments}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsDocuments.lease_agreement}
                helperText={errorsDocuments?.lease_agreement?.data?.message}
              />
            </>
          )} */}

          {/* {(individualBusinessTypeState == 3 ||
            individualBusinessTypeState == 4) && (
            <>
              <StyledInputFileFieldControlled
                id={'permit_no'}
                name={'permit_no'}
                label={'Permit No.'}
                variant={'outlined'}
                inputValue={getDocumentInputValue(applicationForm.permit_no)}
                control={controlDocuments}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldDocuments}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsDocuments.permit_no}
                helperText={errorsDocuments?.permit_no?.data?.message}
              />
            </>
          )} */}

          {/* Business Relationship - PARTNERSHIP */}
          {/* {applicationForm.business_relationship_id == 2 && (
            <>
              <StyledInputFileFieldControlled
                id={'certificate_of_partnership'}
                name={'certificate_of_partnership'}
                label={'Certificate of Partnership'}
                variant={'outlined'}
                inputValue={handleFileNameExtension(
                  applicationForm.certificate_of_partnership
                )}
                control={controlDocuments}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldDocuments}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsDocuments.certificate_of_partnership}
                helperText={
                  errorsDocuments?.certificate_of_partnership?.data?.message
                }
              />
            </>
          )} */}

          {/* Business Relationship - COMPANY */}
          {/* {applicationForm.business_relationship_id == 3 && (
            <>
              <StyledInputFileFieldControlled
                id={'certificate_of_incorporation'}
                name={'certificate_of_incorporation'}
                label={
                  <>
                    Certificate of Incorporation
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
                  applicationForm.certificate_of_incorporation
                )}
                control={controlDocuments}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldDocuments}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsDocuments.certificate_of_incorporation}
                helperText={
                  errorsDocuments?.certificate_of_incorporation?.data?.message
                }
              />

              <StyledInputFileFieldControlled
                id={'form_j'}
                name={'form_j'}
                label={
                  <>
                    Form - J
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
                inputValue={getDocumentInputValue(applicationForm.form_j)}
                control={controlDocuments}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldDocuments}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsDocuments.form_j}
                helperText={errorsDocuments?.form_j?.data?.message}
              />

              <StyledInputFileFieldControlled
                id={'memorandum_and_articles_of_association'}
                name={'memorandum_and_articles_of_association'}
                label={'Memorandum and Articles of Association'}
                variant={'outlined'}
                inputValue={handleFileNameExtension(
                  applicationForm.memorandum_and_articles_of_association
                )}
                control={controlDocuments}
                fileTypes={fileTypesPdf}
                handleResetReduxState={handleResetFileState}
                resetField={resetFieldDocuments}
                onInputChange={onChangeFilePdf}
                onSaveDraftById={handleSaveDraftFile}
                error={!!errorsDocuments.memorandum_and_articles_of_association}
                helperText={
                  errorsDocuments?.memorandum_and_articles_of_association?.data
                    ?.message
                }
              />
            </>
          )} */}
        </StyledGeneralDocumentsContainer>

        <StyledDynamicDocumentsContainer>
          <StyledDynamicDocumentsInnerContainer>
            <StyledDocumentsInfoContainer>
              <StyledDocumentsTitle>AFFIDAVIT</StyledDocumentsTitle>
              <StyledDocumentsAffidavitContainer>
                <StyledDocumentsDescription>
                  Download and complete the Affidavit which is a requirement for the application process.
                </StyledDocumentsDescription>
                <StyledButtonContinue
                  fullWidth={false}
                  variant="outlined"
                  color="primary"
                  onClick={handleGetAffidavitPdf}
                >
                  Download Affidavit
                </StyledButtonContinue>
              </StyledDocumentsAffidavitContainer>
            </StyledDocumentsInfoContainer>

            <StyledInputFileFieldControlled
              id={'affidavit'}
              name={'affidavit'}
              label={'Affidavit'}
              variant={'outlined'}
              inputValue={getDocumentInputValue(applicationForm.affidavit)}
              control={controlDocuments}
              fileTypes={fileTypesPdf}
              handleResetReduxState={handleResetFileState}
              resetField={resetFieldDocuments}
              onInputChange={onChangeFilePdf}
              onSaveDraftById={handleSaveDraftFile}
              error={!!errorsDocuments.affidavit}
              helperText={errorsDocuments?.affidavit?.data?.message}
            />
          </StyledDynamicDocumentsInnerContainer>
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
                  // promiseUpdateUserApplication ||
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
              onClick={() => {
                console.log('🚀 Button clicked! isValidDocuments:', isValidDocuments);
                console.log('🚀 Form errors:', errorsDocuments);
                console.log('🚀 Application form:', applicationForm);
                if (isValidDocuments) {
                  console.log('🚀 Form is valid, calling handleSubmitDocuments');
                  handleSubmitDocuments(onSubmitFinalBeforeTyc)();
                } else {
                  console.log('🚀 Form is not valid, calling onSubmitFinalBeforeTyc directly');
                  onSubmitFinalBeforeTyc(getValuesDocuments());
                }
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
                  ? onSubmitFinalFromTyc()
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

export default ApplicationFormStep3;
