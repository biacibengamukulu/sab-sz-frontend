import useHelpers from '../../../helpers';

const useCommentsSelectors = () => {
  const { useCreateSelector } = useHelpers();
  const { createSelector } = useCreateSelector();

  const commentsSelector = createSelector(
    (state) => state.comments,
    (comments) => comments
  );

  return {
    commentsSelector,
  };
};

export default useCommentsSelectors;
