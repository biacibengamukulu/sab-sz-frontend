import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledWrapper,
  StyledGoBack,
  StyledGoBackTypography,
  StyledWrapperTitle,
  StyledWrapperSubTitle,
  StyledWrapperDescription,
  StyledChildrenContainer,
  StyledProfileDescription,
} from './Wrapper.styles';
import useAssets from '../../../assets';

const Wrapper = (props) => {
  const {
    className,
    children,
    title,
    subTitle,
    description,
    isProfile,
    isReview,
    maxWidth,
    wizard,
    withBackButton,
    onClickBackButton,
  } = props;
  const { useIcons } = useAssets();
  const { iconArrowLeft: IconArrowLeft } = useIcons();
  return (
    <StyledWrapper
      maxWidth={maxWidth}
      className={className}
      isReview={isReview}
    >
      {wizard}
      {withBackButton && (
        <StyledGoBack onClick={onClickBackButton}>
          <IconArrowLeft color={'#ffffff'} />
          <StyledGoBackTypography color="white" variant="body1">
            Back
          </StyledGoBackTypography>
        </StyledGoBack>
      )}
      {isProfile ? (
        <>
          <StyledWrapperTitle
            color="secondary"
            variant="h2"
            sx={{
              fontSize: '32px',
              lineHeight: '40px',
              letterSpacing: '-0.021em',
            }}
          >
            {title}
          </StyledWrapperTitle>
          <StyledWrapperSubTitle color="neutral" variant="h3">
            {subTitle}
          </StyledWrapperSubTitle>
          <StyledProfileDescription>{description}</StyledProfileDescription>
        </>
      ) : (
        <>
          <StyledWrapperTitle
            color="primary"
            variant="h2"
            sx={{
              fontSize: '32px',
              lineHeight: '40px',
              letterSpacing: '-0.021em',
            }}
          >
            {title}
          </StyledWrapperTitle>
          <StyledWrapperSubTitle
            color="neutral"
            variant="body2"
            sx={{
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '-0.006em',
              color: '#6D7074',
            }}
          >
            {subTitle}
          </StyledWrapperSubTitle>
          <StyledWrapperDescription
            color="neutral"
            variant="body2"
            sx={{
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '-0.006em',
              color: '#6D7074',
            }}
          >
            {description}
          </StyledWrapperDescription>
        </>
      )}

      <StyledChildrenContainer>{children}</StyledChildrenContainer>
    </StyledWrapper>
  );
};
Wrapper.propTypes = {
  className: PropTypes.string,
  /**
   * Image used for the profile screen
   */
  isProfile: PropTypes.bool,
  /**
   * Ajust margin for wizzard at low resolutions
   */
  isReview: PropTypes.bool,
  title: PropTypes.any,
  subTitle: PropTypes.any,
  description: PropTypes.any,
  maxWidth: PropTypes.string,
  children: PropTypes.any,
  wizard: PropTypes.any,
  withBackButton: PropTypes.bool,
  onClickBackButton: PropTypes.func,
};

Wrapper.defaultProps = {
  className: '',
  title: '',
  subTitle: '',
  description: '',
  isProfile: false,
  withBackButton: false,
  onClickBackButton: () => {},
};
export default Wrapper;
