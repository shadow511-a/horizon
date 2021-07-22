const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    const saoHelpEmbed = new discord.MessageEmbed()
    .setTitle("**informatin about**: `sao`")
    .addField('Command name', '`sao`')
    .addField('Description', '`to get information to all sao series`')
    .addField('Aliases', '`None`')
    .addField('Permission', '`None`')
    .addField('How to use', '`>sao`')
    .setFooter("Syntax <>, required []")
    .setTimestamp()
    .setColor("GREEN")

    message.channel.send(saoHelpEmbed)
}

module.exports.help = {
    name: 'help-sao',
    aliases: []
}