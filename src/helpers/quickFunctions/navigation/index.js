import { useHistory, useLocation } from 'react-router';
import queryString from 'query-string';

/**
 *
 * @author Serempre
 * @name useNavigation
 * @type {Function}
 * @description Custom hook to manage redirect logic
 * @param {} -
 *
 * @return {Function} navigateTo: Function to navigate saving user history
 * @return {Function} replaceAndNavigateTo: Function to navigate deleting user history
 */
const useNavigation = () => {
  const { replace, push, goBack } = useHistory();
  const navigateTo = (url, state) => push(url, { ...state });
  const replaceAndNavigateTo = (url) => replace(url);
  const { search } = useLocation();

  const getParam = (param) => {
    const parsedParams = queryString.parse(search);
    return parsedParams[param].trim().replace(' ', '+');
  };

  return {
    navigateTo,
    replaceAndNavigateTo,
    goBack,
    useLocation,
    getParam,
  };
};

export default useNavigation;
