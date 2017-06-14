
var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var NewsSchema = new Schema(
{ 
  {title:
    type: String,
    trim: true,
  },

  url: {
    type:String, 
  }, 
  
  date: {
    type: Date,
    default: Date.now
  },

});


var Example = mongoose.model("News", NewsSchema);


module.exports = News;
