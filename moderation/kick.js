const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if (!message.content.startsWith(prefix)) return;
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(
        new discord.MessageEmbed()
        .setColor("RED")
        .setDescription(" ❎ | you cannot use this command.")
    )
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "no reason given";
    const kickEmbed = new discord.MessageEmbed()
        .setTitle(`you were kicked from ${message.guild.name}`)
        .setDescription(`Reasone: ${reason}`)
        .setColor("#e60914")
        .setTimestamp();

    // >kick @user dm ads
    if (!args[0]) return message.channel.send(
        new discord.MessageEmbed()
        .setColor("RED")
        .setDescription(' ❎ | you need to state a user to kick. \`>kick @user reason\`')
    );
    if (!mentionedMember) return message.channel.send(
        new discord.MessageEmbed()
        .setColor("RED")
        .setDescription(' ❎ | The member mentioned is not in the server.')
    );
    if (!mentionedMember.kickable) return message.channel.send(
        new discord.MessageEmbed()
        .setColor("RED")
        .setDescription('❎ | i cannot kick this member')
    );
    try {
        await mentionedMember.send(kickEmbed);
    } catch (err) {
        console.log(`I was unable to message the member`);
    }

    try {
        await mentionedMember.kick(reason);
    } catch (err) {
        console.log(err);
        return message.channel.send(
            new discord.MessageEmbed()
            .setColor("RED")
            .setColor(" ❎ | I was unable to kick the member mentioned.")
        );
    }
}

module.exports.help = {
    name: `kick`,
    aliases: []
};