const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return
    if (message.channel.id != '826931124759691285') return message.channel.send(`The command work in games channel <#826931124759691285>`)
    let user = message.mentions.users.first()
    let RN = Math.floor(Math.random() * 100) + 1

    if(!user) return message.channel.send(
        new discord.MessageEmbed()
        .setDescription(' ❎ | قم بعمل منشن لشخص')
        .setColor("RED")
    )
    if(user === message.author) return message.channel.send(
        new discord.MessageEmbed()
        .setDescription(' ❎ | you can not ship with your self')
        .setColor("RED")
    )

    const UnloveEmbed = new discord.MessageEmbed() 
    .setTitle('This isn\'t a match')
    .setThumbnail('https://cdn.discordapp.com/attachments/824906735176253450/828554687229067275/images.png')
    .setDescription(`${message.author} shipped with ${user} and it is ${RN}%`)
    .setColor("RED")

    const loveEmbed = new discord.MessageEmbed() 
    .setTitle('They are born for each others')
    .setThumbnail('https://cdn.discordapp.com/attachments/824906735176253450/828555115593859123/9k.png')
    .setDescription(`${message.author} shipped with ${user} and it is ${RN}%`)
    .setColor("GREEN")

    if(RN > 50) {
        message.channel.send(loveEmbed)
    } else {
        message.channel.send(UnloveEmbed)
    }


}

module.exports.help = {
    name: 'ship',
    aliases: []
}