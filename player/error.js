module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`FUCK- There is no music being played on this server !`);
            break;
        case 'NotConnected':
            message.channel.send(`FUCK- You are not connected in any voice channel !`);
            break;
        case 'UnableToJoin':
            message.channel.send(`FUCK- I am not able to join your voice channel, please check my permissions !`);
            break;
        case 'VideoUnavailable':
            message.channel.send(`FUCK- ${args[0].title} is not available in your country! Skipping...`);
            break;
        case 'MusicStarting':
            message.channel.send(`GIVE ME A **GODDAMN FUCKING** SECOND WHILE I START THE MUSIC YOU **BITCH**!`);
            break;
        default:
            message.channel.send(`FUCK - I MIGHT HAVE DIED JUST NOW`);
    };
};
