import { Header } from "../../components/Header"
import { Button, Container } from "./style"
import { FiPlus } from "react-icons/fi"
import { MyMovies } from "../../components/MyMovies"

export function Home() {
  return (
  <>
    <Header />
    <Container>
      <header>
        <h2>Meus Filmes</h2>
        <Button to="/newmovie">
          <FiPlus />
          Adicionar Filme
        </Button>
        
      </header>
      <main>
        <MyMovies />
        <MyMovies />
        <MyMovies />
      </main>
    </Container>
  </>
  )
}