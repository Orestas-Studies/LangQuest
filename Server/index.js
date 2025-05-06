const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/message", (req, res) =>{
    const rawData = req.body;
    const { name, message } = req.body;
    res.status(200).json({ name, message });
    console.log(rawData);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})