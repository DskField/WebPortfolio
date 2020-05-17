module.exports = {
    name: 'admin',
    description: 'Restaureert admin-status van een stoner met modrechten.',
    adminOnly: true,
    guildOnly: true,

    execute(message) {

        let adminRole = message.guild.roles.find("name", "Stoners met modrechten");

        let admins = [
            "249985268075986955", // Ju
            "107599089905971200", // Alex
            "189716214795337729", // Mika
            "178979346298568704"  // Davi
        ];

        if (admins.includes(message.author.id)) {
            if (message.member.roles.has(adminRole.id)) {
                return message.channel.send(`Zeg jongen, je hebt die rol al!`);
            }

            message.channel.send(
                `Welkom terug, teringjong. Ik heb je gemist. *Denk ik.*`
            );
            message.member.addRole(adminRole).catch(console.error);
        }

    }
};