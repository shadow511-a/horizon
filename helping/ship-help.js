const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return
    const shipHelpEmbed = new discord.MessageEmbed()
    .setTitle("**informatin about**: `ship`")
    .addField('Command name', '`ship`')
    .addField('Description', '`to see how much love there is between the member`')
    .addField('Aliases', '`none`')
    .addField('Permission', '`None`')
    .addField('How to use', '`>ship [mention member]`')
    .setFooter("Syntax <>, required []")
    .setTimestamp()
    .setColor("GREEN")

    message.channel.send(shipHelpEmbed)
}

module.exports.help = {
    name: 'help-ship',
    aliases: []
}