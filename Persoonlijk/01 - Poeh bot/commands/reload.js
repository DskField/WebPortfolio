module.exports = {
    name: 'reload',
    description: 'Herlaadt een commando.',
    usage: '<commandonaam>',
    adminOnly: true,
    guildOnly: true,
    execute(message, args) {

        if (!args.length) return message.channel.send(`Je hebt geen commando gegeven om te herladen, ${message.author}!`);
        const commandName = args[0].toLowerCase();
        const command = message.client.commands.get(commandName)
            || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        if (!command) return message.channel.send(`Er is geen commando met \`${commandName}\` als naam, ${message.author}!`);

        delete require.cache[require.resolve(`./${commandName}.js`)];

        try {
            const newCommand = require(`./${commandName}.js`);
            message.client.commands.set(newCommand.name, newCommand);

            message.channel.send(`Commando \`${commandName}\` succesvol herladen.`);
        } catch (error) {
            console.log(error);
            message.channel.send(`There was an error while reloading a command \`${commandName}\`:\n\`${error.message}\``);
        }

    },
};