import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledContainerPagination,
  StyledTablePagination,
} from './Pagination.styles';

const Pagination = (props) => {
  const { className, lastPage, onPageChange, currentPage } = props;

  return (
    <StyledContainerPagination className={className}>
      <StyledTablePagination
        showFirstButton
        showLastButton
        shape="rounded"
        page={currentPage}
        count={lastPage}
        onChange={onPageChange}
      />
    </StyledContainerPagination>
  );
};

Pagination.propTypes = {
  className: PropTypes.string,
  pagination: PropTypes.bool,
  lastPage: PropTypes.number,
  checkboxSelection: PropTypes.bool,
  onPageChange: PropTypes.func,
  currentPage: PropTypes.number,
  onRowClick: PropTypes.func,
};

Pagination.defaultProps = {
  // paginationMode: 'client',
  currentPage: 0,
};

export default Pagination;
