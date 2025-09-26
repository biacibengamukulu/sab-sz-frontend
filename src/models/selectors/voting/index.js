import useHelpers from '../../../helpers';

const useVotingSelectors = () => {
  const { useCreateSelector } = useHelpers();
  const { createSelector } = useCreateSelector();

  const votingSelector = createSelector(
    (state) => state.voting,
    (voting) => voting
  );

  return {
    votingSelector,
  };
};

export default useVotingSelectors;
