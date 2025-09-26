import { trackPromise } from 'react-promise-tracker';
import useProviders from '../../providers';

const useBlogsServices = () => {
  const { useBlogsProviders } = useProviders();
  const {
    postNewBlog,
    getBlog,
    updateBlog,
    deleteBlog,
    getBlogsTable,
    getBlogsLastNews,
    getBlogsHomepage,
  } = useBlogsProviders();

  const postNewBlogService = (data) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(postNewBlog(data), 'postNewBlog'));
      } catch (e) {
        reject(e);
      }
    });
  };

  const updateBlogService = (data) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(updateBlog(data), 'updateBlog'));
      } catch (e) {
        reject(e);
      }
    });
  };
  const getBlogService = (blogId) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(getBlog(blogId), 'getBlog'));
      } catch (e) {
        reject(e);
      }
    });
  };

  const deleteBlogService = (blogId) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(deleteBlog(blogId), 'deleteBlog'));
      } catch (e) {
        reject(e);
      }
    });
  };

  // tABLES
  const getBlogsTableService = (page, search, publish, start, end) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          await trackPromise(
            getBlogsTable(page, search, publish, start, end),
            'getBlogsTable'
          )
        );
      } catch (e) {
        reject(e);
      }
    });
  };

  // Last news
  const getBlogsLastNewsService = (page) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(getBlogsLastNews(page)));
      } catch (e) {
        reject(e);
      }
    });
  };

  // Homepage
  const getBlogsHomepageService = () => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(getBlogsHomepage()));
      } catch (e) {
        reject(e);
      }
    });
  };
  return {
    postNewBlogService,
    updateBlogService,
    getBlogService,
    deleteBlogService,
    getBlogsTableService,
    getBlogsLastNewsService,
    getBlogsHomepageService,
  };
};

export default useBlogsServices;
