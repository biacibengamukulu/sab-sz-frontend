import { trackPromise } from 'react-promise-tracker';
import useProviders from '../../providers';

const useApplicationsTableServices = () => {
  const { useApplicationsTableProvider } = useProviders();
  const {
    getApplicationsTablePage,
    getApplicationById,
    getApplicationsStatusHelpList,
  } = useApplicationsTableProvider();

  //**Eswatini */

  // Get data Applications table
  const getApplicationsTablePageService = (
    page,
    search,
    licenseType,
    status,
    action_renew,
    start,
    end
  ) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(
            getApplicationsTablePage(
              page,
              search,
              licenseType,
              status,
              action_renew,
              start,
              end
            ),
            'applicationsTable'
          )
        );
      } catch (e) {
        reject(e);
      }
    });
  };

  // Help status list

  const getApplicationsStatusHelpListService = () => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(getApplicationsStatusHelpList()));
      } catch (e) {
        reject(e);
      }
    });
  };

  // Get application by Id from table
  const getApplicationByIdService = (id, type) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(getApplicationById(id, type), 'getApplicationById')
        );
      } catch (e) {
        reject(e);
      }
    });
  };

  return {
    getApplicationsTablePageService,
    getApplicationByIdService,
    getApplicationsStatusHelpListService,
  };
};

export default useApplicationsTableServices;
