import { useLocation } from 'react-router';
import useApi from '../../../api';
import useHelpers from '../../../helpers';
import useModels from '../../../models';

const useLoggedHeader = () => {
  const { useActions } = useApi();
  const { dispatch, useApplicationFormActions } = useActions();
  const { actCancelApplication } = useApplicationFormActions();

  const { useQuickFunctions } = useHelpers();
  const { useNavigation } = useQuickFunctions();
  const { replaceAndNavigateTo } = useNavigation();
  const { pathname } = useLocation();

  const { useSelectors } = useModels();
  const { useSelector, useAuthSelectors, useUserSelectors } = useSelectors();
  const { session } = useAuthSelectors();
  const { userSelector } = useUserSelectors();
  const { accessToken } = useSelector(session);
  const { profile } = useSelector(userSelector);

  const gotToSignUp = () => replaceAndNavigateTo(`/signup`);
  const gotToLogin = () => replaceAndNavigateTo(`/login`);
  const gotToHome = () => replaceAndNavigateTo(`/home`);
  const goToRenewals = () => replaceAndNavigateTo(`/renewals`);

  const gotToNewApplication = () => {
    dispatch(
      actCancelApplication({ id: '' }),
      replaceAndNavigateTo(`/application-form`)
    );
  };
  const gotToMyApplications = () => replaceAndNavigateTo(`/applications`);

  const handleShowNewApplication = () => {
    return accessToken && pathname.includes('application-form') && !pathname.includes('application-form-renew');
  };
  const handleShowTrackStatus = () => {
    return accessToken && pathname.includes('applications');
  };

  const handleShowRenewals = () => {
    return accessToken && pathname.includes('renewals') || pathname.includes('application-form-renew');
  };
  const handleShowDrafts = () => {
    return accessToken && pathname.includes('drafts');
  };
  const handleShowCommunicationHub = () => {
    return accessToken && pathname.includes('communication-hub');
  };

  const handleRedirectNewApplication = () => {
    !handleShowNewApplication() && gotToNewApplication();
  };
  return {
    gotToSignUp,
    gotToLogin,
    gotToHome,
    goToRenewals,
    accessToken,
    gotToNewApplication,
    gotToMyApplications,
    handleRedirectNewApplication,
    profile,

    handleShowNewApplication,
    handleShowTrackStatus,
    handleShowRenewals,
    handleShowDrafts,
    handleShowCommunicationHub,
  };
};

export default useLoggedHeader;
