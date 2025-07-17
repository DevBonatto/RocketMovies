import { Header } from "../../components/Header"
import { Button, Container } from "./style"
import { FiPlus } from "react-icons/fi"
import { MyMovies } from "../../components/MyMovies"
import { useEffect, useState } from "react"
import { api } from "../../services/api"

export function Home() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await api.get("/notes")
        console.log(response.data)
        setMovies(response.data)
      } catch (error) {
        console.error("Erro ao buscar filmes:", error)
      }
    }
    fetchMovies()
  }, [])

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
        {movies.map(movie => (
          <MyMovies key={movie.id} data={movie} />
        ))}  
      </main>
    </Container>
  </>
  )
}