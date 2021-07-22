const Discord = require("discord.js");
const db = require("quick.db");
let prefix = ">";
exports.run = async (client, message, prefix) =>  {
  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot || message.channel.type == "dm") return undefined;
  if (!message.member.hasPermission("ADMINISTRATOR")) return;
  let args = message.content.split(" ");
  if(!args[1]) return message.channel.send(`**${prefix}setPrivate-channel [CHANNEL ID]**`)
  let find = message.guild.channels.cache.find(ch => ch.id === args[1]);
  if(!find) return message.channel.send("**Invalid Channel**")
  let channelVoice = find;
  if(channelVoice.type != "voice") return message.channel.send(`**Invalid Channel Type : Supported Type \`voice\`**`)
  await db.set(`PrivateCahnnel_[${message.guild.id}]`,channelVoice.id)
  message.channel.send(`**Voice Channel Is : <#${channelVoice.id}>**`)
};
 
exports.conf = {
    enabled: true,
    aliases: ["setprivate-channel"],
};
 
exports.help = {
    name: 'setprivate-channel',
    description: '',
    usage: ''
};