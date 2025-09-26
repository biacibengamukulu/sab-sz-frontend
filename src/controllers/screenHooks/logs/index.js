import useApi from '../../../api';

const useLogs = ({ resetField }) => {
  // Api
  const { useActions } = useApi();
  const { dispatch, useLogsActions } = useActions();
  const { actGetLogs } = useLogsActions();

  // react
  const handleResetFields = () => {
    resetField('referenceNumber');
    resetField('from');
    resetField('to');
  };

  const topicType = [
    { value: 'logins', text: 'Logins' },
    { value: 'application', text: 'Applications' },
    { value: 'renewal', text: 'Renewals' },
  ];

  const handleLogsDownload = (data, topic, referenceNumber, from, to) => {
    var elementDownloadLogs = document.createElement('a');
    elementDownloadLogs.href = data.base64;
    elementDownloadLogs.download = `logs${topic && `_${topic}`}${
      referenceNumber && `_${referenceNumber}`
    }${from && `_${from}`}${to && `_${to}`}`;
    elementDownloadLogs.click();
    document.body.removeChild(elementDownloadLogs);
  };

  const onSubmit = (data) => {
    dispatch(actGetLogs(data, handleLogsDownload));
  };

  return {
    onSubmit,
    topicType,
    handleResetFields,
  };
};

export default useLogs;
