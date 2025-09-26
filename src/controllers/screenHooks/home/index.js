import { useEffect } from 'react';
import useApi from '../../../api';
import useHelpers from '../../../helpers';
import useModels from '../../../models';

const useHome = () => {
  const { useQuickFunctions } = useHelpers();
  const { useNavigation } = useQuickFunctions();
  const { replaceAndNavigateTo, navigateTo } = useNavigation();

  // Api
  const { useActions } = useApi();
  const { dispatch, useBlogsActions } = useActions();
  const { actGetBlogsHomepage } = useBlogsActions();

  // Models
  const { useSelectors } = useModels();
  const { useSelector, useBlogsSelectors, useAuthSelectors } = useSelectors();
  const { blogsHomepageSelector } = useBlogsSelectors();
  const { session } = useAuthSelectors();
  const { data: dataBlogsHomepage } = useSelector(blogsHomepageSelector);
  const { accessToken } = useSelector(session);

  const gotToSignUp = () => replaceAndNavigateTo(`/signup`);

  const gotToLogin = () => {
    // If user is already logged in, go to application form
    // If not logged in, go to login page
    if (accessToken) {
      replaceAndNavigateTo(`/application-form`);
    } else {
      replaceAndNavigateTo(`/login`);
    }
  };

  const handleGetBlog = (blogId) => {
    navigateTo(`/blog-view?id=${blogId}`);
  };

  const handleGoToBlogs = () => {
    navigateTo(`/latest-news`);
  };

  useEffect(() => {
    dispatch(actGetBlogsHomepage());
  }, []);

  return {
    dataBlogsHomepage,

    gotToSignUp,
    gotToLogin,
    handleGetBlog,
    handleGoToBlogs,
  };
};

export default useHome;
