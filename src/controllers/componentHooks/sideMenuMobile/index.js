import { useState } from 'react';
import useActions from '../../../api/actions';
import useHelpers from '../../../helpers';
import useModels from '../../../models';

const useSideMenuMobile = () => {
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useNavigation } = useQuickFunctions();
  const { replaceAndNavigateTo } = useNavigation();

  // Actions
  const { dispatch, useAuthActions, useUserActions, useNotificationsActions } =
    useActions();
  const { actLogout } = useAuthActions();
  const { actLogoutUser } = useUserActions();
  const { actSetNewNotification } = useNotificationsActions();

  // react
  const { navigateTo } = useNavigation();
  const [sideMenuStatus, setSideMenuStatus] = useState(false);

  const { useSelectors } = useModels();
  const { useSelector, useUserSelectors } = useSelectors();
  const { userSelector } = useUserSelectors();
  const { profile } = useSelector(userSelector);

  const openSideMenu = () => {
    setSideMenuStatus(!sideMenuStatus);
  };
  const handleLogoutUserProfile = () => {
    dispatch(actLogoutUser(replaceAndNavigateTo('/home')));
    dispatch(actSetNewNotification(false));
  };
  const handleLogout = () => {
    dispatch(actLogout(handleLogoutUserProfile()));
  };

  const handleRedirectProfile = () => navigateTo(`/profile`);
  const handleRedirectMyApplications = () => navigateTo(`/applications`);
  return {
    sideMenuStatus,
    openSideMenu,
    handleLogout,
    handleRedirectProfile,
    handleRedirectMyApplications,
    profile,
  };
};

export default useSideMenuMobile;
