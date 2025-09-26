import { useEffect, useRef, useState } from 'react';
import useActions from '../../../api/actions';
import useHelpers from '../../../helpers';
import useModels from '../../../models';

const useNotifications = () => {
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useNavigation, usePromises } = useQuickFunctions();
  const { navigateTo } = useNavigation();
  const { promiseInProgressArea: promiseGetLatestNotifications } = usePromises(
    'getLatestNotifications'
  );
  const { promiseInProgressArea: promiseGetAllNotifications } = usePromises(
    'getAllNotifications'
  );

  // Actions
  const {
    dispatch,
    useNotificationsActions,
    useApplicationFormActions,
    useApplicationReviewActions,
    useApplicationsTableActions,
    useApplicationRenewalsActions,
  } = useActions();
  const {
    actGetLatestNotifications,
    actGetAllNotifications,
    actSetSideNotifications,
    actSetNewNotification,
  } = useNotificationsActions();
  const { actSetApplicationFormFromTable, actCancelApplication } =
    useApplicationFormActions();
  const {
    actSetCurrentApplicationReviewStep,
    actSetActiveApplicationReviewSteps,
  } = useApplicationReviewActions();
  const { actGetApplicationById } = useApplicationsTableActions();
  const { actGetApplicationRenewal } = useApplicationRenewalsActions();

  const { useSelectors } = useModels();
  const {
    useSelector,
    useUserSelectors,
    useNotificationsSelectors,
    useApplicationFormSelectors,
    useRenewalNoticesSelectors,
  } = useSelectors();
  const { userSelector } = useUserSelectors();
  const { applicationFormSelector, applicationReadySelector } =
    useApplicationFormSelectors();
  const { applicationReadySelector: applicationReadyRenewalSelector } =
    useRenewalNoticesSelectors();
  const { applicationForm } = useSelector(applicationFormSelector);
  const { applicationReady } = useSelector(applicationReadySelector);
  const { applicationReady: applicationReadyRenewal } = useSelector(
    applicationReadyRenewalSelector
  );
  const { notificationsSelector, newNotificationSelector } =
    useNotificationsSelectors();
  const { profile } = useSelector(userSelector);
  const {
    latestNotifications,
    allNotifications,
    currentPage,
    sideNotificationStatus,
  } = useSelector(notificationsSelector);
  const { newNotificationStatus } = useSelector(newNotificationSelector);
  // react
  const [redirectApplicationForm, setRedirectApplicationForm] = useState(false);
  const [redirectApplication, setRedirectApplication] = useState(false);
  const [redirectApplicationRenewal, setRedirectApplicationRenewal] =
    useState(false);

  const [popUpStatus, setPopUpStatus] = useState(false);
  const [sideNotificationFetchingStatus, setSideNotificationFetchingStatus] =
    useState(false);

  const innerNotificationRef = useRef();
  const popUpNotificationRef = useRef();

  // Control popup notifications
  useEffect(() => {
    popUpStatus && dispatch(actGetLatestNotifications());
    popUpStatus && dispatch(actSetNewNotification(false));
  }, [popUpStatus]);

  // Event listener for close popup
  useEffect(() => {
    const handleClickOutsidePopup = (event) => {
      if (
        popUpNotificationRef.current &&
        !popUpNotificationRef.current.contains(event.target)
      ) {
        setPopUpStatus(false);
      }
    };
    // Add event listener 'mousedown' when the popup is open
    popUpStatus &&
      document.addEventListener('mousedown', handleClickOutsidePopup);
    // remove the event listener 'mousedown' when the popup is open
    !popUpStatus &&
      document.removeEventListener('mousedown', handleClickOutsidePopup);
  }, [popUpNotificationRef, popUpStatus]);

  // Control side notifications
  useEffect(() => {
    sideNotificationStatus &&
      window.innerHeight > 720 &&
      dispatch(actGetAllNotifications(1));
  }, [sideNotificationStatus]);

  useEffect(() => {
    innerNotificationRef.current &&
      innerNotificationRef.current.addEventListener('scroll', (event) => {
        event.target.offsetHeight ===
          event.target.scrollHeight - event.target.scrollTop &&
          handleClickTest();
      });
  }, [sideNotificationStatus]);

  // fetch data of all notifications
  useEffect(() => {
    sideNotificationFetchingStatus &&
      dispatch(
        actGetAllNotifications(
          currentPage + 1,
          setSideNotificationFetchingStatus(false)
        )
      );
  }, [sideNotificationFetchingStatus]);

  const handleSetCurrentStepApplicationReview = () => {
    switch (applicationForm.status.id) {
      case 2:
        //Submitted
        dispatch(actSetCurrentApplicationReviewStep({ step: 1 }));
        dispatch(actSetActiveApplicationReviewSteps({ steps: 1 }));
        break;
      case 4:
        //inspection report upload
        dispatch(actSetCurrentApplicationReviewStep({ step: 2 }));
        dispatch(actSetActiveApplicationReviewSteps({ steps: 2 }));
        break;
      case 5:
        //report approval
        dispatch(actSetCurrentApplicationReviewStep({ step: 3 }));
        dispatch(actSetActiveApplicationReviewSteps({ steps: 3 }));
        break;
      case 6:
        //board adjudication
        dispatch(actSetCurrentApplicationReviewStep({ step: 4 }));
        dispatch(actSetActiveApplicationReviewSteps({ steps: 4 }));
        break;
      case 10:
        //Payment fee pending
        dispatch(actSetCurrentApplicationReviewStep({ step: 5 }));
        dispatch(actSetActiveApplicationReviewSteps({ steps: 5 }));
        break;
      case 12:
        //Payment fee review
        dispatch(actSetCurrentApplicationReviewStep({ step: 5 }));
        dispatch(actSetActiveApplicationReviewSteps({ steps: 5 }));
        break;
      case 13:
        //Payment failed
        dispatch(actSetCurrentApplicationReviewStep({ step: 5 }));
        dispatch(actSetActiveApplicationReviewSteps({ steps: 5 }));
        break;
      case 17:
        //Payment failed
        dispatch(actSetCurrentApplicationReviewStep({ step: 5 }));
        dispatch(actSetActiveApplicationReviewSteps({ steps: 5 }));
        break;
      default:
        dispatch(actSetCurrentApplicationReviewStep({ step: 1 }));
        break;
    }
    handleRedirectApplication();
  };
  //Redirect at application selected
  useEffect(() => {
    if (applicationReady) {
      redirectApplicationForm && handleRedirectApplicationForm();
      redirectApplication && handleSetCurrentStepApplicationReview();
      dispatch(actSetSideNotifications(false));
      setPopUpStatus(false);
    }
    if (applicationReadyRenewal) {
      redirectApplicationRenewal && handleRedirectApplicationRenewal();
      dispatch(actSetSideNotifications(false));
      setPopUpStatus(false);
    }
  }, [
    applicationReady,
    applicationReadyRenewal,
    redirectApplication,
    redirectApplicationForm,
    redirectApplicationRenewal,
  ]);

  const handleClickTest = () => {
    setSideNotificationFetchingStatus(true);
  };

  // Handlres: application selected

  const handleRedirectApplication = () => {
    profile.roleType.id === 4 && navigateTo(`/applications`);
    profile.roleType.id !== 4 && navigateTo(`/applications-renew`);
  };
  const handleRedirectApplicationRenewal = () => {
    //navigateTo(`/renewal-notice`);  LA RUTA NO EXISTE
    profile.roleType.id === 4 && navigateTo(`/applications`);
    profile.roleType.id !== 4 && navigateTo(`/applications-renew`);
  };

  const handleRedirectApplicationForm = () => {
    navigateTo(`/application-form`);
  };

  const handleGetApplicationSuccess = (data) => {
    // dispatch(actSetApplicationForm({ application: data.data.application }));
    dispatch(actSetSideNotifications(false));
    setPopUpStatus(false);
    // For the files saved, is necessary remove its extension from the name
    let applicationData = data.application;
    for (const [key] of Object.entries(applicationData)) {
      if (applicationData[key]?.name) {
        applicationData[key] = {
          ...applicationData[key],
          name: applicationData[key].name.replace(/\.[^/.]+$/, ''),
        };
      }
    }

    // set the application data for the form
    applicationData.status.id < 3 && profile.roleType.roleType === 'frontUser'
      ? dispatch(
          actSetApplicationFormFromTable(
            { application: { ...applicationData, date: data.date } },
            setRedirectApplicationForm(true)
          )
        )
      : dispatch(
          actSetApplicationFormFromTable(
            { application: { ...applicationData, date: data.date } },
            setRedirectApplication(true)
          )
        );
  };
  const handleGetApplicationAfterDeleteCurrentApplication = ({
    id,
    type,
    applicationDate,
  }) => {
    if (type === 1) {
      dispatch(
        actGetApplicationById(
          { id: id, date: applicationDate },
          handleGetApplicationSuccess
        )
      );
      // dispatch(actGetSapsAndMunicipalityReports({ applicationId: id }));
    } else {
      dispatch(
        actGetApplicationRenewal(
          { applicationId: id },
          handleGetApplicationRenewalSuccess
        )
      );
    }
  };
  const handleGetApplicationById = ({ id, type, applicationDate }) => {
    dispatch(
      actCancelApplication(
        { id: '' },
        handleGetApplicationAfterDeleteCurrentApplication({
          id,
          type,
          applicationDate,
        })
      )
    );
  };

  const handleGetApplicationRenewalSuccess = () => {
    setRedirectApplicationRenewal(true);
  };

  const handleNotificationTime = (notificationDate) => {
    const currentNotificationDate = new Date(notificationDate);
    const currentTime = new Date();
    const notificationDateDifference = new Date(
      currentTime - currentNotificationDate
    );

    const notificationMinutes = Math.floor(
      notificationDateDifference.getTime() / 1000 / 60
    );
    const notificationHours = Math.floor(
      notificationDateDifference.getTime() / 1000 / 3600
    );
    const notificationDays = Math.floor(
      notificationDateDifference.getTime() / 1000 / 86400
    );
    if (notificationDate) {
      return `${
        notificationDays
          ? notificationDays + ' days'
          : notificationHours
          ? notificationHours + ' hours'
          : notificationMinutes + ' minutes'
      } `;
    }
  };

  const openPopUp = () => {
    setPopUpStatus(!popUpStatus);
  };

  const openSideNotifications = () => {
    popUpStatus && setPopUpStatus(!popUpStatus);

    !sideNotificationStatus && currentPage === 1
      ? dispatch(actGetAllNotifications(currentPage + 1))
      : dispatch(actGetAllNotifications(1));

    dispatch(actSetSideNotifications(!sideNotificationStatus));
  };

  return {
    promiseGetLatestNotifications,
    promiseGetAllNotifications,

    popUpStatus,
    openPopUp,
    sideNotificationStatus,
    openSideNotifications,
    profile,
    latestNotifications,
    allNotifications,
    handleNotificationTime,
    innerNotificationRef,
    popUpNotificationRef,
    handleClickTest,
    newNotificationStatus,
    handleGetApplicationById,
  };
};

export default useNotifications;
