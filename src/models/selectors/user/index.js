import useHelpers from '../../../helpers';

const useUserSelectors = () => {
  const { useCreateSelector } = useHelpers();
  const { createSelector } = useCreateSelector();

  const userSelector = createSelector(
    (state) => state.user,
    (user) => user
  );

  return {
    userSelector,
  };
};

export default useUserSelectors;
