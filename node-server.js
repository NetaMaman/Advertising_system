const express = require("express");
const { json } = require("express/lib/response");
const path = require("path");
const advClass = require("./adv");
const app = express();

function listOfAds(sn) {
  var arrAdsScreen = [];
  for (let i = 0; i < advClass.ad.arrAdv.length; i++) {
    if (
      advClass.ad.isDate(advClass.ad.arrAdv[i]) &&
      advClass.ad.arrAdv[i].numberOfScreen[sn]
    ) {
      arrAdsScreen.push(advClass.ad.arrAdv[i]);
    }
  }
  return arrAdsScreen;
}

app.get("/api/adNum", function (req, res) {
  var screen = req.query.screen;
  res.json(listOfAds(screen));
});

app.get("/screen=:num", function (req, res) {
  app.use(express.static(__dirname));
  var num = req.query.num;
  res.sendFile(path.join(__dirname, "/main.html"));
});

app.listen(8080, function () {
  console.log("server is running on port 8080");
});

//in  order to use node js you need to write at the terminal screen node node-server.js and then press enter.
//   node-server.js is the name of the server javaScript page.
