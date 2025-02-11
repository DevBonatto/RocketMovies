import { Link } from "react-router-dom"
import styled from "styled-components"

export const Container = styled(Link)`
  display: flex;
  gap: 2.4px;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.SALMON};
`