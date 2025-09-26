import React from 'react';
import PropTypes from 'prop-types';
import { StyledTypography } from './Typography.styles';

const Typography = (props) => {
  const { children, variant, className, color, onClick, sx } = props;
  return (
    <StyledTypography
      variant={variant}
      className={className}
      color={color}
      onClick={onClick}
      sx={sx}
      component={typeof children === 'string' ? 'p' : 'span'}
    >
      {children}
    </StyledTypography>
  );
};
Typography.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  sx: PropTypes.any,
  className: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.oneOf([
    'body1',
    'body2',
    'button',
    'caption',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'inherit',
    'overline',
    'subtitle1',
    'subtitle2',
  ]),
};

Typography.defaultProps = {
  variant: 'body1',
  color: 'primary',
  onClick: () => {},
  children: null,
};

export default Typography;
