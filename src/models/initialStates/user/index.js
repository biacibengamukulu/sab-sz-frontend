const useUserInitialStates = () => {
  const userInitialState = {
    profile: {
      name: '',
      surname: '',
      email: '',
      phone: '',
      registrationNumber: '',
      image: null,
      phoneIndicatorId: '',
      applicationsCount: 0,
      roleId: '',
      roleType: {
        alias: '',
        name: '',
        roleType: '',
      },
      lastLogout: '',
    },
    userRolesList: [
      {
        id: 1,
        name: 'Administrator',
        alias: 'administrator',
        roleType: 'backuser',
      },
      {
        id: 2,
        name: 'Inspector',
        alias: 'inspector',
        roleType: 'backuser',
      },
      {
        id: 3,
        name: 'Super administrator',
        alias: 'superAdministrator',
        roleType: 'backuser',
      },
      {
        id: 4,
        name: 'Front user',
        alias: 'frontUser',
        roleType: 'frontUser',
      },
    ],
    userContactMethodsList: [
      {
        id: 1,
        name: 'SMS',
      },
      {
        id: 2,
        name: 'Email',
      },
      {
        id: 3,
        name: 'Both',
      },
    ],
  };
  return {
    userInitialState,
  };
};

export default useUserInitialStates;
