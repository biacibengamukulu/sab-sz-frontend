import useApplicationFormProvider from './applicationForm';
import useApplicationRenewalsProvider from './applicationRenewals';
import useApplicationReviewProviders from './applicationReview';
import useApplicationsTableProvider from './applicationsTable';
import useAuthProvider from './auth';
import useBlogsProviders from './blogs';
import useCommentsProviders from './comments';
import useLogsProviders from './logs';
import useNotificationsProviders from './notifications';
import usePrivateDocumentsProviders from './privateDocuments';
import useUserProvider from './user';
import useUsersTableProvider from './usersTable';
import useVotingProviders from './voting';
const useProviders = () => {
  return {
    useApplicationFormProvider,
    useApplicationsTableProvider,
    useAuthProvider,
    useBlogsProviders,
    useUserProvider,
    useUsersTableProvider,
    useApplicationReviewProviders,
    usePrivateDocumentsProviders,
    useLogsProviders,
    useNotificationsProviders,
    useVotingProviders,
    useCommentsProviders,
    useApplicationRenewalsProvider,
  };
};

export default useProviders;
