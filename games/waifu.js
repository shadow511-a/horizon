const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    if (!message.content.startsWith(prefix)) return

    let waifu = ["https://cdn.discordapp.com/attachments/826931087468134410/855146047370166352/3ae194a8c2b7ac1424425b3643f09522.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855150313958277170/6ff9d9861cddeb142eb8fe8cf482d602.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855152357145837588/43z2xmf414q51.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855154042958250014/53-532923_hatsune-miku-wallpaper-engine.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855154117944672276/343577.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855154160960536596/659957.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855154286383333386/1002133.png", "https://cdn.discordapp.com/attachments/826931087468134410/855154555212660766/1005161.png", "https://cdn.discordapp.com/attachments/826931087468134410/855154632966537246/1581178.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855154651997536266/1581180.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855154743697342514/2006654.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855154774235414528/2732983.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855154841889800202/3523278.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855154881890091038/3798247.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855155085821608007/5449401.png", "https://cdn.discordapp.com/attachments/826931087468134410/855159732774895616/310820953aaf327336c9bd1904fa278d.png", "https://cdn.discordapp.com/attachments/826931087468134410/855159769484623893/55251992904b2a4fc458eeebad8ffcc6.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855159806322409512/anime-anime-girls-loli-kanna-kamui-kobayashi-san-chi-no-maid-dragon-wallpaper-preview.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855159839957450752/anime-anime-girls-re-zero-kara-hajimeru-isekai-seikatsu-rem-re-zero-wallpaper.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855159850471522324/anime-kaguya-sama-love-is-war-chika-fujiwara-hd-wallpaper-preview.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855159879404355634/anime-no-game-no-life-51343.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855159901125869608/anime-re-zero-starting-life-in-another-world-re-zero-rem-re-zero-wallpaper-preview.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855160878260682824/anime-the-rising-of-the-shield-hero-brown-hair-raphtalia-the-rising-of-the-shield-hero-red-eyes-hd-w.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855160934770540564/btEmEF.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855160958677549086/c7afc74337dd75615e8d469cfef376e0.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855160997526372372/Color-Nezuko-Wallpaper-HD-scaled.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855161029390762064/de6zk2y-2fe7b841-c6f4-4ced-b210-636625b334fb.png", "https://cdn.discordapp.com/attachments/826931087468134410/855161038786002974/E09F3EF6FFB6C0C72C2D0B85EC4F8490C13ADE4B.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855161398082404382/Emilia.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855161415379189800/fate-series-fate-stay-night-unlimited-blade-works-saber-fate-series-wallpaper-preview.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855161453610139668/FC3F4F36671DE77DBCAFDB525E9845C92591549A.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855161494185836585/Megumin.full.2076434.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855161536782532638/Megumin-KonoSuba-wallpaper.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855161558383853609/mikasa-ackerman-crying-attack-on-titan-54514-1920x1080.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855162161965170708/Nakano.Nino.full.3171093.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855162521034817546/re-zero-emilia-yukata-fireworks-festival-27402-resized.jpeg", "https://cdn.discordapp.com/attachments/826931087468134410/855162547636404244/sakurajima-mai-seishun-buta-yarou-rabbit-ears-school-uniform-black-hair.jpeg", "https://cdn.discordapp.com/attachments/826931087468134410/855162563352723496/screen-0.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855162584147820554/sword-art-online-sword-art-online-alicization-asuna-yuuki-wallpaper-preview.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855162611578044461/thumb2-nino-nakano-4k-manga-the-quintessential-quintuplets-5toubun-no-hanayome.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855162642527944754/thumb-350-991135.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855162661111857152/thumb-350-1008919.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855162696080031825/thumb-1920-215588.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855163864584945764/thumb-1920-1002626.png", "https://cdn.discordapp.com/attachments/826931087468134410/855163910553468958/violet-evergarden-13-1.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855163926371237958/wp1975641.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855163960860475422/wp2111724.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855163980447612958/wp2828706.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855163994305200208/wp3149697.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855164488742207508/wp4304700.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855164488742207508/wp4304700.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855164509449617458/wp8058670.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855164520141815849/zero-two-wallpaper-14-min-1.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855359768956502036/81H7IMLicAL._SL1500_.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855359807724322846/245-2450225_taiga-aisaka-wallpaper-phone.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855359915680989194/998753.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855360154547912774/1092221.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855360286492065802/1105893.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855361755008991252/77524846_p0.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855361816339152936/anime-my-hero-academia-momo-yaoyorozu-wallpaper-preview.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855361837968785458/Annie-Leonhart-Wallpaper-46-Group-Wallpapers.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855361890354724894/Chizuru-93.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855361960454127636/dbglfkl-1e90b86e-2115-438e-8036-ebdf511acc2b.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855361974748971008/f2036f1e83b5af795f98d1ecde51227f774e868dr1-1254-1771v2_00.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855362486798123008/image0-20.png", "https://cdn.discordapp.com/attachments/826931087468134410/855362534445416478/kono-subarashii-sekai-ni-shukufuku-wo-darkness-yellow-hair-armor-anime-38306-resized.jpeg", "https://cdn.discordapp.com/attachments/826931087468134410/855362563104309298/r9b1imv0bn751.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855362599444021318/Screenshot_20210301_140207.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855362614930571264/wp3130973.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855362819905945650/wp3115957.png", "https://cdn.discordapp.com/attachments/826931087468134410/855363211327307826/wp3130986.png", "https://cdn.discordapp.com/attachments/826931087468134410/855363225196953600/wp4379347.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855363246730510346/wp4379360.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855363276367724584/wp4412062.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855363301662785566/wp5638965.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855363593649127444/wp6773011.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855363610372603954/wp8796909.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/855363637413543936/z70qdo3qh7861.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857651734972334110/5BEQc4M.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857651756116738068/5c5d422af498b7a930bae8cefc44f105.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857651818950557716/6-69939_anime-girl-with-cat-anime-wallpaper-4k-phone.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857651832205606922/8HmPuXYCMqD8egwt3yoR4bof.png", "https://cdn.discordapp.com/attachments/826931087468134410/857651851163336715/10d4a090bb4d245407155b720ae68671.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857651875041116160/50bdb9fcc4dbdda5d8882a45d977e105.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857652253438640148/541b0c94b9ac13c1c0c4edc3a454fa2e.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857652286338760714/198865.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857652299521851412/361647.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857652565558034442/999195.png", "https://cdn.discordapp.com/attachments/826931087468134410/857652684035194911/3193722.png", 
   "https://cdn.discordapp.com/attachments/826931087468134410/857652714295918612/3207402.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857653223601864704/Alice.Schuberg.600.2744013.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857653240887640105/Alice.Schuberg.600.2814585.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857653258708189194/Alice.Schuberg.600.2966194.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857653281040236614/anime-anime-girls-digital-art-artwork-portrait-display-hd-wallpaper-preview.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857653298198085682/anime-anime-girls-long-hair-touhou-flandre-scarlet-hd-wallpaper-preview.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857653329998643220/Anime-Girl-Hatsune-Miku-4K-Ultra-HD-Mobile-Wallpaper.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857653697768718386/anime-girl-headphones-looking-away-4k-ls-1080x1920.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857653713778769941/anime-girl-semi-realistic-pink-rose-wind-wallpaper-preview.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857653730840412172/anime-girl-wallpaper-12.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857653764504289300/anime-girl-white-hair-flowers.png", "https://cdn.discordapp.com/attachments/826931087468134410/857653798292815903/Anime-Wallpapers-4K-Download-New-HD-Images-of-Cute-Anime-Girl.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857653816596627476/artistic-anime-girl-wallpaper-2048x1536-11030_26.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857654690418524201/bb7394e1ddfb214da56d8042114e8464.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857654707987021844/Christa.Renz.600.1602870.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857654720646873098/Christa.Renz.600.1605761.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857654747343093764/FB_IMG_1616051618784.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857654757090263050/FB_IMG_1617891444634.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857654780997140480/FB_IMG_1618823133075.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857655134795989014/FB_IMG_1619548273850.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857655149526253568/fdf18bda4a9559d98d20827fc6526462.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857655163535884328/Hestia.DanMachi.600.2494693.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857655182673051648/IMG_20201206_193414_752.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857655196480700486/Kirishima.Touka.600.1753852.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857655211991760916/Kirishima.Touka.600.1754539.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857655555001548800/Kugisaki.Nobara.600.3170576.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857655571472449546/Kugisaki.Nobara.600.3273955.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857655589218680832/Nakiri.Erina.600.2219024.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857655605296103424/Nakiri.Erina.600.2219025.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857655624674312222/tGNNcMQi1l6E4AKa2Ut7vnkN.jpeg", "https://cdn.discordapp.com/attachments/826931087468134410/857655639207575582/tumblr_pmblv0id2u1ua3rse_640.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857655986742624256/vocaloid-hatsune-miku-sakura-blossom-smiling-wallpaper-preview.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857656005940871188/wp2016147.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857656067270115328/wp2121295.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857656074143137812/wp4589578.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857656126355275836/wp5082215.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857656132051009556/wp5942655.jpg", "https://cdn.discordapp.com/attachments/826931087468134410/857656149053538334/YTHhG37.jpg"]



    let an = waifu[Math.floor(Math.random() * waifu.length)]
    
    const waembed = new discord.MessageEmbed()
     .setTitle(`${message.author.tag}`).setImage(`${an}`).setColor("#FFC0CB");
    message.channel.send(`${message.author} you get a waifu`)
    const Embed = await message.channel.send(`${an}`)
    await Embed.react('❤️')
    await Embed.react('💓')
    await Embed.react('❤️‍🔥')
    await Embed.react('💕')
}

module.exports.help = {
    name: 'waifu',
    aliases: ["wa"]
}