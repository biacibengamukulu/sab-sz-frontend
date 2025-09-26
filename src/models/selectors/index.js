import { useSelector } from 'react-redux';
import useApplicationFormSelectors from './applicationForm';
import useApplicationReviewSelectors from './applicationReview';
import useRenewalNoticesSelectors from './renewalNotices';
import useApplicationsTableSelectors from './applicationsTable';
import useAuthSelectors from './auth';
import useBlogsSelectors from './blogs';
import useCommentsSelectors from './comments';
import useNotificationsSelectors from './notifications';
import usePrivateDocumentsSelectors from './privateDocuments';
import useUserSelectors from './user';
import useUsersTableSelectors from './usersTable';
import useVotingSelectors from './voting';
const useSelectors = () => {
  return {
    useSelector,
    useApplicationFormSelectors,
    useApplicationsTableSelectors,
    useAuthSelectors,
    useBlogsSelectors,
    useUserSelectors,
    useUsersTableSelectors,
    useApplicationReviewSelectors,
    useRenewalNoticesSelectors,
    usePrivateDocumentsSelectors,
    useNotificationsSelectors,
    useVotingSelectors,
    useCommentsSelectors,
  };
};

export default useSelectors;
