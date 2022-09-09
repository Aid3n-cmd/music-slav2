module.exports = {
    name: 'filter',
    aliases: ['f'],
    category: 'Music',
    utilisation: '{prefix}f [filter name]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Get the **FUCK** in a **FUCKING** voice channel before telling me what to **FUCKING** do!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Get the **FUCK** on my level before telling me what to **FUCKING** do!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Play some **FUCKING** music before using a **FUCKING** filter!`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Tell me which **FUCKING** filter you want to **FUCKING** enable/disable!`);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`${client.emotes.error} - This **FUCKING** filter doesn't **FUCKING** exist, try **FUCKING** one of these: 8D, vibrato, pulsator...!`);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(`${client.emotes.music} - I'm **FUCKING** the filter to the music, please **FUCKING** wait... Note : the longer the **FUCKING** music is, the longer this will **FUCKING** take.`);
        else message.channel.send(`${client.emotes.music} - I'm **UNFUCKING** the filter on the **FUCKING** music, please **FUCKING** wait... Note : the longer the **FUCKING** music is, the longer this will **FUCKING** take.`);
    },
};