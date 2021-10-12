const lat = -7.335555;
const lon = 108.186019;
const key = "640ffe65ea6591cfce691caa8a9d4a44";

let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=id`;

const resText = UrlFetchApp.fetch(apiURL).getContentText();
const resJSON = JSON.parse(resText);

const tempMin = resJSON["main"]["temp_min"];
const tempMax = resJSON["main"]["temp_max"];
const tempCurr = resJSON["main"]["feels_like"];
const humidity = resJSON["main"]["humidity"];
const press = resJSON["main"]["pressure"];

console.log(resJSON);