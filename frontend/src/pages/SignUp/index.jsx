import { useState } from "react"
import { Container } from "./style"
import { Input } from "../../components/Input"
import { FiUser, FiLock, FiMail, FiArrowLeft } from "react-icons/fi"

import { api } from "../../services/api"

import registerLoginImg from "../../assets/register-login.jpg"
import { Button } from "../../components/Button"
import { TextButton } from "../../components/TextButton"

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSignUp() {
    if(!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }
    
    api.post("/users", { name, email, password })
    .then(() => {
      alert("Usuário criado com sucesso!")
    })
    .catch(error => {
      if(error.response) {
        alert(error.response.data.message)
      }else {
        alert("Não foi possível cadastrar o usuário!")
      }
    })
  }

  return (
    <Container>
      <div className="info">
        <h1>Rocket Movies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>
        <h2>Crie sua conta</h2>

        <Input 
          placeholder="Nome" 
          type="text" 
          icon={FiUser} 
          onChange={e => setName(e.target.value)}
        />
        <Input 
          placeholder="Email" 
          type="email" 
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />
        <Input 
          placeholder="Senha" 
          type="password" 
          icon={FiLock} 
          onChange={e => setPassword(e.target.value)}
        />

        <Button name="Cadastrar" onClick={handleSignUp}/>
        
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