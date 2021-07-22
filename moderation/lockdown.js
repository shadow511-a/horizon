const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(
        new discord.MessageEmbed()
        .setDescription(" ❎ | You do not have `\`administrator\` Permission to use this command")
        .setColor("RED")
    )
    let reason = args.slice(0).join(" ");
    if(!reason) reason = "no Reason given"
    message.guild.channels.cache.forEach(channel => {
        try {
            channel.updateOverwrite(message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == "@everyone"), {
                SEND_MESSAGES: false
            })
        }catch(e) {
            console.log(e)
            return message.channel.send(`I couldn't lock ${channel}`)
        }
    })
    var channel1 = Client.channels.cache.get('826931084297371748');// public chat
    var channel2 = Client.channels.cache.get('826931087468134410');//command chat
    var channel3 = Client.channels.cache.get('826931124759691285');//suggestion
    var channel4 = Client.channels.cache.get('826931124759691285');//arts
    var channel5 = Client.channels.cache.get('826931151875604491');//games
    var channel6 = Client.channels.cache.get('826931138873655326');//avatar
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

    channel1.send(
        new discord.MessageEmbed()
        .setTitle("The server Locked down")
        .addField(`__لا يمكن لاحد ان يتكلم__`, [
            `رجاء لا تتواصل مع الستاف و سيتم اعطائكم السبب.`
        ])
        .addField(`**Reason**`, [
            `${reason}`
        ])

    )
    channel2.send("The server is on lockdown. Look in <#827339312470556737> for more information.")
    channel3.send("The server is on lockdown. Look in <#827339312470556737> for more information.")
    channel4.send("The server is on lockdown. Look in <#827339312470556737> for more information.")
    channel5.send("The server is on lockdown. Look in <#827339312470556737> for more information.")
    channel6.send("The server is on lockdown. Look in <#827339312470556737> for more information.")
    channel7.send("The server is on lockdown. Look in <#827339312470556737> for more information.")
    channel8.send("The server is on lockdown. Look in <#827339312470556737> for more information.")
    channel9.send("The server is on lockdown. Look in <#827339312470556737> for more information.")
    channel10.send("The server is on lockdown. Look in <#827339312470556737> for more information.")
    channel11.send("The server is on lockdown. Look in <#827339312470556737> for more information.")
    channel12.send("The server is on lockdown. Look in <#827339312470556737> for more information.")
    channel13.send("The server is on lockdown. Look in <#827339312470556737> for more information.")
    channel14.send("The server is on lockdown. Look in <#827339312470556737> for more information.")
    channel15.send("The server is on lockdown. Look in <#827339312470556737> for more information.")
    channel16.send("The server is on lockdown. Look in <#827339312470556737> for more information.")
    channel17.send("The server is on lockdown. Look in <#827339312470556737> for more information.")
    channel18.send("The server is on lockdown. Look in <#827339312470556737> for more information.")
    channel19.send("The server is on lockdown. Look in <#827339312470556737> for more information.")
    channel20.send("The server is on lockdown. Look in <#827339312470556737> for more information.")
    channel21.send("The server is on lockdown. Look in <#827339312470556737> for more information.")
    channel22.send("The server is on lockdown. Look in <#827339312470556737> for more information.")
    channel23.send("The server is on lockdown. Look in <#827339312470556737> for more information.")
    channel24.send("The server is on lockdown. Look in <#827339312470556737> for more information.")
    channel25.send("The server is on lockdown. Look in <#827339312470556737> for more information.")
    channel26.send("The server is on lockdown. Look in <#827339312470556737> for more information.")
    channel27.send("The server is on lockdown. Look in <#827339312470556737> for more information.")
    channel28.send("The server is on lockdown. Look in <#827339312470556737> for more information.")
    channel29.send("The server is on lockdown. Look in <#827339312470556737> for more information.")
}

module.exports.help = {
    name: "lockdown",
    aliases: []
}