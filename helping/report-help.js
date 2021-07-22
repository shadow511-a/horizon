const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    const reportHelpEmbed = new discord.MessageEmbed()
    .setTitle("**informatin about**: `report`")
    .addField('Command name', '`report`')
    .addField('Description', '`to report a member when doing something wrong`')
    .addField('Aliases', '`None`')
    .addField('Permission', '`None`')
    .addField('How to use', '`>userinfo <mention>`')
    .setFooter("Syntax <>, required []")
    .setTimestamp()
    .setColor("GREEN")

    message.channel.send(reportHelpEmbed)
}

module.exports.help = {
    name: 'help-report',
    aliases: []
}