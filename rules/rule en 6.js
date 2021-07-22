const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(
        new discord.MessageEmbed()
        .setDescription(" ❎ | You do not have `\`MUTE_MEMBERS\` permission to use this command")
        .setColor("RED")
    )


    message.channel.send(
        new discord.MessageEmbed()
    .setTitle("RULE EN 6")
    .setDescription(" #6 in this server you are not allowed to sell or buy, Any installation process management is not responsible for")
    .setColor("GREEN")
    .setTimestamp()
    )
}

module.exports.help = {
    name: 'rule6en',
    aliases: []
}