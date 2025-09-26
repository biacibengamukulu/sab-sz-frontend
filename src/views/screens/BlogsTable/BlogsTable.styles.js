import styled from 'styled-components';
import tw from 'twin.macro';
import TextFieldControlled from '../../components/TextFieldControlled';
import Typography from '../../components/Typography';
import Button from '../../components/Buttons';
import PassWordFieldControlled from '../../components/PasswordFieldControlled';
import PhoneInputFieldControlled from '../../components/PhoneInputFieldControlled';

export const StyledSectionMyApplications = styled.div.attrs({
  className: 'StyledSectionMyApplications',
})`
&& {
    ${tw`relative  mt-[32px] pb-[24px] mx-[10px]`}
    width: calc(100% - 20px);
    box-sizing:content-box;
    @media (max-width: 768px){
      width: calc(100% - 32px);
      margin: 0 16px;
      padding-top: 16px;
      padding-bottom: 24px;
    }
    }}
    
`;

export const StyledCotnainerTable = styled.div.attrs({
  className: 'StyledCotnainerTable',
})`
  && {
    ${tw`relative  `}
    display: block;
    width: 100%;
    height: 590px;
    margin-top: 36px;
    z-index: 4;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const StyledCotnainerTableMobile = styled.div.attrs({
  className: 'StyledCotnainerTableMobile',
})`
  && {
    ${tw`relative  `}
    display: none;
    width: 100%;
    height: 704px;
    @media (max-width: 768px) {
      display: block;
    }
  }
`;

export const StyledContainerActions = styled.div.attrs({
  className: 'StyledContainerActions',
})`
  && {
    ${tw`relative`}
    display: flex;
    width: 100%;
    justify-content: center;
    aling-items: center;
    column-gap: 28px;
  }
`;

export const StyledContainerActionsButton = styled.div.attrs({
  className: 'StyledContainerActionsButton',
})`
  && {
    ${tw`relative  `}
    display: grid;
    place-content: center;
    height: 16px;
  }
`;
export const StyledtitleCenterTable = styled(Typography).attrs({
  className: 'StyledtitleCenterTable',
})`
  && {
    ${tw`relative flex`}
    font-size: 12px;
    line-height: 17px;
    color: red;
  }
`;
export const StyledEmailTable = styled(Typography).attrs({
  className: 'StyledEmailTable StyledTypographyLight',
})`
  && {
    ${tw`relative  `}
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */
    letter-spacing: -0.006em;
    text-decoration-line: underline;
    /* Primary/Main */

    color: #d66127;
  }
`;

export const StyledCellTable = styled(Typography).attrs({
  className: 'StyledCellTable StyledTypographyLight',
})`
  && {
    ${tw`relative  `}
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */
    letter-spacing: -0.006em;
    /* Primary/Main */
    color: #2c2d2e;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
  }
`;
export const StyledItemStatusDraft = styled.div.attrs({
  className: 'StyledItemStatusDraft',
})`
  && {
    ${tw`relative  `}
    padding: 2px 8px;
    height: 21px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-radius: 32px;
    font-size: 12px;
    line-height: 17px;

    background: #e6eaf0;
    border: 1px solid #b6bbc1;
    color: #b6bbc1;
  }
`;

export const StyledItemReferenceContainer = styled.div.attrs({
  className: 'StyledItemReferenceContainer',
})`
  && {
    ${tw`relative  `}
    cursor: pointer;
  }
  &:hover {
    text-decoration: underline;
  }
`;
export const StyledContainerTableActions = styled.div.attrs({
  className: 'StyledContainerTableActions',
})`
  && {
    ${tw`absolute flex`}
    z-index:6;
    align-items: center;
    column-gap: 16px;
    top: -78px;
    right: 0;
  }
`;
export const StyledContainerSearch = styled.div.attrs({
  className: 'StyledContainerSearch',
})`
  && {
    ${tw`relative`}

    width: 288px;
    max-width: 288px;
    z-index: 6;
    @media (max-width: 860px) and (min-width: 768px) {
      width: 220px;
      max-width: 220px;
    }
    @media (max-width: 767.9px) {
      ${tw`relative  `}
      margin: 0;
      top: 0px;
      left: 100%;
      transform: translate(calc(-100% - 75px), 0);
      width: 192px;
      max-width: 192px;
    }
  }
`;

export const StyledTextFieldControlledSearch = styled(
  TextFieldControlled
).attrs({
  className: 'StyledTextFieldControlledSearch',
})`
  && {
    @media (max-width: 768px) {
      ${tw`relative  `}
      .MuiOutlinedInput-root {
        min-width: 192px;
      }
    }
  }
`;

export const StyledButtonSearch = styled.div.attrs({
  className: 'StyledButtonSearch',
})`
  && {
    ${tw`absolute  `}
    top: 0;
    left: 100%;
    transform: translate(-100%, 32px);
    display: grid;
    place-content: center;
    width: 44px;
    height: 44px;
    padding: 0;
    cursor: pointer;
  }
`;

export const StyledButtonSearchDisable = styled.div.attrs({
  className: 'StyledButtonSearchDisable',
})`
  && {
    ${tw`absolute  `}
    top: 0;
    left: 100%;
    transform: translate(-100%, 32px);
    display: grid;
    place-content: center;
    width: 44px;
    height: 44px;
    padding: 0;
  }
`;

export const StyledButtonCreateUser = styled(Button).attrs({
  className: 'StyledButtonCreateUser',
})`
  && {
    ${tw`relative`}
    top: 12px;
    width: 140px;
    height: 44px;
    padding: 8px 16px;
  }
`;

//Modal

export const StyledChildContainerModal = styled.div.attrs({
  className: 'StyledChildContainerModal',
})`
  && {
    ${tw`relative flex flex-col`}
    max-width: 764px;
    align-items: center;
  }
`;

export const StyledTitleModal = styled(Typography).attrs({
  className: 'StyledTitleModal StyledTypographyBold',
})`
  && {
    max-width: 460px;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.021em;
  }
`;

export const StyledSubtitleModal = styled(Typography).attrs({
  className: 'StyledSubtitleModal',
})`
  && {
    margin-top: 16px;
    max-width: 460px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    color: #6d7074;
  }
`;

export const StyledFieldsContainer = styled.div.attrs({
  className: 'StyledFieldsContainer',
})`
  && {
    ${tw`relative flex flex-wrap pt-[32px]`}
    // max-width: 860px;
    gap: 20px 40px;
    & > * {
      flex: 0 1 calc(50% - 20px);
    }
    @media (max-width: 767.98px) {
      padding-top: 20px;
      flex-direction: column;
    }
  }
`;

export const StyledPasswordModal = styled(PassWordFieldControlled).attrs({
  className: 'StyledPasswordModal',
})`
  && {
    ${tw`relative`}
  }
  .MuiFormControl-root {
    margin-top: 0px;
  }
`;

export const StyledButtonCreateUserModal = styled(Button).attrs({
  className: 'StyledButtonCreateUserModal',
})`
  && {
    ${tw`relative`}
    width: 140px;
    padding: 8px 16px;
    margin-top: 64px;
  }
`;
export const StyledPhoneInputField = styled(PhoneInputFieldControlled).attrs({
  className: 'StyledPhoneInputField ',
})`
  && {
  }
`;

export const StyledFieldRow = styled.div.attrs({
  className: 'StyledFieldRow',
})`
  && {
    ${tw`relative flex`}
  }
`;
export const StyledFieldRowHidden = styled.div.attrs({
  className: 'StyledFieldRowHidden',
})`
  && {
    ${tw`relative flex`}
    display:none;
  }
`;
export const StyledDescriptionModal = styled(Typography).attrs({
  className: 'StyledDescriptionModal',
})`
  && {
    align-self: flex-start;
    color: #6d7074;
    max-width: 460px;
    font-size: 14px;
    line-height: 20px;
    margin-top: 16px;
    margin-bottom: 50px;
  }
`;

export const StyledButtonModal = styled(Button).attrs({
  className: 'StyledButtonModal',
})`
  && {
    ${tw`relative`}

    width: 250px;
    fontsize: 16px;
    line-height: 22px;
    letter-spacing: -0.011em;
    align-self: center !important;
    margin-top: 36px;
    @media (max-width: 768px) {
      margin-top: 36px;
      width: 160px;
      height: 44px;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.006em;
    }
  }
`;

// Status
export const StyledItemStatus = styled.div.attrs({
  className: 'StyledItemStatus',
})`
  && {
    ${tw`relative  `}
    padding: 2px 8px;
    height: 21px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-radius: 32px;
    font-size: 12px;
    line-height: 17px;

    background: #e6eaf0;
    border: 1px solid #b6bbc1;
    color: #b6bbc1;
    ${(props) => {
      return `
          ${
            props.idStatus === 0 &&
            `background: #FFD5DD;
          border: 1px solid #FF7575;
          color: #AA2020;`
          };
          ${
            props.idStatus === 1 &&
            `background: #DEEDCF;
          border: 1px solid #ACD187;
          color: #4A880D;`
          };
      
        `;
    }}
  }
`;
