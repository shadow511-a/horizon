const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return
    const botHelpEmbed = new discord.MessageEmbed()
    .setTitle("**informatin about**: `botinfo`")
    .addField('Command name', '`botinfo`')
    .addField('Description', '`to get bot data`')
    .addField('Aliases', '`bot`')
    .addField('Permission', '`None`')
    .addField('How to use', '`>botinfo`')
    .setFooter("Syntax <>, required []")
    .setTimestamp()
    .setColor("GREEN")

    message.channel.send(botHelpEmbed)
}

module.exports.help = {
    name: 'help-botinfo',
    aliases: []
}