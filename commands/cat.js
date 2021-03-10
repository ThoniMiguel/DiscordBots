const fetch = require("node-fetch");
module.exports = {
  name: "cat",
  description: "sending random cats imgs",
  execute(msg, args) {
    api();
  },
};

function api() {
  const url = "https://api.thecatapi.com/v1/images/search";

  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      console.log(res);
    });
}
