import { trackPromise } from 'react-promise-tracker';
import useProviders from '../../providers';

const useVotingServices = () => {
  const { useVotingProviders } = useProviders();
  const { saveVoteTime, getVoteTime, voteApplication } = useVotingProviders();

  const saveVoteTimeService = (applicationId, time) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(saveVoteTime({ applicationId, time })));
      } catch (e) {
        reject(e);
      }
    });
  };
  const getVoteTimeService = (applicationId) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(getVoteTime(applicationId)));
      } catch (e) {
        reject(e);
      }
    });
  };

  const voteApplicationService = (approved, votingTime, applicationId) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(
            voteApplication({ approved, votingTime, applicationId })
          )
        );
      } catch (e) {
        reject(e);
      }
    });
  };

  return {
    saveVoteTimeService,
    getVoteTimeService,
    voteApplicationService,
  };
};

export default useVotingServices;
