import { Container, Form } from "./style"
import { Header } from "../../components/Header"
import { TextButton } from "../../components/TextButton"
import { Button } from "../../components/Button"
import { FiArrowLeft } from "react-icons/fi"
import { Input } from "../../components/Input"
import { TagItem } from "../../components/TagItem"
import { useState } from "react"
import { api } from "../../services/api"

export function NewMovie() {
  const [title, setTitle] = useState("")
  const [rating, setRating] = useState("")
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  function handleAddTag() {
    if (!newTag.trim()) return
    setTags(prev => [...prev, newTag.trim()])
    setNewTag("")
  }

  function handleRemoveTag(deletedTag) {
    setTags(prev => prev.filter(tag => tag !== deletedTag))
  }

  async function handleNewNote() {
    if (!title || !rating) {
      return alert("Título e nota são obrigatórios")
    }

    if (newTag) {
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar.")
    }

    try {
      await api.post("/notes", {
        title,
        description,
        rating: Number(rating),
        tags
      })
      
      alert("Nota criada com sucesso!")
    } catch (error) {
      alert("Erro ao salvar nota")
      console.error(error)
    }
  }

  return (
    <>
      <Header />
      <Container>
        <main>
          <TextButton icon={FiArrowLeft} text="Voltar" to="/" />
          <h2>Novo Filme</h2>
          <Form>
            <div className="header">
              <Input 
                placeholder="Título"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
              <Input 
                placeholder="Sua nota (de 0 a 5)"
                value={rating}
                onChange={e => setRating(e.target.value)}
              />
            </div>
            <textarea 
              placeholder="Observações"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <h3>Tags</h3>
            <div className="tags">
              {tags.map((tag, index) => (
                <TagItem 
                  key={String(index)} 
                  value={tag} 
                  onClick={() => handleRemoveTag(tag)} 
                />
              ))}
              <TagItem 
                isNew 
                placeholder="Nova tag" 
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
            <div className="buttons">
              <Button name="Excluir Filme" className="delete" />
              <Button name="Salvar Alterações" onClick={handleNewNote} />
            </div>
          </Form>
        </main>
      </Container>
    </>
  )
}