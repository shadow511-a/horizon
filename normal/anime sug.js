const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return
    
    const newanime = args.slice(0).join(" ")
    if(!newanime) return message.channel.send("Please put an anime name")

    const shadow =  message.guild.members.cache.get("526016847355576347")

    const newanime1 = new discord.MessageEmbed()
    .setTitle("New anime")
    .setDescription(`${newanime}`)
    .setFooter(`${message.author.tag}`)
    .setColor("GREEN")


    await shadow.send(newanime1)
}

module.exports.help = {
    name: 'animesug',
    aliases: []
}