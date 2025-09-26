import React from 'react';
import PropTypes from 'prop-types';

import { StyledFooter, StyledFooterInfo } from './Footer.styles';
import SocialMedia from '../SocialMedia';
import TycInfo from '../TycInfo';
import ContactInfo from '../ContactInfo';
import Copyright from '../Copyright';
Copyright;
const Footer = (props) => {
  const { className } = props;
  return (
    <StyledFooter className={className}>
      <StyledFooterInfo>
        <SocialMedia className="w-1/3" />
        <TycInfo className="w-1/3" color={'white'} />
        <ContactInfo className="w-1/3" />
      </StyledFooterInfo>
      <Copyright
        className="w-full"
        style={{ backgroundColor: 'rgba(44,45,46,0.4)' }}
        sx={{
          color: '#A2AED8 !important',
          fontSize: '12px',
          lineHeight: '17px',
        }}
      />
    </StyledFooter>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: '',
};

export default Footer;
