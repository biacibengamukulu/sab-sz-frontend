// Packages
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
import { Avatar } from '@mui/material';
import Button from '../../components/Buttons';

export const StyledAvatarField = styled(Avatar).attrs({
  className: 'StyledWrapperImage',
})`
  && {
    ${tw` relative`}
    width: 120px;
    max-width: 120px;
    height: 120px;
    max-height: 120px;
    border-radius: 8px;
    @media (max-width: 768px) {
      width: 80px;
      max-width: 80px;
      height: 80px;
      max-height: 80px;
    }
  }
`;

export const StyledImageContainer = styled.div.attrs({
  className: 'StyledImageContainer',
})`
  && {
    ${tw` absolute`}
    top: 0;
    left: 50%;
    width: 120px;
    max-width: 120px;
    height: 120px;
    max-height: 120px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    transform: translate(-50%, -50%);
    z-index: 2;
    @media (max-width: 768px) {
      top: 32px;
      left: 100%;
      width: 80px;
      max-width: 80px;
      height: 80px;
      max-height: 80px;
      transform: translate(calc(-100% - 40px), 0);
    }
  }
`;

export const StyledButtonImage = styled(Button).attrs({
  className: 'StyledButtonImage',
})`
  && {
    ${tw` absolute`}
    min-width: 40px;
    max-width: 40px;
    min-height: 40px;
    max-height: 40px;
    padding: 0;
    top: 100%;
    left: 100%;
    transform: translate(-80%, -80%);
  }
`;
