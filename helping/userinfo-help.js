const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    const yserHelpEmbed = new discord.MessageEmbed()
    .setTitle("**informatin about**: `userinfo`")
    .addField('Command name', '`userinfo`')
    .addField('Description', '`to get the user information`')
    .addField('Aliases', '`user` | `who` | `whois`')
    .addField('Permission', '`None`')
    .addField('How to use', '`>userinfo <mention or id>`')
    .setFooter("Syntax <>, required []")
    .setTimestamp()
    .setColor("GREEN")

    message.channel.send(yserHelpEmbed)
}

module.exports.help = {
    name: 'help-userinfo',
    aliases: []
}