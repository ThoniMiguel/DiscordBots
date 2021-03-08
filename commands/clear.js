module.exports = {
    name:"clear",
    description: "Clear n messages",
    async execute(msg,args){
        console.log(msg.author);
        if(!args[0] || isNaN(args[0]) || args[0] > 50 || args[0] < 1){
            return msg.reply("Põem uma porra decente ai, caralho!");
        }
        
        if(msg.author.name === "The_Joker"){
        await msg.channel.messages.fetch({limit: args[0]}).then(messages => {
            msg.channel.bulkDelete(messages);
        })}
    }
}