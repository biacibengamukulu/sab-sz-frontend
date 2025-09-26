import { trackPromise } from 'react-promise-tracker';
import useProviders from '../../providers';

const useAuthServices = () => {
  const { useAuthProvider } = useProviders();
  const { register, login, emailVerification, logout } = useAuthProvider();

  const registerUser = (data) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(register(data)));
      } catch (e) {
        reject(e);
      }
    });
  };

  const loginUser = (data) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(login(data)));
      } catch (e) {
        reject(e);
      }
    });
  };

  const emailVerificationService = ({ signature, expires, id }) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(emailVerification({ signature, expires, id }))
        );
      } catch (e) {
        reject(e);
      }
    });
  };
  const logoutUser = (data) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(logout(data)));
      } catch (e) {
        reject(e);
      }
    });
  };
  return {
    registerUser,
    loginUser,
    logoutUser,
    emailVerificationService,
  };
};

export default useAuthServices;
