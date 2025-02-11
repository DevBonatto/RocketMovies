import styled from "styled-components"

export const Container = styled.div`
  height: 186px;
  width: 100%;
  margin-bottom: 24px;
  padding: 20px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_VINE_100};
  text-decoration: none;
  color: inherit; 
  display: block;
`

export const Paragraph = styled.p`
  font-family: "Roboto";
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-weight: 400;
`;

export const Tags = styled.div`
  display: flex;
  gap: 8px;
`