const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(new Date().toLocaleTimeString())
  res.sendStatus(200)
})

app.listen(port, () => {
  console.log(`Example app running at port ${port}`)
})