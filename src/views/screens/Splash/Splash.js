import React from 'react';
import useControllers from '../../../controllers';

const Splash = () => {
  // Hooks
  const { useScreenHooks } = useControllers();
  const { useSplash } = useScreenHooks();
  const { handleRedirect } = useSplash();

  handleRedirect();
  // !profile.id && !accessToken && !idBroadcasting && handleRedirectHome();
  return <></>;
};

export default Splash;
