import axios from 'axios';
const useVotingProviders = () => {
  const saveVoteTime = (data) => {
    return axios({
      method: 'post',
      url: `api/save-vote-time`,
      data,
    });
  };
  const getVoteTime = (applicationId) => {
    return axios({
      method: 'get',
      url: `api/get-vote-time?applicationId=${applicationId}`,
    });
  };
  const voteApplication = (data) => {
    return axios({
      method: 'post',
      url: `api/vote-application`,
      data,
    });
  };
  return {
    saveVoteTime,
    getVoteTime,
    voteApplication,
  };
};
export default useVotingProviders;
