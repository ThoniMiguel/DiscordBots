const { APIMessage } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "weather",
  description: "Weather forecast",
  execute(msg, args) {
    api(msg, args);
  },
};

function api(msg, args) {
  const API_KEY = "afdf4bc6fc4046f3c58451311b52990b";
  if (args.length == 0) {
    msg.reply("Comando vazio???Quer me fuder porra?!... PIU CARALHO!!");
    return;
  } else {
    let cityName = args[0]; //api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}
    let url = `http://api.openweathermap.org/data/2.5/weather?q=london&appid=afdf4bc6fc4046f3c58451311b52990b`;
    console.log(`city name: ${cityName}`);
    fetch(url)
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        console.log(res);
      });
  }
}
