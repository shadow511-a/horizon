const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    const setupvcategory = new discord.MessageEmbed()
    .setTitle("**informatin about**: `setupvcategory`")
    .addField('Command name', '`setupvcategory`')
    .addField('Description', '`to setup a voice category`')
    .addField('Aliases', '`none`')
    .addField('Permission', '`ADMINISTRATOR`')
    .addField('How to use', '`>setupvcategory [category id]`')
    .setFooter("Syntax <>, required []")
    .setTimestamp()
    .setColor("GREEN")

    message.channel.send(setupvcategory)
}

module.exports.help = {
    name: 'help-setupvcategory',
    aliases: []
}