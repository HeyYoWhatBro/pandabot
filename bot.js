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
  const autoRole = member.guild.roles.get('751121194673242112');

  if(command === 'help')
  client.commands.get('help').execute(message, args)
  
  if (autoRole) return
  member.addRole(autoRole.id);

});

client.on("guildMemberAdd", member =>{
  const channelId = '751139106142290020'

  const targetChannelId = '751059828100694066'
const message = `Please welcome <@${

      member.id

    }> to the server! Please check out ${member.guild.channels.cache

      .get(targetChannelId)

      .toString()}`

    const channel = member.guild.channels.cache.get(channelId)
    channel.send(message)

  
    const welcome = new Discord.MessageEmbed()

    .setTitle('selamat datang di otsuCraft Discord')
    .addFields(
      { name: 'Halo Nama saya pandabot', value: 'saya adalah bot dari pandabot', inline: false},
      { name: 'Untuk tau Command dari bot ini', value: 'Tulis &help', inline: false},
    )
    member.send(welcome);
});
client.login(process.env.discordtoken);
