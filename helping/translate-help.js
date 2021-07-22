const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    const transHelpEmbed = new discord.MessageEmbed()
    .setTitle("**informatin about**: `translate`")
    .addField('Command name', '`translate`')
    .addField('Description', '`to translate a sentence from lang to another lang`')
    .addField('Aliases', '`trans`')
    .addField('Permission', '`None`')
    .addField('How to use', '`>translate [lang ISO] [sentence]`')
    .addField('some ISO', '`ar` | `en`')
    .setFooter("Syntax <>, required []")
    .setTimestamp()
    .setColor("GREEN")

    message.channel.send(transHelpEmbed)
}

module.exports.help = {
    name: 'help-translate',
    aliases: []
}