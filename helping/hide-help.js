const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    const hideHelpEmbed = new discord.MessageEmbed()
    .setTitle("**informatin about**: `hide`")
    .addField('Command name', '`hide`')
    .addField('Description', '`to disable every one to see a channel`')
    .addField('Aliases', '`none`')
    .addField('Permission', '`BAN_MEMBERS`')
    .addField('How to use', '`>hide`')
    .setFooter("Syntax <>, required []")
    .setTimestamp()
    .setColor("GREEN")

    message.channel.send(hideHelpEmbed)
}

module.exports.help = {
    name: 'help-hide',
    aliases: []
}