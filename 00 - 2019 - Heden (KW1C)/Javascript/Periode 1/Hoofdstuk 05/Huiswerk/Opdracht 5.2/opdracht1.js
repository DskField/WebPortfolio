/*
Opdracht:       Opdracht 5.2
Auteur:         David Siqueira Klein Velderman
Aanmaakdatum:   3/10/19 + 14:51
Bestandsnaam:   opdracht1.js
*/

var lengthInCM = prompt("Vul je lengte in centimeters in.");

// Debugging purposes
alert(`Je vulde ${lengthInCM} centimeter in.`);

if (lengthInCM > 110) {
    alert("U mag deze attractie in.");
} else {
    alert("U mag deze attractie NIET in.")
}