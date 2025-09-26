const useVotingInitialStates = () => {
  const votingInitialState = {
    votingTime: 0,
    time: 0,
    state: false,
    currentTime: 0,
    alreadyVoted: 0,
  };
  return {
    votingInitialState,
  };
};

export default useVotingInitialStates;
