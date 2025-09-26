import React from 'react';
import PropTypes from 'prop-types';
// Styles
import {
  StyledWizard,
  StyledWizardPromiseInProgressContainer,
  StyledWizardPromiseInProgressInnerContainer,
  StyledCircularProgress,
  StyledCircularProgressLabel,
  StyledStatusBar,
  StyledStatusBarRight,
  StyledFormControl,
  StyledRadioGroup,
  StyledStepContainer,
} from './WizardDynamic.styles';
import {
  FormControlLabel,
  // IconButton,
  // InputAdornment,
  Radio,
} from '@mui/material';
// import { Error } from '@mui/icons-material';
import useAssets from '../../../assets';
import _ from 'lodash';
const WizardDynamic = (props) => {
  const {
    className,
    fetchingData,
    fetchingLabel,
    currentStep,
    wizardStatus,
    stepsEnabled,
    handleonChangeStep,
    fullWidth,
    error,
    sx,
    style,
    ...rest
  } = props;

  // Debug logging
  // eslint-disable-next-line no-console
  console.log('🎯 WizardDynamic props:', { currentStep, stepsEnabled, wizardStatusLength: wizardStatus?.length });

  const { useIcons } = useAssets();
  const { iconWizardStep: IconWizardStep } = useIcons();
  return (
    <StyledWizard
      className={className}
      steps={wizardStatus?.length && wizardStatus.length}
      style={style}
    >
      {fetchingData && (
        <StyledWizardPromiseInProgressContainer steps={wizardStatus.length}>
          <StyledWizardPromiseInProgressInnerContainer>
            <StyledCircularProgress />
            <StyledCircularProgressLabel>
              {fetchingLabel}
            </StyledCircularProgressLabel>
          </StyledWizardPromiseInProgressInnerContainer>
        </StyledWizardPromiseInProgressContainer>
      )}

      <StyledFormControl variant="outlined" fullWidth={fullWidth}>
        <StyledRadioGroup
          row
          defaultValue={currentStep}
          value={currentStep}
          onChange={handleonChangeStep}
          sx={sx}
          type={'text'}
          error={error}
          {...rest}
        >
          <StyledStatusBar steps={wizardStatus.length}>
            {wizardStatus.length &&
              _.map(wizardStatus, (step, id) => {
                const isDisabled = !(
                  currentStep === step.value ||
                  stepsEnabled >= step.value
                );

                // Debug each step
                // eslint-disable-next-line no-console
                console.log(`🎯 Step ${step.value}:`, { isDisabled, currentStep, stepsEnabled, stepValue: step.value });

                return (
                  <StyledStepContainer key={id}>
                    {wizardStatus.length !== step.value && (
                      <StyledStatusBarRight
                        style={{
                          borderColor: `${
                            currentStep > step.value ? '#394D94' : '#DAE0E8'
                          }`,
                        }}
                      />
                    )}
                    <FormControlLabel
                      value={step.value}
                      control={
                        <Radio
                          disabled={isDisabled}
                          icon={
                            <IconWizardStep
                              color={`${
                                currentStep > step.value ? '#394D94' : '#DAE0E8'
                              }`}
                            />
                          }
                          checkedIcon={<IconWizardStep color={'#394D94'} />}
                        />
                      }
                      labelPlacement={'bottom'}
                      label={`${currentStep === step.value ? step.label : ''}`}
                    />
                  </StyledStepContainer>
                );
              })}
          </StyledStatusBar>
        </StyledRadioGroup>
      </StyledFormControl>
    </StyledWizard>
  );
};

WizardDynamic.propTypes = {
  className: PropTypes.string,
  fetchingData: PropTypes.bool,
  fetchingLabel: PropTypes.string,
  fullWidth: PropTypes.bool,
  error: PropTypes.any,
  helperText: PropTypes.any,
  sx: PropTypes.any,
  style: PropTypes.any,
  stepsEnabled: PropTypes.number,
  currentStep: PropTypes.number,
  wizardStatus: PropTypes.array.isRequired,
  handleonChangeStep: PropTypes.func,
};

WizardDynamic.defaultProps = {
  className: '',
  fullWidth: true,
  fetchingData: false,
  handleonChangeStep: () => {},
};

export default WizardDynamic;
