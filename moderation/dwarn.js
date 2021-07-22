const db = require('../../schema/warns')
const discord = require('discord.js')

module.exports = {
    name : 'remove-warn',
    run : async(client, message, args, prefix) => {
        if(!message.content.startsWith(prefix)) return
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
                let number = parseInt(args[1]) - 1
                data.content.splice(number, 1)
                message.channel.send('deleted the warn')
                data.save()
            } else {
                message.channel.send('This user does not have any warns in this server!')
            }
        })
    }
}

module.exports.help = {
    name: 'removewarn',
    aliases: []
}