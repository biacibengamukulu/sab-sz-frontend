import useHelpers from '../../../helpers';

const useHeader = () => {
  const { useQuickFunctions } = useHelpers();
  const { useNavigation } = useQuickFunctions();
  const { replaceAndNavigateTo } = useNavigation();

  const gotToSignUp = () => replaceAndNavigateTo(`/signup`);
  const gotToLogin = () => replaceAndNavigateTo(`/login`);
  const gotToHome = () => replaceAndNavigateTo(`/home`);

  return {
    gotToSignUp,
    gotToLogin,
    gotToHome,
  };
};

export default useHeader;
