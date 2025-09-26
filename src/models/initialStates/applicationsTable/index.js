const useApplicationsTableInitialStates = () => {
  const applicationsTableInitialState = {
    data: [],
    currentPage: 0,
    lastPage: 0,
    pageSize: 0,
    totalRows: 0,
    applicationSelected: {},
    statusHelpList: [
      {
        id: 1,
        status: 'Draft',
        subStatus: '',
      },
      {
        id: 2,
        status: 'Submitted',
        subStatus: '',
      },
      {
        id: 3,
        status: 'In Progress',
        subStatus: 'Pending approval',
      },
      {
        id: 4,
        status: 'In Progress',
        subStatus: 'Pending report',
      },
      {
        id: 5,
        status: 'In Progress',
        subStatus: 'Report approval',
      },
      {
        id: 6,
        status: 'In Progress',
        subStatus: 'Pending board adjucdication',
      },
      {
        id: 7,
        status: 'Request for changes',
        subStatus: '',
      },
      {
        id: 8,
        status: 'Licence issued',
        subStatus: '',
      },
      {
        id: 9,
        status: 'Rejected',
        subStatus: '',
      },
      {
        id: 10,
        status: 'Payment fee pending',
        subStatus: '',
      },
      {
        id: 11,
        status: 'Payment completed',
        subStatus: 'Final approval',
      },
      {
        id: 12,
        status: 'Payment fee review',
        subStatus: '',
      },
      {
        id: 13,
        status: 'Payment failed',
        subStatus: '',
      },
      {
        id: 14,
        status: 'Advertising payment review',
        subStatus: '',
      },
      {
        id: 15,
        status: 'Advertising payment failed',
        subStatus: '',
      },
    ],
  };
  return {
    applicationsTableInitialState,
  };
};

export default useApplicationsTableInitialStates;
