import React, { Suspense } from 'react';
import useComponents from '..';
import useHelpers from '../../../helpers';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import {
  StyledFieldsContainer,
  // StyledFieldsColumnContainer,
  StyledFieldRowHidden,
  StyledRowPhoneIndicative,
  StyledRowPhoneNumber,
  StyledRowButtons,
  StyledFieldRowBottom,
  StyledButtonSaveAndContinue,
  StyledButtonContinue,
  // StyledCheckContainer,
  // StyledLabelCheck,
  // StyledSubTitle,
  StyledRadioGroupFieldControlled,
  StyledPhoneInputField,
  StyledTypographyTooltip,
  StyledTitleModal,
  StyledTitleModalCancel,
  StyledChildContainerModal,
  StyledDescriptionModal,
  StyledButtonModal,
  StyledButtonModalCancel,
  StyledSubtitleModalCancel,
} from './RenewalFormStep1.styles';
import useControllers from '../../../controllers';

const RenewalFormStep1 = () => {
  const {
    ActivityIndicator,
    // CheckboxControlled,
    // DocumentFieldControlled,
    Modal,
    // RadioGroupFieldControlled,
    SelectFieldControlled,
    TextFieldControlled,
    TooltipField,
    Typography,
  } = useComponents();

  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useValidators } = useQuickFunctions();
  const { applicationFormStep1SchemaValidator } = useValidators();

  // Hooks
  const { useComponentHooks } = useControllers();
  const { useRenewalFormStep1 } = useComponentHooks();

  // Yup validator
  const {
    control,
    getValues,
    setValue,
    // watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(applicationFormStep1SchemaValidator),
  });

  const {
    promiseSaveUserApplication,
    promiseUpdateUserApplication,
    promiseCancelApplication,
    promiseGetApplicationFiles,

    phoneIndicators,
    licenceTypes,
    handleIndicative,
    onChangeInputFieldPhone,
    defaultIndicative,

    onSubmit,
    onSubmitDraft,
    applicationForm,
    // yesNoType,
    landType,
    // nameOfAreasList,

    modalStateDraft,
    handleCloseModalDraftSuccesApplications,
    handleCloseModalDraftSuccesHome,

    modalStateCancel,
    handleCancelApplicationAndCloseModal,
    handleCloseModalCancel,
  } = useRenewalFormStep1(isValid, setValue, getValues);

  return (
    <Suspense fallback={<ActivityIndicator />}>
      <TextFieldControlled
        inputValue={applicationForm.name && applicationForm.name}
        id={'pin'}
        placeholder={'-'}
        label={'Personal Identification Number'}
        name={'pin'}
        variant={'outlined'}
        fullWidth={true}
        control={control}
        error={!!errors.pin}
        helperText={errors?.pin?.message}
      />
      <StyledFieldsContainer>
        <TextFieldControlled
          inputValue={applicationForm.name && applicationForm.name}
          id={'name'}
          placeholder={'Applicant Name'}
          label={
            <>
              Names
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
          name={'name'}
          variant={'outlined'}
          fullWidth={true}
          control={control}
          error={!!errors.name}
          helperText={errors?.name?.message}
        />
        <TextFieldControlled
          inputValue={applicationForm.name && applicationForm.name}
          id={'surname'}
          placeholder={'Applicant surnames'}
          label={
            <>
              Surnames
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
          name={'surname'}
          variant={'outlined'}
          fullWidth={true}
          control={control}
          error={!!errors.surname}
          helperText={errors?.surname?.message}
        />
      </StyledFieldsContainer>
      <SelectFieldControlled
        id={'licenceType'}
        label={
          <>
            Type of licence
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
        name={'licenceType'}
        control={control}
        inputValue={
          applicationForm.licenceType
            ? applicationForm.licenceType
            : licenceTypes[0].id
        }
        options={licenceTypes}
        error={!!errors.licenceType}
        helperText={errors?.licenceType?.message}
      />
      <StyledFieldsContainer>
        <SelectFieldControlled
          id={'businessRelationship'}
          label={'Business Relationship'}
          name={'businessRelationship'}
          control={control}
          inputValue={
            applicationForm.licenceType
              ? applicationForm.licenceType
              : licenceTypes[0].id
          }
          options={licenceTypes}
          error={!!errors.businessRelationship}
          helperText={errors?.businessRelationship?.message}
        />
        <TextFieldControlled
          inputValue={
            applicationForm.businessStyle && applicationForm.businessStyle
          }
          id={'businessStyle'}
          placeholder={'Business Style'}
          label={
            <>
              Business Style
              <TooltipField
                title={
                  <StyledTypographyTooltip>
                    Name of the business.
                  </StyledTypographyTooltip>
                }
                size={1.3333}
              />
            </>
          }
          name={'businessStyle'}
          variant={'outlined'}
          fullWidth={true}
          control={control}
          error={!!errors.businessStyle}
          helperText={errors?.businessStyle?.message}
        />

        <SelectFieldControlled
          id={'licenceNature'}
          label={'Licence Nature'}
          name={'licenceNature'}
          control={control}
          inputValue={
            applicationForm.licenceNature
              ? applicationForm.licenceNature
              : licenceTypes[0].id
          }
          options={licenceTypes}
          error={!!errors.licenceNature}
          helperText={errors?.licenceNature?.message}
        />

        <SelectFieldControlled
          id={'area'}
          label={'Area'}
          name={'area'}
          control={control}
          inputValue={
            applicationForm.area ? applicationForm.area : licenceTypes[0].id
          }
          options={licenceTypes}
          error={!!errors.area}
          helperText={errors?.area?.message}
        />

        <SelectFieldControlled
          id={'businessNature'}
          label={'Business Nature'}
          name={'businessNature'}
          control={control}
          inputValue={
            applicationForm.businessNature
              ? applicationForm.businessNature
              : licenceTypes[0].id
          }
          options={licenceTypes}
          error={!!errors.businessNature}
          helperText={errors?.businessNature?.message}
        />

        <SelectFieldControlled
          id={'businessProperty'}
          label={'Business Property'}
          name={'businessProperty'}
          control={control}
          inputValue={
            applicationForm.businessProperty
              ? applicationForm.businessProperty
              : licenceTypes[0].id
          }
          options={licenceTypes}
          error={!!errors.businessProperty}
          helperText={errors?.businessProperty?.message}
        />

        <TextFieldControlled
          inputValue={
            applicationForm.phoneAlternative && applicationForm.phoneAlternative
          }
          placeholder={'0000000000'}
          label={'Business Plot Number'}
          id={'busPlotNo'}
          control={control}
          name={'busPlotNo'}
          error={!!errors.busPlotNo}
          helperText={errors?.busPlotNo?.message}
        />
        <TextFieldControlled
          inputValue={
            applicationForm.phoneAlternative && applicationForm.phoneAlternative
          }
          placeholder={'0000000000'}
          label={'Farm Number'}
          id={'farmNo'}
          control={control}
          name={'farmNo'}
          error={!!errors.farmNo}
          helperText={errors?.farmNo?.message}
        />

        <TextFieldControlled
          inputValue={
            applicationForm.phoneAlternative && applicationForm.phoneAlternative
          }
          placeholder={'-'}
          label={'Portion'}
          id={'portion'}
          control={control}
          name={'portion'}
          error={!!errors.portion}
          helperText={errors?.portion?.message}
        />

        <SelectFieldControlled
          id={'busOffice'}
          label={'Business Office'}
          name={'busOffice'}
          control={control}
          inputValue={
            applicationForm.licenceType
              ? applicationForm.licenceType
              : licenceTypes[0].id
          }
          options={licenceTypes}
          error={!!errors.busOffice}
          helperText={errors?.busOffice?.message}
        />

        <TextFieldControlled
          inputValue={
            applicationForm.phoneAlternative && applicationForm.phoneAlternative
          }
          placeholder={'-'}
          label={'Business Building'}
          id={'busBuilding'}
          control={control}
          name={'busBuilding'}
          error={!!errors.busBuilding}
          helperText={errors?.busBuilding?.message}
        />

        <TextFieldControlled
          inputValue={
            applicationForm.phoneAlternative && applicationForm.phoneAlternative
          }
          placeholder={'-'}
          label={'Business Street'}
          id={'busStreet'}
          control={control}
          name={'busStreet'}
          error={!!errors.busStreet}
          helperText={errors?.busStreet?.message}
        />

        <TextFieldControlled
          inputValue={
            applicationForm.phoneAlternative && applicationForm.phoneAlternative
          }
          placeholder={'-'}
          label={'Business Suburb'}
          id={'busSuburb'}
          control={control}
          name={'busSuburb'}
          error={!!errors.busSuburb}
          helperText={errors?.busSuburb?.message}
        />

        <StyledFieldRowHidden>
          <StyledRowPhoneIndicative>
            <SelectFieldControlled
              id={'phoneIndicator'}
              label={'Phone'}
              name={'phoneIndicator'}
              valueName={'phoneIndicator'}
              control={control}
              inputValue={
                applicationForm.phoneIndicator
                  ? applicationForm.phoneIndicator
                  : defaultIndicative(phoneIndicators).id
              }
              options={phoneIndicators}
            />
          </StyledRowPhoneIndicative>
          <StyledRowPhoneNumber>
            <TextFieldControlled
              inputValue={applicationForm.phone && applicationForm.phone}
              placeholder={'Company Number'}
              id={'phone'}
              label={' '}
              control={control}
              name={'phone'}
              error={!!errors.phone}
              helperText={errors?.phone?.message}
            />
          </StyledRowPhoneNumber>
        </StyledFieldRowHidden>
        <StyledPhoneInputField
          id={'phoneVisual'}
          indicatorId={'phoneIndicator'}
          label={'Company number'}
          inputValue={`${handleIndicative(
            applicationForm.phoneIndicator
              ? applicationForm.phoneIndicator
              : defaultIndicative(phoneIndicators).id,
            applicationForm.phone ? applicationForm.phone : ''
          )}`}
          name={'phoneVisual'}
          control={control}
          onInputChange={onChangeInputFieldPhone}
          error={!!errors.phone}
          helperText={errors?.phone?.message}
        />
        <TextFieldControlled
          inputValue={applicationForm.postalAddress}
          id={'postalAddress'}
          placeholder={'Postal/residential address'}
          label={
            <>
              Postal/residential address
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
          name={'postalAddress'}
          control={control}
          error={!!errors.postalAddress}
          helperText={errors?.postalAddress?.message}
        />
      </StyledFieldsContainer>
      <StyledFieldsContainer>
        <StyledRadioGroupFieldControlled
          id={'businessPremises'}
          label={'Business Premises'}
          name={'businessPremises'}
          iconType={'circular'}
          control={control}
          options={landType}
          inputValue={
            applicationForm.businessPremises?.toString() === '1' ? '1' : '0'
          }
          // error={!!errors.alias}
          // helperText={errors?.alias?.message}
        />
        <StyledRadioGroupFieldControlled
          id={'premisesOwner'}
          label={'Premises Owner'}
          name={'premisesOwner'}
          iconType={'circular'}
          control={control}
          options={landType}
          inputValue={
            applicationForm.premisesOwner?.toString() === '1' ? '1' : '0'
          }
          // error={!!errors.alias}
          // helperText={errors?.alias?.message}
        />
        <StyledRadioGroupFieldControlled
          id={'businessInd'}
          label={'Business Land'}
          name={'businessInd'}
          iconType={'circular'}
          control={control}
          options={landType}
          inputValue={
            applicationForm.businessInd?.toString() === '1' ? '1' : '0'
          }
          // error={!!errors.alias}
          // helperText={errors?.alias?.message}
        />
      </StyledFieldsContainer>

      <StyledFieldRowBottom>
        <Typography
          color="secondary"
          variant="body2"
          promiseLoading={promiseCancelApplication}
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
                !promiseSaveUserApplication &&
                !promiseUpdateUserApplication &&
                !promiseGetApplicationFiles
                  ? onSubmitDraft(getValues())
                  : () => {};
              }}
            >
              Save as a draft
            </StyledButtonSaveAndContinue>
          )}
          <StyledButtonContinue
            disabled={!isValid}
            fullWidth={false}
            color="primary"
            colorLoading={'#FFFFFF'}
            promiseloading={promiseGetApplicationFiles}
            onClick={() => {
              !promiseGetApplicationFiles &&
                !promiseSaveUserApplication &&
                onSubmit(getValues());
            }}
          >
            Next
          </StyledButtonContinue>
        </StyledRowButtons>
      </StyledFieldRowBottom>
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
    </Suspense>
  );
};

export default RenewalFormStep1;
