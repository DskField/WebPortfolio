module.exports = {
    name: 'kick',
    alias: ['kankerdikkelazerpiemelstraal'],
    description: 'Kickt een persoon.',
    usage: '<user tag>',
    args: true,
    adminOnly: true,
    guildOnly: true,

    execute(message, args) {
        let reason = args.slice(1).join(" ");
        let taggedUser = message.mentions.users.first();

        taggedUser
            .kick(reason)
            .then(member => {
                // Successmessage
                message.channel.send(
                    `${member} is uit de kring getrapt! Wat een loser.`
                );
            })
            .catch(() => {
                // Failmessage
                message.channel.send(
                    `Eargh, heargh, ugh, iets euh, ging mis!`
                );
            });
    },
};

