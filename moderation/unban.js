const discoed = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if (!message.content.startsWith(prefix)) return;
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(
        new discoed.MessageEmbed()
        .setColor("RED")
        .setDescription(" ❎ | you cannot use this command")
    );
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(
        new discoed.MessageEmbed()
        .setColor("RED")
        .setDescription(" ❎ | I do not have ban permission")
    );

    let reason = args.slice(1).join(" ");
    let userID = args[0];

    if (!reason) reason = 'NO reason given';
    if (!args[0]) return message.channel.send(
        new discoed.MessageEmbed()
        .setColor("RED")
        .setDescription(' ❎ | you must state someone to unban. `\>unban ID reason`\ ')
    );
    if (isNaN(args[0])) return message.channel.send(
        new discoed.MessageEmbed()
        .setColor("RED")
        .setDescription(' ❎ | the id stated is not a number. \`>unban ID reason\` ')
    );

    message.guild.fetchBans().then(async bans => {
        if (bans.size == 0) return message.channel.send(
            new discoed.MessageEmbed()
            .setColor("RED")
            .setDescription(' ❎ | this server does not have anyone banned')
        );
        let bUser = bans.find(b => b.user.id == userID);
        if (!bUser) return message.channel.send(
            new discoed.MessageEmbed()
            .setColor("RED")
            .setDescription(' ❎ | The user ID stated is not banned')
        );
        await message.guild.members.unban(bUser.user, reason).catch(err => {
            console.log(err);
            return message.channel.send(
                new discoed.MessageEmbed()
                .setColor("RED")
                .setDescription(' ❎ | The user ID stated is not banned')
            );
        }).then(() => {
            message.channel.send(
                new discoed.MessageEmbed()
                .setColor("GREEN")
                .setDescription(` ✅ | successfully unbaned ${args[0]}`)
            );
        });
    });

}

module.exports.help = {
    name: `unban`,
    aliases: []
};