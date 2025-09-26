import useHelpers from '../../../helpers';

const useApplicationsTableSelectors = () => {
  const { useCreateSelector } = useHelpers();
  const { createSelector } = useCreateSelector();

  const applicationsTableDataSelector = createSelector(
    (state) => state.applicationsTable,
    (applicationsTable) => {
      return {
        data: applicationsTable.data,
        currentPage: applicationsTable.currentPage,
        lastPage: applicationsTable.lastPage,
        pageSize: applicationsTable.pageSize,
        totalRows: applicationsTable.totalRows,
      };
    }
  );

  const applicationStatusHelpListSelector = createSelector(
    (state) => state.applicationsTable,
    (applicationsTable) => {
      return {
        statusHelpList: applicationsTable.statusHelpList,
      };
    }
  );

  return {
    applicationsTableDataSelector,
    applicationStatusHelpListSelector,
  };
};

export default useApplicationsTableSelectors;
