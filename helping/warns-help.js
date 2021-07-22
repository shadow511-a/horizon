const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    const warnsHelpEmbed = new discord.MessageEmbed()
    .setTitle("**informatin about**: `warns`")
    .addField('Command name', '`warns`')
    .addField('Description', '`to get how many warns the member has')
    .addField('Aliases', '`none`')
    .addField('Permission', '`MUTE_MEMBERS`')
    .addField('How to use', '`>warns [mention or id member]`')
    .setFooter("Syntax <>, required []")
    .setTimestamp()
    .setColor("GREEN")

    message.channel.send(warnsHelpEmbed)
}

module.exports.help = {
    name: 'help-warns',
    aliases: []
}