import axios from 'axios';
const useNotificationsProviders = () => {
  const getLatestNotifications = () => {
    return axios({
      method: 'get',
      url: `api/notifications`,
    });
  };
  const getAllNotifications = (chunk) => {
    return axios({
      method: 'get',
      url: `api/all-notifications?${chunk && '&chunk=' + chunk}`,
    });
  };
  return {
    getLatestNotifications,
    getAllNotifications,
  };
};
export default useNotificationsProviders;
