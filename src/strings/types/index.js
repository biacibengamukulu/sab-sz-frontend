import applicationFormTypes from './applicationForm';
import applicationRenewalsTypes from './applicationRenewals';
import applicationReviewTypes from './applicationReview';
import applicationsTableTypes from './applicationsTable';
import useAuthTypes from './auth';
import useBlogsTypes from './blogs';
import commentsTypes from './comments';
import logsTypes from './logs';
import notificationsTypes from './notifications';
import privateDocumentsTypes from './privateDocuments';
import userUserTypes from './user';
import usersTableTypes from './usersTable';
import votingTypes from './voting';
const useTypes = () => {
  return {
    applicationFormTypes,
    applicationsTableTypes,
    useAuthTypes,
    useBlogsTypes,
    userUserTypes,
    usersTableTypes,
    applicationReviewTypes,
    privateDocumentsTypes,
    logsTypes,
    notificationsTypes,
    votingTypes,
    commentsTypes,
    applicationRenewalsTypes,
  };
};

export default useTypes;
