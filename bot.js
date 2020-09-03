const Discord = require('discord.js');
const client = new Discord.Client();
const preifix = '&'
const fs = require('fs');

client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`)

  client.commands.set(command.name, command);

}
client.once('ready', () => {
  console.log('ready to online');
});
client.on('message', message =>{
  if(!message.content.startsWith(preifix) || message.author.bot) return;

  const args = message.content.slice(preifix.length).split(/ =/);
  const command = args.shift().toLowerCase();
  

  if(command === 'help')
  client.commands.get('help').execute(message, args)
  



});

client.on("guildMemberAdd", member =>{
  
  
  let memberlog = "751139106142290020";

  if (member.guild.id !== "751139106142290020") return;
  
  client.channels.cache.get(memberlog).send(`Welcome to the **${member.guild.name}**, <@!${member.user.id}> !!!`);
  member.roles.add("751121194673242112"); 
})

client.on("guildMemberRemove", member => {
  if (member.guild.id !== "751139106142290020") return;
  
  client.channels.cache.get(memberlog).send(`So long... **${member.user.tag}** ... :(`);
})
 
    const welcome = new Discord.MessageEmbed()

    .setTitle('selamat datang di otsuCraft Discord')
    .addFields(
      { name: 'Halo Nama saya pandabot', value: 'saya adalah bot dari pandabot', inline: false},
      { name: 'Untuk tau Command dari bot ini', value: 'Tulis &help', inline: false},
    )
    member.send(welcome);
  


  
      
});
client.login(process.env.discordtoken);
