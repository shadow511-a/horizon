const discord = require('discord.js')
const { MessageMenuOption, MessageMenu, MessageActionRow } = require("discord-buttons")

module.exports.run = async (Client, message, args, prefix) => {
    if (!message.content.startsWith(prefix)) return

    const Option1 = new MessageMenuOption()
        .setLabel("black clover")
        .setDescription("blacl clover s1")
        .setValue("black clover")

    const Menu = new MessageMenu()
        .setID('menu1')
        .setPlaceholder('choose the seson you want')
        .addOption(Option1)

    const Row1 = new MessageActionRow()
    .addComponent(Menu)

    const blackcloverEmbed = new discord.MessageEmbed()
    .setTitle("Black clover")
    .setDescription("في عالم حيث السحر هو كل شيء ، تم العثور على كل من استا و يونو ايتام وجدوا في الكنيسة في نفس اليوم.  بينما موهوب يونو بقوى سحرية استثنائية ، فإن استا هو الوحيد في هذا العالم بدون أي قوى سحرية.  في سن الخامسة عشرة ، يتلقى كلاهما كتب السحر ، وهي كتب سحرية تضخم سحر حاملها.  استا هو الغيريامور المضاد للسخر الذي يقوم بالغاء اي سحر يتلقاه .  كونهما منافسين  ، فإن يونو و استا مستعدان لتلقي اصعب التحديات لتحقيق حلمهما المشترك:  هو أن يكونا ملك السحرة.  حيث ان الاستسلام ليس خيرًا أبدًا")
    .addField('⭐ Rating', '77%')
    .addField('⏱️ Episodes', '170')
    .addField('⌛ Status', 'منتهي')
    .addField('📝 Genres', 'اكشن و مغامرات و كوميدي')
    .setImage("https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx97940-bPydLjny8PUw.png")
    .setColor("GREEN")

    await message.channel.send("Hello sir", { component: Row1 })

    Client.on('clickMenu', async menu => {
        try {
            if (menu.values[0] == 'black clover') {
                menu.reply.send(blackcloverEmbed)

            }
        } catch (err) {

        }
    })
}



module.exports.help = {
    name: 'blackclover',
    aliases: []
}