const Discord = require("discord.js")

module.exports = {
  name: "help",
  category: "commands",
  description: "help",
  usage: "help",
  

 execute(message, args){
    const embed = new Discord.MessageEmbed()
        .setTitle('Command Prefix &')
.addFields(
            { name: 'Command list', value: '&grup', inline: false},
            { name: '&liststaff', value: '&vote', inline: false},
            { name: 'Kosong', value: 'Kosong', inline: false},
            { name:  'Kosong', value: 'Kosong', inline: false}
        )
    message.member.send(embed); 
    
    const Kirim = new Discord.MessageEmbed()
    .setTitle('Pesan Dikirim di Dm Kamu')
    message.channel.send(Kirim);
 }
}
