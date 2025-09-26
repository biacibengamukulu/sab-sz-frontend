import { combineReducers } from 'redux';
import useApplicationFormReducers from './applicationForm';
import useApplicationReviewReducers from './applicationReview';
import useApplicationsTableReducers from './applicationsTable';
import useAuthReducers from './auth';
import useBlogsReducers from './blogs';
import useCommentsReducers from './comments';
import useNotificationsReducers from './notifications';
import usePrivateDocumentsReducers from './privateDocuments';
import useUserReducers from './user';
import useUsersTableReducers from './usersTable';
import useVotingReducers from './voting';
import useRenewalsNoticesReducers from './renewalNotices';

const useReducers = () => {
  const { session, broadcasting } = useAuthReducers();
  const { user } = useUserReducers();
  const {
    applicationForm,
    applicationFormDraft,
    applicationFormWizard,
    applicationFormHelperLists,
  } = useApplicationFormReducers();
  const { applicationsTable } = useApplicationsTableReducers();
  const { currentBlog, blogsTable, blogsLastNews, blogsHomepage } =
    useBlogsReducers();
  const { usersTable } = useUsersTableReducers();
  const { applicationReview, applicationReviewWizard } =
    useApplicationReviewReducers();
  const { reportsState } = usePrivateDocumentsReducers();
  const { notifications, newNotification } = useNotificationsReducers();
  const { voting } = useVotingReducers();
  const { comments } = useCommentsReducers();
  const { renewalFormWizard, renewalFormRenewWizard, renewalsTable, applicationsRenewals } =
    useRenewalsNoticesReducers();

  return combineReducers({
    applicationForm,
    applicationFormDraft,
    applicationFormWizard,
    applicationFormHelperLists,

    applicationReview,
    applicationReviewWizard,

    renewalFormWizard,
    renewalFormRenewWizard,
    renewalsTable,

    applicationsTable,
    currentBlog,
    blogsTable,
    blogsLastNews,
    blogsHomepage,
    broadcasting,
    session,
    user,
    usersTable,
    reportsState,
    notifications,
    voting,
    comments,
    applicationsRenewals,
    newNotification,
  });
};

export default useReducers;
