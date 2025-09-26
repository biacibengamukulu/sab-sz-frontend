import useHelpers from '../../../helpers';

const useApplicationFormSelectors = () => {
  const { useCreateSelector } = useHelpers();
  const { createSelector } = useCreateSelector();

  const applicationReadySelector = createSelector(
    (state) => state.applicationForm,
    (applicationForm) => {
      return {
        applicationReady: applicationForm.applicationReady,
      };
    }
  );

  const applicationFormSelector = createSelector(
    (state) => state.applicationForm,
    (applicationForm) => applicationForm
  );

  const applicationFormDraftSelector = createSelector(
    (state) => state.applicationFormDraft,
    (applicationFormDraft) => applicationFormDraft
  );

  // only used to not request all the pdfs (as inputvalue)
  const draftBlankPdfSelector = createSelector(
    (state) => state.applicationFormDraft,
    (applicationFormDraft) => {
      return {
        blankPdf: applicationFormDraft.blankPdf,
      };
    }
  );
  const applicationFormWizardSelector = createSelector(
    (state) => state.applicationFormWizard,
    (applicationFormWizard) => applicationFormWizard
  );

  const applicationFormHelpDataSelector = createSelector(
    (state) => state.applicationFormHelperLists,
    (applicationFormHelperLists) => applicationFormHelperLists
  );

  const applicationDateSelector = createSelector(
    (state) => state.applicationForm,
    (applicationForm) => {
      return {
        date: applicationForm.date,
      };
    }
  );

  return {
    applicationReadySelector,
    applicationFormSelector,
    applicationFormDraftSelector,
    draftBlankPdfSelector,
    applicationFormWizardSelector,
    applicationFormHelpDataSelector,
    applicationDateSelector,
  };
};

export default useApplicationFormSelectors;
