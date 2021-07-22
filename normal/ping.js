const discord = require('discord.js');
const Client = new discord.Client();

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    message.channel.send(`Finding the bot ping...`).then(msg => {
        const ping = msg.createdTimestamp - message.createdTimestamp;
        msg.edit(`The ping of the bot is ${ping}ms`);
    })
}

module.exports.help = {
    name: `ping`,
    aliases: []
};