const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    const lockdownHelpEmbed = new discord.MessageEmbed()
    .setTitle("**informatin about**: `lockdown`")
    .addField('Command name', '`lockdown`')
    .addField('Description', '`to lock all server chat`')
    .addField('Aliases', '`None`')
    .addField('Permission', '`ADMINISTRATOR`')
    .addField('How to use', '`>lockdown [Reason]`')
    .setFooter("Syntax <>, required []")
    .setTimestamp()
    .setColor("GREEN")

    message.channel.send(lockdownHelpEmbed)
}

module.exports.help = {
    name: 'help-lockdown',
    aliases: []
}