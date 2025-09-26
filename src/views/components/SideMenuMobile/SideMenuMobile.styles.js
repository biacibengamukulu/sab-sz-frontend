import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledSideMenu = styled.div.attrs({
  className: 'StyledSideMenu',
})`
  && {
    display: none;
    @media (max-width: 768px) {
      position: absolute;
      padding-top: 24px;
      padding-bottom: 32px;
      top: 44px;
      left: 0;
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: #394d94;
      z-index: 8;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
      ${(props) => {
        return `
        ${
          // props.menu ? `display: flex; flex-direction: column;` : `display: none;`
          props.sideMenuStatus
            ? ` visibilty: visible; opacity: 1;`
            : ` display: none;visibilty: hidden; opacity: 0;`
        }
        `;
      }}
    }
  }
`;
export const StyledHamButton = styled.div.attrs({
  className: 'StyledHamButton',
})`
  && {
    display: none;
    @media (max-width: 768px) {
      display: block;
      position: fixed;
      top: 13px;
      left: 16px;
      width: 24px;
      height: 18px;
    }
  }
`;

export const StyledSideMenuInner = styled.div.attrs({
  className: 'StyledSideMenuInner',
})`
  && {
    display: none;
    @media (max-width: 768px) {
      position: fixed;
      padding-top: 24px;
      padding-bottom: 32px;
      top: 44px;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: #394d94;
      z-index: 8;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    }
  }
`;
export const StyledSideMenuOptions = styled.div.attrs({
  className: 'StyledSideMenuOptions',
})`
  && {
    display: none;
    @media (max-width: 768px) {
      ${tw` relative`}
      display: flex;
      flex-direction: column;
    }
  }
`;

export const StyledSideMenuItem = styled.div.attrs({
  className: 'StyledSideMenuItem',
})`
  && {
    display: none;
    @media (max-width: 768px) {
      ${tw` relative`}
      display: flex;
      align-items: center;
      height: 56px;
      padding-left: 16px;
      cursor: pointer;
    }
  }
`;

export const StyledSideBottomOptions = styled.div.attrs({
  className: 'StyledSideBottomOptions',
})`
  && {
    display: none;
    @media (max-width: 768px) {
      ${tw` relative`}
      display: flex;
      flex-direction: column;
      margin-left: 32px;
      margin-bottom: 32px;
    }
  }
`;
