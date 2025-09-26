const useBlogsInitialStates = () => {
  const blogsTableInitialState = {
    data: [],
    currentPage: 0,
    lastPage: 0,
    pageSize: 0,
    totalRows: 0,
  };
  const blogsLastNewsInitialState = {
    data: [],
    currentPage: 0,
    lastPage: 0,
    pageSize: 0,
    totalRows: 0,
  };
  const currentBlogInitialState = {
    currentBlog: {
      blogId: '',
      title: '',
      body: '',
      image: '',
      publish: '',
      toHomepage: '',
      author: {
        name: '',
        surname: '',
      },
    },
    relatedBlogs: [],
  };

  const blogsHomepageInitialState = {
    data: [],
  };
  return {
    blogsTableInitialState,
    blogsLastNewsInitialState,
    currentBlogInitialState,
    blogsHomepageInitialState,
  };
};

export default useBlogsInitialStates;
