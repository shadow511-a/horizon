const discord = require('discord.js');
const ms = require('ms');

module.exports.run = async (Client, message, args, prefix) => {
  if (!message.content.startsWith(prefix)) return;
  if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(
    new discord.MessageEmbed()
    .setColor("RED")
    .setDescription(" ❎ | You cannot use this command")
  );
  if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send(
    new discord.MessageEmbed()
    .setColor("RED")
    .setDescription(" ❎ | I do not have \`MANAGE_ROLES\` permission ")
  );

  const muteRole = message.guild.roles.cache.get('826931055722233917');
  const memberRole = message.guild.roles.cache.get('826931051104174090');
  const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  let time = args[1];
  let reason = args.slice(2).join(" ");
  const muteEmbed = new discord.MessageEmbed()
    .setTitle(`you have been muted in ${message.guild.name}.`)
    .addField(`Duration ${time}`, `Reason : ${reason}`)
    .setTimestamp();

  if (!args[0]) return message.channel.send(
    new discord.MessageEmbed()
    .setColor("RED")
    .setDescription('❎ | You must state a member to mute with a time \`>mute @user time reason\`')
  );
  if (!mentionedMember) return message.channel.send(
    new discord.MessageEmbed()
    .setColor("RED")
    .setDescription(' ❎ | The member state is not in the server')
  );
  if (!mentionedMember.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(
    new discord.MessageEmbed()
    .setColor("RED")
    .setDescription(' ❎ | You cannot mute this member')
  );
  if (!time) return message.channel.send(
    new discord.MessageEmbed()
    .setColor("RED")
    .setDescription(' ❎ | You must state a time \`>mute @user time reason\`')
  );
  if (!reason) reason = 'No reason given.';

  await mentionedMember.roles.add(muteRole.id).catch(err => console.log(err));
  await mentionedMember.roles.remove(memberRole.id).catch(err => console.log(err));
  await mentionedMember.send(muteEmbed).catch(err => console.log(err));
  message.channel.send(
    new discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription(` ✅ | I have muted ${mentionedMember} succefuly`)
  );

  setTimeout(async function () {
    await mentionedMember.roles.add(memberRole.id).catch(err => console.log(err));
    await mentionedMember.roles.remove(muteRole.id).catch(err => console.log(err));
    await mentionedMember.send(`Your mute has been lifted in ${message.guild.name}.`).catch(err => console.log(err));
  }, ms(time));
}

module.exports.help = {
  name: `mute`,
  aliases: []
};