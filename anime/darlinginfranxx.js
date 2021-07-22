const discord = require('discord.js')
const { MessageMenuOption, MessageMenu, MessageActionRow } = require("discord-buttons")

module.exports.run = async (Client, message, args, prefix) => {
    if (!message.content.startsWith(prefix)) return

    const Option1 = new MessageMenuOption()
        .setLabel("darling in the franxx")
        .setDescription("darling in the franxx")
        .setValue("darling")

    const Menu = new MessageMenu()
        .setID('menu1')
        .setPlaceholder('choose the seson you want')
        .addOption(Option1)

    const Row1 = new MessageActionRow()
    .addComponent(Menu)

    const darlingitfEmbed = new Discord.MessageEmbed()
    .setTitle("darling in the franxx")
    .setDescription("المستقبل البعيد: أنشأت البشرية مدينة الحصن المتنقلة ، و تسمى بالمزارع ، على الأرض القاحلة المدمرة.  داخل هذه المدن كانت هناك أحياء تجريبية ، والمعروفة باسم قفص العصافير  هذا هو المكان الذي يعيش فيه الأطفال ... كانت مهمتهم الوحيدة في الحياة هي القتال.  أعداؤهم الكائنات  الغامضة المعروفة باسم كيريو.  يدير الأطفال روبوتات تعرف باسم فرانكس لمواجهة هؤلاء الأعداء غير المرئيين.  كان من بينهم صبي كان يُطلق عليه ذات مرة طفل معجزة: صاحب الكود رقم 016 ،  واسمه : هيرو.  ذات يوم ، ظهرت فتاة غامضة تدعى زيرو تو أمام هيرو. وقالت لقد وجدتك")
    .addField('⭐ Rating', '70%')
    .addField('⏱️ Episodes', '24')
    .addField('⌛ Status', 'منتهي')
    .addField('📝 Genres', 'اكشن ودراما و ميكا و رومانسي')
    .setImage("https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx99423-8MBxtwCeHf8B.png")
    .setColor("GREEN")

    await message.channel.send("Hello sir", { component: Row1 })

    Client.on('clickMenu', async menu => {
        try {
            if (menu.values[0] == 'darling') {
                menu.reply.send(darlingitfEmbed)

            }
        } catch (err) {

        }
    })
}

module.exports.help = {
    name: 'darlinginthefranxx',
    aliases: []
}