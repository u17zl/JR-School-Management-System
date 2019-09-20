require("dotenv").config();
var mongoose = require("mongoose");
mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true,  useUnifiedTopology: true });

var db = mongoose.connection;
db.on("error", function (error) {  
    console.log("database connect failed" + error); 
  }); 
  
  db.on("open", function () {  
    console.log("database connect successfully"); 
  });

module.exports = db;