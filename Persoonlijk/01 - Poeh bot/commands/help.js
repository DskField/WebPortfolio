const { prefix } = require('../config.json');

module.exports = {
    name: 'help',
    alias: ['h', 'commands'],
    description: 'Geef alle commando\'s weer, of geef info op een specifiek commando.',
    usage: '[commandonaam]',
    guildOnly: true,
    adminOnly: false,
    execute(message, args) {
        const data = [];
        const { commands } = message.client;

        if (!args.length) {
            data.push('Hier is een lijst met mijn commando\'s:');
            data.push("\`" + commands.map(command => command.name).join(',\n') + "\`");
            data.push(`\nJe kunt ook \`:poeh: help [commandonaam]\` om info te krijgen over een specifiek commando!`);

            return message.author.send(data, { split: true })
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.reply('Ik heb je een DM gestuurd met mijn commando\'s!');
                })
                .catch(error => {
                    console.error(`Kon geen DM sturen naar ${message.author.tag}.\n`, error);
                    message.reply('ik kan je geen DM sturen! Kan het zijn dat je DMs uitstaan?');
                });
        }

        const name = args[0].toLowerCase();
        const command = commands.get(name);

        // Indien een foutief commando wordt genoemd
        if (!command) {
            return message.reply('dat commando is niet geldig!');
        }

        data.push(`**Naam:** ${command.name}`);
        if (command.alias) data.push(`**Alias(sen):** ${command.alias.join(', ')}`);
        if (command.description) data.push(`**Beschrijving:** ${command.description}`);
        if (command.usage) data.push(`**Gebruikswijze:** ${prefix}${command.name} ${command.usage}`);

        message.channel.send(data, { split: true });
    },
};