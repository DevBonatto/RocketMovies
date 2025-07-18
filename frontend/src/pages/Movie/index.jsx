import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { api } from "../../services/api"
import { Container } from "./style"

import { Header } from "../../components/Header"
import { TextButton } from "../../components/TextButton"
import { FiArrowLeft, FiClock } from "react-icons/fi"
import { Stars } from "../../components/Stars"
import { Tag } from "../../components/Tag"

export function Movie() {
  const { id } = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${id}`)
      setData(response.data)
    }

    fetchNote()
  }, [id])

  if (!data) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <Header />
      <Container>
        <TextButton icon={FiArrowLeft} text="Voltar" to="/" />

        <div className="title">
          <h2>{data.title}</h2>
          <Stars rating={data.rating} />
        </div>

        <div className="user-info">
          <img src="https://github.com/DevBonatto.png" alt="Foto do usuário" />
          <p>Por Você</p>
          <p><FiClock /> {data.updated_at}</p> 
        </div>

        <div className="tags">
          {data.tags && data.tags.map(tag => (
            <Tag key={tag.id} name={tag.name} />
          ))}
        </div>
        
        <div className="about">
          <p>{data.description}</p>
        </div>
      </Container>
    </>
  )
}
