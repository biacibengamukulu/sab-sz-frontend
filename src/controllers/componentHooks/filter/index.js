import { useEffect, useState } from 'react';
// import useApi from '../../../api';
import useModels from '../../../models';

const useFilter = (watch) => {
  // const { useActions } = useApi();
  // const { dispatch, useApplicationsTableActions } =
  //   useActions();
  // const {
  //   actGetApplicationsStatusHelpList,
  // } = useApplicationsTableActions();

  const { useSelectors } = useModels();
  const { useSelector, useUserSelectors } = useSelectors();
  const { userSelector } = useUserSelectors();
  const { profile } = useSelector(userSelector);
  const [statusList, setStatusList] = useState([
    { value: 'none', text: 'Select' },
  ]);
  const [typeList, setTypeList] = useState([{ value: 'none', text: 'Select' }]);
  const [filterStatus, setFilterStatus] = useState(false);

  const filterTypeApplicationStatus = watch('applicationType');

  //List of options for every user filter
  // CEO
  const statusListAdministratorApplications = [
    { value: 'none', text: 'Select', disabled: true },
    // { value: '1', text: 'Draft', disabled: false },
    { value: '2', text: 'Documents pending', disabled: false },
    { value: '3', text: 'Pending approval', disabled: false },
    { value: '4', text: 'Report pending', disabled: false },
    { value: '5', text: 'Report approval', disabled: false },
    { value: '6', text: 'Pending board adjudication', disabled: false },
    { value: '7', text: 'Request for changes', disabled: false },
    { value: '8', text: 'Licence Issued', disabled: false },
    { value: '9', text: 'Rejected', disabled: false },
    { value: '10', text: 'Payment fee pending', disabled: false },
    { value: '11', text: 'Payment completed', disabled: false },
    { value: '12', text: 'Payment fee review', disabled: false },
    { value: '13', text: 'Payment failed', disabled: false },
    { value: '14', text: 'Advertising payment review', disabled: false },
    { value: '15', text: 'Advertising Payment failed', disabled: false },
    { value: '16', text: 'Upload documents expired', disabled: false },
    { value: '17', text: 'Issuance payment expired', disabled: false },
  ];
  const statusListAdministratorRenewals = [
    { value: 'none', text: 'Select', disabled: true },
    { value: '2', text: 'Submitted', disabled: false },
    { value: '4', text: 'Pending report', disabled: false },
    { value: '5', text: 'Report approval', disabled: false },
    { value: '6', text: 'Pending board adjudiction', disabled: false },
    { value: '7', text: 'Request for changes', disabled: false },
    { value: '8', text: 'Licence Issued', disabled: false },
    { value: '9', text: 'Rejected', disabled: false },
    { value: '10', text: 'Payment fee pending', disabled: false },
    { value: '12', text: 'Fee payment review', disabled: false },
    // { value: '13', text: 'Payment failed', disabled: false },
  ];

  //Front user
  const statusListFrontUserApplications = [
    { value: 'none', text: 'Select', disabled: true },
    { value: '1', text: 'Draft', disabled: false },
    { value: '2', text: 'Documents pending', disabled: false },
    { value: '3', text: 'Submitted', disabled: false },
    { value: '4,5,6', text: 'In Progress', disabled: false },
    { value: '7', text: 'Request for changes', disabled: false },
    { value: '8', text: 'Licence Issued', disabled: false },
    { value: '9', text: 'Rejected', disabled: false },
    { value: '10', text: 'Payment fee pending', disabled: false },
    { value: '11', text: 'Payment completed', disabled: false },
    { value: '12', text: 'Payment fee review', disabled: false },
    { value: '13', text: 'Payment failed', disabled: false },
    { value: '14', text: 'Advertising payment review', disabled: false },
    { value: '15', text: 'Advertising Payment failed', disabled: false },
    { value: '16', text: 'Upload documents expired', disabled: false },
    { value: '17', text: 'Issuance payment expired', disabled: false },
  ];
  const statusListFrontUserRenewals = [
    { value: 'none', text: 'Select', disabled: true },
    { value: '1', text: 'Draft', disabled: true },
    { value: '2', text: 'Submitted', disabled: false },
    // { value: '3,4,5,6', text: 'In Progress', disabled: true },
    // { value: '7', text: 'Request for changes', disabled: false },
    // { value: '10', text: 'Payment pending', disabled: true },
    // { value: '11', text: 'Payment completed', disabled: true },
    // { value: '13', text: 'Payment failed', disabled: true },
    // { value: '8', text: 'Approved', disabled: false },
    // { value: '9', text: 'Rejected', disabled: false },
  ];

  //Manager & Administrator
  const statusListSecretaryApplications = [
    { value: 'none', text: 'Select', disabled: true },
    { value: '2', text: 'Documents pending', disabled: false },
    { value: '3', text: 'Pending approval', disabled: false },
    { value: '4', text: 'Sent to inspector', disabled: false },
    { value: '5', text: 'Report approval', disabled: false },
    { value: '6', text: 'Pending board adjudication', disabled: false },
    { value: '7', text: 'Request for changes', disabled: false },
    { value: '8', text: 'Licence Issued', disabled: false },
    { value: '9', text: 'Rejected', disabled: false },
    { value: '10', text: 'Payment fee pending', disabled: false },
    { value: '11', text: 'Payment completed', disabled: false },
    { value: '12', text: 'Payment fee review', disabled: false },
    { value: '13', text: 'Payment failed', disabled: false },
    { value: '14', text: 'Advertising payment review', disabled: false },
    { value: '15', text: 'Advertising Payment failed', disabled: false },
    { value: '16', text: 'Upload documents expired', disabled: false },
    { value: '17', text: 'Issuance payment expired', disabled: false },
  ];
  const statusListSecretaryRenewals = [
    { value: 'none', text: 'Select', disabled: true },
    { value: '2', text: 'Pending Approval', disabled: false },
    { value: '4', text: 'Pending report', disabled: false },
    { value: '5', text: 'Report approval', disabled: false },
    { value: '6', text: 'Pending board adjudiction', disabled: false },
    { value: '7', text: 'Request for changes', disabled: false },
    { value: '8', text: 'Approved', disabled: false },
    { value: '9', text: 'Rejected', disabled: false },
    { value: '12', text: 'Payment review', disabled: true },
    // { value: '13', text: 'Payment failed', disabled: true },
  ];

  //Inspector
  const statusListInspectorApplications = [
    { value: 'none', text: 'Select', disabled: true },
    { value: '4', text: 'Pending report', disabled: false },
    { value: '5', text: 'Report submitted', disabled: false },
    { value: '7', text: 'Request for changes', disabled: false },
  ];

  const statusListOthers = [
    { value: 'none', text: 'Select' },
    { value: '1', text: 'Draft' },
    { value: '2', text: 'Submitted' },
    // { value: '3,4,5', text: 'Pending approval' },
    // { value: '6', text: 'Voting pending' },
    // { value: '7', text: 'Request for changes' },
    // { value: '8', text: 'Approved' },
    // { value: '9', text: 'Rejected' },
  ];

  // Licence Type options
  const licenseTypesListRenewal = [
    { value: 'none', text: 'Select', disabled: true },
    { value: '1', text: 'Licence Application' },
    // { value: '2', text: 'Renewal' },
  ];
  const licenseTypesList = [
    { value: 'none', text: 'Select' },
    { value: '1', text: 'Licence Application' },
  ];
  useEffect(() => {
    if (
      filterTypeApplicationStatus === 'none' ||
      filterTypeApplicationStatus === '1'
    ) {
      switch (profile.roleType.id) {
        case 1:
          // Secretary
          setStatusList(statusListSecretaryApplications);
          setTypeList(licenseTypesListRenewal);
          break;
        case 2:
          // Inspector
          setStatusList(statusListInspectorApplications);
          setTypeList(licenseTypesList);
          break;
        case 3:
          // ceo
          setStatusList(statusListAdministratorApplications);
          setTypeList(licenseTypesListRenewal);
          break;
        case 4:
          // Front user
          setStatusList(statusListFrontUserApplications);
          setTypeList(licenseTypesListRenewal);
          break;
        default:
          setStatusList(statusListOthers);
          setTypeList(licenseTypesList);
          break;
      }
    } else {
      // Only renewals
      switch (profile.roleType.id) {
        case 1:
          // Secretary
          setStatusList(statusListSecretaryRenewals);
          setTypeList(licenseTypesListRenewal);
          break;
        case 3:
          // ceo
          setStatusList(statusListAdministratorRenewals);
          setTypeList(licenseTypesListRenewal);
          break;
        case 4:
          // Front user
          setStatusList(statusListFrontUserRenewals);
          setTypeList(licenseTypesListRenewal);
          break;
        default:
          setStatusList(statusListOthers);
          setTypeList(licenseTypesList);
          break;
      }
    }
  }, [filterTypeApplicationStatus]);
  const hanldeShowFilter = () => {
    setFilterStatus(!filterStatus);
  };
  return {
    statusList,
    typeList,
    filterStatus,
    hanldeShowFilter,
  };
};

export default useFilter;
