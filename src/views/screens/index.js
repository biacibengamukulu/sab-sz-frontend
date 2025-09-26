import ApplicationForm from './ApplicationForm';
import ApplicationFormRenew from './ApplicationFormRenew';
import ApplicationReview from './ApplicationReview';
import ApplicationsTable from './ApplicationsTable';
import ApplicationsRenewTable from './ApplicationsRenewTable';
import ApplicationRenewTrack from './ApplicationRenewTrack';
import BlogsEditor from './BlogsEditor';
import BlogsLastNews from './BlogsLastNews/BlogsLastNews';
import BlogsTable from './BlogsTable';
import BlogVisualization from './BlogVisualization';
import ChangePassword from './ChangePassword';
import EmailVerification from './EmailVerification';
import Home from './Home';
import Login from './Login';
import Logs from './Logs';
import RecoveryPassword from './RecoveryPassword';
import RenewalForm from './RenewalForm';
import RenewalReview from './RenewalReview';
import RenewalsTable from './RenewalsTable';
import ResendEmail from './ResendEmail';
import ResetPassword from './ResetPassword';
import Profile from './Profile';
import SignUp from './SignUp';
import Splash from './Splash';
import UsersTable from './UsersTable';
// import BackUser from './BackUser';
// import Application from './Application';
// import ApplicationReview from './ApplicationReview';
// import RenewalNotice from './RenewalNotice';
// import Renewals from './Renewals';
const useScreens = () => {
  return {
    ApplicationForm,
    ApplicationFormRenew,
    ApplicationReview,
    ApplicationsTable,
    ApplicationsRenewTable,
    ApplicationRenewTrack,
    BlogsEditor,
    BlogsLastNews,
    BlogsTable,
    BlogVisualization,
    ChangePassword,
    EmailVerification,
    Home,
    Login,
    Logs,
    RecoveryPassword,
    RenewalForm,
    RenewalReview,
    RenewalsTable,
    ResendEmail,
    ResetPassword,
    Profile,
    SignUp,
    Splash,
    UsersTable,
  };
};

export default useScreens;
