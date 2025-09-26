import useActions from "./actions";
import useProviders from "./providers";
import useServices from "./services";

const useApi = () => {
  return {
    useActions,
    useServices,
    useProviders,
  };
};

export default useApi;
