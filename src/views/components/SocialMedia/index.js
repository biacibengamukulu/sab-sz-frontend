import React from 'react';
import PropTypes from 'prop-types';
import { StyledItem, StyledSocialMedia } from './SocialMedia.styles';
import useAssets from '../../../assets';
import useControllers from '../../../controllers';

const SocialMedia = (props) => {
  const { className, color } = props;
  const { useIcons } = useAssets();
  const {
    iconFacebook: IconFacebook,
    iconInstagram: IconInstagram,
    iconTwitter: IconTwitter,
    iconWhatsApp: IconWhatsApp,
    iconGov: IconGov,
  } = useIcons();

  const { useComponentHooks } = useControllers();
  const { useSocialMedia } = useComponentHooks();
  const {
    goToFacebook,
    goToInstagram,
    goToTwitter,
    goToWhatsapp,
    goToGov,
    handleRedirectNewPage,
  } = useSocialMedia();

  return (
    <StyledSocialMedia className={className}>
      {goToFacebook && (
        <StyledItem onClick={() => handleRedirectNewPage(goToFacebook)}>
          <IconFacebook color={color} />
        </StyledItem>
      )}
      {goToInstagram && (
        <StyledItem onClick={() => handleRedirectNewPage(goToInstagram)}>
          <IconInstagram color={color} />
        </StyledItem>
      )}
      {goToTwitter && (
        <StyledItem onClick={() => handleRedirectNewPage(goToTwitter)}>
          <IconTwitter color={color} />
        </StyledItem>
      )}
      {goToWhatsapp && (
        <StyledItem onClick={() => handleRedirectNewPage(goToWhatsapp)}>
          <IconWhatsApp color={color} />
        </StyledItem>
      )}
      {goToGov && (
        <StyledItem onClick={() => handleRedirectNewPage(goToGov)}>
          <IconGov color={color} />
        </StyledItem>
      )}
    </StyledSocialMedia>
  );
};

SocialMedia.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
};

SocialMedia.defaultProps = {
  className: '',
  color: '#FFFFFF',
};

export default SocialMedia;
