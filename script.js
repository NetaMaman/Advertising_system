// maya koma 209080381
// daniella mishan 315326785
// neta maman 313282378

"use strict";
var advScreen = {
  queue: [],
  number: null,
  isUse: false,
};

// publish the ad at the screen num
function showAd() {
  if (advScreen.queue.length) {
    let adv = advScreen.queue.shift();
    $("#adv").load(adv.templateUrl, () => {
      $("#adv").html($("#main").render(adv));
    });
    let during = parseInt(adv.during);
    setTimeout(showAd, during * 1000);
  } else {
    advScreen.queue = [];
    advScreen.isUse = false;
  }
}

function start(screen) {
  setInterval(() => {
    if (!advScreen.isUse) {
      advScreen.isUse = true;
      $.get("/api/adNum?screen=" + screen, (ads) => {
        ads.forEach((ad) => {
          advScreen.queue.push(ad);
        });
      });
      showAd();
    }
  });
}

$(() => {
  advScreen.number = window.location.pathname.substring(1).split("=")[1];
  start(advScreen.number);
});
