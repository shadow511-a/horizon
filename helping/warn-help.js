const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    const wrnHelpEmbed = new discord.MessageEmbed()
    .setTitle("**informatin about**: `warn`")
    .addField('Command name', '`warn`')
    .addField('Description', '`towarn a member when doing somthing wrong`')
    .addField('Aliases', '`none`')
    .addField('Permission', '`MUTE-MEMBERS`')
    .addField('How to use', '`>warn [mention or id member] [Reason]`')
    .setFooter("Syntax <>, required []")
    .setTimestamp()
    .setColor("GREEN")

    message.channel.send(wrnHelpEmbed)
}

module.exports.help = {
    name: 'help-warn',
    aliases: []
}