import useHelpers from '../../../helpers';
import useStrings from '../../../strings';
import useInitialStates from '../../initialStates';

const useRenewalsNoticesReducers = () => {
  // Helpers
  const { useCreateReducer } = useHelpers();
  const { createReducer } = useCreateReducer();

  //strings
  const { useTypes } = useStrings();
  const { applicationRenewalsTypes, userUserTypes } = useTypes();
  const {
    SET_CURRENT_RENEWAL_FORM_STEP,
    SET_CURRENT_RENEWAL_FORM_RENEW_STEP,
    SET_ACTIVE_RENEWAL_FORM_STEPS,
    CANCEL_RENEWAL,
    CANCEL_RENEWAL_RENEW,

    GET_APPLICATIONS_RENEWALS_TABLE,

    GET_APPLICATION_RENEWAL,
    APPLICATION_RENEWAL_READY,
    DELETE_APPLICATION_RENEWAL,
    REMOVE_PROOF_OF_PAYMENT,
  } = applicationRenewalsTypes();

  const { LOG_OUT_USER } = userUserTypes();

  //initial states
  const { useRenewalNoticesInitialStates } = useInitialStates();

  const {
    renewalsTableInitialState,
    renewalFormWizardInitialStates,
    renewalFormRenewWizardInitialStates,
    applicationsRenewalsInitialState, 
  } = useRenewalNoticesInitialStates();

  //handlers

  //Application form Wizard
  const userRenewalFormWizardHandler = {
    [SET_CURRENT_RENEWAL_FORM_STEP](state, action) {
      const { payload } = action;
      return {
        ...state,
        currentStep: payload,
      };
    },

    [SET_ACTIVE_RENEWAL_FORM_STEPS](state, action) {
      const { payload } = action;
      return {
        ...state,
        stepsEnabled: payload,
      };
    },

    [CANCEL_RENEWAL]() {
      return applicationsRenewalsInitialState;
    },

    [LOG_OUT_USER]() {
      return applicationsRenewalsInitialState;
    },
  };


  const userRenewalFormRenewWizardHandler = {
    [SET_CURRENT_RENEWAL_FORM_RENEW_STEP](state, action) {
      const { payload } = action;
      return {
        ...state,
        currentStep: payload,
      };
    },

    [SET_CURRENT_RENEWAL_FORM_RENEW_STEP](state, action) {
      const { payload } = action;
      return {
        ...state,
        stepsEnabled: payload,
      };
    },

    [CANCEL_RENEWAL_RENEW]() {
      return renewalFormRenewWizardInitialStates;
    },

    [LOG_OUT_USER]() {
      return renewalFormRenewWizardInitialStates;
    },
  };

  const useRenewalsTable = {
    [GET_APPLICATIONS_RENEWALS_TABLE](state, action) {
      const { payload } = action;
      const { current_page, data, last_page, per_page, total } = payload;
      return {
        ...state,
        data: data,
        currentPage: current_page,
        lastPage: last_page,
        pageSize: per_page,
        totalRows: total,
      };
    },

    [LOG_OUT_USER]() {
      return renewalsTableInitialState;
    },
  };

  /** */

  const renewalsHandler = {
    [GET_APPLICATION_RENEWAL](state, action) {
      const { payload } = action;
      const { renewal } = payload;
      return {
        ...state,
        applicationRenewal: renewal,
      };
    },
    [APPLICATION_RENEWAL_READY](state) {
      return {
        ...state,
        applicationReady: true,
      };
    },
    [REMOVE_PROOF_OF_PAYMENT](state) {
      return {
        ...state,
        applicationRenewal: {
          ...state.applicationRenewal,
          proofOfPayment: { name: '', data: '' },
        },
      };
    },

    [DELETE_APPLICATION_RENEWAL]() {
      return applicationsRenewalsInitialState;
    },
  };

  //reducers
  const renewalFormWizard = createReducer(
    renewalFormWizardInitialStates,
    userRenewalFormWizardHandler
  );

  const renewalFormRenewWizard = createReducer(
    renewalFormRenewWizardInitialStates,
    userRenewalFormRenewWizardHandler
  );

  const renewalsTable = createReducer(
    renewalsTableInitialState,
    useRenewalsTable
  );
  /** */
  const applicationsRenewals = createReducer(
    applicationsRenewalsInitialState,
    renewalsHandler
  );
  return {
    renewalFormWizard,
    renewalFormRenewWizard,
    renewalsTable,

    applicationsRenewals,
  };
};

export default useRenewalsNoticesReducers;
