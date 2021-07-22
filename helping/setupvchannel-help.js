const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    const setupvchannel = new discord.MessageEmbed()
    .setTitle("**informatin about**: `setupvchannel`")
    .addField('Command name', '`setupvchannel`')
    .addField('Description', '`to setup the voice channel`')
    .addField('Aliases', '`none`')
    .addField('Permission', '`ADMINISTRATOR`')
    .addField('How to use', '`>setupvchannel [voice channel id]`')
    .setFooter("Syntax <>, required []")
    .setTimestamp()
    .setColor("GREEN")

    message.channel.send(setupvchannel)
}


module.exports.help = {
    name: 'help-setupvchannel',
    aliases: []
}