const discord = require('discord.js')
const { MessageMenuOption, MessageMenu, MessageActionRow } = require("discord-buttons")

module.exports.run = async (Client, message, args, prefix) => {
    if (!message.content.startsWith(prefix)) return

    const Option1 = new MessageMenuOption()
        .setLabel("SAO")
        .setDescription("SWORD ART ONLINE S1")
        .setValue("SAOS1")

    const Option2 = new MessageMenuOption()
        .setLabel("SAO")
        .setDescription("SWORD ART ONLINE S2")
        .setValue("SAOS2")

    const Option3 = new MessageMenuOption()
        .setLabel("SAO")
        .setDescription("SWORD ART ONLINE Alicization")
        .setValue("SAOS3")

    const Option4 = new MessageMenuOption()
        .setLabel("SAO")
        .setDescription("SWORD ART ONLINE Alicization-War of Underworld")
        .setValue("SAOS4")

    const Menu = new MessageMenu()
        .setID('menu1')
        .setPlaceholder('choose the seson you want')
        .addOption(Option1)
        .addOption(Option2)
        .addOption(Option3)
        .addOption(Option4)


    const Row1 = new MessageActionRow()
        .addComponent(Menu)

    const saos1Embed = new discord.MessageEmbed()
        .setTitle("Sword art online")
        .setDescription("في المستقبل القريب ، تم إصدار لعبة تمتلك نمط  متعدد اللاعبين عبر الإنترنت (VRMMORPG) الضخمة الواقع الافتراضي التي تسمى سورد ارت اونلاين حيث يتحكم اللاعبون في صورهم الرمزية (الافتار او الشخصية) بأجسادهم باستخدام قطعة من التكنولوجيا تسمى Nerve Gear. يوم واحد، يكتشف اللاعبون أنهم لا يستطيعون تسجيل الخروج، كما ان مصمم اللعبة احتجزهم أسرا ما لم يصلوا إلى الطابق 100 من برج اللعبة وهزيمة الزعيم النهائي. ومع ذلك، إذا ماتوا في اللعبة، يموتون في الحياة الحقيقية. نضالهم من أجل البقاء يبدأ")
        .addField('⭐Rating','69%')
        .addField('⏱️Episodes','25')
        .addField('⌛Status','منتهي')
        .addField('📝Genres','اكشن و مغامرات و رومانسي')
        .addField('⬇️Download',`${prefix}d saos1-[Ep number]`)
        .setFooter("[] require just put a number")
        .setImage('https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx11757-Q9P2zjCPICq5.jpg')
        .setColor('GREEN')

    const saos2Embed = new discord.MessageEmbed()
        .setTitle("Sword art online || ")
        .setDescription("بعد مرور عام على حادثة سورد ارت اونلاين ، اتصل سيجورو كيكوما من وزارة الشؤون الداخلية وإدارة الاتصالات في اليابان VR Division مع كيريتو بطلب غريب نوعًا ما. كان هذا تحقيقًا في حادثة Death Gun التي وقعت في لعبة غن غيل .اللاعبون الذين تم إطلاق النار عليهم بواسطة رصاصة غامضة بمسدس أسود نفاث يفقدون حياتهم حتى في العالم الحقيقي ... بعد أن فشل كيريتو في رفض طلب كيكوكا الغريب ، سجل كيريتو الدخول إلى غن غيل على الرغم من أنه غير مقتنع تمامًا بأن العالم الافتراضي يمكن أن تؤثر فعليًا في العالم الحقيقي.")
        .addField('⭐Rating','65%')
        .addField('⏱️Episodes','24')
        .addField('⌛Status','منتهي')
        .addField('📝Genres','اكشن و مغامرات و رومانسي')
        .addField('⬇️Download',`${prefix}d saos2-[Ep number]`)
        .setFooter("[] require just put a number")
        .setImage('https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx20594-FhRgZ1H9Istt.jpg')
        .setColor("GREEN")

    const sao3Embed = new discord.MessageEmbed()
        .setTitle("Sword art online Alicization ")
        .setDescription("يستيقظ كيريتو في غابة خيالية شاسعة مليئة بالأشجار الشاهقة. في بحثه عن أدلة على حقيقة ما يحيط به ، يصادف صبيًا صغيرًا يبدو أنه يعرفه. يجب أن يكون ذكاء اصطناعي بسيطًا ، لكن عمق عواطفه لا يبدو مختلفًا عن الإنسان. أثناء بحثهم عن والدي الصبي ، يجد كيريتو ذكرى غريبة تعود إليه. ذكرى من طفولته ، عن هذا الفتى والفتاة أيضًا ، بشعر ذهبي ، واسم لم يكن يجب أن ينساه أبدًا - أليس.")
        .addField('⭐Rating','75%')
        .addField('⏱️Episodes','24')
        .addField('⌛Status','منتهي')
        .addField('📝Genres','اكشن و مغامرات')
        .addField('⬇️Download',`${prefix}d saos1-[Ep number]`)
        .setFooter("[] require just put a number")
        .setImage("https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx100182-KctPmCJ2smHQ.jpg")
        .setColor("GREEN")

    const saos4Embed = new discord.MessageEmbed()
        .setTitle("Sword Art Online: Alicization - War of Underworld")
        .setDescription(" مرت ستة أشهر منذ أن أسقط التلميذان وفارس النزاهة البونتيفكس ، المسؤول. مع انتهاء القتال ، تعيش أليس في مسقط رأسها في قرية روليد. بجانبها ، كيريتو ، الذي لم يفقد ذراعه وروحه فحسب ، بل صديقه العزيز أيضًا. نظرًا لأن أليس تكرس نفسها لرعاية كيريتو ، فقد فقدت أيضًا الرغبة في القتال التي كانت تتمتع بها في السابق كفارس....")
        .addField('⭐Rating','75%')
        .addField('⏱️Episodes','12')
        .addField('⌛Status','منتهي')
        .addField('📝Genres','اكشن و مغامرات ')
        .addField('⬇️Download',`${prefix}d saos1-[Ep number]`)
        .setFooter("[] require just put a number")
        .setImage("https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx108759-jcXbDf9BJTcb.jpg")
        .setColor("GREEN")


    await message.channel.send("Hello sir", { component: Row1 })

    Client.on('clickMenu', async menu => {
        try {
            if (menu.values[0] == 'SAOS1') {
                menu.reply.send(saos1Embed)
    
            }
    
            if (menu.values[0] == 'SAOS2') {
                menu.reply.send(saos2Embed)
    
            }
    
            if (menu.values[0] == 'SAOS3') {
                menu.reply.send(sao3Embed)
    
            }
    
            if (menu.values[0] == 'SAOS4') {
                menu.reply.send(saos4Embed)
    
            }
        } catch (err) {
            console.log("something wrog")
        }
    })
}

module.exports.help = {
    name: 'sao',
    aliases: []
}