import { useState } from 'react';
// import useApi from '../../../api';

const useFilterBlogs = () => {
  const [filterStatus, setFilterStatus] = useState(false);

  //List of options for every user filter

  const statusList = [
    { value: 'none', text: 'Select', disabled: true },
    { value: '1', text: 'Published', disabled: false },
    { value: '0', text: 'Not published', disabled: false },
  ];

  const hanldeShowFilter = () => {
    setFilterStatus(!filterStatus);
  };
  return {
    statusList,
    filterStatus,
    hanldeShowFilter,
  };
};

export default useFilterBlogs;
