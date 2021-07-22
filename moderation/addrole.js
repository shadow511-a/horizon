const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if (!message.content.startsWith(prefix)) return
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(
        new discord.MessageEmbed()
        .setColor("RED")
        .setDescription(" ❎ | you don't have `\MANAGE_ROLE`\ permission to use this command")
    )

    var user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!user) return message.channel.send(
        new discord.MessageEmbed()
        .setColor("RED")
        .setDescription(" ❎ | please mention a member")
    )
    

    let role; 

    if (!args[0]) return message.reply('you need to provide a role, name, id') 

    if(args[0] && isNaN(args[0]) && message.mentions.roles.first()) role = message.mentions.roles.first() 

    if(args[0] && isNaN(args[0]) && !message.mentions.roles.first()){ 

      role = message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == args.slice(0).join(" ").toLowerCase().trim()) 

      if(!message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == args.slice(0).join(" ").toLowerCase().trim())) return message.reply("Role not found")
    }

    if(args[0] && !isNaN(args[0])){

      role = message.guild.roles.cache.find(e => e.id == args[0])

      if(!message.guild.roles.cache.has(args[0])) return message.reply("the id is invalid")
    }
  
    if(!role) return message.reply("You must mention role, give ID, or say the name at least")

    if (user.roles.cache.get(role)) {
        user.roles.remove(role).then(() => {
            return message.channel.send(
                new discord.MessageEmbed()
                .setColor("GREEN")
                .setDescription(` ✅ | The role removed from ${user}`)
            )
        })
    } else {
        user.roles.add(role).then(() => {
            return message.channel.send(
                new discord.MessageEmbed()
                .setColor("GREEN")
                .setDescription(` ✅ | I have added the role to ${user}`)
            )
        })
    }
}

module.exports.help = {
    name: 'addrole',
    aliases: []
}