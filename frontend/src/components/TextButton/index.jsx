import { Container } from "./style"

export function TextButton( { icon: Icon, text, to, ...rest }) {
  return (
    <Container to={to} {...rest}>
      { Icon && <Icon size={20} /> }
      { text }
    </Container>
  )
}