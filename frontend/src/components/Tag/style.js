import styled from "styled-components"

export const Container = styled.div`
  margin-top: 12px;
  padding: 5px 16px;
  border-radius: 8px;
  display: flex;
  align-items: self-start;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK_300};

  p {
    font-family: "Roboto";
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`