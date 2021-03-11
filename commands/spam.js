module.exports = {
  name: "spam",
  description: "spam msgs",
  execute(msg, args) {
    let message = args[0];
    let number = args[1];

    number = parseInt(number);
    if (message.length > 20 || isNaN(number) || number > 8) {
      msg.reply("Comando ta meio errado ai neh... tenta denovo... PIU!");
      return;
    } else {
      for (let i = 0; i < number; i++) {
        $msg.channel.send(message);
      }
    }
  },
};
