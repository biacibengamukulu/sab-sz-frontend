import useComponentHooks from './componentHooks';
import useGeneralHooks from './generalHooks';
import useScreenHooks from './screenHooks';

const useControllers = () => {
  return {
    useComponentHooks,
    useScreenHooks,
    useGeneralHooks,
  };
};

export default useControllers;
