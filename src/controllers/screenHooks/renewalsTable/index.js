import React, { useEffect, useState } from 'react';
import useApi from '../../../api';
import useHelpers from '../../../helpers';
import useModels from '../../../models';
import StatusRenew from '../../../views/components/StatusRenew';
import StatusView from '../../../views/components/StatusView';

const useRenewalsTable = () => {
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useNavigation, usePromises, useDateFormatter } = useQuickFunctions();
  const { navigateTo } = useNavigation();
  const { promiseInProgressArea: promiseGetApplicationsRenewalsTable } =
    usePromises('getApplicationsRenewalsTable');
  const { promiseInProgressArea: promiseGetApplicationById } =
    usePromises('getApplicationById');

  // Api
  const { useActions } = useApi();
  const {
    dispatch,
    useApplicationRenewalsActions,

    //useApplicationsTableActions,
    useApplicationFormActions,
    useApplicationReviewActions,
  } = useActions();
  const {
    actGetApplicationsRenewalsTable,
    actDeleteApplicationRenewal,
    //actGetApplicationRenewal,
  } = useApplicationRenewalsActions();

 // const { actGetApplicationsStatusHelpList } =  useApplicationsTableActions();

  const {
   actSetApplicationFormFromTable,
    actCancelApplication,
  } = useApplicationFormActions();
  const { actResetApplicationReview } = useApplicationReviewActions();

  // Models
  const { useSelectors } = useModels();
  const {
    useSelector,
    useRenewalNoticesSelectors,

    useApplicationFormSelectors,
    useUserSelectors,
  } = useSelectors();

  const {
    applicationReadySelector: applicationReadyRenewalSelector,
    renewalsTableDataSelector,
  } = useRenewalNoticesSelectors();

  const { applicationReadySelector } = useApplicationFormSelectors();

  const { userSelector } = useUserSelectors();
  const { data, currentPage, lastPage, pageSize, totalRows } = useSelector(
    renewalsTableDataSelector
  );

  const { profile } = useSelector(userSelector);
  const { applicationReady } = useSelector(applicationReadySelector);
  const { applicationReady: applicationReadyRenewal } = useSelector(
    applicationReadyRenewalSelector
  );

  //Hooks

  //React
  const [showModal, setShowModal] = useState(false);
  const [dataRow, setDataRow] = useState({});
  const [currentPageTable, setCurrentPageTable] = useState(1);
  const [lastPageTable, setLastPageTable] = useState(1);
  const [rows, setRows] = useState([]);

  const [redirectApplicationForm, setRedirectApplicationForm] = useState(false);
  const [redirectApplicationRenewal, setRedirectApplicationRenewal] =
    useState(false);

  const [searchFilter, setSearchFilter] = useState('');
  const [customFilter, setCustomFilter] = useState({
    start: '',
    end: '',
  });

  useEffect(() => {

    //dispatch(actGetApplicationsStatusHelpList());
    /*dispatch(
      actGetApplicationsRenewalsTable({
        page: currentPageTable,
        search: searchFilter,
        ...customFilter,
      })
    );*/
    //Delete the current application from state 
    dispatch(actResetApplicationReview());
    dispatch(actCancelApplication({ id: '' }));
    dispatch(actDeleteApplicationRenewal());
   /* dispatch(
      actGetApplicationsRenewalsTable({
        page: 1,
        search: '',
        start: '',
        end: '',
      })
    );*/
  }, []);



  useEffect(() => {
  
    handleTableUpdate();
  }, [currentPage, data, lastPage]);

  //Redirect at application selected
  useEffect(() => {
  
    if (applicationReady) {
      redirectApplicationForm && handleRedirectApplicationForm();
    }
  }, [
    applicationReady,
    applicationReadyRenewal,
    redirectApplicationForm,
    redirectApplicationRenewal,
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

  const handleRedirectApplicationForm = () => {
    navigateTo(`/application-form-renew`);
  };

  // After getting the application data setRedirectApplicationForm(true)
  const handleGetApplicationSuccess = () => {
   
    dispatch(
      actSetApplicationFormFromTable(
        {
          application: {
            is_renewal: 1,
            isNewRenewal: 1,
          },
        },
        handleSuccessAfterGetApplicationForm
      )
    );
  };

  const handleSuccessAfterGetApplicationForm = () => {
    setRedirectApplicationForm(true);
  };

  /*const handleGetApplicationRenewalSuccess = () => {
    setRedirectApplicationRenewal(true);
  };*/

  // Handlers: Get application by id (By row click)
  const handleGetApplicationById = (data) => {
    //goToApplicationById(data);
    if(data.row.app_status=="expired") {
      setDataRow(data);
      setShowModal(true);
    }
  };

  const handleGetApplicationByIdMobile = (data) => {
    goToApplicationById(data);
  };

  const goToApplicationById = (data) =>{
    if(data.row.app_status!="expired") return;
    handleGetApplicationSuccess()
   /* dispatch(
      actGetApplicationById(
        { id: data.id, date: data.row.app_date, type: 2 },
        handleGetApplicationSuccess
      )
    );*/
  }

  const handleModalContinue=()=>{
    setShowModal(false);
    if(dataRow?.row != undefined){
      goToApplicationById(dataRow)
    }
  }

  const handleModalClose=()=>{
    setShowModal(false);
  }

  // Handlers: Search filter
  const onSearch = (data) => {

    setSearchFilter(data.searchField);
    dispatch(
      actGetApplicationsRenewalsTable({
        page: 1,
        search: data.searchField,
        ...customFilter,
      })
    );
    setCurrentPageTable(1);
  };

  const onResetSearch = (data) => {
    if(data==undefined || data==null || data == '') return;
    setSearchFilter(data);
    dispatch(
      actGetApplicationsRenewalsTable({
        page: 1,
        search: data,
        ...customFilter,
      })
    );
    setCurrentPageTable(1);
  };
  const onFilter = (data) => {
    const finalFilter = {
      start: data.from,
      end: data.to,
    };
    dispatch(
      actGetApplicationsRenewalsTable({
        page: 1,
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

  // Table data
  const columns = [
    {
      field: 'reference',
      headerName: 'BIN', //'REFERENCE',
      width: 150,
      sortable: false
    },
    {
      field: 'outlet_name',
      headerName: 'OUTLET NAME',
      width: 180,
      sortable: false
    },
    {
      field: 'name_of_area',
      headerName: 'NAME OF AREA',
      width: 300,
      sortable: false
    },
    {
      field: 'app_date',
      headerName: 'APPLICATION DATE',
      width: 150,
      sortable: false,
      renderCell: (cellValues) =>  handleDateFormat(cellValues.row.app_date),
    },
    {
      field: 'app_status',
      headerName: 'STATUS',
      width: 150,
      sortable: false,
      renderCell: (cellValues) => {
        return ( 
          <StatusView  status={cellValues.row.app_status}   />
        );
      },
    },
    {
      field: 'id',
      headerName: 'ACTIONS',
      width: 150,
      sortable: false,
      renderCell: (cellValues) => {
        return ( 
          <StatusRenew  status={cellValues.row.app_status} text='Renew'    />
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
      headerName: 'BIN',
      width: 150,
      sortable: false
    },
    {
      field: 'app_date',
      headerName: 'PAY BY DATE',
      width: 150,
      sortable: false,
    },
    {
      field: 'app_status',
      headerName: 'STATUS',
      width: 150,
      sortable: false
    },
    {
      field: 'reference',
      headerName: 'ACTIONS',
      width: 150,
      sortable: false
    }
  ];

  return {
    promiseGetApplicationsRenewalsTable,
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
    setRedirectApplicationRenewal,
    handleModalContinue,
    handleModalClose,
    showModal
  };
};

export default useRenewalsTable;
