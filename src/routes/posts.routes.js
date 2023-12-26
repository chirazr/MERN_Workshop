const express = require('express');
const router = express.Router();

const posts =[
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
  ];
  
 router.get("/", (req, res) => {
    //req.query.filter
    res.json(posts);
  });
  
   router.get('/:id', (req, res) => {
      const id = parseInt(request.params.id) 
      const post = posts.find((a)=> a.id === id)
      if (!post){
        return  response.status(404).json({
              error: "Post not found",
          })
      }
      return res.json(post);
    })

    router.post('/', (req, res) => {
        const {title, content} = req.body;
        const id = posts.length + 1
        const post =
        {
          id,
          title,
          content,
          createdAt: new Date(),
          }
      
          posts.push(post)
            res.json(post);
          });

          module.exports = router;