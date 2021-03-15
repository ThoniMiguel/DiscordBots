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
      // let data = await cod.CWmp("DariusFlynt#11348", "battle");
      let data = await cod.MWmp("DariusFlynt#11348", "battle");
      //ohfuck
      console.log(data);
    }catch(error){
      msg.channel.send("Aconteceu um erro ao buscar esse jogador... :neutral_face: ");
      throw error;
    }
  },
};
