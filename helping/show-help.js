const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    const showHelpEmbed = new discord.MessageEmbed()
    .setTitle("**informatin about**: `show`")
    .addField('Command name', '`show`')
    .addField('Description', '`to enable every one to see a channel`')
    .addField('Aliases', '`none`')
    .addField('Permission', '`BAN_MEMBERS`')
    .addField('How to use', '`>show`')
    .setFooter("Syntax <>, required []")
    .setTimestamp()
    .setColor("GREEN")

    message.channel.send(showHelpEmbed)
}

module.exports.help = {
    name: 'help-show',
    aliases: []
}