import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    font-size: 32px;
    font-weight: 400;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;

    h2 {
      font-size: 32px;
    }
  }

  header Button {
    margin: 0;
    width: 240px;
  }

  main {
    margin-top: 36px;
    padding-right: 8px;
    max-height: 640px;
    overflow-y: auto;
    width: 100%;
    max-width: 1200px;
  }
`

export const Button = styled(Link)`
  display: flex;
  font-size: 16px;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  gap: 2px;
  background-color: ${({ theme }) => theme.COLORS.SALMON};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK_900};
  border: none;
  border-radius: 8px;
  padding: 16px;
`
