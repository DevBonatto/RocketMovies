import { useState } from "react";
import { Container } from "./style"
import { FiMail, FiLock } from "react-icons/fi"
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import registerLoginImg from "../../assets/register-login.jpg"

export function SignIn() {
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  const { signIn } = useAuth()

  function handleSignIn(){
    signIn({ email, password })
  }

  return (
    <Container>
      <div className="info">
        <h1>Rocket Movies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>
        <h2>Faça seu login</h2>

        <Input 
          placeholder="Email" 
          type="text" 
          icon={FiMail} 
          onChange={e => setEmail(e.target.value)}
        />
        <Input 
          placeholder="Senha" 
          type="password" 
          icon={FiLock} 
          onChange={e => setPassword(e.target.value)}
        />
        <Button 
          name="Entrar"
          onClick={handleSignIn}
        />

        <Link to="/register">Criar conta</Link>
      </div>
      <img src={registerLoginImg} alt="Cadeiras de um cinema/teatro" />
    </Container>
  )
}