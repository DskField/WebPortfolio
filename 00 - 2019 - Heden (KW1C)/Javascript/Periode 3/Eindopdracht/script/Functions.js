// Toon de textbox, inclusief headertekst en melding
function showTextBox(header, message)
{
    $("headerText").html(header);
    $("message").html(message);
    $("textbox").fadeIn(1000);
    setTimeout
    (
        function ()
        {
            $("textbox").fadeOut(1000);
        }
    ,textBoxFadeOutTime)
}

//
function startGame()
{
    $("player1").css('left','1%');
    $("player1").css('top','58%');
    $("startButton").fadeOut(500);
    //debugger;
    $("textbox").fadeIn(1000);
    setTimeout
    (
        function ()
        {
            $("textbox").fadeOut(1000);
        }
    ,textBoxFadeOutTime);
}

// Restart de game
function restartGame()
{
    $("textbox").fadeOut(1);
    $("headerText").html("Trainer Ron says:");
    $("message").html('Hello there stranger! This is KW1Cmon. <br>Our king "Willem I" is kidnapped. Save him by crossing the bridge over the water!');
    $("startButton").fadeIn(1);
}


