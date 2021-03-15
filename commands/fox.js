const fetch = require("node-fetch");
module.exports = {
  name: "fox",
  description: "sending random fox images",
  execute(client, msg, args) {
    api(msg);
  },
};

function api(msg) {
  const url = "https://randomfox.ca/floof/";

  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      msg.channel.send("What does the fox say?", { files: [res.image] });
    });
}
