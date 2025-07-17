const { Router } = require('express')
const TagsController = require('../controllers/TagsController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const tagsRouter = Router()

tagsRouter.get("/", ensureAuthenticated, TagsController.index)

module.exports = tagsRouter
