const { Router, response } = require('express')
const multer = require('multer')
const uploadConfig = require("../configs/upload")

const UsersController = require('../controllers/UsersController')
const UserAvatarController = require('../controllers/UserAvatarController')
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const usersRouter = Router()
const upload = multer(uploadConfig.MULTER)

usersRouter.post("/", UsersController.create)
usersRouter.put("/", ensureAuthenticated, UsersController.update)

usersRouter.patch("/avatar", ensureAuthenticated, upload.single("avatar"), UserAvatarController.update)

module.exports = usersRouter
