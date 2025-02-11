import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 42px 123px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.SALMON};

  a.title {
    font-size: 24px;
    font-weight: 700;
    margin-right: 64px;
    text-decoration: none;
    width: 240px;

    color: ${({ theme }) => theme.COLORS.SALMON};
  }

  .user-info {
    font-size: 14px;
    margin-left: 64px;
    width: 140px;
    text-align: end;
    margin-right: 8px;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }
  }

  a img {
    max-width: 64px;
    border-radius: 50%;
  }
`