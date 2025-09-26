import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledContactInfo,
  StyledRow,
  StyledRowIconContainer,
  StyledRowDetails,
} from './ContactInfo.styles';
import Typography from '../Typography';
import useAssets from '../../../assets';
import useControllers from '../../../controllers';

const ContactInfo = (props) => {
  const { className } = props;
  const { useIcons } = useAssets();
  const {
    iconMarker: IconMarker,
    iconTelephone: IconTelephone,
    iconAt: IconAt,
  } = useIcons();

  const { useComponentHooks } = useControllers();
  const { useContactInfo } = useComponentHooks();
  const { goToEmail, handleRedirectNewPage } = useContactInfo();
  return (
    <StyledContactInfo className={className}>
      <StyledRow>
        <StyledRowIconContainer>
          <IconMarker />
        </StyledRowIconContainer>
        <StyledRowDetails>
          <Typography
            className="StyledTypographyBook"
            variant="caption"
            sx={{
              color: '#FFFFFF !important',
              fontSize: '12px',
              lineHeight: '17px',
            }}
          >
            Address: Ministry of Commerce Industry and Trade P.O Box 451 Mbabane
            Swaziland
          </Typography>
        </StyledRowDetails>
      </StyledRow>
      <StyledRow>
        <StyledRowIconContainer>
          <IconTelephone />
        </StyledRowIconContainer>
        <StyledRowDetails>
          <Typography
            className="StyledTypographyBook"
            variant="caption"
            sx={{
              color: '#FFFFFF !important',
              fontSize: '12px',
              lineHeight: '17px',
            }}
          >
            Call: +268 2404 3201/6
          </Typography>
          <Typography
            className="StyledTypographyBook"
            variant="caption"
            sx={{
              color: '#FFFFFF !important',
              fontSize: '12px',
              lineHeight: '17px',
            }}
          >
            Fax: +268 2404 4711
          </Typography>
        </StyledRowDetails>
      </StyledRow>
      {goToEmail && (
        <StyledRow>
          <StyledRowIconContainer>
            <IconAt />
          </StyledRowIconContainer>
          <StyledRowDetails>
            <Typography
              variant="caption"
              sx={{
                color: '#FFFFFF !important',
                textDecoration: 'underline',
                cursor: 'pointer',
                fontSize: '12px',
                lineHeight: '17px',
              }}
              onClick={() => handleRedirectNewPage(`mailto:${goToEmail}`)}
            >
              liquorlicensing@gov.sz
            </Typography>
          </StyledRowDetails>
        </StyledRow>
      )}
    </StyledContactInfo>
  );
};

ContactInfo.propTypes = {
  className: PropTypes.string,
};

ContactInfo.defaultProps = {
  className: '',
};

export default ContactInfo;
