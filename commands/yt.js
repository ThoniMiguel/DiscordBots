const search = require("youtube-search-api");
module.exports = {
    name:"yt",
    description:"Search for yt videos (only returns the first element)",
    execute(client, msg, args, Discord, cmd){
        let argsJoined;
        if(args.length >= 0){
            if(args.length > 1){
                argsJoined = args.join(" ");
                ytSearch(argsJoined, Discord, msg);
            }else{
                ytSearch(args[0], Discord, msg);
            }
        }
    }
}



async function ytSearch(args,Discord, msg){
        search.GetListByKeyword(args, true).then((data) => {
            let videoId = data.items[0].id;
            let videoUrl = `https://www.youtube.com/watch?v=${videoId}`
            msg.channel.send(videoUrl);
        }).catch((error) => {
            console.dir(error);
            msg.channel.send("Achei nada nao");
        });
}