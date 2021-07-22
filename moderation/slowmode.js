const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return
    if(!message.member.hasPermission("ADMINISTRATOR")) return

    let time = args[0]
    if(!time) return message.channel.send(
        new discord.MessageEmbed()
        .setDescription(" ❎ | Please provide a time in seconds")
        .setColor("RED")
    )
    if(isNaN(time)) return message.channel.send(
        new discord.MessageEmbed()
        .setDescription(" ❎ | Please provide a valid number")
        .setColor("RED")
    )

    message.channel.setRateLimitPerUser(time, 'No Reason')

    message.channel.send(
        new discord.MessageEmbed()
        .setDescription(` ✅ | Successfully set the slowmode on this channel ${time} seconds`)
        .setColor("GREEN")
    )


}

module.exports.help = {
    name: 'slowmode',
    aliases: ['sm']
}

//Please provide a time in seconds
//Please provide a valid number
//Successfully set the slowmode on this channel ${time} seconds