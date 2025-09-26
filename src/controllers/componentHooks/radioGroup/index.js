import { useState } from 'react';

const useRadioGroup = () => {
  const [radioValue, setRadioValue] = useState('0');

  const handleSetRadioValue = (event) => {
    setRadioValue(event.target.value);
  };

  return {
    radioValue,
    handleSetRadioValue,
  };
};

export default useRadioGroup;
