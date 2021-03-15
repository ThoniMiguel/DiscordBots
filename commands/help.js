const fs = require("fs");
module.exports = {
    name:"help",
    description: "Show a list of available commands",
    execute(client, msg, args, Discord){
        const newEmbed = new Discord.MessageEmbed();
        const commandFiles = fs
        .readdirSync("./commands/")
        .filter((file) => file.endsWith(".js"));

        commandFiles.forEach(file => {
            // console.log(`./${file}`);
            let info = require(`./${file}`);
            newEmbed.setColor('#7C00FF').setTitle('Comandos').setDescription("São esses os comandos por enquanto:")
            .addFields({name: info.name, value: info.description});
        });

        msg.channel.send(newEmbed);
    }
}