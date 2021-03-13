module.exports = {
  name: "spam",
  description: "spam msgs",
  execute(msg, args) {
    if (args.length == 0) {
      msg.reply("Comando vazio???Quer me fuder porra?!... PIU");
      return;
    } else {
      let message = args[0];
      let number = args[1];
      const maxSpams = 5;
      number = parseInt(number);
      if (message.length > 30 || isNaN(number) || number > maxSpams) {
        msg.reply("Comando ta meio errado ai neh... tenta denovo... PIU!");
        console.log(message);
        return;
      } else {
        for (let i = 0; i < number; i++) {
          msg.channel.send(message);
        }
      }
    }
  },
};
