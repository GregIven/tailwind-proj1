const express = require('express');
const app = express();
const path = require('path');

console.log(path.join(__dirname, '../dist/index.html'))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')))
app.listen(3000, () => console.log(`Example app listening at http://localhost:${3000}`))