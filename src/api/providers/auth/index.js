import axios from 'axios';

const useAuthProvider = () => {
  const register = (data) => {
    return axios({
      method: 'post',
      url: `api/register`,
      data,
    });
  };

  const login = (data) => {
    return axios({
      method: 'post',
      url: `api/login`,
      data,
    });
  };

  const emailVerification = ({ signature, expires, id }) => {
    return axios({
      method: 'post',
      url: `api/verify-email`,
      data: {
        id,
        signature,
        expires
      },
    });
  };
  const logout = () => {
    return axios({
      method: 'post',
      url: `api/logout`,
    });
  };
  return {
    register,
    login,
    logout,
    emailVerification,
  };
};

export default useAuthProvider;
