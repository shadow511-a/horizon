const discord = require('discord.js');
const db = require("quick.db")

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(
        new discord.MessageEmbed()
        .setDescription(' ❎ | you do not have permission \`administratorr\` tou use this command')
    )

    function cmdName(x) {
        let a = false
        Client.commands.forEach(y => {
            if(y.help.name === x) a = y.help.name;
        });
        return a
    }

    if(!args[1]) return message.channel.send(
        new discord.MessageEmbed()
        .setDescription(" ❎ | Please provide the command name")
        .setColor("RED")
    )
    if(args[1] === 'toggle') return message.channel.send(
        new discord.MessageEmbed()
        .setDescription(" ❎ | You can't disable this command")
        .setColor("RED")
    )
    if(args[0] == 'on') {
        if(!await cmdName(args[1])) return message.channel.send(
            new discord.MessageEmbed()
            .setDescription(" ❎ | No command found with that name")
            .setColor("RED")
        )
        let commandFetch = db.fetch(`commandToggle_${message.guild.id}`)
        if(commandFetch == null) commandFetch = []
        if(!commandFetch.includes(await cmdName(args[1]))) return message.channel.send(
            new discord.MessageEmbed()
            .setDescription(" ✅ | This command is already on")
            .setColor("GREEN")
        )
        const Filtered = commandFetch.filter(x => x !== args[1])
        db.set(`commandToggle_${message.guild.id}`, Filtered)
        return message.channel.send(
            new discord.MessageEmbed()
            .setDescription(" ✅ | Successfully enabled this command")
            .setColor("GREEN")
        )
    }
    
    else if(args[0] == 'off') {
        if(!await cmdName(args[1])) return message.channel.send(
            new discord.MessageEmbed()
            .setDescription(" ❎ | No command found with that name")
            .setColor("RED")
        )
        let commandFetch = db.fetch(`commandToggle_${message.guild.id}`)
        if(commandFetch == null) commandFetch = []
        if(commandFetch.includes(await cmdName(args[1]))) return message.channel.send(
            new discord.MessageEmbed()
            .setDescription(" ✅ | This command is already off")
            .setColor("GREEN")
        )
        db.push(`commandToggle_${message.guild.id}`, cmdName(args[1]))
        return message.channel.send(
            new discord.MessageEmbed()
            .setDescription(" ✅ | Successfully disaabled this command")
            .setColor("GREEN")
        )
    }
    
    else return message.channel.send(
        new discord.MessageEmbed()
        .setDescription("Please specify on/off")
    )
}

module.exports.help = {
    name:'toggle',
    aliases: []
}