import { useEffect, useState } from 'react';

const useFilterRenew = (watch) => {

  const [statusList, setStatusList] = useState([ { value: 'none', text: 'Select' } ]);

  const [filterStatus, setFilterStatus] = useState(false);

  const filterTypeApplicationStatus = watch('applicationType');

  const statusListActions = [
    { value: 'none', text: 'Select', disabled: true },
    { value: 'pending', text: 'Pending', disabled: false },
    { value: 'approved', text: 'Approved', disabled: false },
    { value: 'rejection', text: 'Rejected', disabled: false },
    { value: 'to_review', text: 'To be reviewed', disabled: false },
    { value: 'to_inspector', text: 'To be inspector', disabled: false },
    { value: 'to_approved', text: 'To be approved', disabled: false }
  ];
  
  useEffect(() => {
    setStatusList(statusListActions);
  }, [filterTypeApplicationStatus]);

  const handleShowFilter = () => {
    setFilterStatus(!filterStatus);
  };

  return {
    statusList,
    filterStatus,
    handleShowFilter,
  };
};

export default useFilterRenew;
