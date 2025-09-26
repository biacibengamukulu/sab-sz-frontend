import { useEffect, useState } from 'react';
import useApi from '../../../api';
import useHelpers from '../../../helpers';
import useModels from '../../../models';
import useComponentHooks from '../../componentHooks';
import _ from 'lodash';

const useSignUp = (setValue) => {
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useNavigation, usePromises } = useQuickFunctions();
  const { navigateTo } = useNavigation();
  const { promiseInProgress } = usePromises();

  // Api
  const { useActions } = useApi();
  const { dispatch, useAuthActions, useUserActions } = useActions();
  const { actRegisterUser } = useAuthActions();
  const { actGetContactMethods } = useUserActions();

  // Models
  const { useSelectors } = useModels();
  const {
    useSelector,
    useAuthSelectors,
    useApplicationFormSelectors,
    useUserSelectors,
  } = useSelectors();
  const { applicationFormHelpDataSelector } = useApplicationFormSelectors();
  const { phoneIndicators: phoneIndicatorChoices } = useSelector(
    applicationFormHelpDataSelector
  );
  const { session } = useAuthSelectors();
  const { accessToken } = useSelector(session);
  const { userSelector } = useUserSelectors();
  const { userContactMethodsList } = useSelector(userSelector);
  const { useModal } = useComponentHooks();
  const { modalState, handleShowModal } = useModal();

  const [registerState, setRegisterState] = useState('error');

  const documentsType = [
    { value: 'ID', text: 'ID' },
    { value: 'PP', text: 'Passport' },
  ];
  useEffect(() => {
    dispatch(actGetContactMethods());
  }, []);
  useEffect(() => {
    accessToken && handleRedirectLogin();
  }, [accessToken]);
  const onChangeInputFieldPhone = (
    inputPhone,
    country,
    id,
    fieldIndicativeId
  ) => {
    const fieldId = id.slice(0, id.length - 'Visual'.length);
    const countryCode = country.countryCode.toUpperCase();
    const indicativeId = _.find(
      phoneIndicatorChoices,
      (currentIndicative) => currentIndicative.countryCode === countryCode
    ).id;
    setValue(fieldId, inputPhone, { shouldValidate: true });
    setValue(fieldIndicativeId, indicativeId);
  };
  const handleIndicative = (choice, phone) => {
    const indicativeCode = choice.phoneIndicator
      ? choice.phoneIndicator.replace(/\D/g, '')
      : '268';
    const finalPhone = indicativeCode + phone;
    return finalPhone;
  };
  const defaultIndicative = (choices) => {
    return _.find(
      choices,
      (currentIndicative) => currentIndicative.phoneIndicator === '+268'
    );
  };

  const handleRedirectLogin = () => navigateTo(`/login`);

  const handleCloseModal = () => {
    handleShowModal();
    handleRedirectLogin();
  };

  const handleSuccessRegister = () => {
    setRegisterState('success');
    handleShowModal(
      'Success!',
      'Check your email for a link to complete your signup!'
    );
  };

  const onSubmit = (data) => {
    const dataFrontUser = {
      ...data,
      roleId: 4,
    };
    delete dataFrontUser.phoneVisual;
    dispatch(actRegisterUser(dataFrontUser, handleSuccessRegister));
  };
  return {
    promiseInProgress,
    onSubmit,
    handleRedirectLogin,
    modalState,
    handleCloseModal,
    registerState,
    documentsType,
    phoneIndicatorChoices,
    onChangeInputFieldPhone,
    handleIndicative,
    defaultIndicative,
    userContactMethodsList,
  };
};

export default useSignUp;
