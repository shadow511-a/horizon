const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return


    const afkHelpEmbed = new discord.MessageEmbed()
    .setTitle("**informatin about**: `AFK`")
    .addField('Command name', '`AFK`')
    .addField('Description', '`to put your self in AFK mode`')
    .addField('Aliases', '`None`')
    .addField('Permission', '`None`')
    .addField('How to use', '`>afk <message you write>`')
    .setFooter("Syntax <>, required []")
    .setTimestamp()
    .setColor("GREEN")

    message.channel.send(afkHelpEmbed)
}

module.exports.help = {
    name: 'help-afk',
    aliases: []
}