const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(
        new discord.MessageEmbed()
        .setDescription(" ❎ | You do not have `\`administrator\` Permission to use this command")
        .setColor("RED")
    )
    message.guild.channels.cache.forEach(channel => {
        try {
            channel.updateOverwrite(message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == "@everyone"), {
                SEND_MESSAGES: null
            })
        }catch(e) {
            console.log(e)
            return message.channel.send(`I couldn't lock ${channel}`)
        }
    })

    var channel1 = Client.channels.cache.get('827339312470556737');// public chat
    var channel2 = Client.channels.cache.get('827339314174230528');//command chat
    var channel3 = Client.channels.cache.get('827339315059228673');//suggestion
    var channel4 = Client.channels.cache.get('827339319067934786');//arts
    var channel5 = Client.channels.cache.get('858401908711751690');//games
    var channel6 = Client.channels.cache.get('835788394515791882');//avatar
    var channel7 = Client.channels.cache.get('843511234023653416');//emoji
    var channel8 = Client.channels.cache.get('857694422668804166');//event chat
    var channel9 = Client.channels.cache.get('827339315986038814');//anime chat
    var channel10 = Client.channels.cache.get('827339317957492766');//anime memes
    var channel11 = Client.channels.cache.get('839244391905755186');//spoiler chat
    var channel12 = Client.channels.cache.get('827339345349443675');//music command
    var channel13 = Client.channels.cache.get('837669928152334336');//genshin seller
    var channel14 = Client.channels.cache.get('827339328978944050');//genshin memes
    var channel15 = Client.channels.cache.get('827339332511596564');//genshin help
    var channel16 = Client.channels.cache.get('827339334088392744');//genshin wish
    var channel17 = Client.channels.cache.get('827339326995824681');//genshin chat
    var channel18 = Client.channels.cache.get('827339330720104468');//genshin photo
    var channel19 = Client.channels.cache.get('827339357429825576');//shooter chat
    var channel20 = Client.channels.cache.get('827873761063075840');//shooter clip
    var channel21 = Client.channels.cache.get('833422135254056960');//tof gameplay
    var channel22 = Client.channels.cache.get('833082792144797696');//tof leaks
    var channel23 = Client.channels.cache.get('833083096697012264');//tof chat
    var channel24 = Client.channels.cache.get('851500696067112990');//muck chat
    var channel25 = Client.channels.cache.get('827992959441305600');//among us chat
    var channel26 = Client.channels.cache.get('827993086231183401');//drawing chat
    var channel27 = Client.channels.cache.get('827993420860882965');//plato chat
    var channel28 = Client.channels.cache.get('829822021226463262');//code name chat

    channel2.send("The server unlock")
    channel3.send("The server unlock")
    channel4.send("The server unlock.")
    channel5.send("The server unlock")
    channel6.send("The server unlock")
    channel7.send("The server unlock")
    channel8.send("The server unlock")
    channel9.send("The server unlock")
    channel10.send("The server unlock")
    channel11.send("The server unlock")
    channel12.send("TThe server unlock")
    channel13.send("The server unlock")
    channel14.send("The server unlock")
    channel15.send("The server unlock")
    channel16.send("The server unlock")
    channel17.send("The server unlock")
    channel18.send("The server unlock")
    channel19.send("The server unlock")
    channel20.send("The server unlock")
    channel21.send("The server unlock")
    channel22.send("The server unlock")
    channel23.send("The server unlock")
    channel24.send("The server unlock")
    channel25.send("The server unlock")
    channel26.send("The server unlock")
    channel27.send("The server unlock")
    channel28.send("The server unlock")
    channel29.send("The server unlock")
}

module.exports.help = {
    name: "lockdown-off",
    aliases: []
}