const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    const unmuteHelpEmbed = new discord.MessageEmbed()
    .setTitle("**informatin about**: `unmute`")
    .addField('Command name', '`unmute`')
    .addField('Description', '`to give the mute member permission to chat`')
    .addField('Aliases', '`none`')
    .addField('Permission', '`MUTE_MEMBERS`')
    .addField('How to use', '`>unmute [mention or id member]`')
    .setFooter("Syntax <>, required []")
    .setTimestamp()
    .setColor("GREEN")

    message.channel.send(unmuteHelpEmbed)
}

module.exports.help = {
    name: 'help-unmute',
    aliases: []
}