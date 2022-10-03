const ques1Ans = ["opt1", "opt2", "opt3"];
let ques1UserAns = [];
var i = 0;

$("#opt1").click(function () {
  let myimg = document.getElementById("opt1-img");
  let img = myimg.getAttribute("src");

  if (img == "img/group4069.png") {
    ques1UserAns.push("opt1");
  }

  if (img == "img/rectangle23.png") {
    for (i = 0; i < ques1UserAns.length + 1; i++) {
      if (ques1UserAns[i] == "opt1") {
        ques1UserAns.splice(i, 1);
      }
    }
  }

  console.log(ques1UserAns);
});
$("#opt2").click(function () {
  let myimg = document.getElementById("opt2-img");
  let img = myimg.getAttribute("src");

  if (img == "img/group4069.png") {
    ques1UserAns.push("opt2");
  }

  if (img == "img/rectangle23.png") {
    for (i = 0; i < ques1UserAns.length + 1; i++) {
      if (ques1UserAns[i] == "opt2") {
        ques1UserAns.splice(i, 1);
      }
    }
  }

  console.log(ques1UserAns);
});

$("#opt3").click(function () {
  let myimg = document.getElementById("opt3-img");
  let img = myimg.getAttribute("src");

  if (img == "img/group4069.png") {
    ques1UserAns.push("opt3");
  }

  if (img == "img/rectangle23.png") {
    for (i = 0; i < ques1UserAns.length + 1; i++) {
      if (ques1UserAns[i] == "opt3") {
        ques1UserAns.splice(i, 1);
      }
    }
  }

  console.log(ques1UserAns);
});
$("#opt4").click(function () {
  let myimg = document.getElementById("opt4-img");
  let img = myimg.getAttribute("src");

  if (img == "img/group4069.png") {
    ques1UserAns.push("opt4");
  }

  if (img == "img/rectangle23.png") {
    for (i = 0; i < ques1UserAns.length + 1; i++) {
      if (ques1UserAns[i] == "opt4") {
        ques1UserAns.splice(i, 1);
      }
    }
  }

  console.log(ques1UserAns);
});
$("#opt5").click(function () {
  let myimg = document.getElementById("opt5-img");
  let img = myimg.getAttribute("src");

  if (img == "img/group4069.png") {
    ques1UserAns.push("opt5");
  }

  if (img == "img/rectangle23.png") {
    for (i = 0; i < ques1UserAns.length + 1; i++) {
      if (ques1UserAns[i] == "opt5") {
        ques1UserAns.splice(i, 1);
      }
    }
  }

  console.log(ques1UserAns);
});

$("#submit").click(function () {
  ques1UserAns.sort();

  if (JSON.stringify(ques1UserAns) == JSON.stringify(ques1Ans)) {
    console.log("successful");
  } else {
    console.log("fail");
  }
});
