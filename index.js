const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})

app.post("/",(req,res)=>{
  res.status(200).json({
    success:false,
    msg:req.body.msg,
  })
})

app.listen(port, () => {
  console.log("Server Running")
})