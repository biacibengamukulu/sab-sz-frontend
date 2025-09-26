import styled from 'styled-components';
import tw from 'twin.macro';
import { Pagination } from '@mui/material';

export const StyledContainerPagination = styled.div.attrs({
  className: 'StyledContainerPagination',
})`
  && {
    ${tw`relative`}
    width: 100%;
    @media (max-width: 768px) {
      width: 100%;
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
      color: #d66127;
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
      background: #d66127;
      border-radius: 4px;
      color: #ffffff;
    }
    .MuiButtonBase-root.MuiPaginationItem-previousNext {
      display: none;
    }
    @media (max-width: 768px) {
    }
  }
`;
