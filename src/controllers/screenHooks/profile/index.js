import { useState, useRef, useEffect } from 'react';
import useApi from '../../../api';
import useHelpers from '../../../helpers';
import useModels from '../../../models';
import useComponentHooks from '../../componentHooks';
import _ from 'lodash';

const useProfile = (setValue) => {
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useNavigation, usePromises } = useQuickFunctions();
  const { navigateTo } = useNavigation();
  const { promiseInProgress } = usePromises();

  // Api
  const { useActions } = useApi();
  const { dispatch, useUserActions } = useActions();
  const { actUpdateUser, actGetContactMethods } = useUserActions();

  const { useSelectors } = useModels();
  const { useSelector, useUserSelectors, useApplicationFormSelectors } =
    useSelectors();
  const { applicationFormHelpDataSelector } = useApplicationFormSelectors();
  const { userSelector } = useUserSelectors();
  const { profile, userContactMethodsList } = useSelector(userSelector);
  const { phoneIndicators: phoneIndicatorChoices } = useSelector(
    applicationFormHelpDataSelector
  );

  const { useModal } = useComponentHooks();
  const { modalState, handleShowModal } = useModal();

  // react
  const inputFile = useRef();
  const [updateUserState, setUpdateUserState] = useState('error');
  const [imageProfile, setImageProfile] = useState('');
  const fileTypes = ['image/jpeg', 'image/png'];

  const documentsType = [
    { value: 'ID', text: 'ID' },
    { value: 'PP', text: 'Passport' },
  ];

  const [userProfileData, setUserProfileData] = useState({
    name: '',
    surname: '',
    image: '',
    roleId: '',
  });
  useEffect(() => {
    dispatch(actGetContactMethods());
  }, []);
  useEffect(() => {
    setUserProfileData({
      name: profile.name,
      surname: profile.surname,
      image: profile.image,
      email: profile.email,
      phone: profile.phone,
      registrationNumber: profile.registrationNumber,
      roleId: profile.roleType?.id,
      roleType: profile.roleType?.roleType,
    });
  }, [profile.name, profile.image, profile.roleType.id]);

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

  const handleRedirectChangePassword = () => navigateTo(`/change-password`);

  const handleCloseModal = () => {
    handleShowModal();
    window.location.reload();
  };

  const handleSuccessRegister = () => {
    setUpdateUserState('success');
    handleShowModal(
      'Profile Updated!',
      'Your profile has been updated successfully!'
    );
  };

  const onSubmit = (data) => {
    const dataUserUpdate = {
      ...data,
      roleId: userProfileData.roleId,
    };
    delete dataUserUpdate.phoneVisual;
    dataUserUpdate.image = imageProfile ? imageProfile : profile.image;
    dispatch(actUpdateUser(dataUserUpdate, handleSuccessRegister));
  };

  const openFile = () => {
    inputFile.current && inputFile.current.click();
  };

  const onChangeFile = (e) => {
    e.preventDefault();
    if (e.target.files.length > 0) {
      const { type } = e.target.files[0];
      if (!fileTypes.some((s) => type.includes(s))) {
        alert('invalid image type');
      } else {
        if (e.target.files[0].size < 1000000) {
          const aux = e.dataTransfer ? e.dataTransfer.files : e.target.files;
          const reader = new FileReader();
          reader.onload = () => {
            setImageProfile(reader.result);
          };
          aux.length && reader.readAsDataURL(aux[0]);
        } else {
          alert('Image too large, please try again with 1MB or less');
        }
      }
    }
  };
  return {
    promiseInProgress,
    onSubmit,
    documentsType,
    handleRedirectChangePassword,
    modalState,
    handleCloseModal,
    updateUserState,
    onChangeFile,
    inputFile,
    openFile,
    imageProfile,
    userProfileData,
    profile,
    phoneIndicatorChoices,
    onChangeInputFieldPhone,
    handleIndicative,
    defaultIndicative,
    userContactMethodsList,
  };
};

export default useProfile;
