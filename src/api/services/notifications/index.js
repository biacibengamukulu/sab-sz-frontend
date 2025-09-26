import { trackPromise } from 'react-promise-tracker';
import useProviders from '../../providers';

const useNotificationsServices = () => {
  const { useNotificationsProviders } = useProviders();
  const { getLatestNotifications, getAllNotifications } =
    useNotificationsProviders();

  const getLatestNotificationsService = () => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(getLatestNotifications(), 'getLatestNotifications')
        );
      } catch (e) {
        reject(e);
      }
    });
  };
  const getAllNotificationsService = (chunk) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(getAllNotifications(chunk), 'getAllNotifications')
        );
      } catch (e) {
        reject(e);
      }
    });
  };

  return {
    getLatestNotificationsService,
    getAllNotificationsService,
  };
};

export default useNotificationsServices;
