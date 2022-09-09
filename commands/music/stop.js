module.exports = {
    name: 'stop',
    aliases: ['s'],
    category: 'Music',
    utilisation: '{prefix}stop',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - WHY THE **FUCK** ARE YOU TELLING ME TO STOP?! YOU'RE NOT EVEN IN A CHANNEL DUMBASS!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - YOU ARENT IN THE **FUCKING** CHANNEL MUSIC IS PLAYING IN!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - PLAY SOME **FUCKING** MUSIC BEFORE TELLING ME TO STOP !`);

        client.player.setRepeatMode(message, false);
        const success = client.player.stop(message);

        if (success) message.channel.send(`${client.emotes.success} - I **FUCKING** STOPPED THE MUSIC!`);
    },
};