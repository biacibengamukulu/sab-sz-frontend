import React, { Suspense } from 'react';
import useComponents from '..';
import useAssets from '../../../assets';
import useControllers from '../../../controllers';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import useHelpers from '../../../helpers';
import _ from 'lodash';

import {
  StyledApplicationRenewTrackingInformation,
  //StyledCommentsContainer,
  //StyledCommentsInnerContainer,
  //StyledCommentTitle,
  //StyledCommentDescription,
  //StyledButtonEditApplication,
  StyledTitleTrackingInfo,
  StyledAccordionContainer,
  StyledAccordionActivityIndicator,
  StyledTitleAccordion,
  StyledFieldsDoubleColumnAccordionContainer,
  StyledFieldsSingleColumnContainer,
  StyledFieldColumn,
  StyledFieldColumnTitle,
  StyledFieldColumnValue,
  StyledFieldRowSingleColumn,
  StyledDownloadContainer,
  StyledButtonContainer,
  StyledButton,
  StyledTitleModal,
 // StyledDescriptionModal,
  StyledChildContainerModal,
  StyledChildContainerModal2,
  StyledButtonContainerModal,
  StyledButtonModal,
  StyledSubtitleModal,
  StyledTextAreaField,
  StyledAccordionContainerStatus,
  StyledCheckboxField
} from './ApplicationRenewTrackingInformation.styles';

const ApplicationRenewTrackingInformation = () => {
  // Assest
  const { useIcons } = useAssets();
  const { /*iconWarning: IconWarning,*/ iconDownload: IconDownload, iconCancel: IconCancel } = useIcons();

  // Components
  const { ActivityIndicator, Accordion, Modal } = useComponents();
  // Hooks
  const { useComponentHooks } = useControllers();
  const { useApplicationRenewTrackingInformation } = useComponentHooks();

  const { useQuickFunctions } = useHelpers();
  const { useValidators } = useQuickFunctions();
  const { modalCommentsSchemaValidator, modalCommentsAppSchemaValidator } = useValidators();



  const {
    control: controlComments,
    getValues: getValuesComment,
    formState: { errors: errorsComments, isValid: isValidComments },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(modalCommentsSchemaValidator),
  });

  const {
    control: controlCommentsApp,
    getValues: getValuesCommentApp,
    formState: { errors: errorsCommentsApp, isValid: isValidCommentsApp },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(modalCommentsAppSchemaValidator),
  });


  const {
    promiseGetPrivateDocumentTrackingInformation,
    licenceTypes,
    businessRelationships,
    natureOfLicences,
    areas,
    businessPropertys,
    offices,
    premisesOwners,
    businessLands,
    charYesNoType,
    handleListValue,
    applicationForm,
    handleGetPrivateDocumentView,
    handleModalReject,
    modalStateReject,
    handleAccodion,
    accordionItems,
    promiseRejectApplication,
    promiseApprovedApplication,
    onSubmitReject,
    onSubmitApproved,
    modalStateApproved,
    handleModalApproved,
    listOfComments,
    handleUserRoleType,
    handleNotificationTime
    //modalStateSubmitSuccess,
    //handleCloseModalSubmitSucces
    //promiseApprovePayment
  } = useApplicationRenewTrackingInformation();

  


  return (
    <Suspense fallback={<ActivityIndicator />}>
      <StyledApplicationRenewTrackingInformation>

        <StyledTitleTrackingInfo variant="h3">   Tracking Information  </StyledTitleTrackingInfo>

        <StyledAccordionContainer>
          {/* Personal information */}
          <Accordion  title={  <StyledTitleAccordion variant="h4">  Liquor license renewal application form </StyledTitleAccordion>  }  subTitle={ accordionItems[0] ? 'Reviewed' : 'Pending'} >

          <StyledFieldsSingleColumnContainer>
              <StyledFieldColumn>
                <StyledFieldColumnTitle>  Personal Identification Number </StyledFieldColumnTitle>
                <StyledFieldColumnValue>  {applicationForm.personal_identification_number && applicationForm.personal_identification_number} </StyledFieldColumnValue>
              </StyledFieldColumn>
          </StyledFieldsSingleColumnContainer>

            <StyledFieldsDoubleColumnAccordionContainer>
              <StyledFieldColumn>
                <StyledFieldColumnTitle>Names</StyledFieldColumnTitle>
                <StyledFieldColumnValue> {applicationForm.names && applicationForm.names}  </StyledFieldColumnValue>
              </StyledFieldColumn>
              <StyledFieldColumn>
                <StyledFieldColumnTitle>Surnames</StyledFieldColumnTitle>
                <StyledFieldColumnValue>  {applicationForm.surnames && applicationForm.surnames} </StyledFieldColumnValue>
              </StyledFieldColumn>

              <StyledFieldColumn>
                <StyledFieldColumnTitle>
                  Business Relationship
                </StyledFieldColumnTitle>
                <StyledFieldColumnValue>
                  {applicationForm.business_relationship_id &&
                    handleListValue(
                      applicationForm.business_relationship_id,
                      businessRelationships
                    ).name}
                </StyledFieldColumnValue>
              </StyledFieldColumn>

              <StyledFieldColumn>
                <StyledFieldColumnTitle>Business Style</StyledFieldColumnTitle>
                <StyledFieldColumnValue>
                  {applicationForm.business_style &&
                    applicationForm.business_style}
                </StyledFieldColumnValue>
              </StyledFieldColumn>

              <StyledFieldColumn>
                <StyledFieldColumnTitle>Licence Nature</StyledFieldColumnTitle>
                <StyledFieldColumnValue>
                  {applicationForm.license_nature_type_id &&
                    handleListValue(
                      applicationForm.license_nature_type_id,
                      natureOfLicences
                    ).name}
                </StyledFieldColumnValue>
              </StyledFieldColumn>

              <StyledFieldColumn>
                <StyledFieldColumnTitle>
                  Business Property
                </StyledFieldColumnTitle>
                <StyledFieldColumnValue>
                  {applicationForm.business_property_id &&
                    handleListValue(
                      applicationForm.business_property_id,
                      businessPropertys
                    ).name}
                </StyledFieldColumnValue>
              </StyledFieldColumn>

              <StyledFieldColumn>
                <StyledFieldColumnTitle>
                  Business Plot Number
                </StyledFieldColumnTitle>
                <StyledFieldColumnValue>
                  {applicationForm.business_plot_number &&
                    applicationForm.business_plot_number}
                </StyledFieldColumnValue>
              </StyledFieldColumn>

              <StyledFieldColumn>
                <StyledFieldColumnTitle>Farm Number</StyledFieldColumnTitle>
                <StyledFieldColumnValue>
                  {applicationForm.farm_number && applicationForm.farm_number}
                </StyledFieldColumnValue>
              </StyledFieldColumn>

              <StyledFieldColumn>
                <StyledFieldColumnTitle>Portion</StyledFieldColumnTitle>
                <StyledFieldColumnValue>
                  {applicationForm.portion && applicationForm.portion}
                </StyledFieldColumnValue>
              </StyledFieldColumn>

              <StyledFieldColumn>
                <StyledFieldColumnTitle>
                  Business Building
                </StyledFieldColumnTitle>
                <StyledFieldColumnValue>
                  {applicationForm.business_building &&
                    applicationForm.business_building}
                </StyledFieldColumnValue>
              </StyledFieldColumn>

              <StyledFieldColumn>
                <StyledFieldColumnTitle>Business Street</StyledFieldColumnTitle>
                <StyledFieldColumnValue>
                  {applicationForm.business_street &&
                    applicationForm.business_street}
                </StyledFieldColumnValue>
              </StyledFieldColumn>

              <StyledFieldColumn>
                <StyledFieldColumnTitle>Business Suburb</StyledFieldColumnTitle>
                <StyledFieldColumnValue>
                  {applicationForm.business_suburb &&
                    applicationForm.business_suburb}
                </StyledFieldColumnValue>
              </StyledFieldColumn>

              <StyledFieldColumn>
                <StyledFieldColumnTitle>Business Town</StyledFieldColumnTitle>
                <StyledFieldColumnValue>
                  {applicationForm.business_town &&
                    applicationForm.business_town}
                </StyledFieldColumnValue>
              </StyledFieldColumn>

              <StyledFieldColumn>
                  <StyledFieldColumnTitle>  Company Number </StyledFieldColumnTitle>
                  <StyledFieldColumnValue>  {applicationForm?.company_number}  </StyledFieldColumnValue>
              </StyledFieldColumn>

              <StyledFieldColumn>
                <StyledFieldColumnTitle>  Residential address </StyledFieldColumnTitle>
                <StyledFieldColumnValue>  {applicationForm.residential_address &&  applicationForm.residential_address} </StyledFieldColumnValue>
              </StyledFieldColumn>

              <StyledFieldColumn>
                <StyledFieldColumnTitle>City</StyledFieldColumnTitle>
                <StyledFieldColumnValue>
                  {applicationForm.city && applicationForm.city}
                </StyledFieldColumnValue>
              </StyledFieldColumn>

              <StyledFieldColumn>
                <StyledFieldColumnTitle>Postal code</StyledFieldColumnTitle>
                <StyledFieldColumnValue>
                  {applicationForm.postal_address &&
                    applicationForm.postal_address}
                </StyledFieldColumnValue>
              </StyledFieldColumn>

              <StyledFieldColumn>
                <StyledFieldColumnTitle>Business Office</StyledFieldColumnTitle>
                <StyledFieldColumnValue> {applicationForm.office_id &&  handleListValue(applicationForm.office_id, offices).shrot_desc} </StyledFieldColumnValue>
              </StyledFieldColumn>




              <StyledFieldColumn>
                <StyledFieldColumnTitle>Licence Type</StyledFieldColumnTitle>
                <StyledFieldColumnValue> {applicationForm.licenceType && handleListValue(applicationForm.licenceType, licenceTypes).name}  </StyledFieldColumnValue>
              </StyledFieldColumn>

              <StyledFieldColumn>
                <StyledFieldColumnTitle>Area</StyledFieldColumnTitle>
                <StyledFieldColumnValue>  {applicationForm.area_id &&  handleListValue(applicationForm.area_id, areas).long_desc} </StyledFieldColumnValue>
              </StyledFieldColumn>

            </StyledFieldsDoubleColumnAccordionContainer>

            {/* Questions */}
            <StyledFieldsSingleColumnContainer>

              <StyledFieldColumn>
                <StyledFieldColumnTitle>Premises Owner</StyledFieldColumnTitle>
                <StyledFieldColumnValue>  {applicationForm.premises_owner_id &&  handleListValue(  applicationForm.premises_owner_id, premisesOwners ).name}  </StyledFieldColumnValue>
              </StyledFieldColumn>

              <StyledFieldColumn>
                <StyledFieldColumnTitle>Business Land</StyledFieldColumnTitle>
                <StyledFieldColumnValue>  {applicationForm.business_land_id &&  handleListValue(  applicationForm.business_land_id, businessLands  ).name} </StyledFieldColumnValue>
              </StyledFieldColumn>

              <StyledFieldColumn>
                <StyledFieldColumnTitle>  Business Premises </StyledFieldColumnTitle>
                <StyledFieldColumnValue>  {applicationForm.business_premises &&  handleListValue(  applicationForm.business_premises,  charYesNoType  ).name} </StyledFieldColumnValue>
              </StyledFieldColumn>

            </StyledFieldsSingleColumnContainer>

            <StyledAccordionContainerStatus>
                  <StyledCheckboxField id={'Accordion1'}   name={'Accordion1'}  defaultChecked={false}  label={'Reviewed'} onChange={()=>handleAccodion(0)}/>
              </StyledAccordionContainerStatus>

          </Accordion>


           {/* Advertising fee payment */}
           <Accordion title={  <StyledTitleAccordion variant="h4">  Advertising fee payment </StyledTitleAccordion>  }   subTitle={ accordionItems[1] ? 'Reviewed' : 'Pending'}>
              <StyledFieldsSingleColumnContainer>
                <StyledFieldColumn>
                  <StyledFieldColumnTitle>Receipt Number   </StyledFieldColumnTitle>
                  <StyledFieldColumnValue>  {applicationForm?.number_receipt } </StyledFieldColumnValue>
                </StyledFieldColumn>
              </StyledFieldsSingleColumnContainer>
              <StyledAccordionContainerStatus>
                  <StyledCheckboxField id={'Accordion2'}   name={'Accordion2'}  defaultChecked={false}  label={'Reviewed'} onChange={()=>handleAccodion(1)} />
              </StyledAccordionContainerStatus>
            </Accordion>


          {/* Required documents Accordion. Only show after documentation is submitted */}
          <Accordion title={  <StyledTitleAccordion variant="h4">  Uploaded documents </StyledTitleAccordion>  }   subTitle={ accordionItems[2] ? 'Reviewed' : 'Pending'} >
              {promiseGetPrivateDocumentTrackingInformation ? ( <StyledAccordionActivityIndicator />   ) : ( '' )}
              <StyledFieldsSingleColumnContainer>

                  <StyledFieldRowSingleColumn>
                    <StyledFieldColumnValue>Affidavit format</StyledFieldColumnValue>
                    <StyledDownloadContainer onClick={() => handleGetPrivateDocumentView( applicationForm?.affidavit?.name  ) }>
                    { applicationForm?.affidavit?.name ?    <IconDownload /> : <IconCancel />  }
                    </StyledDownloadContainer>
                  </StyledFieldRowSingleColumn>

                  <StyledFieldRowSingleColumn>
                    <StyledFieldColumnValue> Police report  format</StyledFieldColumnValue>
                    <StyledDownloadContainer onClick={() =>  handleGetPrivateDocumentView(  applicationForm?.police_report?.name ) } >
                     { applicationForm?.police_report?.name ?    <IconDownload /> : <IconCancel />  }
                    </StyledDownloadContainer>
                  </StyledFieldRowSingleColumn>

                  <StyledFieldRowSingleColumn>
                    <StyledFieldColumnValue> Health report format</StyledFieldColumnValue>
                    <StyledDownloadContainer   onClick={() =>  handleGetPrivateDocumentView(  applicationForm?.health_report?.name ) } >
                    { applicationForm?.health_report?.name ?    <IconDownload /> : <IconCancel />  }
                    </StyledDownloadContainer>
                  </StyledFieldRowSingleColumn>

                  <StyledFieldRowSingleColumn>
                    <StyledFieldColumnValue> Copy of the Expired/Expiring to existing license due for renewal format</StyledFieldColumnValue>
                    <StyledDownloadContainer   onClick={() =>  handleGetPrivateDocumentView(  applicationForm?.license_renewal?.name ) } >
                    { applicationForm?.license_renewal?.name ?    <IconDownload /> : <IconCancel />  }
                    </StyledDownloadContainer>
                  </StyledFieldRowSingleColumn>

              </StyledFieldsSingleColumnContainer>

              <StyledAccordionContainerStatus>
                  <StyledCheckboxField id={'Accordion3'}   name={'Accordion3'}  defaultChecked={false}  label={'Reviewed'}  onChange={()=>handleAccodion(2)} />
              </StyledAccordionContainerStatus>

            </Accordion>


            {/* comment history */}
          <Accordion title={  <StyledTitleAccordion variant="h4"> Comment history </StyledTitleAccordion>  } >
              <StyledFieldsSingleColumnContainer>

              {listOfComments?.length !== 0 && _.map(listOfComments, (comment, key) => {
                return (
                  <StyledFieldRowSingleColumn key={key}  line={'bottom'} >
                    <StyledFieldColumnValue> 
                            {comment.comment}   <br />
                            <small>{handleNotificationTime(comment.commentedAt)} - {`${comment.commentBy.name[0]}. ${comment.commentBy.surname}`} ({handleUserRoleType(comment.commentBy.roleId)}) </small>
                    </StyledFieldColumnValue>
                  </StyledFieldRowSingleColumn>
                  );
                })}
              </StyledFieldsSingleColumnContainer>

            </Accordion>

      
        </StyledAccordionContainer>

        <StyledButtonContainer>
            <StyledButton 
                  color={'secondary'} 
                  variant='outlined' 
                  fullWidth={false}  
                  sx={{  fontSize: '16px',  lineHeight: '22px'  }}
                  onClick={() => { handleModalReject() }} 
            > Reject </StyledButton>
            <StyledButton 
                fullWidth={false}  
                sx={{  fontSize: '16px',  lineHeight: '22px'  }}
                disabled={ !accordionItems[3] }
                color="primary"
                colorLoading={'#FFFFFF'}
                onClick={() => { handleModalApproved() }} 
            > Approve </StyledButton>
        </StyledButtonContainer> 
        { /*onClick={handleSubmit(onSubmit)}  promiseloading={promiseGetApplicationFiles} */ }

      </StyledApplicationRenewTrackingInformation>



      <Modal color={'#CE1F13'}  type={'child'}  showModal={modalStateReject.show}   onClose={handleModalReject} >
        <StyledTitleModal variant={'h2'} color={'#CE1F13'}> License renewal is about to be rejected </StyledTitleModal>

        <StyledSubtitleModal variant={'body1'}>  About this application </StyledSubtitleModal>

        <StyledChildContainerModal2>
          <StyledTextAreaField
            id={'textAreaComments'}
            label={'This application is not accepted because:'}
            name={'textAreaComments'}
            placeholder={'Write your comments here.'}
            control={controlComments}
            error={!!errorsComments.textAreaComments}
            helperText={errorsComments?.textAreaComments?.message}
            multiline
          />

          <StyledButtonContainerModal>
            <StyledButtonModal color={'secondary'} variant='outlined' fullWidth={false}  sx={{  fontSize: '16px',  lineHeight: '22px'  }} onClick={() => { handleModalReject() }} > Cancel </StyledButtonModal>
            <StyledButtonModal  color={'error'} fullWidth={false}  sx={{  fontSize: '16px',  lineHeight: '22px'  }}  
              disabled={!isValidComments} promiseLoading={promiseRejectApplication}  onClick={() => {  !promiseRejectApplication && onSubmitReject(getValuesComment()); }}>  Reject </StyledButtonModal>
          </StyledButtonContainerModal>

        </StyledChildContainerModal2>
      </Modal>



      <Modal color={'#548C5C'}  type={'child'}  showModal={modalStateApproved.show}   onClose={handleModalApproved}    >
        <StyledTitleModal variant={'h2'} color={'#548C5C'}> License renewal documentation is about to be approved </StyledTitleModal>

        <StyledSubtitleModal variant={'body1'}>  About this application </StyledSubtitleModal>

        <StyledChildContainerModal>
          <StyledTextAreaField
              id={'textAreaCommentsApp'}
              label={'Comments: (optional)'}
              name={'textAreaCommentsApp'}
              placeholder={'Write your comments here.'}
              control={controlCommentsApp}
              error={!!errorsCommentsApp.textAreaCommentsApp}
              helperText={errorsCommentsApp?.textAreaCommentsApp?.message}
              multiline
            />

          <StyledButtonContainerModal>
            <StyledButtonModal color={'secondary'} variant='outlined' fullWidth={false}  sx={{  fontSize: '16px',  lineHeight: '22px'  }} onClick={() => { handleModalApproved() }} > Cancel </StyledButtonModal>
            <StyledButtonModal  color={'success'} fullWidth={false}  sx={{  fontSize: '16px',  lineHeight: '22px'  }}  
            disabled={!isValidCommentsApp} promiseLoading={promiseApprovedApplication}  onClick={() => {  !promiseApprovedApplication && onSubmitApproved(getValuesCommentApp()); }} >  Approve  </StyledButtonModal>
          </StyledButtonContainerModal>

        </StyledChildContainerModal>
      </Modal>

    </Suspense>
  );
};

export default ApplicationRenewTrackingInformation;
