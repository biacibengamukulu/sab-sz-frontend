import { toast } from 'react-toastify';
import _ from 'lodash';

const useToast = () => {
  const success = (msg, options = {}) => {
    return toast.success(msg, {
      // Merge additionals options
      ...options,
      className: 'rounded bg-success-500',
    });
  };

  const error = (msg, options = {}) => {
    return toast.error(msg, {
      ...options,
      className: 'rounded bg-error-500',
    });
  };
  const info = (msg, options = {}) => {
    return toast.info(msg, {
      ...options,
      className: 'rounded bg-black',
    });
  };

  const warn = (msg, options = {}) => {
    return toast.warn(msg, {
      ...options,
      className: 'rounded bg-warning-500',
    });
  };

  const handleErrorsCategories = (listOfCategoryErrors) => {
    let arrayOfErrors = [];

    for (let errorCategories in listOfCategoryErrors) {
      _.map(listOfCategoryErrors[errorCategories], (errorMsg) => {
        return arrayOfErrors.push(errorMsg);
      });
    }

    return arrayOfErrors;
  };
  return {
    success,
    error,
    info,
    warn,
    handleErrorsCategories,
  };
};
export default useToast;
