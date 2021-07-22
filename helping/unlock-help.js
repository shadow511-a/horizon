const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    const unlockHelpEmbed = new discord.MessageEmbed()
    .setTitle("**informatin about**: `unlock`")
    .addField('Command name', '`unlock`')
    .addField('Description', '`to give the members permission to chat in chat`')
    .addField('Aliases', '`None`')
    .addField('Permission', '`BAN_MEMBERS`')
    .addField('How to use', '`>unlock`')
    .setFooter("Syntax <>, required []")
    .setTimestamp()
    .setColor("GREEN")

    message.channel.send(unlockHelpEmbed)
}

module.exports.help = {
    name: 'help-unlock',
    aliases: []
}