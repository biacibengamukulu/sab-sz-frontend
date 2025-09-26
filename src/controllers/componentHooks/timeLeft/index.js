import { useTimer } from 'react-timer-hook';

const useTimeLeft = (timeExpiration) => {
  const newDateTimeExpiration = new Date(timeExpiration);
  const { seconds, minutes, hours, days, isRunning } = useTimer({
    expiryTimestamp: newDateTimeExpiration,
    autoStart: true,
  });

  return {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
  };
};

export default useTimeLeft;
