import styled from "styled-components"

export const Container = styled.div`
  header {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_VINE_100};
    width: 100%;
    height: 144px;
    display: flex;
    align-items: center;
    padding-left: 144px;
  }

  main {
    width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    form {
      width: 100%;
      margin-top: -100px;

      > div:nth-child(4) {
        margin-top: 24px;
      }
    }
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: 0 auto 32px;

  width: 186px;
  height: 186px;

  img {
    border-radius: 50%;
    width: 186px;
    height: 186px;
  }

  > label {
    width: 48px;
    height: 48px;
    border-radius: 50%;

    background-color: ${({ theme }) => theme.COLORS.SALMON};

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: black;
    }
  }
`