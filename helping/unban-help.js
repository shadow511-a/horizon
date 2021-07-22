const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    const unbanHelpEmbed = new discord.MessageEmbed()
    .setTitle("**informatin about**: `unban`")
    .addField('Command name', '`unban`')
    .addField('Description', '`to give a permission to ban member to rejoin`')
    .addField('Aliases', '`none`')
    .addField('Permission', '`BAN_MEMBERS`')
    .addField('How to use', '`>unban [member id]`')
    .setFooter("Syntax <>, required []")
    .setTimestamp()
    .setColor("GREEN")

    message.channel.send(unbanHelpEmbed)
}

module.exports.help = {
    name: 'help-unban',
    aliases: []
}