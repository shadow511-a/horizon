const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {

    if (!message.content.startsWith(prefix)) return
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(
        new discord.MessageEmbed()
         .setDescription("❎ | you don't have permission to use this command")
         .setColor("RED")
    )

    
    if (message.content.startsWith(prefix + "line")) {
        message.delete()
        message.channel.send("https://cdn.discordapp.com/attachments/795770578392449034/853257262629912576/New_Project_2_31E31E1.gif")
    }
    
}

module.exports.help = {
    name: 'line',
    aliases: []
}