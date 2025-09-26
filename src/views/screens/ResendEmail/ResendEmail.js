import React, { Suspense } from 'react';
import useLayouts from '../../layouts';
import useComponents from '../../components';
import { useForm } from 'react-hook-form';
import {
  StyledSectionResendEmail,
  StyledFieldsContainer,
  StyledField,
} from './resendEmail.styles';
import { yupResolver } from '@hookform/resolvers/yup';
import useHelpers from '../../../helpers';
import useControllers from '../../../controllers';

const ResendEmail = () => {
  // Components
  const { ActivityIndicator, Wrapper, TextFieldControlled, Button, Modal } =
    useComponents();

  // Layouts
  const { PublicContentLayout } = useLayouts();

  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useValidators } = useQuickFunctions();
  const { resendEmailSchemaValidator } = useValidators();

  // Controllers
  const { useScreenHooks } = useControllers();
  const { useResendEmail } = useScreenHooks();
  const { onSubmit, registerState, modalState, handleCloseModal } =
    useResendEmail();

  // Yup validator
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(resendEmailSchemaValidator),
  });

  return (
    <PublicContentLayout background={'secondary'}>
      <Suspense fallback={<ActivityIndicator />}>
        <StyledSectionResendEmail>
          <Wrapper
            title={'Resend email'}
            maxWidth={'580px'}
            description={`It looks like your confirmation account token has expired, do you want to renew it?`}
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
        </StyledSectionResendEmail>
      </Suspense>
    </PublicContentLayout>
  );
};

export default ResendEmail;
