import useStrings from '../../../strings';
import useServices from '../../services';

const useBlogsActions = () => {
  // Strings
  const { useTypes } = useStrings();
  const { useBlogsTypes } = useTypes();
  const {
    POST_NEW_BLOG,
    GET_BLOG,
    UPDATE_BLOG,
    DELETE_BLOG,
    RESET_CURRENT_BLOG,
    GET_BLOGS_TABLE,
    GET_BLOGS_LAST_NEWS,
    GET_BLOGS_HOMEPAGE,
    RESET_FIELD_IMAGE,
  } = useBlogsTypes();

  // Services
  const { useBlogsServices } = useServices();
  const {
    postNewBlogService,
    getBlogService,
    updateBlogService,
    deleteBlogService,
    getBlogsTableService,
    getBlogsLastNewsService,
    getBlogsHomepageService,
  } = useBlogsServices();

  const actPostNewBlog = (data, onSuccess, onError) => async (dispatch) => {
    try {
      const response = await postNewBlogService(data);
      dispatch({
        type: POST_NEW_BLOG,
        payload: response.data,
      });
      onSuccess && onSuccess(response.data);
    } catch (e) {
      onError && onError(e);
    }
  };

  const actUpdateBlog = (data, onSuccess, onError) => async (dispatch) => {
    try {
      const response = await updateBlogService(data);
      dispatch({
        type: UPDATE_BLOG,
        payload: response.data,
      });
      onSuccess && onSuccess(response.data);
    } catch (e) {
      onError && onError(e);
    }
  };

  const actGetBlog = (blogId, onSuccess, onError) => async (dispatch) => {
    try {
      const response = await getBlogService(blogId);
      dispatch({
        type: GET_BLOG,
        payload: {
          ...response.data,
          blogId: blogId,
        },
      });
      onSuccess && onSuccess(response.data);
    } catch (e) {
      onError && onError(e);
    }
  };

  const actDeleteBlog = (blogId, onSuccess, onError) => async (dispatch) => {
    try {
      const response = await deleteBlogService(blogId);
      dispatch({
        type: DELETE_BLOG,
        payload: response.data,
      });
      onSuccess && onSuccess(response.data);
    } catch (e) {
      onError && onError(e);
    }
  };

  const actResetCurrentBlog = (onSuccess, onError) => async (dispatch) => {
    try {
      dispatch({
        type: RESET_CURRENT_BLOG,
      });
      onSuccess && onSuccess();
    } catch (e) {
      onError && onError(e);
    }
  };
  // tABLE
  const actGetBlogsTable =
    (
      { page, search = '', publish = '', start = '', end = '' },
      onSuccess,
      onError
    ) =>
    async (dispatch) => {
      try {
        const response = await getBlogsTableService(
          page,
          search,
          publish,
          start,
          end
        );
        dispatch({
          type: GET_BLOGS_TABLE,
          payload: response.data.list,
        });
        onSuccess && onSuccess(response.data.list);
      } catch (e) {
        onError && onError(e);
      }
    };

  // hOMEPAGE
  const actGetBlogsHomepage = (onSuccess, onError) => async (dispatch) => {
    try {
      const response = await getBlogsHomepageService();
      dispatch({
        type: GET_BLOGS_HOMEPAGE,
        payload: response.data,
      });
      onSuccess && onSuccess(response.data);
    } catch (e) {
      onError && onError(e);
    }
  };
  const actResetFieldImage = (onSuccess, onError) => async (dispatch) => {
    try {
      dispatch({
        type: RESET_FIELD_IMAGE,
      });
      onSuccess && onSuccess();
    } catch (e) {
      onError && onError(e);
    }
  };
  // last news
  const actGetBlogsLastNews =
    ({ page }, onSuccess, onError) =>
    async (dispatch) => {
      try {
        const response = await getBlogsLastNewsService(page);
        dispatch({
          type: GET_BLOGS_LAST_NEWS,
          payload: response.data.list,
        });
        onSuccess && onSuccess(response.data.list);
      } catch (e) {
        onError && onError(e);
      }
    };
  return {
    actPostNewBlog,
    actResetFieldImage,
    actUpdateBlog,
    actGetBlog,
    actDeleteBlog,
    actResetCurrentBlog,
    actGetBlogsTable,
    actGetBlogsLastNews,
    actGetBlogsHomepage,
  };
};
export default useBlogsActions;
