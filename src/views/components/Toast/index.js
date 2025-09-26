import React, { useState, useEffect } from 'react';
// import React from 'react';
import PropTypes from 'prop-types';
import useControllers from '../../../controllers';
const Toast = ({ text, title, listOfErrors }) => {
  const { useGeneralHooks } = useControllers();
  const { useToast } = useGeneralHooks();
  const { handleErrorsCategories } = useToast();
  const [errorsArray, seterrorsArray] = useState([]);
  useEffect(() => {
    listOfErrors && seterrorsArray(handleErrorsCategories(listOfErrors));
  }, [listOfErrors]);

  return (
    <div>
      <div className={'flex flex-col justify-center text-center '}>
        {title !== '' && <div>{title}</div>}
        <div>
          <b>{text}</b>
        </div>
        <div className={'flex flex-col mx-4 justify-center text-left '}>
          {errorsArray.length > 0 &&
            errorsArray.map((m, key) => <div key={key}>• {m}</div>)}
        </div>
      </div>
    </div>
  );
};

Toast.defaultProps = {
  text: '',
  // listOfErrors: [],
  hasOptions: false,
  action: () => {},
  title: '',
  hasImage: false,
  closeAction: () => {},
  state: '',
};

Toast.propTypes = {
  text: PropTypes.string,
  hasOptions: PropTypes.bool,
  listOfErrors: PropTypes.any,
  title: PropTypes.string,
  hasImage: PropTypes.bool,
  action: PropTypes.func,
  closeAction: PropTypes.func,
  state: PropTypes.string,
};

export default Toast;
