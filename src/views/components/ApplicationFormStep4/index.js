import React, { Suspense } from 'react';
import useComponents from '..';
import useControllers from '../../../controllers';
import useHelpers from '../../../helpers';
import { useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  StyledApplicationFourthStepSection,
  StyledLetterActContainer,
  // StyledTypographyLetterActContainer,
  // StyledTypographySpaceLetterActContainer,
  StyledSelectFieldControlledLetterAct,
  StyledSmallSelectFieldControlledLetterAct,
  StyledTextFieldControlledControlledLetterAct,
  StyledSmallTextFieldControlledControlledLetterAct,
  StyledSelectFieldControlledLicense,
  StyledTypeOfRegistrationContainer,
  StyledFieldsContainer,
  StyledFieldsSubFormContainer,
  StyledFieldRowHidden,
  StyledRowPhoneIndicative,
  StyledRowPhoneNumber,
  StyledSectionFormTitle,
  StyledDirectorFormContainer,
  StyledDirectorFormTitle,
  StyledShareholderFormContainer,
  StyledShareholderFormTitle,
  StyledDirectorFormInnerContainer,
  StyledShareholderInnerContainer,
  StyledButtonAddAnother,
  StyledRowTitleDirector,
  StyledButtonRemove,
  StyledCurrentDirector,
  StyledRowTitleShareholder,
  StyledCurrentShareholder,
  StyledSubFormContainer,
  StyledSection14Container,
  StyledSection14PersonContainer,
  StyledSection14CompanyContainer,
  StyledActInfoContainer,
  StyledActTitle,
  StyledInputFileFieldControlled,
  StyledTypographyTooltip,
  StyledRowButtons,
  StyledFieldRowBottom,
  StyledButtonSaveAndContinue,
  StyledButtonContinue,
  StyledTitleModal,
  StyledChildContainerModal,
  StyledDescriptionModal,
  StyledButtonModal,
  StyledTitleModalTyc,
  StyledChildContainerModalTyc,
  StyledChecksContainerModalTyc,
  StyledCheckboxContainer,
  StyledRowButtonsModalTyc,
  StyledButtonContinueModalTyc,
  StyledButtonCancelModalTyc,
  StyledTitleModalCancel,
  StyledSubtitleModalCancel,
  StyledButtonModalCancel,
} from './ApplicationFormStep4.styles';
import { Box } from '@mui/material';
import _ from 'lodash';
import CheckboxControlled from '../CheckboxControlled';

const ApplicationFormStep4 = () => {
  const {
    ActivityIndicator,
    Modal,
    PhoneInputFieldControlled,
    SelectFieldControlled,
    TextFieldControlled,
    Typography,
    TooltipField,
  } = useComponents();

  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useValidators } = useQuickFunctions();
  const {
    applicationFormStep4LetterActSchemaValidator,
    applicationFormStep4TermsSchemaValidator,
  } = useValidators();

  // Hooks
  const { useComponentHooks } = useControllers();
  const { useApplicationFormStep4 } = useComponentHooks();

  const {
    // handleSubmit: handleSubmitLicenseAct,
    getValues: getValuesLicenseAct,
    setValue: setValueLicenseAct,
    watch: watchLicenseAct,
    control: controlLicenseAct,
    resetField: resetFieldLicenseAct,
    formState: { errors: errorsLicenseAct, isValid: isValidLicenseAct },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(applicationFormStep4LetterActSchemaValidator),
  });

  const {
    fields: fieldsDirectors,
    append: appendDirector,
    remove: removeDirector,
  } = useFieldArray({ name: 'directors', control: controlLicenseAct });
  const {
    fields: fieldsShareholders,
    append: appendShareholder,
    remove: removeShareholder,
  } = useFieldArray({ name: 'shareholders', control: controlLicenseAct });

  const {
    getValues: getValuesSubmitTerms,
    control: controlTerms,
    formState: { errors: errorsTerms, isValid: isValidTerms },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(applicationFormStep4TermsSchemaValidator),
  });
  const {
    promiseSaveAdvertisingFeeApplicationSubmit,
    promiseUpdateAdvertisingFeeApplicationSubmit,
    promiseSaveUserApplication,
    promiseUpdateUserApplication,
    promiseCancelApplication,

    fileTypesPdf,
    applicationForOptions,
    businessStyles,
    citizenships,
    countries,
    districts,
    licenceTypes,
    natureOfLicences,
    privilegesOptions,
    phoneIndicators,
    regulationsNumbers,
    typeOfRegistration,

    handleFileNameExtension,
    onChangeFilePdf,
    handleResetFileState,
    handleSaveDraftFile,

    handleAddAnotherDirector,
    handleAddAnotherShareholder,
    handleRemoveAnotherDirector,
    handleRemoveAnotherShareholder,

    onChangeInputFieldPhone,
    handleIndicative,
    defaultIndicative,

    onSubmitTermsConfirmation,
    onSubmit,
    onSubmitDraft,
    applicationForm,

    modalStateSubmitSuccess,
    handleCloseModalSubmitSucces,

    modalStateDraft,
    handleCloseModalDraftSuccesApplications,
    handleCloseModalDraftSuccesHome,

    modalStateCancel,
    handleCancelApplicationAndCloseModal,
    handleCloseModalCancel,

    handleCloseTermsModal,
    modalStateTerms,
    loadingFinalSubmitStep4State,
  } = useApplicationFormStep4(
    setValueLicenseAct,
    isValidLicenseAct,
    getValuesLicenseAct,
    appendDirector,
    appendShareholder,
    removeDirector,
    removeShareholder
  );
  return (
    <Suspense fallback={<ActivityIndicator />}>
      <StyledApplicationFourthStepSection>
        <StyledLetterActContainer>
          <Box>Application for the</Box>
          <StyledSelectFieldControlledLetterAct
            id={'applicationFor'}
            label={''}
            name={'applicationFor'}
            control={controlLicenseAct}
            inputValue={
              applicationForm.applicationFor
                ? applicationForm.applicationFor
                : applicationForOptions[0].id
            }
            options={applicationForOptions}
            error={!!errorsLicenseAct.applicationFor}
            helperText={errorsLicenseAct?.applicationFor?.message}
          />
          <Box>of a</Box>
          <StyledSelectFieldControlledLetterAct
            id={'liquorLicenseId'}
            label={''}
            name={'liquorLicenseId'}
            control={controlLicenseAct}
            inputValue={
              applicationForm.liquorLicenseId
                ? applicationForm.liquorLicenseId
                : licenceTypes[0].id
            }
            options={licenceTypes}
            error={!!errorsLicenseAct.liquorLicenseId}
            helperText={errorsLicenseAct?.liquorLicenseId?.message}
          />
          <Box>liquor licence</Box>
          <Box>I, the undersigned</Box>
          <StyledTextFieldControlledControlledLetterAct
            inputValue={
              applicationForm.undersigned && applicationForm.undersigned
            }
            id={'undersigned'}
            placeholder={'Lorem ipsum'}
            label={''}
            name={'undersigned'}
            variant={'outlined'}
            fullWidth={true}
            control={controlLicenseAct}
            error={!!errorsLicenseAct.undersigned}
            helperText={errorsLicenseAct?.undersigned?.message}
          />
          <Box>
            do hereby apply to the Liquor Licences Board in terms of Section 14
            of the Liquor Licenses Act No. 30 of 1964 for the
          </Box>
          <Box> grant/renewal,</Box>{' '}
          <StyledSmallTextFieldControlledControlledLetterAct
            inputValue={
              applicationForm.undefinedField && applicationForm.undefinedField
            }
            id={'undefinedField'}
            placeholder={'Lorem ipsum'}
            label={''}
            name={'undefinedField'}
            variant={'outlined'}
            fullWidth={true}
            control={controlLicenseAct}
            error={!!errorsLicenseAct.undefinedField}
            helperText={errorsLicenseAct?.undefinedField?.message}
          />
          <Box>Liquor Licence within the meaning of Regulations No</Box>
          <StyledSmallSelectFieldControlledLetterAct
            id={'regulationNumber'}
            label={''}
            name={'regulationNumber'}
            control={controlLicenseAct}
            inputValue={
              applicationForm.regulationNumber
                ? applicationForm.regulationNumber
                : regulationsNumbers[0].id
            }
            options={regulationsNumbers}
            error={!!errorsLicenseAct.regulationNumber}
            helperText={errorsLicenseAct?.regulationNumber?.message}
          />
          <Box>
            of the Liquor Licenses Regulations 1964. In support of the
            application I furnish the following information:
          </Box>
        </StyledLetterActContainer>

        <StyledTypeOfRegistrationContainer>
          <StyledFieldsContainer>
            <StyledSelectFieldControlledLicense
              disabledInput
              id={'applicantTypeForLicenseId'}
              label={'Please select the type of applicant for the licence'}
              name={'applicantTypeForLicenseId'}
              control={controlLicenseAct}
              inputValue={
                applicationForm.typeOfRegistrationId
                  ? applicationForm.typeOfRegistrationId
                  : typeOfRegistration[0].id
              }
              options={typeOfRegistration}
              error={!!errorsLicenseAct.applicantTypeForLicenseId}
              helperText={errorsLicenseAct?.applicantTypeForLicenseId?.message}
            />
          </StyledFieldsContainer>
        </StyledTypeOfRegistrationContainer>

        <StyledSection14Container>
          {watchLicenseAct('applicantTypeForLicenseId') === 2 ? (
            <StyledSection14CompanyContainer>
              {/* company */}
              <StyledActInfoContainer>
                <StyledActTitle>Section 14(2)</StyledActTitle>
              </StyledActInfoContainer>
              <StyledFieldsContainer>
                <TextFieldControlled
                  inputValue={
                    applicationForm.applicantFullName &&
                    applicationForm.applicantFullName
                  }
                  id={'applicantFullName'}
                  name={'applicantFullName'}
                  placeholder={'Applicant full name'}
                  label={
                    <>
                      Applicant full name
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
                  fullWidth={true}
                  control={controlLicenseAct}
                  error={!!errorsLicenseAct.applicantFullName}
                  helperText={errorsLicenseAct?.applicantFullName?.message}
                />
                <SelectFieldControlled
                  id={'applicantNationalityId'}
                  label={
                    <>
                      Nationality
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
                  name={'applicantNationalityId'}
                  control={controlLicenseAct}
                  inputValue={
                    applicationForm.applicantNationalityId
                      ? applicationForm.applicantNationalityId
                      : countries[0].id
                  }
                  options={countries}
                />

                <StyledFieldRowHidden>
                  <StyledRowPhoneIndicative>
                    <SelectFieldControlled
                      id={'phoneNumberIndicatorId'}
                      name={'phoneNumberIndicatorId'}
                      label={'Phone'}
                      valueName={'phoneIndicator'}
                      control={controlLicenseAct}
                      inputValue={
                        applicationForm.phoneNumberIndicatorId
                          ? applicationForm.phoneNumberIndicatorId
                          : defaultIndicative(phoneIndicators).id
                      }
                      options={phoneIndicators}
                    />
                  </StyledRowPhoneIndicative>
                  <StyledRowPhoneNumber>
                    <TextFieldControlled
                      inputValue={
                        applicationForm.phoneNumber &&
                        applicationForm.phoneNumber
                      }
                      placeholder={'Contact Number'}
                      id={'phoneNumber'}
                      label={' '}
                      control={controlLicenseAct}
                      name={'phoneNumber'}
                      error={!!errorsLicenseAct.phone}
                      helperText={errorsLicenseAct?.phone?.message}
                    />
                  </StyledRowPhoneNumber>
                </StyledFieldRowHidden>

                <StyledFieldRowHidden>
                  <StyledRowPhoneIndicative>
                    <SelectFieldControlled
                      id={'cellphoneIndicatorId'}
                      label={'Phone 2'}
                      name={'cellphoneIndicatorId'}
                      valueName={'phoneIndicator'}
                      control={controlLicenseAct}
                      inputValue={
                        applicationForm.cellphoneIndicatorId
                          ? applicationForm.cellphoneIndicatorId
                          : defaultIndicative(phoneIndicators).id
                      }
                      options={phoneIndicators}
                    />
                  </StyledRowPhoneIndicative>
                  <StyledRowPhoneNumber>
                    <TextFieldControlled
                      id={'cellphone'}
                      name={'cellphone'}
                      inputValue={
                        applicationForm.cellphone && applicationForm.cellphone
                      }
                      placeholder={'Alternative Contact Number'}
                      control={controlLicenseAct}
                      error={!!errorsLicenseAct.cellphone}
                      helperText={errorsLicenseAct?.cellphone?.message}
                    />
                  </StyledRowPhoneNumber>
                </StyledFieldRowHidden>

                <PhoneInputFieldControlled
                  id={'phoneNumberVisual'}
                  name={'phoneNumberVisual'}
                  indicatorId={'phoneNumberIndicatorId'}
                  label={'Phone number'}
                  inputValue={`${handleIndicative(
                    applicationForm.phoneNumberIndicatorId
                      ? applicationForm.phoneNumberIndicatorId
                      : defaultIndicative(phoneIndicators).id,
                    applicationForm.phoneNumber
                      ? applicationForm.phoneNumber
                      : ''
                  )}`}
                  control={controlLicenseAct}
                  onInputChange={onChangeInputFieldPhone}
                  error={!!errorsLicenseAct.phone}
                  helperText={errorsLicenseAct?.phone?.message}
                />
                <PhoneInputFieldControlled
                  id={'cellphoneVisual'}
                  name={'cellphoneVisual'}
                  indicatorId={'cellphoneIndicatorId'}
                  label={'Cell number'}
                  inputValue={`${handleIndicative(
                    applicationForm.cellphoneIndicatorId
                      ? applicationForm.cellphoneIndicatorId
                      : defaultIndicative(phoneIndicators).id,
                    applicationForm.cellphone ? applicationForm.cellphone : ''
                  )}`}
                  control={controlLicenseAct}
                  onInputChange={onChangeInputFieldPhone}
                  error={!!errorsLicenseAct.phoneAlternative}
                  helperText={errorsLicenseAct?.phoneAlternative?.message}
                />

                <TextFieldControlled
                  inputValue={
                    applicationForm.applicantPinNumber &&
                    applicationForm.applicantPinNumber
                  }
                  id={'applicantPinNumber'}
                  placeholder={'0000000'}
                  label={'PIN (Personal Identity Number)'}
                  name={'applicantPinNumber'}
                  control={controlLicenseAct}
                  error={!!errorsLicenseAct.applicantPinNumber}
                  helperText={errorsLicenseAct?.applicantPinNumber?.message}
                />
              </StyledFieldsContainer>

              {/* Director form */}
              <StyledDirectorFormContainer>
                <StyledDirectorFormTitle>
                  State particulars of each director:
                </StyledDirectorFormTitle>

                {/*For those fields inputValue is not necessary, append method add the defaultvalue */}
                {_.map(fieldsDirectors, (field, index) => {
                  return (
                    <StyledDirectorFormInnerContainer key={field.id}>
                      <StyledRowTitleDirector>
                        <StyledCurrentDirector>
                          {`Director ${index + 1}:`}
                        </StyledCurrentDirector>
                        {index > 0 && (
                          <StyledButtonRemove
                            color={'secondary'}
                            variant={'outlined'}
                            fullWidth={false}
                            onClick={() => handleRemoveAnotherDirector(index)}
                          >
                            Remove
                          </StyledButtonRemove>
                        )}
                      </StyledRowTitleDirector>

                      <StyledFieldsSubFormContainer>
                        <TextFieldControlled
                          id={`directors.${index}.name`}
                          placeholder={'Name'}
                          label={
                            <>
                              Name
                              <TooltipField
                                title={
                                  <StyledTypographyTooltip>
                                    Lorem Ipsum is simply dummy text of the
                                    printing.
                                  </StyledTypographyTooltip>
                                }
                                size={1.3333}
                              />
                            </>
                          }
                          name={`directors.${index}.name`}
                          variant={'outlined'}
                          fullWidth={true}
                          control={controlLicenseAct}
                          error={
                            errorsLicenseAct.directors &&
                            !!errorsLicenseAct.directors[index]?.name
                          }
                          helperText={
                            errorsLicenseAct.directors &&
                            errorsLicenseAct.directors[index]?.name?.message
                          }
                        />
                        <SelectFieldControlled
                          id={`directors.${index}.residentCountryId`}
                          label={
                            <>
                              Resident country
                              <TooltipField
                                title={
                                  <StyledTypographyTooltip>
                                    Lorem Ipsum is simply dummy text of the
                                    printing.
                                  </StyledTypographyTooltip>
                                }
                                size={1.3333}
                              />
                            </>
                          }
                          name={`directors.${index}.residentCountryId`}
                          control={controlLicenseAct}
                          options={countries}
                        />

                        <TextFieldControlled
                          inputValue={
                            applicationForm.directors[index]?.address &&
                            applicationForm.directors[index].address
                          }
                          id={`directors.${index}.address`}
                          placeholder={'Address'}
                          label={'Address'}
                          name={`directors.${index}.address`}
                          control={controlLicenseAct}
                          error={
                            errorsLicenseAct.directors &&
                            !!errorsLicenseAct.directors[index]?.address
                          }
                          helperText={
                            errorsLicenseAct.directors &&
                            errorsLicenseAct.directors[index]?.address?.message
                          }
                        />

                        <SelectFieldControlled
                          id={`directors.${index}.citizenshipId`}
                          label={
                            <>
                              Citizenship
                              <TooltipField
                                title={
                                  <StyledTypographyTooltip>
                                    Lorem Ipsum is simply dummy text of the
                                    printing.
                                  </StyledTypographyTooltip>
                                }
                                size={1.3333}
                              />
                            </>
                          }
                          name={`directors.${index}.citizenshipId`}
                          control={controlLicenseAct}
                          options={citizenships}
                        />

                        <TextFieldControlled
                          id={`directors.${index}.pin`}
                          placeholder={'0000000'}
                          label={'PIN'}
                          name={`directors.${index}.pin`}
                          control={controlLicenseAct}
                          error={
                            errorsLicenseAct.directors &&
                            !!errorsLicenseAct.directors[index]?.pin
                          }
                          helperText={
                            errorsLicenseAct.directors &&
                            errorsLicenseAct.directors[index]?.pin?.message
                          }
                        />
                        <TextFieldControlled
                          id={`directors.${index}.trpNumber`}
                          placeholder={'0000000'}
                          label={'TRP number (Temporary Residence Permit)'}
                          name={`directors.${index}.trpNumber`}
                          control={controlLicenseAct}
                          error={
                            errorsLicenseAct.directors &&
                            !!errorsLicenseAct.directors[index]?.trpNumber
                          }
                          helperText={
                            errorsLicenseAct.directors &&
                            errorsLicenseAct.directors[index]?.trpNumber
                              ?.message
                          }
                        />
                      </StyledFieldsSubFormContainer>
                    </StyledDirectorFormInnerContainer>
                  );
                })}

                <StyledFieldsContainer>
                  <StyledButtonAddAnother onClick={handleAddAnotherDirector}>
                    + Add another director
                  </StyledButtonAddAnother>
                </StyledFieldsContainer>
              </StyledDirectorFormContainer>

              {/* Shareholder form */}
              <StyledShareholderFormContainer>
                <StyledShareholderFormTitle>
                  State particulars of each shareholder:
                </StyledShareholderFormTitle>
                {/*For those fields inputValue is not necessary, append method add the defaultvalue */}
                {_.map(fieldsShareholders, (field, index) => {
                  return (
                    <StyledShareholderInnerContainer key={field.id}>
                      <StyledRowTitleShareholder>
                        <StyledCurrentShareholder>
                          {`Shareholder ${index + 1}:`}
                        </StyledCurrentShareholder>
                        {index > 0 && (
                          <StyledButtonRemove
                            color={'secondary'}
                            variant={'outlined'}
                            fullWidth={false}
                            onClick={() =>
                              handleRemoveAnotherShareholder(index)
                            }
                          >
                            Remove
                          </StyledButtonRemove>
                        )}
                      </StyledRowTitleShareholder>

                      <StyledFieldsSubFormContainer>
                        <TextFieldControlled
                          id={`shareholders.${index}.name`}
                          placeholder={'Name'}
                          label={
                            <>
                              Name
                              <TooltipField
                                title={
                                  <StyledTypographyTooltip>
                                    Lorem Ipsum is simply dummy text of the
                                    printing.
                                  </StyledTypographyTooltip>
                                }
                                size={1.3333}
                              />
                            </>
                          }
                          name={`shareholders.${index}.name`}
                          variant={'outlined'}
                          fullWidth={true}
                          control={controlLicenseAct}
                          error={
                            errorsLicenseAct.shareholders &&
                            !!errorsLicenseAct.shareholders[index]?.name
                          }
                          helperText={
                            errorsLicenseAct.shareholders &&
                            errorsLicenseAct.shareholders[index]?.name?.message
                          }
                        />
                        <SelectFieldControlled
                          id={`shareholders.${index}.residentCountryId`}
                          label={
                            <>
                              Resident country
                              <TooltipField
                                title={
                                  <StyledTypographyTooltip>
                                    Lorem Ipsum is simply dummy text of the
                                    printing.
                                  </StyledTypographyTooltip>
                                }
                                size={1.3333}
                              />
                            </>
                          }
                          name={`shareholders.${index}.residentCountryId`}
                          control={controlLicenseAct}
                          options={countries}
                        />

                        <TextFieldControlled
                          id={`shareholders.${index}.address`}
                          placeholder={'Address'}
                          label={'Address'}
                          name={`shareholders.${index}.address`}
                          control={controlLicenseAct}
                          error={
                            errorsLicenseAct.shareholders &&
                            !!errorsLicenseAct.shareholders[index]?.address
                          }
                          helperText={
                            errorsLicenseAct.shareholders &&
                            errorsLicenseAct.shareholders[index]?.address
                              ?.message
                          }
                        />

                        <SelectFieldControlled
                          id={`shareholders.${index}.citizenshipId`}
                          label={
                            <>
                              Citizenship
                              <TooltipField
                                title={
                                  <StyledTypographyTooltip>
                                    Lorem Ipsum is simply dummy text of the
                                    printing.
                                  </StyledTypographyTooltip>
                                }
                                size={1.3333}
                              />
                            </>
                          }
                          name={`shareholders.${index}.citizenshipId`}
                          control={controlLicenseAct}
                          options={citizenships}
                        />

                        <TextFieldControlled
                          id={`shareholders.${index}.pin`}
                          placeholder={'0000000'}
                          label={'PIN'}
                          name={`shareholders.${index}.pin`}
                          control={controlLicenseAct}
                          error={
                            errorsLicenseAct.shareholders &&
                            !!errorsLicenseAct.shareholders[index]?.pin
                          }
                          helperText={
                            errorsLicenseAct.shareholders &&
                            errorsLicenseAct.shareholders[index]?.pin?.message
                          }
                        />
                        <TextFieldControlled
                          id={`shareholders.${index}.trpNumber`}
                          placeholder={'0000000'}
                          label={'TRP number (Temporary Residence Permit)'}
                          name={`shareholders.${index}.trpNumber`}
                          control={controlLicenseAct}
                          error={
                            errorsLicenseAct.shareholders &&
                            !!errorsLicenseAct.shareholders[index]?.trpNumber
                          }
                          helperText={
                            errorsLicenseAct.shareholders &&
                            errorsLicenseAct.shareholders[index]?.trpNumber
                              ?.message
                          }
                        />
                      </StyledFieldsSubFormContainer>
                    </StyledShareholderInnerContainer>
                  );
                })}
                <StyledFieldsContainer>
                  <StyledButtonAddAnother onClick={handleAddAnotherShareholder}>
                    + Add another shareholder
                  </StyledButtonAddAnother>
                </StyledFieldsContainer>
              </StyledShareholderFormContainer>
              <StyledSubFormContainer>
                <StyledSectionFormTitle>
                  Responsible manager information:
                </StyledSectionFormTitle>
                <StyledFieldsContainer>
                  <TextFieldControlled
                    inputValue={
                      applicationForm.responsibleFullName &&
                      applicationForm.responsibleFullName
                    }
                    id={'responsibleFullName'}
                    placeholder={'Full name'}
                    label={
                      <>
                        Full name
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
                    name={'responsibleFullName'}
                    variant={'outlined'}
                    fullWidth={true}
                    control={controlLicenseAct}
                    error={!!errorsLicenseAct.responsibleFullName}
                    helperText={errorsLicenseAct?.responsibleFullName?.message}
                  />
                  <TextFieldControlled
                    inputValue={
                      applicationForm.responsibleAddress &&
                      applicationForm.responsibleAddress
                    }
                    id={'responsibleAddress'}
                    placeholder={'Address'}
                    label={
                      <>
                        Address
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
                    name={'responsibleAddress'}
                    variant={'outlined'}
                    fullWidth={true}
                    control={controlLicenseAct}
                    error={!!errorsLicenseAct.responsibleAddress}
                    helperText={errorsLicenseAct?.responsibleAddress?.message}
                  />
                </StyledFieldsContainer>
              </StyledSubFormContainer>

              <StyledSubFormContainer>
                <StyledSectionFormTitle>
                  Information where business will be conducted:
                </StyledSectionFormTitle>
                <StyledFieldsContainer>
                  <SelectFieldControlled
                    id={'districtId'}
                    label={
                      <>
                        District
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
                    name={'districtId'}
                    control={controlLicenseAct}
                    inputValue={
                      applicationForm.districtId
                        ? applicationForm.districtId
                        : districts[0].id
                    }
                    options={districts}
                  />
                  <TextFieldControlled
                    inputValue={
                      applicationForm.plotNumber && applicationForm.plotNumber
                    }
                    id={'plotNumber'}
                    placeholder={'Plot number'}
                    label={
                      <>
                        Plot number
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
                    name={'plotNumber'}
                    variant={'outlined'}
                    fullWidth={true}
                    control={controlLicenseAct}
                    error={!!errorsLicenseAct.plotNumber}
                    helperText={errorsLicenseAct?.plotNumber?.message}
                  />
                  <TextFieldControlled
                    inputValue={applicationForm.place && applicationForm.place}
                    id={'place'}
                    placeholder={'Place'}
                    label={'Place'}
                    name={'place'}
                    variant={'outlined'}
                    fullWidth={true}
                    control={controlLicenseAct}
                    error={!!errorsLicenseAct.place}
                    helperText={errorsLicenseAct?.place?.message}
                  />
                  <SelectFieldControlled
                    id={'businessStyleId'}
                    label={'Business style'}
                    name={'businessStyleId'}
                    control={controlLicenseAct}
                    inputValue={
                      applicationForm.businessStyleId
                        ? applicationForm.businessStyleId
                        : businessStyles[0].id
                    }
                    options={businessStyles}
                  />
                  <SelectFieldControlled
                    id={'natureOfLicenceId'}
                    label={'Nature of Licence'}
                    name={'natureOfLicenceId'}
                    control={controlLicenseAct}
                    inputValue={
                      applicationForm.natureOfLicenceId
                        ? applicationForm.natureOfLicenceId
                        : natureOfLicences[0].id
                    }
                    options={natureOfLicences}
                  />
                  <SelectFieldControlled
                    id={'privileges'}
                    label={'Privileges'}
                    name={'privileges'}
                    control={controlLicenseAct}
                    inputValue={
                      applicationForm.privileges
                        ? applicationForm.privileges
                        : privilegesOptions[0].id
                    }
                    options={privilegesOptions}
                  />
                </StyledFieldsContainer>
              </StyledSubFormContainer>

              <StyledSubFormContainer>
                <StyledInputFileFieldControlled
                  id={'planOfPremises'}
                  name={'planOfPremises'}
                  label={'Plan of premises'}
                  variant={'outlined'}
                  inputValue={handleFileNameExtension(
                    applicationForm.planOfPremises
                  )}
                  control={controlLicenseAct}
                  fileTypes={fileTypesPdf}
                  handleResetReduxState={handleResetFileState}
                  resetField={resetFieldLicenseAct}
                  onInputChange={onChangeFilePdf}
                  onSaveDraftById={handleSaveDraftFile}
                  error={!!errorsLicenseAct.planOfPremises}
                  helperText={errorsLicenseAct?.planOfPremises?.message}
                />
                <StyledInputFileFieldControlled
                  id={'affidavit'}
                  name={'affidavit'}
                  label={'Affidavit'}
                  variant={'outlined'}
                  inputValue={handleFileNameExtension(
                    applicationForm.affidavit
                  )}
                  control={controlLicenseAct}
                  fileTypes={fileTypesPdf}
                  handleResetReduxState={handleResetFileState}
                  resetField={resetFieldLicenseAct}
                  onInputChange={onChangeFilePdf}
                  onSaveDraftById={handleSaveDraftFile}
                  error={!!errorsLicenseAct.affidavit}
                  helperText={errorsLicenseAct?.affidavit?.message}
                />
                <StyledInputFileFieldControlled
                  id={'leaseAgreement'}
                  name={'leaseAgreement'}
                  label={'Lease agreement / Contract / Title deed'}
                  variant={'outlined'}
                  inputValue={handleFileNameExtension(
                    applicationForm.leaseAgreement
                  )}
                  control={controlLicenseAct}
                  fileTypes={fileTypesPdf}
                  handleResetReduxState={handleResetFileState}
                  resetField={resetFieldLicenseAct}
                  onInputChange={onChangeFilePdf}
                  onSaveDraftById={handleSaveDraftFile}
                  error={!!errorsLicenseAct.leaseAgreement}
                  helperText={errorsLicenseAct?.leaseAgreement?.message}
                />
              </StyledSubFormContainer>
            </StyledSection14CompanyContainer>
          ) : (
            <StyledSection14PersonContainer>
              {/* person */}
              <StyledActInfoContainer>
                <StyledActTitle>Section 14(2)</StyledActTitle>
              </StyledActInfoContainer>
              <StyledSubFormContainer>
                <StyledFieldsContainer>
                  <TextFieldControlled
                    inputValue={
                      applicationForm.applicantFullName &&
                      applicationForm.applicantFullName
                    }
                    id={'applicantFullName'}
                    name={'applicantFullName'}
                    placeholder={'Applicant full name'}
                    label={
                      <>
                        Applicant full name
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
                    fullWidth={true}
                    control={controlLicenseAct}
                    error={!!errorsLicenseAct.applicantFullName}
                    helperText={errorsLicenseAct?.applicantFullName?.message}
                  />
                  <SelectFieldControlled
                    id={'applicantNationalityId'}
                    label={
                      <>
                        Nationality
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
                    name={'applicantNationalityId'}
                    control={controlLicenseAct}
                    inputValue={
                      applicationForm.applicantNationalityId
                        ? applicationForm.applicantNationalityId
                        : countries[0].id
                    }
                    options={countries}
                  />

                  <StyledFieldRowHidden>
                    <StyledRowPhoneIndicative>
                      <SelectFieldControlled
                        id={'phoneNumberIndicatorId'}
                        name={'phoneNumberIndicatorId'}
                        label={'Phone'}
                        valueName={'phoneIndicator'}
                        control={controlLicenseAct}
                        inputValue={
                          applicationForm.phoneNumberIndicatorId
                            ? applicationForm.phoneNumberIndicatorId
                            : defaultIndicative(phoneIndicators).id
                        }
                        options={phoneIndicators}
                      />
                    </StyledRowPhoneIndicative>
                    <StyledRowPhoneNumber>
                      <TextFieldControlled
                        inputValue={
                          applicationForm.phoneNumber &&
                          applicationForm.phoneNumber
                        }
                        placeholder={'Contact Number'}
                        id={'phoneNumber'}
                        label={' '}
                        control={controlLicenseAct}
                        name={'phoneNumber'}
                        error={!!errorsLicenseAct.phoneNumber}
                        helperText={errorsLicenseAct?.phoneNumber?.message}
                      />
                    </StyledRowPhoneNumber>
                  </StyledFieldRowHidden>

                  <StyledFieldRowHidden>
                    <StyledRowPhoneIndicative>
                      <SelectFieldControlled
                        id={'cellphoneIndicatorId'}
                        label={'Phone 2'}
                        name={'cellphoneIndicatorId'}
                        valueName={'phoneIndicator'}
                        control={controlLicenseAct}
                        inputValue={
                          applicationForm.cellphoneIndicatorId
                            ? applicationForm.cellphoneIndicatorId
                            : defaultIndicative(phoneIndicators).id
                        }
                        options={phoneIndicators}
                      />
                    </StyledRowPhoneIndicative>
                    <StyledRowPhoneNumber>
                      <TextFieldControlled
                        id={'cellphone'}
                        name={'cellphone'}
                        inputValue={
                          applicationForm.cellphone && applicationForm.cellphone
                        }
                        placeholder={'Alternative Contact Number'}
                        control={controlLicenseAct}
                        error={!!errorsLicenseAct.cellphone}
                        helperText={errorsLicenseAct?.cellphone?.message}
                      />
                    </StyledRowPhoneNumber>
                  </StyledFieldRowHidden>

                  <PhoneInputFieldControlled
                    id={'phoneNumberVisual'}
                    name={'phoneNumberVisual'}
                    indicatorId={'phoneNumberIndicatorId'}
                    label={'Phone number'}
                    inputValue={`${handleIndicative(
                      applicationForm.phoneNumberIndicatorId
                        ? applicationForm.phoneNumberIndicatorId
                        : defaultIndicative(phoneIndicators).id,
                      applicationForm.phoneNumber
                        ? applicationForm.phoneNumber
                        : ''
                    )}`}
                    control={controlLicenseAct}
                    onInputChange={onChangeInputFieldPhone}
                    error={!!errorsLicenseAct.phone}
                    helperText={errorsLicenseAct?.phone?.message}
                  />
                  <PhoneInputFieldControlled
                    id={'cellphoneVisual'}
                    name={'cellphoneVisual'}
                    indicatorId={'cellphoneIndicatorId'}
                    label={'Cell number'}
                    inputValue={`${handleIndicative(
                      applicationForm.cellphoneIndicatorId
                        ? applicationForm.cellphoneIndicatorId
                        : defaultIndicative(phoneIndicators).id,
                      applicationForm.cellphone ? applicationForm.cellphone : ''
                    )}`}
                    control={controlLicenseAct}
                    onInputChange={onChangeInputFieldPhone}
                    error={!!errorsLicenseAct.phoneAlternative}
                    helperText={errorsLicenseAct?.phoneAlternative?.message}
                  />

                  <TextFieldControlled
                    inputValue={
                      applicationForm.idNumber && applicationForm.idNumber
                    }
                    id={'idNumber'}
                    placeholder={'0000000'}
                    label={
                      <>
                        ID
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
                    name={'idNumber'}
                    control={controlLicenseAct}
                    error={!!errorsLicenseAct.idNumber}
                    helperText={errorsLicenseAct?.idNumber?.message}
                  />

                  <SelectFieldControlled
                    id={'districtId'}
                    label={
                      <>
                        District
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
                    name={'districtId'}
                    control={controlLicenseAct}
                    inputValue={
                      applicationForm.districtId
                        ? applicationForm.districtId
                        : districts[0].id
                    }
                    options={districts}
                  />
                  <TextFieldControlled
                    inputValue={
                      applicationForm.plotNumber && applicationForm.plotNumber
                    }
                    id={'plotNumber'}
                    placeholder={'Plot number'}
                    label={
                      <>
                        Plot number
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
                    name={'plotNumber'}
                    variant={'outlined'}
                    fullWidth={true}
                    control={controlLicenseAct}
                    error={!!errorsLicenseAct.plotNumber}
                    helperText={errorsLicenseAct?.plotNumber?.message}
                  />
                  <TextFieldControlled
                    inputValue={applicationForm.place && applicationForm.place}
                    id={'place'}
                    placeholder={'Place'}
                    label={'Place'}
                    name={'place'}
                    variant={'outlined'}
                    fullWidth={true}
                    control={controlLicenseAct}
                    error={!!errorsLicenseAct.place}
                    helperText={errorsLicenseAct?.place?.message}
                  />
                  <SelectFieldControlled
                    id={'businessStyleId'}
                    label={'Business style'}
                    name={'businessStyleId'}
                    control={controlLicenseAct}
                    inputValue={
                      applicationForm.businessStyleId
                        ? applicationForm.businessStyleId
                        : businessStyles[0].id
                    }
                    options={businessStyles}
                  />
                  <SelectFieldControlled
                    id={'natureOfLicenceId'}
                    label={'Nature of Licence'}
                    name={'natureOfLicenceId'}
                    control={controlLicenseAct}
                    inputValue={
                      applicationForm.natureOfLicenceId
                        ? applicationForm.natureOfLicenceId
                        : natureOfLicences[0].id
                    }
                    options={natureOfLicences}
                  />
                  <SelectFieldControlled
                    id={'privileges'}
                    label={'Privileges'}
                    name={'privileges'}
                    control={controlLicenseAct}
                    inputValue={
                      applicationForm.privileges
                        ? applicationForm.privileges
                        : privilegesOptions[0].id
                    }
                    options={privilegesOptions}
                  />
                </StyledFieldsContainer>
              </StyledSubFormContainer>

              <StyledSubFormContainer>
                <StyledInputFileFieldControlled
                  id={'planOfPremises'}
                  name={'planOfPremises'}
                  label={'Plan of premises'}
                  variant={'outlined'}
                  inputValue={handleFileNameExtension(
                    applicationForm.planOfPremises
                  )}
                  control={controlLicenseAct}
                  fileTypes={fileTypesPdf}
                  handleResetReduxState={handleResetFileState}
                  resetField={resetFieldLicenseAct}
                  onInputChange={onChangeFilePdf}
                  onSaveDraftById={handleSaveDraftFile}
                  error={!!errorsLicenseAct.planOfPremises}
                  helperText={errorsLicenseAct?.planOfPremises?.message}
                />
                <StyledInputFileFieldControlled
                  id={'affidavit'}
                  name={'affidavit'}
                  label={'Affidavit'}
                  variant={'outlined'}
                  inputValue={handleFileNameExtension(
                    applicationForm.affidavit
                  )}
                  control={controlLicenseAct}
                  fileTypes={fileTypesPdf}
                  handleResetReduxState={handleResetFileState}
                  resetField={resetFieldLicenseAct}
                  onInputChange={onChangeFilePdf}
                  onSaveDraftById={handleSaveDraftFile}
                  error={!!errorsLicenseAct.affidavit}
                  helperText={errorsLicenseAct?.affidavit?.message}
                />
                <StyledInputFileFieldControlled
                  id={'leaseAgreement'}
                  name={'leaseAgreement'}
                  label={'Lease agreement / Contract / Title deed'}
                  variant={'outlined'}
                  inputValue={handleFileNameExtension(
                    applicationForm.leaseAgreement
                  )}
                  control={controlLicenseAct}
                  fileTypes={fileTypesPdf}
                  handleResetReduxState={handleResetFileState}
                  resetField={resetFieldLicenseAct}
                  onInputChange={onChangeFilePdf}
                  onSaveDraftById={handleSaveDraftFile}
                  error={!!errorsLicenseAct.leaseAgreement}
                  helperText={errorsLicenseAct?.leaseAgreement?.message}
                />
              </StyledSubFormContainer>
            </StyledSection14PersonContainer>
          )}
        </StyledSection14Container>

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
                  promiseSaveUserApplication || promiseUpdateUserApplication
                }
                onClick={() => {
                  !promiseSaveUserApplication && !promiseUpdateUserApplication
                    ? onSubmitDraft(getValuesLicenseAct())
                    : () => {};
                }}
              >
                Save as a draft
              </StyledButtonSaveAndContinue>
            )}
            <StyledButtonContinue
              disabled={!isValidLicenseAct}
              fullWidth={false}
              color="primary"
              promiseLoading={loadingFinalSubmitStep4State}
              onClick={() => {
                !loadingFinalSubmitStep4State
                  ? onSubmit(getValuesLicenseAct())
                  : () => {};
              }}
            >
              Next
            </StyledButtonContinue>
          </StyledRowButtons>
        </StyledFieldRowBottom>
      </StyledApplicationFourthStepSection>
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
              // onClick={handleCloseModalDraftSuccesHome}
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
                promiseSaveAdvertisingFeeApplicationSubmit ||
                promiseUpdateAdvertisingFeeApplicationSubmit
              }
              onClick={() => {
                !promiseSaveUserApplication &&
                !promiseSaveAdvertisingFeeApplicationSubmit &&
                !promiseUpdateUserApplication &&
                !promiseUpdateAdvertisingFeeApplicationSubmit
                  ? onSubmitTermsConfirmation(getValuesSubmitTerms())
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
        type={'success'}
        showModal={modalStateSubmitSuccess.show}
        onClose={handleCloseModalSubmitSucces}
        title={modalStateSubmitSuccess.title}
        description={modalStateSubmitSuccess.description}
      />
    </Suspense>
  );
};

export default ApplicationFormStep4;
