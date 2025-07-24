import { Container } from "./style"
import { Input } from "../Input"
import { FiSearch } from "react-icons/fi"
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"

import blankUser from "../../assets/blank-user.png"


export function Header({ onSearch }) {

  const { signOut, user } = useAuth()

  const avatarURL = user.avatar
  ? `${api.defaults.baseURL}/files/${user.avatar}`
  : blankUser;

  return (
    <Container>
      <Link to="/" className="title">Rocket Movies</Link>
      <Input
        icon={FiSearch}
        placeholder="Pesquisar pelo título"
        onChange={(e) => onSearch(e.target.value)}
      />
      <div className="user-info">
        <p>{ user.name }</p>
        <a onClick={signOut}>Sair</a>
      </div>
      <Link to="/user">
        <img src={avatarURL} alt={user.name} />
      </Link>
    </Container>
  )
}