import React from 'react';
import PropTypes from 'prop-types';
import { StyledTycInfo } from './TycInfo.styles';
import Typography from '../Typography';
import useControllers from '../../../controllers';

const TycInfo = (props) => {
  const { className, color, sideMenu, style } = props;
  const { useComponentHooks } = useControllers();
  const { useTycInfo } = useComponentHooks();
  const { goToTC, goToPP, handleRedirectNewPage } = useTycInfo();

  return (
    <StyledTycInfo className={className} style={style}>
      {goToPP && (
        <Typography
          color={color}
          variant="caption"
          sx={{
            color: '#FFFFFF !important',
            fontSize: '12px',
            lineHeight: '17px',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
          onClick={() => handleRedirectNewPage(goToPP)}
        >
          Privacy Policy
        </Typography>
      )}
      {goToTC && (
        <Typography
          color={color}
          variant="caption"
          sx={{
            color: '#FFFFFF !important',
            fontSize: '12px',
            lineHeight: '17px',
            textDecoration: 'underline',
            cursor: 'pointer',
            marginLeft: `${sideMenu ? '0px' : '24px'}`,
          }}
          onClick={() => handleRedirectNewPage(goToTC)}
        >
          Terms and conditions
        </Typography>
      )}
    </StyledTycInfo>
  );
};

TycInfo.propTypes = {
  className: PropTypes.string,
  style: PropTypes.any,
  sideMenu: PropTypes.bool,
  color: PropTypes.string,
};

TycInfo.defaultProps = {
  className: '',
  color: 'secondary',
  sideMenu: false,
};

export default TycInfo;
