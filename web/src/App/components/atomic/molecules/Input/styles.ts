import styled from 'styled-components';

export const Container = styled('div')`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled('div')`
  height: 56px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px;

  border: 1px solid ${({ theme }) => theme.plain.dark};
  border-radius: 8px;

  &:focus-within {
    border-color: ${({ theme }) => theme.gray.main};
  }

  input {
    width: 100%;
    height: 100%;
    padding: 0px 16px;
    border: none;
    background: transparent;

    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.gray.main};

    &:focus {
      outline: none;
    }

    &::placeholder {
      font-weight: 400;
      font-size: 14px;
      color: ${({ theme }) => theme.gray.light};
    }
  }
`;
