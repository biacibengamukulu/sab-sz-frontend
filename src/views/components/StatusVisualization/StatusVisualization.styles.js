import tw from 'twin.macro';
import styled from 'styled-components';

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
            props.idStatus === 1 &&
            `background: #e6eaf0;
          border: 1px solid #b6bbc1;
          color: #b6bbc1;`
          };
          ${
            props.idStatus === 2 &&
            `background: #DEEDCF;
          border: 1px solid #ACD187;
          color: #4A880D;`
          };
          ${
            props.idStatus > 2 &&
            props.idStatus < 7 &&
            `background: #FFEACC;
          border: 1px solid #FFB855;
          color: #D47C00;`
          };
          ${
            (props.idStatus === 7 || props.idStatus === 13) &&
            `background: #FFD5DD;
            border: 1px solid #FF7575;
            color: #AA2020;`
          };
          ${
            props.idStatus === 8 &&
            `background: #59A310; 
            border: 1px solid #59A310;
            color: #FFFFFF;`
          };
          ${
            props.idStatus === 9 &&
            `background: #FF2D55; 
            border: 1px solid #FF2D55;
            color: #FFFFFF;`
          };
          ${
            props.idStatus === 2 &&
            (props.userId === 2 || props.userId === 6) &&
            `background: #ffa641;
            border: 1px solid #FFB855;
            color: #FFFFFF;`
          };
          ${
            props.idStatus === 6 &&
            props.userId === 1 &&
            `background: #ffa641;
            border: 1px solid #FFB855;
            color: #FFFFFF;`
          };
          ${
            props.idStatus === 10 &&
            `background: #ff8c00;
            border: 1px solid #ff8c00;
            color: #FFFFFF;`
          };
          ${
            props.idStatus === 11 &&
            props.userId === 4 &&
            `background: #bbe4ed;
             border: 1px solid #2990e3;
             color: #2990e3;`
          };
          ${
            props.idStatus === 12 &&
            props.userId === 4 &&
            `background: #DEEDCF;
          border: 1px solid #ACD187;
          color: #4A880D;`
          };
          ${
            props.idStatus === 12 &&
            (props.userId === 2 || props.userId === 6) &&
            `background: #f25613;
            border: 1px solid #f25613;
            color: #FFFFFF;`
          };
          ${
            props.idStatus === 11 &&
            props.userId === 5 &&
            `background: #f25613;
            border: 1px solid #f25613;
            color: #FFFFFF;`
          };
        `;
    }}
  }
`;
