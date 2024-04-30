const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const PORT = 8000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());


app.listen(PORT, ()=>{
    console.log("Сервер запущен...")
});