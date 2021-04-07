const search = require("youtube-search-api");
module.exports = {
    name:"yt",
    description:"Search for yt videos (only returns the first element)",
    execute(client, msg, args, Discord, cmd){
        let argsJoined;
        if(args.length > 1){
            argsJoined = args.join(" ");
            ytSearch(argsJoined, Discord, msg);
        }else{
            ytSearch(args[0], Discord, msg);
        }
    }
}



async function ytSearch(args,Discord, msg){
        search.GetListByKeyword(args, true).then((data) => {
            let videoTitle = data.items[0].title;
            let videoId = data.items[0].id;
            let videoThumbnail = data.items[0].thumbnail.thumbnails[0].url;
            const embed = new Discord.MessageEmbed()
            .setTitle(videoTitle)
            .setURL(`https://www.youtube.com/watch?v=${videoId}`)
            .setImage(videoThumbnail);
            msg.channel.send(embed);
        }).catch((error) => {
            console.dir(error);
            msg.channel.send("Achei nada nao");
        });
}