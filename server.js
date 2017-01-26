const express = require('express')
const app = express()

app.get('/todos', (req, res) => {
  const todos = [
    {
      name: 'todo1'
    },
    {
      name: 'todos2'
    }
  ]

  res.json(todos)
})

app.post('/user', (req, res) => {

  res.json(users)
})

app.listen(8080, () => console.log('Server is up & running!'))
