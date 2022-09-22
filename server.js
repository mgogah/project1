//jshint eversion:6
//server const values
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//adding bodyParser to app
app.use(bodyParser.urlencoded({extended: true}));

app.use('/favicon.ico', express.static('images/favicon.ico'));

//Adding images -> images should be included in html file like <img src="/imagename.jpg">
app.use(express.static(__dirname + '/images'));


//Adding CSS
app.get('/css/style.css', (req, res) => {

     res.sendFile(__dirname + "/" + "css/style.css");
  
  });

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function(){
    console.log("server listen on port no. 3000");
});