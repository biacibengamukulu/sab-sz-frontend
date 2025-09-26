import styled from 'styled-components';
import tw from 'twin.macro';
import { CircularProgress } from '@mui/material';
import Typography from '../Typography';

export const StyledNotificationHeaderContainer = styled.div.attrs({
  className: 'StyledNotificationHeaderContainer',
})`
  && {
    ${tw` relative`}
    min-height: 48px;
  }
`;

export const StyledNotificationButtonContainer = styled.div.attrs({
  className: 'StyledNotificationButtonContainer',
})`
  && {
    ${tw` relative flex flex-col`}
    align-items: center;
    min-height: 48px;
    text-align: center;

    cursor: pointer;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
export const StyledTypographyNotificationHub = styled(Typography).attrs({
  className: 'StyledTypographyNotificationHub',
})`
  && {
    ${tw` relative`}
    max-width: 68px;
    font-size: 11px;
    line-height: 12px;
    color: #ffffff;

    align-items: center;
    justify-content: center;
  }
`;

export const StyledNotificationIconContainer = styled.div.attrs({
  className: 'StyledNotificationIconContainer',
})`
  && {
    ${tw` relative flex`}
    align-items: flex-end;
    min-height: 32px;
    margin-bottom: 2px;
    cursor: pointer;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
export const StyledNewNotificationMarkContainer = styled.div.attrs({
  className: 'StyledNewNotificationMarkContainer',
})`
  && {
    ${tw` absolute`}
    top: 0;
    place-content: center;
    width: 100%;

    cursor: pointer;

    ${(props) => {
      return `
      ${
        // props.menu ? `display: flex; flex-direction: column;` : `display: none;`
        props.status
          ? `     display: grid;
          `
          : `     display: none;
          `
      }
      `;
    }}
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
export const StyledExternalContainer = styled.div.attrs({
  className: 'StyledExternalContainer',
})`
  && {
    position: fixed;
    width: 100%;
    max-width: 100vw;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(34, 46, 89, 0.72);
    backdrop-filter: blur(6px);
    overflow: hidden;

    z-index: 10;
    ${(props) => {
      return `
      ${
        // props.menu ? `display: flex; flex-direction: column;` : `display: none;`
        props.status
          ? ` visibilty: visible; opacity: 1;`
          : ` display: none;visibilty: hidden; opacity: 0;`
      }
      `;
    }}
  }
`;
export const StyledContainerSidePopUp = styled.div.attrs({
  className: 'StyledContainerSidePopUp',
})`
  && {
    ${tw` relative `}
    display: flex;
    flex-direction: column;
    left: 0;
    top: 0;
    width: 320px;
    min-height: 100vh;
    max-height: 100vh;
    cursor: default;
    background: #ffffff;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
    overflow: hidden;

    ${(props) => {
      return `
      ${
        // props.menu ? `display: flex; flex-direction: column;` : `display: none;`
        props.status
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

export const StyledContainerInnerSideContainer = styled.div.attrs({
  className: 'StyledContainerInnerSideContainer',
})`
  && {
    ${tw` relative py-[18px] flex flex-col`}
    min-height: calc(100vh - 53px);
    max-height: calc(100vh - 53px);
    overflow-y: auto;
    row-gap: 8px;
    width: 100%;
  }
`;
export const StyledContainerPopUp = styled.div.attrs({
  className: 'StyledContainerPopUp',
})`
  && {
    ${tw` absolute `}
    display: flex;
    flex-direction: column;
    top: 60px;
    transform: translate(calc(-50% + 34px), 0);
    width: 360px;
    border-radius: 4px;
    cursor: default;
    overflow: hidden;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
    z-index: 9;
    ${(props) => {
      return `
      ${
        props.status
          ? ` visibility: visible; opacity: 1; color: #FFFFFF;`
          : ` display: none; visibility: hidden; opacity: 0;`
      }
      `;
    }}
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const StyledPopUpPromiseInProgressContainer = styled.div.attrs({
  className: 'StyledPopUpPromiseInProgressContainer',
})`
  && {
    ${tw`absolute grid`}
    width: 360px;
    place-content: center;
    border-radius: 16px;
    height: 100%;
    backdrop-filter: blur(3px);
    z-index: 2;
    .MuiCircularProgress-colorPrimary {
      color: #d66127;
    }
  }
`;

export const StyledPopUpPromiseInProgressInnerContainer = styled.div.attrs({
  className: 'StyledPopUpPromiseInProgressInnerContainer',
})`
  && {
    ${tw`relative flex flex-col`}
    align-items: center;
    justify-content: center;
    row-gap: 4px;
  }
`;

export const StyledSidePopUpPromiseInProgressContainer = styled.div.attrs({
  className: 'StyledSidePopUpPromiseInProgressContainer',
})`
  && {
    ${tw`absolute grid`}
    width: 320px;
    place-content: center;
    border-radius: 16px;
    height: 100%;
    backdrop-filter: blur(3px);
    z-index: 2;
    .MuiCircularProgress-colorPrimary {
      color: #d66127;
    }
  }
`;

export const StyledSidePopUpPromiseInProgressInnerContainer = styled.div.attrs({
  className: 'StyledSidePopUpPromiseInProgressInnerContainer',
})`
  && {
    ${tw`relative flex flex-col`}
    align-items: center;
    justy-content: center;
    row-gap: 4px;
  }
`;

export const StyledCircularProgress = styled(CircularProgress).attrs({
  className: 'StyledCircularProgress',
})`
  && {
    ${tw`relative`}
  }
`;

export const StyledPopUpArrow = styled.div.attrs({
  className: 'StyledPopUpArrow',
})`
  && {
    ${tw` relative`}
    max-width:6px;
    left: 50%;
    transform: translate(-100%, 0);
    height: 6px;
    max-height: 6px;
  }
`;

export const StyledContainerInnerPopUpContainer = styled.div.attrs({
  className: 'StyledContainerInnerPopUpContainer',
})`
  && {
    ${tw` relative py-[18px] flex flex-col`}

    row-gap: 4px;
    background-color: #ffffff;
    border: 1px solid #f8f9fa;
    border-top: 0;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);

    width: 100%;
    box-sizing: border-box;
    border-radius: 4px 4px 0 0;
  }
`;

export const StyledNotificationRow = styled.div.attrs({
  className: 'StyledNotificationRow',
})`
  && {
    ${tw` relative px-[18px] py-[4px] flex flex-col`}
    justify-content: center;
    cursor: pointer;
    &:hover {
      background: rgba(214, 97, 39, 0.3);
    }
  }
`;
export const StyledNotificationDescription = styled(Typography).attrs({
  className: 'StyledNotificationDescription',
})`
  && {
    ${tw` relative`}

    font-size: 12px;
    line-height: 17px;
    color: #2c2d2e;
  }
`;

export const StyledNoNotification = styled(Typography).attrs({
  className: 'StyledNoNotification',
})`
  && {
    ${tw` relative flex`}

    font-size: 12px;
    line-height: 17px;
    color: #2c2d2e;

    align-items: center;
    justify-content: center;
  }
`;

export const StyledNotificationTime = styled(Typography).attrs({
  className: 'StyledNotificationTime StyledTypographyBook',
})`
  && {
    ${tw` relative`}

    font-size: 12px;
    line-height: 17px;
    color: #6d7074;
  }
`;

export const StyledNotificationSeeAllContainer = styled.div.attrs({
  className: 'StyledNotificationSeeAllContainer',
})`
  && {
    ${tw` relative flex`}
    height: 46px;
    border: 1px solid #f8f9fa;
    border-top: 1px solid #dae0e8;
    justify-content: center;
    align-items: center;

    background-color: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    border-radius: 0 0 4px 4px;

    cursor: pointer;
  }
`;

export const StyledNotificationSeeAll = styled(Typography).attrs({
  className: 'StyledNotificationSeeAll ',
})`
  && {
    ${tw` relative`}

    font-size: 12px;
    line-height: 17px;
    color: #d66127 !important;
  }
`;

export const StyledNotificationTittleContainer = styled.div.attrs({
  className: 'StyledNotificationTittleContainer',
})`
  && {
    ${tw` relative flex`}
    min-height: 52px;
    padding: 16px;
    border-bottom: 1px solid #dae0e8;
    justify-content: space-between;
    align-items: center;
`;

export const StyledNotificationTittle = styled(Typography).attrs({
  className: 'StyledNotificationTittle StyledTypographyBold',
})`
  && {
    ${tw` relative`}

    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    color: #2c2d2e;
  }
`;
export const StyledNotificationIconClose = styled.div.attrs({
  className: 'StyledNotificationIconClose',
})`
  && {
    ${tw` relative`}
    display: grid;
    place-content: center;
    cursor: pointer;
  }
`;
