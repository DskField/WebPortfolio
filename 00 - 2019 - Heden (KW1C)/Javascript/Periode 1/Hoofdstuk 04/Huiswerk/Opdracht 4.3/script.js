/*
    Opdracht:       Opdracht 4.3
    Auteur:         David Siqueira Klein Velderman
    Aanmaakdatum:   29/09/19 + 15:39
    Bestandsnaam:   opdracht1.js
*/

// Taak 2
var word1 = "KW1C";
var word2 = "Bosschenaren";
var word3 = "Javascript";
var word4 = "Pruim";
var sentence1 = "Duizenden Catalanen demonstreren op stakingsdag na onrust rond referendum";
var sentence2 = "OM eist zes jaar cel tegen man die benzinestation Gouda inreed";
var sentence3 = "Lorem ipsum Klein Velderman dolor sit amet";
var sentence4 = "I am now level epic super David ... level plus!";

// Taak 3
alert(`Het woord ${word1} bevat ${word1.length} karakters.`);
alert(`Het woord ${word2} bevat ${word2.length} karakters.`);
alert(`Het woord ${word3} bevat ${word3.length} karakters.`);
alert(`Het woord ${word4} bevat ${word4.length} karakters.`);

// Taak 4
console.log(sentence1.toUpperCase());
console.log(sentence2.toLowerCase());

var upSenThree = sentence3.toUpperCase();
console.log(upSenThree);

var downSenFour = sentence4.toLowerCase();
console.log(downSenFour);

// Taak 5
document.write(`<p>Het karakter in woord1 op positie 0 is: ${word1.charAt(0)}</p>`);
document.write(`<p>Het karakter in zin1 op positie 8 is: ${sentence1.charAt(8)}</p>`);
document.write(`<p>Het karakter in zin2 op positie 10 is: ${sentence2.charAt(10)}</p>`);
document.write(`<p>Het karakter in zin3 op positie 25 is: ${sentence3.charAt(25)}</p>`);

// Taak 6
console.log(`Het woord "Klein Velderman" begint op positie: ${sentence3.indexOf("Klein Velderman")}`);
console.log(`De laatst verwerkte instantie van het woord "level" begint op positie: ${sentence4.lastIndexOf("level")}`);

// Taak 7
console.log(`Het woord "epic" in zin 4 is oprecht ${sentence4.substring(15, 19)}`);
console.log(`Mijn voornaam is in zin 4 geschreven, kijk maar: ${sentence4.substring(26, 31)}`);
console.log(`Mijn achternaam staat in zin 3, namelijk: ${sentence3.substring(12, 27)}`);

// Taak 8
console.log(`${sentence3.replace("Klein Velderman", "Groot Landschapvrouw")}`);
console.log(`${sentence1.replace("Catalanen", "Spanjaarden")}`);
console.log(`${sentence2.replace("zes", "tien")}`);