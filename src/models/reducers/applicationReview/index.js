import useHelpers from '../../../helpers';
import useStrings from '../../../strings';
import useInitialStates from '../../initialStates';

const useApplicationReviewReducers = () => {
  // Helpers
  const { useCreateReducer } = useHelpers();
  const { createReducer } = useCreateReducer();

  //strings
  const { useTypes } = useStrings();
  const { applicationReviewTypes, applicationFormTypes, userUserTypes } =
    useTypes();
  const {
    SET_CURRENT_APPLICATION_REVIEW_STEP,
    SET_ACTIVE_APPLICATION_REVIEW_STEPS,
    GET_INSPECTION_REPORT,

    RESET_FIELD_APPLICATION_REVIEW,

    RESET_APPLICATION_REVIEW,
  } = applicationReviewTypes();

  const { CANCEL_APPLICATION } = applicationFormTypes();

  const { LOG_OUT_USER } = userUserTypes();

  //initial states
  const { useApplicationReviewInitialStates } = useInitialStates();
  const {
    applicationReviewInitialStates,
    applicationReviewWizardInitialStates,
  } = useApplicationReviewInitialStates();

  //handlers
  const userHandlerApplicationReviewWizard = {
    [SET_CURRENT_APPLICATION_REVIEW_STEP](state, action) {
      const { payload } = action;
      return {
        ...state,
        currentStep: payload,
      };
    },

    [SET_ACTIVE_APPLICATION_REVIEW_STEPS](state, action) {
      const { payload } = action;
      return {
        ...state,
        stepsEnabled: payload,
      };
    },

    [CANCEL_APPLICATION]() {
      return applicationReviewWizardInitialStates;
    },

    [LOG_OUT_USER]() {
      return applicationReviewWizardInitialStates;
    },
  };

  const userHandlerApplicationReview = {
    [RESET_FIELD_APPLICATION_REVIEW](state, action) {
      const { payload } = action;
      const { fieldName } = payload;

      const currentApplicationReview = {
        ...state.applicationReview,
      };
      currentApplicationReview[`${fieldName}`] =
        applicationReviewInitialStates.applicationReview[`${fieldName}`];

      return {
        ...state,
        applicationReview: {
          ...currentApplicationReview,
        },
      };
    },

    [GET_INSPECTION_REPORT](state, action) {
      const { payload } = action;
      const { reports } = payload;
      const { inspectionDocument, latitude, longitude } = reports;
      return {
        ...state,
        applicationReview: {
          ...state.applicationReview,
          inspectionDocument: { ...inspectionDocument },
          latitude: latitude,
          longitude: longitude,
        },
      };
    },

    [RESET_APPLICATION_REVIEW]() {
      return applicationReviewInitialStates;
    },
  };

  //reducers
  const applicationReviewWizard = createReducer(
    applicationReviewWizardInitialStates,
    userHandlerApplicationReviewWizard
  );
  const applicationReview = createReducer(
    applicationReviewInitialStates,
    userHandlerApplicationReview
  );

  return {
    applicationReview,
    applicationReviewWizard,
  };
};

export default useApplicationReviewReducers;
