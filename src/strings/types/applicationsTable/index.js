const applicationsTableTypes = () => {
  const GET_APPLICATIONS = 'GET_APPLICATIONS';
  const GET_APPLICATION_BY_ID = 'GET_APPLICATION_BY_ID';
  const GET_STATUS_HELP_LIST = 'GET_STATUS_HELP_LIST';
  return {
    GET_APPLICATIONS,
    GET_APPLICATION_BY_ID,
    GET_STATUS_HELP_LIST,
  };
};
export default applicationsTableTypes;
