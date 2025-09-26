import React from 'react';
import PropTypes from 'prop-types';
import { StyledStatusView } from './StatusView.styles';

const StatusView = (props) => {
  const { status } = props;

  const changeStatus = (status) =>{
    //pending, rejection, approved, to_review, to_inspector, to_approved
    let newsStatus=status;
      switch(status){
         case 'to_review': newsStatus='To be reviewed';  break;
         case 'rejection': newsStatus='Rejected';  break;
         case 'approved': newsStatus='Approved';  break;
         case 'to_inspector': newsStatus='To be inspector';  break;
         case 'to_approved': newsStatus='To be approved';  break;
      }
      return newsStatus.charAt(0).toUpperCase() + newsStatus.slice(1);
  }

  const newsStatus=changeStatus(status);

  return (
    <StyledStatusView status={status}>  {newsStatus} </StyledStatusView>
  );
};


StatusView.propTypes = {
  status: PropTypes.string,
};

StatusView.defaultProps = {
  status: 'expired',
};
export default StatusView;
