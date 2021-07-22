const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    const roleHelpEmbed = new discord.MessageEmbed()
    .setTitle("**informatin about**: `roleinfo`")
    .addField('Command name', '`roleinfo`')
    .addField('Description', '`to get role id and who had the role`')
    .addField('Aliases', '`role`')
    .addField('Permission', '`None`')
    .addField('How to use', '`>roleinfo [name or id]`')
    .setFooter("Syntax <>, required []")
    .setTimestamp()
    .setColor("GREEN")

    message.channel.send(roleHelpEmbed)
}

module.exports.help = {
    name: 'help-roleinfo',
    aliases: []
}