const express = require('express');
const massive = require('massive');
require('dotenv').config()
const ctrl = require('./controllers/controllers.js');
const {PORT} = process.env
const {CONNECTION_STRING} = process.env
const app = express()
app.use(express.json())


app.listen(PORT, () => {console.log('Server is listening on', PORT);
});