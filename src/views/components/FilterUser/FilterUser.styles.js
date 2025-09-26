import styled from 'styled-components';
import tw from 'twin.macro';
import SelectFieldControlled from '../SelectFieldControlled';
import Typography from '../Typography';
import Button from '../Buttons';
import DateFieldControlled from '../DateFieldControlled';
export const StyledContainerFilter = styled.div.attrs({
  className: 'StyledContainerFilter',
})`
  && {
    ${tw` absolute flex flex-col`}
    row-gap: 16px;
    top: 80px;
    width: 400px;
    max-width: 400px;
    padding: 32px;
    height: 200px;
    max-height: 200px;
    background: #f8f9fa;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
    border-radius: 16px;
    z-index: 10;

    ${(props) => {
      return `
      ${
        props.filterStatus
          ? ` visibilty: visible; opacity: 1;`
          : ` display: none;visibilty: hidden; opacity: 0;`
        // ` visibilty: visible; opacity: 1;`
      }
      `;
    }}
    @media (max-width: 768px) {
      transform: translate(107px, 0);
      width: 328px;
      max-width: 328px;
      padding: 16px;
      gap: 16px;
    }
  }
`;

export const StyledDateFilter = styled(DateFieldControlled).attrs({
  className: 'StyledDateFilter',
})`
  && {
    ${tw` relative `}
    font-size: 14px;
    line-height: 20px;
    max-width: 156px;
    @media (max-width: 768px) {
      min-width: 60px;
      max-width: 60px;
      .MuiOutlinedInput-root {
        min-width: 140px;
      }
    }
  }
`;

export const StyledSelectFilter = styled(SelectFieldControlled).attrs({
  className: 'StyledSelectFilter',
})`
  && {
    ${tw` relative `}
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    .formInputLabel {
      min-width: 200px;
    }
    @media (max-width: 768px) {
      min-width: 60px;
      max-width: 60px;
      .MuiOutlinedInput-root {
        min-width: 140px;
      }
    }
  }
`;

export const StyledTypographyFilter = styled(Typography).attrs({
  className: 'StyledTypographyFilter',
})`
  && {
    ${tw` relative `}
    align-self: center;
    cursor: pointer;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    @media (max-width: 768px) {
      max-height: 44px;
    }
  }
`;

export const StyledButtonApply = styled(Button).attrs({
  className: 'StyledButtonApply',
})`
  && {
    ${tw` relative `}
    padding: 12px 16px;
    align-self: center;
    @media (max-width: 768px) {
      max-height: 44px;
    }
  }
`;

export const StyledButtonFilter = styled(Button).attrs({
  className: 'StyledButtonFilter',
})`
  && {
    ${tw`relative`}
    top: 12px;
    padding: 8px 16px !important;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const StyledButtonFilterMobile = styled.div.attrs({
  className: 'StyledButtonFilterMobile',
})`
  && {
    ${tw`absolute  `}

    display: none;
    @media (max-width: 768px) {
      display: flex;
      align-items: center;
      height: 44px;
      top: 0;
      left: 100%;
      transform: translate(18px, 32px);
      padding: 8px 0px !important;
      max-width: 100px;
      cursor: pointer;
    }
  }
`;

export const StyledButtonLabelFilter = styled(Typography).attrs({
  className: 'StyledButtonLabelFilter',
})`
  && {
    ${tw`relative `}
    margin-left: 8px;
    @media (max-width: 768px) {
      font-size: 12px;
      line-height: 17px;
    }
  }
`;
export const StyledBottomContainer = styled.div.attrs({
  className: 'StyledBottomContainer',
})`
  && {
    ${tw`relative flex `}
    justify-content: space-between;
    width: 100%;
    height: 44px;
  }
`;
