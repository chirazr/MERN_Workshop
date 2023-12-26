
const express = require('express')


const app = express()

app.use(express.json())

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register', (req, res) => { 
  res.send('register page')
})


//JSON
//array []
//object 1 {}

app.get('/', (req, res) => {
    const article = {
        id: 1,
        title: 'my 1st article',
        content: 'my 1st article llorem ipsum dolor sit amet',
        createdAt: new Date()

    }
    res.json(article)
  })



  //global array 

const articles =[
  {
        id: 1,
        title: 'my 1st article',
        content: 'my 1st article llorem ipsum dolor sit amet',
        createdAt: new Date(),
  },
  {
    id: 2,
    title: 'my 2sc article',
    content: ' llorem ipsum dolor sit amet',
    createdAt: new Date(),
}
]

app.get('/articles/', (req, res) => {
  res.json('articles')
})

  app.get('/articles/:id', (req, res) => {
    const id = parseInt(request.params.id) 
    const article = articles.find((a)=> a.id === id)
    if (!article){
      return  response.status(404).json({
            error: "not found",
        })
    }
    return res.json(article)
  })

  /*app.get('/articles/', (req, res) => {
    res.send('articles')
  })
  */

//server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//https://expressjs.com/en/starter/hello-world.html


//list (all)- GET / articles /
//one - GET /articles /:id
//add - POST /articles uuid (Universally Unique Identifier)
//update - PUT / PATCH - articles /:id
//remove - DELETE / articles/:id 



//add article 
app.post('/articles', (req, res) => {
const data = req.body;
//id 
const id = articles.length + 1
articles.push({
// id: id,
id,
title: data.title,
content: data.content,
createdAt: new Date(),
})
    console.log({data})
    res.send("Article post");
  })
 

  // 
  app.post('/articles', (req, res) => {
    const data = req.body;
    const id = articles.length + 1
    const article =
    {
      id,
      title: data.title,
      content: data.content,
      createdAt: new Date(),
      }

    articles.push(article)
        res.json(article);
      })

// 
app.post('/articles', (req, res) => {
  const {title, content} = req.body;
  const id = articles.length + 1
  const article =
  {
    id,
    title,
    content,
    createdAt: new Date(),
    }

  articles.push(article)
      res.json(article);
    })

//
app.post('/articles', (req, res) => {
  const id = articles.length + 1
  const article =
  {
    ... request.body,
    id,
    createdAt: new Date(),
    }

  articles.push(article);
      res.json(article);
    })
