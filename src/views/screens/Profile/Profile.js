import React, { Suspense } from 'react';
import { Box } from '@mui/system';
import useComponents from '../../components';
import useLayouts from '../../layouts';
import profileExample from '../../../assets/images/profileExample.jpg';
import useHelpers from '../../../helpers';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {
  StyledSectionProfile,
  StyledFieldsContainer,
  StyledButtonSave,
  StyledField,
  StyledFieldRowHidden,
  StyledPhoneInputField,
} from './Profile.styles';
import useControllers from '../../../controllers';

const Profile = () => {
  const {
    ActivityIndicator,
    AvatarField,
    DocumentFieldControlled,
    TextFieldControlled,
    Modal,
    SelectFieldControlled,
    Typography,
    Wrapper,
  } = useComponents();

  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useValidators } = useQuickFunctions();
  const { profileSchemaValidator } = useValidators();
  const { PrivateContentLayout } = useLayouts();

  // Hooks
  const { useScreenHooks } = useControllers();
  const { useProfile } = useScreenHooks();

  // Yup validator
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(profileSchemaValidator),
  });

  const {
    promiseInProgress,
    onSubmit,
    documentsType,
    profile,
    handleRedirectChangePassword,
    modalState,
    handleCloseModal,
    updateUserState,
    onChangeFile,
    inputFile,
    openFile,
    imageProfile,
    userProfileData,
    phoneIndicatorChoices,
    defaultIndicative,
    onChangeInputFieldPhone,
    handleIndicative,
    userContactMethodsList,
  } = useProfile(setValue);

  return (
    <PrivateContentLayout background="tertiary">
      <Suspense fallback={<ActivityIndicator />}>
        <StyledSectionProfile>
          <input
            type={'file'}
            accept="image/*"
            onChange={onChangeFile}
            style={{ display: 'none' }}
            ref={(r) => {
              inputFile.current = r;
            }}
          />
          <AvatarField
            onClick={openFile}
            value={imageProfile ? imageProfile : userProfileData?.image}
          />

          <Wrapper
            profileImageUrl={profileExample}
            title={'My Profile'}
            subTitle={'Personal Information'}
            isProfile={true}
            description={
              <>
                Edit your personal information.{' '}
                <Box component="b"> All fields are required.</Box>{' '}
              </>
            }
            maxWidth={'892px'}
          >
            {' '}
            <StyledFieldsContainer>
              <TextFieldControlled
                inputValue={profile.name}
                id={'name'}
                placeholder={'First Name'}
                label={'First Name'}
                name={'name'}
                variant={'outlined'}
                fullWidth={true}
                control={control}
                error={!!errors.name}
                helperText={errors?.name?.message}
              />
              <TextFieldControlled
                inputValue={profile.surname}
                id={'surname'}
                placeholder={'Last Name'}
                label={'Last Name'}
                name={'surname'}
                fullWidth={true}
                control={control}
                error={!!errors.surname}
                helperText={errors?.surname?.message}
              />
              <TextFieldControlled
                inputValue={profile.email}
                id={'email'}
                placeholder={'Email'}
                label={'Email'}
                name={'email'}
                control={control}
                type={'email'}
                error={!!errors.email}
                helperText={errors?.email?.message}
              />
              <StyledFieldRowHidden>
                <SelectFieldControlled
                  id={'phoneIndicatorId'}
                  label={'Phone'}
                  name={'phoneIndicatorId'}
                  valueName={'phoneIndicator'}
                  control={control}
                  inputValue={
                    profile.phoneIndicatorId
                      ? profile.phoneIndicatorId
                      : defaultIndicative(phoneIndicatorChoices).id
                  }
                  options={phoneIndicatorChoices}
                />
                <TextFieldControlled
                  inputValue={profile.phone}
                  placeholder={'Contact Number'}
                  label={'Contact Number'}
                  id={'phone'}
                  control={control}
                  name={'phone'}
                  error={!!errors.phone}
                  helperText={errors?.phone?.message}
                />
              </StyledFieldRowHidden>
              <StyledPhoneInputField
                id={'phoneVisual'}
                indicatorId={'phoneIndicatorId'}
                label={'Contact Number'}
                inputValue={
                  profile.phone &&
                  (profile.phoneIndicatorId
                    ? `${handleIndicative(
                        phoneIndicatorChoices[profile.phoneIndicatorId - 1],
                        profile.phone
                      )}`
                    : `${handleIndicative(
                        phoneIndicatorChoices[209],
                        profile.phone
                      )}`)
                }
                name={'phoneVisual'}
                control={control}
                onInputChange={onChangeInputFieldPhone}
                error={!!errors.phone}
                helperText={errors?.phone?.message}
              />
              {profile.roleType.roleType === 'frontUser' && (
                <SelectFieldControlled
                  id={'contactMethodId'}
                  label={'Preferred method of communication'}
                  name={'contactMethodId'}
                  inputValue={
                    profile.contactMethodId
                      ? profile.contactMethodId
                      : userContactMethodsList[0].id
                  }
                  control={control}
                  options={userContactMethodsList}
                  error={!!errors.contactMethodId}
                  helperText={errors?.contactMethodId?.message}
                />
              )}
            </StyledFieldsContainer>
            <StyledFieldsContainer>
              <SelectFieldControlled
                id={'alias'}
                label={'Document Type'}
                name={'alias'}
                control={control}
                inputValue={
                  profile.alias ? profile.alias : documentsType[0].value
                }
                options={documentsType}
                error={!!errors.alias}
                helperText={errors?.alias?.message}
              />

              <DocumentFieldControlled
                inputValue={profile.registrationNumber}
                id={'registrationNumber'}
                label={'ID / Registration Number'}
                placeholder={'ID / Registration Number'}
                name={'registrationNumber'}
                control={control}
                error={!!errors.registrationNumber}
                helperText={errors?.registrationNumber?.message}
              />
            </StyledFieldsContainer>
            <Typography
              color="secondary"
              variant="body2"
              onClick={handleRedirectChangePassword}
              sx={{
                marginTop: '35px',
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '-0.006em',
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
            >
              <Box component="b"> I would like to change my password</Box>
            </Typography>
            <StyledField>
              <StyledButtonSave
                disabled={
                  !((isValid && isDirty) || imageProfile.includes('base64'))
                }
                fullWidth={false}
                color="primary"
                className="self-center"
                colorLoading={'#FFFFFF'}
                promiseLoading={promiseInProgress}
                onClick={!promiseInProgress ? handleSubmit(onSubmit) : () => {}}
              >
                Save Changes
              </StyledButtonSave>
            </StyledField>
          </Wrapper>
          <Modal
            type={updateUserState}
            showModal={modalState.show}
            onClose={handleCloseModal}
            title={modalState.title}
            description={modalState.description}
          />
        </StyledSectionProfile>
      </Suspense>
    </PrivateContentLayout>
  );
};

export default Profile;
