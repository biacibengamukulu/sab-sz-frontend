const useUsersTableInitialStates = () => {
  const usersTableInitialState = {
    data: [],
    currentPage: 0,
    lastPage: 0,
    pageSize: 0,
    totalRows: 0,
    userSelected: {},
  };
  return {
    usersTableInitialState,
  };
};

export default useUsersTableInitialStates;
