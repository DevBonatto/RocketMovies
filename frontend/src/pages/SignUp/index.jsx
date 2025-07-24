import { useState } from "react"
import { Container } from "./style"
import { Input } from "../../components/Input"
import { FiUser, FiLock, FiMail, FiArrowLeft } from "react-icons/fi"

import { api } from "../../services/api"

import registerLoginImg from "../../assets/register-login.jpg"
import { Button } from "../../components/Button"
import { TextButton } from "../../components/TextButton"
import { useNavigate } from "react-router-dom"

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp() {

    if (!name.trim() || name.length < 3) {
      return alert("Nome deve ter pelo menos 3 caracteres.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return alert("Digite um email válido.");
    }

    if (password.length < 6) {
      return alert("A senha deve ter pelo menos 6 caracteres.");
    }
    
    if(!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }
    
    api.post("/users", { name, email, password })
    .then(() => {
      alert("Usuário criado com sucesso!")
      navigate("/")
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

        <div className="buttons">
          <Button name="Cadastrar" onClick={handleSignUp}/>
        </div>
  
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