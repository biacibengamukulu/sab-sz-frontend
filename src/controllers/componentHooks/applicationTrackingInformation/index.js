// import { useEffect, useState } from 'react';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import useApi from '../../../api';
import useHelpers from '../../../helpers';
import useModels from '../../../models';

const useApplicationTrackingInformation = () => {
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { usePromises, useNavigation, useBase64ToBlobUrl } =
    useQuickFunctions();
  const { navigateTo } = useNavigation();
  const {
    promiseInProgressArea: promiseGetPrivateDocumentTrackingInformation,
  } = usePromises('getPrivateDocumentTrackingInformation');
  const { promiseInProgressArea: promiseGetAdvertisingFeeMTN } = usePromises(
    'getAdvertisingFeeMTN'
  );
  // Api
  const { useActions } = useApi();
  const { dispatch, usePrivateDocumentsActions, useApplicationReviewActions, useApplicationFormActions } =
    useActions();
  const { actGetPrivateDocumentTrackingInformation } =
    usePrivateDocumentsActions();
  const { actGetAdvertisingFeeMTN } = useApplicationReviewActions();
  const { actSubmitApplicationFormStep } = useApplicationFormActions();
  // Models
  const { useSelectors } = useModels();
  const { useSelector, useApplicationFormSelectors, useUserSelectors } =
    useSelectors();
  const { applicationFormHelpDataSelector, applicationFormSelector } =
    useApplicationFormSelectors();
  const [individualBusinessTypeState, setIndividualBusinessTypeState] =
    useState(0);
  const { userSelector } = useUserSelectors();
  const {
    licenceTypes,
    businessRelationships,
    natureOfLicences,
    areas,
    businessNatureTypes,
    businessPropertys,
    offices,
    premisesOwners,
    businessLands,
    charYesNoType,
    typeOfRegistration,
  } = useSelector(applicationFormHelpDataSelector);
  const { applicationForm } = useSelector(applicationFormSelector);
  const { profile, userRolesList } = useSelector(userSelector);

  // hooks

  // React

  /**Handlers */
  // handler: get value from id
  const handleListValue = (id, list) => {
    const value = _.find(list, (listRow) => listRow.id === id);
    return value ? value : '';
  };

  // handler: comment title
  const handleCommentTitle = () => {
    const commentBy = `${
      applicationForm.requestForChangesComment.commentMadeBy.name
    } ${applicationForm.requestForChangesComment.commentMadeBy?.surname} - ${
      applicationForm.requestForChangesComment.commentMadeBy.roleId &&
      handleUserRoleType(
        applicationForm.requestForChangesComment.commentMadeBy.roleId
      )
    }`;
    switch (applicationForm.status.id) {
      case 7:
        return `Application for changes required by ${commentBy}`;
      case 9:
        return `This Application was Rejected by the Eswatini Liquor Licensing`;
      case 13:
        return `Request for Issuance Fee Payment changes required by ${commentBy}`;
      case 15:
        return `Request for Advertising Fee Payment changes required by ${commentBy}`;
      case 18:
        return `Request for Inspection report changes required by ${commentBy}`;
      default:
        break;
    }
  };
  // handler: user role type
  const handleUserRoleType = (roleId) => {
    return _.find(userRolesList, (userRole) => userRole.id === roleId).name;
  };
  // Handlers: Phone field
  const handleIndicative = (choice, phone) => {
    const indicativeCode = choice.phoneIndicator
      ? choice.phoneIndicator.replace(/\D/g, '')
      : '268';
    const finalPhone = `(+${indicativeCode}) ${phone}`;
    return finalPhone;
  };

  // Handlers: redirects
  const handleRedirectToApplicationForm = () => {
    // Load the current application data into Redux state before navigating
    if (applicationForm && applicationForm.id) {
      // Convert backend data structure to frontend form structure
      const step1Data = {
        name: (applicationForm.names && applicationForm.surnames)
          ? `${applicationForm.names} ${applicationForm.surnames}`
          : "",
        email: applicationForm.email || "",
        phone: applicationForm.phone || "",
        phoneIndicator: applicationForm.phoneIndicator || 1,
        personal_identification_number: applicationForm.personal_identification_number || "",
        registrationNumber: applicationForm.registrationNumber || "",
        business_relationship_id: applicationForm.business_relationship_id || 1,
        business_property_id: applicationForm.business_property_id || 2,
        premises_owner_id: applicationForm.premises_owner_id || "1",
        licence_type_id: applicationForm.licenceType || 1,
        propoced_outlet_name: applicationForm.business_style || "",
        snl_or_tdl: applicationForm.snl_or_tdl || 1,
        right_of_occupation: applicationForm.right_of_ocuppation || 1,
        building_not_erected_yet: applicationForm.not_yet_erected || 0,
        name_of_area: applicationForm.name_of_area || "",
        business_plot_number: applicationForm.business_plot_number || "000000",
        farm_number: applicationForm.farm_number || "000000",
        names: applicationForm.names || "",
        surnames: applicationForm.surnames || "",
        business_style: applicationForm.business_style || "",
        // Address fields from step 1
        postal_address: applicationForm.postal_address || "",
        residential_address: applicationForm.residential_address || ""
      };

      const step2Data = {
        type_of_payment_second_step: applicationForm.typeOfPaymentSecondStep || 1,
        postal_residence_address: applicationForm.postal_residence_address || "",
        outlet_adress: applicationForm.outlet_address || "",
        advertising_proof_of_payment: applicationForm.advertisingProofOfPayment?.name || null,
        receiptNumber: applicationForm.number_receipt || "REC123456789",
        reference: applicationForm.reference || "",
        payerCellphone: applicationForm.payerCellphone || "76543210",
        payerCellphoneIndicator: applicationForm.payerCellphoneIndicator || 1
      };

      const step3Data = {
        police_report: applicationForm.police_report?.name || null,
        health_report: applicationForm.health_report?.name || null,
        plans_drawn: applicationForm.plans_drawn?.name || null,
        national_identity_card: applicationForm.identity_card?.name || null,
        certificate_incorporation: applicationForm.certificate_of_incorporation?.name || null,
        trading_license: applicationForm.trading_licence?.name || null,
        company_resolution: applicationForm.company_resolution?.name || null,
        memorandum_articles: applicationForm.memorandum_and_articles_of_association?.name || null,
        temporary_resident_permit: applicationForm.temporary_resident_permit?.name || null,
        advert_copy: applicationForm.advert_copy?.name || null,
        letter_of_consent: applicationForm.kings_consent_liquor_issue?.name || null,
        renting_lease_agreement: applicationForm.lease_agreement?.name || null,
        title_deed: applicationForm.title_deed?.name || null,
        affidavit: applicationForm.affidavit?.name || null
      };

      // Populate Redux state with real application data
      dispatch(actSubmitApplicationFormStep({ data: step1Data, step: 1 }));
      dispatch(actSubmitApplicationFormStep({ data: step2Data, step: 2 }));
      dispatch(actSubmitApplicationFormStep({ data: step3Data, step: 3 }));

      // Also enable all steps since this is an existing application being edited
      const { actSetActiveApplicationFormSteps } = useApplicationFormActions();
      dispatch(actSetActiveApplicationFormSteps({ steps: 5 })); // Enable all steps
    }

    navigateTo(`/application-form`);
  };

  // Handlers: private document
  const handleGetPrivateLink = (url) => {
    window.open(url);
  };

  const handleGetPrivateDocumentView = (documentName) => {
    dispatch(
      actGetPrivateDocumentTrackingInformation(
        {
          documentName: documentName.replace(/\.[^/.]+$/, '') + '.pdf',
          applicationId: applicationForm.id,
        },
        handleGetPrivateLink
      )
    );
  };

  const handleSetAdvertisingFeeMtnPdf = (base64) => {
    const { url } = useBase64ToBlobUrl(base64);
    window.open(url);
  };

  const handleGetAdvertisingFeeMtn = () => {
    dispatch(
      actGetAdvertisingFeeMTN(applicationForm.id, handleSetAdvertisingFeeMtnPdf)
    );
  };

  const handleBusinessIndividual = () => {
    // Individual Business + Urban area + Privately-Owned = ID + Title Deed (individualBusinessType = 1)
    if (
      applicationForm.business_relationship_id == 1 &&
      applicationForm.business_property_id == 2 &&
      applicationForm.premises_owner_id == '1' &&
      applicationForm.personal_identification_number[7] != 0
    ) {
      setIndividualBusinessTypeState(1);
      // Individual Business + Urban area + Leased-Owned = ID + Title Deed (individualBusinessType = 1)
    } else if (
      applicationForm.business_relationship_id == 1 &&
      applicationForm.business_property_id == 2 &&
      applicationForm.premises_owner_id == '2' &&
      applicationForm.personal_identification_number[7] != 0
    ) {
      setIndividualBusinessTypeState(2);
    } else if (
      applicationForm.business_relationship_id == 1 &&
      applicationForm.business_property_id == 2 &&
      applicationForm.premises_owner_id == '1' &&
      applicationForm.personal_identification_number[7] == 0
    ) {
      setIndividualBusinessTypeState(3);
      // Individual Business + Urban area + Leased-Owned = ID + Title Deed (individualBusinessType = 1)
    } else if (
      applicationForm.business_relationship_id == 1 &&
      applicationForm.business_property_id == 2 &&
      applicationForm.premises_owner_id == '2' &&
      applicationForm.personal_identification_number[7] == 0
    ) {
      setIndividualBusinessTypeState(4);
    } else {
      setIndividualBusinessTypeState(0);
    }
  };

  // Only to revalidate the Licence required documents
  useEffect(() => {
    handleBusinessIndividual();
  }, [
    applicationForm.business_relationship_id,
    applicationForm.business_property_id,
    applicationForm.premises_owner_id,
  ]);
  return {
    promiseGetPrivateDocumentTrackingInformation,
    promiseGetAdvertisingFeeMTN,
    profile,

    licenceTypes,
    businessRelationships,
    natureOfLicences,
    areas,
    businessNatureTypes,
    businessPropertys,
    offices,
    premisesOwners,
    businessLands,
    charYesNoType,
    typeOfRegistration,
    individualBusinessTypeState,

    handleListValue,

    applicationForm,

    handleCommentTitle,

    handleRedirectToApplicationForm,

    handleIndicative,
    handleGetPrivateDocumentView,
    handleGetAdvertisingFeeMtn,
  };
};

export default useApplicationTrackingInformation;
