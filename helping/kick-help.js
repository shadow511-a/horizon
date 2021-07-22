const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    const kickHelpEmbed = new discord.MessageEmbed()
    .setTitle("**informatin about**: `kick`")
    .addField('Command name', '`kick`')
    .addField('Description', '`to get a member from the server`')
    .addField('Aliases', '`none`')
    .addField('Permission', '`KICK_MEMBERS`')
    .addField('How to use', '`> [mention or id of member] [Reason]`')
    .setFooter("Syntax <>, required []")
    .setTimestamp()
    .setColor("GREEN")

    message.channel.send(kickHelpEmbed)
}

module.exports.help = {
    name: 'help-kick',
    aliases: []
}