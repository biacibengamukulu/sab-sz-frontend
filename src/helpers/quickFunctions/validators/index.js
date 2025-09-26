import * as yup from 'yup';
// import useQuickFunctions from '..';

/**
 *
 * @author Serempre
 * @name useValidators
 * @type {Function}
 * @description Custom hook to manage the inputs validation schema
 * @param {} -
 *
 * @return {Function}
 */
const useValidators = () => {
  // const { useAlgorithms } = useQuickFunctions();
  // const { luhnAlgorithmValidation } = useAlgorithms();

  /**
   * Common validations functions
   */
  const alphaLettersStringInput = yup
    .string()
    .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ ,.'-]+$|^$/i, 'Must contain only letters');

  // const checkbox = yup.boolean();
  const businessLands = yup
    .string()
    .oneOf(['3', '4'], 'Select Formal or Informal');

  const charYesNo = yup.string().oneOf(['Y', 'N'], 'Select Yes or No');

  const contactMethod = yup
    .string()
    .oneOf(['1', '2', '3'], 'Invalid Method of Communication');

  const currentPassword = yup
    .string()
    .required('Current password is a required field.');

  const documentType = yup
    .string()
    .oneOf(['PP', 'ID'], 'Invalid Document Type');
  const documentIdInput = yup
    .string()
    .min(13, 'The Personal Identification Number must be a 13 digits number')
    .max(13, 'The Personal Identification Number must be a 13 digits number');
  // .matches(
  //   /^[0-9][0-9](0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])([0-9]{7})+$|^$/i,
  //   'Invalid ID number'
  // )
  // .test('Luhn validation', 'Invalid ID number', (value) =>
  //   luhnAlgorithmValidation(value)
  // );
  const documentPassportInput = yup.string();
  // .matches(/^([a-zA-Z]{1}[0-9]{8})+$|^$/i, 'Passport number invalid.');

  const email = yup.string().email('Must be a valid email');

  const isCheck = yup.boolean().oneOf([true], 'Required confirm');

  const naturalAmountNumber = yup
    .string()
    .matches(/^[0-9]+$|^$/i, 'Invalid amount');

  const number = yup
    .number('Must be a number')
    .positive('Must be greater than 0')
    .typeError('Must be a number');

  const numberRequired = yup
    .string()
    .matches(/^[0-9]+$|^$/i, 'Must contain only numbers');

  const numberList = yup.string().matches(/^[0-9]+$|^$/i, 'Required field');

  const password = yup.string().required('Password is a required field.');

  const phoneNumber = yup
    .string()
    .matches(/^[0-9]+$|^$/i, 'Contact Number must contain only numbers');

  // const phoneNumberMtn = yup
  //   .string()
  //   .matches(
  //     /^([0-9]{11})+$|^$/i,
  //     'Cell phone number must contain only numbers and be 11 digits long'
  //   );
  const premisesOwners = yup
    .string()
    .oneOf(['1', '2'], 'Select Leased or Owned');

  const stringField = yup.string('Invalid field.');

  // const typeOfPayment = yup.string().oneOf(['mtn', 'pdf'], 'Invalid Type');

  // directors
  const directorsValidation = yup.array().of(
    yup.object().shape({
      name: alphaLettersStringInput.required('Required field.'),
      residentCountryId: number.required('Required field.'),
      address: stringField.required('Required field.'),
      citizenshipId: number.required('Required field.'),
      pin: stringField.required('Required field.'),
      trpNumber: stringField.required('Required field.'),
    })
  );

  // shareholders
  const shareholdersValidation = yup.array().of(
    yup.object().shape({
      name: alphaLettersStringInput.required('Required field.'),
      residentCountryId: number.required('Required field.'),
      address: stringField.required('Required field.'),
      citizenshipId: number.required('Required field.'),
      pin: stringField.required('Required field.'),
      trpNumber: stringField.required('Required field.'),
    })
  );

  // files
  const pdfFileInput = yup
    .string()
    .matches(
      /^data:(application\/pdf)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*)$/i,
      'Document required.'
    );

  const filePdf = yup.object().shape({
    name: stringField,
    data: pdfFileInput.required('Required field.'),
  });

  const filePdfNotRequired = yup.object().shape({
    name: stringField.nullable(true),
    data: stringField.nullable(true),
  });
  const topicType = yup
    .string()
    .oneOf(['logins', 'application', 'renewal'], 'Invalid Topic Type');

  /**
   * Schemas
   */

  // Application form step 1
  const applicationFormStep1SchemaValidator = yup.object().shape({
    personal_identification_number: documentIdInput.required(
      'The Personal Identification Number is a required field.'
    ),
    names: alphaLettersStringInput.required('Applicant name is required.'),
    surnames: alphaLettersStringInput.required(
      'Applicant surname is required.'
    ),
    business_relationship_id: numberRequired.required(
      'Business Relationship is required.'
    ),
    business_style: alphaLettersStringInput
      .max(120, 'Must not contain more than 120 characters')
      .required('Business Style is required.'),
    business_plot_number: numberRequired
      .required('Business plot number is a required field.')
      .max(999999, 'Must not contain more than 6 digits'),
    farm_number: numberRequired
      .required('Farm number is a required field.')
      .max(999999, 'Must not contain more than 6 digits'),
    portion: numberRequired
      .max(25, 'Must not contain more than 25 digits')
      .required('Portion is required.'),
    business_building: alphaLettersStringInput
      .max(25, 'Must not contain more than 25 characters')
      .required('Business building is required.'),
    business_street: alphaLettersStringInput
      .max(25, 'Must not contain more than 25 characters')
      .required('Business street is required.'),
    business_suburb: alphaLettersStringInput
      .max(25, 'Must not contain more than 25 characters')
      .required('Business suburb is required.'),
    business_town: stringField
      .max(25, 'Must not contain more than 25 characters')
      .required('Business Town is a required field.'),
    company_number: stringField.when('business_relationship_id', {
      is: (business_relationship_id) => business_relationship_id == 3,
      then: numberRequired.required('Company Number is a required field.'),
      otherwise: stringField.nullable(true),
    }),
    postal_address: stringField.required('Postal code is a required field.'),
    residential_address: stringField.required('Address is a required field.'),
    city: stringField.required('City is a required field.'),
    premises_owner_id: premisesOwners,
    business_land_id: businessLands,
    business_premises: charYesNo,
    office_id: numberList.required('Business Office is required.'),
    area_id: numberList.required('Area is required.'),
  });

  // Application form step 2
  const applicationFormStep2ProofOfPaymentSchemaValidator = yup.object().shape({
    receiptNumber: stringField.required('Required field.'),

    // typeOfPaymentSecondStepPdf: yup
    //   .boolean()
    //   .oneOf([true, false], 'Required confirm'),
    // typeOfPaymentSecondStepMtn: yup
    //   .boolean()
    //   .oneOf([true, false], 'Required confirm'),
    // payerCellphone: phoneNumber.when('typeOfPaymentSecondStepMtn', {
    //   is: (typeOfPaymentSecondStepMtn) => typeOfPaymentSecondStepMtn,
    //   then: phoneNumberMtn.required(
    //     'Phone number is a required for MTN payment.'
    //   ),
    //   otherwise: phoneNumber.nullable(true),
    // }),
    // advertisingProofOfPayment: filePdfNotRequired.when(
    //   'typeOfPaymentSecondStepPdf',
    //   {
    //     is: (typeOfPaymentSecondStepPdf) => typeOfPaymentSecondStepPdf,
    //     then: filePdf.required('Required field.'),
    //     otherwise: filePdfNotRequired.nullable(true),
    //   }
    // ),
  });

  // Application form step 3
  const applicationFormStep3documentsSchemaValidator = ( applicationInfo ) => {
    // eslint-disable-next-line
    return yup.object().shape({
      // business_property_id: number.required('Required field.'),
      business_relationship_id: number.required('Required field.'),
      // individualBusinessType: numberRequired.required('Required field.'),
      // bussiness_property: numberRequired.required('Required field.'),
      kings_consent_liquor_issue: yup.object().when('isRural', (isRural, schema) => {
        if (applicationInfo.business_property_id == '3') {
            return schema.shape({
                name: stringField,
                data: pdfFileInput.required('Required field.'),
              })
        } else {
            return schema.shape({
                name: stringField.nullable(true),
                data: stringField.nullable(true),
              })
        }
      }),
      boards_inspection_report: filePdf.required('Document required.'),
      police_report: filePdf.required('Document required.'),
      health_report: filePdf.required('Document required.'),
      lease_agreement_title_deed: yup.object().when('isRural', (isRural, schema) => {
        if (applicationInfo.business_property_id != '3') {
            return schema.shape({
                name: stringField,
                data: pdfFileInput.required('Required field.'),
              })
        } else {
            return schema.shape({
                name: stringField.nullable(true),
                data: stringField.nullable(true),
              })
        }
      }),
      plans_drawn: filePdf.required('Document required.'),
      bank_statement: filePdf.required('Document required.'),
      identity_card: filePdf.required('Document required.'),
      certificate_of_incorporation: filePdfNotRequired.when(
        'business_relationship_id',
        {
          is: (business_relationship_id) => business_relationship_id === 3,
          then: filePdf.required('Document required.'),
          otherwise: filePdfNotRequired.nullable(true),
        }
      ),
      company_resolution: filePdfNotRequired.when(
        'business_relationship_id',
        {
          is: (business_relationship_id) => business_relationship_id === 3,
          then: filePdf.required('Document required.'),
          otherwise: filePdfNotRequired.nullable(true),
        }
      ),
      memorandum_and_articles_of_association: filePdfNotRequired.when(
        'business_relationship_id',
        {
          is: (business_relationship_id) => business_relationship_id === 3,
          then: filePdf.required('Document required.'),
          otherwise: filePdfNotRequired.nullable(true),
        }
      ),
      trading_licence: filePdf.required('Document required.'),
      temporary_resident_permit: yup.object().when('isRural', (isRural, schema) => {
        if (applicationInfo.business_property_id != '3') {
            return schema.shape({
                name: stringField,
                data: pdfFileInput.required('Required field.'),
              })
        } else {
            return schema.shape({
                name: stringField.nullable(true),
                data: stringField.nullable(true),
              })
        }
      }),
      advert_copy: filePdf.required('Document required.'),
      
      // General (and Individual) Business Relationship
      // leased_business_premise: filePdf.required('Document required.'),
      affidavit: filePdf.required('Required field.'),
  
      // identity_card: filePdfNotRequired.when('individualBusinessType', {
      //   is: (individualBusinessType) => individualBusinessType != 0,
      //   then: filePdf.required('Required field.'),
      //   otherwise: filePdfNotRequired.nullable(true),
      // }),
  
      // // Individual Business + Urban area + Privately-Owned = ID + Title Deed (individualBusinessType = 1)
      // title_deed: filePdfNotRequired.when('individualBusinessType', {
      //   is: (individualBusinessType) =>
      //     individualBusinessType == 1 || individualBusinessType == 3,
      //   then: filePdf.required('Required field.'),
      //   otherwise: filePdfNotRequired.nullable(true),
      // }),
  
      // // Individual Business + Urban area + Leased-Owned = ID + Lease Agreement (individualBusinessType = 2)
      // lease_agreement: filePdfNotRequired.when('individualBusinessType', {
      //   is: (individualBusinessType) =>
      //     individualBusinessType == 2 || individualBusinessType == 4,
      //   then: filePdf.required('Required field.'),
      //   otherwise: filePdfNotRequired.nullable(true),
      // }),
  
      // permit_no: filePdfNotRequired.when('individualBusinessType', {
      //   is: (individualBusinessType) =>
      //     individualBusinessType == 3 || individualBusinessType == 4,
      //   then: filePdf.required('Required field.'),
      //   otherwise: filePdfNotRequired.nullable(true),
      // }),
  
      // // Partnership Business Relationship
      // certificate_of_partnership: filePdfNotRequired.when(
      //   'business_relationship_id',
      //   {
      //     is: (business_relationship_id) => business_relationship_id === 2,
      //     then: filePdf.required('Required field.'),
      //     otherwise: filePdfNotRequired.nullable(true),
      //   }
      // ),
  
      // // Company Business Relationship
      // certificate_of_incorporation: filePdfNotRequired.when(
      //   'business_relationship_id',
      //   {
      //     is: (business_relationship_id) => business_relationship_id === 3,
      //     then: filePdf.required('Required field.'),
      //     otherwise: filePdfNotRequired.nullable(true),
      //   }
      // ),
      // form_j: filePdfNotRequired.when('business_relationship_id', {
      //   is: (business_relationship_id) => business_relationship_id === 3,
      //   then: filePdf.required('Required field.'),
      //   otherwise: filePdfNotRequired.nullable(true),
      // }),
      // memorandum_and_articles_of_association: filePdfNotRequired.when(
      //   'business_relationship_id',
      //   {
      //     is: (business_relationship_id) => business_relationship_id === 3,
      //     then: filePdf.required('Required field.'),
      //     otherwise: filePdfNotRequired.nullable(true),
      //   }
      // ),
    });
  }

  const applicationFormRenewStep3documentsSchemaValidator = (  ) => {
    // eslint-disable-next-line

    return yup.object().shape({
      police_report: filePdf.required('Document required.'),
      health_report: filePdf.required('Document required.'),
      license_renewal: filePdf.required('Document required.'),
      affidavit: filePdf.required('Document required.')
    });
  }

  // Application form step 4
  const applicationFormStep4LetterActSchemaValidator = yup.object().shape({
    //General
    undersigned: stringField.required('Required field.'),
    undefinedField: stringField.required('Required field.'),
    applicantTypeForLicenseId: number.required('Required field.'),
    //Personal & Company
    applicantFullName: alphaLettersStringInput.required('Required field.'),
    phoneNumber: phoneNumber.nullable(true),
    cellphone: phoneNumber.nullable(true),
    plotNumber: stringField.required('Required field.'),
    place: stringField.required('Required field.'),
    planOfPremises: filePdf.required('Required field.'),
    affidavit: filePdf.required('Required field.'),
    leaseAgreement: filePdf.required('Required field.'),

    // Personal
    idNumber: stringField.when('applicantTypeForLicenseId', {
      is: (applicantTypeForLicenseId) => applicantTypeForLicenseId === 1,
      then: stringField.required('Required field.'),
      otherwise: stringField.nullable(true),
    }),

    // Company
    applicantPinNumber: stringField.when('applicantTypeForLicenseId', {
      is: (applicantTypeForLicenseId) => applicantTypeForLicenseId === 2,
      then: stringField.required('Required field.'),
      otherwise: stringField.nullable(true),
    }),

    responsibleFullName: alphaLettersStringInput.when(
      'applicantTypeForLicenseId',
      {
        is: (applicantTypeForLicenseId) => applicantTypeForLicenseId === 2,
        then: alphaLettersStringInput.required('Required field.'),
        otherwise: alphaLettersStringInput.nullable(true),
      }
    ),
    responsibleAddress: stringField.when('applicantTypeForLicenseId', {
      is: (applicantTypeForLicenseId) => applicantTypeForLicenseId === 2,
      then: stringField.required('Required field.'),
      otherwise: stringField.nullable(true),
    }),
    directors: yup.array().when('applicantTypeForLicenseId', {
      is: (applicantTypeForLicenseId) => applicantTypeForLicenseId === 2,
      then: directorsValidation,
      otherwise: yup.array().nullable(true),
    }),
    shareholders: yup.array().when('applicantTypeForLicenseId', {
      is: (applicantTypeForLicenseId) => applicantTypeForLicenseId === 2,
      then: shareholdersValidation,
      otherwise: yup.array().nullable(true),
    }),
  });
  // Application form step 4 Terms
  const applicationFormStep4TermsSchemaValidator = yup.object().shape({
    termsAndConditions: isCheck.required(
      'Required confirm terms and conditions.'
    ),
    applicationConfirmation: isCheck.required('Required confirm.'),
  });
  // Application form step 5
  const applicationIssuanceFeeFrontUserSchemaValidator = yup.object().shape({
    receiptNumber: stringField.required('Required field.'),
  });

  // Application review step 0
  const applicationAdvertisingFeereviewSchemaValidator = yup.object().shape({
    prescribedFees: naturalAmountNumber.nullable(true),
    amountReceived: stringField.when(
      ['prescribedFees'],
      (prescribedFees, schema, node) => {
        if (node.value === `${prescribedFees}`) {
          return naturalAmountNumber.required('Required field.');
        } else {
          return yup.lazy((value) =>
            value === ''
              ? stringField.required('Required field.')
              : naturalAmountNumber
                  .required('Required field.')
                  .max(0, 'Invalid amount')
          );
        }
      }
    ),
    receiptNumber: stringField.required('Required field.'),
  });

  // Application Inspection report
  const applicationInspectionReportSchemaValidator = yup.object().shape({
    inspectionDocument: filePdf.required('Required field.'),
  });

  // Change password
  const changePasswordSchemaValidator = yup.object().shape({
    currentPassword: currentPassword,
    password: password
      .min(8, 'Password must be greater or equal than 8 characters')
      .max(15, 'Password must be lower or equal than 15 characters'),
    passwordConfirmation: password
      .min(8, 'Password must be greater or equal than 8 characters')
      .max(15, 'Password must be lower or equal than 15 characters'),
  });

  // Create User table
  const createUserSchemaValidator = yup.object().shape({
    name: alphaLettersStringInput.required('First name is a required.'),
    surname: alphaLettersStringInput.required('Last name is a required.'),
    email: email.required('Email is a required field.'),
    phone: phoneNumber.required('Phone number is a required field.'),
  });

  // Login
  const loginSchemaValidator = yup.object().shape({
    email: email.required('Email is a required field.'),
    password: password.required('Password is a required field.'),
  });

  const logsSchemaValidator = yup.object().shape({
    topic: topicType.required('Topic is a required.'),
    referenceNumber: yup
      .string()
      .when('topic', {
        is: (topic) => topic === 'renewal',
        then: stringField.required(
          'Reference number is required for renewals.'
        ),
        otherwise: stringField.nullable(true),
      })
      .when('topic', {
        is: (topic) => topic === 'application',
        then: stringField.required(
          'Reference number is required for applications.'
        ),
        otherwise: stringField.nullable(true),
      }),
  });



  const accordionReview = yup.object().shape({
    step1: isCheck.required('Required'),
    step2: isCheck.required('Required'),
    step3: isCheck.required('Required'),
  });

  // Modal Comments
  const modalCommentsSchemaValidator = yup.object().shape({
    textAreaComments: stringField
      .max(600, 'Comments must be lower or equal than 600 characters')
      .required('You have to send a comment'),
  });

  const modalCommentsAppSchemaValidator = yup.object().shape({
    textAreaCommentsApp: stringField
      .max(600, 'Comments must be lower or equal than 600 characters'),
  });

  //New blog
  const newBlogSchemaValidator = yup.object().shape({
    title: stringField.required('A Title is required.'),
    body: stringField,
  });

  // Profile
  const profileSchemaValidator = yup.object().shape({
    name: alphaLettersStringInput.required('First name is a required.'),
    surname: alphaLettersStringInput.required('Last name is a required.'),
    email: email.required('Email is a required field.'),
    contactMethodId: contactMethod,
    alias: documentType.required('Document type is a required field.'),
    registrationNumber: yup.string().when('alias', {
      is: (alias) => alias === 'ID',
      then: documentIdInput.required('ID is a required field.'),
      otherwise: documentPassportInput.required(
        'Registration Number is a required field.'
      ),
    }),
    phone: phoneNumber.required('Phone number is a required field.'),
  });

  // Recovery passqword
  const recoveryPasswordSchemaValidator = yup.object().shape({
    email: email.required('Email is required'),
  });

  // Resend email verification
  const resendEmailSchemaValidator = yup.object().shape({
    email: email.required('Email is required'),
  });

  // Reset email verification
  const resetPasswordSchemaValidator = yup.object().shape({
    password: password
      .min(8, 'Password must be greater or equal than 8 characters')
      .max(15, 'Password must be lower or equal than 15 characters'),
    passwordConfirmation: password
      .min(8, 'Password must be greater or equal than 8 characters')
      .max(15, 'Password must be lower or equal than 15 characters'),
  });

  // Signup
  const signUpSchemaValidator = yup.object().shape({
    name: alphaLettersStringInput.required('First name is a required.'),
    surname: alphaLettersStringInput.required('Last name is a required.'),
    email: email.required('Email is a required field.'),
    contactMethodId: contactMethod.required(
      'Contact Method is a required field.'
    ),
    alias: documentType.required('Document type is a required field.'),
    registrationNumber: yup
      .string()
      .when('alias', {
        is: (alias) => alias === 'ID',
        then: documentIdInput.required('ID is a required field.'),
      })
      .when('alias', {
        is: (alias) => alias === 'PP',
        then: documentPassportInput.required(
          'Registration Number is a required field.'
        ),
      }),
    phone: phoneNumber.required('Phone number is a required field.'),
    password: password
      .min(8, 'Password must be greater or equal than 8 characters')
      .max(15, 'Password must be lower or equal than 15 characters'),
    passwordConfirmation: password
      .min(8, 'Password must be greater or equal than 8 characters')
      .max(15, 'Password must be lower or equal than 15 characters'),
    isCheck: isCheck.required('Required terms and conditions'),
  });


  // Application form step 2
  const applicationRenewTrackInfSchemaValidator = yup.object().shape({
    comment_reject: stringField.required('Required field.'),
  });

  return {
    applicationRenewTrackInfSchemaValidator,
    applicationFormStep1SchemaValidator,
    applicationFormStep2ProofOfPaymentSchemaValidator,
    applicationFormStep3documentsSchemaValidator,
    applicationFormRenewStep3documentsSchemaValidator,
    applicationFormStep4LetterActSchemaValidator,
    applicationFormStep4TermsSchemaValidator,
    applicationIssuanceFeeFrontUserSchemaValidator,
    applicationAdvertisingFeereviewSchemaValidator,
    applicationInspectionReportSchemaValidator,
    changePasswordSchemaValidator,
    createUserSchemaValidator,
    loginSchemaValidator,
    logsSchemaValidator,
    modalCommentsSchemaValidator,
    modalCommentsAppSchemaValidator,
    newBlogSchemaValidator,
    profileSchemaValidator,
    recoveryPasswordSchemaValidator,
    resendEmailSchemaValidator,
    resetPasswordSchemaValidator,
    signUpSchemaValidator,
    accordionReview
  };
};

export default useValidators;
