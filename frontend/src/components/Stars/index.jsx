import { Container } from "./style"
import { FiStar } from "react-icons/fi"

export function Stars() {
  return (
  <Container>
    <FiStar className="fill"/>
    <FiStar className="fill"/>
    <FiStar className="fill"/>
    <FiStar className="fill"/>
    <FiStar/>
  </Container>
  )
}