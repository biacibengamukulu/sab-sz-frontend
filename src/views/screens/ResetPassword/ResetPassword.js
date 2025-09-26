import React, { Suspense } from 'react';
import useComponents from '../../components';
import useLayouts from '../../layouts';
import useHelpers from '../../../helpers';
import useControllers from '../../../controllers';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {
  StyledFieldsContainer,
  StyledField,
  StyledSectionResetPassword,
} from './resetpassword.styles';

const ResetPassword = () => {
  // Layouts
  const { PublicContentLayout } = useLayouts();

  // Components
  const { ActivityIndicator, Modal, Button, Wrapper, PassWordFieldControlled } =
    useComponents();

  // Controllers
  const { useScreenHooks } = useControllers();
  const { useResetPassword } = useScreenHooks();
  const { onSubmit, modalState, registerState, handleCloseModal } =
    useResetPassword();

  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useValidators } = useQuickFunctions();
  const { resetPasswordSchemaValidator } = useValidators();

  // Yup validator
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(resetPasswordSchemaValidator),
  });
  const isPassword = watch('password');
  const isConfirmPassword = watch('passwordConfirmation');

  return (
    <PublicContentLayout background={'secondary'}>
      <Suspense fallback={<ActivityIndicator />}>
        <StyledSectionResetPassword>
          <Wrapper
            title={'Reset Password'}
            maxWidth={'580px'}
            className="container"
          >
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
            </StyledFieldsContainer>
            <StyledField>
              <Button
                disabled={!isValid}
                fullWidth={false}
                color="primary"
                sx={{ width: '130px', marginTop: '40px', alignSelf: 'center' }}
                className="self-center"
                onClick={handleSubmit(onSubmit)}
              >
                Continue
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
        </StyledSectionResetPassword>
      </Suspense>
    </PublicContentLayout>
  );
};

export default ResetPassword;
