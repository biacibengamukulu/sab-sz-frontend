const useAuthTypes = () => {
  const LOGIN = 'LOGIN';
  const EMAIL_VERIFICATION = 'EMAIL_VERIFICATION';
  const LOG_OUT = 'LOG_OUT';
  const LEAVE_BROADCASTING = 'LEAVE_BROADCASTING';
  const UPDATE_TOKEN = 'UPDATE_TOKEN';
  return {
    LOGIN,
    EMAIL_VERIFICATION,
    LOG_OUT,
    LEAVE_BROADCASTING,
    UPDATE_TOKEN,
  };
};
export default useAuthTypes;
