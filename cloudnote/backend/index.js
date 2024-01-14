const connectToMongo = require('./db')
const express = require('express')
connectToMongo();
const app = express()
const port = 5000

app.use(express.json())

//res means response, req eans request

app.get('/', (req, res) => {
  res.send('Hello World1!')
})
//This line helps the app to not full depened on the current file and use another file to simplify
//So instead of get request , we areu= using use request
// app.use('/auth',require('./routes/auth'));
app.use('/auth/signup',require('./routes/auth'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})