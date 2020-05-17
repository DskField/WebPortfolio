module.exports = {
    name: 'mute',
    alias: ['hjb'],
    description: 'Mute een persoon.',
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
            roleMember.addRole(muteRole).catch(console.error);
            message.channel.send(
                `Zeg, hou je kop eens even dicht. *Sjemineetje..*`
            );
        } catch (error) {
            console.error(error);
            return message.channel.send(`Iets ging mis.`);
        }

    },
};