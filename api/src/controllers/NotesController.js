const knex = require("../database/knex")
const AppError = require("../utils/appError")
class NotesController {
  static async create(req, res) {
    const { title, description, rating, tags } = req.body
    const user_id = req.user.id

    if(rating > 5 || rating < 0) {
      throw new AppError("Por favor, escolha uma nota de entre 0 e 5")
    }

    const [ note_id ]  = await knex("movie_notes").insert({
      title,
      description,
      rating,
      user_id
    })

    const tagsInsert = tags.map(name => {
      return {
        note_id,
        name,
        user_id
      }
    })

    await knex("movie_tags").insert(tagsInsert)

    return res.status(200).json()
  }

  static async index(req, res) {
    const user_id = req.user.id

    const notes = await knex("movie_notes")
      .where({ user_id })
      .orderBy("created_at", "desc")

    const tags = await knex("movie_tags").where({ user_id })

    const notesWithTags = notes.map(note => {
    const noteTags = tags.filter(tag => tag.note_id === note.id)

      return {
        ...note,
        tags: noteTags
      }
    })

    return res.status(200).json(notesWithTags)
  }

  static async delete(req, res) {
    const { id } = req.params

    await knex("movie_notes").where({ id }).delete()

    return res.status(200).json()
  }
}

module.exports = NotesController