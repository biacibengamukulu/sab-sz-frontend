import React, { Suspense } from 'react';
import useComponents from '..';
import useHelpers from '../../../helpers';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import useAssets from '../../../assets';

import {
  StyledFieldsContainer,
  StyledRowButtons,
  StyledFieldRowBottom,
  StyledButtonSaveAndContinue,
  StyledButtonContinue,
  StyledRadioGroupFieldControlled,
  StyledTypographyTooltip,
  StyledTitleModal,
  StyledTitleModal2,
  StyledTitleModalCancel,
  StyledChildContainerModal,
  StyledChildContainerModal2,
  StyledDescriptionModal,
  StyledDescriptionModal2,
  StyledButtonContaimerModal2,
  StyledButtonModal,
  StyledButtonModal2,
  StyledButtonModalCancel,
  StyledSubtitleModalCancel,
} from './ApplicationFormRenewStep1.styles';
import useControllers from '../../../controllers';

const ApplicationFormRenewStep1 = () => {
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

  const { useIcons } = useAssets();
  const { iconInfoCircle: IconInfoCircle  } = useIcons()

  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useValidators } = useQuickFunctions();
  const { applicationFormStep1SchemaValidator } = useValidators();

  // Hooks
  const { useComponentHooks } = useControllers();
  const { useApplicationFormRenewStep1 } = useComponentHooks();

  // Yup validator
  const {
    handleSubmit,
    control,
    getValues,
    setValue,
    watch,
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
    promiseGetPinData,
    promiseGetAreaFromOffice,

    pinErrorState,

    businessRelationships,
    natureOfLicences,
    businessPropertys,
    offices,
    areaList,
    charYesNoType,
    premisesOwners,
    businessLands,

    handleOnChangePin,
    handleOnChangeOffice,

    onSubmit,
    onSubmitDraft,
    applicationForm,

    modalStateDraft,
    handleCloseModalDraftSuccesApplications,
    handleCloseModalDraftSuccesHome,

    modalStateCancel,
    handleCancelApplicationAndCloseModal,
    handleCloseModalCancel,

    handleCloseModalPrint,
    handleModalPrintContinue,
    handleModalPrintTo,
    modalStatePrint
  } = useApplicationFormRenewStep1(isValid, setValue, getValues);
  return (
    <Suspense fallback={<ActivityIndicator />}>
      <TextFieldControlled
        inputValue={
          applicationForm.personal_identification_number
            ? applicationForm.personal_identification_number
            : ''
        }
        inputProps={{ maxLength: '13' }}
        id={'personal_identification_number'}
        placeholder={'-'}
        label={
          <>
            Personal Identification Number
            <TooltipField
              title={
                <StyledTypographyTooltip>
                  ID number is a 13-digit number defined by the following format: YYMMDDSSSSCAZ.
                </StyledTypographyTooltip>
              }
              size={1.3333}
            />
          </>
        }
        name={'personal_identification_number'}
        variant={'outlined'}
        fullWidth={true}
        control={control}
        onInputChange={handleOnChangePin}
        isLoading={promiseGetPinData}
        error={!!errors.personal_identification_number || !!pinErrorState}
        helperText={
          errors?.personal_identification_number?.message || pinErrorState
        }
      />
      <StyledFieldsContainer>
        <TextFieldControlled
          disabled
          inputValue={applicationForm.names ? applicationForm.names : ''}
          id={'names'}
          placeholder={'Applicant Name'}
          label={
            <>
              Name
              <TooltipField
                title={
                  <StyledTypographyTooltip>
                    The name of the person applying for a license.
                  </StyledTypographyTooltip>
                }
                size={1.3333}
              />
            </>
          }
          name={'names'}
          variant={'outlined'}
          fullWidth={true}
          control={control}
          error={!!errors.names}
          helperText={errors?.names?.message}
        />
        <TextFieldControlled
          disabled
          inputValue={applicationForm.surnames ? applicationForm.surnames : ''}
          id={'surnames'}
          placeholder={'Applicant surnames'}
          label={
            <>
              Surname
              <TooltipField
                title={
                  <StyledTypographyTooltip>
                    The surname of the person applying for a license.
                  </StyledTypographyTooltip>
                }
                size={1.3333}
              />
            </>
          }
          name={'surnames'}
          variant={'outlined'}
          fullWidth={true}
          control={control}
          error={!!errors.surnames}
          helperText={errors?.surnames?.message}
        />
      </StyledFieldsContainer>

      <StyledFieldsContainer>
        <SelectFieldControlled
          id={'business_relationship_id'}
          label={
            <>
              Business relationship
              <TooltipField
                title={
                  <StyledTypographyTooltip>
                    Are you the resident manager or business owner.
                  </StyledTypographyTooltip>
                }
                size={1.3333}
              />
            </>
          }
          name={'business_relationship_id'}
          control={control}
          inputValue={
            applicationForm.business_relationship_id
              ? applicationForm.business_relationship_id
              : businessRelationships[0].id
          }
          options={businessRelationships}
          error={!!errors.business_relationship_id}
          helperText={errors?.business_relationship_id?.message}
        />
        <TextFieldControlled
          inputValue={
            applicationForm.business_style ? applicationForm.business_style : ''
          }
          id={'business_style'}
          placeholder={'Business Style'}
          inputProps={{ maxLength: '120' }}
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
          name={'business_style'}
          variant={'outlined'}
          fullWidth={true}
          control={control}
          error={!!errors.business_style}
          helperText={errors?.business_style?.message}
          autoComplete="off"
        />

        <SelectFieldControlled
          id={'license_nature_type_id'}
          label={
            <>
              License Nature
              <TooltipField
                title={
                  <StyledTypographyTooltip>
                    This is the type of licence e.g Bottle Store or Wholesale.
                  </StyledTypographyTooltip>
                }
                size={1.3333}
              />
            </>
          }
          name={'license_nature_type_id'}
          className={'licenceNatureSelectField'}
          control={control}
          inputValue={
            applicationForm.license_nature_type_id
              ? applicationForm.license_nature_type_id
              : natureOfLicences[0].id
          }
          options={natureOfLicences}
          error={!!errors.license_nature_type_id}
          helperText={errors?.license_nature_type_id?.message}
        />

        <SelectFieldControlled
          id={'business_property_id'}
          label={
            <>
              Business property
              <TooltipField
                title={
                  <StyledTypographyTooltip>
                    Place where property is located.
                  </StyledTypographyTooltip>
                }
                size={1.3333}
              />
            </>
          }
          name={'business_property_id'}
          control={control}
          inputValue={
            applicationForm.business_property_id
              ? applicationForm.business_property_id
              : businessPropertys[0].id
          }
          options={businessPropertys}
          error={!!errors.business_property_id}
          helperText={errors?.business_property_id?.message}
        />

        <TextFieldControlled
          id={'business_plot_number'}
          name={'business_plot_number'}
          inputProps={{ maxLength: '6' }}
          placeholder={'000000'}
          label={
            <>
              Business Plot Number
              <TooltipField
                title={
                  <StyledTypographyTooltip>
                    If not applicable, applicant must just enter in 0 [zero].
                  </StyledTypographyTooltip>
                }
                size={1.3333}
              />
            </>
          }
          inputValue={
            applicationForm.business_plot_number
              ? applicationForm.business_plot_number
              : ''
          }
          control={control}
          error={!!errors.business_plot_number}
          helperText={errors?.business_plot_number?.message}
          autoComplete="off"
        />
        <TextFieldControlled
          id={'farm_number'}
          name={'farm_number'}
          inputProps={{ maxLength: '6' }}
          placeholder={'000000'}
          label={
            <>
              Farm number
              <TooltipField
                title={
                  <StyledTypographyTooltip>
                    If not applicable, applicant must just enter in 0 [zero].
                  </StyledTypographyTooltip>
                }
                size={1.3333}
              />
            </>
          }
          inputValue={
            applicationForm.farm_number ? applicationForm.farm_number : ''
          }
          control={control}
          error={!!errors.farm_number}
          helperText={errors?.farm_number?.message}
          autoComplete="off"
        />

        <TextFieldControlled
          inputValue={applicationForm.portion ? applicationForm.portion : ''}
          placeholder={'000000'}
          inputProps={{ maxLength: '25' }}
          label={
            <>
              Portion
              <TooltipField
                title={
                  <StyledTypographyTooltip>
                    In the case of a Farm.
                  </StyledTypographyTooltip>
                }
                size={1.3333}
              />
            </>
          }
          id={'portion'}
          control={control}
          name={'portion'}
          error={!!errors.portion}
          helperText={errors?.portion?.message}
          autoComplete="off"
        />

        <TextFieldControlled
          inputValue={
            applicationForm.business_building
              ? applicationForm.business_building
              : ''
          }
          inputProps={{ maxLength: '25' }}
          placeholder={'-'}
          label={
            <>
              Business Building
              <TooltipField
                title={
                  <StyledTypographyTooltip>
                    Name of the building where business is located.
                  </StyledTypographyTooltip>
                }
                size={1.3333}
              />
            </>
          }
          id={'business_building'}
          control={control}
          name={'business_building'}
          error={!!errors.business_building}
          helperText={errors?.business_building?.message}
          autoComplete="off"
        />

        <TextFieldControlled
          inputValue={
            applicationForm.business_street
              ? applicationForm.business_street
              : ''
          }
          inputProps={{ maxLength: '25' }}
          placeholder={'-'}
          label={
            <>
              Business Street
              <TooltipField
                title={
                  <StyledTypographyTooltip>
                    Street name where applicable.
                  </StyledTypographyTooltip>
                }
                size={1.3333}
              />
            </>
          }
          id={'business_street'}
          control={control}
          name={'business_street'}
          error={!!errors.business_street}
          helperText={errors?.business_street?.message}
          autoComplete="off"
        />

        <TextFieldControlled
          inputValue={
            applicationForm.business_suburb
              ? applicationForm.business_suburb
              : ''
          }
          inputProps={{ maxLength: '25' }}
          placeholder={'-'}
          label={
            <>
              Business Suburb
              <TooltipField
                title={
                  <StyledTypographyTooltip>
                    Place within the town where the business is operating.
                  </StyledTypographyTooltip>
                }
                size={1.3333}
              />
            </>
          }
          id={'business_suburb'}
          control={control}
          name={'business_suburb'}
          error={!!errors.business_suburb}
          helperText={errors?.business_suburb?.message}
          autoComplete="off"
        />

        <TextFieldControlled
          inputValue={
            applicationForm.business_town ? applicationForm.business_town : ''
          }
          id={'business_town'}
          placeholder={'-'}
          label={
            <>
              Business Town
              <TooltipField
                title={
                  <StyledTypographyTooltip>
                    Town where the business is operating.
                  </StyledTypographyTooltip>
                }
                size={1.3333}
              />
            </>
          }
          name={'business_town'}
          control={control}
          error={!!errors.business_town}
          helperText={errors?.business_town?.message}
          autoComplete="off"
        />
        {watch().business_relationship_id == 3 ? (
          <TextFieldControlled
            id={'company_number'}
            name={'company_number'}
            placeholder={'000000'}
            inputProps={{ maxLength: '7' }}
            label={
              <>
                Company Number
                <TooltipField
                  title={
                    <StyledTypographyTooltip>
                      In the case of a company.
                    </StyledTypographyTooltip>
                  }
                  size={1.3333}
                />
              </>
            }
            inputValue={
              applicationForm.company_number
                ? applicationForm.company_number
                : ''
            }
            control={control}
            error={!!errors.company_number}
            helperText={errors?.company_number?.message}
            autoComplete="off"
          />
        ) : (
          <div></div>
        )}
        <TextFieldControlled
          inputValue={
            applicationForm.residential_address
              ? applicationForm.residential_address
              : ''
          }
          id={'residential_address'}
          placeholder={'-'}
          label={
            <>
              Residential Address
              <TooltipField
                title={
                  <StyledTypographyTooltip>
                    Include, street number, street, town/suburb.
                  </StyledTypographyTooltip>
                }
                size={1.3333}
              />
            </>
          }
          name={'residential_address'}
          control={control}
          error={!!errors.residential_address}
          helperText={errors?.residential_address?.message}
          autoComplete="off"
        />
        <TextFieldControlled
          inputValue={applicationForm.city ? applicationForm.city : ''}
          id={'city'}
          placeholder={'-'}
          label={
            <>
              City
              <TooltipField
                title={
                  <StyledTypographyTooltip>
                    Where business is located.
                  </StyledTypographyTooltip>
                }
                size={1.3333}
              />
            </>
          }
          name={'city'}
          control={control}
          error={!!errors.city}
          helperText={errors?.city?.message}
          autoComplete="off"
        />
        <TextFieldControlled
          inputValue={
            applicationForm.postal_address ? applicationForm.postal_address : ''
          }
          id={'postal_address'}
          placeholder={'-'}
          label={
            <>
              Postal code
              <TooltipField
                title={
                  <StyledTypographyTooltip>
                    Postal Office Code.
                  </StyledTypographyTooltip>
                }
                size={1.3333}
              />
            </>
          }
          name={'postal_address'}
          control={control}
          error={!!errors.postal_address}
          helperText={errors?.postal_address?.message}
          autoComplete="off"
        />
        <div></div>
        <SelectFieldControlled
          id={'office_id'}
          label={
            <>
              Business Office
              <TooltipField
                title={
                  <StyledTypographyTooltip>
                    Town where the Ministry of Commerce office is located.
                  </StyledTypographyTooltip>
                }
                size={1.3333}
              />
            </>
          }
          name={'office_id'}
          control={control}
          inputValue={
            applicationForm.office_id ? applicationForm.office_id : ''
          }
          onInputChange={handleOnChangeOffice}
          isLoading={promiseGetAreaFromOffice}
          options={offices}
          valueName={'shrot_desc'}
          error={!!errors.office_id}
          helperText={errors?.office_id?.message}
        />
        {!promiseGetAreaFromOffice && areaList.length ? (
          <SelectFieldControlled
            id={'area_id'}
            label={
              <>
                Area
                <TooltipField
                  title={
                    <StyledTypographyTooltip>
                      The specific area where business is located.
                    </StyledTypographyTooltip>
                  }
                  size={1.3333}
                />
              </>
            }
            name={'area_id'}
            control={control}
            inputValue={
              applicationForm.area_id ? applicationForm.area_id : areaList[0].id
            }
            options={areaList}
            isLoading={promiseGetAreaFromOffice}
            valueName={'long_desc'}
            error={!!errors.area_id}
            helperText={errors?.area_id?.message}
          />
        ) : (
          <></>
        )}
      </StyledFieldsContainer>

      <StyledRadioGroupFieldControlled
        id={'premises_owner_id'}
        label={
          <>
            Premises Owner
            <TooltipField
              title={
                <StyledTypographyTooltip>
                  Confirm is premise is leased or owned.
                </StyledTypographyTooltip>
              }
              size={1.3333}
            />
          </>
        }
        name={'premises_owner_id'}
        iconType={'circular'}
        control={control}
        options={premisesOwners}
        inputValue={
          applicationForm.premises_owner_id
            ? applicationForm.premises_owner_id.toString()
            : ''
        }
        error={!!errors.premises_owner_id}
        helperText={errors?.premises_owner_id?.message}
      />
      <StyledRadioGroupFieldControlled
        id={'business_land_id'}
        label={
          <>
            Business Land
            <TooltipField
              title={
                <StyledTypographyTooltip>
                  Urban, Farm or Rural.
                </StyledTypographyTooltip>
              }
              size={1.3333}
            />
          </>
        }
        name={'business_land_id'}
        iconType={'circular'}
        control={control}
        options={businessLands}
        inputValue={
          applicationForm.business_land_id
            ? applicationForm.business_land_id.toString()
            : ''
        }
        error={!!errors.business_land_id}
        helperText={errors?.business_land_id?.message}
      />
      <StyledRadioGroupFieldControlled
        id={'business_premises'}
        label={
          <>
            Business Premises
            <TooltipField
              title={
                <StyledTypographyTooltip>
                  Business Premises Location.
                </StyledTypographyTooltip>
              }
              size={1.3333}
            />
          </>
        }
        name={'business_premises'}
        iconType={'circular'}
        control={control}
        options={charYesNoType}
        inputValue={
          applicationForm.business_premises
            ? applicationForm.business_premises.toString()
            : ''
        }
        error={!!errors.business_premises}
        helperText={errors?.business_premises?.message}
      />
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
          {(applicationForm.status?.id < 3 ||
            !applicationForm.id ||
            applicationForm.is_renewal === 1) && (
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
            disabled={promiseGetApplicationFiles || promiseSaveUserApplication}
            fullWidth={false}
            color="primary"
            colorLoading={'#FFFFFF'}
            promiseloading={promiseGetApplicationFiles}
            onClick={handleSubmit(onSubmit)}
          >
            Next
          </StyledButtonContinue>
        </StyledRowButtons>
      </StyledFieldRowBottom>


      <Modal  color={'#394d94'}     type={'child'}  showModal={modalStateDraft.show}  onClose={handleCloseModalDraftSuccesApplications} >
        <StyledTitleModal variant={'h2'} color={'success'}>    {modalStateDraft.title}  </StyledTitleModal>
        <StyledChildContainerModal>
          <StyledDescriptionModal variant={'body2'}>   {modalStateDraft.description}   </StyledDescriptionModal>
          <IconInfoCircle  size={4}  color={'#40A0C9'}  color2={'#D9ECF4'} />
          <StyledButtonModal   onClick={handleCloseModalDraftSuccesHome}   fullWidth={false}  sx={{  fontSize: '16px',    lineHeight: '22px',   }}  >  Go to home page  </StyledButtonModal>
        </StyledChildContainerModal>
      </Modal>

      <Modal
        color={'#ce1f13'}
        type={'child'}
        showModal={modalStateCancel.show}
        onClose={handleCloseModalCancel}
      >
        <StyledTitleModalCancel variant={'h2'} color={'#CE1F13'}>
          Are you sure about canceling your renewal application?
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


      <Modal  color={'#E46C02'}  type={'child'}  showModal={modalStatePrint.show}   onClose={handleCloseModalPrint} >
        <StyledTitleModal2  >  Important info! </StyledTitleModal2>
        <StyledChildContainerModal2>
          <StyledDescriptionModal2 variant={'body1'}>  
              Would you like to save or print your form? <br/> If not you may continue.
          </StyledDescriptionModal2>
          <IconInfoCircle  size={4}/>
          <StyledButtonContaimerModal2>
            <StyledButtonModal2 color={'secondary'} variant='outlined' fullWidth={false}  sx={{  fontSize: '16px',  lineHeight: '22px'  }}  onClick={() => { handleModalPrintTo() }}> Print / Save as PDF </StyledButtonModal2>
            <StyledButtonModal2  fullWidth={false}  sx={{  fontSize: '16px',  lineHeight: '22px'  }} onClick={() => { handleModalPrintContinue() }} > Next </StyledButtonModal2>
          </StyledButtonContaimerModal2>
        </StyledChildContainerModal2>
      </Modal>


    </Suspense>
  );
};

export default ApplicationFormRenewStep1;
