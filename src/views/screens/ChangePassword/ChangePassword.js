import React, { Suspense } from 'react';
import useLayouts from '../../layouts';
import useHelpers from '../../../helpers';
import useControllers from '../../../controllers';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {
  StyledFieldsContainer,
  StyledSectionChangePassword,
  StyledGoBack,
  StyledGoBackTypography,
  StyledField,
} from './changepassword.styles';
import useComponents from '../../components';
import useAssets from '../../../assets';

const ChangePassword = () => {
  // Components
  const { Wrapper, ActivityIndicator, Button, PassWordFieldControlled, Modal } =
    useComponents();

  const { useIcons } = useAssets();
  const { iconArrowLeft: IconArrowLeft } = useIcons();

  // Controllers
  const { useScreenHooks } = useControllers();
  const { useChangePassword } = useScreenHooks();
  const {
    promiseInProgress,
    onSubmit,
    modalState,
    registerState,
    handleCloseModal,
    goBack,
  } = useChangePassword();

  // Layouts
  const { PrivateContentLayout } = useLayouts();

  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useValidators } = useQuickFunctions();
  const { changePasswordSchemaValidator } = useValidators();

  // Yup validator
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(changePasswordSchemaValidator),
  });
  const isPassword = watch('password');
  const isConfirmPassword = watch('passwordConfirmation');

  return (
    <PrivateContentLayout background="secondary">
      <Suspense fallback={<ActivityIndicator />}>
        <StyledSectionChangePassword>
          <StyledGoBack onClick={goBack}>
            <IconArrowLeft />
            <StyledGoBackTypography color="secondary" variant="body1">
              Back
            </StyledGoBackTypography>
          </StyledGoBack>
          <Wrapper title={'Change Password'} maxWidth={'580px'}>
            <StyledFieldsContainer>
              <PassWordFieldControlled
                id={'currentPassword'}
                label={'Current Password'}
                placeholder={'Password'}
                name={'currentPassword'}
                control={control}
                fullWidth={true}
                error={!!errors.currentPassword}
                helperText={errors?.currentPassword?.message}
              />
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
            </StyledFieldsContainer>
            <StyledField>
              <Button
                disabled={!isValid}
                fullWidth={false}
                color="primary"
                sx={{ width: '130px', marginTop: '40px', alignSelf: 'center' }}
                className="self-center"
                colorLoading={'#FFFFFF'}
                promiseLoading={promiseInProgress}
                onClick={!promiseInProgress && handleSubmit(onSubmit)}
              >
                Save changes
              </Button>
            </StyledField>
          </Wrapper>
          <Modal
            type={registerState}
            showModal={modalState.show}
            onClose={handleCloseModal}
            title={modalState.title}
            description={modalState.description}
          />
        </StyledSectionChangePassword>
      </Suspense>
    </PrivateContentLayout>
  );
};

export default ChangePassword;
