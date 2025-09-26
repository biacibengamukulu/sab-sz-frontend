import _ from 'lodash';
import useComponentHooks from '..';
import useApi from '../../../api';
import useHelpers from '../../../helpers';
import useModels from '../../../models';

const useApplicationLicenseIssued = () => {
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useNavigation, usePromises, useBase64ToBlobUrl, useDateFormatter } =
    useQuickFunctions();
  const { navigateTo } = useNavigation();

  const {
    promiseInProgressArea: promiseGetPrivateDocumentTrackingInformation,
  } = usePromises('getPrivateDocumentTrackingInformation');
  const { promiseInProgressArea: promiseGetIssuanceFeeMTN } =
    usePromises('getIssuanceFeeMTN');
  const { promiseInProgressArea: promiseGetLicensePdf } =
    usePromises('getLicensePdf');

  // Api
  const { useActions } = useApi();
  const {
    dispatch,
    useApplicationFormActions,
    useApplicationReviewActions,
    usePrivateDocumentsActions,
  } = useActions();

  const { actGetIssuanceFeeMTN } = useApplicationReviewActions();
  const { actGetPrivateDocumentTrackingInformation } =
    usePrivateDocumentsActions();
  const { actGetLicensePdf } = useApplicationFormActions();

  // Models
  const { useSelectors } = useModels();
  const { useSelector, useApplicationFormSelectors } = useSelectors();
  const { applicationFormSelector, applicationFormHelpDataSelector } =
    useApplicationFormSelectors();

  const { applicationForm } = useSelector(applicationFormSelector);
  const { licenceTypes, natureOfLicences } = useSelector(
    applicationFormHelpDataSelector
  );

  // hooks
  const { useModal } = useComponentHooks();
  const {
    modalState: modalStateIssuanceFeeSubmit,
    handleShowModal: handleShowModalIssuanceFeeSubmit,
  } = useModal();

  // React

  /**Handlers */
  // handler: get value from id
  const handleListValue = (id, list) => {
    const value = _.find(list, (listRow) => listRow.id === id);
    return value ? value : '';
  };
  // Handlers: get licence PDF
  const handleGetLicensePdfSuccess = (base64) => {
    const { url } = useBase64ToBlobUrl(base64);
    window.open(url);
  };

  const handleGetLicensePdf = () => {
    dispatch(actGetLicensePdf(applicationForm.id, handleGetLicensePdfSuccess));
  };

  // Handlers: Date
  const handleDateFormat = (dateOld) => {
    const { finalDateFormat } = useDateFormatter(dateOld);
    return finalDateFormat;
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

  const handleSetIssuanceFeeMtnPdf = (base64) => {
    const { url } = useBase64ToBlobUrl(base64);
    window.open(url);
  };

  const handleGetIssuanceFeeMtn = () => {
    dispatch(
      actGetIssuanceFeeMTN(applicationForm.id, handleSetIssuanceFeeMtnPdf)
    );
  };

  // Handlers: Modals

  // Modal Final submit success
  const handleCloseModalIssuanceFeeSubmitSuccess = () => {
    handleShowModalIssuanceFeeSubmit();
    navigateTo(`/applications`);
  };

  // On submit for "Submit" button

  return {
    promiseGetPrivateDocumentTrackingInformation,
    promiseGetIssuanceFeeMTN,
    promiseGetLicensePdf,

    licenceTypes,
    natureOfLicences,

    handleGetLicensePdf,
    handleListValue,

    handleDateFormat,

    handleGetPrivateDocumentView,
    handleGetIssuanceFeeMtn,

    applicationForm,

    modalStateIssuanceFeeSubmit,
    handleCloseModalIssuanceFeeSubmitSuccess,
  };
};

export default useApplicationLicenseIssued;
