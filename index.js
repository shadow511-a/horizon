const Discord = require('discord.js');

const config = require('./config.json');


const Client = new Discord.Client({
    disableEveryone: true
});

Client.commands = new Discord.Collection();

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Shadow511:FiRaZ274@17@85@!@horizoncluster.7d29a.mongodb.net/Data', {
    useUnifiedTopology : true,
    useNewUrlParser : true,
}).then(console.log('connected to mongodb'))

const fs = require('fs');

const db = require("quick.db")

const map = new Map();

const prefix = '>';

const snipes = new Discord.Collection();

const AFK = require("./schema/afk")

Client.aliases = new Discord.Collection();

const canvas = require('discord-canvas')

require('discord-buttons')(Client)





Client.on('guildMemberAdd', async member => {
    welcomeCanvas = new canvas.Welcome()
            let image = await welcomeCanvas
                .setUsername(member.user.username)
                .setDiscriminator(member.user.discriminator)
                .setMemberCount(member.guild.memberCount)
                .setGuildName(member.guild.name)
                .setAvatar(
                    member.user.displayAvatarURL({
                        format: "png",
                    })
                )

                .setBackground("https://cdn.discordapp.com/attachments/849185380800135208/864826285418872862/bgs.png")
                .toAttachment();
            let attachment = new Discord.MessageAttachment(
                image.toBuffer(),
                "welcome.png"
            );

    let Wlc = `hello {member:mention} welcome to \`{server:name}\`, you are the \`{server:members}\` have a nice time with us`
        if(!Wlc){
            await member.guild.channels.cache.get('826931087468134410').send(attachment)
        } else {
            let content = Wlc.replace(
                /{member:mention}/g,
                `<@${member.user.id}>`
                )
                .replace(/{member:name}/g, `${member.user.username}`)
                .replace(/{member:id}/g, `${member.user.id}`)
                .replace(/{member:tag}/g, `${member.user.tag}`)
                .replace(/{member:createdAt}/g, `${member.user.createdAt}`)
                .replace(/{server:name}/g, `${member.guild.name}`)
                .replace(/{server:members}/g, `${member.guild.members.cache.filter(member => !member.user.bot).size}`);
                await member.guild.channels.cache.get('826931087468134410').send(content, attachment)
        }
    
})


// Commands Handler 
// get into the cmds folder
fs.readdirSync('./commands/').forEach(dir => {
    //in the cmds folder, we gonna check for the category
    fs.readdir(`./commands/${dir}`, (err, files) => {
        // console log err (catch err)
        if (err) throw err;
        // checking if the files ends with .js if its a javascript file
        var jsFiles = files.filter(f => f.split(".").pop() === "js");
        // if there is no cmds in the file it will return
        if (jsFiles.length <= 0) {
            console.log("Can't find any commands!");
            return;
        }

        jsFiles.forEach(file => {
            // console the loaded cmds 
            var fileGet = require(`./commands/${dir}/${file}`);
            console.log(`File ${file} was loaded`)
            // gonna let the cmds run
            try {
                Client.commands.set(fileGet.help.name, fileGet);

                // it search in the cmds folder if there is any aliases
                fileGet.help.aliases.forEach(alias => {
                    Client.aliases.set(alias, fileGet.help.name);
                })

            } catch (err) {
                // catch err in console  
                return console.log(err);
            }
        });
    });
});


Client.on("channelDelete", (channel) => {
    if (channel.parentID == channel.guild.channels.cache.find((x) => x.name == "MODMAIL").id) {
        const person = channel.guild.members.cache.find((x) => x.id == channel.name)

        if(!person) return;

        let yembed = new Discord.MessageEmbed()
            .setAuthor("MAIL DELETED", Client.user.displayAvatarURL())
            .setColor('RED')
            .setDescription("your mail was deleted by a staff member")
        return person.send(yembed)
    }
})


Client.on('messageDelete', message => {
    snipes.set(message.channel.id, message)

    const LogChannel = Client.channels.cache.get('826931150877753404')
    const DeletedLog = new Discord.MessageEmbed()
        .setTitle("Deleted Message")
        .addField('Deleted by', `${message.author} - (${message.author.id})`)
        .addField("In", message.channel)
        .addField('Content', message.content)
        .setColor('RANDOM')
        .setThumbnail(message.author.displayAvatarURL({
            dynamic: true
        }))
    LogChannel.send(DeletedLog)

    if(message.mentions.users.first()) {
        const ghostping = new Discord.MessageEmbed()
        .setTitle("GHOST PING")
        .setDescription(`the user ${message.author} just ghost ping ${message.mentions.users.first()}`)
        .addField("`in`", message.channel)
        .setTimestamp()
        const channel = Client.channels.cache.get('826931151875604491')
        channel.send(ghostping)
    }


});

Client.on('messageUpdate', async (oldMessage, newMessage) => {
    const LogChannel = Client.channels.cache.get('826931149678706759')
    const EditedLog = new Discord.MessageEmbed()
        .setTitle("Edited Message")
        .addField('Edited by', `${oldMessage.author} - (${oldMessage.author.id})`)
        .addField("In", oldMessage.channel)
        .addField('Old Message', oldMessage.content)
        .addField('New Message', newMessage.content)
        .setColor('RANDOM')
        .setThumbnail(oldMessage.author.displayAvatarURL({
            dynamic: true
        }))
    await LogChannel.send(EditedLog)

});

Client.on("ready", async () => {
    console.log(`${Client.user.username} is online`)

    const arrayOfStatus = [
        `watching every thing wrong`,
        `music in vc`,
        `with my pet`,
        `with ${Client.users.cache.size} member`,
        `run >helpme`
    ];
    let index = 0;
    setInterval(() => {
        if (index === arrayOfStatus.length) index = 0;
        const status = arrayOfStatus[index];
        Client.user.setActivity(status);
        index++;
    }, 15000)
    var channel = Client.channels.cache.get('826931087468134410');
    const arrayOfMessage = [
        `#1 : يرجى استعمال الرومات للمواضيع المخصصة لها وعدم التكلم بامور لا صلة بها`,
        `#2 : الالتزام في الآداب العامة و احترام الاعضاء و الادارة `,
        `#3 : يمنع التكلم في الامور السياسية و الدينية و الإباحية و العنصرية `,
        `#4 : يمنع الإعلان في اي شكل من الاشكال او نشر روابط داخل السيرفر او في خاص الاعضاء دون الرجوع للادارة`,
        `#5 : اي اساءة للاعضاء او للإدارة سيعاقب عليها الشخص بعقوبة قد تصل الى الطرد `,
        `My coder is <@526016847355576347> and he is the best person`,
        `#6 : يمنع البيع و الشراء داخل السيرفر واي عملية نصب تحدث الادارة غير مسؤولة عنها`,
        `#7 : يمنع استخدام بوتات الاغاني الا في الرومات المخصصة لها `,
        `+suggestion اذا كان لديك اقتراح لتطوير السيرفر او اي شيء اخر استخدم امر`,
        `#8 : يمنع طلب الرتب لانك سوف تحصل عليها بمجهودك `,
        `#9 : يمنع انتحال شخصية اي عضو `,
        `#10 : يمنع تكرار الكلام او الرموز التعبيرية بشكل متكرر`,
        `#11 : ممنوع الحرق بشتى انواعه ( افلام ، انمي ،.....)`,
        `#12 : اذا قام احد الادارين بامرك بعدم فعل شيء يفضل اتباع اوامره`,
        `#13 : ممنوع تمنشن الادارة الا لسبب ، لو قمت بذلك من غير سبب ستتلقى عقوبة`
    ];
    let rules = 0;
    setInterval(() => {
        if (rules === arrayOfMessage.length) rules = 0;
        const messageinit = arrayOfMessage[rules];
        channel.send(
        new Discord.MessageEmbed()
         .setDescription(messageinit).setColor("RANDOM").setTitle("Rules..")
        )
        rules++;

    }, 3600000)


});

Client.on("voiceStateUpdate", async(oldVoice , newVoice , client) => {
    let user = newVoice.guild.member(oldVoice.guild.members.cache.find(userID => userID.id === newVoice.id));
let channel = await db.fetch(`PrivateCahnnel_[${newVoice.guild.id}]`)
if(channel === null) return console.log("1".red)
let category = await db.fetch(`PrivateCategory_[${newVoice.guild.id}]`)
if(category === null) return console.log("2".red)
if(!oldVoice.channel && newVoice.channel.id === channel){
  if(newVoice.guild.channels.cache.find(Channel => Channel.name === user.user.username)) return user.send(`**You have already a private channel**`)
  newVoice.guild.channels.create(user.user.username,{
    type:"voice",
    parent:category,
    reason:`Private Channel By: ${user.user.username}`,
    permissionOverwrites:[
      {
        id : newVoice.guild.id,
      },
      {
        id : user.id,
        allow : ['CONNECT', 'MANAGE_CHANNELS', 'SPEAK', 'STREAM']
      }
    ]
  }).then(userChannel => {
    user.voice.setChannel(userChannel.id)
    user.send(`**Sucessflly create a private channel ${userChannel}**`)
  })
  let channelC = newVoice.guild.channels.cache.find(Channel => Channel.id === channel);
  channelC.updateOverwrite(user.id , 
    {
      CONNECT:true,
      VIEW_CHANNEL:true
    }
  )
} else if(!newVoice.channel){
  if(oldVoice.channel && oldVoice.guild.channels.cache.find(Channel => Channel.name === user.user.username)){
    oldVoice.channel.delete();
    let channelC = newVoice.guild.channels.cache.find(Channel => Channel.id === channel);
    channelC.updateOverwrite(user.id , 
      {
        CONNECT:true,
        VIEW_CHANNEL:true
      }
    )
    user.send(`**Sucessflly delete the private channel**`)
  }
}
})


Client.on("message", async message => {
    if (message.author.Client) return;
    if (message.channel.type === "dm") {
        const dmEmbed = new Discord.MessageEmbed()
            .setTitle('New DM')
            .setColor("RANDOM")
            .setTimestamp()
            .setDescription(`**User:** ${message.author.tag}\n**User ID:** ${message.author.id}\n**At:** ${new Date()}\n\n**Content:** \`\`\`${message.content}\`\`\``)

        const DMC = Client.channels.cache.get('826931151875604491')
        DMC.send(dmEmbed)
    }


    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1)

    let commands = Client.commands.get(cmd.slice(prefix.length)) || Client.commands.get(Client.aliases.get(cmd.slice(prefix.length)));

    if (commands) {
        let commandFetch = db.fetch(`commandToggle_${message.guild.id}`)
        if(commandFetch == null) commandFetch = []
        if(commandFetch.includes(commands.help.name)) return message.channel.send(
            new Discord.MessageEmbed()
            .setDescription("This command is off")
            .setColor("RED")
        )
        commands.run(Client, message, args, prefix)
    }


    var array = ["كول خرلى","كول زق"];
    if(array.some(w => `${message.content.toLowerCase()}`.includes(`${w}`))) {
        message.delete()
        message.channel.send(`${message.author} you are not allowed to talk with this word in the server`)
    }


    let data2;
    try {
        data2 = await AFK.findOne({
            userId: message.author.id,
            guildId: message.guild.id
        })
        if(!data2) {
            data2 = await AFK.create({
                userId: message.author.id,
                guildId: message.guild.id
            })
        }
    } catch (error) {
        console.log(error)
    }

    if(data2.AFK === true) {
        data2.AFK_Reason = null
        data2.AFK = false
        message.channel.send("you ain't afk anymore")
        await data2.save()
    }

    if(message.mentions.members.first()) {
        let data3;
        try {
            data3 = await AFK.findOne({
                userId: message.mentions.members.first().id,
                guildId: message.guild.id
            })
            if(!data3) {
                data3 = await AFK.create({
                    userId: message.mentions.members.first().id,
                    guildId: message.guild.id
                })
            }
        } catch (error) {
            console.log(error)
        }

        if(data3.AFK == true) {
            message.channel.send(`${message.mentions.members.first().user.tag}: ${data3.AFK_Reason || "No Reason"}`)
        }
    }



    if(message.content.startsWith(`${prefix}snipe`)) {
        if(!message.member.hasPermission("ADMINISTRATOR")) return
        let sniped = snipes.get(message.channel.id)
        if(!sniped) return message.channel.send('there is nothing that got deleted')

        const snipeEmbed = new Discord.MessageEmbed()
        .setAuthor(`Message By ${sniped.author.tag}`, sniped.author.displayAvatarURL())
        .setColor("RANDOM")
        .setDescription(sniped.content)
        message.channel.send(snipeEmbed)
    }

    if(message.content.startsWith(`${prefix}d saos1-1`)) {
       message.reply("Please check your dm").then(message.author.send("you can download Ep 1 from: https://uptobox.com/etylbua7ub85"))
    } else {
        if(message.content.startsWith(`${prefix}d saos1-2`)) {
           message.reply("please check you dm").then(message.author.send("you can download Ep 2 from: https://uptobox.com/ervh3fodm0bm"))
        } else {
            if(message.content.startsWith(`${prefix}d saos1-3`)) {
                message.reply("Please check your dm").then(message.author.send("you can download Ep 3 from: https://uptobox.com/1zk01kejfxfe"))
            } else {
                if(message.content.startsWith(`${prefix}d saos1-4`)) {
                    message.reply("Please chech your dm").then(message.author.send("you can download Ep 4 from: https://uptobox.com/b59nvhdj9dom"))
                } else {
                    if(message.content.startsWith(`${prefix}d saos1-5`)) {
                        message.reply("Please check your dm").then(message.author.send("you can download Ep 5 from: https://uptobox.com/6b46z2slr1ek"))
                    } else {
                        if(message.content.startsWith(`${prefix}d saos1-6`)) {
                            message.reply("Please check your dm.").then(message.author.send("You can download Ep 6 from: https://uptobox.com/s1jz7qdodu4n"))
                        } else {
                            if(message.content.startsWith(`${prefix}d saos1-7`)) {
                                message.reply("Please check your dm").then(message.author.send("You can download Ep 7 from: https://uptobox.com/ek6jdnto3how"))
                            } else {
                                if(message.content.startsWith(`${prefix}d saos1-8`)) {
                                    message.reply("Please check your dm").then(message.author.send("You can download Ep 8 from : https://uptobox.com/1aredi951g6w"))
                                } else {
                                    if(message.content.startsWith(`${prefix}d saos1-9`)) {
                                        message.reply("please check your dm").then(message.author.send("You can download Ep 9 from: https://uptobox.com/1yqv6imribvp"))
                                    } else {
                                        if(message.content.startsWith(`${prefix}d saos1-10`)) {
                                           message.reply("Please check your dm").then(message.author.send("You can download Ep 10 from: https://uptobox.com/09qo952bz5pi"))
                                        } else {
                                            if(message.content.startsWith(`${prefix}d saos1-11`)) {
                                                message.reply("Please check your dm").then(message.author.send("You can download Ep 11 from: https://uptobox.com/88lvkh3ji60c"))
                                            } else {
                                                if(message.content.startsWith(`${prefix}d saos1-12`)) {
                                                    message.reply("Please check your dm").then(message.channel.send("You can download Ep 12 from: https://uptobox.com/b86lohoy3jf6"))
                                                } else {
                                                    if(message.content.startsWith(`${prefix}d saos1-13`)) {
                                                        message.reply("Please check your dm").then(message.author.send("you can download Ep 13 from: https://uptobox.com/lilljoi5i4co"))
                                                    } else {
                                                        if(message.content.startsWith(`${prefix}d saos1-14`)) {
                                                            message.reply("Please check your dm").then(message.author.send("You can download Ep 14 from: https://uptobox.com/opg50zxv29zp"))
                                                        } else {
                                                            if(message.content.startsWith(`${prefix}d saos1-15`)) {
                                                                message.reply("Please check your dm").then(message.author.send("You can download Ep 15 from: https://uptobox.com/nzlju51ttp3i"))
                                                            } else {
                                                                if(message.content.startsWith(`${prefix}d saos1-16`)) {
                                                                    message.reply("please check your dm").then(message.author.send("you can download Ep 16 from: https://uptobox.com/b8fiqsam40ny"))
                                                                } else {
                                                                    if(message.content.startsWith(`${prefix}d saos1-17`)) {
                                                                        message.reply("Please check your dm").then(message.author.send("you can download Ep 17 from: https://uptobox.com/dq2vtc6cpt39"))
                                                                    } else {
                                                                        if(message.content.startsWith(`${prefix}d saos1-18`)) {
                                                                            message.reply("Please check your dm").then(message.author.send("you can download Ep 18 from: https://uptobox.com/jhcexkgxxww0"))
                                                                        } else {
                                                                            if(message.content.startsWith(`${prefix}d saos1-19`)) {
                                                                                message.reply("Please check your dm").then(message.author.send("You can download Ep 19 from: https://uptobox.com/xwot6ujim9h8"))
                                                                            } else {
                                                                                if(message.content.startsWith(`${prefix}d saos1-20`)) {
                                                                                    message.reply("Please check your dm").then(message.author.send("You can download Ep 20 from: https://uptobox.com/uzldab7ibyne"))
                                                                                } else {
                                                                                    if(message.content.startsWith(`${prefix}d saos1-21`)) {
                                                                                        message.reply("Please check your dm").then(message.author.send("you can download Ep 21 from: https://uptobox.com/roz58bdamdn2"))
                                                                                    } else {
                                                                                        if(message.content.startsWith(`${prefix}d saos1-22`)) {
                                                                                            message.reply("Please check your dm").then(message.author.send("You can download Ep 22 from: https://uptobox.com/7o7sjlhbad5n"))
                                                                                        } else {
                                                                                            if(message.content.startsWith(`${prefix}d saos1-23`)) {
                                                                                                message.reply("Please check your dm").then(message.author.send("You can download Ep 23 from: https://uptobox.com/pl85xl3ipmm8"))
                                                                                            } else {
                                                                                                if(message.content.startsWith(`${prefix}d saos1-24`)) {
                                                                                                    message.reply("Please check your dm").then(message.author.send("You can download Ep 24 from: https://uptobox.com/4zq0arc4uzbv"))
                                                                                                } else {
                                                                                                    if(message.content.startsWith(`${prefix}d saos1-25`)) {
                                                                                                        message.reply("Please check your dm").then(message.author.send("You can download Ep 25 from: https://uptobox.com/agj1gt5fp3lh"))
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }    
                                            }    
                                        }    
                                    }    
                                }    
                            }    
                        }
                    }
                }
            }
        }
    }


    if(message.content.startsWith(`${prefix}d saos2-1`)) {
        message.reply("Please check your dm").then(message.author.send("You can download saos2 Ep 1 from: https://uptobox.com/d26rfxzjfcy8"))
    } else {
        if(message.content.startsWith(`${prefix}d saos2-2`)) {
            message.reply("Please check your dm").then(message.author.send("You can download soas2 Ep 2 from: https://uptobox.com/z9vlwb0klzz9"))
        } else {
            if(message.content.startsWith(`${prefix}d saos2-3`)) {
                message.reply("Please check your dm").then(message.author.send("You can download saos2 Ep 3 from: https://uptobox.com/8unb7phm6w0c"))
            } else {
                if(message.content.startsWith(`${prefix}d saos2-4`)) {
                    message.reply("Please check your dm").then(message.author.send("You can download saos2 Ep 4 from: https://uptobox.com/e8pvz0korwdi"))
                } else {
                    if(message.content.startsWith(`${prefix}d saos2-5`)) {
                        message.reply("Please check your dm").then(message.author.send("You can download saos2 Ep 5 from: https://uptobox.com/y6aiqa7nth7m"))
                    } else {
                        if(message.content.startsWith(`${prefix}d saos2-6`)) {
                            message.reply("Please check your dm").then(message.author.send("You can download saos2 Ep 6 from: https://uptobox.com/2thdqduoe15g"))
                        } else {
                            if(message.content.startsWith(`${prefix}d saos2-7`)) {
                                message.reply("Please check your dm").then(message.author.send("You can download saos2 Ep 7 from: https://uptobox.com/yhte5nbsck0m"))
                            } else {
                                if(message.content.startsWith(`${prefix}d saos2-8`)) {
                                    message.reply("Please check your dm").then(message.author.send("You can download saos2 Ep 8 from: https://uptobox.com/zcxtshdgw564"))
                                } else {
                                    if(message.content.startsWith(`${prefix}d saos2-9`)) {
                                        message.reply("Please check your dm").then(message.author.send("You can download saos2 Ep 9 from: https://uptobox.com/7ia7ufw8miw8"))
                                    } else {
                                        if(message.content.startsWith(`${prefix}d saos2-10`)) {
                                            message.reply("Please check your dm").then(message.author.send("You can download saos2 Ep 10 from: https://uptobox.com/22x23wxh06b8"))
                                        } else {
                                            if(message.content.startsWith(`${prefix}d saos2-11`)) {
                                                message.reply("Please check your dm").then(message.author.send("You can download saos2 Ep 11 from: https://uptobox.com/fsbnqokfnw9v"))
                                            } else {
                                                if(message.content.startsWith(`${prefix}d saos2-12`)) {
                                                    message.reply("Please check your dm").then(message.author.send("You can download saos2 Ep 12 from: https://uptobox.com/bjmtu18p8ewp"))
                                                } else {
                                                    if(message.content.startsWith(`${prefix}d saos2-13`)) {
                                                        message.reply("Please check your dm").then(message.author.send("you can download saos2 Ep 13 from: https://uptobox.com/uk01pqxyjm0d"))
                                                    } else {
                                                        if(message.content.startsWith(`${prefix}d saos2-14`)) {
                                                            message.reply("Please check your dm").then(message.author.send("You can download saos2 Ep 14 from: https://uptobox.com/xme0ctk9ox4k"))
                                                        } else {
                                                            if(message.content.startsWith(`${prefix}d saos2-15`)) {
                                                                message.reply("Please check your dm").then(message.author.send("You can download saos2 Ep 15 from: https://uptobox.com/0hgpi7u7tl5q"))
                                                            } else {
                                                                if(message.content.startsWith(`${prefix}d saos2-16`)) {
                                                                    message.reply("Please check your dm").then(message.author.send("You can download saos2 Ep 16 form: https://uptobox.com/f5gmomoi04vn"))
                                                                } else {
                                                                    if(message.content.startsWith(`${prefix}d saos2-17`)) {
                                                                        message.reply("Please check your dm").then(message.author.send("You can download saos2 Ep 17 from: https://uptobox.com/j6h81zzvo2gf"))
                                                                    } else {
                                                                        if(message.content.startsWith(`${prefix}d saos2-18`)) {
                                                                            message.reply("Please check your dm").then(message.author.send("You can download saos2 Ep 18 from: https://uptobox.com/74bxuzanf0so"))
                                                                        } else {
                                                                            if(message.content.startsWith(`${prefix}d saos2-19`)) {
                                                                                message.reply("Please check your dm").then(message.author.send("You can download saos2 Ep 19 from: https://uptobox.com/syy6bqmk10q1"))
                                                                            } else {
                                                                                if(message.content.startsWith(`${prefix}d saos2-20`)) {
                                                                                    message.reply("Please check your dm").then(message.author.send("You can download saos2 Ep 20 from: https://uptobox.com/plpkdfi02zfi"))
                                                                                } else {
                                                                                    if(message.content.startsWith(`${prefix}d saos2-21`)) {
                                                                                        message.reply("Please check your dm").then(message.author.send("You can download saos2 Ep 21 from: https://uptobox.com/h1wow3z1dknw"))
                                                                                    } else {
                                                                                        if(message.content.startsWith(`${prefix}d saos2-22`)) {
                                                                                            message.reply("Please check your dm").then(message.author.send("You can download saos2 Ep 22 from: https://uptobox.com/r3677zvf4xss"))
                                                                                        } else {
                                                                                            if(message.content.startsWith(`${prefix}d saos2-23`)) {
                                                                                                message.reply("Please check your dm").then(message.author.send("You can download saos2 Ep 23 from: https://uptobox.com/w6b9go34x0lu"))
                                                                                            } else {
                                                                                                if(message.content.startsWith(`${prefix}d saos2-24`)) {
                                                                                                    message.reply("Please check your dm").then(message.author.send("You can download saos2 Ep 24 from: https://uptobox.com/wombv8j8fzum"))
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }




    if (map.has(message.author.id)) {
        if(message.author.bot) return
        const data = map.get(message.author.id)
        const {
            lastmsg,
            timer
        } = data;
        const diff = message.createdTimestamp - lastmsg.createdTimestamp;
        let msgs = data.msgs
        if (diff > 2000) {
            clearTimeout(timer);
            data.msgs = 1;
            data.lastmsg = message;
            data.timer = setTimeout(() => {
                map.delete(message.author.id);
            }, 5000)
            map.set(message.author.id, data)
        } else {
            ++msgs;
            if (parseInt(msgs) === 5) {
                const muteRole = message.guild.roles.cache.get('826931055722233917')
                message.member.roles.add(muteRole.id)
                message.channel.send(`Muted ${message.author}, for spamming if something wrong happen please contact a staff or contact Dana`)
                setTimeout(() => {
                    message.member.roles.remove(muteRole.id)
                    message.channel.send(`Unmuted ${message.author}`)
                }, 900000)
            } else {
                data.msgs = msgs;
                map.set(message.author.id, data)
            }
        }
    } else {
        let remove = setTimeout(() => {
            map.delete(message.author.id);
        }, 5000)
        map.set(message.author.id, {
            msgs: 1,
            lastmsg: message,
            timer: remove
        })
    }

    if (message.mentions.users.size >= 3) {
        message.delete()
        return message.reply('you are not allowed to mass mention in the server')
    }

    const InviteLinks = ['discord.gg/', 'discord.com/invite/', 'discordapp.com/invite/']

    if(InviteLinks.some(link => message.content.toLowerCase().includes(link))) {
        if(message.content.startsWith('discord.gg/GHR')) return
        const UserCode = message.content.split('discord.gg/' || 'discord.com/invite/' || 'discordapp.com/invite/')[1]
        message.guild.fetchInvites().then(invites => {
            let InviteArray = []
            for (let inviteCode of invites) {
                InviteArray.push(inviteCode[0])
            }
            if(!InviteArray.includes(UserCode)) {
                message.delete()
                return message.channel.send(`${message.author} You are not allowed to send another server invite, if you send an invite link two time you well be banned`)
            }
        })

    }

    if (message.channel.id != '826931084297371748') return;
    if(message.author.id === Client.user.id) return;
        if (message.author.send) {
      message.channel.send("https://cdn.discordapp.com/attachments/795770578392449034/853257262629912576/New_Project_2_31E31E1.gif");
   
    }


 


});

Client.login(config.token);