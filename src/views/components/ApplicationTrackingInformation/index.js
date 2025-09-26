import React, { Suspense } from 'react';
import useComponents from '..';
import useAssets from '../../../assets';
import useControllers from '../../../controllers';
import {
  StyledApplicationTrackInformationSection,
  StyledCommentsContainer,
  StyledCommentsInnerContainer,
  StyledCommentTitle,
  StyledCommentDescription,
  StyledButtonEditApplication,
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
} from './ApplicationTrackingInformation.styles';

const ApplicationTrackingInformation = () => {
  // Assest
  const { useIcons } = useAssets();
  const { iconWarning: IconWarning, iconOpenedEye: IconOpenedEye } = useIcons();

  // Components
  const { ActivityIndicator, Accordion } = useComponents();
  // Hooks
  const { useComponentHooks } = useControllers();
  const { useApplicationTrackingInformation } = useComponentHooks();

  const {
    promiseGetPrivateDocumentTrackingInformation,
    profile,

    licenceTypes,
    businessRelationships,
    natureOfLicences,
    areas,
    businessPropertys,
    offices,
    premisesOwners,
    businessLands,
    charYesNoType,
    // typeOfRegistration,
    // individualBusinessTypeState,

    handleListValue,

    applicationForm,

    handleCommentTitle,

    handleRedirectToApplicationForm,

    handleGetPrivateDocumentView,
  } = useApplicationTrackingInformation();

  return (
    <Suspense fallback={<ActivityIndicator />}>
      <StyledApplicationTrackInformationSection>
        {/* comment in request for changes, payment fail and Rejected
      Show it for frontuser, admin and administrator */}
        {applicationForm.requestForChangesComment?.comment &&
          (applicationForm.status.id === 7 ||
            applicationForm.status.id === 9 ||
            applicationForm.status.id === 13 ||
            applicationForm.status.id === 15) &&
          profile.roleType.id !== 2 && (
            <StyledCommentsContainer>
              <StyledCommentsInnerContainer>
                <StyledCommentTitle>
                  <IconWarning size={1.2} />
                  {handleCommentTitle()}
                </StyledCommentTitle>
                <StyledCommentDescription>
                  {applicationForm.requestForChangesComment.comment}
                </StyledCommentDescription>
                {(applicationForm.status.id === 7 ||
                  applicationForm.status.id === 15) &&
                  profile.roleType.roleType === 'frontUser' && (
                    <StyledButtonEditApplication
                      onClick={handleRedirectToApplicationForm}
                      color={'error'}
                    >
                      Edit application
                    </StyledButtonEditApplication>
                  )}
              </StyledCommentsInnerContainer>
            </StyledCommentsContainer>
          )}

        <StyledTitleTrackingInfo variant="h3">
          Tracking Information
        </StyledTitleTrackingInfo>
        <StyledAccordionContainer>
          {/* Personal information */}
          <Accordion
            title={
              <StyledTitleAccordion variant="h4">
                Personal Information
              </StyledTitleAccordion>
            }
          >
            <StyledFieldsDoubleColumnAccordionContainer>
              <StyledFieldColumn>
                <StyledFieldColumnTitle>
                  Personal Identification Number
                </StyledFieldColumnTitle>
                <StyledFieldColumnValue>
                  {applicationForm.personal_identification_number &&
                    applicationForm.personal_identification_number}
                </StyledFieldColumnValue>
              </StyledFieldColumn>
              <StyledFieldColumn>
                <StyledFieldColumnTitle>Names</StyledFieldColumnTitle>
                <StyledFieldColumnValue>
                  {applicationForm.names && applicationForm.names}
                </StyledFieldColumnValue>
              </StyledFieldColumn>
              <StyledFieldColumn>
                <StyledFieldColumnTitle>Surnames</StyledFieldColumnTitle>
                <StyledFieldColumnValue>
                  {applicationForm.surnames && applicationForm.surnames}
                </StyledFieldColumnValue>
              </StyledFieldColumn>
              <StyledFieldColumn>
                <StyledFieldColumnTitle>Licence Type</StyledFieldColumnTitle>
                <StyledFieldColumnValue>
                  {applicationForm.licenceType &&
                    handleListValue(applicationForm.licenceType, licenceTypes)
                      .name}
                </StyledFieldColumnValue>
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
                <StyledFieldColumnTitle>Area</StyledFieldColumnTitle>
                <StyledFieldColumnValue>
                  {applicationForm.area_id &&
                    handleListValue(applicationForm.area_id, areas).long_desc}
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
                <StyledFieldColumnTitle>Business Office</StyledFieldColumnTitle>
                <StyledFieldColumnValue>
                  {applicationForm.office_id &&
                    handleListValue(applicationForm.office_id, offices)
                      .shrot_desc}
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

              {applicationForm.company_number && (
                <StyledFieldColumn>
                  <StyledFieldColumnTitle>
                    Company Number
                  </StyledFieldColumnTitle>
                  <StyledFieldColumnValue>
                    {applicationForm.company_number}
                  </StyledFieldColumnValue>
                </StyledFieldColumn>
              )}

              <StyledFieldColumn>
                <StyledFieldColumnTitle>
                  Residential address
                </StyledFieldColumnTitle>
                <StyledFieldColumnValue>
                  {applicationForm.residential_address &&
                    applicationForm.residential_address}
                </StyledFieldColumnValue>
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
            </StyledFieldsDoubleColumnAccordionContainer>

            {/* Questions */}
            <StyledFieldsSingleColumnContainer>
              <StyledFieldColumn>
                <StyledFieldColumnTitle>Premises Owner</StyledFieldColumnTitle>
                <StyledFieldColumnValue>
                  {applicationForm.premises_owner_id &&
                    handleListValue(
                      applicationForm.premises_owner_id,
                      premisesOwners
                    ).name}
                </StyledFieldColumnValue>
              </StyledFieldColumn>

              <StyledFieldColumn>
                <StyledFieldColumnTitle>Business Land</StyledFieldColumnTitle>
                <StyledFieldColumnValue>
                  {applicationForm.business_land_id &&
                    handleListValue(
                      applicationForm.business_land_id,
                      businessLands
                    ).name}
                </StyledFieldColumnValue>
              </StyledFieldColumn>

              <StyledFieldColumn>
                <StyledFieldColumnTitle>
                  Business Premises
                </StyledFieldColumnTitle>
                <StyledFieldColumnValue>
                  {applicationForm.business_premises &&
                    handleListValue(
                      applicationForm.business_premises,
                      charYesNoType
                    ).name}
                </StyledFieldColumnValue>
              </StyledFieldColumn>
            </StyledFieldsSingleColumnContainer>
          </Accordion>

          {/* Required documents Accordion */}
          {/* Only show after documentation is submitted */}
          {applicationForm.status.id > 2 && applicationForm.status.id < 14 && (
            <Accordion
              title={
                <StyledTitleAccordion variant="h4">
                  Required documents
                </StyledTitleAccordion>
              }
            >
              {promiseGetPrivateDocumentTrackingInformation ? (
                <StyledAccordionActivityIndicator />
              ) : (
                ''
              )}
              <StyledFieldsSingleColumnContainer>
                {/*Common documents for all Business Relationship type */}
                {/* (Also for: Business Relationship - INDIVIDUAL) */}
                <>
                  {/* {applicationForm.applicationType?.id === 2 &&
                  applicationForm.previous_application?.name ? (
                    <StyledFieldRowSingleColumn>
                      <StyledFieldColumnValue>
                        Current Licence
                      </StyledFieldColumnValue>

                      <StyledDownloadContainer
                        onClick={() =>
                          handleGetPrivateDocumentView(
                            applicationForm.previous_application.name
                          )
                        }
                      >
                        <IconOpenedEye size={1.5} />
                      </StyledDownloadContainer>
                    </StyledFieldRowSingleColumn>
                  ) : (
                    <></>
                  )}

                  {individualBusinessTypeState !== 0 && (
                    <StyledFieldRowSingleColumn>
                      <StyledFieldColumnValue>
                        National Identity Card
                      </StyledFieldColumnValue>

                      <StyledDownloadContainer
                        onClick={() =>
                          handleGetPrivateDocumentView(
                            applicationForm.identity_card.name
                          )
                        }
                      >
                        <IconOpenedEye size={1.5} />
                      </StyledDownloadContainer>
                    </StyledFieldRowSingleColumn>
                  )}

                  {(individualBusinessTypeState == 2 ||
                    individualBusinessTypeState == 4) && (
                    <StyledFieldRowSingleColumn>
                      <StyledFieldColumnValue>
                        Lease Agreement
                      </StyledFieldColumnValue>
                      <StyledDownloadContainer
                        onClick={() =>
                          handleGetPrivateDocumentView(
                            applicationForm.lease_agreement.name
                          )
                        }
                      >
                        <IconOpenedEye size={1.5} />
                      </StyledDownloadContainer>
                    </StyledFieldRowSingleColumn>
                  )}

                  <StyledFieldRowSingleColumn>
                    <StyledFieldColumnValue>
                      Leased Business Premise
                    </StyledFieldColumnValue>
                    <StyledDownloadContainer
                      onClick={() =>
                        handleGetPrivateDocumentView(
                          applicationForm.leased_business_premise.name
                        )
                      }
                    >
                      <IconOpenedEye size={1.5} />
                    </StyledDownloadContainer>
                  </StyledFieldRowSingleColumn>

                  {(individualBusinessTypeState == 1 ||
                    individualBusinessTypeState == 3) && (
                    <StyledFieldRowSingleColumn>
                      <StyledFieldColumnValue>
                        Title Deed
                      </StyledFieldColumnValue>
                      <StyledDownloadContainer
                        onClick={() =>
                          handleGetPrivateDocumentView(
                            applicationForm.title_deed.name
                          )
                        }
                      >
                        <IconOpenedEye size={1.5} />
                      </StyledDownloadContainer>
                    </StyledFieldRowSingleColumn>
                  )}

                  {(individualBusinessTypeState == 3 ||
                    individualBusinessTypeState == 4) && (
                    <StyledFieldRowSingleColumn>
                      <StyledFieldColumnValue>
                        Permit No.
                      </StyledFieldColumnValue>
                      <StyledDownloadContainer
                        onClick={() =>
                          handleGetPrivateDocumentView(
                            applicationForm.permit_no.name
                          )
                        }
                      >
                        <IconOpenedEye size={1.5} />
                      </StyledDownloadContainer>
                    </StyledFieldRowSingleColumn>
                  )}

                  <StyledFieldRowSingleColumn>
                    <StyledFieldColumnValue>Affidavit</StyledFieldColumnValue>
                    <StyledDownloadContainer
                      onClick={() =>
                        handleGetPrivateDocumentView(
                          applicationForm.affidavit.name
                        )
                      }
                    >
                      <IconOpenedEye size={1.5} />
                    </StyledDownloadContainer>
                  </StyledFieldRowSingleColumn> */}

                  {/* IN THE CASE OF SELECT RURAL BUSINESS PROPERTY */}
                  {applicationForm.business_property_id == 3 && (
                    <StyledFieldRowSingleColumn>
                      <StyledFieldColumnValue>
                        { "King's Consent-Liquor Issue" }  
                      </StyledFieldColumnValue>

                      <StyledDownloadContainer
                        onClick={() =>
                          handleGetPrivateDocumentView(
                            applicationForm.kings_consent_liquor_issue.name
                          )
                        }
                      >
                        <IconOpenedEye size={1.5} />
                      </StyledDownloadContainer>
                    </StyledFieldRowSingleColumn>
                  )}
                  {/* IN THE CASE OF SELECT RURAL BUSINESS PROPERTY */}

                  <StyledFieldRowSingleColumn>
                    <StyledFieldColumnValue>
                      { "Board's inspection report" } 
                    </StyledFieldColumnValue>

                    <StyledDownloadContainer
                      onClick={() =>
                        handleGetPrivateDocumentView(
                          applicationForm.boards_inspection_report.name
                        )
                      }
                    >
                      <IconOpenedEye size={1.5} />
                    </StyledDownloadContainer>
                  </StyledFieldRowSingleColumn>

                  <StyledFieldRowSingleColumn>
                    <StyledFieldColumnValue>
                      Police Report 
                    </StyledFieldColumnValue>

                    <StyledDownloadContainer
                      onClick={() =>
                        handleGetPrivateDocumentView(
                          applicationForm.police_report.name
                        )
                      }
                    >
                      <IconOpenedEye size={1.5} />
                    </StyledDownloadContainer>
                  </StyledFieldRowSingleColumn>

                  <StyledFieldRowSingleColumn>
                    <StyledFieldColumnValue>
                      Health Report 
                    </StyledFieldColumnValue>

                    <StyledDownloadContainer
                      onClick={() =>
                        handleGetPrivateDocumentView(
                          applicationForm.health_report.name
                        )
                      }
                    >
                      <IconOpenedEye size={1.5} />
                    </StyledDownloadContainer>
                  </StyledFieldRowSingleColumn>

                  {applicationForm.business_property_id != 3 && (
                    <StyledFieldRowSingleColumn>
                      <StyledFieldColumnValue>
                        Lease Agreement / Title deed
                      </StyledFieldColumnValue>
                      <StyledDownloadContainer
                        onClick={() =>
                          handleGetPrivateDocumentView(
                            applicationForm.lease_agreement_title_deed.name
                          )
                        }
                      >
                        <IconOpenedEye size={1.5} />
                      </StyledDownloadContainer>
                    </StyledFieldRowSingleColumn>
                  )}

                  <StyledFieldRowSingleColumn>
                    <StyledFieldColumnValue>
                      Plans drawn to scale indicating inside layout
                    </StyledFieldColumnValue>

                    <StyledDownloadContainer
                      onClick={() =>
                        handleGetPrivateDocumentView(
                          applicationForm.plans_drawn.name
                        )
                      }
                    >
                      <IconOpenedEye size={1.5} />
                    </StyledDownloadContainer>
                  </StyledFieldRowSingleColumn>

                  <StyledFieldRowSingleColumn>
                    <StyledFieldColumnValue>
                      Bank Statement
                    </StyledFieldColumnValue>

                    <StyledDownloadContainer
                      onClick={() =>
                        handleGetPrivateDocumentView(
                          applicationForm.bank_statement.name
                        )
                      }
                    >
                      <IconOpenedEye size={1.5} />
                    </StyledDownloadContainer>
                  </StyledFieldRowSingleColumn>

                  <StyledFieldRowSingleColumn>
                    <StyledFieldColumnValue>
                      National Identity Card
                    </StyledFieldColumnValue>

                    <StyledDownloadContainer
                      onClick={() =>
                        handleGetPrivateDocumentView(
                          applicationForm.identity_card.name
                        )
                      }
                    >
                      <IconOpenedEye size={1.5} />
                    </StyledDownloadContainer>
                  </StyledFieldRowSingleColumn>

                  {applicationForm.businessRelationship?.id == 3 && (
                    <>
                      <StyledFieldRowSingleColumn>
                        <StyledFieldColumnValue>
                          Certificate of Incorporation
                        </StyledFieldColumnValue>
                        <StyledDownloadContainer
                          onClick={() =>
                            handleGetPrivateDocumentView(
                              applicationForm.certificate_of_incorporation.name
                            )
                          }
                        >
                          <IconOpenedEye size={1.5} />
                        </StyledDownloadContainer>
                      </StyledFieldRowSingleColumn>

                      <StyledFieldRowSingleColumn>
                        <StyledFieldColumnValue>Company Resolution</StyledFieldColumnValue>
                        <StyledDownloadContainer
                          onClick={() =>
                            handleGetPrivateDocumentView(
                              applicationForm.company_resolution.name
                            )
                          }
                        >
                          <IconOpenedEye size={1.5} />
                        </StyledDownloadContainer>
                      </StyledFieldRowSingleColumn>

                      <StyledFieldRowSingleColumn>
                        <StyledFieldColumnValue>
                          Memorandum and Articles of Association
                        </StyledFieldColumnValue>
                        <StyledDownloadContainer
                          onClick={() =>
                            handleGetPrivateDocumentView(
                              applicationForm
                                .memorandum_and_articles_of_association.name
                            )
                          }
                        >
                          <IconOpenedEye size={1.5} />
                        </StyledDownloadContainer>
                      </StyledFieldRowSingleColumn>
                    </>
                  )}

                  <StyledFieldRowSingleColumn>
                    <StyledFieldColumnValue>
                      Trading Licence
                    </StyledFieldColumnValue>

                    <StyledDownloadContainer
                      onClick={() =>
                        handleGetPrivateDocumentView(
                          applicationForm.trading_licence.name
                        )
                      }
                    >
                      <IconOpenedEye size={1.5} />
                    </StyledDownloadContainer>
                  </StyledFieldRowSingleColumn>

                  {applicationForm.business_property_id != 3 && (
                    <StyledFieldRowSingleColumn>
                      <StyledFieldColumnValue>
                      { 'Temporary Resident permit (non-Swazi) or proof of citizenship' }
                      </StyledFieldColumnValue>

                      <StyledDownloadContainer
                        onClick={() =>
                          handleGetPrivateDocumentView(
                            applicationForm.temporary_resident_permit.name
                          )
                        }
                      >
                        <IconOpenedEye size={1.5} />
                      </StyledDownloadContainer>
                    </StyledFieldRowSingleColumn>  
                  )}

                  <StyledFieldRowSingleColumn>
                    <StyledFieldColumnValue>
                      Advert copy
                    </StyledFieldColumnValue>

                    <StyledDownloadContainer
                      onClick={() =>
                        handleGetPrivateDocumentView(
                          applicationForm.advert_copy.name
                        )
                      }
                    >
                      <IconOpenedEye size={1.5} />
                    </StyledDownloadContainer>
                  </StyledFieldRowSingleColumn>

                  <StyledFieldRowSingleColumn>
                    <StyledFieldColumnValue>Affidavit</StyledFieldColumnValue>
                    <StyledDownloadContainer
                      onClick={() =>
                        handleGetPrivateDocumentView(
                          applicationForm.affidavit.name
                        )
                      }
                    >
                      <IconOpenedEye size={1.5} />
                    </StyledDownloadContainer>
                  </StyledFieldRowSingleColumn>

                </>

                {/* Business Relationship - PARTNERSHIP */}
                {/* {applicationForm.businessRelationship?.id == 2 && (
                  <>
                    <StyledFieldRowSingleColumn>
                      <StyledFieldColumnValue>
                        Certificate of Partnership
                      </StyledFieldColumnValue>
                      <StyledDownloadContainer
                        onClick={() =>
                          handleGetPrivateDocumentView(
                            applicationForm.certificate_of_partnership.name
                          )
                        }
                      >
                        <IconOpenedEye size={1.5} />
                      </StyledDownloadContainer>
                    </StyledFieldRowSingleColumn>
                  </>
                )} */}

                {/* Business Relationship - COMPANY */}
                {/* {applicationForm.businessRelationship?.id == 3 && (
                  <>
                    <StyledFieldRowSingleColumn>
                      <StyledFieldColumnValue>
                        Certificate of Incorporation
                      </StyledFieldColumnValue>
                      <StyledDownloadContainer
                        onClick={() =>
                          handleGetPrivateDocumentView(
                            applicationForm.certificate_of_incorporation.name
                          )
                        }
                      >
                        <IconOpenedEye size={1.5} />
                      </StyledDownloadContainer>
                    </StyledFieldRowSingleColumn>

                    <StyledFieldRowSingleColumn>
                      <StyledFieldColumnValue>Form - J</StyledFieldColumnValue>
                      <StyledDownloadContainer
                        onClick={() =>
                          handleGetPrivateDocumentView(
                            applicationForm.form_j.name
                          )
                        }
                      >
                        <IconOpenedEye size={1.5} />
                      </StyledDownloadContainer>
                    </StyledFieldRowSingleColumn>

                    <StyledFieldRowSingleColumn>
                      <StyledFieldColumnValue>
                        Memorandum and Articles of Association
                      </StyledFieldColumnValue>
                      <StyledDownloadContainer
                        onClick={() =>
                          handleGetPrivateDocumentView(
                            applicationForm
                              .memorandum_and_articles_of_association.name
                          )
                        }
                      >
                        <IconOpenedEye size={1.5} />
                      </StyledDownloadContainer>
                    </StyledFieldRowSingleColumn>
                  </>
                )} */}
              </StyledFieldsSingleColumnContainer>
            </Accordion>
          )}

          {/* Proof of payment */}
          {/* <Accordion
            title={
              <StyledTitleAccordion variant="h4">
                Proof of payment (Advertising fee)
              </StyledTitleAccordion>
            }
          >
            {promiseGetPrivateDocumentTrackingInformation ||
            promiseGetAdvertisingFeeMTN ? (
              <StyledAccordionActivityIndicator />
            ) : (
              ''
            )}
            {applicationForm.typeOfPaymentSecondStep === 'pdf' ? (
              <StyledFieldsSingleColumnContainer>
                <StyledFieldRowSingleColumn>
                  <StyledFieldColumnValue>
                    Advertising fee payment file
                  </StyledFieldColumnValue>
                  <StyledDownloadContainer
                    onClick={() =>
                      handleGetPrivateDocumentView(
                        applicationForm.advertisingProofOfPayment.name
                      )
                    }
                  >
                    <IconOpenedEye size={1.5} />
                  </StyledDownloadContainer>
                </StyledFieldRowSingleColumn>
              </StyledFieldsSingleColumnContainer>
            ) : (
              <StyledFieldsSingleColumnContainer>
                <StyledFieldRowSingleColumn>
                  <StyledFieldColumnValue>
                    Advertising fee payment by MTN
                  </StyledFieldColumnValue>
                  <StyledDownloadContainer
                    onClick={() => handleGetAdvertisingFeeMtn()}
                  >
                    <IconOpenedEye size={1.5} />
                  </StyledDownloadContainer>
                </StyledFieldRowSingleColumn>
              </StyledFieldsSingleColumnContainer>
            )}
          </Accordion> */}
        </StyledAccordionContainer>
      </StyledApplicationTrackInformationSection>
    </Suspense>
  );
};

export default ApplicationTrackingInformation;
