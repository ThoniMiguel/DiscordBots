const fetch = require("node-fetch");
module.exports = {
  name: "curse",
  discription: "curse random user",
  execute(client, msg, args) {
    api(msg);
  },
};

function api(msg) {
  const url = "https://evilinsult.com/generate_insult.php?lang=en&type=json";

  fetch(url)
    .then((data) => data.json())
    .then((res) => {
      //   let curse = res.insult;
      //   const userList = msg.guild.members.cache.array();
      //   let randomNumber = Math.round(Math.random() * msg.guild.memberCount);
      //   let pingPerson = userList[randomNumber];
      //   console.log(
      //     `curse:${curse}, userList:${userList}, randomNumber: ${randomNumber}, pingPerson:${pingPerson}`
      //   );
      //   msg.channel
      //     .send("<@" + pingPerson.user.id + ">")
      //     .then(msg.delete({ timeout: 0 }));
    });
}
