const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if (!message.content.startsWith(prefix)) return

    const HelpEmbed = new discord.MessageEmbed()
    .setTitle("Bot commands")
    .setDescription(`Use \`${prefix}help\` followed by a command name to get more additional information on a command. For example: \`${prefix}help-ban.\``)
    .addField('🌎 General', '`avatar` | `botinfo` | `roleinfo` | `severinfo` | `userinfo` | `ping` | `report` | `AFK` | `translate` | `animesug`')
    .addField('🛠️ Moderation', '`addrole` | `ban` | `kick` | `unban` | `lock` | `unlock` | `lockdown` | `lockdownoff` | `mute` | `unmute` | `Giveaway` | `show` | `hide` | `nickname` | `nuke` | `line` | `clear` | `setupvcategory` | `setupvchannel` | `slowmode` | `warn` | `warns` | `removewarn` | `clearallwarns`')
    .addField('🎮 fun', '`calculate` | `say`')
    .addField('🏓 games', '`ship` | `waifu`')
    .addField('🈲 anime', '`sao`')

    message.channel.send(HelpEmbed)
}

module.exports.help = {
    name: `helpme`,
    aliases: []
}