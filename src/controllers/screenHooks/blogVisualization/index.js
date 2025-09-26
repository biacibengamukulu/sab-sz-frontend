import { useEffect } from 'react';
import useApi from '../../../api';
import useHelpers from '../../../helpers';
import useModels from '../../../models';

const useBlogVisualization = () => {
  // helpers
  const { useQuickFunctions } = useHelpers();
  const { useNavigation } = useQuickFunctions();
  const { goBack, getParam, navigateTo } = useNavigation();

  // Api
  const { useActions } = useApi();
  const { dispatch, useBlogsActions } = useActions();
  const { actGetBlog } = useBlogsActions();
  // Models
  const { useSelectors } = useModels();
  const { useSelector, useBlogsSelectors, useAuthSelectors } = useSelectors();
  const { currentBlogSelector } = useBlogsSelectors();
  const { session } = useAuthSelectors();
  const { accessToken } = useSelector(session);
  const { currentBlog } = useSelector(currentBlogSelector);
  const blogId = getParam('id');

  useEffect(() => {
    dispatch(actGetBlog(blogId));
  }, [blogId]);
  // hooks

  const handleGoToLogin = () => {
    navigateTo(`/login`);
  };
  // handle fields
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const handleDate = () => {
    const currentFullDate = new Date(currentBlog.date);
    const currentYear = currentFullDate.getFullYear();
    const currentMonth = monthNames[currentFullDate.getMonth()];
    const currentDay = currentFullDate.getDate();

    return ` ${currentDay} ${currentMonth} ${currentYear}`;
  };

  return {
    accessToken,
    goBack,
    handleGoToLogin,

    currentBlog,
    handleDate,
  };
};

export default useBlogVisualization;
