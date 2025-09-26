import React from 'react';
import propTypes from 'prop-types';
import { StyledActivityIndicator } from './ActivityIndicator.styles';
import CircularProgress from '@mui/material/CircularProgress';

const ActivityIndicator = ({ className, showActivityIndicator = true }) => {
  if (showActivityIndicator)
    return (
      <StyledActivityIndicator className={className}>
        <CircularProgress />
      </StyledActivityIndicator>
    );
  else return <></>;
};

export default ActivityIndicator;

ActivityIndicator.propTypes = {
  className: propTypes.string,
  showActivityIndicator: propTypes.bool,
};

ActivityIndicator.defaultProps = {
  className: '',
  showActivityIndicator: true,
};
