import { useLocation } from 'react-router';
import useHelpers from '../../../helpers';
import useModels from '../../../models';

const useSideMenuBackuser = () => {
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useNavigation } = useQuickFunctions();
  const { navigateTo } = useNavigation();

  const { pathname } = useLocation();

  const { useSelectors } = useModels();
  const { useSelector, useAuthSelectors, useUserSelectors } = useSelectors();
  const { session } = useAuthSelectors();
  const { userSelector } = useUserSelectors();
  const { accessToken } = useSelector(session);
  const { profile } = useSelector(userSelector);

  const handleUsersSelected = () => {
    return accessToken && pathname.includes('users');
  };
  const handleApplicationsSelected = () => {
    return accessToken && pathname.includes('applications') && !pathname.includes('applications-renew');
  };
  const handleApplicationsRenewSelected = () => {
    return accessToken && pathname.includes('applications-renew');
  };
  const handleMyProfileSelected = () => {
    return accessToken && pathname.includes('profile');
  };
  const handleComunicationHubSelected = () => {
    return accessToken && pathname.includes('comunication-hub');
  };
  const handleLogsSelected = () => {
    return accessToken && pathname.includes('/logs');
  };
  const handleBlogsSelected = () => {
    return accessToken && pathname.includes('blogs-table');
  };

  const handleRedirectUsers = () => navigateTo(`/users`);
  const handleRedirectApplications = () => navigateTo(`/applications`);
  const handleRedirectApplicationsRenew = () => navigateTo(`/applications-renew`);
  const handleRedirectProfile = () => navigateTo(`/profile`);
  const handleRedirectComunicationHub = () => navigateTo(`/comunication-hub`);
  const handleRedirectLogs = () => navigateTo(`/logs`);
  const handleRedirectBlogs = () => navigateTo(`/blogs-table`);

  return {
    handleUsersSelected,
    handleApplicationsSelected,
    handleApplicationsRenewSelected,
    handleMyProfileSelected,
    handleComunicationHubSelected,
    handleLogsSelected,
    handleBlogsSelected,
    handleRedirectUsers,
    handleRedirectApplications,
    handleRedirectApplicationsRenew,
    handleRedirectProfile,
    handleRedirectComunicationHub,
    handleRedirectLogs,
    handleRedirectBlogs,
    profile,
  };
};

export default useSideMenuBackuser;
