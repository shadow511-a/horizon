const db = require('../../schema/warns')
const { Message, MessageEmbed } = require('discord.js')

module.exports = {
    name :'warns',
    /**
     * @param {Message} message
     */
    run : async(client, message, args, prefix) => {
        if(!message.content.startsWith(prefix)) return
        if(!message.member.hasPermission('MUTE_MEMBERS')) return message.channel.send(
            new MessageEmbed()
            .setDescription('❎ | you do not have permission to use this command')
            .setColor("RED")
        )
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!user) return message.channel.send(
            new MessageEmbed()
            .setDescription('❎ | please mention a member to warn')
            .setColor("RED")
        )
        const reason = args.slice(1).join(" ")
        db.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) => {
            if(err) throw err;
            if(data) {
                message.channel.send(new MessageEmbed()
                    .setTitle(`${user.user.tag}'s warns`)
                    .setDescription(
                        data.content.map(
                            (w, i) => 
                            `\`${i + 1}\` | Moderator : ${message.guild.members.cache.get(w.moderator).user.tag}\nReason : ${w.reason}`
                        )
                    )
                    .setColor("BLUE")
                )
            } else {
                message.channel.send('User has no data')
            }

        })
    }
}

module.exports.help = {
    name: 'warns',
    aliases: []
}