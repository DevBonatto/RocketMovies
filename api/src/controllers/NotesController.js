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

  static async show(req, res) {
    const user_id = req.user.id

    const note = await knex("movie_notes").where({ user_id: user_id }).first()
    const tags = await knex("movie_tags").where({ user_id: user_id }).orderBy("name")

    return res.status(200).json({ 
      note,
      tags
     })
  }

  static async delete(req, res) {
    const { id } = req.params

    await knex("movie_notes").where({ id }).delete()

    return res.status(200).json()
  }

  static async index(req, res) {
    const { rating } = req.params

    const moviesWithSpecificRating = await knex("movie_notes").where({ rating: rating })

    return res.status(200).json({ moviesWithSpecificRating })
  }
}

module.exports = NotesController