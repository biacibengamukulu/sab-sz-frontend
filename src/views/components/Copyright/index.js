import React from 'react';
import PropTypes from 'prop-types';
import { StyledCopyright } from './Copyright.styles';
import Typography from '../Typography';

const Copyright = (props) => {
  const { className, color, sx, style } = props;

  return (
    <StyledCopyright style={style} className={className}>
      <Typography
        className="StyledTypographyBook"
        variant="caption"
        color={color}
        sx={sx}
      >
        © Copyright 2022
      </Typography>
    </StyledCopyright>
  );
};

Copyright.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  sx: PropTypes.any,
};

Copyright.defaultProps = {
  className: '',
  color: 'neutral-80',
};

export default Copyright;
