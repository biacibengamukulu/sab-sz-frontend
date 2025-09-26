import axios from 'axios';

const useApplicationsTableProvider = () => {
  const getApplicationsTablePage = (
    page,
    search,
    licenseType,
    status,
    action_renew,
    start,
    end
  ) => {
    return axios({
      method: 'get',
      url: `api/applications?${page && '&page=' + page}${action_renew && '&action_renew=' + action_renew}${search && `&search=${search}`}${licenseType && `&licence_type=${licenseType}`}${status && `&status=[${status}]`}${start && `&start=${start}`}${end && `&end=${end}`}`
    });
  };

  const getApplicationById = (id, type) => {
    return axios({
      method: 'get',
      url: `api/application/${id}${type && `?type=${type}`}`,
    });
  };
  const getApplicationsStatusHelpList = () => {
    return axios({
      method: 'get',
      url: `api/status-list`,
    });
  };
  return {
    getApplicationsTablePage,
    getApplicationById,
    getApplicationsStatusHelpList,
  };
};

export default useApplicationsTableProvider;
