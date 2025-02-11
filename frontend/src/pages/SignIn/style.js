import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  height: 100vh;

  .info {
    display: grid;
    place-content: center;
    margin: 0 auto;
    
    h1 {
      font-size: 48px;
      color: ${({ theme }) => theme.COLORS.SALMON};
      font-weight: 700;
    }
    p {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 14px;
      margin-bottom: 48px;
    }

    h2 {
      margin-bottom: 48px;
    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.SALMON};
      font-weight: 400;
      margin: 0 auto;
    }
  }

  img {
    width: 60%;
  }
`;