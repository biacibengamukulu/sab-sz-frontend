import React, { useEffect, useState } from 'react';
import useAssets from '../../../assets';
import useHelpers from '../../../helpers';
import useApi from '../../../api';
import useModels from '../../../models';
import useComponentHooks from '../../componentHooks';
import {
  StyledContainerActions,
  StyledContainerActionsButton,
  StyledEmailTable,
  StyledCellTable,
} from '../../../views/screens/UsersTable/UsersTable.styles';
import _ from 'lodash';

const useUsers = (setValue, setValueEditUser, resetUser) => {
  // Assets
  const { useIcons } = useAssets();
  const { iconEdit: IconEdit, iconDelete: IconDelete } = useIcons();

  //Helpers
  const { useQuickFunctions } = useHelpers();
  const { usePromises } = useQuickFunctions();
  const { promiseInProgressArea: promiseGetUsersTable } =
    usePromises('getUsersTable');
  const { promiseInProgressArea: promiseCreateNewUser } =
    usePromises('createNewUser');
  const { promiseInProgressArea: promiseDisableUser } =
    usePromises('disableUser');
  const { promiseInProgressArea: promiseUpdateUser } =
    usePromises('updateUser');
  //Api
  const { useActions } = useApi();
  const { dispatch, useUsersTableActions } = useActions();
  const {
    actGetUsersTable,
    actCreateUser,
    actDisableUser,
    actSetCurrentUser,
    actUpdateUser,
  } = useUsersTableActions();

  //Models
  const { useSelectors } = useModels();
  const {
    useSelector,
    useUsersTableSelectors,
    useUserSelectors,
    useApplicationFormSelectors,
  } = useSelectors();
  const { usersTableDataSelector, currentUserSelector } =
    useUsersTableSelectors();
  const { userSelector } = useUserSelectors();
  const { data, currentPage, lastPage, pageSize, totalRows } = useSelector(
    usersTableDataSelector
  );
  const { applicationFormHelpDataSelector } = useApplicationFormSelectors();
  const { profile, userRolesList } = useSelector(userSelector);
  const { userSelected } = useSelector(currentUserSelector);
  const { phoneIndicators: phoneIndicatorChoices } = useSelector(
    applicationFormHelpDataSelector
  );

  // Hooks
  const { useModal } = useComponentHooks();
  const {
    modalState: modalStateSuccessCreateUser,
    handleShowModal: handleShowModalSuccessCreateUser,
  } = useModal();
  const {
    modalState: modalStateCreateUser,
    handleShowModal: handleShowModalCreateUser,
  } = useModal();
  const {
    modalState: modalStateDisableUser,
    handleShowModal: handleShowModalDisableUser,
  } = useModal();

  // React
  const [currentPageTable, setCurrentPageTable] = useState(1);
  const [lastPageTable, setLastPageTable] = useState(1);
  const [roleIdTable, setRoleIdTable] = useState('');
  const [isUpdateUser, setIsUpdateUser] = useState(false);
  const [rows, setRows] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');
  const [createUserState, setCreateUserState] = useState('error');
  const [usersAdministratorOptions, setUsersAdministratorOptions] = useState(
    []
  );
  const [usersSecretaryOptions, setUsersSecretaryOptions] = useState([]);

  //Initial table
  useEffect(() => {
    dispatch(
      actGetUsersTable({
        page: currentPageTable,
        search: searchFilter,
        role: roleIdTable,
      })
    );
  }, []);

  // On page change
  useEffect(() => {
    dispatch(
      actGetUsersTable({
        page: currentPageTable,
        search: searchFilter,
        role: roleIdTable,
      })
    );
  }, [currentPageTable]);

  useEffect(() => {
    handleTableUpdate();
  }, [currentPage, data, lastPage]);

  useEffect(() => {
    setUsersAdministratorOptions(
      _.filter(userRolesList, (user) => user.roleType !== 'frontUser')
    );
    setUsersSecretaryOptions(_.filter(userRolesList, (user) => user.id === 1));
  }, [userRolesList]);

  /**
   * Handlers
   */

  //Handlers: phone number
  const onChangeInputFieldPhone = (
    inputPhone,
    country,
    id,
    fieldIndicativeId
  ) => {
    const fieldId = id.slice(0, id.length - 'Visual'.length);
    const countryCode = country.countryCode.toUpperCase();
    const indicativeId = _.find(
      phoneIndicatorChoices,
      (currentIndicative) => currentIndicative.countryCode === countryCode
    ).id;
    setValue(fieldId, inputPhone, { shouldValidate: true });
    setValue(fieldIndicativeId, indicativeId);
  };

  const handleIndicative = (choice, phone) => {
    const indicativeCode = choice.phoneIndicator
      ? choice.phoneIndicator.replace(/\D/g, '')
      : '268';
    const finalPhone = indicativeCode + phone;
    return finalPhone;
  };

  const defaultIndicative = (choices) => {
    return _.find(
      choices,
      (currentIndicative) => currentIndicative.phoneIndicator === '+268'
    );
  };

  // Handlers: modals
  //Modal for user created successfully
  const handleCloseModalSuccessCreateUser = () => {
    setIsUpdateUser(false);
    handleShowModalSuccessCreateUser();
    dispatch(
      actGetUsersTable({
        page: 1,
      })
    );
    setCurrentPageTable(1);
  };

  const handleSuccessCreateUSer = () => {
    setCreateUserState('success');
    handleModalCreateUser();
    setSearchFilter('');
    handleShowModalSuccessCreateUser(
      'Success!',
      `User ${isUpdateUser ? ' updated' : ' created'} successfully!`
    );
  };

  //Modal for user creation
  const handleModalCreateUser = () => {
    setIsUpdateUser(false);
    resetUser();
    handleShowModalCreateUser();
  };

  // Handlers: table control
  const handleTableUpdate = () => {
    setRows(data);
    setLastPageTable(lastPage);
  };

  const handlePageChange = (e, newPage) => {
    setCurrentPageTable(newPage);
  };

  // Handlers: filter
  const onSearch = (data) => {
    setSearchFilter(data.searchField);
    dispatch(
      actGetUsersTable({
        page: 1,
        search: data.searchField,
        role: roleIdTable,
      })
    );
    setCurrentPageTable(1);
  };
  const onResetSearch = (data) => {
    setSearchFilter(data);
    dispatch(
      actGetUsersTable({
        page: 1,
        search: data,
        role: roleIdTable,
      })
    );
    setCurrentPageTable(1);
  };

  const handleResetSearch = (value) => {
    !value && onResetSearch(value);
  };

  // Handlers: user alteration
  const handleModalEditUser = (data) => {
    setValueEditUser('name', data.firstName);
    setValueEditUser('surname', data.lastName);
    setValueEditUser('email', data.email);
    setValueEditUser('phone', data.contactNumber);
    setValueEditUser('phoneVisual', handleIndicative('', data.contactNumber));
    setValueEditUser('roleId', data.roleId);
    handleShowModalCreateUser();
  };

  const handleEditUser = (data) => {
    setIsUpdateUser(true);
    dispatch(actSetCurrentUser(data), handleModalEditUser(data));
  };

  const handleDeleteUser = (data) => {
    dispatch(actSetCurrentUser(data), handleShowModalDisableUser());
  };
  const handleDisableUserConfirmation = () => {
    handleShowModalDisableUser();
    dispatch(
      actGetUsersTable({
        page: 1,
      })
    );
    setCurrentPageTable(1);
  };
  const handleDisableUser = () => {
    dispatch(
      actDisableUser(
        { id: userSelected.id ? userSelected.id : '' },
        handleDisableUserConfirmation
      )
    );
  };

  // Handlers: submit data
  const onSubmit = (data) => {
    delete data.phoneVisual;
    if (isUpdateUser) {
      data.userId = userSelected.id;
      dispatch(actUpdateUser(data, handleSuccessCreateUSer));
    } else {
      dispatch(actCreateUser(data, handleSuccessCreateUSer));
    }
  };

  // Columns for table
  const columns = [
    {
      field: 'id',
      sortable: false,
      hide: true,
    },
    {
      field: 'firstName',
      headerName: 'FIRST NAME',
      width: 170,
      sortable: false,
    },

    {
      field: 'lastName',
      headerName: 'LAST NAME',
      width: 170,
      sortable: false,
    },
    {
      field: 'email',
      headerName: 'EMAIL',
      // width: profile.roleType.id !== 5 ? 300 : 270,
      width: 270,
      sortable: false,
      renderCell: (cellValues) => {
        return (
          cellValues.row.email && (
            <a href={`mailto: ${cellValues.row.email}`}>
              <StyledEmailTable>{cellValues.row.email}</StyledEmailTable>
            </a>
          )
        );
      },
    },
    {
      field: 'role',
      headerName: 'USER TYPE',
      // width: profile.roleType.id !== 5 ? 300 : 240,
      width: 240,
      sortable: false,
      renderCell: (cellValues) => {
        return (
          cellValues.row.role && (
            <StyledCellTable>{cellValues.row.role.name}</StyledCellTable>
          )
        );
      },
    },
    {
      field: 'ACTION',
      headerName: 'ACTION',
      width: 110,
      sortable: false,
      // hide: profile.roleType.roletyp !== '' ? true : false,
      renderCell: (cellValues) => {
        return (
          <StyledContainerActions>
            <StyledContainerActionsButton
              onClick={() =>
                cellValues.row.role.roleType !== 'frontUser' &&
                handleEditUser(cellValues.row)
              }
            >
              <IconEdit
                color={
                  cellValues.row.role.roleType !== 'frontUser'
                    ? '#394D94'
                    : '#DADFF0'
                }
              />
            </StyledContainerActionsButton>
            <StyledContainerActionsButton
              onClick={() =>
                cellValues.row.role.roleType !== 'frontUser' &&
                handleDeleteUser(cellValues.row)
              }
            >
              <IconDelete
                color={
                  cellValues.row.role.roleType !== 'frontUser'
                    ? '#394D94'
                    : '#DADFF0'
                }
              />
            </StyledContainerActionsButton>
          </StyledContainerActions>
        );
      },
    },
  ];

  const onFilter = (data) => {
    dispatch(
      actGetUsersTable(
        {
          page: currentPageTable,
          search: searchFilter,
          role: data.roleId !== 'none' ? data.roleId : '',
        },
        setRoleIdTable(data.roleId)
      )
    );
  };
  return {
    promiseGetUsersTable,
    promiseCreateNewUser,
    promiseDisableUser,
    promiseUpdateUser,

    usersAdministratorOptions,
    usersSecretaryOptions,
    profile,
    phoneIndicatorChoices,

    onChangeInputFieldPhone,
    handleIndicative,
    defaultIndicative,

    columns,
    rows,
    pageSize,
    totalRows,
    currentPageTable,
    lastPageTable,
    handlePageChange,

    onSearch,
    onFilter,
    handleResetSearch,

    createUserState,
    modalStateCreateUser,
    handleModalCreateUser,

    modalStateSuccessCreateUser,
    handleCloseModalSuccessCreateUser,

    modalStateDisableUser,
    handleShowModalDisableUser,
    handleDisableUser,
    isUpdateUser,

    onSubmit,
  };
};

export default useUsers;
