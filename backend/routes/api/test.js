require("../../db");
const TestModel = require("../../model/TestModel");

const responseJSON = function(res, ret) {
  if (typeof ret === "undefined") {
    res.json({
      code: "-200",
      msg: "The operation failure"
    });
  } else {
    res.json(ret);
  }
};

exports.postTest = function(req, res) {
  const { username, password } = req.body;
  console.log(username, password);
  // define user entity
  const test = new TestModel({
    username: "sms_admin",
    password: "123456"
  });

  //   model save api
  test.save(function(err, doc) {
    if (err) {
      console.log("save error:" + err);
      doc = {
        status: 201,
        msg: err
      };
    }
    console.log("save sucess \n" + doc);
    responseJSON(res, doc);
  });
};

exports.getTest = function(req, res) {
  res.send("test!");
};
