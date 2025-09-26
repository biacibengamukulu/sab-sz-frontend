import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledCircularProgressContainer,
  StyledCircularProgressInnerContainer,
  StyledCircularProgress,
  StyledCircularProgressInner,
  StyledLabelContainer,
  StyledProgressPercent,
  StyledProgressLabel,
} from './CircularProgress.styles';

const CircularProgress = (props) => {
  const { className, color, value, sx } = props;
  return (
    <StyledCircularProgressContainer className={className}>
      <StyledCircularProgress
        variant={'determinate'}
        value={value}
        sx={sx}
        colorStroke={color}
      />

      <StyledCircularProgressInner
        variant={'determinate'}
        value={value}
        thickness={1}
        sx={sx}
        colorStroke={color}
      />
      <StyledCircularProgressInnerContainer>
        <StyledLabelContainer>
          <StyledProgressPercent>{`${value}%`}</StyledProgressPercent>
          <StyledProgressLabel>Progress</StyledProgressLabel>
        </StyledLabelContainer>
      </StyledCircularProgressInnerContainer>
    </StyledCircularProgressContainer>
  );
};
CircularProgress.propTypes = {
  onClick: PropTypes.func,
  sx: PropTypes.any,
  sxInner: PropTypes.any,
  color: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.number,
};

CircularProgress.defaultProps = {
  children: null,
  color: '#E46C02',
};

export default CircularProgress;
