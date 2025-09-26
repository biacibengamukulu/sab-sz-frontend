import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledContainer,
  StyledCard,
  StyledShape,
  StyledCardTitle,
} from './Card.styles';
import Typography from '../Typography';
// import Button from '../Buttons';
const Card = (props) => {
  const { scale, title, callToAction, className, onClick } = props;

  return (
    <StyledContainer>
      <StyledCard className={className}>
        <StyledShape scale={scale}>
          <circle cx="30" cy="30" r="30" fill="url(#paint0_linear_2204_4647)" />

          <defs>
            <linearGradient
              id="paint0_linear_2204_4647"
              x1="87"
              y1="9.00001"
              x2="13"
              y2="89"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2E3E77" />
              <stop offset="1" stopColor="#455DB2" />
            </linearGradient>
          </defs>
        </StyledShape>

        <StyledCardTitle color="neutral">{title}</StyledCardTitle>
        <Typography
          color="secondary"
          variant="body1"
          sx={{
            fontSize: '14px',
            lineHeight: '20px',
            textDecoration: 'underline',
            letterSpacing: '-0.006em',
            cursor: 'pointer',
          }}
          onClick={onClick}
        >
          {callToAction}
        </Typography>
      </StyledCard>
    </StyledContainer>
  );
};
Card.propTypes = {
  color: PropTypes.string,
  image: PropTypes.any,
  className: PropTypes.string,
  callToAction: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
  /**
   * Type of scale custom shape
   * */
  scale: PropTypes.number,
};

Card.defaultProps = {
  color: 'primary',
  className: '',
  onClick: () => {},
  callToAction: '',
  title: '',
  scale: 1,
};
export default Card;
