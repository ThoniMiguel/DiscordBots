const fetch = require("node-fetch");
module.exports = {
  name: "cat",
  description: "sending random cats imgs",
  execute(msg, args) {
    api(msg);
  },
};

function api(msg) {
  const url = "https://api.thecatapi.com/v1/images/search";

  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      let imgUrl = res[0].url;
      msg.channel.send("Gatin Fofin", { files: [imgUrl] });
    });
}
