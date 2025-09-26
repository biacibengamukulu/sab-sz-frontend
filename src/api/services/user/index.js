import { trackPromise } from 'react-promise-tracker';
import useProviders from '../../providers';

const useUserService = () => {
  const { useUserProvider } = useProviders();
  const {
    changeUserPassword,
    recoveryUserPasswordOrVerificationEmail,
    resetUserPassword,
    updateUser,
    getUserRoles,
    resendEmail,
    getContactMethods,
  } = useUserProvider();

  const getUserRolesService = () => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(getUserRoles()));
      } catch (error) {
        reject(error);
      }
    });
  };

  const recoveryUserPasswordOrVerificationEmailService = ({ email }) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(recoveryUserPasswordOrVerificationEmail({ email }))
        );
      } catch (error) {
        reject(error);
      }
    });
  };

  const resendEmailService = ({ email }) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(resendEmail({ email })));
      } catch (error) {
        reject(error);
      }
    });
  };

  const resetUserPasswordService = ({
    token,
    email,
    password,
    passwordConfirmation,
  }) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(
            resetUserPassword({
              token,
              email,
              password,
              passwordConfirmation,
            })
          )
        );
      } catch (error) {
        reject(error);
      }
    });
  };

  const changeUserPasswordService = ({
    currentPassword,
    password,
    passwordConfirmation,
  }) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(
            changeUserPassword({
              currentPassword,
              password,
              passwordConfirmation,
            })
          )
        );
      } catch (error) {
        reject(error);
      }
    });
  };

  const updateUserService = ({
    name,
    surname,
    alias,
    email,
    phoneIndicatorId,
    phone,
    roleId,
    registrationNumber,
    image,
    contactMethodId,
  }) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(
            updateUser({
              name,
              surname,
              alias,
              phoneIndicatorId,
              email,
              phone,
              roleId,
              registrationNumber,
              image,
              contactMethodId,
            })
          )
        );
      } catch (error) {
        reject(error);
      }
    });
  };
  const getContactMethodsService = () => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(getContactMethods()));
      } catch (error) {
        reject(error);
      }
    });
  };
  return {
    recoveryUserPasswordOrVerificationEmailService,
    resetUserPasswordService,
    changeUserPasswordService,
    updateUserService,
    getUserRolesService,
    resendEmailService,
    getContactMethodsService,
  };
};

export default useUserService;
