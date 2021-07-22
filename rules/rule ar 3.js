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
    .setTitle("RULE AR 3")
    .setDescription(" #3 : يمنع التكلم في الامور السياسية و الدينية و الإباحية و العنصرية")
    .setColor("GREEN")
    .setTimestamp()
    )
}

module.exports.help = {
    name: 'rule3ar',
    aliases: []
}