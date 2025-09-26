// import { useEffect, useState } from 'react';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import useApi from '../../../api';
import useHelpers from '../../../helpers';
import useModels from '../../../models';
import useComponentHooks from '..';
import useGeneralHooks from '../../generalHooks';
import useComponents from '../../../views/components';

const useApplicationRenewTrackingInformation = () => {


  const { useToast } = useGeneralHooks();
  const { error, success } = useToast();
  const { Toast } = useComponents();

  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { usePromises, useNavigation, useBase64ToBlobUrl } =  useQuickFunctions();
  const { navigateTo } = useNavigation();
  const {  promiseInProgressArea: promiseGetPrivateDocumentTrackingInformation } = usePromises('getPrivateDocumentTrackingInformation');

  const { promiseInProgressArea: promiseRejectApplication } = usePromises('rejectApplication');
  const { promiseInProgressArea: promiseApprovedApplication } = usePromises('approvedApplication');
  const { promiseInProgressArea: promiseApprovePayment } =  usePromises('approvePayment');
  // Api
  const { useActions } = useApi();
  const { dispatch, usePrivateDocumentsActions, useApplicationReviewActions, useCommentsActions } = useActions();
  const { actGetPrivateDocumentTrackingInformation } =  usePrivateDocumentsActions();
  const { actGetAdvertisingFeeMTN, actRejectApplication, actApproveApplicationId     } = useApplicationReviewActions(); //actApproveApplication,
  const { actGetApplicationComments } = useCommentsActions();
 // const { actSendComment } = useCommentsActions();
  // Models
  const { useSelectors } = useModels();
  const { useSelector, useApplicationFormSelectors, useUserSelectors, useCommentsSelectors } =  useSelectors();
  const { applicationFormHelpDataSelector, applicationFormSelector } = useApplicationFormSelectors();
  const [individualBusinessTypeState, setIndividualBusinessTypeState] = useState(0);
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

  const { useModal } = useComponentHooks();

  const { modalState: modalStateReject, handleShowModal: handleShowModalReject} =  useModal();
  const { modalState: modalStateApproved, handleShowModal: handleShowModalApproved} =  useModal();

  const { commentsSelector } = useCommentsSelectors();
  const { listOfComments } = useSelector(commentsSelector);
 
 const [ accordionItems, setAccordionItems ] =  useState([]);

  const handleAccodion = (index) => {
    const items=[...accordionItems];
    items[index]=!items[index];
    items[3]=(items[0] && items[1] && items[2]);
    setAccordionItems(items);
  }

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
    navigateTo(`/application-form`);
  };

  // Handlers: private document
  const handleGetPrivateLink = (url) => {
    window.open(url);
  };

  const handleGetPrivateDocumentView = (documentName) => {
    if(documentName===undefined || documentName===null || documentName=='') return;
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

    dispatch(
      actGetApplicationComments({
        applicationId: applicationForm.id,
        withFrontComments: 0,
        withReplies: 1,
      })
    );

  };

  const handleModalReject = () => {
    handleShowModalReject()
  };

  const handleModalApproved = () => {
    handleShowModalApproved()
  };

  
  const onSubmitReject = (data) =>{
    const dataToSend = {  comment: data.textAreaComments };
    dispatch( actRejectApplication(  { applicationId: applicationForm.id, data: dataToSend }, handleShowModalAfterApplication(true)  )  );
  }

  const onSubmitApproved = (data) =>{
    const dataToSend = {  comment: data.textAreaCommentsApp };
    dispatch( actApproveApplicationId(  { applicationId: applicationForm.id, data: dataToSend }, handleShowModalAfterApplication(false)  )  );
  }


 const handleShowModalAfterApplication = (isReject=true) => {
  const configToast={  position: 'top-right',  autoClose: false,  hideProgressBar: false, closeOnClick: true,  pauseOnHover: true, draggable: false,  progress: undefined,   toastId: Math.random() };
  let info="License renewal documentation "+applicationForm?.reference;  //personal_identification_number; //33392045696 has been Approved
  if(isReject)  {
    info+=" has been Rejected";
    handleShowModalReject();  //has been Rejected
    error(<Toast  text={info}  state={'error'} />, configToast);
  }else{ 
    info+=" has been Approved";
    handleShowModalApproved();
    success(<Toast  text={info}  state={'success'} />, configToast);
  }
  navigateTo(`/applications-renew`);
};

const handleUserRoleType = (roleIdRow) => {
  return _.find(userRolesList, (userRole) => userRole.id === roleIdRow).name;
};

const handleNotificationTime = (notificationDate) => {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const currentCommentDate = new Date(notificationDate);

  const commentYear = currentCommentDate.getFullYear();
  const commentMont = monthNames[currentCommentDate.getMonth()];
  const commentDay = currentCommentDate.getDate();

  return `${commentMont}. ${commentDay}, ${commentYear}`;
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
    handleModalReject,
    promiseGetPrivateDocumentTrackingInformation,
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
    modalStateReject,
    modalStateApproved,
    handleAccodion,
    accordionItems,
    promiseRejectApplication,
    promiseApprovedApplication,
    onSubmitReject,
    onSubmitApproved,
    handleModalApproved,
    promiseApprovePayment,
    listOfComments,
    handleUserRoleType,
    handleNotificationTime
   // modalStateSubmitSuccess,
    // handleCloseModalSubmitSucces,
  };
};

export default useApplicationRenewTrackingInformation;
