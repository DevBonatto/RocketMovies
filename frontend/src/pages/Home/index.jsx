import { Header } from "../../components/Header"
import { Button, Container } from "./style"
import { FiPlus } from "react-icons/fi"
import { MyMovies } from "../../components/MyMovies"
import { useEffect, useState } from "react"
import { api } from "../../services/api"

export function Home() {
  const [movies, setMovies] = useState([])
  const [allMovies, setAllMovies] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await api.get("/notes")
        setAllMovies(response.data)
        setMovies(response.data)  
      } catch (error) {
        console.error("Erro ao buscar filmes:", error)
      }
    }
    fetchMovies()
  }, [])

  useEffect(() => {
    const filtered = allMovies.filter(movie =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    )
    setMovies(filtered)
  }, [search])

  return (
  <>
    <Header onSearch={setSearch} />
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