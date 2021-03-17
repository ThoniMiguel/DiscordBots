const { TextChannel } = require("discord.js");
const { MongoClient } = require("mongodb");
const password = process.env.MONGODB_PASS;
let connectionClient;
const uri =
  "mongodb+srv://thoniadmin:" +
  password +
  "@mylearningcluster.w6itz.mongodb.net/PushUps";
const client = new MongoClient(uri);
module.exports = {
  name: "pushup",
  description:
    "Responsible for storing data on a mongoDB about my daily pushups",
  execute(client, msg, args) {
    if (msg.author.username === "The_Joker") {
      if (args.length === 0) {
        insertPushUp(10, msg).catch(console.dir);
        return;
      } else if (args.length > 0) {
        insertPushUp(args[0],msg).catch(console.dir);
      }
    }
  },
};

async function insertPushUp(rep, msg) {
  await client.connect({ useNewUrlParser: true });
  const database = client.db("PushUps");
  const pushupCollection = database.collection("pushupsCollection");
  console.log("DATABASE: " + database);
  // doc to be inserted
  let fullDate = new Date();
  let fullDateBrazil = fullDate.setHours(fullDate.getHours() - 3); //Becareful with this one... if the bot is running locally it will subtract 3 hours from the correct time in wherever you are...
  let simpleFullDate = fullDate.toLocaleString("pt-BR", {
    timezone: "Brasil/Brasilia",
  });
  let simpleDate = `${fullDate.getDate()}/${fullDate.getMonth() + 1}`;
  console.log(
    fullDate +
      "\n" +
      fullDateBrazil +
      "\n" +
      simpleFullDate +
      "\n" +
      simpleDate +
      "\n" +
      "Repetitions:" +
      rep
  );
  const doc = {
    Repetition: rep,
    SimpleDate: simpleDate,
    SimpleFullDate: simpleFullDate,
    fullDate: fullDate,
  };
  const result = await pushupCollection.insertOne(doc);
  console.log(
    `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`
  );
  msg.reply("Guardei lá no banco de dados :sunglasses: :pinched_fingers:");
  
}
