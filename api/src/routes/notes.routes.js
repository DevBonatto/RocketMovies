const { Router } = require('express')
const NotesController = require('../controllers/NotesController')
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const notesRouter = Router()

notesRouter.use(ensureAuthenticated)
notesRouter.post("/", NotesController.create)
notesRouter.delete("/:id", NotesController.delete)
notesRouter.get("/", NotesController.show)
notesRouter.get("/:rating", NotesController.index)

module.exports = notesRouter
