import useHelpers from '../../../helpers';

const useUsersTableSelectors = () => {
  const { useCreateSelector } = useHelpers();
  const { createSelector } = useCreateSelector();

  const usersTableDataSelector = createSelector(
    (state) => state.usersTable,
    (usersTable) => {
      return {
        data: usersTable.data,
        currentPage: usersTable.currentPage,
        lastPage: usersTable.lastPage,
        pageSize: usersTable.pageSize,
        totalRows: usersTable.totalRows,
      };
    }
  );

  const currentUserSelector = createSelector(
    (state) => state.usersTable,
    (usersTable) => {
      return {
        userSelected: usersTable.userSelected,
      };
    }
  );

  return {
    usersTableDataSelector,
    currentUserSelector,
  };
};

export default useUsersTableSelectors;
