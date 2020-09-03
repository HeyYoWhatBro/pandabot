module.exports = (client) => {
  const channelId = '751139106142290020' 
  const targetChannelId = '751059828100694066' 

  client.on('guildMemberAdd', (member) => {
    const message = `Please welcome <@${
      member.id
    }> to the server! Please check out ${member.guild.channels.cache
      .get(targetChannelId)
      .toString()}`

    const channel = member.guild.channels.cache.get(channelId)
    channel.send(message)
  })
}
