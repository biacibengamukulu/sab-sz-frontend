import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useApi from '../../../api';
import useAssets from '../../../assets';
import useHelpers from '../../../helpers';
import useModels from '../../../models';
import {
  StyledContainerActions,
  StyledContainerActionsButton,
  StyledItemStatus,
} from '../../../views/screens/BlogsTable/BlogsTable.styles';

const useBlogsTable = () => {
  const { useIcons } = useAssets();
  const { iconEdit: IconEdit, iconDelete: IconDelete } = useIcons();

  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useNavigation, usePromises } = useQuickFunctions();
  const { navigateTo } = useNavigation();
  const { promiseInProgressArea: promiseGetBlogsTable } =
    usePromises('getBlogsTable');
  const { promiseInProgressArea: promiseDeleteBlog } =
    usePromises('deleteBlog');
  const { promiseInProgressArea: promiseGetBlog } = usePromises('getBlog');

  // Api
  const { useActions } = useApi();
  const { dispatch, useBlogsActions } = useActions();
  const { actGetBlogsTable, actDeleteBlog, actGetBlog, actResetCurrentBlog } =
    useBlogsActions();

  // Models
  const { useSelectors } = useModels();
  const { useSelector, useBlogsSelectors } = useSelectors();
  const { blogsTableSelector } = useBlogsSelectors();
  const { data, currentPage, lastPage, pageSize, totalRows } =
    useSelector(blogsTableSelector);
  // React
  const [lastPageTable, setLastPageTable] = useState(1);
  const [rows, setRows] = useState([]);
  const [currentPageTable, setCurrentPageTable] = useState(1);
  const [searchFilter, setSearchFilter] = useState('');
  const [currentBlogDelete, setCurrentBlogDelete] = useState('');
  const [currentBlog, setCurrentBlog] = useState('');
  const [customFilter, setCustomFilter] = useState({
    publish: '',
    start: '',
    end: '',
  });

  //Table initial data
  useEffect(() => {
    dispatch(actResetCurrentBlog());
    dispatch(
      actGetBlogsTable({
        page: currentPage,
        search: searchFilter,
        ...customFilter,
      })
    );
  }, []);

  // Table when page change
  useEffect(() => {
    dispatch(
      actGetBlogsTable({
        page: currentPageTable,
        search: searchFilter,
        ...customFilter,
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
  const handleRedirectToNewContent = () => {
    navigateTo('/new-content');
  };

  const handleEditBlog = (blogId) => {
    dispatch(actGetBlog(blogId, handleRedirectToNewContent));
  };

  const onResetAfterDelete = () => {
    dispatch(
      actGetBlogsTable({
        page: 1,
        search: searchFilter,
        ...customFilter,
      })
    );
    setCurrentPageTable(1);
  };

  const handleDeleteBlog = (blogId) => {
    dispatch(actDeleteBlog(blogId, onResetAfterDelete));
  };

  // Handlers: date format
  const handleDateFormat = (dateOld) => {
    const date = new Date(dateOld);
    return `${
      date.getUTCDate() < 10 ? `0${date.getUTCDate()}` : date.getUTCDate()
    }/${
      date.getUTCMonth() < 9
        ? `0${date.getUTCMonth() + 1}`
        : date.getUTCMonth() + 1
    }/${date.getUTCFullYear()}`;
  };

  // Handlers: table
  const handleTableUpdate = () => {
    setRows(data);
    setLastPageTable(lastPage);
  };

  const handlePageChange = (e, newPage) => {
    setCurrentPageTable(newPage);
  };

  // Handlers: search filter
  const onSearch = (data) => {
    setSearchFilter(data.searchField);
    dispatch(
      actGetBlogsTable({
        page: 1,
        search: data.searchField,
        ...customFilter,
      })
    );
    setCurrentPageTable(1);
  };
  const onResetSearch = (data) => {
    setSearchFilter(data);
    dispatch(
      actGetBlogsTable({
        page: 1,
        search: data,
        ...customFilter,
      })
    );
    setCurrentPageTable(1);
  };

  const handleResetSearch = (value) => {
    !value && onResetSearch(value);
  };

  const onFilter = (data) => {
    dispatch(
      actGetBlogsTable(
        {
          page: currentPageTable,
          search: searchFilter,
          ...data,
        },
        setCustomFilter(data)
      )
    );
  };
  const columns = [
    {
      field: 'id',
      sortable: false,
      hide: true,
    },
    {
      field: 'title',
      headerName: 'TITLE',
      width: 220,
      sortable: false,
    },

    {
      field: 'date',
      headerName: 'DATE',
      width: 160,
      sortable: false,
      renderCell: (cellValues) => handleDateFormat(cellValues.row.date),
    },
    {
      field: 'author',
      headerName: 'AUTHOR',
      width: 220,
      sortable: false,
      renderCell: (cellValues) =>
        `${cellValues.row.author.name} ${cellValues.row.author.surname}`,
    },
    {
      field: 'publish',
      headerName: 'STATUS',
      width: 240,
      sortable: false,
      renderCell: (cellValues) => {
        return cellValues.row.publish ? (
          <StyledItemStatus idStatus={cellValues.row.publish}>
            Published
          </StyledItemStatus>
        ) : (
          <StyledItemStatus idStatus={cellValues.row.publish}>
            Not published
          </StyledItemStatus>
        );
      },
    },
    {
      field: 'ACTION',
      headerName: 'ACTION',
      width: 100,
      sortable: false,
      renderCell: (cellValues) => {
        return (
          <StyledContainerActions>
            <StyledContainerActionsButton
              onClick={
                promiseGetBlog
                  ? () => {}
                  : () => {
                      handleEditBlog(cellValues.row.id);
                      setCurrentBlog(cellValues.row.id);
                    }
              }
            >
              {promiseGetBlog && currentBlog === cellValues.row.id ? (
                <CircularProgress size={20} />
              ) : (
                <IconEdit />
              )}
            </StyledContainerActionsButton>
            {/* is necessary to define in the backend wich blogs cant be deleted */}

            <StyledContainerActionsButton
              onClick={
                promiseDeleteBlog
                  ? () => {}
                  : () => {
                      handleDeleteBlog(cellValues.row.id);
                      setCurrentBlogDelete(cellValues.row.id);
                    }
              }
            >
              {promiseDeleteBlog && currentBlogDelete === cellValues.row.id ? (
                <CircularProgress size={20} />
              ) : (
                <IconDelete />
              )}
            </StyledContainerActionsButton>
          </StyledContainerActions>
        );
      },
    },
  ];

  return {
    promiseGetBlogsTable,

    columns,
    rows,
    pageSize,
    totalRows,
    currentPageTable,
    lastPageTable,
    handlePageChange,

    onSearch,
    onFilter,
    handleResetSearch,

    handleRedirectToNewContent,
  };
};

export default useBlogsTable;
