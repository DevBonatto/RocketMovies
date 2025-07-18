import styled from "styled-components"

export const Container = styled.div`
  max-width: 1200px;
  margin: 40px auto 0;

  h2 {
    font-size: 36px;
  }

  .title {
    margin: 24px 0;
    display: flex;
    align-items: baseline;
    gap: 20px;
  }

  .user-info {
    display: flex;
    gap: 8px;
  }

  .user-info img {
    width: 16px;
    border-radius: 36px;
  }

  .user-info svg {
    color: ${({ theme }) => theme.COLORS.SALMON};
  }

  .tags {
    display: flex;
    gap: 8px;
    margin: 40px 0;
  }

  p {
    color: ${({ theme }) => theme.COLORS.WHITE_100};;
    font-family: "Roboto Slab";
  }

  .about {
    max-height: 400px;
    overflow-y: auto;
    padding-right: 10px;
  }

  .button {
    width: 100%;
    display: flex;
    gap: 20px;
    justify-content: center;
  }

  button {
    width: 25%;
  }
`