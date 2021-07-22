const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    const lockHelpEmbed = new discord.MessageEmbed()
    .setTitle("**informatin about**: `lock`")
    .addField('Command name', '`lock`')
    .addField('Description', '`to stop chatting for the members`')
    .addField('Aliases', '`none`')
    .addField('Permission', '`BAN_MEMBERS`')
    .addField('How to use', '`>lock`')
    .setFooter("Syntax <>, required []")
    .setTimestamp()
    .setColor("GREEN")

    message.channel.send(lockHelpEmbed)
}

module.exports.help = {
    name: 'help-lock',
    aliases: []
}