import useHelpers from '../../../helpers';
import useModels from '../../../models';

const useSplash = () => {
  const { useQuickFunctions } = useHelpers();
  const { useNavigation } = useQuickFunctions();
  const { replaceAndNavigateTo } = useNavigation();

  const { useSelectors } = useModels();
  const { useSelector, useAuthSelectors, useUserSelectors } = useSelectors();
  const { session, broadcastingSelector } = useAuthSelectors();
  const { userSelector } = useUserSelectors();
  const { accessToken } = useSelector(session);
  const { idBroadcasting } = useSelector(broadcastingSelector);
  const { profile } = useSelector(userSelector);

  const handleRedirect = () => {
    accessToken
      ? replaceAndNavigateTo('/login')
      : replaceAndNavigateTo('/home');
  };
  const handleRedirectHome = () => {};
  return {
    handleRedirect,
    handleRedirectHome,
    idBroadcasting,
    profile,
    accessToken,
  };
};

export default useSplash;
