import React from 'react';
import PropTypes from 'prop-types';
import useAssets from '../../../assets';
import {
  StyledImageContainer,
  StyledButtonImage,
  StyledAvatarField,
} from './Avatar.styles';
useAssets;

const AvatarField = (props) => {
  const { value, onClick, onChange, ...rest } = props;

  const { useIcons } = useAssets();
  const { iconPhoto: IconPhoto } = useIcons();

  return (
    <StyledImageContainer>
      <StyledAvatarField src={value} />
      <StyledButtonImage
        color={'secondary'}
        fullWidth={false}
        onClick={onClick}
        onChange={onChange}
        {...rest}
      >
        <IconPhoto />
      </StyledButtonImage>
    </StyledImageContainer>
  );
};

AvatarField.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
};

AvatarField.defaultProps = {};

export default AvatarField;
