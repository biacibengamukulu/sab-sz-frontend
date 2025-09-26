import useApplicationFormStep1 from './applicationFormStep1';
import useApplicationFormStep2 from './applicationFormStep2';
import useApplicationFormStep3 from './applicationFormStep3';
import useApplicationFormStep4 from './applicationFormStep4';
import useApplicationIssuanceFeeFrontUser from './applicationIssuanceFeeFrontuser';
import useApplicationLicenseIssued from './applicationLicenseIssued';
import useApplicationReviewAdvertisingFee from './applicationReviewAdvertisingFee';
import useApplicationReviewStep1 from './applicationReviewStep1';
import useApplicationReviewStep2 from './applicationReviewStep2';
import useApplicationReviewStep3 from './applicationReviewStep3';
import useApplicationReviewStep4 from './applicationReviewStep4';
import useApplicationReviewStep5 from './applicationReviewStep5';
import useApplicationTrackingInformation from './applicationTrackingInformation';
import useApplicationRenewTrackingInformation from './applicationRenewTrackingInformation';
import useRenewalFormStep1 from './renewalFormStep1';
import useRenewalFormStep2 from './renewalFormStep2';
import useRenewalFormStep3 from './renewalFormStep3';

import useContactInfo from './contactInfo';
import useFilter from './filter';
import useFilterBlogs from './filterBlogs';
import useFilterRenewals from './filterRenewals';
import useFilterRenew from './filterRenew';
import useFilterUser from './filterUser';
import useHeader from './header';
import useInternalComments from './internalComments';
import useInputFile from './inputFile';
import useLoggedHeader from './loggedHeader';
import useModal from './modal';
import useNotifications from './notifications';
import useProfileNavBar from './profileNavBar';
import usePasswordField from './passwordField';
import useRadioGroup from './radioGroup';
import useSideMenuBackuser from './sideMenuBackuser';
import useSideMenuMobile from './sideMenuMobile';
import useSocialMedia from './socialMedia';
import useStatusVisualization from './statusVisualizartion';
import useTimeLeft from './timeLeft';
import useTycInfo from './tycInfo';
import useRichTextEditor from './richTextEditor';

import useApplicationFormRenewStep1 from './applicationFormRenewStep1';
import useApplicationFormRenewStep2 from './applicationFormRenewStep2';
import useApplicationFormRenewStep3 from './applicationFormRenewStep3';

// import useNotifications from './notifications';
// import useReportsSubmitted from './reportsSubmitted';
// import useTimer from './timer';
// import useWizard from './wizard';
const useComponentHooks = () => {
  return {
    useApplicationRenewTrackingInformation,
    useApplicationFormStep1,
    useApplicationFormStep2,
    useApplicationFormStep3,
    useApplicationFormStep4,
    useApplicationFormRenewStep1,
    useApplicationFormRenewStep2,
    useApplicationFormRenewStep3,
    useApplicationIssuanceFeeFrontUser,
    useApplicationLicenseIssued,
    useApplicationReviewAdvertisingFee,
    useApplicationReviewStep1,
    useApplicationReviewStep2,
    useApplicationReviewStep3,
    useApplicationReviewStep4,
    useApplicationReviewStep5,
    useApplicationTrackingInformation,
    useFilter,
    useFilterBlogs,
    useFilterRenewals,
    useFilterRenew,
    useFilterUser,
    useRenewalFormStep1,
    useRenewalFormStep2,
    useRenewalFormStep3,

    useContactInfo,
    useHeader,
    useInputFile,
    useInternalComments,
    useModal,
    useNotifications,
    useLoggedHeader,
    usePasswordField,
    useProfileNavBar,
    useRadioGroup,
    useSideMenuBackuser,
    useSideMenuMobile,
    useSocialMedia,
    useStatusVisualization,
    useTimeLeft,
    useTycInfo,
    useRichTextEditor,

    // useApplicationConfirmation,
    // useApplicationDocuments,
    // useApplicationInformation,
    // useContactInfo,
    // useSocialMedia,
    // useTycInfo,
    // usePasswordField,
    // useHeader,
    // useLoggedHeader,
    // useWizard,
    // useFilterUser,
    // useApplicationReports,
    // useReportsSubmitted,
    // useNotifications,
    // useTimer,
  };
};

export default useComponentHooks;
