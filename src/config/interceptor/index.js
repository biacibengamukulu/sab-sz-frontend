import React, { useEffect } from 'react';
import axios from 'axios';
import useGeneralHooks from '../../controllers/generalHooks';
import useComponents from '../../views/components';
import useTypes from '../../strings/types';

const useInterceptor = (store) => {
  const { useToast } = useGeneralHooks();
  const { error } = useToast();
  const { Toast } = useComponents();
  const { useAuthTypes } = useTypes();
  const { LEAVE_BROADCASTING, UPDATE_TOKEN } = useAuthTypes();

  const handleResponseSuccess = (response) => {
    return response;
  };

  const handleResponseError = async (errorRequest) => {
    const originalRequest = errorRequest.config;

    switch (errorRequest?.response?.status) {
      case 401:
        // Don't try to refresh token if this was already a refresh request
        if (originalRequest.url && originalRequest.url.includes('refresh-token')) {
          store.dispatch({ type: LEAVE_BROADCASTING });
          break;
        }

        // Try to refresh the token
        if (!originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const response = await axios.get('api/refresh-token');
            const { tokenType, token } = response.data;

            // Update the authorization header
            originalRequest.headers['Authorization'] = `${tokenType} ${token}`;

            // Update the store with new token
            store.dispatch({
              type: UPDATE_TOKEN,
              payload: { tokenType, accessToken: token }
            });

            // Retry the original request
            return axios(originalRequest);
          } catch (refreshError) {
            // If refresh fails, logout the user
            store.dispatch({ type: LEAVE_BROADCASTING });
            break;
          }
        } else {
          // If we already tried to refresh, logout
          store.dispatch({ type: LEAVE_BROADCASTING });
        }
        break;
      case 400:
        error(
          <Toast
            text={errorRequest?.response?.data?.message}
            listOfErrors={errorRequest?.response?.data?.errors}
            state={'error'}
          />,
          {
            position: 'top-right',
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            toastId: Math.random(),
          }
        );
        break;
      case 409:
        error(
          <Toast
            text={errorRequest?.response?.data?.message}
            listOfErrors={errorRequest?.response?.data?.errors}
            state={'error'}
          />,
          {
            position: 'top-right',
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            toastId: Math.random(),
          }
        );
        break;
      case 422: {
        // Handle Laravel validation errors properly
        let errorMessage = 'Validation error occurred.';
        let errorList = [];

        try {
          const responseData = errorRequest?.response?.data;
          if (responseData?.message) {
            if (Array.isArray(responseData.message)) {
              // Laravel validation format: {"message":[{"field":["error message"]}]}
              const validationErrors = responseData.message[0] || {};
              errorList = Object.values(validationErrors).flat();
              errorMessage = errorList.join(' ') || 'Validation failed.';
            } else if (typeof responseData.message === 'string') {
              errorMessage = responseData.message;
            }
          }

          if (responseData?.errors) {
            errorList = Object.values(responseData.errors).flat();
          }
        } catch (parseError) {
          console.error('Error parsing 422 response:', parseError);
          errorMessage = 'Validation error occurred.';
        }

        error(
          <Toast
            text={errorMessage}
            listOfErrors={errorList}
            state={'error'}
          />,
          {
            position: 'top-right',
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            toastId: Math.random(),
          }
        );
        break;
      }
      case 500:
        error(
          <Toast
            text={errorRequest?.response?.data?.message}
            listOfErrors={[]}
            state={'error'}
          />,
          {
            position: 'top-right',
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            toastId: Math.random(),
          }
        );
        break;
      case 504:
        error(
          <Toast text={'Request Timeout'} listOfErrors={[]} state={'error'} />,
          {
            position: 'top-right',
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            toastId: Math.random(),
          }
        );
        break;
      default:
        console.error(error);
    }
    throw error;
  };

  useEffect(() => {
    axios.defaults.baseURL = process.env.REACT_APP_API_URL;
    axios.defaults.params = {};
    axios.interceptors.response.use(handleResponseSuccess, handleResponseError);
  }, []);
};

export default useInterceptor;
