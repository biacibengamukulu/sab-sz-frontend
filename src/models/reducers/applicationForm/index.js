import useHelpers from '../../../helpers';
import useStrings from '../../../strings';
import useInitialStates from '../../initialStates';

const useApplicationFormReducers = () => {
  // Helpers
  const { useCreateReducer } = useHelpers();
  const { createReducer } = useCreateReducer();

  //strings
  const { useTypes } = useStrings();
  const { applicationFormTypes, userUserTypes } = useTypes();
  const {
    SUBMIT_APPLICATION_FORM_STEP,
    RESET_FIELD_APPLICATION_FORM,
    SET_APPLICATION_FORM_FROM_TABLE,
    APPLICATION_READY,
    GET_APPLICATION_FILES,
    CANCEL_APPLICATION,

    SET_CURRENT_APPLICATION_FORM_STEP,
    SET_ACTIVE_APPLICATION_FORM_STEPS,

    GET_APPLICATION_HELP_DATA,
    GET_APPLICATION_BY_ID_FROM_REVIEW,

    GET_DRAFT_ISSUANCE_FEE_PAYMENT,

    ADVERTISING_PAYMENT_SUCCESS,
    // SUBMIT_APPLICATION_FORM_FINAL,
    // SUBMIT_APPLICATION_FORM_STEP,
    // SUBMIT_APPLICATION_FORM_STEP_2,
    // SET_CURRENT_STEP,
    // ENABLE_SECOND_STEP,
    // ENABLE_FINAL_STEP,
    // APPLICATION_READY,
    // SET_APPLICATION_DATE,
    // SET_DOCUMENTS_DRAFT,
  } = applicationFormTypes();
  const { LOG_OUT_USER } = userUserTypes();

  //initial states
  const { useApplicationFormInitialStates } = useInitialStates();
  const {
    applicationFormInitialStates,
    applicationFormDraftInitialStates,
    applicationFormWizardInitialStates,
    applicationFormHelperListsInitialStates,
  } = useApplicationFormInitialStates();

  /**Handlers */

  //Application form
  const userApplicationFormHandler = {
    [ADVERTISING_PAYMENT_SUCCESS](state, action) {
      const { payload } = action;
      const { applicationId } = payload;
      return {
        ...state,
        applicationForm: {
          ...state.applicationForm,
          applicationId: applicationId,
          id: applicationId,
        },
      };
    },

    [SUBMIT_APPLICATION_FORM_STEP](state, action) {
      const { payload } = action;
      const { data } = payload;
      return {
        ...state,
        applicationForm: {
          ...state.applicationForm,
          ...data,
        },
      };
    },

    [RESET_FIELD_APPLICATION_FORM](state, action) {
      const { payload } = action;
      const { fieldName } = payload;

      const currentApplicationform = {
        ...state.applicationForm,
      };
      currentApplicationform[`${fieldName}`] =
        applicationFormInitialStates.applicationForm[`${fieldName}`];

      return {
        ...state,
        applicationForm: {
          ...currentApplicationform,
        },
      };
    },

    [SET_APPLICATION_FORM_FROM_TABLE](state, action) {
      const { payload } = action;
      return {
        ...state,
        applicationForm: {
          ...state.applicationForm,
          ...payload,
        },
      };
    },

    [APPLICATION_READY](state) {
      return {
        ...state,
        applicationReady: true,
      };
    },

    [GET_APPLICATION_FILES](state, action) {
      const { payload } = action;
      const { files } = payload;

      return {
        ...state,
        applicationForm: {
          ...state.applicationForm,
          ...files,
        },
      };
    },

    [GET_DRAFT_ISSUANCE_FEE_PAYMENT](state, action) {
      const { payload } = action;
      return {
        ...state,
        applicationForm: {
          ...state.applicationForm,
          issueProofOfPayment: { ...payload },
        },
      };
    },
    [GET_APPLICATION_BY_ID_FROM_REVIEW](state, action) {
      const { payload } = action;
      const { application } = payload;
      return {
        ...state,
        applicationForm: {
          ...state.applicationForm,
          ...application,
        },
      };
    },
    [CANCEL_APPLICATION]() {
      return applicationFormInitialStates;
    },

    [LOG_OUT_USER]() {
      return applicationFormInitialStates;
    },
  };

  //Application form Draft
  const userApplicationFormDraftHandler = {
    [SUBMIT_APPLICATION_FORM_STEP](state, action) {
      const { payload } = action;
      const { data, step } = payload;

      switch (step) {
        case 1:
          return {
            ...state,
            applicationFormStep1: {
              ...state.applicationFormStep1,
              ...data,
            },
          };
        case 2:
          return {
            ...state,
            applicationFormStep2: {
              ...state.applicationFormStep2,
              ...data,
            },
          };
        case 3:
          return {
            ...state,
            applicationFormStep3: {
              ...state.applicationFormStep3,
              ...data,
            },
          };
        case 4:
          return {
            ...state,
            applicationFormStep4: {
              ...state.applicationFormStep4,
              ...data,
            },
          };
        case 5:
          return {
            ...state,
            applicationFormStep5: {
              ...state.applicationFormStep5,
              ...data,
            },
          };
        default:
          return { ...state };
      }
    },

    [RESET_FIELD_APPLICATION_FORM](state, action) {
      const { payload } = action;
      const { fieldName, formStep } = payload;
      let currentApplicationForm = {};
      switch (formStep) {
        case 1:
          currentApplicationForm = {
            ...state.applicationFormStep1,
          };
          currentApplicationForm[`${fieldName}`] =
            applicationFormDraftInitialStates.applicationFormStep1[
              `${fieldName}`
            ];
          return {
            ...state,
            applicationFormStep1: {
              ...currentApplicationForm,
            },
          };
        case 2:
          currentApplicationForm = {
            ...state.applicationFormStep2,
          };

          currentApplicationForm[`${fieldName}`] =
            applicationFormDraftInitialStates.applicationFormStep2[
              `${fieldName}`
            ];
          return {
            ...state,
            applicationFormStep2: {
              ...currentApplicationForm,
            },
          };
        case 3:
          currentApplicationForm = {
            ...state.applicationFormStep3,
          };
          currentApplicationForm[`${fieldName}`] =
            applicationFormDraftInitialStates.applicationFormStep3[
              `${fieldName}`
            ];
          return {
            ...state,
            applicationFormStep3: {
              ...currentApplicationForm,
            },
          };
        case 4:
          currentApplicationForm = {
            ...state.applicationFormStep4,
          };
          currentApplicationForm[`${fieldName}`] =
            applicationFormDraftInitialStates.applicationFormStep4[
              `${fieldName}`
            ];
          return {
            ...state,
            applicationFormStep4: {
              ...currentApplicationForm,
            },
          };
        case 5:
          currentApplicationForm = {
            ...state.applicationFormStep5,
          };
          currentApplicationForm[`${fieldName}`] =
            applicationFormDraftInitialStates.applicationFormStep5[
              `${fieldName}`
            ];
          return {
            ...state,
            applicationFormStep5: {
              ...currentApplicationForm,
            },
          };
        default:
          return { ...state };
      }
    },

    [SET_APPLICATION_FORM_FROM_TABLE](state, action) {
      const { payload } = action;
      return {
        ...state,
        applicationFormStep1: {
          id: '',
          personal_identification_number: '',
          names: '',
          surnames: '',
          licenceType: '',
          business_relationship_id: '',
          business_style: '',
          license_nature_type_id: '',
          area_id: '',
          business_nature_type_id: '',
          business_property_id: '',
          business_plot_number: '',
          farm_number: '',
          portion: '',
          office_id: '',
          business_building: '',
          business_street: '',
          business_suburb: '',
          company_number: '',
          postal_address: '',
          residential_address: '',
          business_premises: '',
          premises_owner_id: '',
          business_land_id: '',
        },
        applicationFormStep2: {
          typeOfPaymentSecondStep: payload.typeOfPaymentSecondStep,
          payerCellphone: payload.payerCellphone,
          advertisingProofOfPayment: payload.advertisingProofOfPayment,
        },
        applicationFormStep3: {
          identity_card: payload.identity_card,
          lease_agreement: payload.lease_agreement,
          leased_business_premise: payload.leased_business_premise,
          temporal_resident_permit: payload.temporal_resident_permit,
          title_deed: payload.title_deed,
          certificate_of_partnership: payload.certificate_of_partnership,
          certificate_of_incorporation: payload.certificate_of_incorporation,
          form_c: payload.form_c,
          form_j: payload.form_j,
          memorandum_and_articles_of_association:
            payload.memorandum_and_articles_of_association,
          affidavit: payload.affidavit,
        },
        // applicationFormStep5: {
        //   typeOfPaymentFifthStep: payload.typeOfPaymentFifthStep,
        //   issueProofOfPayment: payload.issueProofOfPayment,
        // },
      };
    },

    // [GET_APPLICATION_FILES](state, action) {
    //   const { payload } = action;
    //   const { files } = payload;
    //   return {
    //     ...state,
    //     applicationFormStep2: {
    //       advertisingProofOfPayment: {
    //         ...state.applicationFormStep2.advertisingProofOfPayment,
    //         ...files.advertisingProofOfPayment,
    //       },
    //     },
    //     applicationFormStep3: {
    //       policeReport: {
    //         ...state.applicationFormStep3.policeReport,
    //         ...files.policeReport,
    //       },
    //       healthReport: {
    //         ...state.applicationFormStep3.healthReport,
    //         ...files.healthReport,
    //       },
    //       plansDrawn: {
    //         ...state.applicationFormStep3.plansDrawn,
    //         ...files.plansDrawn,
    //       },
    //       nationalIdentityCard: {
    //         ...state.applicationFormStep3.nationalIdentityCard,
    //         ...files.nationalIdentityCard,
    //       },
    //       certificateIncorporation: {
    //         ...state.applicationFormStep3.certificateIncorporation,
    //         ...files.certificateIncorporation,
    //       },
    //       tradingLicense: {
    //         ...state.applicationFormStep3.tradingLicense,
    //         ...files.tradingLicense,
    //       },
    //       companyResolution: {
    //         ...state.applicationFormStep3.companyResolution,
    //         ...files.companyResolution,
    //       },
    //       memorandumArticles: {
    //         ...state.applicationFormStep3.memorandumArticles,
    //         ...files.memorandumArticles,
    //       },
    //       temporaryResidentPermit: {
    //         ...state.applicationFormStep3.temporaryResidentPermit,
    //         ...files.temporaryResidentPermit,
    //       },
    //       advertCopy: {
    //         ...state.applicationFormStep3.advertCopy,
    //         ...files.advertCopy,
    //       },
    //       letterOfConsent: {
    //         ...state.applicationFormStep3.letterOfConsent,
    //         ...files.letterOfConsent,
    //       },
    //       rentingLeaseAgreement: {
    //         ...state.applicationFormStep3.rentingLeaseAgreement,
    //         ...files.rentingLeaseAgreement,
    //       },
    //       titleDeed: {
    //         ...state.applicationFormStep3.titleDeed,
    //         ...files.titleDeed,
    //       },
    //       affidavit: {
    //         ...state.applicationFormStep4.affidavit,
    //         ...files.affidavit,
    //       },
    //     },

    //     applicationFormStep5: {
    //       issueProofOfPayment: {
    //         ...state.applicationFormStep5,
    //         ...files.issueProofOfPayment,
    //       },
    //     },
    //   };
    // },

    [CANCEL_APPLICATION]() {
      return applicationFormDraftInitialStates;
    },

    [LOG_OUT_USER]() {
      return applicationFormDraftInitialStates;
    },
  };

  //Application form Wizard
  const userApplicationFormWizardHandler = {
    [SET_CURRENT_APPLICATION_FORM_STEP](state, action) {
      const { payload } = action;
      return {
        ...state,
        currentStep: payload,
      };
    },

    [SET_ACTIVE_APPLICATION_FORM_STEPS](state, action) {
      const { payload } = action;
      return {
        ...state,
        stepsEnabled: payload,
      };
    },

    [CANCEL_APPLICATION]() {
      return applicationFormWizardInitialStates;
    },

    [LOG_OUT_USER]() {
      return applicationFormWizardInitialStates;
    },
  };

  //Application form Helper lists
  const userApplicationFormHelperListsHandler = {
    [GET_APPLICATION_HELP_DATA](state, action) {
      const { payload } = action;
      const {
        licenceTypes,
        businessRelationships,
        natureOfLicences,
        areas,
        businessPropertys,
        businessNatureTypes,
        offices,
        premisesOwners,
        businessLands,
        liquor_licence_affidavit_document_url,
        phoneIndicators,
        contactMethods,
        applicationTypes,
        typeOfRegistration,
        municipalities,
        nameOfArea,
      } = payload;
      return {
        ...state,
        licenceTypes: licenceTypes,
        businessRelationships: businessRelationships,
        natureOfLicences: natureOfLicences,
        areas: areas,
        businessPropertys: businessPropertys,
        businessNatureTypes: businessNatureTypes,
        offices: offices,
        premisesOwners: premisesOwners,
        businessLands: businessLands,
        liquorLicenceAffidavitDocumentUrl: liquor_licence_affidavit_document_url,
        phoneIndicators: phoneIndicators,
        contactMethods: contactMethods,
        applicationTypes: applicationTypes,
        typeOfRegistration: typeOfRegistration,
        municipalities: municipalities,
        nameOfArea: nameOfArea,
      };
    },
  };

  /**Reducers */
  const applicationForm = createReducer(
    applicationFormInitialStates,
    userApplicationFormHandler
  );
  const applicationFormDraft = createReducer(
    applicationFormDraftInitialStates,
    userApplicationFormDraftHandler
  );
  const applicationFormWizard = createReducer(
    applicationFormWizardInitialStates,
    userApplicationFormWizardHandler
  );
  const applicationFormHelperLists = createReducer(
    applicationFormHelperListsInitialStates,
    userApplicationFormHelperListsHandler
  );

  return {
    applicationForm,
    applicationFormDraft,
    applicationFormWizard,
    applicationFormHelperLists,
  };
};

export default useApplicationFormReducers;
