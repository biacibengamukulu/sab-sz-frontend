import styled from 'styled-components';
import tw from 'twin.macro';
import TextFieldControlled from '../../components/TextFieldControlled';
import Typography from '../../components/Typography';
import Button from '../../components/Buttons';

export const StyledRenewalsSection = styled.div.attrs({
  className: 'StyledRenewalsSection',
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
export const StyledWrapperTitleContainer = styled.div.attrs({
  className: 'StyledWrapperTitleContainer',
})`
  && {
    ${tw`relative flex`}
    column-gap: 16px;
    align-items: center;
  }
`;

export const StyledWrapperTitle = styled(Typography).attrs({
  className: 'StyledWrapperTitle StyledTypographyBold',
})`
  && {
    ${tw`relative`}
    color: #394d94 !important;
    font-size: 32px;
    line-height: 40px;

    @media (max-width: 768px) {
      font-size: 24px;
      line-height: 28px;
    }
  }
`;
export const StyledTotalApplications = styled.div.attrs({
  className: 'StyledTotalApplications StyledTypographyBook',
})`
  && {
    ${tw`relative`}
    height: 21px;
    padding: 2px 8px;
    background: #e46c02;
    border-radius: 32px;

    font-size: 12px;
    line-height: 17px;
    color: #ffffff;
  }
`;

export const StyledContainerTable = styled.div.attrs({
  className: 'StyledContainerTable',
})`
  && {
    ${tw`relative  `}
    display: block;
    width: 100%;
    height: 590px;
    margin-top: 36px;
  }
`;

export const StyledContainerTableMobile = styled.div.attrs({
  className: 'StyledContainerTableMobile',
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

export const StyledItemStatusPending = styled.div.attrs({
  className: 'StyledItemStatusPending',
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

    background: #ffeacc;
    border: 1px solid #ffb855;
    color: #d47c00;
  }
`;

export const StyledItemStatusInProgress = styled.div.attrs({
  className: 'StyledItemStatusInProgress',
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

    background: #dce3bf;
    border: 1px solid #b9c780;
    color: #64722b;
  }
`;

export const StyledItemStatusRejected = styled.div.attrs({
  className: 'StyledItemStatusRejected',
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

    background: #ffd5dd;
    border: 1px solid #ff7575;
    color: #aa2020;
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

export const StyledContainerSearch = styled.div.attrs({
  className: 'StyledContainerSearch',
})`
  && {
    ${tw`absolute`}
    top: -78px;
    right: 0;
    transform: translate(-81px, 0);
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




export const StyledInfo = styled.div.attrs({
  className: 'StyledInfo',
})`
&& {
    ${tw`relative  my-[20px] p-[8px]`}
    width: 100%;
    background-color: #FAE1CC;
    color: black;
    font-weight: 900;
    display: flex;
    gap: 10px;
    max-width: 896px;
    margin-inline: auto;
    border-radius:16px;
    justify-content: center;
    align-items: center;
    }}
`;


export const StyledTitleModal = styled(Typography).attrs({
  className: 'StyledTitleModal StyledTypographyBold',
})`
  && {
    max-width: 460px;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.021em;
    color: #263238;
    text-align:center;

    ${(props) => {
      return `
          ${
            props.color === 'warning' &&
            ` color: #E46C02;`
          };
          ${
            props.align === 'left' &&
            ` text-align:left;`
          };
        `;
    }}

  }
`;


export const StyledDescriptionModal = styled(Typography).attrs({
  className: 'StyledDescriptionModal',
})`
  && {
    color: #6d7074;
    max-width: 460px;
    font-size: 14px;
    line-height: 20px;
    margin-top: 16px;
    margin-bottom: 10px;
  }
`;


export const StyledChildContainerModal = styled.div.attrs({
  className: 'StyledChildContainerModal',
})`
  && {
    ${tw`relative flex flex-col`}
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;


export const StyledButtonModal = styled(Button).attrs({
  className: 'StyledButtonModal',
})`
  && {
    ${tw`relative`}

    width: 250px;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.011em;
    align-self: center !important;
    margin-top: 36px;
    background:#263238;
    color:white;

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
