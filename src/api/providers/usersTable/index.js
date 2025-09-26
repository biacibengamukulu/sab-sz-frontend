import axios from 'axios';
const useUsersTableProvider = () => {
  /**
   * Eswatini
   */
  const getUsersTablePage = (page, search, role) => {
    return axios({
      method: 'get',
      url: `api/users?${page && `&page=${page}`}${
        search && `&search=${search}`
      }${role && `&role=${role}`}`,
    });
  };

  /** */
  const createUser = (data) => {
    return axios({
      method: 'post',
      url: `api/create-user`,
      data,
    });
  };
  const disableUser = (id) => {
    return axios({
      method: 'put',
      url: `api/disable-user/${id}`,
    });
  };
  const updateUser = (data) => {
    return axios({
      method: 'put',
      url: `api/update-back-user`,
      data,
    });
  };
  return {
    getUsersTablePage,
    createUser,
    disableUser,
    updateUser,
  };
};
export default useUsersTableProvider;
