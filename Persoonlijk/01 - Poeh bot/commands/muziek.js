module.exports = {
    name: 'muziek',
    description: 'Stuurt een Spotify-lijstje door.',
    execute(message) {
        message.channel.send(`${emote} Hier man, heb wat muziek:`);
        message.channel.send(
            `${emote} (Dit is nog work in progress, later komt hier een spotify-dingetje aan te hangen)`
        );
        message.channel.send(
            `${emote} https://open.spotify.com/user/117268883/playlist/569UGs1aurLec43wq6b5D5?si=TszF315eTVC2ZTo0e4TUqQ`
        );
    },
};