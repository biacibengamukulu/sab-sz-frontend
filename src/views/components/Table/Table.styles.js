import styled from 'styled-components';
import tw from 'twin.macro';
import { DataGrid } from '@mui/x-data-grid';
import { Pagination } from '@mui/material';

export const StyledContainerTable = styled.div.attrs({
  className: 'StyledContainerTable',
})`
  && {
    ${tw`relative`}
    width: 100%;
    height: 590px;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;
export const StyledDataGrid = styled(DataGrid).attrs({
  className: 'StyledDataGrid',
})`
  && {
    ${tw`relative`}
    width: 100%;
    height: 590px;
    max-height: 560px;
    border: none;

    @media (max-width: 768px) {
      width: 100%;
    }
    .MuiDataGrid-main {
      height: 560px;
      max-height: 560px;
    }

    // Spinner component
    .MuiDataGrid-main .MuiDataGrid-overlay {
      background: rgba(34, 46, 89, 0.15);
      backdrop-filter: blur(4px);
      z-index: 2;
    }

    .MuiDataGrid-root .MuiDataGrid-columnHeader,
    .MuiDataGrid-root .MuiDataGrid-cell {
      padding: 0 16px !important;
    }
    .MuiDataGrid-main .MuiDataGrid-cell:focus {
      outline: none;
    }
    .MuiDataGrid-columnSeparator {
      display: none;
    }
    .MuiDataGrid-main .MuiDataGrid-columnsContainer {
      // min-height: 48px !important;
      // max-height: 48px !important;
      background: #ffffff;

      color: #b6bbc1;
      font-size: 12px;
      // line-height: 48px !important;
      font-family: 'GothamRnd-Medium' !important;
      font-weight: 100 !important;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
    }

    .MuiDataGrid-row {
      border-top: 1px dashed #dae0e8;
      padding: 0 6px !important;

      font-size: 14px;
      line-height: 20px;

      letter-spacing: -0.006em;
      font-family: 'GothamRnd-Book' !important;
      font-weight: 400 !important;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
      color: #2c2d2e;
    }
    .MuiDataGrid-main .MuiDataGrid-row:hover {
      background-color: rgba(218, 223, 240, 0.64) !important;
    }
    .MuiDataGrid-main .MuiDataGrid-row:nth-child(even) {
      background-color: #f8f9fa;
    }
    .MuiDataGrid-main .MuiDataGrid-row:nth-child(even):hover {
      background-color: rgba(218, 223, 240, 0.64) !important;
    }
    .MuiDataGrid-main .MuiDataGrid-row:hover {
      cursor: pointer;
    }
    .MuiDataGrid-main .Mui-selected {
      background-color: rgba(218, 223, 240, 0.64) !important;
    }
    .MuiDataGrid-main .MuiDataGrid-cell {
      border: 0;
    }

    .MuiDataGrid-main .MuiDataGrid-columnHeader {
      border: 0;
      ${(props) => {
        return `
        ${props.tabindex && `color: red !important;`}
        `;
      }}
    }
    .MuiDataGrid-footerContainer .MuiTablePagination-root {
      display: none;
    }
    .MuiDataGrid-selectedRowCount {
      display: none;
    }
    .MuiDataGrid-footerContainer {
      height: 0;
      min-height: 0;
    }
    .MuiDataGrid-windowContainer {
      max-height: 540px;
    }
    .MuiDataGrid-window {
      max-height: 500px;
    }
  }
`;
export const StyledTablePagination = styled(Pagination).attrs({
  className: 'StyledTablePagination StyledTypography',
})`
  && {
    ${tw`relative flex`}
    justify-content: flex-end;

    .MuiPaginationItem-root {
      font-family: 'GothamRnd-Medium' !important;
      font-size: 14px;
      line-height: 20px;

      letter-spacing: -0.006em;
      color: #394D94;
    }

    .MuiPagination-ul {
      left: 200px;
    }

    .MuiButtonBase-root {
      margin: 2px;
      min-width: 24px;
      height: 24px;
    }

    .MuiButtonBase-root.Mui-selected {
      background: #394D94;
      border-radius: 4px;
      color: #ffffff;
    }
    .MuiButtonBase-root.MuiPaginationItem-previousNext {
      display: none;
    }
    @media (max-width: 768px) {
    }
  }
  & 
`;
