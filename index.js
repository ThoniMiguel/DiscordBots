const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "$";
const fs = require("fs");

client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}
client.on("ready", (msg) => {
  console.log(`Logged in as ${client.user.tag}!`);
  // new Discord.Message(client, { message: "O pai ta on" });
  client.channels.cache.get("256168112561455104").send("O pai ta on");
});

client.on("message", (msg) => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  switch (command) {
    case "ping":
      client.commands.get("ping").execute(msg, args);
      break;
    case "facts":
      client.commands.get("facts").execute(msg, args);
      break;
    case "help":
      client.commands.get("help").execute(msg, args);
      break;
    case "clear":
      client.commands.get("clear").execute(msg, args);
      break;
    case "cat":
      client.commands.get("cat").execute(msg, args);
      break;
    case "dog":
      client.commands.get("dog").execute(msg, args);
      break;
    case "curse":
      client.commands.get("curse").execute(msg, args);
      break;
    case "spam":
      client.commands.get("spam").execute(msg, args);
      break;
    case "fox":
      client.commands.get("fox").execute(msg, args);
      break;
    case "happy":
      client.commands.get("happy").execute(msg, args);
      break;
    case "weather":
      client.commands.get("weather").execute(msg, args);
      break;
    default:
      msg.reply("Comando não encontrado. Larga de ser burro. PIU!");
  }
});

client.login(process.env.DJS_TOKEN);
