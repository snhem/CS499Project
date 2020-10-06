const express = require("express"); //module to require express
const bodyParser = require("body-parser"); //require package
const request = require("request");
const mongoose = require("mongoose"); //require mongoose


mongoose.connect("mongodb://localhost:27017/infoDB", {useNewUrlParser: true, useUnifiedTopology: true}); //this specifies port where we can access our mongo server, creates the skillsDB if it does not exist yet
var db = mongoose.connection;


const app = express(); //module to require api
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true})); // allows us to post nested objects


app.get("/", function(req, req){
  res.sendFile(__dirname + "/contactMe.html"); //gives file path of current file no matter where it is hosted
});

app.post("/", function(req, res){
  rss.send("Your email has been sent! Thank you.");
})

const infoSchema = {
  name: String,
  email: String,
  message: String
};

const Info = mongoose.model("Info", infoSchema);

const info = new Info ({
  name: "Sopaullina",
  email: "nhem.sopaullina@gmail.com"
  message: "Hello this is just a test message!"
});

info.save();

Info.find(function(err, infos){
  if (err){
    console.log(err);
  } else{
    console.log("Success");
  }
});

return res.redirect("success.html");




app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
