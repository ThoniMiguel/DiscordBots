const cod = require("call-of-duty-api")({platform: "battle"});
module.exports = {
  name: "mpcheck",
  description: "This command return some call of duty shit",
  async execute(client, msg, args, Discord) {
    if(!args[0]) return msg.channel.send("Poem um username valido ai animal... PIU! :triumph:");
    if(!args[1]) return msg.channel.send("Poem uma plataforma descente ai seu burro!... PIU! :triumph:")

    let username = process.env.COD_USERNAME;
    let password = process.env.COD_PASSWORD;

    try{
      await cod.login(username, password);
      let data = await cod.CWmp("alesh#11527", "battle");
      console.log(data);
    }catch(err){
      msg.channel.send("Aconteceu um erro ao buscar esse jogador... :neutral_face: ");
      throw err;
    }
  },
};
