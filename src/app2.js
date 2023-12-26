const express = require('express')
const postsRoutes = require("./routes/posts.routes")
const dotenv = require ('dotenv')
dotenv.config();
// require ('dotenv').config();


const app = express()

app.use(express.json())

//

app.use('/posts', postsRoutes )


//const port = 3000
const port = process.env.APP_PORT


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })