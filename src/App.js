import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import useConfig from './config';
import useRoutes from './routes';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
// import useScreenHooks from './controllers/screenHooks';
const App = () => {
  // Hooks
  // const { useApp } = useScreenHooks();
  // const { handleOnAction, handleOnActive, handleOnIdle } = useApp();

  // Config
  const { useStoreConfig, useInterceptor } = useConfig();
  const { store, persistor } = useStoreConfig();

  // Routes
  const { Routing } = useRoutes();

  axios.defaults.baseURL = process.env.REACT_APP_API_URL;

  const handleRequestSuccess = (request) => {
    const { headers } = request;
    const { getState } = store;
    const { session } = getState();

    if (headers) {
      headers['Content-Type'] = 'application/vnd.api+json';
      headers.accept = 'application/vnd.api+json';

      if (session.accessToken && session.tokenType) {
        headers[
          'Authorization'
        ] = `${session.tokenType} ${session.accessToken}`;
      }
    }
    return request;
  };

  const handleRequestError = (error) => {
    console.error(`REQUEST ERROR! => ${error}`);
    return error;
  };

  axios.interceptors.request.use(handleRequestSuccess, handleRequestError);
  useInterceptor(store);

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <ToastContainer
            className={'rounded'}
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            limit={3}
            pauseOnHover
          />
          <Router>
            <Routing />
          </Router>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
