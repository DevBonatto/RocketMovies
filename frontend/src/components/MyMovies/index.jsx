import { Container, Paragraph, Tags } from "./style"
import { Stars } from "../Stars"
import { Link } from "react-router-dom"
import { Tag } from "../Tag"

export function MyMovies({ data }) {
  return (
    <Container as={Link} to={`/movie/${data.id}`}>
      <h2>{data.title}</h2>
      <Stars rating={data.rating} />
      <Paragraph>
        {data.description}
      </Paragraph>
      <Tags>
        {
          data.tags && data.tags.map(tag => (
            <Tag key={tag.id} name={tag.name} />
          ))
        }
      </Tags>
    </Container>
  )
}