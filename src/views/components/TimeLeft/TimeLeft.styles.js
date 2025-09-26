import styled from 'styled-components';
import tw from 'twin.macro';
import Typography from '../Typography';

export const StyledTimeLeftContainer = styled.div.attrs({
  className: 'StyledTimeLeftContainer',
})`
  && {
    ${tw`relative flex`}
    min-width: 320px;
    height: 44px;
    padding: 8px 16px;

    align-items: center;
    justify-content: center;
    column-gap: 12px;

    background: #fae1cc;
    border-radius: 8px;
  }
`;

export const StyledWatchIconContainer = styled.div.attrs({
  className: 'StyledWatchIconContainer',
})`
  && {
    ${tw`relative grid`}
    width: 24px;
    height: 24px;
  }
`;

export const StyledTimeLeftLabel = styled(Typography).attrs({
  className: 'StyledTimeLeftLabe StyledTypography',
})`
  && {
    ${tw`relative`}
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    color: #494b4d;
  }
`;
