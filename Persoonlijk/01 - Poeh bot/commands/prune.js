module.exports = {
    name: 'prune',
    alias: ['purge', 'clear'],
    description: 'Verwijdert een hoeveelheid berichten tussen de 2 en de 100.',
    args: true,
    usage: "<aantal>",
    guildOnly: true,
    adminOnly: true,

    execute(message, args) {
        const amount = parseInt(args[0]) + 1;
        message.channel.bulkDelete(amount).catch(console.error);
    },
};