import { useDispatch } from 'react-redux';

import useApplicationFormActions from './applicationForm';
import useApplicationRenewalsActions from './applicationRenewals';
import useApplicationReviewActions from './applicationReview';
import useApplicationsTableActions from './applicationsTable';
import useAuthActions from './auth';
import useBlogsActions from './blogs';
import useCommentsActions from './comments';
import useLogsActions from './logs';
import useNotificationsActions from './notifications';
import usePrivateDocumentsActions from './privateDocuments';
import useUserActions from './user';
import useUsersTableActions from './usersTable';
import useVotingActions from './voting';
const useActions = () => {
  const dispatch = useDispatch();
  return {
    dispatch,
    useApplicationFormActions,
    useApplicationsTableActions,
    useAuthActions,
    useBlogsActions,
    useUserActions,
    useUsersTableActions,
    useApplicationReviewActions,
    usePrivateDocumentsActions,
    useLogsActions,
    useNotificationsActions,
    useVotingActions,
    useCommentsActions,
    useApplicationRenewalsActions,
  };
};

export default useActions;
