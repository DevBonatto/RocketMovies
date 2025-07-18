import { Container } from "./style"
import { FiStar } from "react-icons/fi"

export function Stars({ rating }) {

  const stars = []

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <FiStar key={i} className={i <= rating ? "fill" : ""} />
    )
  }
  
  return (
    <Container>
      {stars}
    </Container>
  )
}