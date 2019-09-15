const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
// const jwtauth = require("../middleware/jwtauth");
const api = require("require-all")({
  dirname: __dirname + "/api"
});

let urlencodedParser = bodyParser.urlencoded({ extended: false });
router.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Content-Length, Authorization, Accept,X-Requested-With,x-access-token"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  if (req.method == "OPTIONS") res.sendStatus(200);
  /*让options请求快速返回*/ else next();
});

router.get('/', function(req, res, next) {
  console.log("hello")
  res.send('hello');
});

router.post('/test', api.test.postTest);
router.get('/test', api.test.getTest);

module.exports = router;
