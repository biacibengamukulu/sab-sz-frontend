import { useEffect, useState } from 'react';
import useApi from '../../../api';
import useHelpers from '../../../helpers';
import useModels from '../../../models';

const useBlogsLastNews = () => {
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useNavigation } = useQuickFunctions();
  const { navigateTo } = useNavigation();

  // Api
  const { useActions } = useApi();
  const { dispatch, useBlogsActions } = useActions();
  const { actGetBlogsLastNews } = useBlogsActions();

  // Models
  const { useSelectors } = useModels();
  const { useSelector, useBlogsSelectors, useAuthSelectors } = useSelectors();
  const { blogsLastNewsSelector } = useBlogsSelectors();
  const { session } = useAuthSelectors();
  const { data, currentPage, lastPage, pageSize, totalRows } = useSelector(
    blogsLastNewsSelector
  );
  const { accessToken } = useSelector(session);
  // React
  const [lastPageTable, setLastPageTable] = useState(1);
  const [rows, setRows] = useState([]);
  const [currentPageTable, setCurrentPageTable] = useState(1);

  //Table initial data
  useEffect(() => {
    dispatch(
      actGetBlogsLastNews({
        page: currentPage,
      })
    );
  }, []);

  // Table when page change
  useEffect(() => {
    dispatch(
      actGetBlogsLastNews({
        page: currentPageTable,
      })
    );
  }, [currentPageTable]);

  // When table parameter changes
  useEffect(() => {
    handleTableUpdate();
  }, [currentPage, data, lastPage]);

  /**
   * Handlers
   */
  // Handlers: redirect to new content
  const handleViewBlog = (blogId) => {
    navigateTo(`/blog-view?id=${blogId}`);
  };

  // Handlers: table
  const handleTableUpdate = () => {
    setRows(data);
    setLastPageTable(lastPage);
  };

  const handlePageChange = (e, newPage) => {
    setCurrentPageTable(newPage);
  };

  return {
    accessToken,
    rows,
    pageSize,
    totalRows,
    currentPageTable,
    lastPageTable,
    handlePageChange,

    handleViewBlog,
  };
};

export default useBlogsLastNews;
