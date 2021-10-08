const express = require("express")
const mongoose = require("mongoose")
const fs = require('fs');
let cors = require("cors");
var bodyParser = require('body-parser');
var path = require('path');
// mongoose.connect("mongodb://localhost/wind").then(() => {console.log("db connect")}).catch((error) => {throw error})  //ใส่เพื่อให้มันรันได้ผ่าน port 
// const Wind = require("./models/wind") 
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());



app.get('/', async (req,res) =>{

    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/winds', async (req, res) => {
    fs.readFile('winds.json', (err, data) => {
        if (err) throw err;
        let winds = JSON.parse(data);

        
        // console.log(winds);
        res.send(winds)
    });
    
});



app.listen(4000,() => {
    console.log("start server http://localhost:4000")  //กำหนด port4000
})