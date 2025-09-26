import useHelpers from '../../../helpers';

const useApplicationReviewSelectors = () => {
  const { useCreateSelector } = useHelpers();
  const { createSelector } = useCreateSelector();

  const applicationReviewSelector = createSelector(
    (state) => state.applicationReview,
    (applicationReview) => {
      return {
        ...applicationReview,
      };
    }
  );
  const applicationReviewWizardSelector = createSelector(
    (state) => state.applicationReviewWizard,
    (applicationReviewWizard) => applicationReviewWizard
  );
  return {
    applicationReviewSelector,
    applicationReviewWizardSelector,
  };
};

export default useApplicationReviewSelectors;
