const express = require('express');
const app = express();
const path = require('path');

console.log(path.join(__dirname, '../dist/index.html'))

app.use("/", express.static(path.join(__dirname, '/dist/')))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/dist/')))

app.listen(3000, () => console.log(`Example app listening at http://localhost:${3000}`))