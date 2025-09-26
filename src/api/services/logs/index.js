import { trackPromise } from 'react-promise-tracker';
import useProviders from '../../providers';

const useLogsServices = () => {
  const { useLogsProviders } = useProviders();
  const { getLogs } = useLogsProviders();

  const getLogsService = (topic, referenceNumber, from, to) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(getLogs(topic, referenceNumber, from, to)));
      } catch (e) {
        reject(e);
      }
    });
  };

  return {
    getLogsService,
  };
};

export default useLogsServices;
