import axios from 'axios';
const useBlogsProviders = () => {
  const postNewBlog = (data) => {
    return axios({
      method: 'post',
      url: `api/new-blog`,
      data,
    });
  };

  const updateBlog = (data) => {
    return axios({
      method: 'put',
      url: `api/update-blog/${data.blogId}`,
      data: {
        title: data.title,
        body: data.body,
        publish: data.publish,
        toHomepage: data.toHomepage,
        image: data.image,
      },
    });
  };

  const getBlog = (blogId) => {
    return axios({
      method: 'get',
      url: `api/blog/${blogId}`,
    });
  };
  const deleteBlog = (blogId) => {
    return axios({
      method: 'delete',
      url: `api/delete-blog/${blogId}`,
    });
  };

  // tABLE
  const getBlogsTable = (page, search, publish, start, end) => {
    return axios({
      method: 'get',
      url: `api/blogs-list?${page && '&page=' + page}${
        search && `&search=${search}`
      }${publish !== 'none' && publish ? `&publish=${publish}` : ''}${
        start && `&start=${start}`
      }${end && `&end=${end}`}`,
    });
  };

  // Last news
  const getBlogsLastNews = (page) => {
    return axios({
      method: 'get',
      url: `api/last-news?${page && '&page=' + page}`,
    });
  };

  //Homepage
  const getBlogsHomepage = () => {
    return axios({
      method: 'get',
      url: `api/homepage-blogs`,
    });
  };
  return {
    postNewBlog,
    updateBlog,
    getBlog,
    deleteBlog,
    getBlogsTable,
    getBlogsLastNews,
    getBlogsHomepage,
  };
};
export default useBlogsProviders;
