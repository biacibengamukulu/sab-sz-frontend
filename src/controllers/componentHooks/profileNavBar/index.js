import { useEffect, useState } from 'react';
import useActions from '../../../api/actions';
import useHelpers from '../../../helpers';
import useModels from '../../../models';
// import useModels from '../../../models';

const useProfileNavBar = () => {
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useNavigation } = useQuickFunctions();
  const { navigateTo } = useNavigation();
  // const { replaceAndNavigateTo } = useNavigation();

  // Actions
  const { dispatch, useAuthActions } = useActions();
  const { actLeaveBroadcasting } = useAuthActions();
  // const { actLogoutUser } = useUserActions();
  // const { actSetNewNotification } = useNotificationsActions();

  const { useSelectors } = useModels();
  const { useSelector, useUserSelectors } = useSelectors();
  const { userSelector } = useUserSelectors();
  const { profile } = useSelector(userSelector);

  // react
  const [menuStatus, setMenuStatus] = useState(false);

  const [userProfileData, setUserProfileData] = useState({
    name: '',
    surname: '',
    image: '',
    roleType: '',
  });

  useEffect(() => {
    setUserProfileData({
      name: profile.name,
      surname: profile.surname,
      image: profile.image,
      roleType: profile.roleType?.name,
    });
  }, [profile.name, profile.roleType, profile.image]);

  const openMenu = () => {
    setMenuStatus(!menuStatus);
  };

  // const handleLogoutUserProfile = () => {
  //   dispatch(actLogoutUser(replaceAndNavigateTo('/home')));
  // };

  const handleLogout = () => {
    // dispatch(actLogout(handleLogoutUserProfile()));
    // dispatch(actSetNewNotification(false));
    dispatch(actLeaveBroadcasting());
  };

  const handleRedirectProfile = () => navigateTo(`/profile`);
  const handleRedirectMyApplications = () => navigateTo(`/applications`);

  return {
    menuStatus,
    openMenu,
    handleLogout,
    handleRedirectProfile,
    userProfileData,
    handleRedirectMyApplications,
    profile,
  };
};

export default useProfileNavBar;
