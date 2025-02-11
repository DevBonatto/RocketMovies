import { Container } from "./style"
import { FiMail, FiLock } from "react-icons/fi"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Link } from "react-router-dom";

import registerLoginImg from "../../assets/register-login.jpg"

export function SignIn() {
  return (
    <Container>
      <div className="info">
        <h1>Rocket Movies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>
        <h2>Faça seu login</h2>

        <Input placeholder="Email" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button name="Entrar"/>

        <Link to="/register">Criar conta</Link>
      </div>
      <img src={registerLoginImg} alt="Cadeiras de um cinema/teatro" />
    </Container>
  )
}