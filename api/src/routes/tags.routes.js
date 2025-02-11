const { Router } = require('express')
const TagsController = require('../controllers/TagsController')

const tagsRouter = Router()

tagsRouter.get("/:user_id", TagsController.index)

module.exports = tagsRouter
