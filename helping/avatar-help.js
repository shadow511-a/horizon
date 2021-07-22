const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return
    const avatarHelpEmbed = new discord.MessageEmbed()
    .setTitle("**informatin about**: `avatar`")
    .addField('Command name', '`avatar`')
    .addField('Description', '`to get profile picture`')
    .addField('Aliases', '`pfp` | `picture`')
    .addField('Permission', '`None`')
    .addField('How to use', '`>avatar <mention member>`')
    .setFooter("Syntax <>, required []")
    .setTimestamp()
    .setColor("GREEN")

    message.channel.send(avatarHelpEmbed)
}

module.exports.help = {
    name: `help-avatar`,
    aliases: []
}