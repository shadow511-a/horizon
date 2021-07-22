const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    const lockdownoffHelpEmbed = new discord.MessageEmbed()
    .setTitle("**informatin about**: `lockdownoff`")
    .addField('Command name', '`lockdown-off`')
    .addField('Description', '`to unlock all server chat`')
    .addField('Aliases', '`None`')
    .addField('Permission', '`ADMINISTRATOR`')
    .addField('How to use', '`>lockdown-off`')
    .setFooter("Syntax <>, required []")
    .setTimestamp()
    .setColor("GREEN")

    message.channel.send(lockdownoffHelpEmbed)
}

module.exports.help = {
    name: 'help-lockdownoff',
    aliases: []
}