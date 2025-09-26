import React, { Suspense } from 'react';
import useComponents from '../../components';
import useLayouts from '../../layouts';
import profileExample from '../../../assets/images/profileExample.jpg';
import useHelpers from '../../../helpers';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {
  StyledSectionLogs,
  StyledFieldsColumnContainer,
  StyledFieldsContainer,
  StyledButtonSave,
  StyledField,
  StyledDateFieldContainer,
  StyledDateFilterLogs,
  StyledContainerCalendarIcon,
} from './Logs.styles';
import useControllers from '../../../controllers';
import useAssets from '../../../assets';

const Logs = () => {
  const {
    Wrapper,
    ActivityIndicator,
    TextFieldControlled,
    SelectFieldControlled,
  } = useComponents();
  const { useIcons } = useAssets();
  const { iconCalendar: IconCalendar } = useIcons();

  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useValidators, usePromises } = useQuickFunctions();
  const { logsSchemaValidator } = useValidators();
  const { PrivateContentLayout } = useLayouts();
  const { promiseInProgress } = usePromises();

  // Yup validator
  const {
    control: controlLogs,
    getValues,
    watch,
    resetField,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(logsSchemaValidator),
    defaultValues: {
      referenceNumber: '',
      from: '',
      to: '',
    },
  });

  // Hooks
  const { useScreenHooks } = useControllers();
  const { useLogs } = useScreenHooks();
  const { onSubmit, topicType, handleResetFields } = useLogs({ resetField });

  return (
    <PrivateContentLayout background="tertiary">
      {promiseInProgress && <ActivityIndicator />}
      <Suspense fallback={<ActivityIndicator />}>
        <StyledSectionLogs>
          <Wrapper
            profileImageUrl={profileExample}
            title={'Logs'}
            isProfile={true}
            maxWidth={'580px'}
          >
            <StyledFieldsColumnContainer>
              <SelectFieldControlled
                id={'topic'}
                label={'Topic'}
                name={'topic'}
                control={controlLogs}
                inputValue={topicType[0].value}
                options={topicType}
                error={!!errors.topic}
                helperText={errors?.topic?.message}
                onInputChange={handleResetFields}
              />
              {(watch('topic') === 'renewal' ||
                watch('topic') === 'application') && (
                <TextFieldControlled
                  id={'referenceNumber'}
                  placeholder={'000000000'}
                  label={'Reference Number'}
                  name={'referenceNumber'}
                  variant={'outlined'}
                  fullWidth={true}
                  control={controlLogs}
                  error={!!errors.referenceNumber}
                  helperText={errors?.referenceNumber?.message}
                />
              )}
              <StyledFieldsContainer>
                <StyledDateFieldContainer>
                  <StyledDateFilterLogs
                    label="Start date"
                    id="from"
                    name="from"
                    type="date"
                    control={controlLogs}
                  />
                  <StyledContainerCalendarIcon>
                    <IconCalendar />
                  </StyledContainerCalendarIcon>
                </StyledDateFieldContainer>
                <StyledDateFieldContainer>
                  <StyledDateFilterLogs
                    label="End date"
                    id="to"
                    name="to"
                    type="date"
                    control={controlLogs}
                  />
                  <StyledContainerCalendarIcon>
                    <IconCalendar />
                  </StyledContainerCalendarIcon>
                </StyledDateFieldContainer>
              </StyledFieldsContainer>
              <StyledField>
                <StyledButtonSave
                  disabled={!isValid}
                  fullWidth={false}
                  color="primary"
                  className="self-center"
                  onClick={() => {
                    onSubmit(getValues());
                  }}
                >
                  Generate
                </StyledButtonSave>
              </StyledField>
            </StyledFieldsColumnContainer>
          </Wrapper>
        </StyledSectionLogs>
      </Suspense>
    </PrivateContentLayout>
  );
};

export default Logs;
