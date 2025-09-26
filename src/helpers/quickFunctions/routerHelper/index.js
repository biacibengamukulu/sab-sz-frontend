import useScreens from '../../../views/screens';
import useModels from '../../../models';

const useRouterHelper = () => {
  const { useSelectors } = useModels();
  const { useSelector, useAuthSelectors } = useSelectors();
  const { session } = useAuthSelectors();
  const { accessToken } = useSelector(session);
  const { Splash } = useScreens();

  const requireAuth = ({ Component, redirect = Splash }) => {
    return !accessToken ? redirect : Component;
  };

  return {
    requireAuth,
  };
};
export default useRouterHelper;
