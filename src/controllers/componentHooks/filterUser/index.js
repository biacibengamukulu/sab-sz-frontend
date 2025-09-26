import { useState } from 'react';
// import useApi from '../../../api';
import useModels from '../../../models';

const useFilterUser = () => {
  // Models
  const { useSelectors } = useModels();
  const { useSelector, useUserSelectors } = useSelectors();
  const { userSelector } = useUserSelectors();
  const { userRolesList } = useSelector(userSelector);

  // React
  const [filterStatus, setFilterStatus] = useState(false);

  //List of options for every user filter
  const userRolesListSelect = [
    { value: 'none', text: 'Select', disabled: true },
    ...userRolesList,
  ];

  /**
   * Handlers
   */

  // Handlers: filter
  const hanldeShowFilter = () => {
    setFilterStatus(!filterStatus);
  };
  return {
    userRolesListSelect,
    filterStatus,
    hanldeShowFilter,
  };
};

export default useFilterUser;
