const r = require("better-redddit");
module.exports = {
    name:"r",
    aliases:"rimg",
    description:"Returns a specific /r from reddit",
    execute(client, msg, args, Discord, cmd){
        // r.search('memes', 2).then(results => {
        //     console.log(results);
        // });
        if((args.length > 2) || (args[1] <= 0) || (args[1] > 25)){
            msg.channel.send("O comando deveria ser: $reddit <sub_reddit> <limit_search até 25>");
            return;
        }
        let sub = args[0];
        let range = args[1];
        r.top_posts(sub, range).then(results => {
            let myResult = results[returnRandom(1, results.length)];
            console.log(myResult);
            if(cmd == "rimg"){
                msg.channel.send(myResult.data.url);
                return;
            }
            msg.channel.send(`http://www.reddit.com/${myResult.data.permalink}`);
            
        }).catch((err) => {
            console.log("something went wrong");
        })
    }
}






function returnRandom(min, max){
    if(max === 1){
        return 0;
    }else{
        return Math.floor(Math.random() * (max - min) + min);
    }
}