// Aantal milliseconden pauze, waarna de textbox weer uit dient uit te faden
let textBoxFadeOutTime = 3000;

// Starten van de game
$("startButton").click( startGame );


$("homeBuilding").click
(
    function ()
    {
        showTextBox("Home", "Home sweet home!")
    }
);

$("administrationBuilding").click
(
    function ()
    {
        showTextBox("Administration", 'The place to be for your "I’m sick notes",or when you’ve lost your laptop adapter! Make sure these people are your friends')
    }
);

$("hardwareAOBuilding").click
(
    function ()
    {
        showTextBox("Hardware AO", 'This is the temple of the Hardware AO guru’s in this kingdom. You can repair and upgrade all your gear here.')
    }
);

$("cantineBuilding").click
(
    function ()
    {
        showTextBox("Cantine", 'The place to be for your refreshments. Here you can relay and restore your body to full power!')
    }
);

$("railroadBuilding").click
(
    function ()
    {
        showTextBox("Railroad", 'The train to your destination is delayed for several hours. Please resque our king before departure!')
    }
);

$("kidnappersBuilding").click
(
    function ()
    {
        showTextBox("Final station", 'The king is kidnapped here. So you need to go to this place to resque the king. This is the final station, for the final battle!')
    }
);

$("helpButton").mouseover
(
    function ()
    {
        $("headerText").html("How to play KW1Cmon:");
        $("message").html('KW1Cmon is a game made by students of the ICT-academy. The goal is to get the player to the red crown, just across the water! You can also click on some of the building. Find out yourself how to play the game!');
        $("textbox").fadeIn(1000);
    }
);

$("helpButton").mouseout
(
    function ()
    {
        $("textbox").fadeOut(1000);
    }
);

$("cheatTree").dblclick
(
    function ()
    {
        $("player1").css('top','2%').css('left','49%');
        showTextBox("Yeahaaaa!", 'You have resqued the king! Good job.');
        setTimeout(restartGame,textBoxFadeOutTime+1500);
    }
    
);

$(window).resize
(
    function() 
    {
        showTextBox("Game over!", 'You have resized your window. This is not allowed. This means game over.');
        
        // Wacht de standaardtijd + 1500 extra milliseconden om de game te restarten (via gameRestart())
        setTimeout(restartGame,textBoxFadeOutTime+1500);
    }
);

// On keydown wordt er bepaald welke kant de <player1> op loopt
$(document).keydown
(
    function(e) 
    {
        // Lees de huidige left en top positie uit van <player1>
        let playerLeft = $("player1").position().left;
        let playerTop = $("player1").position().top;

        // Bepalen van de nieuwe positie van <player1>. 
        // We houden ook rekening met de breedte van het scherm, zodat hij niet uit het speelveld kan lopen
        switch(e.keyCode) 
        {
            case 32: // Spatiebalk
                $("player1").animate(
                    {
                        "top": playerTop -= 20
                    },
                    400,
                    function () {
                        $("player1").animate({
                            "top": playerTop += 20
                        },
                            400,
                        )
                    }
                );
                break;
            case 37: // left
                if (playerLeft >= 5) {
                    playerLeft -= 5;
                }
                    
                $("player1").css('left', playerLeft);
                break;
                
            case 38: // up
                if (playerTop >= 5) {
                    playerTop -= 5;
                }                    
                $("player1").css('top', playerTop);
                break;
                
            case 39: // right
                if (playerLeft < ($(window).width()-45)) {
                    playerLeft += 5;
                }
                    
                $("player1").css('left', playerLeft);
                break;

            case 40: // down
                if (playerTop < ($(window).height()-45)) {
                    playerTop += 5;
                }
                $("player1").css('top', playerTop);
                break;

            // Zelf toegevoegde case voor de fireball
            case 69: // "E"
                $("flame").css({
                    "top":playerTop,
                    "left":playerLeft,
                    "display":"inline"
                })
                    .animate({ // Hadouken!
                            "left": playerLeft += 500
                        },
                        600,
                        "linear",
                        function () {
                            $(this).css("display", "none")
                        }
                    )
                ;
                break;

            default: 
                // Roep return aan om het keydown event te cancelen 
                return;
        }
    }
);

// Thanks, I'll take it from here

