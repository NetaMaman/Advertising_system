const adv1 = {
  name: "one",
  templateUrl: ["templateA.html"],
  texts: ["welcome to london", "come to visit - ", "Big Ben", ", london eye"],
  imgUrl: ["img/london2.jpg", "img/london1.jpg"],
  days: {
    monday: { fromHour: 6, toHour: 12 },
    wednesday: { fromHour: 13, toHour: 20 },
  },
  fromDate: "1/1/2022",
  toDate: "12/31/2022",
  numberOfScreen: { 1: true, 2: true },
  show: false,
  during: 5,
};
const adv2 = {
  name: "two",
  templateUrl: ["templateB.html"],
  texts: [
    "new york",
    "come to visit-",
    "times square",
    "Statue of Liberty",
    "Central Park",
    "Broadway ",
    "American Museum of Natural History",
    "Brooklyn Bridge",
    "Fifth Avenue",
    "Wall Street",
  ],
  imgUrl: ["./img/newyork2.jpg"],
  days: {
    tuesday: { fromHour: 10, toHour: 16 },
    wednesday: { fromHour: 10, toHour: 16 },
  },
  fromDate: "3/1/2022",
  toDate: "4/30/2022",
  show: false,
  numberOfScreen: { 1: true, 3: true },
  during: 5,
};
const adv3 = {
  name: "three",
  templateUrl: ["templateC.html"],
  texts: [],
  imgUrl: [],
  days: {
    monday: { fromHour: 8, toHour: 22 },
    tuesday: { fromHour: 8, toHour: 22 },
    wednesday: { fromHour: 8, toHour: 22 },
    thursday: { fromHour: 8, toHour: 22 },
    friday: { fromHour: 8, toHour: 22 },
    saturday: { fromHour: 8, toHour: 22 },
    sunday: { fromHour: 8, toHour: 22 },
  },
  numberOfScreen: { 2: true, 3: true },
  show: false,
  during: 5,
  fromDate: "5/1/2022",
  toDate: "6/15/2022",
};
const adv4 = {
  name: "four",
  templateUrl: ["templateA.html"],
  texts: ["welcome to Dubai", "Ahlen and Sahlan Ya Magnon"],
  imgUrl: [],
  days: {
    monday: { fromHour: 15, toHour: 19 },
  },
  fromDate: "3/29/2022",
  toDate: "4/15/2022", //4
  numberOfScreen: { 1: true },
  show: false,
  during: 5,
};
const adv5 = {
  name: "five",
  templateUrl: ["templateB.html"],
  texts: [
    "welcome to paris",
    "come to visit-",
    "Eiffel Tower",
    "The Louvre Museum",
    "Arc de Triomphe",
    "Conciergerie",
    "Palais de Chaillot",
  ],
  imgUrl: ["./img/paris.jpg", "./img/paris3.jpg"],
  days: {
    monday: { fromHour: 1, toHour: 23 },
    tuesday: { fromHour: 1, toHour: 23 },
    wednesday: { fromHour: 1, toHour: 23 },
  },
  fromDate: "4/1/2022",
  toDate: "4/30/2022",
  numberOfScreen: { 3: true },
  show: false,
  during: 5,
};
const arrAdv = [adv1, adv2, adv3, adv4, adv5];
function isDate(adv) {
  const today = new Date();
  const advFromDate = new Date(adv.fromDate);
  const advToDate = new Date(adv.toDate);
  if (today >= advFromDate && today <= advToDate) {
    return dayAndHour(adv);
  }
  return false;
}
function dayAndHour(adv) {
  const date = new Date();
  const hour = date.getHours();

  let today = new Intl.DateTimeFormat("en-US", { weekday: "long" })
    .format()
    .toLowerCase();
  if (today in adv.days) {
    if (adv.days[today].fromHour <= hour && adv.days[today].toHour > hour) {
      return true;
    }
  }
  return false;
}
exports.ad = {
  arrAdv,
  isDate,
  dayAndHour,
};
