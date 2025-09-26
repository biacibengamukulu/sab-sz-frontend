const useRenewalsNoticesInitialStates = () => {
  const renewalsTableInitialState = {
    data: [],
    currentPage: 0,
    lastPage: 0,
    pageSize: 0,
    totalRows: 0,
    applicationRenewal: {},
    applicationReady: false,
  };

  const renewalFormWizardInitialStates = {
    renewalFormWizard: [
      {
        value: 1,
        label: 'APPLICATION FORM',
        wrapper: {
          title: 'Renewal liquor licence',
          subtitle: 'Liquor licence application form',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare odio sit amet est accumsan hendrerit. litora torquent per conubia nostra, per inceptos himenaeos.',
          width: '892px',
        },
      },
      {
        value: 2,
        label: 'ADVERTISING FEE PAYMENT',
        wrapper: {
          title: 'Renewal liquor licence',
          subtitle: 'Advertising fee payment',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare odio sit amet est accumsan hendrerit. Morbi maximus aliquam porta. Vivamus ornare ac lectus ut euismod. Duis congue sed erat ac accumsan. Duis odio ligula, cursus vitae ornare eget, luctus eu sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
          width: '1202px',
        },
      },
      {
        value: 3,
        label: 'UPLOAD DOCUMENTATION',
        wrapper: {
          title: 'Renewal liquor licence',
          subtitle: '',
          description: '',
          width: '892px',
        },
      }
    ],
    currentStep: 1,
    stepsEnabled: 1,
  };


  const renewalFormRenewWizardInitialStates = {
    renewalFormRenewWizard: [
      {
        value: 1,
        label: 'RENEWAL FORM',
        wrapper: {
          title: 'Application for a license renewal',
          subtitle: 'Liquor license renewal application form',
          description: 'Personal Information. Tell us about yourself! All fields are required',
          width: '892px',
        },
      },
      {
        value: 2,
        label: 'ADVERTISING FEE PAYMENT',
        wrapper: {
          title: 'Application for a license renewal',
          subtitle: 'Advertising fee payment',
          description: '',
          width: '1202px',
        },
      },
      {
        value: 3,
        label: 'UPLOAD DOCUMENTATION',
        wrapper: {
          title: 'Application for a license renewal',
          subtitle: 'Required documents',
          description: 'Complete the application by uploading the documents below. all files are required for the application to proceed to the next stage.',
          width: '892px',
        },
      }
    ],
    currentStep: 1,
    stepsEnabled: 1,
  };

  /** */

  const applicationsRenewalsInitialState = {
    applicationRenewal: {},
    applicationReady: false,
  };

  return {
    renewalsTableInitialState,
    renewalFormWizardInitialStates,
    applicationsRenewalsInitialState,
    renewalFormRenewWizardInitialStates
  };
};

export default useRenewalsNoticesInitialStates;
