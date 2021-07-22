const db = require('../../schema/warns')
const discord = require('discord.js')
module.exports = {
    name : 'remove-all-warns',
    run : async(client, message, args, prefix) => {
        if (!message.content.startsWith(prefix)) return
        if(!message.member.hasPermission('MUTE_MEMBERS')) return message.channel.send(
            new discord.MessageEmbed()
            .setDescription('❎ | you do not have permission to use this command')
            .setColor("RED")
        )
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!user) return message.channel.send(
            new discord.MessageEmbed()
            .setDescription('❎ | please mention a member to warn')
            .setColor("RED")
        )
        db.findOne({ guildid : message.guild.id, user: user.user.id}, async(err,data) => {
            if(err) throw err;
            if(data) {
                await db.findOneAndDelete({ user : user.user.id, guildid: message.guild.id})
                message.channel.send(`Cleared ${user.user.tag}'s warns`)
            } else {
                message.channel.send('This user does not have any warns in this server!')
            }
        })
    }
}

module.exports.help = {
    name: 'clearallwarns',
    aliases: []
}