const Discord = require('discord.js');
const bot = new Discord.Client();


bot.login('NTQxMDYyODQyMTk2MDMzNTYy.DzZ_pQ.Ziy65pMJ9VMJBU-Inwif_xTuQlE');

const PREFIX = '!'


bot.on('ready', function() {
    console.log("Ok ! BOT Wel");
});


bot.on('message', message => {
        if(message.content == '!start') {
            message.channel.send('Début du live WEL !')
            message.member.voiceChannel.join().then(connection => {
            connection.playArbitraryInput('http://sv3.vestaradio.com/RadioVL');
            });
        }
});
