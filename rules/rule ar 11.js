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
    .setTitle("RULE AR 11")
    .setDescription(" #11 : ممنوع الحرق بشتى انواعه ( افلام ، انمي ،.....)")
    .setColor("GREEN")
    .setTimestamp()
    )
}

module.exports.help = {
    name: 'rule11ar',
    aliases: []
}