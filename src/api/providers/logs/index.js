import axios from 'axios';
const useLogsProviders = () => {
  const getLogs = (topic, referenceNumber, from, to) => {
    return axios({
      method: 'get',
      url: `api/download-logs?${topic && '&topic=' + topic}${
        referenceNumber && `&reference=${referenceNumber}`
      }${from && `&from=${from}`}${to && `&to=${to}`}`,
    });
  };
  return {
    getLogs,
  };
};
export default useLogsProviders;
