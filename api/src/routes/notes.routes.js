const { Router } = require('express')
const NotesController = require('../controllers/NotesController')
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const notesRouter = Router()

notesRouter.use(ensureAuthenticated)
notesRouter.post("/", NotesController.create)
notesRouter.put("/:id", NotesController.update)
notesRouter.delete("/:id", NotesController.delete)
notesRouter.get("/", NotesController.index)
notesRouter.get("/:id", NotesController.show)

module.exports = notesRouter
