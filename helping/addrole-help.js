const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    const addroleHelpEmbed = new discord.MessageEmbed()
    .setTitle("**informatin about**: `addrole`")
    .addField('Command name', '`addrole`')
    .addField('Description', '`to add a role to member`')
    .addField('Aliases', '`None`')
    .addField('Permission', '`MANAGE_ROLES`')
    .addField('How to use', '`>addrole [mention member] [mention or id or name of role]`')
    .setFooter("Syntax <>, required []")
    .setTimestamp()
    .setColor("GREEN")

    message.channel.send(addroleHelpEmbed)
}

module.exports.help = {
    name: 'help-addrole',
    aliases: []
}