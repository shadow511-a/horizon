const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    const pingHelpEmbed = new discord.MessageEmbed()
    .setTitle("**informatin about**: `ping`")
    .addField('Command name', '`ping`')
    .addField('Description', '`to get information about the bot responed`')
    .addField('Aliases', '`None`')
    .addField('Permission', '`None`')
    .addField('How to use', '`>ping`')
    .setFooter("Syntax <>, required []")
    .setTimestamp()
    .setColor("GREEN")

    message.channel.send(pingHelpEmbed)
}

module.exports.help = {
    name: 'help-ping',
    aliases: []
}