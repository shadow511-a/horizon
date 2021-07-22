const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    const removewarnHelpEmbed = new discord.MessageEmbed()
    .setTitle("**informatin about**: `removewarn`")
    .addField('Command name', '`removewarn`')
    .addField('Description', '`to remove one wrns to a member`')
    .addField('Aliases', '`none`')
    .addField('Permission', '`ADMINISTRATOR`')
    .addField('How to use', '`>removewarn [mention or id member] [warn number]`')
    .setFooter("Syntax <>, required []")
    .setTimestamp()
    .setColor("GREEN")

    message.channel.send(removewarnHelpEmbed)
}

module.exports.help = {
    name: 'help-removewarn',
    aliases: []
}