import styled from "styled-components"

export const Container = styled.button`
  display: flex;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.SALMON};
  border: none;
  height: 56px;
  width: 50%;
  border-radius: 10px;
  margin: 16px 0 42px;
  align-items: center;
`
