import useApplicationForm from './applicationForm';
import useApplicationFormRenew from './applicationFormRenew';
import useApplicationReview from './applicationReview';
import useApplicationsTable from './applicationsTable';
import useApplicationsRenewTable from './applicationsRenewTable';
import useBlogsEditor from './blogsEditor';
import useBlogsLastNews from './blogsLastNews';
import useBlogsTable from './blogsTable';
import useBlogVisualization from './blogVisualization';
import useChangePassword from './changePassword';
import useEmailVerification from './emailVerification';
import useHome from './home';
import useLogin from './login';
import useLogs from './logs';
import useProfile from './profile';
import useRecoveryPassword from './recoveryPassword';
import useRenewalForm from './renewalForm';
import useRenewalReview from './renewalReview';
import useRenewalsTable from './renewalsTable';
import useResendEmail from './resendEmail';
import useResetPassword from './resetPassword';
import useRouting from './routing';
import useSignUp from './signUp';
import useSplash from './splash';
import useUsers from './users';
import useApplicationRenewTrack from './applicationRenewTrack';

// import useApplication from './application';
// import useRenewalNotice from './renewalNotice';
// import useRenewalTable from './renewalsTable';
const useScreenHooks = () => {
  return {
    useApplicationForm,
    useApplicationFormRenew,
    useApplicationReview,
    useApplicationsTable,
    useApplicationsRenewTable,
    useBlogsEditor,
    useBlogsLastNews,
    useBlogsTable,
    useBlogVisualization,
    useChangePassword,
    useEmailVerification,
    useHome,
    useLogin,
    useLogs,
    useProfile,
    useRecoveryPassword,
    useRenewalsTable,
    useRenewalForm,
    useRenewalReview,
    useResendEmail,
    useResetPassword,
    useRouting,
    useSignUp,
    useSplash,
    useUsers,
    useApplicationRenewTrack,
    // useSignUp,
    // useApplication,
    // useUsers,
    // useApplicationReview,
    // useRenewalNotice,
    // useRenewalTable,
  };
};

export default useScreenHooks;
