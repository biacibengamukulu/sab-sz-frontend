const usersTableTypes = () => {
  const GET_USERS = 'GET_USERS';
  const CREATE_USER = 'CREATE_USER';
  const SET_CURRENT_USER = 'SET_CURRENT_USER';
  const USER_DISABLED = 'USER_DISABLED';
  const UPDATE_USER = 'UPDATE_USER';

  return {
    GET_USERS,
    CREATE_USER,
    SET_CURRENT_USER,
    USER_DISABLED,
    UPDATE_USER,
  };
};
export default usersTableTypes;
