const { MongoClient } = require("mongodb");
const password = process.env.MONGODB_PASS;
const uri =
  "mongodb+srv://thoniadmin:" +
  password +
  "@mylearningcluster.w6itz.mongodb.net/PushUps";
const client = new MongoClient(uri);
module.exports = {
  name: "pushup",
  description:
    "Responsible for storing data on a mongoDB about my daily pushups",
  execute(msg, args) {
    if (msg.author.username === "The_Joker") {
      insertPushUp(args[0]);
    }
  },
};

async function insertPushUp(rep) {
  try {
    await client.connect();
    const database = client.db("PushUps");
    const pushupCollection = database.collection("pushupsCollection");
    // doc to be inserted
    let fullDate = new Date();
    let fullDateBrazil = fullDate.setHours(fullDate.getHours() - 3);
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
  } finally {
    client.close();
  }
}
