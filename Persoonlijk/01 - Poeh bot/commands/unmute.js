module.exports = {
    name: 'unmute',
    alias: ['bitezadasto'],
    description: 'Gooit mute van een persoon af.',
    args: true,
    usage: "<user tag>",
    guildOnly: true,
    adminOnly: true,

    execute(message) {

        // Bekhoudrole
        let muteRole = message.guild.roles.find(
            r => r.name.toLowerCase() === 'bekhoudrole'
        );
        let roleMember = message.mentions.members.first();

        try {
            roleMember.removeRole(muteRole).catch(console.error);
            message.channel.send(
                `${roleMember} is weer terug bij het oude, er kan weer geluid uit hun bek komen.`
            );
        } catch (error) {
            console.error(error);
            return message.channel.send(`Iets ging mis.`);
        }

    },
};