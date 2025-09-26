import tw from 'twin.macro';
import styled from 'styled-components';

export const StyledStatusView = styled.div.attrs({
  className: 'StyledStatusView',
})`
  && {
    ${tw`relative  `}
    padding: 4px 16px;
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
    font-weight:700;

    ${(props) => {
      return `
          ${
            (props.status === 'expired' ||  props.status === 'rejected' || props.status === 'rejection') &&
            `background: #FFD5DD;
          border: 1px solid #E68F89;
          color: #89150D;`
          };
          ${
            props.status === 'approved' &&
            `background: #DDE8DE;
          border: 1px solid #A9C5AD;
          color: #385D3D;`
          };
          ${
            (props.status === 'to_expired'  || props.status === 'renew'  ||  props.status === 'to_review') &&
            `background: #FFEACC;
          border: 1px solid #FFB855;
          color: #D47C00;`
          };
        `;
    }}
  }
`;
