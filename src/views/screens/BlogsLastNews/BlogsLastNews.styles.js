import styled from 'styled-components';
import tw from 'twin.macro';
import Typography from '../../components/Typography';
// import TextFieldControlled from '../../components/TextFieldControlled';
// import Button from '../../components/Buttons';
// import PassWordFieldControlled from '../../components/PasswordFieldControlled';
// import PhoneInputFieldControlled from '../../components/PhoneInputFieldControlled';

export const StyledSectionLastNews = styled.div.attrs({
  className: 'StyledSectionLastNews',
})`
  && {
    ${tw`relative flex flex-col`}
    width: 80%;
    margin: 0px auto;
    padding: 82px 0;
    align-items: center;
    row-gap: 16px;
  }
`;
export const StyledTitleSection = styled(Typography).attrs({
  className: 'StyledTitleSection',
})`
  && {
    ${tw` relative flex`}
    align-self: flex-start;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.022em;
    color: #394d94;
    @media (max-width: 768px) {
      font-size: 32px;
      line-height: 40px;
    }
  }
`;
export const StyledFieldsLastNewsContainer = styled.div.attrs({
  className: 'StyledFieldsLastNewsContainer',
})`
  && {
    ${tw`relative flex flex-wrap pt-[32px]`}
    justify-content: center;
    margin: 0 auto;
    max-width: 1240px;
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
