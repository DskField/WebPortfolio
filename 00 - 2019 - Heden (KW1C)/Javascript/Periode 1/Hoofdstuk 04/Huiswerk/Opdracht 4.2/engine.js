/*
    Opdracht:           Opdracht 5.2 (Engine)
    Auteur:             R Spierings
    Datum + tijd:       27-09-2017 18:00
    Bestandsnaam:       engine.js
*/
var consoleLogAmountCorrect = 0;
var varsToCheck = {};

// Simple list of variables to check

function resetVarcheck(){
    this.varsToCheck = {
        city: [this.city, "string"],
        age: [this.age, "number"],
        lastname: [this.lastname, "string"],
        number1: [this.number1, "number"],
        number2: [this.number2, "number"],
        number3: [this.number3, "number"],
        number4: [this.number4, "number"],
        fruit1: [this.fruit1, "string"],
        fruit2: [this.fruit2, "string"],
        fruit3: [this.fruit3, "string"],
        readyWithAssignment: [this.readyWithAssignment, "boolean"],
        readyWithStudy: [this.readyWithStudy, "boolean"],
        calculation1: [this.calculation1, "number"],
        calculation2: [this.calculation2, "number"],
    };
}


// Simple array with console items to check
var consoleToCheck = [
    "1+2=3",
    "3*4=12",
    "appel+banaan=peer",
    "string",
    "number",
    "boolean",   
];

    
/*
    Main function for checking the variables
    @ICT Academie student: Als je dit leest, kom het me vertellen, dan trakteer ik op koffie of thee!
*/
function checkVars(){
    
    // Reset the vars
    resetVarcheck();
    
    oneFalse = false;
    // Loop through object (based on keys)
    Object.keys(this.varsToCheck).forEach(function(key, value) {
        value = this.varsToCheck[key];
        
        if(typeof(value[0]) != value[1]){
            oneFalse = true;
            debugger;
        }
        
    });
    
    if(oneFalse == false){
        document.getElementById("console").style.visibility = "";
        document.body.style.backgroundColor = "green";
        document.getElementById("variabelen").style.backgroundColor = "lightgreen";
        
        window.alert("Goed! Je mag door naar Stap 2");
    }
    else {
        document.body.style.backgroundColor = "red";
        window.alert("Helaas. Je hebt nog een fout gemaakt. Check de tabel in de opdracht heel goed. Let ook op het datatype");
    }
    
    
    // Wait 2 secoonds
    window.setTimeout(function(){
       document.body.style.backgroundColor = "WHITE";
    }, 2000 );
}

function checkConsole(){
       
    if(consoleLogAmountCorrect == 6){
        document.body.style.backgroundColor = "green";
        document.getElementById("console").style.backgroundColor = "lightgreen";
        window.alert("Goedzo! Klaar! Lever nu je opdracht in");
    }
    else {
        document.body.style.backgroundColor = "red";
        window.alert("Helaas. Je hebt nog een fout gemaakt. Check goed de voorbeeld output in de opdracht en het correcte gebruik van typeof()");
    }
    
    
    // Wait 2 secoonds
    window.setTimeout(function(){
       document.body.style.backgroundColor = "WHITE";
    }, 2000); 
}



/*
    Hook to the console.log event. My spy on the students!!
*/
(function() {
    var exLog = console.log;
    console.log = function(msg) {
        
        if(consoleToCheck.indexOf(msg) >= 0){
            consoleLogAmountCorrect++;    
        }
        
        exLog.apply(console, arguments);
        
    }
})()