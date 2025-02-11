import { Container } from "./style"
import { Input } from "../../components/Input"
import { FiUser, FiLock, FiMail, FiArrowLeft } from "react-icons/fi"

import registerLoginImg from "../../assets/register-login.jpg"
import { Button } from "../../components/Button"
import { TextButton } from "../../components/TextButton"

export function SignUp() {
  return (
    <Container>
      <div className="info">
        <h1>Rocket Movies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>
        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="Email" type="email" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button name="Cadastrar"/>
        
        <TextButton
          className="back"
          to="/" 
          icon={FiArrowLeft} 
          text="Voltar para o login"
        />
      </div>
      <img src={registerLoginImg} alt="Cadeiras de um cinema/teatro" />
    </Container>
  )
}