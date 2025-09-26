import useStrings from '../../../strings';
import useServices from '../../services';

const useApplicationsTableActions = () => {
  // Strings
  const { useTypes } = useStrings();
  const { applicationsTableTypes } = useTypes();
  const { GET_APPLICATIONS, GET_APPLICATION_BY_ID, GET_STATUS_HELP_LIST } =
    applicationsTableTypes();

  // Services
  const { useApplicationsTableServices } = useServices();
  const {
    getApplicationsTablePageService,
    getApplicationByIdService,
    getApplicationsStatusHelpListService,
  } = useApplicationsTableServices();

  //**Eswatini */

  // Get data Applications table
  const actGetApplicationsTable =
    (
      {
        page,
        search = '',
        licenseType = '',
        status = '',
        action_renew = '',
        start = '',
        end = '',
      },
      onSuccess,
      onError
    ) =>
    async (dispatch) => {
      try {
        const response = await getApplicationsTablePageService(
          page,
          search,
          licenseType,
          status,
          action_renew,
          start,
          end
        );
        dispatch({
          type: GET_APPLICATIONS,
          payload: response.data.applications,
        });
        onSuccess && onSuccess(response.data.applications);
      } catch (e) {
        onError && onError(e);
      }
    };

  // Help status list
  const actGetApplicationsStatusHelpList =
    (onSuccess, onError) => async (dispatch) => {
      try {
        const response = await getApplicationsStatusHelpListService();
        dispatch({
          type: GET_STATUS_HELP_LIST,
          payload: response.data.list,
        });
        onSuccess && onSuccess(response);
      } catch (e) {
        onError && onError(e);
      }
    };

  // Get application by Id from table
  const actGetApplicationById =
    ({ id, date = '', type = '' }, onSuccess, onError) =>
    async (dispatch) => {
      try {
        const response = await getApplicationByIdService(id, type);
        dispatch({
          type: GET_APPLICATION_BY_ID,
          payload: { ...response.data, date },
        });
        onSuccess && onSuccess({ ...response.data, date });
      } catch (e) {
        onError && onError(e);
      }
    };
  return {
    actGetApplicationsTable,
    actGetApplicationById,
    actGetApplicationsStatusHelpList,
  };
};
export default useApplicationsTableActions;
