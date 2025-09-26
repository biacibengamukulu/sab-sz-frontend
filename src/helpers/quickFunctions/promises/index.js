import { usePromiseTracker } from 'react-promise-tracker';

const usePromises = (areaPromise = '') => {
  const { promiseInProgress } = usePromiseTracker();
  const { promiseInProgress: promiseInProgressArea } = usePromiseTracker({
    area: areaPromise,
  });

  return { promiseInProgress, promiseInProgressArea };
};
export default usePromises;
