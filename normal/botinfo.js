const discord = require('discord.js');

const moment = require('moment');

module.exports.run = async (Client, message, args, prefix) => {
    if (!message.content.startsWith(prefix)) return;

    var botEmbed = new discord.MessageEmbed()
     .setColor(`RANDOM`)
     .setTitle(`Bot info`)
     .setThumbnail(Client.user.displayAvatarURL())
     .addField(`**General**`,  [
         `**Username:** ${Client.user.username}`,
         `**Tag:** ${Client.user.tag}`,
         `**ID:** ${Client.user.id}`,
         `**Created At:** ${moment(Client.user.createdAt).format("DD-MM-YYYY [at] HH:mm")}`,
         `**Owner:** Shadow511#2004`,
         '\u200b'
     ])
     .addField(`**Stats**`,[
         `**Servers:** ${Client.guilds.cache.size}`,
         `**Channels:** ${Client.channels.cache.size}`,
     ])
     message.channel.send(botEmbed)
}
module.exports.help = {
    name: "botinfo",
    aliases: ['bot']
}