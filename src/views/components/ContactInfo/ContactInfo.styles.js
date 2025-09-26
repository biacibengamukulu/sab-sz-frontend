import styled from 'styled-components';
import tw from 'twin.macro';
export const StyledContactInfo = styled.div.attrs({
  className: 'StyledContactInfo',
})`
  && {
    ${tw` flex flex-col`}
    justify-content: center;
    align-items: center;
    row-gap: 16px;
    margin: 0 auto;
    @media (max-width: 920px) {
      display: none;
    }
  }
`;

export const StyledRow = styled.div.attrs({
  className: 'StyledRow',
})`
  && {
    ${tw` flex flex-row flex-nowrap`}
    column-gap: 16px;
    align-items: center;
    width: 360px;
    align-self: center;
  }
`;

export const StyledRowIconContainer = styled.div.attrs({
  className: 'StyledRowIconContainer',
})`
  && {
    ${tw`relative grid`}
    min-width: 24px;
    min-height: 24px;
    place-content: center;
  }
`;

export const StyledRowDetails = styled.div.attrs({
  className: 'StyledRowDetails',
})`
  && {
    ${tw` flex flex-col`}
  }
`;
