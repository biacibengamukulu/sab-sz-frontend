import React, { Suspense } from 'react';
import useComponents from '../../components';
import useHelpers from '../../../helpers';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import useLayouts from '../../layouts';
import useControllers from '../../../controllers';
import {
  StyledFieldsContainer,
  StyledSectionLogin,
  StyledRow,
  StyledButtonLogin,
  StyledForgotPass,
  StyledField,
  StyledTitleModal,
  StyledSubtitleModalCancel,
} from './Login.styles';
import { Box } from '@mui/system';

const Login = () => {
  // Components
  const {
    TextFieldControlled,
    ActivityIndicator,
    PassWordFieldControlled,
    Typography,
    Modal,
    Wrapper,
  } = useComponents();

  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useValidators } = useQuickFunctions();
  const { loginSchemaValidator } = useValidators();

  // Layouts
  const { PublicContentLayout } = useLayouts();

  // Controllers
  const { useScreenHooks } = useControllers();
  const { useLogin } = useScreenHooks();
  const {
    promiseInProgress,
    modalState,
    handleCloseModal,
    handleRedirectRegister,
    handleRedirectRecoveryPassword,
    loginState,
    onSubmit,
    modalStateAdvise,
    handleCloseModalSucces,
  } = useLogin();

  // Yup validator
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(loginSchemaValidator),
  });

  return (
    <PublicContentLayout background={'secondary'}>
      <Suspense fallback={<ActivityIndicator />}>
        <StyledSectionLogin>
          <Wrapper
            title={'Login'}
            description={'Welcome back!'}
            maxWidth={'580px'}
            className="container"
          >
            <StyledFieldsContainer>
              <TextFieldControlled
                id={'email'}
                placeholder={'Email'}
                label={'Email'}
                name={'email'}
                variant={'outlined'}
                fullWidth={true}
                control={control}
                error={!!errors.email}
                sx={{ color: '#6D7074' }}
                helperText={errors?.email?.message}
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
            </StyledFieldsContainer>
            <StyledField>
              <StyledButtonLogin
                disabled={!isValid}
                fullWidth={false}
                color="primary"
                className="self-center"
                colorLoading={'#FFFFFF'}
                promiseLoading={promiseInProgress}
                onClick={!promiseInProgress ? handleSubmit(onSubmit) : () => {}}
              >
                Login
              </StyledButtonLogin>
            </StyledField>
            <StyledField>
              <StyledForgotPass
                className="self-center"
                color="secondary"
                variant="body2"
                sx={{
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '-0.006em',
                  marginTop: '32px',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  alignSelf: 'center',
                }}
                onClick={handleRedirectRecoveryPassword}
              >
                <Box component="b"> Forgot your password?</Box>
              </StyledForgotPass>
            </StyledField>
            <StyledRow>
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
                New user?
              </Typography>
              <Typography
                color="secondary"
                variant="body2"
                onClick={handleRedirectRegister}
                sx={{
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '-0.006em',
                  marginLeft: '10px',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }}
              >
                <Box component="b"> Register</Box>
              </Typography>
            </StyledRow>
          </Wrapper>
          <Modal
            type={loginState}
            showModal={modalState.show}
            onClose={handleCloseModal}
            title={modalState.title}
            description={modalState.description}
          />
        </StyledSectionLogin>
        <Modal
          color={'#FF2D55'}
          type={'child'}
          showModal={modalStateAdvise.show}
          onClose={handleCloseModalSucces}
        >
          <StyledTitleModal variant={'h2'} color={'error'}>
            For a better working experience please work from a desktop device!
          </StyledTitleModal>

          <StyledSubtitleModalCancel variant={'body1'}>
            From a mobile device, your experience will be unsatisfactory!
          </StyledSubtitleModalCancel>
        </Modal>
      </Suspense>
    </PublicContentLayout>
  );
};

export default Login;
