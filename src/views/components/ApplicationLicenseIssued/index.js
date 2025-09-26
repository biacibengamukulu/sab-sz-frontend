import React, { Suspense } from 'react';
import useComponents from '..';
import useControllers from '../../../controllers';
import {
  StyledApplicationLicenseIssuedSection,
  StyledSectionDescriptionContainer,
  StyledLicenseIssuedContainer,
  StyledFieldsIssuanceFeeInnerContainer,
  StyledFieldsContainerMultiple,
  StyledFieldColumn,
  StyledFieldColumnTitle,
  StyledFieldColumnValue,
  StyledSealContainer,
  // StyledButtonDownload,
} from './ApplicationLicenseIssued.styles';
// import useAssets from '../../../assets';

const ApplicationLicenseIssued = () => {
  const { ActivityIndicator, Modal } = useComponents();

  // Assets
  // const { useIcons } = useAssets();
  // const { iconSeal: IconSeal, iconDownload: IconDownload } = useIcons();

  // Helpers

  // Hooks
  const { useComponentHooks } = useControllers();
  const { useApplicationLicenseIssued } = useComponentHooks();

  // Yup validator

  const {
    // promiseGetPrivateDocumentTrackingInformation,
    // promiseGetIssuanceFeeMTN,
    // promiseGetLicensePdf,

    natureOfLicences,
    handleListValue,

    // handleGetLicensePdf,

    handleDateFormat,

    // handleGetPrivateDocumentView,
    // handleGetIssuanceFeeMtn,

    applicationForm,

    modalStateIssuanceFeeSubmit,
    handleCloseModalIssuanceFeeSubmitSuccess,
  } = useApplicationLicenseIssued();

  return (
    <Suspense fallback={<ActivityIndicator />}>
      <StyledApplicationLicenseIssuedSection>
        <StyledSectionDescriptionContainer>
          <StyledLicenseIssuedContainer>
            <StyledFieldsIssuanceFeeInnerContainer>
              <StyledFieldsContainerMultiple>
                <StyledFieldColumn>
                  <StyledFieldColumnTitle>
                    Licence nature
                  </StyledFieldColumnTitle>
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
                    Licensed to sell
                  </StyledFieldColumnTitle>
                  <StyledFieldColumnValue>
                    {applicationForm.licenseToSell
                      ? applicationForm.licenseToSell
                      : 'None'}
                  </StyledFieldColumnValue>
                </StyledFieldColumn>

                {/* {applicationForm.issuanceIssueDate ? (
                  <StyledFieldColumn>
                    <StyledFieldColumnTitle>
                      Date of issue
                    </StyledFieldColumnTitle>
                    <StyledFieldColumnValue>
                      {applicationForm.issuanceIssueDate
                        ? handleDateFormat(applicationForm.issuanceIssueDate)
                        : 'None'}
                    </StyledFieldColumnValue>
                  </StyledFieldColumn>
                ) : (
                  <StyledFieldColumn></StyledFieldColumn>
                )} */}
                <StyledFieldColumn>
                  <StyledFieldColumnTitle>
                    Prescribed fees
                  </StyledFieldColumnTitle>
                  <StyledFieldColumnValue>
                    {`E ${
                      applicationForm.issuancePrescribedFees ||
                      applicationForm.issuancePrescribedFees === 0
                        ? applicationForm.issuancePrescribedFees
                        : 'None'
                    }`}
                  </StyledFieldColumnValue>
                </StyledFieldColumn>
              </StyledFieldsContainerMultiple>

              <StyledFieldsContainerMultiple>
                <StyledFieldColumn>
                  <StyledFieldColumnTitle>
                    Payable on or before
                  </StyledFieldColumnTitle>
                  <StyledFieldColumnValue>
                    {applicationForm.issuanceFeeExpires
                      ? handleDateFormat(applicationForm.issuanceFeeExpires)
                      : 'None'}
                  </StyledFieldColumnValue>
                </StyledFieldColumn>
                <StyledFieldColumn></StyledFieldColumn>
              </StyledFieldsContainerMultiple>
            </StyledFieldsIssuanceFeeInnerContainer>
            <StyledSealContainer>
              {/* <StyledButtonDownload
                color={'secondary'}
                promiseLoading={promiseGetLicensePdf}
                colorLoading={'#FFFFFF'}
                onClick={
                  !promiseGetLicensePdf ? () => handleGetLicensePdf() : () => {}
                }
              >
                <IconDownload color={'#ffffff'} />
                Download PDF
              </StyledButtonDownload>
              <IconSeal /> */}
            </StyledSealContainer>
          </StyledLicenseIssuedContainer>
          {/* <>
            {applicationForm.typeOfPaymentFifthStep === 'pdf' &&
            applicationForm?.issueProofOfPayment?.name ? (
              <StyledProofOfPaymentContainer>
                <StyledFieldColumnTitle variant="body1">
                  Proof of Payment
                </StyledFieldColumnTitle>
                <StyledContainerIconViewContainer
                  onClick={
                    !promiseGetPrivateDocumentTrackingInformation &&
                    applicationForm?.issueProofOfPayment?.name
                      ? () =>
                          handleGetPrivateDocumentView(
                            applicationForm.issueProofOfPayment.name
                          )
                      : () => {}
                  }
                >
                  {promiseGetPrivateDocumentTrackingInformation ? (
                    <StyledCircularProgress />
                  ) : (
                    <IconOpenedEye size={1.5} />
                  )}
                </StyledContainerIconViewContainer>
              </StyledProofOfPaymentContainer>
            ) : (
              <StyledProofOfPaymentContainer>
                <StyledFieldColumnTitle variant="body1">
                  Proof of Payment
                </StyledFieldColumnTitle>
                <StyledContainerIconViewContainer
                  onClick={
                    !promiseGetIssuanceFeeMTN
                      ? () => handleGetIssuanceFeeMtn()
                      : () => {}
                  }
                >
                  {promiseGetIssuanceFeeMTN ? (
                    <StyledCircularProgress />
                  ) : (
                    <IconOpenedEye size={1.5} />
                  )}
                </StyledContainerIconViewContainer>
              </StyledProofOfPaymentContainer>
            )}
          </> */}
        </StyledSectionDescriptionContainer>
      </StyledApplicationLicenseIssuedSection>

      <Modal
        type={'success'}
        showModal={modalStateIssuanceFeeSubmit.show}
        onClose={handleCloseModalIssuanceFeeSubmitSuccess}
        title={modalStateIssuanceFeeSubmit.title}
        description={modalStateIssuanceFeeSubmit.description}
      />
    </Suspense>
  );
};

export default ApplicationLicenseIssued;
