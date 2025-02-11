import { Container } from "./style"

export function Button({name, icon:Icon, ...rest}) {
  return (
    <Container {...rest}>
      {Icon && <Icon size={20} />}
      {name}
    </Container>
  )
  
}