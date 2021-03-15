const fetch = require("node-fetch");
let desligar = require("../index");
module.exports = {
  name: "facts",
  description: "Spitting Random facts",
  execute(client, msg, args) {
    let factsRep = setInterval(function () {
      const URL = "https://useless-facts.sameerkumar.website/api";

      const promise = fetch(URL);

      promise
        .then(function (response) {
          const processingResponse = response.json();
          return processingResponse;
        })
        .then(function (processedResponse) {
          let fact = processedResponse.data;
          msg.channel.send(fact);
        });
    }, 3600000);
  },
};
