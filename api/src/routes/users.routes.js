const { Router } = require('express')
const UsersController = require('../controllers/UsersController')
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const usersRouter = Router()

usersRouter.post("/", UsersController.create)
usersRouter.put("/", ensureAuthenticated, UsersController.update)

module.exports = usersRouter
