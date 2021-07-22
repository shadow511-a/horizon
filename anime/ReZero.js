const discord = require('discord.js')
const { MessageMenuOption, MessageMenu, MessageActionRow } = require("discord-buttons")

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    const Option1 = new MessageMenuOption()
    .setLabel("ReZero")
    .setDescription("Re:Zero Starting life in another world")
    .setValue("Rezeros1")

 const Option2 = new MessageMenuOption()
    .setLabel("ReZero")
    .setDescription("Re:Zero movie Memory Snow")
    .setValue("ReZero Movie")

 const Option3 = new MessageMenuOption()
    .setLabel("ReZero")
    .setDescription("Re:Zero 2nd Season")
    .setValue("ReZeros2")


    const Menu = new MessageMenu()
    .setID('menu1')
    .setPlaceholder('choose the seson you want')
    .addOption(Option1)
    .addOption(Option2)
    .addOption(Option3)

    const Row1 = new MessageActionRow()
    .addComponent(Menu)

    const rezero1Embed = new discord.MessageEmbed()
    .setTitle("Re:Zero Starting life in another world")
    .setDescription("في القصة ، سوبارو ناتسوكي هو طالب ثانوي عادي ضاع في عالم بديل ، حيث تنقذه فتاة جميلة ذات شعر فضي.  يبقى بالقرب منها ليرد الجميل ، لكن المصير المثقل بها هو أكثر مما يمكن أن تتخيله سوبارو.  يهاجم الأعداء واحدًا تلو الآخر ، ويقتل كلاهما.  ثم يكتشف أن لديه القدرة على إعادة الموت ، إلى الوقت الذي جاء فيه إلى هذا العالم لأول مرة.  لكنه فقط يتذكر ما حدث منذ ذلك الحين.")
    .addField('⭐ Rating',  '81%')
    .addField('⏱️ Episodes', '25')
    .addField('⌛ Status', 'منتهي')
    .addField('📝 Genres', 'اكشن و مغامرات و دارما و رومانسي')
    .setImage("https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21355-xsLpqMFkMQQk.png")
    .setColor("GREEN")


    const rezeromoveEmbed = new discord.MessageEmbed()
    .setTitle("Re:Zero kara Hajimeru Isekai Seikatsu - Memory Snow")
    .setDescription("الأطفال في قرية ايرلام، تهنئ الشخصيات أخيرًا بلحظة سلام و يقوم سوبارو بالذهاب في مهمة سرية لايجب أن يعرفها أحد، على الرغم من تنكره إلا أن بيترا والأطفال الآخرين من القرية تعرفوا عليه الفور و أصبحت المهمة مفضوحة لهم، يا ترى ماذا سيحدث لـ “موعد")
    .addField('⭐ Rating',  '76%')
    .addField('⏱️ Episodes', '1')
    .addField('⌛ Status', 'منتهي')
    .addField('📝 Genres', 'كوميدي و دراما  ')
    .setImage("https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx100049-mgvPLctBJprp.jpg")
    .setColor("GREEN")


    const rezeros2Embed = new discord.MessageEmbed()
    .setTitle("Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season")
    .setDescription("حتى بعد وفاتها مرات لا تحصى ، أنهت سوبارو أخيرًا تهديد الحوت الأبيض وهزمت رئيس أساقفة الساحرة الذي يمثل الكسلان ، بيتليجوس رومانيكونتي.  ولكن بعد وقت قصير من التغلب على النهاية المأساوية والتوحد مع حبيبته إيميليا ، علم سوبارو أن ريم قد تم محوه من هذا العالم ، بعد أن وقع ضحية ضباب وايت ويل في خضم حلقة الموت في سوبارو.  مع رحيل الحوت الابيض الآن ، تضطر سوبارو وإيميليا لمواجهة حقيقة لم يحلموا بحدوثها من قبل.")
    .addField('⭐ Rating', '83%')
    .addField('⏱️ Episodes', '13')
    .addField('⌛ Status', 'منتهي')
    .addField('📝 Genres', 'اكشن و مغامرات و دراما')
    .setImage("https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx108632-lQWnmw7XaNOK.jpg")
    .setColor("GREEN")

    await message.channel.send("Hello sir", { component: Row1 })

    Client.on('clickMenu', async menu => {
        try {
            if (menu.values[0] == 'Rezeros1') {
                menu.reply.send(rezero1Embed)
    
            }
    
            if (menu.values[0] == 'ReZero Movie') {
                menu.reply.send(rezeromoveEmbed)
    
            }
    
            if (menu.values[0] == 'ReZeros2') {
                menu.reply.send(rezeros2Embed)
    
            }
    
        } catch (err) {
            console.log("something wrog")
        }
    })
}

module.exports.help = {
    name: 'rezero',
    aliases: ['ReZero', 'Rezero']
}