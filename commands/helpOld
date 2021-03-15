const path = require("path");
const fs = require("fs");
module.exports = {
  name: "help",
  description: "Show a list of available commands",
  execute(client, msg, args) {
    let commands = returnCommands();
    let commandsCapitalized = new Array();
    for(let i = 0; i < commands.length; i++){
        commandsCapitalized[i] = commands[i].charAt(0).toUpperCase()+commands[i].slice(1);
    }
    msg.reply("Ta ai tua ajuda, seu merda:");
    msg.channel.send("Comandos:\n"+commandsCapitalized.join(" - "));
    // msg.channel.send("Facts, clear, ping, help, mimir");
  },
};

function returnCommands() {
  const commandFiles = fs
    .readdirSync("./commands/")
    .filter((file) => file.endsWith(".js"));

    let temp = new Array();
    for(let fileNames of commandFiles){
        temp.push(fileNames.substr(0, fileNames.length-3));
    }

    return temp;
}
