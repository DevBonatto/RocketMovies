import { Container } from "./style"

export function Tag({ name, ...rest}) {
  return (
    <Container {...rest}>
      <p>{name}</p>
    </Container>
  )
}