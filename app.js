const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const fs = require("fs");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var pass = "";
var loginUserName = "";
const ques1Ans = ["option1", "option2", "option3"];
var userAns = [];
const app = express();
var score = 0;



pass = fs.readFileSync("pass.txt", "utf-8");

mongoose.connect("mongodb://0.0.0.0:27017/quiz");

const optionSchema = mongoose.Schema({
  question: Number,
  opt: [String],
});

const Option = mongoose.model("Option", optionSchema);

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  company: String,
  role: String,
  place: String,
  loginId: String,
  loginPass: String,
  options: [optionSchema],
});

const User = mongoose.model("User", userSchema);

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("index0");
});

app.get("/intro", function (req, res) {
  res.render("index1");
});

app.get("/intro1", function (req, res) {
  res.render("index3");
});
app.get("/intro2", function (req, res) {
  res.render("index4");
});
app.get("/intro3", function (req, res) {
  res.render("index5");
});
app.get("/intro4", function (req, res) {
  res.render("index6");
});
app.get("/intro5", function (req, res) {
  res.render("index7");
});
app.get("/register", function (req, res) {
  res.render("newAc");
});
app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/cngPw", function (req, res) {
  res.render("cngPw");
});
app.get("/ques1", function (req, res) {
  userAns = [];
  res.render("index8");
});
app.get("/ques2", function (req, res) {
  userAns = [];
  res.render("ques2");
});
app.get("/ques3", function (req, res) {
  userAns = [];
  res.render("ques3");
});
app.get("/ques4", function (req, res) {
  userAns = [];
  res.render("ques4");
});
app.get("/ques5", function (req, res) {
  userAns = [];
  res.render("ques5");
});
app.get("/ques6", function (req, res) {
  userAns = [];
  res.render("ques6");
});
app.get("/ques7", function (req, res) {
  userAns = [];
  res.render("ques7");
});
app.get("/ques8", function (req, res) {
  userAns = [];
  res.render("ques8");
});
app.get("/ques9", function (req, res) {
  userAns = [];
  res.render("ques9");
});
app.get("/ques10", function (req, res) {
  userAns = [];
  res.render("ques10");
});
app.post("/register", function (req, res) {
  if (
    req.body.name == "" ||
    req.body.email == "" ||
    req.body.company == "" ||
    req.body.role == "" ||
    req.body.place == ""
  ) {
    res.redirect("/register");
  } else {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      company: req.body.company,
      role: req.body.role,
      place: req.body.place,
      loginId: req.body.name,
    });

    user.save();

    res.redirect("/cngPw");
  }
});

app.post("/cngPw", (req, res) => {
  if (req.body.password == req.body.repass) {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
      User.findOneAndUpdate(
        { loginId: req.body.name },
        { loginPass: hash },
        function (err, fUser) {
          if (fUser == null) {
            res.redirect("/cngPw");
          }

          if (fUser != null) {
            res.redirect("/login");
          }
        }
      );
    });
  }

  if (req.body.password != req.body.repass) {
    res.redirect("/cngPw");
  }
});

app.post("/login", function (req, res) {
  loginUserName = req.body.userId;
  User.findOne({ loginId: req.body.userId }, function (err, foundUser) {
    if (foundUser) {
      bcrypt.compare(
        req.body.userPass,
        foundUser.loginPass,
        function (err, result) {
          if (result == true) {
            res.redirect("/intro1");
          } else {
            res.redirect("/login");
          }
        }
      );
    } else {
      res.redirect("/login");
    }
  });
});

app.post("/ques1", function (req, res) {
  if (req.body.option1 == "green") {
    userAns.push("option1");
  }
  if (req.body.option2 == "green") {
    userAns.push("option2");
  }
  if (req.body.option3 == "green") {
    userAns.push("option3");
  }
  if (req.body.option4 == "green") {
    userAns.push("option4");
  }
  if (req.body.option5 == "green") {
    userAns.push("option5");
  }

  userAns.sort();

  const userOpt = new Option({
    question: 1,
    opt: userAns,
  });

  User.findOne(
    { loginId: loginUserName },
    
    function (err, foundUser) {
      if (!err) {

        foundUser.options.push(userOpt);
        foundUser.save();
        res.redirect("/ques2");
      }
    }
  );

  if (JSON.stringify(userAns) == JSON.stringify(ques1Ans)) {
    score++;
  }
});

app.post("/ques2", function (req, res) {
  if (req.body.option1 == "green") {
    userAns.push("option1");
  }
  if (req.body.option2 == "green") {
    userAns.push("option2");
  }
  if (req.body.option3 == "green") {
    userAns.push("option3");
  }
  if (req.body.option4 == "green") {
    userAns.push("option4");
  }
  if (req.body.option5 == "green") {
    userAns.push("option5");
  }

  userAns.sort();

  const userOpt = new Option({
    question : 2,
    opt: userAns,
  });

  User.findOne(
    { loginId: loginUserName },
  
    function (err, foundUser) {
      if (!err) {

        foundUser.options.push(userOpt);
        foundUser.save();
        res.redirect("/ques3");
      }
    }
  );

  if (JSON.stringify(userAns) == JSON.stringify(ques1Ans)) {
    score++;
  }
});
app.post("/ques3", function (req, res) {
  if (req.body.option1 == "green") {
    userAns.push("option1");
  }
  if (req.body.option2 == "green") {
    userAns.push("option2");
  }
  if (req.body.option3 == "green") {
    userAns.push("option3");
  }
  if (req.body.option4 == "green") {
    userAns.push("option4");
  }
  if (req.body.option5 == "green") {
    userAns.push("option5");
  }

  userAns.sort();

  const userOpt = new Option({
    question : 3,
    opt: userAns,
  });

  User.findOne(
    { loginId: loginUserName },
  
    function (err, foundUser) {
      if (!err) {

        foundUser.options.push(userOpt);
        foundUser.save();
        res.redirect("/ques4");
      }
    }
  );

  if (JSON.stringify(userAns) == JSON.stringify(ques1Ans)) {
    score++;
  }
});
app.post("/ques4", function (req, res) {
  if (req.body.option1 == "green") {
    userAns.push("option1");
  }
  if (req.body.option2 == "green") {
    userAns.push("option2");
  }
  if (req.body.option3 == "green") {
    userAns.push("option3");
  }
  if (req.body.option4 == "green") {
    userAns.push("option4");
  }
  if (req.body.option5 == "green") {
    userAns.push("option5");
  }

  userAns.sort();

  const userOpt = new Option({
    question : 4,
    opt: userAns,
  });

  User.findOne(
    { loginId: loginUserName },
  
    function (err, foundUser) {
      if (!err) {

        foundUser.options.push(userOpt);
        foundUser.save();
        res.redirect("/ques5");
      }
    }
  );

  if (JSON.stringify(userAns) == JSON.stringify(ques1Ans)) {
    score++;
  }
});

app.post("/ques5", function (req, res) {
  if (req.body.option1 == "green") {
    userAns.push("option1");
  }
  if (req.body.option2 == "green") {
    userAns.push("option2");
  }
  if (req.body.option3 == "green") {
    userAns.push("option3");
  }
  if (req.body.option4 == "green") {
    userAns.push("option4");
  }
  if (req.body.option5 == "green") {
    userAns.push("option5");
  }

  userAns.sort();

  const userOpt = new Option({
    question : 5,
    opt: userAns,
  });

  User.findOne(
    { loginId: loginUserName },
  
    function (err, foundUser) {
      if (!err) {

        foundUser.options.push(userOpt);
        foundUser.save();
        res.redirect("/ques6");
      }
    }
  );

  if (JSON.stringify(userAns) == JSON.stringify(ques1Ans)) {
    score++;
  }
});
app.post("/ques6", function (req, res) {
  if (req.body.option1 == "green") {
    userAns.push("option1");
  }
  if (req.body.option2 == "green") {
    userAns.push("option2");
  }
  if (req.body.option3 == "green") {
    userAns.push("option3");
  }
  if (req.body.option4 == "green") {
    userAns.push("option4");
  }
  if (req.body.option5 == "green") {
    userAns.push("option5");
  }

  userAns.sort();

  const userOpt = new Option({
    question : 6,
    opt: userAns,
  });

  User.findOne(
    { loginId: loginUserName },
  
    function (err, foundUser) {
      if (!err) {

        foundUser.options.push(userOpt);
        foundUser.save();
        res.redirect("/ques7");
      }
    }
  );

  if (JSON.stringify(userAns) == JSON.stringify(ques1Ans)) {
    score++;
  }
});
app.post("/ques7", function (req, res) {
  if (req.body.option1 == "green") {
    userAns.push("option1");
  }
  if (req.body.option2 == "green") {
    userAns.push("option2");
  }
  if (req.body.option3 == "green") {
    userAns.push("option3");
  }
  if (req.body.option4 == "green") {
    userAns.push("option4");
  }
  if (req.body.option5 == "green") {
    userAns.push("option5");
  }

  userAns.sort();

  const userOpt = new Option({
    question : 7,
    opt: userAns,
  });

  User.findOne(
    { loginId: loginUserName },
  
    function (err, foundUser) {
      if (!err) {

        foundUser.options.push(userOpt);
        foundUser.save();
        res.redirect("/ques8");
      }
    }
  );

  if (JSON.stringify(userAns) == JSON.stringify(ques1Ans)) {
    score++;
  }
});
app.post("/ques8", function (req, res) {
  if (req.body.option1 == "green") {
    userAns.push("option1");
  }
  if (req.body.option2 == "green") {
    userAns.push("option2");
  }
  if (req.body.option3 == "green") {
    userAns.push("option3");
  }
  if (req.body.option4 == "green") {
    userAns.push("option4");
  }
  if (req.body.option5 == "green") {
    userAns.push("option5");
  }

  userAns.sort();

  const userOpt = new Option({
    question : 8,
    opt: userAns,
  });

  User.findOne(
    { loginId: loginUserName },
  
    function (err, foundUser) {
      if (!err) {

        foundUser.options.push(userOpt);
        foundUser.save();
        res.redirect("/ques9");
      }
    }
  );

  if (JSON.stringify(userAns) == JSON.stringify(ques1Ans)) {
    score++;
  }
});
app.post("/ques9", function (req, res) {
  if (req.body.option1 == "green") {
    userAns.push("option1");
  }
  if (req.body.option2 == "green") {
    userAns.push("option2");
  }
  if (req.body.option3 == "green") {
    userAns.push("option3");
  }
  if (req.body.option4 == "green") {
    userAns.push("option4");
  }
  if (req.body.option5 == "green") {
    userAns.push("option5");
  }

  userAns.sort();

  const userOpt = new Option({
    question : 9,
    opt: userAns,
  });

  User.findOne(
    { loginId: loginUserName },
  
    function (err, foundUser) {
      if (!err) {

        foundUser.options.push(userOpt);
        foundUser.save();
        res.redirect("/ques10");
      }
    }
  );

  if (JSON.stringify(userAns) == JSON.stringify(ques1Ans)) {
    score++;
  }
});
app.post("/ques10", function (req, res) {
  if (req.body.option1 == "green") {
    userAns.push("option1");
  }
  if (req.body.option2 == "green") {
    userAns.push("option2");
  }
  if (req.body.option3 == "green") {
    userAns.push("option3");
  }
  if (req.body.option4 == "green") {
    userAns.push("option4");
  }
  if (req.body.option5 == "green") {
    userAns.push("option5");
  }

  userAns.sort();

  const userOpt = new Option({
    question : 10,
    opt: userAns,
  });

  User.findOne(
    { loginId: loginUserName },
  
    function (err, foundUser) {
      if (!err) {

        foundUser.options.push(userOpt);
        foundUser.save();
        res.redirect("/");
      }
    }
  );

  if (JSON.stringify(userAns) == JSON.stringify(ques1Ans)) {
    score++;
  }
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function () {
  console.log("Server started on port 3000");
});
