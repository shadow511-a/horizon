const Discord = require("discord.js");
const db = require("quick.db");
let prefix = ">";
exports.run = async (client, message, prefix) =>  {

  if (message.author.bot || message.channel.type == "dm") return undefined;
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
  let args = message.content.split(" ");
  if(!args[1]) return message.channel.send(`**${prefix}setPrivate-category [CATEGORY ID]**`)
  let find = message.guild.channels.cache.find(ch => ch.id === args[1]);
  if(!find) return message.channel.send("**Invalid Channel**")
  let channelCategory = find;
  if(channelCategory.type != "category") return message.channel.send(`**Invalid Channel Type : Supported Type \`category\`**`)
  await db.set(`PrivateCategory_[${message.guild.id}]`,channelCategory.id)
  message.channel.send(`**Voice Channel Is : \`${channelCategory.name}\`**`)
};
 
exports.conf = {
    enabled: true,
    aliases: ["setprivate-category"],
};
 
exports.help = {
    name: 'setprivate-category',
    description: '',
    usage: ''
};