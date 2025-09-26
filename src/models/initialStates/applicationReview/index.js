const useApplicationReviewInitialStates = () => {
  const applicationReviewWizardInitialStates = {
    applicationReviewWizard: [
      {
        value: 1,
        label: 'ADMINISTRATOR APPLICATION REVIEW',
        wrapper: {
          title: 'Application',
          subtitle: '',
          description: '',
          width: '1202px',
        },
      },
      {
        value: 2,
        label: 'REPORT',
        wrapper: {
          title: 'Inspection Report',
          subtitle: '',
          description: '',
          width: '1202px',
        },
      },
      {
        value: 3,
        label: 'REPORT APPROVAL',
        wrapper: {
          title: 'Report approval',
          subtitle: '',
          description: '',
          width: '1202px',
        },
      },
      {
        value: 4,
        label: 'BOARD ADJUDICATION',
        wrapper: {
          title: 'Board adjudication',
          subtitle: '',
          description: '',
          width: '1202px',
        },
      },
      {
        value: 5,
        label: 'PAYMENT FEE PENDING',
        wrapper: {
          title: 'Payment fee pending',
          subtitle: '',
          description: '',
          width: '1202px',
        },
      },
    ],
    currentStep: 1,
    stepsEnabled: 1,
  };
  const applicationReviewInitialStates = {
    applicationReview: {
      inspectionDocument: {
        name: '',
        data: '',
      },
      latitude: '',
      longitude: '',
    },
  };
  return {
    applicationReviewWizardInitialStates,
    applicationReviewInitialStates,
  };
};

export default useApplicationReviewInitialStates;
