import { lazy } from 'react';
import ActivityIndicator from './ActivityIndicator';
import Header from './Header';
import Footer from './Footer';
import Button from './Buttons';
import LoggedHeader from './LoggedHeader';
import Toast from './Toast';
import SideMenuMobile from './SideMenuMobile';
import SideMenuBackuser from './SideMenuBackuser';
import TycInfo from './TycInfo';
import ContactInfo from './ContactInfo';
import Copyright from './Copyright';

// Screen components
const ApplicationFormStep1 = lazy(() => import('./ApplicationFormStep1'));
const ApplicationFormStep2 = lazy(() => import('./ApplicationFormStep2'));
const ApplicationFormStep3 = lazy(() => import('./ApplicationFormStep3'));
const ApplicationFormStep4 = lazy(() => import('./ApplicationFormStep4'));

const ApplicationFormRenewStep1 = lazy(() => import('./ApplicationFormRenewStep1'));
const ApplicationFormRenewStep2 = lazy(() => import('./ApplicationFormRenewStep2'));
const ApplicationFormRenewStep3 = lazy(() => import('./ApplicationFormRenewStep3'));

const ApplicationIssuanceFeeFrontUser = lazy(() =>
  import('./ApplicationIssuanceFeeFrontUser')
);
const ApplicationLicenseIssued = lazy(() =>
  import('./ApplicationLicenseIssued')
);
const ApplicationTrackingInformation = lazy(() =>
  import('./ApplicationTrackingInformation')
);
const ApplicationRenewTrackingInformation = lazy(() =>
  import('./ApplicationRenewTrackingInformation')
);

const ApplicationReviewAdvertisingFee = lazy(() =>
  import('./ApplicationReviewAdvertisingFee')
);
const ApplicationReviewStep1 = lazy(() => import('./ApplicationReviewStep1'));
const ApplicationReviewStep2 = lazy(() => import('./ApplicationReviewStep2'));
const ApplicationReviewStep3 = lazy(() => import('./ApplicationReviewStep3'));
const ApplicationReviewStep4 = lazy(() => import('./ApplicationReviewStep4'));
const ApplicationReviewStep5 = lazy(() => import('./ApplicationReviewStep5'));
const Filter = lazy(() => import('./Filter'));
const FilterBlogs = lazy(() => import('./FilterBlogs'));
const FilterRenewals = lazy(() => import('./FilterRenewals'));
const FilterRenew = lazy(() => import('./FilterRenew'));
const FilterUser = lazy(() => import('./FilterUser'));
const InternalComments = lazy(() => import('./InternalComments'));
const RenewalFormStep1 = lazy(() => import('./RenewalFormStep1'));
const RenewalFormStep2 = lazy(() => import('./RenewalFormStep2'));
const RenewalFormStep3 = lazy(() => import('./RenewalFormStep3'));

// Components

const Accordion = lazy(() => import('./Accordion'));
const AvatarField = lazy(() => import('./AvatarField'));
const Card = lazy(() => import('./Card'));
const CardBlogPreview = lazy(() => import('./CardBlogPreview'));
const Checkbox = lazy(() => import('./Checkbox'));
const CheckboxControlled = lazy(() => import('./CheckboxControlled'));
const ContainerImageShape = lazy(() => import('./ContainerImageShape'));
const CircularProgress = lazy(() => import('./CircularProgress'));
const DateField = lazy(() => import('./DateField'));
const DateFieldControlled = lazy(() => import('./DateFieldControlled'));
const DropdownRadioButton = lazy(() => import('./DropdownRadioButton'));
const DocumentFieldControlled = lazy(() => import('./DocumentFieldControlled'));
const InputFileField = lazy(() => import('./InputFileField'));
const InputFileFieldControlled = lazy(() =>
  import('./InputFileFieldControlled')
);
const Modal = lazy(() => import('./Modal'));
const Notifications = lazy(() => import('./Notifications'));
const Pagination = lazy(() => import('./Pagination'));
const PasswordField = lazy(() => import('./PasswordField'));
const PassWordFieldControlled = lazy(() => import('./PasswordFieldControlled'));
const PhoneInputField = lazy(() => import('./PhoneInputField'));
const PhoneInputFieldControlled = lazy(() =>
  import('./PhoneInputFieldControlled')
);
const ProfileNavBar = lazy(() => import('./ProfileNavBar'));
const RadioGroupField = lazy(() => import('./RadioGroupField'));
const RadioGroupFieldControlled = lazy(() =>
  import('./RadioGroupFieldControlled')
);
const RichTextEditor = lazy(() => import('./RichTextEditor'));
const RichTextEditorControlled = lazy(() =>
  import('./RichTextEditorControlled')
);
const SelectField = lazy(() => import('./SelectField'));
const SelectFieldControlled = lazy(() => import('./SelectFieldControlled'));
const SocialMedia = lazy(() => import('./SocialMedia'));
const StatusVisualization = lazy(() => import('./StatusVisualization'));
const StatusView = lazy(() => import('./StatusView'));
const Switch = lazy(() => import('./Switch'));
const SwitchControlled = lazy(() => import('./SwitchControlled'));
const Table = lazy(() => import('./Table'));
const TextArea = lazy(() => import('./TextArea'));
const TextAreaControlled = lazy(() => import('./TextAreaControlled'));
const TextField = lazy(() => import('./TextField'));
const TextFieldControlled = lazy(() => import('./TextFieldControlled'));
const TimeLeft = lazy(() => import('./TimeLeft'));
const TooltipField = lazy(() => import('./TooltipField'));
const Typography = lazy(() => import('./Typography'));
const WizardDynamic = lazy(() => import('./WizardDynamic'));
const Wrapper = lazy(() => import('./Wrapper'));

const useComponents = () => {
  return {
    ActivityIndicator,
    Header,
    Footer,
    Button,
    LoggedHeader,
    Toast,
    SideMenuMobile,
    SideMenuBackuser,
    TycInfo,
    ContactInfo,
    Copyright,

    ApplicationFormStep1,
    ApplicationFormStep2,
    ApplicationFormStep3,
    ApplicationFormStep4,

    ApplicationFormRenewStep1,
    ApplicationFormRenewStep2,
    ApplicationFormRenewStep3,

    ApplicationIssuanceFeeFrontUser,
    ApplicationLicenseIssued,
    ApplicationTrackingInformation,
    ApplicationReviewAdvertisingFee,
    ApplicationReviewStep1,
    ApplicationReviewStep2,
    ApplicationReviewStep3,
    ApplicationReviewStep4,
    ApplicationReviewStep5,
    Filter,
    FilterBlogs,
    FilterRenewals,
    FilterUser,
    InternalComments,
    RenewalFormStep1,
    RenewalFormStep2,
    RenewalFormStep3,

    Accordion,
    AvatarField,
    Card,
    CardBlogPreview,
    Checkbox,
    CheckboxControlled,
    ContainerImageShape,
    CircularProgress,
    DateField,
    DateFieldControlled,
    DocumentFieldControlled,
    DropdownRadioButton,
    InputFileField,
    InputFileFieldControlled,
    Modal,
    Notifications,
    Pagination,
    PasswordField,
    PassWordFieldControlled,
    PhoneInputField,
    PhoneInputFieldControlled,
    ProfileNavBar,
    RadioGroupField,
    RadioGroupFieldControlled,
    RichTextEditor,
    RichTextEditorControlled,
    SelectField,
    SelectFieldControlled,
    SocialMedia,
    StatusVisualization,
    Switch,
    SwitchControlled,
    Table,
    TextArea,
    TextAreaControlled,
    TextField,
    TextFieldControlled,
    TimeLeft,
    TooltipField,
    Typography,
    WizardDynamic,
    Wrapper,
    StatusView,
    ApplicationRenewTrackingInformation,
    FilterRenew
  };
};

export default useComponents;
