const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return
    const clearallwarnsHelpEmbed = new discord.MessageEmbed()
    .setTitle("**informatin about**: `clearallwarns`")
    .addField('Command name', '`clearallwarns`')
    .addField('Description', '`to remove all warns to a member`')
    .addField('Aliases', '`none`')
    .addField('Permission', '`ADMINISTRATOR`')
    .addField('How to use', '`>clearallwarns [mention or id member]`')
    .setFooter("Syntax <>, required []")
    .setTimestamp()
    .setColor("GREEN")

    message.channel.send(clearallwarnsHelpEmbed)
}

module.exports.help = {
    name: 'help-clearallwarns',
    aliases: []
}