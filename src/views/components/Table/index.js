import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledContainerTable,
  StyledDataGrid,
  StyledTablePagination,
} from './Table.styles';

const Table = (props) => {
  const {
    loading,
    className,
    pagination,
    rows,
    columns,
    lastPage,
    onPageChange,
    currentPage,
    checkboxSelection,
    onRowClick,
  } = props;

  return (
    <StyledContainerTable className={className} style={{ height: 590, width: '100%' }}>
      <StyledDataGrid
        loading={loading}
        rowHeight={48}
        showCellRightBorder={false}
        showColumnRightBorder={false}
        disableColumnSelector
        disableColumnFilter
        disableColumnMenu
        columnBuffer={0}
        columnThreshold={0}
        rows={rows}
        columns={columns}
        paginationMode={'client'}
        checkboxSelection={checkboxSelection}
        onRowClick={onRowClick}
      ></StyledDataGrid>
      {pagination && (
        <StyledTablePagination
          showFirstButton
          showLastButton
          shape="rounded"
          page={currentPage}
          count={lastPage}
          onChange={onPageChange}
        />
      )}
    </StyledContainerTable>
  );
};

Table.propTypes = {
  className: PropTypes.string,
  pagination: PropTypes.bool,
  loading: PropTypes.bool,
  rows: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  lastPage: PropTypes.number,
  checkboxSelection: PropTypes.bool,
  // paginationMode: PropTypes.string,
  onPageChange: PropTypes.func,
  currentPage: PropTypes.number,
  onRowClick: PropTypes.func,
};

Table.defaultProps = {
  // paginationMode: 'client',
  currentPage: 0,
  loading: false,
};

export default Table;
