import React from 'react';
import PropTypes from 'prop-types';
import { StyledItemStatus } from './StatusVisualization.styles';
import useControllers from '../../../controllers';

const StatusVisualization = (props) => {
  const { idStatus, applicationTypeId, userId, type } = props;
  const { useComponentHooks } = useControllers();
  const { useStatusVisualization } = useComponentHooks();
  const { statusApplication, subStatusApplication } = useStatusVisualization(
    idStatus,
    applicationTypeId
  );
  return (
    <StyledItemStatus idStatus={idStatus} userId={userId}>
      {type === 'status' ? statusApplication : subStatusApplication}
    </StyledItemStatus>
  );
};
StatusVisualization.propTypes = {
  idStatus: PropTypes.number,
  userId: PropTypes.number,
  applicationTypeId: PropTypes.number,
  type: PropTypes.oneOf(['status', 'subStatus']),
};

StatusVisualization.defaultProps = {
  idStatus: 1,
  applicationTypeId: 1,
  type: 'status',
};
export default StatusVisualization;
