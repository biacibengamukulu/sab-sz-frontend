import useApplicationFormInitialStates from './applicationForm';
import useApplicationReviewInitialStates from './applicationReview';
import useApplicationsRenewalsInitialStates from './applicationsRenewals';
import useRenewalNoticesInitialStates from './renewalsNotices';
import useApplicationsTableInitialStates from './applicationsTable';
import useAuthInitialStates from './auth';
import useBlogsInitialStates from './blogs';
import useCommentsInitialStates from './comments';
import useNotificationsInitialStates from './notifications';
import usePrivateDocumentsInitialStates from './privateDocuments';
import useUserInitialStates from './user';
import useUsersTableInitialStates from './usersTable';
import useVotingInitialStates from './voting';
const useInitialStates = () => {
  return {
    useApplicationFormInitialStates,
    useApplicationsTableInitialStates,
    useAuthInitialStates,
    useBlogsInitialStates,
    useUserInitialStates,
    useUsersTableInitialStates,
    useApplicationReviewInitialStates,
    usePrivateDocumentsInitialStates,
    useNotificationsInitialStates,
    useVotingInitialStates,
    useCommentsInitialStates,
    useApplicationsRenewalsInitialStates,
    useRenewalNoticesInitialStates,
  };
};

export default useInitialStates;
