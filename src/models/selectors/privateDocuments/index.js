import useHelpers from '../../../helpers';

const usePrivateDocumentsSelectors = () => {
  const { useCreateSelector } = useHelpers();
  const { createSelector } = useCreateSelector();

  const reportsSelector = createSelector(
    (state) => state.reportsState,
    (reportsState) => reportsState
  );

  return {
    reportsSelector,
  };
};

export default usePrivateDocumentsSelectors;
