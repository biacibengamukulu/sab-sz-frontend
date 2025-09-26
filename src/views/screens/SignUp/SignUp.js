import React, { Suspense } from 'react';
import useComponents from '../../components';
import useHelpers from '../../../helpers';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import useLayouts from '../../layouts';
import useControllers from '../../../controllers';

import {
  StyledFieldsContainer,
  StyledSectionSignUp,
  StyledTermContainer,
  StyledSignInRow,
  StyledButtonRegister,
  StyledField,
  StyledFieldRowHidden,
  StyledPhoneInputField,
  StyledRadioGroupField,
} from './SignUp.styles';
import { Box } from '@mui/system';

const SignUp = () => {
  // Components
  const {
    ActivityIndicator,
    CheckboxControlled,
    DocumentFieldControlled,
    Modal,
    PassWordFieldControlled,
    SelectFieldControlled,
    TextFieldControlled,
    Typography,
    Wrapper,
  } = useComponents();

  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useValidators } = useQuickFunctions();
  const { signUpSchemaValidator } = useValidators();

  // Layouts
  const { PublicContentLayout } = useLayouts();

  // Controllers
  const { useScreenHooks } = useControllers();
  const { useSignUp } = useScreenHooks();

  // Yup validator
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
    watch,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(signUpSchemaValidator),
  });

  const {
    promiseInProgress,
    onSubmit,
    handleRedirectLogin,
    modalState,
    handleCloseModal,
    registerState,
    documentsType,
    phoneIndicatorChoices,
    onChangeInputFieldPhone,
    handleIndicative,
    defaultIndicative,
    userContactMethodsList,
  } = useSignUp(setValue);

  const isPassword = watch('password');
  const isConfirmPassword = watch('passwordConfirmation');

  return (
    <PublicContentLayout background="secondary">
      <Suspense fallback={<ActivityIndicator />}>
        <StyledSectionSignUp>
          <Wrapper
            title={'Register'}
            description={'Personal information'}
            maxWidth={'860px'}
            className="container"
          >
            <StyledFieldsContainer>
              <TextFieldControlled
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
                  options={phoneIndicatorChoices}
                  inputValue={defaultIndicative(phoneIndicatorChoices).id}
                />
                <TextFieldControlled
                  placeholder={'Contact Number'}
                  label={'Contact Number'}
                  id={'phone'}
                  control={control}
                  name={'phone'}
                  inputValue=""
                  error={!!errors.phone}
                  helperText={errors?.phone?.message}
                />
              </StyledFieldRowHidden>
              <StyledPhoneInputField
                id={'phoneVisual'}
                indicatorId={'phoneIndicatorId'}
                placeholder={'Contact Number'}
                label={'Contact Number'}
                name={'phoneVisual'}
                control={control}
                inputValue={
                  // applicationForm.phoneIndicator &&
                  `${handleIndicative(phoneIndicatorChoices[209], '')}`
                }
                onInputChange={onChangeInputFieldPhone}
                error={!!errors.phone}
                helperText={errors?.phone?.message}
              />
            </StyledFieldsContainer>
            <StyledFieldsContainer>
              <SelectFieldControlled
                id={'alias'}
                label={'Document Type'}
                name={'alias'}
                control={control}
                inputValue={documentsType[0].value}
                options={documentsType}
                error={!!errors.alias}
                helperText={errors?.alias?.message}
              />

              <DocumentFieldControlled
                id={'registrationNumber'}
                label={'ID / Registration Number'}
                placeholder={'ID / Registration Number'}
                name={'registrationNumber'}
                control={control}
                error={!!errors.registrationNumber}
                helperText={errors?.registrationNumber?.message}
              />
            </StyledFieldsContainer>
            <StyledFieldsContainer>
              <PassWordFieldControlled
                id={'password'}
                label={'Password'}
                placeholder={'Password'}
                name={'password'}
                control={control}
                fullWidth={true}
                error={!!errors.password}
                helperText={errors?.password?.message}
              />
              <PassWordFieldControlled
                id={'passwordConfirmation'}
                label={'Confirm Password'}
                placeholder={'Password'}
                name={'passwordConfirmation'}
                control={control}
                fullWidth={true}
                error={
                  !!errors.passwordConfirmation ||
                  (isConfirmPassword !== '' &&
                    isConfirmPassword !== undefined &&
                    isPassword !== isConfirmPassword)
                }
                helperText={
                  errors?.passwordConfirmation?.message ||
                  (isConfirmPassword !== '' &&
                    isConfirmPassword !== undefined &&
                    isPassword !== isConfirmPassword &&
                    "Password doesn't match")
                }
              />
              <StyledRadioGroupField
                id={'contactMethodId'}
                label={'Preferred method of communication'}
                name={'contactMethodId'}
                control={control}
                inputValue={userContactMethodsList[0].id.toString()}
                options={userContactMethodsList}
                error={!!errors.contactMethodId}
                helperText={errors?.contactMethodId?.message}
              />
            </StyledFieldsContainer>

            <StyledTermContainer className="my-4">
              <CheckboxControlled
                id={'isCheck'}
                name={'isCheck'}
                label={
                  'We are collecting your personal data so that we may process your liquor licence application with our department. For administrative purposes, we may share your personal data across Government Departments as well as other third parties that process personal data in conjunction with us and on our behalf, when required.  By ticking this box, I confirm that I give consent to my personal information being processed for this purpose.'
                }
                control={control}
                error={errors}
                helperText={errors?.isCheck?.message}
                checked={false}
                value={false}
                defaultValue={false}
              />
            </StyledTermContainer>
            <StyledField>
              <StyledButtonRegister
                disabled={!isValid || isPassword !== isConfirmPassword}
                fullWidth={false}
                color="primary"
                colorLoading={'#FFFFFF'}
                promiseLoading={promiseInProgress}
                onClick={!promiseInProgress ? handleSubmit(onSubmit) : () => {}}
              >
                Register
              </StyledButtonRegister>
            </StyledField>
            <StyledSignInRow>
              <Typography
                className="StyledTypographyBook"
                color="secondary"
                variant="body2"
                sx={{
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '-0.006em',
                }}
              >
                Already have an account?
              </Typography>
              <Typography
                color="secondary"
                variant="body2"
                onClick={handleRedirectLogin}
                sx={{
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '-0.006em',
                  marginLeft: '10px',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }}
              >
                <Box component="b"> Sign in</Box>
              </Typography>
            </StyledSignInRow>
          </Wrapper>
          <Modal
            type={registerState}
            showModal={modalState.show}
            onClose={handleCloseModal}
            title={modalState.title}
            description={modalState.description}
          />
        </StyledSectionSignUp>
      </Suspense>
    </PublicContentLayout>
  );
};

export default SignUp;
