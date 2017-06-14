
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var app = express();

var mongoose = require("mongoose");
mongoose.Promise = Promise;

var Example = require("./model.js");

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

// your components will use this to query MongoDB for all saved articles
app.get("/saved", function(req, res) {
  connection.query("DELETE FROM quotes WHERE id = ?", [req.params.id], function(err, result) {
    if (err) {
      throw err;
    }
    res.redirect("/");
  });
});


// your components will use this to save an article to the database
app.post("/saved", function(req, res) {
  connection.query("DELETE FROM quotes WHERE id = ?", [req.params.id], function(err, result) {
    if (err) {
      throw err;
    }
    res.redirect("/");
  });
});



// your components will use this to delete a saved article in the database
app.delete("/api/saved", function(req, res) {
  connection.query("DELETE FROM newsScrubber WHERE id = ?", [req.params.id], function(err, result) {
    if (err) {
      throw err;
    }
    res.redirect("/");
  });
});
 

 // (get) - will load your single HTML page (with ReactJS) in public/index.html. 
 app.get("/", function(req, res) {
  connection.query("DELETE FROM quotes WHERE id = ?", [req.params.id], function(err, result) {
    if (err) {
      throw err;
    }
    res.redirect("/");
  });
});




// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
