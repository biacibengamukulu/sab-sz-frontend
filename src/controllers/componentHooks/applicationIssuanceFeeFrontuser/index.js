import useComponentHooks from '..';
import useApi from '../../../api';
import useHelpers from '../../../helpers';
import useModels from '../../../models';
import _ from 'lodash';

const useApplicationIssuanceFeeFrontUser = (
  getValuesProofOfPayment,
  setValueProofOfPayment
) => {
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const {
    useNavigation,
    usePromises,
    useBase64ToBlobUrl,
    useDateFormatter,
    useFileManager,
  } = useQuickFunctions();
  const { handleFileNameExtension } = useFileManager();
  const { navigateTo, goBack } = useNavigation();
  const { promiseInProgressArea: promiseApprovePayment } =
    usePromises('approvePayment');
  const { promiseInProgressArea: promiseGrantApplication } =
    usePromises('grantApplication');

  const { promiseInProgressArea: promiseCancelApplication } =
    usePromises('cancelApplication');
  const {
    promiseInProgressArea: promiseGetPrivateDocumentTrackingInformation,
  } = usePromises('getPrivateDocumentTrackingInformation');
  const { promiseInProgressArea: promiseGetIssuanceFeeMTN } =
    usePromises('getIssuanceFeeMTN');

  // Api
  const { useActions } = useApi();
  const {
    dispatch,
    useApplicationFormActions,
    useApplicationReviewActions,
    usePrivateDocumentsActions,
  } = useActions();
  const {
    actResetFieldApplicationForm,
    actSubmitApplicationFormStep,
    actSaveDraftIssuanceFeePayment,
    // actGetDraftIssuanceFeePayment,
  } = useApplicationFormActions();
  const { actGetIssuanceFeeMTN, actApprovePayment, actGrantApplication } =
    useApplicationReviewActions();
  const { actGetPrivateDocumentTrackingInformation } =
    usePrivateDocumentsActions();

  // Models
  const { useSelectors } = useModels();
  const { useSelector, useApplicationFormSelectors } = useSelectors();
  const { applicationFormSelector, applicationFormHelpDataSelector } =
    useApplicationFormSelectors();

  const { applicationForm } = useSelector(applicationFormSelector);
  const { licenceTypes, phoneIndicators, natureOfLicences } = useSelector(
    applicationFormHelpDataSelector
  );

  // hooks
  const { useModal } = useComponentHooks();
  const {
    modalState: modalStateIssuanceFeeSubmit,
    handleShowModal: handleShowModalIssuanceFeeSubmit,
  } = useModal();

  // React
  // const [proofOfPaymentSubmittedBefore, setProofOfPaymentSubmittedBefore] =
  //   useState('');

  const fileTypesPdf = ['application/pdf'];

  /**Handlers */
  // handler: get value from id
  const handleListValue = (id, list) => {
    const value = _.find(list, (listRow) => listRow.id === id);
    return value ? value : '';
  };
  // Handlers: Wizard

  // Handlers: Date
  const handleDateFormat = (dateOld) => {
    const { finalDateFormat } = useDateFormatter(dateOld);
    return finalDateFormat;
  };

  // Handlers: Phone field
  const onChangeInputFieldPhone = (inputPhone, country, id) => {
    const fieldId = id.slice(0, id.length - 'Visual'.length);
    setValueProofOfPayment(fieldId, inputPhone, { shouldValidate: true });
  };

  const handleIndicative = (choice, phone) => {
    const indicativeCode = choice.phoneIndicator
      ? choice.phoneIndicator.replace(/\D/g, '')
      : '268';
    const finalPhone = indicativeCode + phone;
    return finalPhone;
  };
  const defaultIndicative = (choices) => {
    const defaultValue = _.find(
      choices,
      (currentIndicative) => currentIndicative.phoneIndicator === '+268'
    );
    return defaultValue;
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

  const onChangeFilePdf = ({
    event,
    remove,
    reset,
    id,
    handleResetReduxState,
  }) => {
    event.preventDefault();
    if (event.target.files.length > 0) {
      const { type } = event.target.files[0];
      if (!fileTypesPdf.some((s) => type.includes(s))) {
        alert('invalid document type');
        remove(reset, id, handleResetReduxState);
      } else {
        if (event.target.files[0].size > 2000000) {
          alert('Document too large, please try again with 2MB or less');
          remove(reset, id, handleResetReduxState);
        }
      }
    }
  };

  const handleResetFileState = (fieldId) => {
    dispatch(actResetFieldApplicationForm({ fieldName: fieldId, formStep: 5 }));
  };

  const handleSaveDraftFile = (fieldId, data) => {
    let dataFileDraft = {};
    dataFileDraft[`${fieldId}`] = data;
    dispatch(actSubmitApplicationFormStep({ data: dataFileDraft, step: 5 }));
  };

  // Handlers: Modals

  // Modal Final submit success
  const handleCloseModalIssuanceFeeSubmitSuccess = () => {
    handleShowModalIssuanceFeeSubmit();
    navigateTo(`/applications`);
  };
  const handleShowModalIssuanceFeePaymentAfterSuccess = () => {
    handleShowModalIssuanceFeeSubmit('Success!', 'Please go collect your License at the Ministry of Commerce, Liquor Section.');
  };

  const handleShowModalIssuanceFeeDraftAfterSuccess = () => {
    handleShowModalIssuanceFeeSubmit(
      'Issuance fee draft saved successfully!',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare odio sit amet est accumsan hendrerit. Morbi maximus aliquam porta. Vivamus ornare ac lectus ut euismod. Duis congue sed erat ac accumsan. Duis odio ligula, cursus vitae ornare eget.'
    );
  };

  // Handlers: grant application
  const handleGrantApplicationAfterPaymentApprove = () => {
    dispatch(
      actGrantApplication(
        applicationForm.id,
        handleShowModalIssuanceFeePaymentAfterSuccess
      )
    );
  };

  // On submit for "Submit" button
  const onSubmit = (data) => {
    const dataToSend = {
      applicationId: applicationForm.id,
      data: {
        isAdvertising: 0,
        receiptNumber: data.receiptNumber,
      },
    };

    dispatch(
      actApprovePayment(dataToSend, handleGrantApplicationAfterPaymentApprove)
    );
  };

  // On submit for "Submit" button
  const onSubmitDraft = (data) => {
    const dataToSend = {
      applicationId: applicationForm.id,
      issuanceProofOfPayment: data.issueProofOfPayment,
    };
    dispatch(
      actSaveDraftIssuanceFeePayment(
        dataToSend,
        handleShowModalIssuanceFeeDraftAfterSuccess
      )
    );
  };

  // const handleSaveIssuanceDraft = (document) => {
  //   if (document.data) {
  //     setValueProofOfPayment(
  //       'issueProofOfPayment',
  //       handleFileNameExtension({
  //         name: document.url,
  //         data: document.data,
  //       })
  //     );
  //     setValueProofOfPayment('typeOfPaymentFifthStepPdf', true);
  //   }
  // };

  // useEffect(() => {
  //   setProofOfPaymentSubmittedBefore(applicationForm.issueProofOfPayment);

  //   applicationForm.status.id === 10 ||
  //     (applicationForm.status.id === 13 &&
  //       dispatch(
  //         actGetDraftIssuanceFeePayment(applicationForm.id, (data) => {
  //           handleSaveIssuanceDraft(data);
  //         })
  //       ));
  // }, []);
  return {
    promiseApprovePayment,
    promiseGrantApplication,
    promiseCancelApplication,
    promiseGetPrivateDocumentTrackingInformation,
    promiseGetIssuanceFeeMTN,

    licenceTypes,
    natureOfLicences,
    fileTypesPdf,

    handleListValue,
    handleDateFormat,

    // proofOfPaymentSubmittedBefore,
    handleGetPrivateDocumentView,
    handleGetIssuanceFeeMtn,

    handleFileNameExtension,
    onChangeFilePdf,
    handleResetFileState,
    handleSaveDraftFile,

    defaultIndicative,
    onChangeInputFieldPhone,
    handleIndicative,
    phoneIndicators,

    onSubmit,
    onSubmitDraft,
    applicationForm,
    // applicationInfo,

    modalStateIssuanceFeeSubmit,
    handleCloseModalIssuanceFeeSubmitSuccess,

    goBack,
  };
};

export default useApplicationIssuanceFeeFrontUser;
