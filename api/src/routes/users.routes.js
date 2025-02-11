const { Router } = require('express')
const UsersController = require('../controllers/UsersController')

const usersRouter = Router()

usersRouter.post("/", UsersController.create)
usersRouter.put("/:id", UsersController.update)

module.exports = usersRouter
