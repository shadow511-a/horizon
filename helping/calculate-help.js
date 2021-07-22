const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return
    const calcHelpEmbed = new discord.MessageEmbed()
    .setTitle("**informatin about**: `calculate`")
    .addField('Command name', '`claculate`')
    .addField('Description', '`math tool`')
    .addField('Aliases', '`calc`')
    .addField('Permission', '`None`')
    .addField('How to use', '`>calc [math]`')
    .setFooter("Syntax <>, required []")
    .setTimestamp()
    .setColor("GREEN")
    
    message.channel.send(calcHelpEmbed)
}

module.exports.help = {
    name: 'help-calculate',
    aliases: []
}