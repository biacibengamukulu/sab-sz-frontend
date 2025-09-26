import { useEffect, useState } from 'react';
import useApi from '../../../api';
import draftToHtml from 'draftjs-to-html';

import useModels from '../../../models';
import useHelpers from '../../../helpers';
import useComponentHooks from '../../componentHooks';
import _ from 'lodash';

const useBlogsEditor = (setValue) => {
  // helpers
  const { useQuickFunctions } = useHelpers();
  const { useNavigation, usePromises, useFileManager } = useQuickFunctions();
  const { handleFileNameExtension } = useFileManager();
  const { navigateTo, goBack } = useNavigation();
  // Helpers
  const { promiseInProgressArea: promisePostNewBlog } =
    usePromises('postNewBlog');
  // Api
  const { useActions } = useApi();
  const { dispatch, useBlogsActions } = useActions();
  const { actPostNewBlog, actUpdateBlog } = useBlogsActions();

  // Models
  const { useSelectors } = useModels();
  const { useSelector, useUserSelectors, useBlogsSelectors } = useSelectors();
  const { userSelector } = useUserSelectors();
  const { currentBlogSelector } = useBlogsSelectors();
  const { profile } = useSelector(userSelector);
  const { currentBlog } = useSelector(currentBlogSelector);

  // hooks
  const { useModal } = useComponentHooks();
  const {
    modalState: modalBlogPreviewState,
    handleShowModal: handleShowModalBlogPreview,
  } = useModal();
  const {
    modalState: modalBlogSavedState,
    handleShowModal: handleShowModalBlogSaved,
  } = useModal();

  // react
  const [blogPreviewState, setBlogPreviewState] = useState({
    title: '',
    image: '',
    body: '',
    publish: '',
    toHomepage: '',
  });
  const fileTypesImage = ['image/jpeg', 'image/png'];

  useEffect(() => {
    _.forEach(currentBlog, (value, key) => {
      if (key === 'publish' || key === 'toHomepage') {
        setValue && value && setValue(key, value ? true : false);
        setValue && value === null && setValue(key, value ? true : false);
      } else if (key === 'image') {
        setValue &&
          value &&
          setValue(
            'image',
            handleFileNameExtension({
              name: '',
              data: value,
            })
          );
      } else {
        setValue && value && setValue(key, value);
        setValue && value === null && setValue(key, '');
      }
    });
  }, [currentBlog]);

  useEffect(() => {
    setValue(
      'image',
      handleFileNameExtension({
        name: '',
        data: currentBlog.image,
      })
    );
  }, [currentBlog.image]);
  const handleGoToLogin = () => {
    navigateTo(`/login`);
  };

  const onChangeFileImage = ({ event, remove, reset, id }) => {
    event.preventDefault();
    if (event.target.files.length > 0) {
      const { type } = event.target.files[0];
      if (!fileTypesImage.some((s) => type.includes(s))) {
        alert('invalid document type');
        remove(reset, id);
        setValue(
          'image',
          handleFileNameExtension({
            name: '',
            data: '',
          })
        );
      } else {
        if (event.target.files[0].size > 2000000) {
          alert('Document too large, please try again with 2MB or less');
          remove(reset, id);
          setValue(
            'image',
            handleFileNameExtension({
              name: '',
              data: '',
            })
          );
        }
      }
    }
  };
  /**
   * Handlers: Rich text
   */

  /**
   * Handlers: modals
   */
  // Post saved
  const handleCloseModalBlogSaved = () => {
    handleShowModalBlogSaved();
    navigateTo('/blogs-table');
  };
  // handle fields
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const handleDate = () => {
    const currentFullDate = new Date();
    const currentYear = currentFullDate.getFullYear();
    const currentMonth = monthNames[currentFullDate.getMonth()];
    const currentDay = currentFullDate.getDate();

    return ` ${currentDay} ${currentMonth} ${currentYear}`;
  };
  const handleSuccessSaved = () => {
    handleShowModalBlogSaved(
      'Content saved!',
      'The new content was saved successfully'
    );
  };
  const handleSuccessUpdate = () => {
    handleShowModalBlogSaved(
      'Content updated!',
      'The content was updated successfully'
    );
  };
  // Modal preview
  const handleCloseModalBlogPreview = () => {
    handleShowModalBlogPreview();
  };

  const onSubmitForPreview = (data) => {
    const dataToPreview = {
      title: data.title,
      image: data.image,
      publish: data.publish ? 1 : 0,
      toHomepage: data.toHomepage ? 1 : 0,
    };
    dataToPreview.body =
      typeof data.body === 'string' ? data.body : draftToHtml(data.body);
    setBlogPreviewState(dataToPreview);
    handleCloseModalBlogPreview();
  };

  const onSubmitBlog = (data) => {
    const dataToSend = {
      title: data.title,
      image: data.image.data,
      publish: data.publish ? 1 : 0,
      toHomepage: data.toHomepage ? 1 : 0,
    };
    dataToSend.body =
      typeof data.body === 'string' ? data.body : draftToHtml(data.body);
    currentBlog.blogId
      ? dispatch(
          actUpdateBlog(
            { blogId: currentBlog.blogId, ...dataToSend },
            handleSuccessUpdate
          )
        )
      : dispatch(actPostNewBlog(dataToSend, handleSuccessSaved));
  };
  return {
    promisePostNewBlog,

    fileTypesImage,
    profile,
    currentBlog,
    handleDate,
    handleGoToLogin,
    goBack,

    handleFileNameExtension,
    onChangeFileImage,

    modalBlogSavedState,
    handleCloseModalBlogSaved,

    modalBlogPreviewState,
    handleCloseModalBlogPreview,
    blogPreviewState,
    onSubmitForPreview,

    onSubmitBlog,
  };
};

export default useBlogsEditor;
