const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if (!message.content.startsWith(prefix)) return;
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(" ❎ | you cannot use this command");
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(" ❎ | I donnot have ban permission");

    let reason = args.slice(1).join(" ");
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if (!reason) reason = 'NO reason given';
    if (!args[0]) return message.channel.send(
        new discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(" ❎ | you must state someone to banned. `\>ban @user reason`\ ")
    );
    if (!mentionedMember) return message.channel.send(
        new discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(" ❎ | the mentioned member is not in the server")
    );
    if (!mentionedMember.bannable) return message.channel.send(
        new discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(" ❎ | I can't ban this member")
    );


    const banEmbed = new discord.MessageEmbed()
        .setTitle(`you have been banned from ${message.guild.name}`)
        .setDescription(`Reason for being banned: ${reason}`)
        .setColor("#e60914")
        .setTimestamp();

    await mentionedMember.send(banEmbed).catch(err => console.log(err));
    await mentionedMember.ban({
        days: 7,
        reason: reason
    }).catch(err => console.log(err)).then(() => message.channel.send(
        new discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(" ✅ | successfully banned" + mentionedMember.user.tag)
    ));
}

module.exports.help = {
    name: `ban`,
    aliases: []
};