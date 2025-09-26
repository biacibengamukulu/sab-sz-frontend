import styled from 'styled-components';
import tw from 'twin.macro';
import Typography from '../../components/Typography';
import Button from '../Buttons';

export const StyledModal = styled.div.attrs({
  className: 'StyledModal',
})`
&& {
  ${tw`fixed grid place-items-center`}
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
  background: rgb(34, 46, 89, 0.88);
  @media (max-width: 768px) {
    align-items: start;
  }
`;

export const StyledModalContainer = styled.div.attrs({
  className: 'StyledModalContainer',
})`
  && {
    ${tw`relative bg-white p-[64px] pb-[32px] m-[20px] rounded-2xl`}
    z-index: 11;
    @media (max-width: 768px) {
      margin: 24px;
      margin-top: 60px;
      padding: 32px;
      border-radius: 8px;
    }
    ${(props) => {
      return `
      ${
        props.type === 'child'
          ? ``
          : `max-width: 580px;
            min-height: 440px;
            @media (max-width: 768px) {
              min-height: 260px;
              padding-bottom: 0px;
            }
            `
      }
      `;
    }}
  }
`;

export const StyledModalTitle = styled(Typography).attrs({
  className: 'StyledFormTitle StyledTypographyBold',
})`
  && {
    padding: 14px 0;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: -0.021em;
    @media (max-width: 768px) {
      max-width: 80%;
      padding-top: 0;
      font-size: 20px;
      line-height: 28px;
      letter-spacing: -0.017em;
    }
  }
`;

export const StyledModalDescription = styled(Typography).attrs({
  className: 'StyledModalDescription',
})`
  && {
    width: 100% !important;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    color: '#6D7074';
  }
`;

export const StyledCloseIcon = styled.div.attrs({
  className: 'StyledCloseIcon',
})`
  && {
    ${tw`absolute grid place-items-center cursor-pointer`}
    top: 30px;
    right: 30px;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const StyledCloseIconMobile = styled.div.attrs({
  className: 'StyledCloseIcon',
})`
  && {
    ${tw`absolute grid place-items-center cursor-pointer`}
    display: none;
    top: 30px;
    right: 30px;
    @media (max-width: 768px) {
      display: block;
    }
  }
`;
export const StyledShapeContainer = styled.div.attrs({
  className: 'StyledShapeContainer',
})`
  && {
    ${tw`relative grid place-items-center h-[250px] mt-[20px]`}
    @media (max-width: 768px) {
      margin: 0 auto;
      width: 120px;
      height: 120px;
    }
  }
`;




export const StyledModalButton = styled(Button).attrs({
  className: 'StyledModalButton',
})`
  && {
    ${tw`relative`}

    width: 150px;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.011em;
    align-self: center !important;

    @media (max-width: 768px) {
      width: 160px;
      height: 44px;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.006em;
    }
  }
`;


export const StyledModalButtonContainer = styled.div.attrs({
  className: 'StyledModalButtonContainer',
})`
  && {
    ${tw`relative`}
    display: flex;
    justify-content: center;
  }
`;

