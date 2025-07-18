require("express-async-errors")
const AppError = require("./utils/appError")
const express = require('express')
const app = express()
const PORT = 3000
const uploadConfig = require("./configs/upload")
const routes = require("./routes")

const cors = require("cors")
app.use(cors())
app.use(express.json())
app.use(routes)

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))

app.use(( error, request, response, next ) => {
  if(error instanceof AppError){
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    })
  }

  console.error(error)

  return response.status(500).json({
    status: "Error",
    message: "Internal server error"
  })
})

app.listen(PORT, () => {
    console.log(`
      Server listening on port: ${PORT}
      Acess here: http://localhost:3000/
      `)
})