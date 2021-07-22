const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    const slowmodeHelpEmbed = new discord.MessageEmbed()
    .setTitle("**informatin about**: `slowmode`")
    .addField('Command name', '`slowmode`')
    .addField('Description', '`to but timmer between every message`')
    .addField('Aliases', '`sm`')
    .addField('Permission', '`ADMINISTRATOR`')
    .addField('How to use', '`>slowmode [time or nothing]`')
    .setFooter("Syntax <>, required []")
    .setTimestamp()
    .setColor("GREEN")

    message.channel.send(slowmodeHelpEmbed)
}

module.exports.help = {
    name: 'help-slowmode',
    aliases: []
}