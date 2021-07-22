const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    const clearHelpEmbed = new discord.MessageEmbed()
    .setTitle("**informatin about**: `clear`")
    .addField('Command name', '`clear`')
    .addField('Description', '`to delete some message`')
    .addField('Aliases', '`purge`')
    .addField('Permission', '`MANAGE_MESSAGES`')
    .addField('How to use', '`>clear [ammount of message]`')
    .setFooter("Syntax <>, required []")
    .setTimestamp()
    .setColor("GREEN")

    message.channel.send(clearHelpEmbed)
}

module.exports.help = {
    name: 'help-clear',
    aliases: []
}