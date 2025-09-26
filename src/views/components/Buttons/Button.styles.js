import tw from 'twin.macro';
import styled from 'styled-components';
import Button from '@mui/material/Button';

export const StyledButton = styled(Button).attrs({
  className: 'StyledButton',
})`
  && {
    ${tw`rounded-lg px-[16px] py-[12px] normal-case bg-transparent`}
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    ${(props) => {
      return `
      ${props.disabled ? `opacity: 0.5; ` : ``}`;
    }}
    ${(props) => {
      return `
        ${
          props.color === 'primary'
            ? `background-color: #E46C02 !important; color: #FFFFFF !important; border: 2px solid #E46C02;
        
              &:hover{
                background-color: #E46C02 !important; color: #FFFFFF; border: 2px solid #E46C02;
              }s
              ${
                props.variant === 'outlined' &&
                `background-color: #E46C02 !important; color: #FFFFFF; border: 2px solid #FFFFFF;
                &:hover{
                  background-color: #E46C02 !important; color: #FFFFFF; border: 2px solid #FFFFFF;
                }
                `
              };
              `
            : `background-color: #394D94 !important; color: #FFFFFF; border: 2px solid #394D94;
              &:hover{
                background-color: #394D94 !important; color: #FFFFFF; border: 2px solid #394D94;
              }
              ${
                props.variant === 'outlined' &&
                `background-color: transparent !important; color: #394D94; border: 2px solid #394D94;
                &:hover{
                  background-color: transparent !important; color: #394D94; border: 2px solid #394D94;
                }
                `
              };
              `
        };
        ${
          props.color === 'error'
            ? `background-color: #CE1F13  !important; color: #FFFFFF !important; border: 2px solid #CE1F13;
              &:hover{
                background-color: #CE1F13  !important; color: #FFFFFF !important; border: 2px solid #CE1F13;
              }
              ${
                props.variant === 'outlined' &&
                `background-color: white !important; color: #ff2d55  !important; 
                &:hover{
                  background-color: white !important; color: #ff2d55  !important;
                }
                `
              };
              `
            : `
              `
        };
        ${
          props.color === 'success'
            ? `background-color: #548C5C  !important; color: #FFFFFF !important; border: 2px solid #548C5C;
              &:hover{
                background-color: #548C5C  !important; color: #FFFFFF !important; border: 2px solid #548C5C;
              }
              ${
                props.variant === 'outlined' &&
                `background-color: white !important; color: #548C5C  !important; 
                &:hover{
                  background-color: white !important; color: #548C5C  !important;
                }
                `
              };
              `
            : `
              `
        };
        ${
          props.$promiseLoading
            ? `
            padding:0px;
            cursor: not-allowed;
              `
            : `
              `
        };
      `;
    }}
  }
`;

export const StyleLoading = styled.div`
  && {
    ${tw`relative py-[3px] grid`}
    width: 50%;
    place-content: center;
  }
`;
