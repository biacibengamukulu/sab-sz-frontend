import useHelpers from '../../../helpers';
import useStrings from '../../../strings';
import useInitialStates from '../../initialStates';

const useBlogsReducers = () => {
  // Helpers
  const { useCreateReducer } = useHelpers();
  const { createReducer } = useCreateReducer();

  //strings
  const { useTypes } = useStrings();
  const { useBlogsTypes } = useTypes();
  const {
    GET_BLOG,
    RESET_CURRENT_BLOG,
    GET_BLOGS_TABLE,
    GET_BLOGS_LAST_NEWS,
    GET_BLOGS_HOMEPAGE,
    RESET_FIELD_IMAGE,
  } = useBlogsTypes();

  //initial states
  const { useBlogsInitialStates } = useInitialStates();
  const {
    currentBlogInitialState,
    blogsTableInitialState,
    blogsLastNewsInitialState,
    blogsHomepageInitialState,
  } = useBlogsInitialStates();

  //handlers
  const currentBlogHandler = {
    [GET_BLOG](state, action) {
      const { payload } = action;
      const { mainBlog, relatedBlogs, blogId } = payload;
      return {
        ...state,
        currentBlog: {
          ...state.currentBlog,
          blogId: blogId,
          ...mainBlog,
        },
        relatedBlogs: [...state.relatedBlogs, ...relatedBlogs],
      };
    },
    [RESET_FIELD_IMAGE](state) {
      return {
        ...state,
        currentBlog: {
          ...state.currentBlog,
          image: '',
        },
      };
    },
    [RESET_CURRENT_BLOG]() {
      return currentBlogInitialState;
    },
  };

  const blogsTableHandler = {
    [GET_BLOGS_TABLE](state, action) {
      const { payload } = action;
      const { current_page, data, last_page, per_page, total } = payload;
      return {
        ...state,
        data: data,
        currentPage: current_page,
        lastPage: last_page,
        pageSize: per_page,
        totalRows: total,
      };
    },
  };

  const blogsLastNewsHandler = {
    [GET_BLOGS_LAST_NEWS](state, action) {
      const { payload } = action;
      const { current_page, data, last_page, per_page, total } = payload;
      return {
        ...state,
        data: data,
        currentPage: current_page,
        lastPage: last_page,
        pageSize: per_page,
        totalRows: total,
      };
    },
  };

  const blogsHomepageHandler = {
    [GET_BLOGS_HOMEPAGE](state, action) {
      const { payload } = action;
      const { list } = payload;
      return {
        ...state,
        data: list,
      };
    },
  };

  //reducers
  const currentBlog = createReducer(
    currentBlogInitialState,
    currentBlogHandler
  );

  const blogsTable = createReducer(blogsTableInitialState, blogsTableHandler);
  const blogsLastNews = createReducer(
    blogsLastNewsInitialState,
    blogsLastNewsHandler
  );

  const blogsHomepage = createReducer(
    blogsHomepageInitialState,
    blogsHomepageHandler
  );

  return {
    currentBlog,
    blogsTable,
    blogsLastNews,
    blogsHomepage,
  };
};

export default useBlogsReducers;
