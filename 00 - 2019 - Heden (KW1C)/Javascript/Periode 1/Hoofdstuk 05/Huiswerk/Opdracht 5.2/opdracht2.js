/*
Opdracht:       Opdracht 5.2
Auteur:         David Siqueira Klein Velderman
Aanmaakdatum:   3/10/19 + 14:51
Bestandsnaam:   opdracht2.js
*/

var lengthInCM = prompt("Vul je lengte in centimeters in.");

// Debugging purposes
alert(`Je vulde ${lengthInCM} centimeter in.`);

if (lengthInCM < 110) {
    alert("U mag deze attractie NIET in.");
} else if (lengthInCM >= 110 && lengthInCM < 120){
    alert("U mag deze attractie alleen met begeleiding in.");
} else {
    alert("Welkom in deze attractie.");
}