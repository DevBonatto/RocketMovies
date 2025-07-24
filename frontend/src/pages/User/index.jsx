import { useState } from "react"
import { Container, Avatar } from "./style"
import { TextButton } from "../../components/TextButton"
import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera } from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"

import blankUser from "../../assets/blank-user.png"

export function User() {
  const { user, updateUser } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState()
  const [newPassword, setNewPassword] = useState()

  const navigate = useNavigate()

  const [avatar, setAvatar] = useState(
    user.avatar
      ? `${api.defaults.baseURL}/files/${user.avatar}`
      : blankUser
  )
  
  const [avatarFile, setAvatarFile] = useState(null)
  
  async function handleSaveUser(e) {
    e.preventDefault()

    let updatedAvatar = user.avatar

    if (avatarFile) {
      const formData = new FormData()
      formData.append("avatar", avatarFile)

      try {
        const response = await api.patch("/users/avatar", formData)
        updatedAvatar = response.data.avatar
        setAvatar(`${api.defaults.baseURL}/files/${response.data.avatar}`)
      } catch (error) {
        alert("Erro ao atualizar o avatar!")
      }
    }

    try {
      await api.put("users", {
        name,
        email,
        password: newPassword,
        old_password: oldPassword,
      })

      const updatedUser = {
        ...user,
        name,
        email,
        avatar: updatedAvatar
      }

      updateUser(updatedUser)

      alert("Usuário atualizado com sucesso!")
      navigate("/")
    } catch (error) {
      if (error.response) {
        alert("Erro ao salvar o usuário: " + error.response.data.message)
      } else {
        alert("Erro inesperado: " + error.message)
      }
    }
  }


  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return (
    <Container>
      <header>
        <TextButton to="/" icon={FiArrowLeft} text="Voltar"/>
      </header>
      <main>
        <form action="">
          <Avatar>
            <img src={avatar} alt={`Foto de ${user.name}`} />
            <label htmlFor="avatar">
              <FiCamera />
              <input
                id="avatar"
                type="file"
                onChange={handleChangeAvatar}
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