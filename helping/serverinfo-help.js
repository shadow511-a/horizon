const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    const serverHelpEmbed = new discord.MessageEmbed()
    .setTitle("**informatin about**: `serverinfo`")
    .addField('Command name', '`serverinfo`')
    .addField('Description', '`to get the all server detale`')
    .addField('Aliases', '`server`')
    .addField('Permission', '`None`')
    .addField('How to use', '`>server`')
    .setFooter("Syntax <>, required []")
    .setTimestamp()
    .setColor("GREEN")

    message.channel.send(serverHelpEmbed)
}

module.exports.help = {
    name: 'help-serverinfo',
    aliases: []
}