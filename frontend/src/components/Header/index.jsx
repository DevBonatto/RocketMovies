import { Container } from "./style"
import { Input } from "../Input"
import { FiSearch } from "react-icons/fi"
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/auth"

export function Header() {

  const { signOut } = useAuth()

  return (
    <Container>
      <Link to="/" className="title">Rocket Movies</Link>
      <Input icon ={FiSearch}placeholder="Pesquisar pelo título"/>
      <div className="user-info">
        <p>Lucca Bonatto</p>
        <a onClick={signOut}>Sair</a>
      </div>
      <Link to="/user">
        <img src="https://github.com/DevBonatto.png" alt="Foto de Lucca Bonatto" />
      </Link>
    </Container>
  )
}