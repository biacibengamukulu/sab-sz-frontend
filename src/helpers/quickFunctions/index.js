import useAlgorithms from './algorithms';
import useBase64ToBlobUrl from './base64ToBlobUrl';
import useDateFormatter from './dateFormatter';
import useFileManager from './fileManager';
import useNavigation from './navigation';
import usePromises from './promises';
import useRouterHelper from './routerHelper';
import useValidators from './validators';
const useQuickFunctions = () => {
  return {
    useAlgorithms,
    useBase64ToBlobUrl,
    useDateFormatter,
    useFileManager,
    useNavigation,
    usePromises,
    useRouterHelper,
    useValidators,
  };
};

export default useQuickFunctions;
