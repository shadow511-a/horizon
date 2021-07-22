const db = require('../../schema/warns')
const { Message, MessageEmbed } = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if (!message.content.startsWith(prefix)) return
    if (!message.member.hasPermission("MUTE_MEMBERS")) return message.chanel.send(
        new MessageEmbed()
        .setDescription('❎ | you do not have permission to use this command')
        .setColor("RED")
    )
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!user) return message.channel.send(
        new MessageEmbed()
        .setDescription('❎ | please mention a member to warn')
    )
    const reason = args.slice(1).join(" ")
    db.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) => {
        if(err) throw err;
        if(!data) {
            data = new db({
                guildid: message.guild.id,
                user: user.user.id,
                content : [
                    {
                        moderator : message.author.id,
                        reason : reason
                    }
                ]
            })
        } else {
            const obj = {
                moderator: message.author.id,
                reason : reason
            }
            data.content.push(obj)
        }
        data.save()
    });
    user.send(new MessageEmbed()
        .setDescription(`You have been warned for ${reason}`)
        .setColor("RED")
    )
    message.channel.send(new MessageEmbed()
       .setDescription(`Warned ${user} for ${reason}`).setColor("BLUE")
    )
}

module.exports.help = {
    name: 'warn',
    aliases: []
}