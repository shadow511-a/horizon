const discord = require('discord.js')
const { MessageMenuOption, MessageMenu, MessageActionRow } = require("discord-buttons")

module.exports.run = async (Client, message, args, prefix, err) => {
    if (!message.content.startsWith(prefix)) return

    const Option1 = new MessageMenuOption()
        .setLabel("ngnl")
        .setDescription("no game no life")
        .setValue("ngnl")

    const Menu = new MessageMenu()
        .setID('menu1')
        .setPlaceholder('choose the seson you want')
        .addOption(Option1)

    const Row1 = new MessageActionRow()
        .addComponent(Menu)

    const ngnlEmbed = new discord.MessageEmbed()
        .setTitle("No Game, No Life")
        .setDescription("تدور قصة نو غلم نو لايف حول سورا و شيرو ، الأخ والأخت اللذان اشتهرت سمعتهما بأنها رائعة  في الألعاب حيث ولدت أساطير حضرية في جميع أنحاء الإنترنت. حتى أن هذين اللاعبين يعتبران العالم الحقيقي مجرد لعبة سيئة.  في أحد الأيام ، يتم استدعاؤهم إلى عالم آخر حيث يظهر أمامهم صبي صغير اسمه تيت ، مدعيًا أنه حاكم هذا العالم. في هذا العالم الذي تسكنه مخلوقات سحرية ، العنف ممنوع ، والإنسانية على وشك الانقراض ، ويتم تسوية جميع الأمور من خلال الألعاب. باستخدام عقولهم المشتركة وأخلاقهم المشكوك فيها ومكرهم الكبير ، فإن الأمر متروك لهؤلاء الأشقاء لخداع طريقهم إلى القمة في سلسلة من الألعاب الفتاكة والمخادعة بشكل متزايد")
        .addField('⭐Rating', '79%')
        .addField('⏱️Episodes', '12')
        .addField('⌛Status', 'منتهي')
        .addField('📝Genres', 'مغامرات , كوميدي, ايتشي, ')
        .setImage("https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx19815-bIo51RMWWhLv.jpg")
        .setColor("GREEN")

    await message.channel.send("Hello sir", { component: Row1 })

    Client.on('clickMenu', async menu => {
        try {
            if (menu.values[0] == 'ngnl') {
                menu.reply.send(ngnlEmbed)

            }
        } catch (err) {

        }
    })
}

module.exports.help = {
    name: `ngnl`,
    aliases: []
}