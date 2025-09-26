import React, { Suspense } from 'react';
import useComponents from '../../components';
import useLayouts from '../../layouts';
import {
  StyledFieldsContainer,
  StyledSectionRecoveryPassword,
  StyledField,
  StyledGoBack,
  StyledGoBackTypography,
} from './recoveryPassword.styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import useHelpers from '../../../helpers';
import useControllers from '../../../controllers';
import useAssets from '../../../assets';

const RecoveryPassword = () => {
  // Components
  const { ActivityIndicator, Button, Modal, TextFieldControlled, Wrapper } =
    useComponents();
  // icons
  const { useIcons } = useAssets();
  const { iconArrowLeft: IconArrowLeft } = useIcons();

  // Layouts
  const { PublicContentLayout } = useLayouts();

  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useValidators } = useQuickFunctions();
  const { recoveryPasswordSchemaValidator } = useValidators();

  // Controllers
  const { useScreenHooks } = useControllers();
  const { useRecoveryPassword } = useScreenHooks();
  const {
    promiseInProgress,
    onSubmit,
    modalState,
    handleCloseModal,
    registerState,
    goBack,
  } = useRecoveryPassword();

  // Yup validator
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(recoveryPasswordSchemaValidator),
  });

  return (
    <PublicContentLayout background={'secondary'}>
      <Suspense fallback={<ActivityIndicator />}>
        <StyledSectionRecoveryPassword>
          <StyledGoBack onClick={goBack}>
            <IconArrowLeft />
            <StyledGoBackTypography color="secondary" variant="body1">
              Back
            </StyledGoBackTypography>
          </StyledGoBack>
          <Wrapper
            title={'Recover Password'}
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
        </StyledSectionRecoveryPassword>
      </Suspense>
    </PublicContentLayout>
  );
};
export default RecoveryPassword;
