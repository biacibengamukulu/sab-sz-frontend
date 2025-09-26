import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { StyledTooltip } from './TooltipField.styles';
import useAssets from '../../../assets';

const TooltipField = (props) => {
  const { className, Icon, color, title, placement, sx, size } = props;
  const { useIcons } = useAssets();
  const { iconTooltip: IconTooltip } = useIcons();

  return (
    <StyledTooltip
      className={className}
      title={title}
      arrow={true}
      placement={placement}
      sx={sx}
      disableFocusListener
      disableTouchListener
      // leaveDelay={1000000}
    >
      <div style={{ margin: '0 8px' }}>
        {Icon ? (
          <Icon size={size} color={color} />
        ) : (
          <IconTooltip size={size} color={color} />
        )}
      </div>
    </StyledTooltip>
  );
};

TooltipField.propTypes = {
  id: PropTypes.string,
  title: PropTypes.any.isRequired,
  color: PropTypes.string,
  placement: PropTypes.string,
  className: PropTypes.string,
  Icon: PropTypes.any,
  sx: PropTypes.any,
  size: PropTypes.number,
};

TooltipField.defaultProps = {
  placement: 'top',
};

export default TooltipField;
