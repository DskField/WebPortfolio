let muppets = [
    'Kermit de Kikker',
    'Zweedse kok',
    'Fozzie Beer',
    'Statler en Waldorf'
];

muppets.pop();

muppets.push('Miss Piggy');

muppets.shift();

muppets.unshift('Gonzo');

// Verwijder 1 item vanaf de tweede positie
muppets.splice(2, 1);

muppets.push('Dr. Teeth');

// Stuur tweede en derde entry
console.log(`${muppets[1]} en ${muppets[2]}`);