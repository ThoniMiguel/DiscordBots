const fetch = require("node-fetch");
module.exports = {
  name: "image",
  description: "searching cursed images on google",
  execute(msg, args) {
    happy(msg);
  },
};

function happy(msg) {
  let url = "https://www.affirmations.dev/";

  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      console.log(res);
    });
}
