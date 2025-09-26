import useHelpers from '../../../helpers';

const useAuthSelectors = () => {
  const { useCreateSelector } = useHelpers();
  const { createSelector } = useCreateSelector();

  const session = createSelector(
    (state) => state.session,
    (session) => session
  );
  const broadcastingSelector = createSelector(
    (state) => state.broadcasting,
    (broadcasting) => broadcasting
  );

  return {
    session,
    broadcastingSelector,
  };
};

export default useAuthSelectors;
