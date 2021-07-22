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
    .setTitle("RULE AR 1")    
    .setDescription(" #1 : يرجى استعمال الرومات للمواضيع المخصصة لها وعدم التكلم بامور لا صلة بها")
    .setColor("GREEN")
    .setTimestamp()
    )
}

module.exports.help = {
    name: 'rule1ar',
    aliases: []
}