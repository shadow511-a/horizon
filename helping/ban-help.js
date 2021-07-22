const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    const banHelpEmbed = new discord.MessageEmbed()
    .setTitle("**informatin about**: `ban`")
    .addField('Command name', '`ban`')
    .addField('Description', '`to ban a member from the server`')
    .addField('Aliases', '`none`')
    .addField('Permission', '`BAN_MEMBERS`')
    .addField('How to use', '`>ban [mention or id of member] [Reason]`')
    .setFooter("Syntax <>, required []")
    .setTimestamp()
    .setColor("GREEN")

    message.channel.send(banHelpEmbed)
}

module.exports.help = {
    name: 'help-ban',
    aliases: []
}