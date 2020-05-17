/*
    Opdracht:       Opdracht 6.1
    Auteur:         R Spierings
    Aanmaakdatum:   06-11-2018
    Bestandsnaam:   script.js
*/

var container = document.getElementById("nameContainer");

// Test het script doormiddel van een alert
function testScript()
{
    alert("Het script werkt. Jipie!");
}

// Letter toevoegen aan de container
function addLetter(letter)
{
    // Nieuw span element aanmaken en letter toevoegen aan de SPAN
    var newSpan = document.createElement("SPAN");
    newSpan.innerHTML = letter;
        
    // Nieuwe span toevoegen aan de container
    container.appendChild(newSpan);
    
    // Nieuwe font vw berekenen en toevoegen aan de CSS
    container.style.fontSize = Math.round((100 / container.children.length)) + "vw";
}

// Alle letters verwijderen uit de container
function resetLetters()
{
    container.innerHTML = "";
}

// Geef de letters een kleur (HEX color), dus let op het #'je
function colorLetters(color)
{
    container.style.color = color;
}

