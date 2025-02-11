const knex = require("../database/knex")
const AppError = require("../utils/appError")
const { hash, compare } = require("bcryptjs")
class UsersController {
  static async create(req, res) {
    const { name, email, password } = req.body

    const hashedPassword = await hash(password, 8)
    
    const thisEmailAlreadyExists = await knex("users")
      .select("*")
      .where({ email })
      .first()

    if(thisEmailAlreadyExists) {
      throw new AppError("Esse email já está cadastrado no sistema!")
    }
      
    await knex("users").insert({
      name,
      email,
      password: hashedPassword
    })

    return res.status(201).json( { name, email, password } )
  }

  static async update(req, res) {
    const { name, email, password, old_password } = req.body
    const { id } = req.params

    const user = await knex("users")
      .select("*")
      .where({ id })
      .first()
    
    if(!user) {
      throw new AppError("Usuário não existe")
    }

    const userUpdatingWithSameEmail = email
    ? await knex('users').select('*').where({ email }).first()
    : null
    
    if(userUpdatingWithSameEmail && userUpdatingWithSameEmail.id === user.id){
      throw new AppError("Você já tem esse email cadastrado")
    }

    if(userUpdatingWithSameEmail && userUpdatingWithSameEmail.id !== user.id){
      throw new AppError("Esse email já está cadastrado no sistema")
    }

    if(password && !old_password) {
      throw new AppError("Você precisa informar a senha antiga para definir a nova senha")
    }

    if(password && old_password) {
      const checkOldPassword = await compare(old_password, user.password)

      if(!checkOldPassword) {
        throw new AppError("A senha antiga não confere")
      }

      user.password = await hash(password, 8)
    }

    user.name = name ?? user.name
    user.email = email ?? user.email

    await knex('users')
    .where({ id }) 
    .update({
      name: user.name,
      email: user.email,
      password: user.password,
      updated_at: new Date() 
    })

    return res.status(200).json()
  }
}

module.exports = UsersController
