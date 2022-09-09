module.exports = (client, message, track) => {
    message.channel.send(`${client.emotes.music} -Now **FUCKING** playing ${track.title} into the **FUCKING** channel- ${message.member.voice.channel.name} ...`);
};