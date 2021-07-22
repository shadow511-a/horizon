const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if (!message.content.startsWith(prefix)) return;
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(
        new discord.MessageEmbed()
        .setColor("RED")
        .setDescription(" ❎ | you don't have permission to use this command!")
    );

    let msg = await message.channel.send("Loading....")

    try {
        message.channel.updateOverwrite(message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == "@everyone"), {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
        })
        msg.edit(" ✅ | Successfully Locked the channel!")
    } catch (e) {
        console.log(e)
    }
}

module.exports.help = {
    name: 'lock',
    aliases: []
}