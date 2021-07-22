const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    const nicknameHelpEmbed = new discord.MessageEmbed()
    .setTitle("**informatin about**: `nickname`")
    .addField('Command name', '`nickname`')
    .addField('Description', '`to chane the member name`')
    .addField('Aliases', '`name`')
    .addField('Permission', '`BAN_MEMBERS`')
    .addField('How to use', '`>nickname [mention member] [new name]`')
    .setFooter("Syntax <>, required []")
    .setTimestamp()
    .setColor("GREEN")

    message.channel.send(nicknameHelpEmbed)
}

module.exports.help = {
    name: 'help-nickname',
    aliases: []
}