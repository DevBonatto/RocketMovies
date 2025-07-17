import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>  isNew ? "transparent" : theme.COLORS.BACKGROUND_BLACK_500};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, isNew }) =>  isNew ? `2px dashed ${theme.COLORS.GRAY_500}` : "none"};

  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
  }

  .button-delete, .button-add {
    color: ${({ theme }) => theme.COLORS.SALMON};
  }

  > input {
    padding: 12px;
    width: 148px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_500};
  }
 }
`