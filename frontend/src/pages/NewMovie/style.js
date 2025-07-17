import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  main {
    margin-top: 36px;
    width: 100%;
    max-width: 1200px;
    
    h2 {
      font-size: 36px;
      margin: 24px 0 40px;
    }
  }
`

export const Form = styled.form`
  .header {
    display: flex;
    gap: 40px;
  }

  textarea {
    width: 100%;
    height: 270px;
    margin-top: 20px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK_500};
    border-radius: 10px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: none;
    outline: none;
    padding: 16px;
    resize: none;
  }

  h3 {
    margin: 28px 0 20px
  }

  .tags {
    display: flex;
    gap: 24px;
    width: 100%;
    border-radius: 8px;
    padding: 16px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK_900};
  }

  .buttons {
    display: flex;
    gap: 40px;
  }

  .buttons .delete {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK_900};   
    color: ${({ theme }) => theme.COLORS.SALMON};
  }
`