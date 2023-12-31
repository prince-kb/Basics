const connectToMongo = require('./db')
const express = require('express')
connectToMongo();
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// app.use('/auth',require('./routes/auth'));
app.use('/auth/signup',require('./routes/auth'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})