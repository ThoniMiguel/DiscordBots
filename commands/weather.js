const { APIMessage } = require("discord.js");
const fetch = require("node-fetch");
const weather = require("weather-js");
module.exports = {
  name: "weather",
  description: "Weather forecast",
  execute(client, msg, args) {
    weatherFunction(msg, args);
  },
};

function weatherFunction(msg, args) {
  if (args.length === 0) {
    msg.reply("Sem argumento nenhum? Quer me fuder porra?! PIU");
    return;
  }
  let city;
  if (args.length > 1) {
    for (let i = 0; i < args.length; i++) {
      city = args.join(" ");
    }
  } else if (args.length === 1) {
    city = args[0];
  }
  weather.find({ search: city, degreeType: "C" }, (err, result) => {
    if (err) console.log(err);
    if (result.length === 0) {
      msg.reply("Cidade nao encontrada! Ta dando uma de burro é?! PIU");
    } else {
      let cityName = result[0].location.name;
      let temperature = result[0].current.temperature;
      msg.reply(`Em ${cityName} está ${temperature}°C!`);
    }
  });
}
