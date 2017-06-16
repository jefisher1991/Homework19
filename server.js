
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var app = express();

var PORT = process.env.PORT || 3000;

var mongoose = require("mongoose");
mongoose.Promise = Promise;


var Article = require("./models/article.js");

app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Static file support with public folder
app.use(express.static("public"));


/* MONGOOSE FUN STARTS HERE */
/* -/-/-/-/-/-/-/-/-/-/-/-/ */


mongoose.connect("mongodb://localhost/newsScrubber");
var db = mongoose.connection;

db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});


// Routes- HELP
// ======

 // (get) - will load your single HTML page (with ReactJS) in public/index.html. 
 app.get("/", function(req, res) {
  res.sendFile("./public/index.html"); 

});

 app.get('/api/saved', function(req, res) {

  Article.find({})
    .exec(function(err, response){

      if(err){
        console.log(err);
      }
      else {
        res.send(response);
      }
    })
});



app.post('/api/saved', function(req, res){

  var myArticle = new Article({
    title: req.body.title,
    date: req.body.date,
    url: req.body.url
  });

  myArticle.save(function(err, response){
    if(err){
      res.send(err);
    } else {
      res.json(response);
    }
  });

});


app.delete('/api/saved/:id', function(req, res){

  Article.find({'_id': req.params.id}).remove()
    .exec(function(err, response) {
      res.send(response);
  });

});

 






// Listen on port 3000
app.listen(PORT, function() {
  console.log("App running on port!");
});
