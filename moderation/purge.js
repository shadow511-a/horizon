const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
  if (!message.content.startsWith(prefix)) return;
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(
    new discord.MessageEmbed()
    .setColor("RED")
    .setDescription(' ❎ | you cannot use this command.')
  );
  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send(
    new discord.MessageEmbed()
    .setColor("RED")
    .setDescription(" ❎ | I do not have \`MANAGES_MESSAGES\` permission.")
  );
  if (!args[0]) return message.channel.send(
    new discord.MessageEmbed()
    .setColor("RED")
    .setDescription(" ❎ | you must state a number of messages to delete. \`>purge number\`")
  );
  const amonutToDelete = Number(args[0], 10);

  if (isNaN(amonutToDelete)) return message.channel.send(
    new discord.MessageEmbed()
    .setColor("RED")
    .setDescription(" ❎ | number stated is not a valid number.")
  );
  if (!Number.isInteger(amonutToDelete)) return message.channel.send(
    new discord.MessageEmbed()
    .setColor("RED")
    .setColor(" ❎ | number stated must be a whole number.")
  );
  if (!amonutToDelete || amonutToDelete < 2 || amonutToDelete > 100) return message.channel.send(
    new discord.MessageEmbed()
    .setColor("RED")
    .setDescription(' ❎ | the number stated must be between 2 and 100.')
  );
  const fetched = await message.channel.messages.fetch({
    limit: amonutToDelete
  });

  try {
    await message.channel.bulkDelete(fetched)
      .then(messages => message.channel.send(
        new discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(` ✅ | deleted ${messages.size} messages!`)
      ));
  } catch (err) {
    console.log(err);
    message.channel.send(
      new discord.MessageEmbed()
      .setColor("RED")
      .setDescription(` ❎ | i was unable to delete the message`)
    );
  }
}

module.exports.help = {
  name: `purge`,
  aliases: ["clear"]
};