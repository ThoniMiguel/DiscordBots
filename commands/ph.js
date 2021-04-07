//this is a nsfw feature... do not use it if you are under legal age!
const ph = require("@justalk/pornhub-api");
const page = require("@justalk/pornhub-api/src/page");

module.exports = {
    name:"ph",
    description:"Prithee be careful... thee will find some nudity here",
    execute(client, msg, args, Discord, cmd){
        let argsJoin;


        if(args.length >= 0){
            argsJoin = args.join(" ");
            phSearch(argsJoin, Discord, msg);
            // const video = await ph.search(argsJoin).catch((err) => {console.dir(err)});
            // console.log(video.results[random]);
            // if(args.length > 1){
            //     argsJoin = args.join(" ");
            //     const video = await ph.search(argsJoin);
            //     console.log(video.results[random]);
            // }else{   
            //     const video = await ph.search(args[0]);
            //     console.log(video.results[random]);
            // }
        }
    }
}


async function phSearch(args, Discord, msg){

        const p = await ph.search(args, ['thumbnail_url']);
        let min = 0;
        let max = p.results.length;
        let random = Math.floor(Math.random()*(max-min+1)+min);
        let results = p.results[random];
        const page = await ph.page(results.link, ['thumbnail_url']);
        let img = page.thumbnail_url;
        const embed = new Discord.MessageEmbed()
        .setTitle(results.title)
        .setURL(results.link)
        .setImage(img)
        .setFooter()
        msg.channel.send(embed);
}