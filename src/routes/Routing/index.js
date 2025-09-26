import React from 'react';
import PrivateRouting from '../PrivateRouting';
import PublicRouting from '../PublicRouting';
// import { usePromiseTracker } from 'react-promise-tracker';
// import useViews from '../../views';
import useScreenHooks from '../../controllers/screenHooks';
import IdleTimer from 'react-idle-timer';

const Routing = () => {
  const { useRouting } = useScreenHooks();
  const { handleOnAction, handleOnActive, handleOnIdle } = useRouting();
  // const { useComponents } = useViews();
  // const { ActivityIndicator } = useComponents();
  // const { promiseInProgress } = usePromiseTracker();
  // Return routing according to session state

  return (
    <>
      <IdleTimer
        timeout={7211111}
        onActive={handleOnActive}
        onIdle={handleOnIdle}
        onAction={handleOnAction}
        debounce={250}
        crossTab={{
          emitOnAllTabs: true,
        }}
      />
      <PublicRouting />
      <PrivateRouting />
      {/* {promiseInProgress && <ActivityIndicator />} */}
    </>
  );
};

export default Routing;
