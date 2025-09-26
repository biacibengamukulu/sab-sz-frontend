import { trackPromise } from 'react-promise-tracker';
import useProviders from '../../providers';

const useUsersTableService = () => {
  const { useUsersTableProvider } = useProviders();
  const { getUsersTablePage, createUser, disableUser, updateUser } =
    useUsersTableProvider();

  /**
   * Eswatini
   */
  const getUsersTablePageService = (page, search, role) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(
            getUsersTablePage(page, search, role),
            'getUsersTable'
          )
        );
      } catch (e) {
        reject(e);
      }
    });
  };

  // Create new user
  const createUserService = (data) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(createUser(data), 'createNewUser'));
      } catch (e) {
        reject(e);
      }
    });
  };

  // Disabled user
  const disableUserService = (id) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(disableUser(id), 'disableUser'));
      } catch (e) {
        reject(e);
      }
    });
  };

  // Update user
  const updateUserService = (data) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(updateUser(data), 'updateUser'));
      } catch (e) {
        reject(e);
      }
    });
  };
  return {
    getUsersTablePageService,
    createUserService,
    disableUserService,
    updateUserService,
  };
};

export default useUsersTableService;
