import styled from 'styled-components';
import { Table as t } from 'react-bootstrap';

export const Table = styled(t)`
  thead {
    border-radius: 6px !important;
    padding: 10px;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
    th {
      font-weight: 400;
      font-size: 16px;
      padding: 30px;
      display: table-cell;
      vertical-align: middle;
    }
  }
  tbody {
    padding: 10px;
    tr {
      border-style: none;
    }
    td {
      font-weight: 400;
      font-size: 16px;
      color: ${(props) => props.theme.colors.primary};
      padding: 30px;
      vertical-align: middle;
    }
  }
  .cellOptions {
    text-align: end;
    svg {
      margin: 0 20px;
      cursor: pointer;
    }
  }
`;
