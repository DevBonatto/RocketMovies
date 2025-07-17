import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  gap: 6px;
  width: 100%;
  margin: 8px 0 16px;

  svg {
    color: ${({ theme }) => theme.COLORS.SALMON};
  }

  svg.fill {
    color: ${({ theme }) => theme.COLORS.SALMON};
    fill: ${({ theme }) => theme.COLORS.SALMON};
  }
`