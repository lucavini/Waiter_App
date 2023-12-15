import styled from 'styled-components';

export const TableComponent = styled('table')`
  table-layout: auto;
  width: 100%;
  max-width: 1900px;
  border-spacing: 0;
  background: ${({ theme }) => theme.plain.light};
  box-shadow: 2px 2px 20px rgba(204, 204, 204, 0.4);
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 8px;
`;

export const Header = styled('thead')`
  height: 48px;
  background: ${({ theme }) => theme.plain.main};
`;

export const Body = styled('tbody')``;

export const Row = styled('tr')`
  th,
  td {
    padding: 20px;
    min-width: 50px;
    text-align: left;
  }

  td {
    border-bottom: 1px solid rgba(204, 204, 204, 0.4);

    .action-buttoms {
      display: flex;
      max-width: 60px;
      justify-content: space-between;

      div {
        cursor: pointer;
      }
    }
  }
`;
