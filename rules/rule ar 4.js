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
    .setTitle("RULE AR 4")
    .setDescription(" #4 : يمنع الإعلان في اي شكل من الاشكال او نشر روابط داخل السيرفر او في خاص الاعضاء دون الرجوع للادارة")
    .setColor("GREEN")
    .setTimestamp()
    )
}

module.exports.help = {
    name: 'rule4ar',
    aliases: []
}