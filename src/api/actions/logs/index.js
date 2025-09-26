import useStrings from '../../../strings';
import useServices from '../../services';

const useLogsActions = () => {
  // Strings
  const { useTypes } = useStrings();
  const { logsTypes } = useTypes();
  const { GET_LOGS_DOCUMENT } = logsTypes();

  // Services
  const { useLogsServices } = useServices();
  const { getLogsService } = useLogsServices();

  const actGetLogs =
    (
      { topic = '', referenceNumber = '', from = '', to = '' },
      onSuccess,
      onError
    ) =>
    async (dispatch) => {
      try {
        const response = await getLogsService(topic, referenceNumber, from, to);
        dispatch({
          type: GET_LOGS_DOCUMENT,
        });
        onSuccess && onSuccess(response.data, topic, referenceNumber, from, to);
      } catch (e) {
        onError && onError(e);
      }
    };

  return {
    actGetLogs,
  };
};
export default useLogsActions;
