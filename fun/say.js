const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {

    if (!message.content.startsWith(prefix)) return
    const messageToSay = args.join(" ")
    const sayEmbed = new discord.MessageEmbed()
        .setTitle(`says: ${messageToSay}`)
        .setFooter(message.author.tag ,message.author.displayAvatarURL())
        .setColor("#b64080")
        .setTimestamp()
    try {
        await message.channel.send(sayEmbed)
    } catch (err) {
        console.log(err)
        message.channel.send('there is an error')
    }
}

module.exports.help = {
    name: `say`,
    aliases: []
}