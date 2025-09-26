import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledTimeLeftContainer,
  StyledWatchIconContainer,
  StyledTimeLeftLabel,
} from './TimeLeft.styles';
import useAssets from '../../../assets';
import useControllers from '../../../controllers';

const TimeLeft = (props) => {
  const { className, timeExpiration, complementLabel } = props;

  //assets
  const { useIcons } = useAssets();
  const { iconWatch: IconWatch } = useIcons();

  const { useComponentHooks } = useControllers();
  const { useTimeLeft } = useComponentHooks();
  const { seconds, minutes, hours, days } = useTimeLeft(timeExpiration);
  return (
    <StyledTimeLeftContainer className={className}>
      <StyledWatchIconContainer>
        <IconWatch />
      </StyledWatchIconContainer>
      <StyledTimeLeftLabel>
        {`${
          days
            ? days + ' days left'
            : hours
            ? hours + ' hours left'
            : minutes
            ? minutes + ' minutes left'
            : seconds
            ? seconds + ' seconds left'
            : 'Time has expired '
        } ${complementLabel}`}
      </StyledTimeLeftLabel>
    </StyledTimeLeftContainer>
  );
};
TimeLeft.propTypes = {
  className: PropTypes.string,
  complementLabel: PropTypes.string,
  timeExpiration: PropTypes.any,
};

TimeLeft.defaultProps = {
  children: null,
  complementLabel: 'to submit the required documentation',
  color: '#96AB40',
};

export default TimeLeft;
