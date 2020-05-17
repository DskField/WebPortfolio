var teamNaam1 = "FC Orthen Links";
var teamNaam2 = "<tegenstander>";
var goalsTeam1 = 0;
var goalsTeam2 = 0;
var geleKaartenTeam1 = 0;
var geleKaartenTeam2 = 0;
var rodeKaartenTeam1 = 0;
var rodeKaartenTeam2 = 0;
var wisselsTeam1 = 0;
var wisselsTeam2 = 0;
var cornersTeam1 = 0;
var cornersTeam2 = 0;
var penaltiesTeam1 = 0;
var penaltiesTeam2 = 0;
var ingooienTeam1 = 0;
var ingooienTeam2 = 0;

function startTimer()
{
    startTijd = new Date().getTime();
    document.getElementById("wedstrijdTijd").innerHTML = "<h1> 45m 00s </h1>";

    setInterval( function() 
    {
        var distance = new Date().getTime() - startTijd;

        var minutes = 44-Math.floor( (distance % (1000 * 60 * 60) ) / (1000 * 60));
        if (minutes >= 0)
        {
            var seconds = 60 - Math.floor( (distance % (1000 * 60) ) / 1000);
            document.getElementById("wedstrijdTijd").innerHTML = "<h1>"+minutes + "m " + seconds + "s </h1>";
        }
        else
        {
            var seconds = Math.floor( (distance % (1000 * 60) ) / 1000);
            document.getElementById("wedstrijdTijd").innerHTML = "<h1 class='extraTime'>"+minutes + "m " + seconds + "s </h1>";
        }
    }, 1000);
}

// Verander naam team 1
function changeNaamTeam1()
{
    let tempNaam = prompt("Voer naam team 1 in.", "FC Orthen Links");
    if (tempNaam!=null)
    {
        teamNaam1 = tempNaam;
        document.getElementById("naamTeam1").innerHTML = "<h1>"+teamNaam1+"</h1>";
    }
}

// Verander naam team 1
function changeNaamTeam2()
{
    let tempNaam = prompt("Voer naam team 2 in.", "FC JAVASCRIPT");
    if (tempNaam != null)
    {
        teamNaam2 = tempNaam;
        document.getElementById("naamTeam2").innerHTML = "<h1>"+teamNaam2+"</h1>";
    }
}

// Voeg goal toe aan team 1
function addGoalTeam1()
{
    goalsTeam1++;
    document.getElementById("goalsTeam1").innerHTML = goalsTeam1;
}

// Haal goal weg bij team 1
function decGoalTeam1()
{
    if (goalsTeam1 > 0)
    {
        goalsTeam1--;
        document.getElementById("goalsTeam1").innerHTML = goalsTeam1;

    }
    return false;
}


// voeg Goals toe aan team 1
function addGoalTeam2()
{
    goalsTeam2++;
    document.getElementById("goalsTeam2").innerHTML = goalsTeam2;
}

// Haal goal weg bij team 1
function decGoalTeam2()
{
    if (goalsTeam2 > 0)
    {
        goalsTeam2--;
        document.getElementById("goalsTeam2").innerHTML = goalsTeam2;

    }
    return false;
}

// voeg GeleKaarten toe aan team1
function addGeleKaartTeam1()
{
    if (geleKaartenTeam1 < 11)
    {
        geleKaartenTeam1++;
        document.getElementById("geleKaartenTeam1").innerHTML = geleKaartenTeam1;
    }
}
// Haal gele kaart bij team 1 weg
function decGeleKaartTeam1()
{
    if (geleKaartenTeam1 > 0)
    {
        geleKaartenTeam1--;
        document.getElementById("geleKaartenTeam1").innerHTML = geleKaartenTeam1;

    }
    return false;
}

// voeg GeleKaarten toe aan team2
function addGeleKaartTeam2()
{
    if (geleKaartenTeam2 < 11)
    {
        geleKaartenTeam2++;
        document.getElementById("geleKaartenTeam2").innerHTML = geleKaartenTeam2;
    }
}

// Haal gele kaart bij team 2 weg
function decGeleKaartTeam2()
{
    if (geleKaartenTeam2 > 0)
    {
        geleKaartenTeam2--;
        document.getElementById("geleKaartenTeam2").innerHTML = geleKaartenTeam2;

    }
    
    // De return false gebruiken, opdat het contextmenu dan niet zichtbaar wordt
    return false;
}

// voeg RodeKaarten toe aan team1
function addRodeKaartTeam1()
{
    rodeKaartenTeam1++;
    document.getElementById("rodeKaartenTeam1").innerHTML = rodeKaartenTeam1;
}

// Haal rode kaart bij team 1 weg
function decRodeKaartTeam1()
{
    if (rodeKaartenTeam1 > 0)
    {
        rodeKaartenTeam1--;
        document.getElementById("rodeKaartenTeam1").innerHTML = rodeKaartenTeam1;

    }
    return false;
}

// voeg RodeKaarten toe aan team2
function addRodeKaartTeam2()
{
    rodeKaartenTeam2++;
    document.getElementById("rodeKaartenTeam2").innerHTML = rodeKaartenTeam2;
}

// Haal RodeKaarten bij team 2 weg
function decRodeKaartTeam2()
{
    if (rodeKaartenTeam2 > 0)
    {
        rodeKaartenTeam2--;
        document.getElementById("rodeKaartenTeam2").innerHTML = rodeKaartenTeam2;

    }
    return false;
}

// voeg Wissels toe aan team1
function addWisselTeam1()
{
    if (wisselsTeam1 < 3) {
        wisselsTeam1++;
        document.getElementById("wisselsTeam1").innerHTML = wisselsTeam1;
    } else {
        window.alert("Dit team heeft al het maximale aantal wissels!")
    }
}

// Haal wissel weg bij team1
function decWisselTeam1()
{
    if(wisselsTeam1 > 0)
    {
        wisselsTeam1--;
    }
    document.getElementById("wisselsTeam1").innerHTML = wisselsTeam1;
}

// voeg Wissels toe aan team2
function addWisselTeam2()
{
    if (wisselsTeam2 < 3) {
        wisselsTeam2++;
        document.getElementById("wisselsTeam2").innerHTML = wisselsTeam2;
    } else {
        window.alert("Dit team heeft al het maximale aantal wissels!")
    }
}

// Haal Wissels weg bij team1
function decWisselTeam2()
{
    if(wisselsTeam2 > 0)
    {
        wisselsTeam2--;
    }
    document.getElementById("wisselsTeam2").innerHTML = wisselsTeam2;
}

// voeg Corners toe aan team1
function addCornerTeam1()
{
    cornersTeam1++;
    document.getElementById("cornersTeam1").innerHTML = cornersTeam1;
}

// Verwijder Corner bij team1
function decCornerTeam1()
{
    if(cornersTeam1 > 0)
    {
        cornersTeam1--;
    }
    document.getElementById("cornersTeam1").innerHTML = cornersTeam1;
}


// voeg Corners toe aan team2
function addCornerTeam2()
{
    cornersTeam2++;
    document.getElementById("cornersTeam2").innerHTML = cornersTeam2;
}

// Verwijder Corner bij team2
function decCornerTeam2()
{
    if(cornersTeam2 > 0)
    {
        cornersTeam2--;
    }
    document.getElementById("cornersTeam2").innerHTML = cornersTeam2;
}

// voeg Penalties toe aan team1
function addPenaltyTeam1()
{
    penaltiesTeam1++;
    document.getElementById("penaltiesTeam1").innerHTML = penaltiesTeam1;
}

// Verwijder penalty bij team1
function decPenaltyTeam1()
{
    if(penaltiesTeam1 > 0)
    {
        penaltiesTeam1--;
    }
    document.getElementById("penaltiesTeam1").innerHTML = penaltiesTeam1;
}

// voeg Penalties toe aan team2
function addPenaltyTeam2()
{
    penaltiesTeam2++;
    document.getElementById("penaltiesTeam2").innerHTML = penaltiesTeam2;
}

// Verwijder penalty bij team2
function decPenaltyTeam2()
{
    if(penaltiesTeam2 > 0)
    {
        penaltiesTeam2--;
    }
    document.getElementById("penaltiesTeam2").innerHTML = penaltiesTeam2;
}

// voeg Ingooien toe aan team1
function addIngooienTeam1()
{
    ingooienTeam1++;
    document.getElementById("ingooienTeam1").innerHTML = ingooienTeam1;
}

// Verwijder Ingooien bij team1
function decIngooienTeam1()
{
    if(ingooienTeam1 > 0)
    {
        ingooienTeam1--;
    }
    document.getElementById("ingooienTeam1").innerHTML = ingooienTeam1;
}

// voeg Ingooien toe aan team2
function addIngooienTeam2()
{
    ingooienTeam2++;
    document.getElementById("ingooienTeam2").innerHTML = ingooienTeam2;
}

// Verwijder Ingooien bij team2
function decIngooienTeam2()
{
    if(ingooienTeam2 > 0)
    {
        ingooienTeam2--;
    }
    document.getElementById("ingooienTeam2").innerHTML = ingooienTeam2;
}


function resetClicked()
{
    teamNaam1 = "FC Orthen Links";
    teamNaam2 = "";    
    goalsTeam1 = 0;
    goalsTeam2 = 0;
    geleKaartenTeam1 = 0;
    geleKaartenTeam2 = 0;
    rodeKaartenTeam1 = 0;
    rodeKaartenTeam2 = 0;
    wisselsTeam1 = 0;
    wisselsTeam2 = 0;
    cornersTeam1 = 0;
    cornersTeam2 = 0;
    penaltiesTeam1 = 0;
    penaltiesTeam2 = 0;
    ingooienTeam1 = 0;
    ingooienTeam2 = 0;

    document.getElementById("naamTeam1").innerHTML = "<h1>"+teamNaam1+"</h1>";
    document.getElementById("naamTeam2").innerHTML = "<h1>"+teamNaam2+"</h1>";
    document.getElementById("goalsTeam1").innerHTML = 0;
    document.getElementById("goalsTeam2").innerHTML = 0;
    document.getElementById("geleKaartenTeam1").innerHTML = 0;
    document.getElementById("geleKaartenTeam2").innerHTML = 0;
    document.getElementById("rodeKaartenTeam1").innerHTML = 0;
    document.getElementById("rodeKaartenTeam2").innerHTML = 0;
    document.getElementById("wisselsTeam1").innerHTML = 0;
    document.getElementById("wisselsTeam2").innerHTML = 0;
    document.getElementById("cornersTeam1").innerHTML = 0;
    document.getElementById("cornersTeam2").innerHTML = 0;
    document.getElementById("penaltiesTeam1").innerHTML = 0;
    document.getElementById("penaltiesTeam2").innerHTML = 0;
    document.getElementById("ingooienTeam1").innerHTML = 0;
    document.getElementById("ingooienTeam2").innerHTML = 0;
}

