const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    const giveawayHelpEmbed = new discord.MessageEmbed()
    .setTitle("**informatin about**: `giveaway`")
    .addField('Command name', '`giveaway`')
    .addField('Description', '`to start a giveaway`')
    .addField('Aliases', '`gstart`')
    .addField('Permission', '`BAN_MEMBERS`')
    .addField('How to use', '`>giveaway [time] [winners] [prize]`')
    .setFooter("Syntax <>, required []")
    .setTimestamp()
    .setColor("GREEN")

    message.channel.send(giveawayHelpEmbed)
}

module.exports.help = {
    name: 'help-giveaway',
    aliases: []
}