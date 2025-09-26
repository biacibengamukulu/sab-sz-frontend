import { useEffect, useState } from 'react';
// import useApi from '../../../api';
import useModels from '../../../models';
import _ from 'lodash';

const useStatusVisualization = (id) => {
  // const { useActions } = useApi();
  // const { dispatch, useApplicationsTableActions } =
  //   useActions();
  // const {
  //   actGetApplicationsStatusHelpList,
  // } = useApplicationsTableActions();

  const { useSelectors } = useModels();
  const { useSelector, useApplicationsTableSelectors, useUserSelectors } =
    useSelectors();
  const { applicationStatusHelpListSelector } = useApplicationsTableSelectors();
  const { userSelector } = useUserSelectors();
  const { statusHelpList } = useSelector(applicationStatusHelpListSelector);
  const { profile } = useSelector(userSelector);
  const [statusApplication, setStatusApplication] = useState(' ');

  useEffect(() => {
    handleFilterStatusApplication(id);
  }, [id, statusHelpList]);
  const handleFilterStatusApplication = (id) => {
    const status = _.find(statusHelpList, (option) => option.id === id);

    switch (profile.roleType.id) {
      case 1:
        // secretary
        status?.subStatus
          ? setStatusApplication(status?.subStatus)
          : setStatusApplication(status?.status);
        id === 4 && setStatusApplication('Sent to inspector');
        break;
      case 2:
        // inspector
        status?.subStatus
          ? setStatusApplication(status?.subStatus)
          : setStatusApplication(status?.status);
        id === 5 && setStatusApplication('Report submitted');

        break;
      case 3:
        // Administraror
        status?.subStatus
          ? setStatusApplication(status?.subStatus)
          : setStatusApplication(status?.status);
        break;
      case 4:
        // frontuser
        setStatusApplication(status?.status);
        break;

      default:
        status?.status && setStatusApplication(status?.status);
        break;
    }

    // if (profile.roleType.roleType === 'frontUser') {
    //   setStatusApplication(status?.status);
    // } else if (profile.roleType.id === 2 || profile.roleType.id === 5) {
    //   status?.status && setStatusApplication(status?.status);
    //   status?.subStatus && setStatusApplication(status?.subStatus);
    // } else {
    //   id === 2 && setStatusApplication(status?.status);
    //   id > 2 && id < 6 && setStatusApplication('Pending approval');
    //   id === 6 && setStatusApplication(status?.subStatus);
    //   id > 6 && setStatusApplication(status?.status);
    // }
  };
  return {
    statusApplication,
  };
};

export default useStatusVisualization;
