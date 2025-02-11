const { Router } = require('express')
const NotesController = require('../controllers/NotesController')

const notesRouter = Router()

notesRouter.post("/:user_id", NotesController.create)
notesRouter.delete("/:id", NotesController.delete)
notesRouter.get("/:id", NotesController.show)
notesRouter.get("/", NotesController.index)

module.exports = notesRouter
