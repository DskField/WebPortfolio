// Imports
const Discord = require("discord.js");
console.log(require('dotenv').config());
const fs = require("fs");

// Discord client
const client = new Discord.Client();

// Environment variables definiëren
const config = {
    token: process.env.DISCORD_TOKEN,

    // Extra spatie omdat de environment file de spaties tijdens parsing weghaalt
    prefix: (process.env.PREFIX + ' '),

    mainchan : process.env.DEFAULT_CHANNEL,
    msgdelchan: process.env.MESSAGE_REMOVAL_CHANNEL,
    awardchan: process.env.AWARD_CHANNEL
};

// Collection datamap van commands
client.commands = new Discord.Collection();

// Filter alle bestanden voor commandhandler die niet javascript zijn
const commandFiles = fs
    .readdirSync('./commands')
    .filter(file => file.endsWith('.js'));

// Require commands voor command
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    // Zet command name attribuut binnen het commando als commandnaam
    client.commands.set(command.name, command);
}

// Gedrag voor zodra Poeh opstart
client.on("ready", () => {

    // Geeft aan dat hij succesvol aan is gegaan
    console.log(
        `${client.user.tag}, succesvol opgestart en gereed om te bakken. `
    );

    // Play status van bot user
    //client.user.setActivity(`with his SUPERIOUR supply of kush.`, { type: "PLAYING" });
    client.user.setActivity(`:poeh: help | Beta.`, { type: "PLAYING" }).catch(console.error);
});

// Wanneer een message gedelete wordt
client.on("messageDelete", messageDelete => {
    messageDelete.guild.channels
        .get(config.msgdelchan)
        .send(
            `${config.prefix} Het bericht: "${messageDelete.content}" door ${messageDelete.author.tag} was verwijderd.`
        );
});

// Gedrag wanneer een persoon de server betreedt
client.on("guildMemberAdd", member => {

    // Definiëert Stoner-rol en voegt hem toe aan lid
    let startRole = member.guild.roles.find("name", "Stoner");
    member.addRole(startRole).catch(console.error);

    // Stuurt welkomstbericht in generaal kanaal
    member.guild.channels
        .get(config.mainchan)
        .send(
            `Poeh, zucht, 
            ${member.user.username} 
            maakt nu deel uit van de stonercirkel. ***KUCH KUCH*** Geef deze persoon es een blunt ofzo.`
        )
        .catch(console.error);
});

// Zodra een member weggaat
client.on("guildMemberRemove", member => {
    member.guild.channels
        .get(config.mainchan)
        .send(
            `${config.prefix} 
            ${member} 
            is uit de junkcirkel gegaan. F`
        );
});

// Message triggers (commando respons)
client.on("message", async message => {

    // Reageert niet op andere bots
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    // Creëert argumenten na prefix d.m.v. array en maakt ze lowercase
    const args = message.content
        .slice(config.prefix.length)
        .split(/ +/);
    let commandName = args
        .shift()
        .toLowerCase();

    // Als Poeh getagd wordt
    if (message.isMentioned(client.user)) {
        await message.channel.send(`${config.prefix} Je oma dik.`);
    }

    // Definiëer adminperms
    let hasAdmin = message.member.hasPermission("ADMINISTRATOR");

    // Als command een cijfer is, pass het naar de 'rater'
    // Rater is de officiële naam voor het cijfersysteem van Poeh
    if (!isNaN(parseInt(commandName))){
        args[0] = commandName;
        commandName = "rater";
    }

    // Definiëer commando
    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.alias && cmd.alias.includes(commandName));

    // Return mits geen commando
    if (!command) {
        console.log('No command found!');
        return;
    }

    // Check of commando server-only is (en dus niet in DMs werkt)
    if (command.guildOnly && message.channel.type !== 'text') {
        return message.reply('Ik kan dat commando niet in DMs uitvoeren!');
    }

    // Check of commando alleen voor admins is
    if (command.adminOnly) {
        if (!hasAdmin) {
            return message.reply('Alleen stenigers met modrechten mogen dit commando uitvoeren!');
        }
    }

    // Check of het commando args nodig heeft
    if (command.args && !args.length) {
        let reply = `Je levert geen input voor dat commando, ${message.author}!`;

        if (command.usage) {
            reply += `\nDe correcte wijze van gebruik is: \n${config.prefix}${command.name} ${command.usage}`;
        }

        return message.channel.send(reply);
    }

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        await message.reply('ik kon dat commando niet uitvoeren!');
    }

});

//Log es in
client.login(config.token).catch(console.error);