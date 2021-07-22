const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    const nukeHelpEmbed = new discord.MessageEmbed()
    .setTitle("**informatin about**: `nuke`")
    .addField('Command name', '`nuke`')
    .addField('Description', '`to make a new chat with same old chat permission`')
    .addField('Aliases', '`None`')
    .addField('Permission', '`ADMINISTRATOR`')
    .addField('How to use', '`>nuke`')
    .setFooter("Syntax <>, required []")
    .setTimestamp()
    .setColor("GREEN")

    message.channel.send(nukeHelpEmbed)
}

module.exports.help = {
    name: 'help-nuke',
    aliases: []
}