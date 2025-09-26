import React, { useEffect, useState } from 'react';
import useApi from '../../../api';
import useHelpers from '../../../helpers';
import useModels from '../../../models';
//import StatusVisualization from '../../../views/components/StatusVisualization';
import StatusRenew from '../../../views/components/StatusRenew';
import StatusView from '../../../views/components/StatusView';

const useApplicationsRenewTable = () => {
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useNavigation, usePromises, useDateFormatter } = useQuickFunctions();
  const { navigateTo } = useNavigation();
  const { promiseInProgressArea: promiseApplicationsTable } =
    usePromises('applicationsTable');
  const { promiseInProgressArea: promiseGetApplicationById } =
    usePromises('getApplicationById');

  // Api
  const { useActions } = useApi();
  const {
    dispatch,
    useApplicationsTableActions,
    useApplicationFormActions,
    useApplicationReviewActions,
    useApplicationRenewalsActions,
  } = useActions();
  const {
    actGetApplicationsTable,
    actGetApplicationById,
    actGetApplicationsStatusHelpList,
  } = useApplicationsTableActions();
  const { actDeleteApplicationRenewal } = useApplicationRenewalsActions();
  const { actSetApplicationFormFromTable, actCancelApplication } =
    useApplicationFormActions();
  const {
    actResetApplicationReview,
    actSetCurrentApplicationReviewStep,
    actSetActiveApplicationReviewSteps,
  } = useApplicationReviewActions();

  // Models
  const { useSelectors } = useModels();
  const {
    useSelector,
    useApplicationsTableSelectors,
    useApplicationFormSelectors,
    useUserSelectors,
    useRenewalNoticesSelectors,
  } = useSelectors();
  const { applicationsTableDataSelector } = useApplicationsTableSelectors();
  const { applicationReadySelector } = useApplicationFormSelectors();
  const { applicationReadySelector: applicationReadyRenewalSelector } =
    useRenewalNoticesSelectors();
  const { userSelector } = useUserSelectors();
  const { data, currentPage, lastPage, pageSize, totalRows } = useSelector(
    applicationsTableDataSelector
  );
  const { profile } = useSelector(userSelector);
  const { applicationReady } = useSelector(applicationReadySelector);
  const { applicationReady: applicationReadyRenewal } = useSelector(
    applicationReadyRenewalSelector
  );

  //Hooks

  //React
  const [currentPageTable, setCurrentPageTable] = useState(1);
  const [lastPageTable, setLastPageTable] = useState(1);
  const [rows, setRows] = useState([]);

  const [redirectApplicationForm, setRedirectApplicationForm] = useState(false);
  const [redirectApplication, setRedirectApplication] = useState(false);

  const [searchFilter, setSearchFilter] = useState('');
  const [customFilter, setCustomFilter] = useState({
    licenseType: '2',
    status: '',
    start: '',
    end: '',
  });

  useEffect(() => {
    dispatch(actGetApplicationsStatusHelpList());
    dispatch(
      actGetApplicationsTable({
        page: currentPageTable,
        search: searchFilter,
        licenseType: '2',
        ...customFilter,
      })
    );
    // Delete the current application from state
    dispatch(actResetApplicationReview());
    dispatch(actCancelApplication({ id: '' }));
    dispatch(actDeleteApplicationRenewal());
  }, []);

  useEffect(() => {

    dispatch(
      actGetApplicationsTable({
        page: currentPageTable,
        search: searchFilter,
        licenseType: '2',
        ...customFilter,
      })
    );
  }, [currentPageTable, profile.roleType.id]);

  useEffect(() => {

    handleTableUpdate();
  }, [currentPage, data, lastPage]);

  //Redirect at application selected
  useEffect(() => {

    if (applicationReady) {
      redirectApplicationForm && handleRedirectApplicationForm();
      redirectApplication && handleRedirectApplication();
    }
  }, [
    applicationReady,
    applicationReadyRenewal,
    redirectApplication,
    redirectApplicationForm,
  ]);

  /**Handlers */
  // Handlers: table change
  const handleTableUpdate = () => {
    setRows(data);
    setLastPageTable(lastPage);
  };

  const handlePageChange = (e, newPage) => {
    setCurrentPageTable(newPage);
  };

  const handleDateFormat = (dateOld) => {
    const { finalDateFormat } = useDateFormatter(dateOld);
    return finalDateFormat;
  };

  // Handlers: redirect after get application
  const handleRedirectApplication = () => {
    profile.roleType.id === 4 && navigateTo(`/application`);
    profile.roleType.id !== 4 && navigateTo(`/application-renew-track`);
  };

  const handleRedirectApplicationForm = () => {
    navigateTo(`/application-form`);
  };

  // After getting the application data setRedirectApplicationForm(true)
  const handleGetApplicationSuccess = (data) => {
    // For the files saved, is necessary remove its extension from the name
    let applicationData = data.application;
    for (const [key] of Object.entries(applicationData)) {
      if (applicationData[key]?.name) {
        applicationData[key] = {
          ...applicationData[key],
          name: applicationData[key].name.replace(/\.[^/.]+$/, ''),
        };
      }
    }

    // set the application data for the form or review
    if (applicationData.applicationType?.id === 2) {
      applicationData.status.id < 3 && profile.roleType.roleType === 'frontUser'
        ? dispatch(
            actSetApplicationFormFromTable(
              {
                application: {
                  ...applicationData,
                  previous_application_id: data.application.id,
                  date: data.date,
                  is_renewal: 1,
                },
              },
              handleSuccessAfterGetApplicationForm
            )
          )
        : dispatch(
            actSetApplicationFormFromTable(
              {
                application: {
                  ...applicationData,
                  previous_application_id: data.application.id,
                  date: data.date,
                  is_renewal: 1,
                },
              },
              setRedirectApplication(true)
            )
          );
    } else {
      applicationData.status.id < 3 && profile.roleType.roleType === 'frontUser'
        ? dispatch(
            actSetApplicationFormFromTable(
              { application: { ...applicationData, date: data.date } },
              handleSuccessAfterGetApplicationForm
            )
          )
        : dispatch(
            actSetApplicationFormFromTable(
              { application: { ...applicationData, date: data.date } },
              setRedirectApplication(true)
            )
          );
    }
  };

  const handleSuccessAfterGetApplicationForm = () => {
    setRedirectApplicationForm(true);
  };

  const handleInitialStepApplicationReview = (applicationStatusId) => {
    switch (applicationStatusId) {
      case 2:
        //Submitted
        dispatch(actSetCurrentApplicationReviewStep({ step: 1 }));
        dispatch(actSetActiveApplicationReviewSteps({ steps: 1 }));
        break;
      case 4:
        //inspection report upload
        dispatch(actSetCurrentApplicationReviewStep({ step: 2 }));
        dispatch(actSetActiveApplicationReviewSteps({ steps: 2 }));
        break;
      case 5:
        //report approval
        dispatch(actSetCurrentApplicationReviewStep({ step: 3 }));
        dispatch(actSetActiveApplicationReviewSteps({ steps: 3 }));
        break;
      case 6:
        //board adjudication
        dispatch(actSetCurrentApplicationReviewStep({ step: 4 }));
        dispatch(actSetActiveApplicationReviewSteps({ steps: 4 }));
        break;
      case 10:
        //Payment fee pending
        dispatch(actSetCurrentApplicationReviewStep({ step: 5 }));
        dispatch(actSetActiveApplicationReviewSteps({ steps: 5 }));
        break;
      case 12:
        //Payment fee review
        dispatch(actSetCurrentApplicationReviewStep({ step: 5 }));
        dispatch(actSetActiveApplicationReviewSteps({ steps: 5 }));
        break;
      case 13:
        //Payment failed
        dispatch(actSetCurrentApplicationReviewStep({ step: 5 }));
        dispatch(actSetActiveApplicationReviewSteps({ steps: 5 }));
        break;
      case 17:
        //Payment failed
        dispatch(actSetCurrentApplicationReviewStep({ step: 5 }));
        dispatch(actSetActiveApplicationReviewSteps({ steps: 5 }));
        break;
      case 18:
        //inspection report upload
        dispatch(actSetCurrentApplicationReviewStep({ step: 2 }));
        dispatch(actSetActiveApplicationReviewSteps({ steps: 2 }));
        break;
      default:
        dispatch(actSetCurrentApplicationReviewStep({ step: 1 }));
        break;
    }
  };
  // Handlers: Get application by id (By row click)
  const handleGetApplicationById = (data) => {
    /**
     * Licence type
     * 1 = Licence application
     * 2 = renewal application
     */
    
    if(data.row.action_renew!="to_review") return;

    profile.roleType.roleType !== 'frontUser' &&
      handleInitialStepApplicationReview(data.row.applicationStatusId);

    dispatch(
      actGetApplicationById(
        { id: data.id, date: data.row.applicationDate },
        handleGetApplicationSuccess
      )
    );
  };

  const handleGetApplicationByIdMobile = (data) => {
    if(data.row.action_renew!="to_review") return;

    if (
      data.row.applicationStatusId > 1 &&
      profile.roleType.id === 'frontUser'
    ) {
      dispatch(
        actGetApplicationById(
          { id: data.id, date: data.row.applicationDate },
          handleGetApplicationSuccess
        )
      );
    }
  };

  const onSearch = (data) => {
    setSearchFilter(data.searchField);
    dispatch(
      actGetApplicationsTable({
        page: 1,
        search: data.searchField,
        licenseType: '2',
        ...customFilter,
      })
    );
    setCurrentPageTable(1);
  };

  const onResetSearch = (data) => {
    setSearchFilter(data);
    dispatch(
      actGetApplicationsTable({
        page: 1,
        search: data,
        licenseType: '2',
        ...customFilter,
      })
    );
    setCurrentPageTable(1);
  };
  const onFilter = (data) => {
    const finalFilter = {
      action_renew : data.status !== 'none' ? data.status : '',
      start: data.from,
      end: data.to,
    };
   // console.log("onFilter ", finalFilter);
    dispatch(
      actGetApplicationsTable({
        page: 1,
        licenseType: '2',
        ...finalFilter,
        ...searchFilter,
      })
    );
    setCustomFilter(finalFilter);
    setCurrentPageTable(1);
  };

  const handleResetSearch = (value) => {
    !value && onResetSearch(value);
  };

  const columns = [
    {
      field: 'id',
      sortable: false,
      hide: true,
    },
    {
      field: 'reference',
      headerName: 'REFERENCE',
      width: 200,
      sortable: false,
      renderCell: (cellValues) => {
        return cellValues.row.reference;
      },
    },
    {
      field: 'propocedOutletName',
      headerName: 'OUTLET NAME',
      width: 220,
      sortable: false,
    },
    {
      field: 'applicationDate',
      headerName: 'APPLICATION DATE',
      width: 200,
      sortable: false,
      renderCell: (cellValues) =>
        handleDateFormat(cellValues.row.applicationDate),
    },
    {
      field: 'applicationStatusId',
      headerName: 'STATUS',
      width: 200,
      sortable: false,
      renderCell: (cellValues) => {
        return (
              <StatusView  status={cellValues.row.action_renew.toLowerCase()}     />
        );
      },
    },
    {
      field: 'action_renew',
      headerName: 'ACTIONS',
      width: 200,
      sortable: false,
      renderCell: (cellValues) => {
        return (
          <StatusRenew  status={cellValues.row.action_renew} text='Review'    />
        );
      },
    },
  ];


  const columnsMobile = [
    {
      field: 'id',
      sortable: false,
      hide: true,
    },
    {
      field: 'reference',
      headerName: 'REFERENCE',
      width: 200,
      sortable: false,
      renderCell: (cellValues) => {
        return cellValues.row.reference;
      },
    },
    {
      field: 'applicationDate',
      headerName: 'APPLICATION DATE',
      width: 200,
      sortable: false,
      renderCell: (cellValues) =>
        handleDateFormat(cellValues.row.applicationDate),
    },
    {
      field: 'action_renew',
      headerName: 'ACTIONS',
      width: 200,
      sortable: false,
      renderCell: (cellValues) => {
        return (
          <StatusRenew  status={cellValues.row.action_renew} text='Review'    />
        );
      },
    },
  ];




  return {
    promiseApplicationsTable,
    promiseGetApplicationById,

    columns,
    columnsMobile,
    rows,
    pageSize,
    totalRows,
    currentPageTable,
    lastPageTable,
    handlePageChange,
    handleGetApplicationById,
    profile,
    onSearch,
    onFilter,
    handleResetSearch,
    handleGetApplicationByIdMobile,
  };
};

export default useApplicationsRenewTable;
