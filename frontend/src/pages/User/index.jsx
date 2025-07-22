import { useState } from "react"
import { Container, Avatar } from "./style"
import { TextButton } from "../../components/TextButton"
import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera } from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"

export function User() {
  const { user } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState()
  const [newPassword, setNewPassword] = useState()

  async function handleSaveUser(e) {
    e.preventDefault()

    try {
      await api.put("users", {
        name, 
        email, 
        password: newPassword,
        old_password: oldPassword,
      })
      alert("Usuário atualizado com sucesso!")
    } catch (error) {
        if (error.response) {
          alert("Erro ao salvar o usuário: " + error.response.data.message)
        } else {
          alert("Erro inesperado: " + error.message)
        }
      }
  }

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
            
          <Input 
            type="text" 
            icon={FiUser} 
            value={name} 
            onChange={(e => setName(e.target.value))}
            placeholder="Nome"
          />
          <Input 
            type="email" 
            icon={FiMail} 
            value={email} 
            onChange={(e => setEmail(e.target.value))}
            placeholder="E-mail"
          />
          <Input 
            type="password" 
            icon={FiLock} 
            onChange={(e => setOldPassword(e.target.value))}
            placeholder="Senha Atual" 
          />
          <Input 
            type="password" 
            icon={FiLock} 
            onChange={(e => setNewPassword(e.target.value))}
            placeholder="Nova Senha" 
          />

          <Button name="Salvar" onClick={(e) => handleSaveUser(e) } />
        </form>
      </main>
    </Container>
  )
}