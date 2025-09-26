import React from 'react';
import PropTypes from 'prop-types';
import { StyledStatusRenew } from './StatusRenew.styles.js';
import useAssets from '../../../assets';

const StatusRenew = (props) => {
  const { status, text } = props;
  const { useIcons } = useAssets();
  const { iconCancel: IconCancel, iconOk: IconOk, iconTimer: IconTimer  } = useIcons()

  return (
     (status==='expired'  || status==='renew' || status==='to_review') && <StyledStatusRenew>  {text}  </StyledStatusRenew> ||
     (status==='rejected' || status==='rejection') && <IconCancel />  ||
     status==='approved' && <IconOk /> ||
     (status==='pending' || status==='to_inspector' || status==='to_approved' ) && <IconTimer />
  );
};
StatusRenew.propTypes = {
  status: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string
};

StatusRenew.defaultProps = {
  status: 'expired',
  text: 'Renew',
  type: 'default',
};
export default StatusRenew;
