import { Container, Avatar } from "./style"
import { TextButton } from "../../components/TextButton"
import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera } from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function User() {
  return (
    <Container>
      <header>
        <TextButton to="/" icon={FiArrowLeft} text="Voltar"/>
      </header>
      <main>
        <form action="">
          <Avatar>
            <img 
              src="https://github.com/DevBonatto.png" 
              alt="Foto do usuário" 
            />
            <label htmlFor="avatar">
              <FiCamera />
              <input
                id="avatar"
                type="file"
              />
            </label>
          </Avatar>
            
          <Input type="text" icon={FiUser} defaultValue="Lucca Bonatto" />
          <Input type="email" icon={FiMail} defaultValue="devbonatto@gmail.com" />
          <Input type="password" icon={FiLock} placeholder="Senha Atual" />
          <Input type="password" icon={FiLock} placeholder="Nova Senha" />

          <Button name="Salvar" />
        </form>
      </main>
    </Container>
  )
}