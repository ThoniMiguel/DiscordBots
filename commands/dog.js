module.exports = {
  name: "dog",
  description: "sending random dogs imgs",
  execute(msg, args) {
    api(msg);
  },
};

function api(msg) {
  const url = "https://dog.ceo/api/breeds/image/random";

  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      let doggoImg = res.message;
      msg.channel.send("Catioro Fofo", { files: [doggoImg] });
    });
}
