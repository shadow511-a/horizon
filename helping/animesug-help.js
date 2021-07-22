const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    const animesugHelpEmbed = new discord.MessageEmbed()
    .setTitle("**informatin about**: `animesug`")
    .addField('Command name', '`animesug`')
    .addField('Description', '`to give shadow a new anime to add to the bot`')
    .addField('Aliases', '`none`')
    .addField('Permission', '`none`')
    .addField('How to use', '`>animesug [anime name]`')
    .setFooter("Syntax <>, required []")
    .setTimestamp()
    .setColor("GREEN")

    message.channel.send(animesugHelpEmbed)
}

module.exports.help = {
    name: 'help-animesug',
    aliases: []
}