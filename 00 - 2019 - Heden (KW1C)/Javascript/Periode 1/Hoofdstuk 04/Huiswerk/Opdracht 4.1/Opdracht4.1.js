/*
    Opdracht:       Opdracht 4.1
    Auteur:         David Siqueira Klein Velderman
    Aanmaakdatum:   25/09/19 + 16:51
    Bestandsnaam:   opdracht4.1.js
*/
/* 
    Stap 1: 
    Vullen van de variabelen met data. 
    Let op het correcte gebruik van Datatypes 
*/
 
var name = "David";// String
var residence = "Oisterwijk";// String
var age = 20;// Integer
var currClass = "IO1A4"; // String
var travelTime = 1.0; // Integer (decimaal)
var driversLicence = true; // Boolean
var currentWork = "student aan huis";//String
var currentHourlyWage = 11;// Integer (decimaal)
 
// Zelf toevoegen: Hobby (string), Relatie (boolean), Huisnummer (getal)
var hobby = "zingen";
var relationship = false;
var housenr = 75;
 
/* 
    Stap 2: 
    Maken van de teksten door middel van variabelen met Strings
*/
 
var text1 = `Mijn naam is ${name}, woon in ${residence} en ik ben ${age} jaar oud.`;
var text2 = `Ik zit in klas ${currClass} en moet ${travelTime} uur reizen om op school te komen.`;
var text3 = `Ik ${(driversLicence ? "beschik" : "beschik niet")} over een rijbewijs. Ik werk nu als ${currentWork} en krijg ${currentHourlyWage} euro per uur betaald.`;
var text4 = `Mijn grootste hobby is ${hobby}, en ik ${(relationship ? "zit" : "zit niet")} in een relatie.`;
var text5 = `Ik woon overigens op nummer ${housenr}.`;
 
/*
    Stap 3:
    Tonen van de teksten aan de gebruiker.
    De eerste 3 teksten via window.alert()
    De 4 & 5 tekst via document.write()
*/

alert(text1);
alert(text2);
alert(text3);

document.write("<h1>Nog iets meer over mezelf</h1>");
document.write(`<p>${text4}</p>`);
document.write(`<p>${text5}`);