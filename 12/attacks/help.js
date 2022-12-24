const Discord = require("discord.js");
const disbut = require('discord.js-buttons')


exports.run = async (client, message, args) => {
const host = args.join(" ").split(":").slice(0,1)
const port = message.content.split (":")[1]
const proxy = args.join(" ").slice(2)
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;
var version = ayarlar.versionbot;
var img = ayarlar.img;
var img = ayarlar.img;
if (message.channel.id != room) {
	return;
  }
console.log('Mevcut komutlar' +  message.guild.id)
const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setDescription(`**.attack <IP:port> <protocol> <method>** \n Minecraft sunucusunda bir bot saldırısı başlatın \n\n **.stop** \n Geçerli çalışan saldırınız durdurun \n\n **.methods** \n Mevcut tüm methodları gösterir \n\n **.protocols** \n Minecraft protocol sürümlerini gösterir \n\n **.resolver** \n Sunucu bilgilerini gösteriri.`)
	.setTitle('Mevcut komutlar')
 message.channel.send(embed);
 message.react('✅');
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0
}

exports.help = {
  name: 'help',
  description: 'Phương Pháp Tấn Công',
  usage: 'help'
}