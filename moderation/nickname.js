const discord = require('discord.js');

module.exports.run = async (Clienr, message, args, prefix) => {
    if (!message.content.startsWith(prefix)) return;
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(
        new discord.MessageEmbed()
        .setColor("RED")
        .setDescription(" ❎ | you cannot use this command.")
    );
    if (!message.guild.me.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("I require \`MANAGE_NICKNAMES\` permission to change nicknames. ");

    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const nickName = args.slice(1).join(" ");

    if (!args[0]) return message.channel.send(
        new discord.MessageEmbed()
        .setColor("RED")
        .setDescription(" ❎ | you must state a member to change the nickname.")
    );
    if (!mentionedMember) return message.channel.send(
        new discord.MessageEmbed()
        .setColor("RED")
        .setDescription(" ❎ | the member is not in the server")
    );
    if (!nickName) return message.channel.send(
        new discord.MessageEmbed()
        .setColor("RED")
        .setDescription(" ❎ | you have to put a nickname")
    );
    if (!mentionedMember.kickable) return message.channel.send(
        new discord.MessageEmbed()
        .setColor("RED")
        .setDescription(" ❎ | i cannot change that member nickname as their a role higher than mine")
    );

    await mentionedMember.setNickname(nickName).catch(err => console.log(err).then(message.channel.send(
        new discord.MessageEmbed()
        .setColor("RED")
        .setDescription(" ❎ | I canoot change nickname due an error")
    )));

    message.channel.send(
        new discord.MessageEmbed()
        .setDescription(` ✅ | I have succefully change ${mentionedMember} name `)
        .setColor("GREEN")
    )
}

module.exports.help = {
    name: `nickname`,
    aliases: ["name"]
};