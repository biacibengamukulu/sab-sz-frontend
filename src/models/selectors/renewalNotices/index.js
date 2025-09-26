import useHelpers from '../../../helpers';

const useRenewalNoticesSelectors = () => {
  const { useCreateSelector } = useHelpers();
  const { createSelector } = useCreateSelector();


  const renewalFormRenewWizardSelector = createSelector(
    (state) => state.renewalFormRenewWizard,
    (renewalFormRenewWizard) => renewalFormRenewWizard
  );

  const renewalFormWizardSelector = createSelector(
    (state) => state.renewalFormWizard,
    (renewalFormWizard) => renewalFormWizard
  );

  const renewalsTableDataSelector = createSelector(
    (state) => state.renewalsTable,
    (renewalsTable) => {
      return {
        data: renewalsTable.data,
        currentPage: renewalsTable.currentPage,
        lastPage: renewalsTable.lastPage,
        pageSize: renewalsTable.pageSize,
        totalRows: renewalsTable.totalRows,
      };
    }
  );

  /** */

  const renewalsNoticesSelector = createSelector(
    (state) => state.renewalsNotices,
    (renewalsNotices) => renewalsNotices
  );
  
  const applicationReadySelector = createSelector(
    (state) => state.applicationsRenewals,
    (applicationsRenewals) => {
      return {
        applicationReady: applicationsRenewals.applicationReady,
      };
    }
  );

  const applicationRenewalSelector = createSelector(
    (state) => state.applicationsRenewals,
    (applicationsRenewals) => {
      return {
        applicationRenewal: applicationsRenewals.applicationRenewal,
      };
    }
  );
  return {
    renewalFormWizardSelector,
    renewalFormRenewWizardSelector,
    renewalsTableDataSelector,
    renewalsNoticesSelector,
    applicationRenewalSelector,
    applicationReadySelector,
  };
};
export default useRenewalNoticesSelectors;
