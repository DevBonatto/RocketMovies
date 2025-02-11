import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;

  width: 100%;
  margin-bottom: 8px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK_500};
  border-radius: 10px;

  input {
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`