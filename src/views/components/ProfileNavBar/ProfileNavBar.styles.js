import { Avatar } from '@mui/material';
import styled from 'styled-components';
import tw from 'twin.macro';
import Typography from '../../components/Typography';

export const StyledProfileInfoContainer = styled.div.attrs({
  className: 'StyledProfileInfoContainer',
})`
  && {
    ${tw` relative flex flex-row`}
    align-items: center;
    cursor: default;
    z-index: 8;
    // @media (max-width: 768px) {
    //   display: none;
    // }
  }
`;

export const StyledNotificationContainer = styled.div.attrs({
  className: 'StyledNotificationContainer',
})`
  && {
    cursor: pointer;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const StyledProfileUser = styled.div.attrs({
  className: 'StyledProfileUser',
})`
  && {
    ${tw` relative flex flex-col`}
    margin-right: 16px;
  }
`;

export const StyledUserName = styled(Typography).attrs({
  className: 'StyledUserName',
})`
  && {
    min-width: 58px;
    max-width: 100px;
    width: 100%;
    max-height: 44px;
    font-size: 16px;
    line-height: 22px;
    text-align: right;
    letter-spacing: -0.011em;
    color: #ffffff;
    text-overflow: ellipsis;
    overflow-x: hidden;
    @media (max-width: 1259.98px) {
      min-width: 72px;
      max-width: 72px;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const StyledUserType = styled(Typography).attrs({
  className: 'StyledUserType',
})`
  && {
    min-width: 58px;
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
    text-align: right;
    color: #ffffff;
    @media (max-width: 1259.98px) {
      font-size: 10px;
      line-height: 12px;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const StyledContainerImage = styled.div.attrs({
  className: 'StyledContainerImage',
})`
  && {
    ${tw` relative flex space-x-1`}
    align-items: flex-end;
    cursor: pointer;
    @media (max-width: 768px) {
      cursor: default;
    }
  }
`;

export const StyledAvatarImage = styled(Avatar).attrs({
  className: 'StyledNavbarImage',
})`
  && {
    ${tw` relative`}
    width: 48px;
    max-width: 48px;
    height: 48px;
    max-height: 48px;
    border-radius: 8px;
    @media (max-width: 768px) {
      width: 32px;
      max-width: 32px;
      height: 32px;
      max-height: 32px;
      border-radius: 4px;
    }
  }
`;

export const StyledArrowDownContainer = styled.div.attrs({
  className: 'StyledArrowDownContainer',
})`
  && {
    cursor: pointer;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
export const StyledContainerMenu = styled.div.attrs({
  className: 'StyledContainerMenu',
})`
  && {
    ${tw` absolute `}
    display: flex;
    flex-direction: column;
    top: 56px;
    right: 0;
    width: 196px;
    cursor: default;
    overflow-x: hidden;
    ${(props) => {
      return `
      ${
        // props.menu ? `display: flex; flex-direction: column;` : `display: none;`
        props.menu
          ? ` visibilty: visible; opacity: 1; color: #FFFFFF;`
          : ` display: none;visibilty: hidden; opacity: 0;`
      }
      `;
    }}
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const StyledMenuArrow = styled.div.attrs({
  className: 'StyledMenuArrow',
})`
  && {
    ${tw` relative`}
    left: 153px;
    height: 6px;
    max-height: 6px;
  }
`;

export const StyledMenu = styled.div.attrs({
  className: 'StyledMenu',
})`
  && {
    ${tw` relative p-[18px] flex flex-col space-y-3`}
    background-color: #ffffff;
    padding-right: 0;
    border: 1px solid #f8f9fa;
    border-top: 0;

    width: 196px;
    box-sizing: border-box;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
  }
`;

export const StyledMenuRow = styled.div.attrs({
  className: 'StyledMenuRow',
})`
  && {
    ${tw` relative flex`}
    align-items: center;
  }
`;
export const StyledMenuItem = styled(Typography).attrs({
  className: 'StyledMenuItem',
  color: 'secondary',
})`
  && {
    ${tw` relative`}

    font-size: 12px;
    line-height: 17px;
    font-weight: 500;
    cursor: pointer;
  }
`;
export const StyledTotalApplications = styled.div.attrs({
  className: 'StyledTotalApplications StyledTypographyBook',
})`
  && {
    ${tw`relative`}
    margin-left: 16px;
    align-self: center;
    height: 21px;
    padding: 2px 8px;
    background: #e46c02;
    border-radius: 32px;

    font-size: 12px;
    line-height: 17px;
    color: #ffffff;
  }
`;
