import { Container, Form } from "./style"
import { Header } from "../../components/Header"
import { TextButton } from "../../components/TextButton"
import { Button } from "../../components/Button"
import { FiArrowLeft } from "react-icons/fi"
import { Input } from "../../components/Input"
import { TagItem } from "../../components/TagItem"

export function NewMovie() {
  return (
    <>
      <Header />
      <Container>
        <main>
          <TextButton icon={FiArrowLeft} text="Voltar" to="/" />
          <h2>Novo Filme</h2>
          <Form>
            <div className="header">
              <Input placeholder="Título"></Input>
              <Input placeholder="Sua nota (de 0 a 5)"></Input>
            </div>
            <textarea placeholder="Observações" />
            <h3>Tags</h3>
            <div className="tags">
              <TagItem value="React" />
              <TagItem placeholder="Novo marcador" isNew/>
            </div>
            <div className="buttons">
              <Button name="Excluir Filme" className="delete" />
              <Button name="Salvar Alterações" />
            </div>
          </Form>
        </main>
      </Container>
    </>
  )
}