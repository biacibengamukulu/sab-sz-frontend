const useAuthInitialStates = () => {
  const sessionInitialState = {
    tokenType: '',
    accessToken: '',
  };
  const broadcastingInitialState = {
    idBroadcasting: '',
    leaveBroadcasting: false,
  };
  return {
    sessionInitialState,
    broadcastingInitialState,
  };
};

export default useAuthInitialStates;
