import useHelpers from '../../../helpers';

const useBlogsSelectors = () => {
  const { useCreateSelector } = useHelpers();
  const { createSelector } = useCreateSelector();

  const currentBlogSelector = createSelector(
    (state) => state.currentBlog,
    (currentBlog) => {
      return {
        currentBlog: currentBlog.currentBlog,
        relatedBlogs: currentBlog.relatedBlogs,
      };
    }
  );
  const blogsTableSelector = createSelector(
    (state) => state.blogsTable,
    (blogsTable) => {
      return {
        data: blogsTable.data,
        currentPage: blogsTable.currentPage,
        lastPage: blogsTable.lastPage,
        pageSize: blogsTable.pageSize,
        totalRows: blogsTable.totalRows,
      };
    }
  );

  const blogsLastNewsSelector = createSelector(
    (state) => state.blogsLastNews,
    (blogsLastNews) => {
      return {
        data: blogsLastNews.data,
        currentPage: blogsLastNews.currentPage,
        lastPage: blogsLastNews.lastPage,
        pageSize: blogsLastNews.pageSize,
        totalRows: blogsLastNews.totalRows,
      };
    }
  );

  const blogsHomepageSelector = createSelector(
    (state) => state.blogsHomepage,
    (blogsHomepage) => {
      return {
        data: blogsHomepage.data,
      };
    }
  );

  return {
    currentBlogSelector,
    blogsTableSelector,
    blogsLastNewsSelector,
    blogsHomepageSelector,
  };
};

export default useBlogsSelectors;
