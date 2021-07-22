const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    const muteHelpEmbed = new discord.MessageEmbed()
    .setTitle("**informatin about**: `mute`")
    .addField('Command name', '`mute`')
    .addField('Description', '`to stop a one member from chatting`')
    .addField('Aliases', '`none`')
    .addField('Permission', '`MUTE_MEMBERS`')
    .addField('How to use', '`>mute [mention or id for mamber] [time] [reason]`')
    .setFooter("Syntax <>, required []")
    .setTimestamp()
    .setColor("GREEN")

    message.channel.send(muteHelpEmbed)
}

module.exports.help = {
    name: 'help-mute',
    aliases: []
}