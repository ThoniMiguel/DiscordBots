const { MongoClient } = require("mongodb");
const password = process.env.MONGODB_PASS;
const uri =
  "mongodb+srv://thoniadmin:" +
  password +
  "@mylearningcluster.w6itz.mongodb.net/vegas_crash_log";
// const client = new MongoClient(uri);
module.exports = {
    name:"crash",
    aliases: ['crashlog'],
    description:"Couting how many times Vegas crashed :)",
    execute(client, msg, args, Discord, cmd){
        if(msg.author.username === "☭ darius ☭" || msg.author.username === "The_Joker" ){
            if(cmd === "crashlog"){
                retrieveCrash(msg).catch(console.dir);
                return;
            }
            insertCrash(msg).catch(console.dir);
            return;
        }
    }
}



// async function insertCrash(msg){
//     await client.connect({ useNewUrlParser: true});
//     const database = client.db("vegas_crash_log");
//     const vegasCrashCollection = database.collection("vegas_crash");
//     let fullDate = new Date();
//     let fullDateBrazil = fullDate.setHours(fullDate.getHours() - 3); //Becareful with this one... if the bot is running locally it will subtract 3 hours from the correct time in wherever you are...
//     let simpleDate = `${fullDate.getDate()}/${fullDate.getMonth() + 1}/${fullDate.getFullYear()}`;
    
//     const doc = {
//         crash_value: 1,
//         date: simpleDate
//     };

//     const result = await vegasCrashCollection.insertOne(doc);
//     console.log(`${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`);
//     msg.reply("Guardei lá no banco de dados :sunglasses: :pinched_fingers:");
// }

async function insertCrash(msg){
    const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});
    try{
            await client.connect();
            const database = client.db("vegas_crash_log");
            const vegasCrashCollection = database.collection("vegas_crash");
            let fullDate = new Date();
            let fullDateBrazil = fullDate.setHours(fullDate.getHours() - 3); //Becareful with this one... if the bot is running locally it will subtract 3 hours from the correct time in wherever you are...
            let simpleDate = `${fullDate.getDate()}/${fullDate.getMonth() + 1}/${fullDate.getFullYear()}`;
            const doc = {
                crash_value: 1,
                date: simpleDate
            };
            const result = await vegasCrashCollection.insertOne(doc);
            console.log(`${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`);
            msg.reply("Guardei lá no banco de dados :sunglasses: :pinched_fingers:");
    }catch(err){
        throw new Error("Unable to connect");
    }finally{
        await client.close();
    }
}


async function retrieveCrash(msg){
    const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

    await client.connect();
    const database = client.db("vegas_crash_log");
    let fullDate = new Date();
    let fullDateBrazil = fullDate.setHours(fullDate.getHours() - 3); //Becareful with this one... if the bot is running locally it will subtract 3 hours from the correct time in wherever you are...
    let simpleDate = `${fullDate.getDate()}/${fullDate.getMonth() + 1}/${fullDate.getFullYear()}`;
    const vegasCrashCollection = database.collection("vegas_crash");
    vegasCrashCollection.find({"date":simpleDate}, {projection: {_id: 0}}).toArray(function(err, result){
        if (err) throw err;
        msg.channel.send("** Vegas Crash Log Report **");
        msg.channel.send(`> Essa bosta ja crashou ${result.length} vezes hoje!`)
    })
    vegasCrashCollection.find({}, {projection: {_id: 0}}).toArray(function(err, result){
        if (err) throw err;
        msg.channel.send(`> E no total, ja crashou ${result.length} vezes!`);
    })
}
