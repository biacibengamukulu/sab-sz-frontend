import axios from 'axios';
const useUserProvider = () => {
  const recoveryUserPasswordOrVerificationEmail = (data) => {
    return axios({
      method: 'POST',
      url: `api/forgot-password`,
      data: {
        ...data,
      },
    });
  };

  const resetUserPassword = (data) => {
    return axios({
      method: 'POST',
      url: `api/reset-password`,
      data: {
        ...data,
      },
    });
  };

  const changeUserPassword = (data) => {
    return axios({
      method: 'POST',
      url: `api/change-password`,
      data: {
        ...data,
      },
    });
  };

  const updateUser = (data) => {
    return axios({
      method: 'PUT',
      url: `api/user-update`,
      data: {
        ...data,
      },
    });
  };

  const getUserRoles = () => {
    return axios({
      method: 'GET',
      url: `api/user-roles`,
    });
  };

  const resendEmail = (data) => {
    return axios({
      method: 'GET',
      url: `api/email/resend?email=${data.email}`,
      data: {
        ...data,
      },
    });
  };
  const getContactMethods = () => {
    return axios({
      method: 'GET',
      url: `api/contact-methods-list`,
    });
  };
  return {
    changeUserPassword,
    recoveryUserPasswordOrVerificationEmail,
    resetUserPassword,
    updateUser,
    resendEmail,
    getUserRoles,
    getContactMethods,
  };
};
export default useUserProvider;
