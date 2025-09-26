import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../Buttons';
import SwitchControlled from '../SwitchControlled';
import Typography from '../Typography';
import TextAreaControlled from '../TextAreaControlled';
import TimeLeft from '../TimeLeft';
import { CircularProgress } from '@mui/material';

export const StyledAdvertisingFeeReviewContainer = styled.div.attrs({
  className: 'StyledAdvertisingFeeReviewContainer',
})`
  && {
    ${tw`relative`}
  }
`;

//Time left
export const StyledTimeLeftContainer = styled.div.attrs({
  className: 'StyledTimeLeftContainer',
})`
  && {
    ${tw`relative flex`}
    justify-content: flex-end;
    align-items: center;
    column-gap: 16px;
  }
`;
export const StyledTimeLeftComponent = styled(TimeLeft).attrs({
  className: 'StyledTimeLeftComponent',
})`
  && {
    ${tw`relative`}
  }
`;
export const StyledRowButtons = styled.div.attrs({
  className: 'StyledRowButtons',
})`
  && {
    ${tw`relative flex`}
    margin-top: 24px;
    justify-content: flex-end;
    column-gap: 16px;
  }
`;
export const StyledCheckContainer = styled.div.attrs({
  className: 'StyledCheckContainer',
})`
  && {
    ${tw`relative`}
    margin-top: 32px;
    @media (max-width: 768px) {
      margin-top: 0;
      margin-bottom: 20px;
    }
  }
`;
export const StyledButtonResetTime = styled(Button).attrs({
  className: 'StyledButtonResetTime',
})`
  && {
    ${tw`relative`}
    height: 44px;

    width: 110px;
    fontsize: 16px;
    line-height: 22px;
    letter-spacing: -0.011em;
    align-self: center !important;
    .MuiCircularProgress-colorPrimary {
      color: #ffffff;
    }
    @media (max-width: 768px) {
      margin-top: 36px;
      width: 130px;
      height: 44px;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.006em;
    }
  }
`;
export const StyledButtonComment = styled(Button).attrs({
  className: 'StyledButtonComment',
})`
  && {
    ${tw`relative`}
    width: 180px;
    fontsize: 16px;
    line-height: 22px;
    letter-spacing: -0.011em;
    align-self: center !important;
    color: #394d94;
    .MuiCircularProgress-colorPrimary {
      color: #ffffff;
    }
    @media (max-width: 768px) {
      margin-top: 36px;
      width: 130px;
      height: 44px;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.006em;
    }
  }
`;

export const StyledButtonApprove = styled(Button).attrs({
  className: 'StyledButtonApprove',
})`
  && {
    ${tw`relative`}

    width: 180px;
    fontsize: 16px;
    line-height: 22px;
    letter-spacing: -0.011em;
    align-self: center !important;
    .MuiCircularProgress-colorPrimary {
      color: #ffffff;
    }
    @media (max-width: 768px) {
      margin-top: 36px;
      width: 130px;
      height: 44px;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.006em;
    }
  }
`;

/**
 * modal styles
 */

// child Modal
export const StyledTitleModal = styled(Typography).attrs({
  className: 'StyledTitleModal StyledTypographyBold',
})`
  && {
    max-width: 460px;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.021em;
    color: #394d94;
  }
`;

export const StyledSubtitleModal = styled(Typography).attrs({
  className: 'StyledSubtitleModal',
})`
  && {
    max-width: 460px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    color: #6d7074;
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
    margin-bottom: 50px;
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

export const StyledTextAreaField = styled(TextAreaControlled).attrs({
  className: 'StyledTextAreaField',
})`
  && {
    ${tw`relative`}
    margin-top: 8px;
    width: 750px;
    .StyledTextareaAutosize {
      min-height: 160px;
      max-height: 320px;
    }
  }
`;
export const StyledSwitchField = styled(SwitchControlled).attrs({
  className: 'StyledSwitchField',
})`
  && {
    ${tw`relative`}
    align-self: flex-start;
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
    .MuiCircularProgress-colorPrimary {
      color: #ffffff;
    }
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
export const StyledLabelCheck = styled.div.attrs({
  className: 'StyledLabelCheck StyledTypographyLight',
})`
  && {
    max-width: 460px;
    font-size: 12px;
    line-height: 17px;
    letter-spacing: -0.006em;
  }
`;

// cancel  Modal
export const StyledTitleModalCancel = styled(Typography).attrs({
  className: 'StyledTitleModalCancel StyledTypographyBold',
})`
  && {
    margin-top: 32px;
    max-width: 460px;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.021em;
    color: #394d94;
  }
`;
export const StyledSubtitleModalCancel = styled(Typography).attrs({
  className: 'StyledSubtitleModalCancel StyledTypographyBook',
})`
  && {
    margin-top: 24px;
    max-width: 460px;
    margin-top: 12px;
    font-size: 12px;
    line-height: 17px;
    color: #494b4d;
  }
`;
export const StyledButtonModalCancel = styled(Button).attrs({
  className: 'StyledButtonModalCancel',
})`
  && {
    ${tw`relative`}

    width: 186px;
    fontsize: 16px !important;
    line-height: 22px !important;
    letter-spacing: -0.011em;
    align-self: center !important;
    margin-top: 36px;

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

// advertising fee payment
export const StyledFieldsAdvertisingFeeContainer = styled.div.attrs({
  className: 'StyledFieldsAdvertisingFeeContainer',
})`
  && {
    ${tw`relative grid`}
    margin-top: 40px;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr;
    column-gap: 20px;
  }
`;
export const StyledFieldsAdvertisingFeeInnerContainer = styled.div.attrs({
  className: 'StyledFieldsAdvertisingFeeInnerContainer',
})`
  && {
    ${tw`relative`}
  }
`;

export const StyledFieldsContainerMultiple = styled.div.attrs({
  className: 'StyledFieldsContainerMultiple',
})`
  && {
    ${tw`relative flex flex-wrap pb-[32px]`}
    gap: 20px 40px;
    & > * {
      flex: 1 1 calc(33% - 80px);
    }
    @media (max-width: 767.98px) {
      display: none;
    }
  }
`;

export const StyledFieldColumn = styled.div.attrs({
  className: 'StyledFieldColumn',
})`
  && {
    ${tw`relative flex flex-col`}
    min-width: 25%;
  }
`;
export const StyledFieldColumnTitle = styled(Typography).attrs({
  className: 'StyledFieldColumnTitle',
})`
  && {
    ${tw`relative`}
    font-size: 12px;
    line-height: 17px;

    color: #6d7074;
  }
`;

export const StyledFieldColumnValue = styled(Typography).attrs({
  className: 'StyledFieldColumnValue StyledTypographyBook',
})`
  && {
    ${tw`relative`}
    font-size: 14px;
    line-height: 20px;flex;
    align-items: center;
    letter-spacing: -0.006em;

    color: #2C2D2E;

  }
`;

export const StyledFieldsBorder = styled.div.attrs({
  className: 'StyledFieldsBorder',
})`
  && {
    ${tw`relative`}
    width: 100%
    height: 0;
    background: #6d7074;
    border: 1px solid #dae0e8;
    border-top: 1px solid #dae0e8;
    @media (max-width: 767.98px) {
      display: none;
    }
  }
`;
export const StyledAdvertisingFeeActionsContainer = styled.div.attrs({
  className: 'StyledAdvertisingFeeActionsContainer',
})`
  && {
    ${tw`relative flex-wrap flex py-[16px]`}
    align-items: center;
    gap: 20px 40px;
    & > * {
      flex: 0 1 calc(50% - 20px);
    }
  }
`;
export const StyledAdvertisingFeeProofOfPaymentContainer = styled.div.attrs({
  className: 'StyledAdvertisingFeeProofOfPaymentContainer',
})`
  && {
    ${tw`relative flex`}
    height: 44px;
    margin-top: 24px;
    padding-left: 16px;
    padding-right: 24px;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #eceff3;
    box-sizing: border-box;
    border-radius: 4px;
  }
`;

export const StyledCircularProgress = styled(CircularProgress).attrs({
  className: 'StyledCircularProgress',
  size: 24,
})`
  && {
    ${tw`relative`}
  }
`;

export const StyledContainerIconViewContainer = styled.a.attrs({
  className: 'StyledContainerIconViewContainer',
})`
  && {
    ${tw`relative`}
    display: grid;
    place-content: center;
    width: 21px;
    height: 21px;
    cursor: pointer;
  }
`;
export const StyledAdvertisingFeeFieldReviewActions = styled.div.attrs({
  className: 'StyledAdvertisingFeeFieldReviewActions',
})`
  && {
    ${tw`relative flex`}
    width: 100%;
    column-gap: 20px;
    & > * {
      flex: 0 1 calc(50% - 20px);
    }
  }
`;
