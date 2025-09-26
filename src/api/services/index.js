import useApplicationFormServices from './applicationForm';
import useApplicationRenewalsServices from './applicationRenewals';
import useApplicationReviewService from './applicationReview';
import useApplicationsTableServices from './applicationsTable';
import useAuthServices from './auth';
import useBlogsServices from './blogs';
import useCommentsServices from './comments';
import useLogsServices from './logs';
import useNotificationsServices from './notifications';
import usePrivateDocumentsServices from './privateDocuments';
import useUserService from './user';
import useUsersTableService from './usersTable';
import useVotingServices from './voting';
const useServices = () => {
  return {
    useApplicationFormServices,
    useApplicationsTableServices,
    useAuthServices,
    useBlogsServices,
    useUserService,
    useUsersTableService,
    useApplicationReviewService,
    usePrivateDocumentsServices,
    useLogsServices,
    useNotificationsServices,
    useVotingServices,
    useCommentsServices,
    useApplicationRenewalsServices,
  };
};

export default useServices;
