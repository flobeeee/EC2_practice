const express = require('express')

const app = express();

app.use('/', (req, res) => {
    res.send("hello world node server")
})

app.listen(5000, () => {
    console.log('servr on 5000')
})