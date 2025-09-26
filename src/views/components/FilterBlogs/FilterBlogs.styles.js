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
    ${tw` absolute `}
    top: 80px;
    width: 400px;
    max-width: 400px;
    padding: 32px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
    transform: translate(120px, 0);
    max-height: 308px;
    background: #f8f9fa;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
    border-radius: 16px;
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
    max-width: 156px;
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
    ${tw`relative  `}
    top: 0;
    // left: 100%;
    transform: translate(0px, 12px);
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
    color: #394d94;
    @media (max-width: 768px) {
      font-size: 12px;
      line-height: 17px;
    }
  }
`;
